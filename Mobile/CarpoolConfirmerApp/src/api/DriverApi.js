const server = 'https://us-central1-danilo-salvador.cloudfunctions.net/';

export default class DriverApi {

    static createDriver(dateTimeRequest) {
        const uri = server + 'httpDriverCreate';
        //console.warn('server:' + server +'; uri: '+uri);
        const requestInfo = {
            method: 'POST',
            body:JSON.stringify({
                'DateTimeRequest':dateTimeRequest
            }),
            headers: new Headers({
                "Content-type": "application/json",
              })
        };
        return fetch(uri, requestInfo)
            .then(response => {
                if (response.ok)
                    return response.json();

                throw new Error('error: '+response[0]);
            });
    }
}