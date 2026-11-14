import {test} from 'node:test';
import assert from 'node:assert/strict';
import {parseFeed,getFeeds} from '../server/feeds.js';

const source = {id:'test',label:'Test',provider:'Test',kind:'rss',feed:'https://example.com/feed',url:'https://example.com/updates'};
const rss = '<rss><channel><item><title>Model &amp; App</title><link>https://example.com/launch</link><pubDate>Sat, 14 Nov 2026 09:30:00 GMT</pubDate></item><item><title>Undated</title></item></channel></rss>';

test('RSS and Atom provide dated, safely linked release titles',()=>{
  assert.deepEqual(parseFeed(rss,source).map(({title,date})=>[title,date]),[['Model & App','2026-11-14']]);
  const atom = '<feed><entry><title>New model</title><link href="javascript:alert(1)"/><updated>2026-11-14T09:30:00Z</updated></entry></feed>';
  assert.equal(parseFeed(atom,source)[0].url,source.url);
});
test('Claude markdown supports the last dated section and strips markdown links',()=>{
  const doc = '## Updates\n### November 9, 2026\n* **New model** [docs](https://example.com)\n### November 5, 2026\n* Another model';
  assert.deepEqual(parseFeed(doc,{...source,kind:'claude'}).map(item=>item.title),['New model docs','Another model']);
});
test('one unavailable feed does not erase working feeds',async()=>{
  const result = await getFeeds([source,{...source,id:'unavailable',feed:'https://example.org/feed'}],async url=>
    url.includes('.org') ? new Response(null,{status:503}) : new Response(rss));
  assert.deepEqual(result.statuses,[{id:'test',ok:true},{id:'unavailable',ok:false}]);
  assert.equal(result.items.length,1);
});

test('general press feeds only include relevant entries',()=>{
  const feed = '<rss><channel><item><title>Neuer Laptop</title><pubDate>Sat, 14 Nov 2026 09:30:00 GMT</pubDate></item><item><title>Neue EU-Debatte</title><description>KI und Verbraucherschutz</description><pubDate>Sat, 14 Nov 2026 09:30:00 GMT</pubDate></item></channel></rss>';
  assert.deepEqual(parseFeed(feed,{...source,match:/\bKI\b/u,language:'de'}).map(({title,language})=>[title,language]),[['Neue EU-Debatte','de']]);
});

test('German editions, German originals and translated source links are distinguished',async()=>{
  const {germanSource} = await import('../app/radar-data.js');
  assert.equal(germanSource('https://support.claude.com/en/articles/12138966-release-notes').kind,'edition');
  assert.equal(germanSource('https://netzpolitik.org/test/').kind,'original');
  const original = 'https://x.ai/changelog/bot?q=1&sort=new';
  const translation = germanSource(original);
  assert.equal(translation.kind,'machine');
  assert.equal(new URL(translation.url).searchParams.get('u'),original);
  assert.equal(new URL(translation.url).searchParams.get('tl'),'de');
  assert.equal(germanSource('javascript:alert(1)'),null);
});
