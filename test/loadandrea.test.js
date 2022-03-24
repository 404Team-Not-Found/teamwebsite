import loadandreaurl from '../utils/loadandreaurl.mjs';
import assert from 'assert';


it("Tests Andrea URL Endpoint", async ()=>{
    const urlResponse= await loadandreaurl();
    assert.equal(urlResponse, "Hello Andrea");
});