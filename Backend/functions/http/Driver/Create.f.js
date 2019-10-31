const functions = require('firebase-functions');
const admin = require('firebase-admin');
const config = functions.config().firebase;

try { admin.initializeApp(config, 'httpDriverCreate') } catch (e) { console.log(e) }

exports = module.exports = functions.https.onRequest((request, context) => {
    
    const dateTimeRequest = request.body.DateTimeRequest;

    if (dateTimeRequest !== undefined) {
        
        let result = admin.database().ref('Motorista').push();
        
        result.set({
            'dateTimeRequest':dateTimeRequest,
            'status':'open'
        });
        
        context.status(200).send(JSON.stringify({'id':result.key}));
    }
    else {
        context.status(500);
    }
});