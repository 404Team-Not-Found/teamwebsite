import assert from 'assert';
import loadJaredUrl from '../utils/loadJaredUrl.mjs';

it("Test's Jared's URL Endpoint", async ()=>{

    const urlResponse = await loadJaredUrl();
    console.log("URL Response: ")+urlResponse;
    assert.equal(urlResponse, "Hello Jared");

});