export const VARNA = {
  getClass: function (moonsign) {
    if ([4, 8, 12].includes(moonsign)) {
      return 0;
    }
    if ([1, 5, 9].includes(moonsign)) {
      return 1;
    }
    if ([2, 6, 10].includes(moonsign)) {
      return 2;
    }
    return 3;
  },
  points: [[1, 0, 0, 0], [1, 1, 0, 0], [1, 1, 1, 0], [1, 1, 1, 1]]
};

export const VASYA = {
  getGroup: function (moonsign) {
    if ([3, 6, 7, 9, 11].includes(moonsign)) {
      return 0;
    }
    if (moonsign === 5) {
      return 1;
    }
    if ([1, 2, 10].includes(moonsign)) {
      return 2;
    }
    if ([4, 10, 12].includes(moonsign)) {
      return 3;
    }
    return 4;
  },

  points: [[2, 0.5, 1, 0, 2], [0.5, 2, 0, 0, 0], [1, 0, 2, 2, 2], [0, 0, 2, 2, 0], [1, 0, 1, 0, 2]]
};

export const TARA = {
  getTaraGroup: nakshatra => {
    if (nakshatra < 10) {
      return nakshatra - 1;
    } else if (nakshatra <= 18) {
      return Number.parseInt(nakshatra.toString().slice(-1), 10);
    } else if (nakshatra > 19) {
      return Number.parseInt(nakshatra.toString().slice(-1), 10) + 1;
    }
    return 0;
  },
  points: [
    [3, 3, 1.5, 3, 1.5, 3, 1.5, 3, 3],
    [3, 3, 1.5, 3, 1.5, 3, 1.5, 3, 3],
    [1.5, 1.5, 0, 1.5, 0, 1.5, 0, 1.5, 1.5],
    [3, 3, 1.5, 3, 1.5, 3, 1.5, 3, 3],
    [1.5, 1.5, 0, 1.5, 0, 1.5, 0, 1.5, 1.5],
    [3, 3, 1.5, 3, 1.5, 3, 1.5, 3, 3],
    [1.5, 1.5, 0, 1.5, 0, 1.5, 0, 1, 1],
    [3, 3, 1.5, 3, 1.5, 3, 1.5, 3, 3],
    [3, 3, 1.5, 3, 1.5, 3, 1.5, 3, 3]
  ]
};

export const YONI = {
  getAnimal: nakshatra => {
    const animalMappings = {
      1: 0,
      2: 1,
      3: 2,
      4: 3,
      5: 3,
      6: 4,
      7: 5,
      8: 2,
      9: 5,
      10: 6,
      11: 6,
      12: 7,
      13: 8,
      14: 9,
      15: 8,
      16: 9,
      17: 10,
      18: 10,
      19: 4,
      20: 11,
      21: 12,
      22: 11,
      23: 13,
      24: 0,
      25: 13,
      26: 7,
      27: 1,
      28: 12
    };

    return animalMappings[nakshatra];
  },
  points: [
    [4, 2, 2, 3, 2, 2, 2, 1, 0, 1, 1, 3, 2, 1],
    [2, 4, 3, 3, 2, 2, 2, 2, 3, 1, 2, 3, 2, 0],
    [2, 3, 4, 2, 1, 2, 1, 3, 3, 1, 2, 0, 3, 1],
    [3, 3, 2, 4, 2, 1, 1, 1, 1, 2, 2, 2, 0, 2],
    [2, 2, 1, 2, 4, 2, 1, 2, 2, 1, 0, 2, 1, 1],
    [2, 2, 2, 1, 2, 4, 0, 2, 2, 1, 3, 3, 2, 1],
    [2, 2, 1, 1, 1, 0, 4, 2, 2, 2, 2, 2, 1, 2],
    [1, 2, 3, 1, 2, 2, 2, 4, 3, 0, 3, 2, 2, 1],
    [0, 3, 3, 1, 2, 2, 2, 3, 4, 1, 2, 2, 2, 2],
    [1, 1, 1, 2, 1, 1, 2, 0, 1, 4, 1, 1, 2, 1],
    [1, 2, 2, 2, 0, 3, 2, 3, 2, 1, 4, 2, 2, 1],
    [3, 3, 0, 2, 2, 3, 2, 2, 2, 1, 2, 4, 3, 2],
    [2, 2, 3, 0, 1, 2, 1, 2, 2, 2, 2, 3, 4, 2],
    [1, 0, 1, 2, 1, 1, 2, 1, 2, 1, 1, 2, 2, 4]
  ]
};

export const GRAH_MAITRI = {
  getSignLord: moonsign => {
    const signLordMappings = {
      5: 0,
      4: 1,
      1: 2,
      8: 2,
      3: 3,
      6: 3,
      9: 4,
      12: 4,
      2: 5,
      7: 5,
      10: 6,
      11: 6
    };

    return signLordMappings[moonsign];
  },
  points: [
    [5, 5, 5, 4, 5, 0, 0],
    [5, 5, 4, 1, 4, 0.5, 0.5],
    [5, 4, 5, 0.5, 5, 3, 0.5],
    [4, 1, 0.5, 5, 0.5, 5, 4],
    [5, 4, 5, 0.5, 5, 0.5, 3],
    [0, 0.5, 3, 5, 0.5, 5, 5],
    [0, 0.5, 0.5, 4, 3, 5, 5]
  ]
};

export const GANA = {
  getTemperament: nakshatra => {
    if ([1, 5, 7, 8, 13, 15, 17, 22, 27].includes(nakshatra)) {
      return 0;
    } else if ([2, 4, 6, 11, 12, 20, 21, 25, 26].includes(nakshatra)) {
      return 1;
    }
    return 2;
  },
  points: [[6, 3, 1], [5, 6, 3], [0, 0, 6]]
};

export const BHAKOOT = {
  points: [
    [7, 0, 7, 7, 0, 0, 7, 0, 0, 7, 7, 0],
    [0, 7, 0, 7, 7, 0, 0, 7, 0, 0, 7, 7],
    [7, 0, 7, 0, 7, 7, 0, 0, 7, 0, 0, 7],
    [7, 7, 0, 7, 0, 7, 7, 0, 0, 7, 0, 0],
    [0, 7, 7, 0, 7, 0, 7, 7, 0, 0, 7, 0],
    [0, 0, 7, 7, 0, 7, 0, 7, 7, 0, 0, 7],
    [7, 0, 0, 7, 7, 0, 7, 0, 7, 7, 0, 0],
    [0, 7, 0, 0, 7, 7, 0, 7, 0, 7, 7, 0],
    [0, 0, 7, 0, 0, 7, 7, 0, 7, 0, 7, 7],
    [7, 0, 0, 7, 0, 0, 7, 7, 0, 7, 0, 7],
    [7, 7, 0, 7, 7, 0, 0, 7, 7, 0, 7, 0],
    [0, 7, 7, 0, 0, 7, 0, 0, 7, 7, 0, 7]
  ]
};

export const NADI = {
  getNadiGroup: nakshatra => {
    if ([1, 6, 7, 12, 13, 18, 19, 24, 25].includes(nakshatra)) {
      return 0;
    } else if ([2, 5, 8, 11, 14, 17, 20, 23, 26].includes(nakshatra)) {
      return 1;
    }
    return 2;
  },

  points: [[0, 8, 8], [8, 0, 8], [8, 8, 0]]
};
