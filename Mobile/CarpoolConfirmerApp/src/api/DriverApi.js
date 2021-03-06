const server = 'https://us-central1-danilo-salvador.cloudfunctions.net/';

export default class DriverApi {

    static createDriver(dateTimeRequest) {

        const uri = server + 'httpDriverCreate';
        
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
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Não foi possível realizar a operação. Tente novamente.');
            });
    }

    static locationDriver(id, location) {

        const uri = server + 'httpDriverLocation';
        
        const requestInfo = {
            method: 'POST',
            body:JSON.stringify({
                'motoristaId':id,
                'location':{
                    'latitude':location.latitude,
                    'longitude':location.longitude
                }
            }),
            headers: new Headers({
                "Content-type": "application/json",
              })
        };
        
        return fetch(uri, requestInfo)
            .then(response => {
                
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Não foi possível realizar a operação. Tente novamente.');
            });
    }
}