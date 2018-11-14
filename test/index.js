import assert from 'assert';
import ashtakoot from '../dist';
import {VARNA, VASYA, TARA, YONI, GRAH_MAITRI, GANA, BHAKOOT, NADI} from '../lib/constants';

describe('ashtakoot Gun milan - VARNA', function () {
  it('should get the correct varna score according to classes', function () {
    const male = {moonSign: 1};
    const female = {moonSign: 8};

    const output = VARNA.points[VARNA.getClass(male.moonSign)][VARNA.getClass(female.moonSign)];

    assert.deepEqual(output, 1);
  });

  it('should get the correct varna score according to classes', function () {
    const male = {moonSign: 6};
    const female = {moonSign: 11};

    const output = VARNA.points[VARNA.getClass(male.moonSign)][VARNA.getClass(female.moonSign)];

    assert.deepEqual(output, 0);
  });
});

describe('ashtakoot Gun milan - VASYA', function () {
  it('should get the correct vasya score according to classes', function () {
    const male = {moonSign: 1};
    const female = {moonSign: 8};

    const output = VASYA.points[VASYA.getGroup(female.moonSign)][VASYA.getGroup(male.moonSign)];

    assert.deepEqual(output, 1);
  });
  it('should get the correct vasya score according to classes', function () {
    const male = {moonSign: 7};
    const female = {moonSign: 12};

    const output = VASYA.points[VASYA.getGroup(female.moonSign)][VASYA.getGroup(male.moonSign)];

    assert.deepEqual(output, 0);
  });
});

describe('ashtakoot Gun milan - TARA', function () {
  it('should get the correct nakshatra for numbers below 10', function () {
    assert.deepEqual(TARA.getTaraGroup(1), 0);
    assert.deepEqual(TARA.getTaraGroup(5), 4);
  });
  it('should get the correct nakshatra for numbers below 19', function () {
    assert.deepEqual(TARA.getTaraGroup(12), 2);
    assert.deepEqual(TARA.getTaraGroup(16), 6);
  });
  it('should get the correct nakshatra for numbers below 27', function () {
    assert.deepEqual(TARA.getTaraGroup(21), 2);
    assert.deepEqual(TARA.getTaraGroup(27), 8);
  });
  it('should get the correct nakshatra for 19', function () {
    assert.deepEqual(TARA.getTaraGroup(19), 0);
  });

  it('should get the correct point for corresponding tara groups', function () {
    assert.deepEqual(TARA.points[TARA.getTaraGroup(1)][TARA.getTaraGroup(5)], 1.5);
  });

  it('should get the correct point for corresponding tara groups', function () {
    assert.deepEqual(TARA.points[TARA.getTaraGroup(12)][TARA.getTaraGroup(16)], 0);
  });

  it('should get the correct point for corresponding tara groups', function () {
    assert.deepEqual(TARA.points[TARA.getTaraGroup(21)][TARA.getTaraGroup(27)], 1.5);
  });

  it('should get the correct point for corresponding tara groups', function () {
    assert.deepEqual(TARA.points[TARA.getTaraGroup(19)][TARA.getTaraGroup(25)], 1.5);
  });
});

describe('ashtakoot Gun milan - YONI', function () {
  it('should get the correct animal group for numbers below 5', function () {
    assert.deepEqual(YONI.getAnimal(1), 0);
    assert.deepEqual(YONI.getAnimal(5), 3);
  });
  it('should get the correct animal group', function () {
    assert.deepEqual(YONI.getAnimal(17), 11);
    assert.deepEqual(YONI.getAnimal(26), 7);
  });
  it('should get the correct tara points', function () {
    assert.deepEqual(YONI.points[YONI.getAnimal(17)][YONI.getAnimal(26)], 2);
  });
});

describe('ashtakoot Gun milan - GRAHA MAITRI', function () {
  it('should get the correct sign lord', function () {
    assert.deepEqual(GRAH_MAITRI.getSignLord(5), 0);
    assert.deepEqual(GRAH_MAITRI.getSignLord(6), 3);
  });
  it('should get the correct points', function () {
    assert.deepEqual(GRAH_MAITRI.points[GRAH_MAITRI.getSignLord(5)][GRAH_MAITRI.getSignLord(6)], 4);
    assert.deepEqual(GRAH_MAITRI.points[GRAH_MAITRI.getSignLord(3)][GRAH_MAITRI.getSignLord(11)], 4);
  });
});

describe('ashtakoot Gun milan - GANA', function () {
  it('should get the correct temperament', function () {
    assert.deepEqual(GANA.getTemperament(15), 0);
    assert.deepEqual(GANA.getTemperament(21), 1);
    assert.deepEqual(GANA.getTemperament(24), 2);
  });
  it('should get the correct points', function () {
    assert.deepEqual(GANA.points[0][0], 6);
    assert.deepEqual(GANA.points[1][2], 3);
    assert.deepEqual(GANA.points[2][1], 0);
  });
});

describe('ashtakoot Gun milan - BHAKOOT', function () {
  it('should get the correct points for correct moon sign', function () {
    assert.deepEqual(BHAKOOT.points[0][0], 7);
    assert.deepEqual(BHAKOOT.points[0][1], 0);
    assert.deepEqual(BHAKOOT.points[0][2], 7);
    assert.deepEqual(BHAKOOT.points[0][3], 7);
  });
});

describe('ashtakoot Gun milan - NADI', function () {
  it('should get the correct nadi group for correct nakshatra', function () {
    assert.deepEqual(NADI.getNadiGroup(18), 0);
    assert.deepEqual(NADI.getNadiGroup(14), 1);
    assert.deepEqual(NADI.getNadiGroup(16), 2);
  });

  it('should get the correct points for correct nadi group', function () {
    assert.deepEqual(NADI.points[0][0], 0);
    assert.deepEqual(NADI.points[0][1], 8);
    assert.deepEqual(NADI.points[0][2], 8);
    assert.deepEqual(NADI.points[1][0], 8);
    assert.deepEqual(NADI.points[1][1], 0);
    assert.deepEqual(NADI.points[1][2], 8);
  });
});

describe('ashtakoot Gun milan - Overall', function () {
  it('should get the correct gun milan points', function () {
    const girl = {moonsign: 5, nakshatra: 15};
    const boy = {moonsign: 8, nakshatra: 24};
    assert.deepEqual(ashtakoot.getGunMilanPoints(girl, boy), 25);
  });
});
