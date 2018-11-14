import {VARNA, VASYA, TARA, YONI, GRAH_MAITRI, GANA, BHAKOOT, NADI} from './constants';
module.exports = {
  getGunMilanPoints: (girl, boy) => {
    let varna = VARNA.points[VARNA.getClass(girl.moonsign)][VARNA.getClass(boy.moonsign)];
    let vasya = VASYA.points[VASYA.getGroup(girl.moonsign)][VASYA.getGroup(boy.moonsign)];
    let tara = TARA.points[TARA.getTaraGroup(girl.nakshatra)][TARA.getTaraGroup(boy.nakshatra)];
    let yoni = YONI.points[YONI.getAnimal(girl.nakshatra)][YONI.getAnimal(boy.nakshatra)];
    let grah = GRAH_MAITRI.points[GRAH_MAITRI.getSignLord(girl.moonsign)][GRAH_MAITRI.getSignLord(boy.moonsign)];
    let gana = GANA.points[GANA.getTemperament(girl.nakshatra)][GANA.getTemperament(boy.nakshatra)];
    let bhakoot = BHAKOOT.points[girl.moonsign - 1][boy.moonsign - 1];
    let nadi = NADI.points[NADI.getNadiGroup(girl.nakshatra)][NADI.getNadiGroup(boy.nakshatra)];

    return varna + vasya + tara + yoni + grah + gana + bhakoot + nadi;
  }
};
