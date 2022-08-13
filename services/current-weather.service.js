import { request } from "https";
export function getCurrentWeatherLatLong (latInput, longInput){ 
    const API_KEY = 'cc713270134b7c77db9754b3a35f5974ff1cef98f30a404992db2a50b12fa00a';
    const options = {
        "method": "GET",
        "hostname": "api.ambeedata.com",
        "port": null,
        "path": `/weather/latest/by-lat-lng?lat=${latInput}&lng=${longInput}`,
        "headers": {
            "x-api-key": API_KEY,
            "Content-type": "application/json"
        }
    };
    const req = request(options, function (res) {
        const chunks = [];
    
        res.on("data", function (chunk) {
            chunks.push(chunk);
        });
    
        res.on("end", function () {
            const body = Buffer.concat(chunks);
            console.log(body.toString());
        });``
    });
    req.end()
    }
    