import fetch from "node-fetch";

const loadEduardourl = async () => {

    const options = {
        method: 'GET',
        // body: JSON.stringify({userName, password}),
        headers: {'Content-Type': 'application/json'}
    };

    const apiResponse = await fetch('http://34.69.103.167', options);
    // const apiResponse = await fetch('http://localhost:3000/eduardo', options);
    const testResponse = await apiResponse.text();

    return testResponse;
}

export default loadEduardourl;