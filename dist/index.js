'use strict';

var _constants = require('./constants');

module.exports = {
  getGunMilanPoints: function getGunMilanPoints(girl, boy) {
    var varna = _constants.VARNA.points[_constants.VARNA.getClass(girl.moonsign)][_constants.VARNA.getClass(boy.moonsign)];
    var vasya = _constants.VASYA.points[_constants.VASYA.getGroup(girl.moonsign)][_constants.VASYA.getGroup(boy.moonsign)];
    var tara = _constants.TARA.points[_constants.TARA.getTaraGroup(girl.nakshatra)][_constants.TARA.getTaraGroup(boy.nakshatra)];
    var yoni = _constants.YONI.points[_constants.YONI.getAnimal(girl.nakshatra)][_constants.YONI.getAnimal(boy.nakshatra)];
    var grah = _constants.GRAH_MAITRI.points[_constants.GRAH_MAITRI.getSignLord(girl.moonsign)][_constants.GRAH_MAITRI.getSignLord(boy.moonsign)];
    var gana = _constants.GANA.points[_constants.GANA.getTemperament(girl.nakshatra)][_constants.GANA.getTemperament(boy.nakshatra)];
    var bhakoot = _constants.BHAKOOT.points[girl.moonsign - 1][boy.moonsign - 1];
    var nadi = _constants.NADI.points[_constants.NADI.getNadiGroup(girl.nakshatra)][_constants.NADI.getNadiGroup(boy.nakshatra)];

    return varna + vasya + tara + yoni + grah + gana + bhakoot + nadi;
  }
};