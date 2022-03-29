import assert from 'assert';
import loadMaddieUrl from '../utils/load-maddie-url.mjs'

it(`Testing load maddie url`, async () => {
    const urlresponse = await loadMaddieUrl();
    console.log('url response') + urlresponse;
    assert.equal(urlresponse, 'Hello Browser'); 
});