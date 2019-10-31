const functions = require('firebase-functions');
const admin = require('firebase-admin');
const config = functions.config().firebase;

try { admin.initializeApp(config, 'httpPassengerValidation') } catch (e) { console.log(e) }

exports = module.exports = functions.https.onRequest((request, context) => {
    
    const id = request.body.motoristaId;

    if (id !== undefined) {

        var promises = [];
        var result = false;

        promises.push(
            admin.database().ref('/Motorista').child(id)
                .once('value')
                .then(data => {
                    
                    if (data.exists()) {
                        
                        admin.database().ref('/Motorista').child(id).update({
                            status:'read'
                        });
                        result = true;
                    }
                })
        );
        Promise.all(promises).then(() => {
            console.log('executed', result);
            context.status(200).send(JSON.stringify({'result':result}));
        });
    }
    else {
        context.status(500);
    }
});