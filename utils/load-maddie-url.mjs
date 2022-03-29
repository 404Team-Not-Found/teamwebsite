import fetch from "node-fetch";
const loadMaddieUrl = async () => {
    const options = {
        method: 'GET',
        header: {"content-type": "application/json"}
    };

    const apiresponse = await fetch('https://x.x.x.x', options);
    const testresponse = await apiresponse.text();
    return testresponse;

};

export default loadMaddieUrl;