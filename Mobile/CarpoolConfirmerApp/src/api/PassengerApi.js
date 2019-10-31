const server = 'https://us-central1-danilo-salvador.cloudfunctions.net/';

export default class DriverApi {

    static validationDriver(motoristaId) {

        const uri = server + 'httpPassengerValidation';
        
        const requestInfo = {
            method: 'POST',
            body:JSON.stringify({
                'motoristaId':motoristaId
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

    static completedDriver(motoristaId, location) {

        const uri = server + 'httpPassengerCompleted';
        
        const requestInfo = {
            method: 'POST',
            body:JSON.stringify({
                'motoristaId':motoristaId,
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