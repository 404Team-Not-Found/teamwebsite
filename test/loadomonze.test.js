import loadomonzeurl from '../utils/loadomonze.mjs';
import assert from 'assert';


it("Tests Omonze URL Endpoint", async ()=>{

    const urlResponse = await loadomonzeurl();
    console.log("URL Response: ")+urlResponse;
    assert.equal(urlResponse, "Hello Omonze")
})