import fetch from 'node-fetch';

const loadJaredUrl = async () => {
    const options = {
        method: 'GET',
        header: {'Content-Type':'application/json'}
    };

    // const apiResponse = await fetch('http://34.133.60.104', options);
    const apiResponse = await fetch('http://localhost:3000/jared', options);
    const testResponse = await apiResponse.text();

    return testResponse;

};

export default loadJaredUrl;