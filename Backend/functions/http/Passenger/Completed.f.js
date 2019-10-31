const functions = require('firebase-functions');
const admin = require('firebase-admin');
const config = functions.config().firebase;
const utilityLocation = require('../../utility/Location');

try { admin.initializeApp(config, 'httpPassengerCompleted') } catch (e) { console.log(e) }

exports = module.exports = functions.https.onRequest((request, context) => {
    
    const id = request.body.motoristaId;
    const location = request.body.location;

    if (id !== undefined) {

        var promises = [];
        var result = false;
        var distanceValue = 0;

        promises.push(
            admin.database().ref('/Motorista').child(id)
                .once('value')
                .then(data => {
                    
                    if (data.exists()) {
                        
                        const item = data.val();
                        distanceValue = utilityLocation.calculateDistance(item.driverLocation, location, 'K');
                        
                        admin.database().ref('/Motorista').child(id).update({
                            status:'completed',
                            passengerLocation:{
                                latitude:location.latitude,   
                                longitude:location.longitude,
                            },
                            distance:distanceValue
                        });
                        result = true;
                    }
                })
        );
        Promise.all(promises).then(() => {
            console.log('executed', result);
            context.status(200).send(JSON.stringify({'result':result,'distance':distanceValue}));
        });
    }
    else {
        context.status(500);
    }
});