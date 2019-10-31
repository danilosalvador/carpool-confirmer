const admin = require('firebase-admin');
const functions = require('firebase-functions');
const config = functions.config().firebase

try { admin.initializeApp(config, 'utilityLocation') } catch (e) { console.log(e) }

module.exports = {
    calculateDistance: (location1, location2, unit) => {

        if (location1 && location2) {
            var lat1 = location1.la;
            var lon1 = location1.lo;
            var lat2 = location2.la;
            var lon2 = location2.lo;
        
            if ((lat1 == lat2) && (lon1 == lon2)) {
                return 0;
            } else {
                var radlat1 = Math.PI * lat1/180;
                var radlat2 = Math.PI * lat2/180;
                var theta = lon1-lon2;
                var radtheta = Math.PI * theta/180;
                var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
                
                if (dist > 1) {
                    dist = 1;
                }
        
                dist = Math.acos(dist);
                dist = dist * 180/Math.PI;
                dist = dist * 60 * 1.1515;
                
                if (unit=="K") { dist = dist * 1.609344 }
                if (unit=="N") { dist = dist * 0.8684 }
                
                return dist >= 999 ? 999 : dist;
            }
        }
        return undefined;
    }
}