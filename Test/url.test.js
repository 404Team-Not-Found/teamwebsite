import assert from 'assert';
import loadEduardourl from '../utils/loadEduardourl.mjs';

it("Test url endpoint",async()=>{

const urlResponse= await loadEduardourl();
console.log("URL Response: ") + urlResponse;
assert.equal(urlResponse, "Hello Browser");

})