export const transformIcons = (iconNum) => {
  switch (iconNum) {
    case 1 || 30 || 38 || 33 || 34:
      return 2;
    case 2 || 3:
      return 1;
    case 19 || 31 || 43 || 44:
      return 6;
    case 4 || 5 || 6 || 20 || 21:
      return 3;
    case 11:
      return 7;
    case 13 || 14 || 16 || 17:
      return 4;
    case 32 || 37:
      return 8;
    case 7 || 8 || 35 || 36:
      return 5;
    case 12 || 13 || 15 || 18 || 25:
      return 9;
    case 22 || 23 || 24:
      return 13;
    case 40 || 39 || 26 || 29:
      return 10;
    case 41 || 42:
      return 12;
    case 12:
      return 14;
    default:
      return 3;
  }
};
