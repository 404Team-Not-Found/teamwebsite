import fetch from 'node-fetch';

const loadandreaurl = async () =>{
    const options = {
        method: 'GET',
        headers: {'Content-Type':'application/json'}
    };

    const apiResponse = await fetch('http://34.123.26.95/andrea', options);
    const testResponse = await apiResponse.text();
    // console.log("LoginToken: "+loginResponse);
    return testResponse;
};

export default loadandreaurl;