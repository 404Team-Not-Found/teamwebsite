import fetch from "node-fetch";
const loadMaddieUrl = async () => {
    const options = {
        method: 'GET',
        header: {"content-type": "application/json"}
    };

    const apiresponse = await fetch('http://34.132.32.224', options);
    const testresponse = await apiresponse.text();
    return testresponse;

};

export default loadMaddieUrl;