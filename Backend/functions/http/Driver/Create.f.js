const functions = require('firebase-functions');
const admin = require('firebase-admin');
const config = functions.config().firebase;

try { admin.initializeApp(config, 'httpDriverCreate') } catch (e) { console.log(e) }

exports = module.exports = functions.https.onRequest((data, context) => {
    const dateTimeRequest = data.get('DateTimeRequest');
    let result = admin.database().ref('Motorista').push();
    result.set({
        'dateTimeRequest':dateTimeRequest === undefined ? 'sem data' : dateTimeRequest
    });
    context.status(200).send(result.key);
});