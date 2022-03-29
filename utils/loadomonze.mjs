import fetch from 'node-fetch';

const  loadurl = async () =>{

    const  options = {
        method:   'GET',
        headers:   {'Content-Type':'application/json'}
    };

    // const apiResponse = await fetch('http://34.71.251.65', options)
    const apiResponse = await fetch('http://34.71.251.65', options)
    const testResponse = await apiResponse.text();
    // console.log("LoginToken: "+loginResponse);
    return testResponse;

};

export default loadurl