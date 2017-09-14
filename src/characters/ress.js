import { Character } from './character'
import { CharacterStats } from './character-stats'
const stats = new CharacterStats()
stats.attack = 0
stats.magic = 0
stats.accuracy = 59
stats.defense = 0
stats.evasion = 25
stats.magicDefense = 1
stats.magicEvasion = 1

export const Ress = new Character("Ress", "Zousid", null)
Ress.stats = stats
Ress.hp = stats.hitPoints
Ress.mp = stats.magicPoints
//warrior
//hp, mp, exp, str, agil, sta, int, spirit
Ress.levels = {
  10: [   761,  46,     1980,  13,  15,  13,   9,  13],
  11: [   787,  50,     2726,  14,  15,  14,   9,  13],
  12: [   812,  54,     3671,  14,  15,  14,   9,  14],
  13: [   838,  58,     4851,  15,  15,  15,  10,  14],
  14: [   863,  62,     6302,  15,  15,  15,  10,  14],
  15: [   889,  66,     8065,  16,  15,  16,  10,  15],
  16: [   914,  70,    10182,  16,  15,  16,  10,  15],
  17: [   940,  74,    12700,  17,  15,  17,  10,  16],
  18: [   965,  78,    15667,  18,  15,  18,  11,  16],
  19: [   991,  82,    19135,  19,  15,  19,  11,  16],
  20: [  1016,  86,    23159,  20,  16,  20,  12,  17],
  21: [  1050,  90,    27795,  21,  16,  21,  12,  17],
  22: [  1084,  94,    33104,  22,  17,  21,  13,  18],
  23: [  1118,  98,    39149,  24,  17,  23,  13,  18],
  24: [  1152, 102,    45996,  25,  18,  24,  14,  18],
  25: [  1186, 106,    53714,  26,  18,  25,  14,  19],
  26: [  1220, 110,    62375,  27,  19,  26,  15,  19],
  27: [  1254, 114,    72053,  28,  19,  27,  15,  20],
  28: [  1288, 118,    82826,  29,  20,  27,  16,  20],
  29: [  1322, 122,    94773,  31,  20,  29,  16,  20],
  30: [  1356, 126,   107979,  32,  21,  30,  17,  21],
  31: [  1399, 130,   122529,  33,  21,  31,  17,  21],
  32: [  1450, 134,   138512,  34,  22,  31,  18,  22],
  33: [  1509, 138,   156019,  36,  22,  33,  18,  22],
  34: [  1577, 142,   175146,  37,  23,  33,  19,  23],
  35: [  1654, 146,   195990,  39,  23,  35,  19,  23],
  36: [  1730, 150,   218651,  40,  24,  36,  20,  24],
  37: [  1815, 154,   243233,  41,  24,  37,  20,  24],
  38: [  1900, 158,   269841,  42,  25,  37,  21,  25],
  39: [  1994, 162,   298585,  44,  25,  39,  21,  25],
  40: [  2087, 166,   329577,  45,  26,  39,  22,  26],
  41: [  2189, 170,   362931,  47,  26,  41,  22,  26],
  42: [  2291, 174,   398765,  48,  27,  41,  23,  27],
  43: [  2393, 178,   437199,  50,  27,  43,  23,  27],
  44: [  2495, 182,   478356,  51,  28,  43,  24,  28],
  45: [  2597, 186,   522363,  53,  28,  45,  24,  28],
  46: [  2708, 190,   569349,  54,  29,  45,  25,  29],
  47: [  2818, 194,   619446,  56,  29,  47,  25,  29],
  48: [  2929, 198,   672788,  57,  30,  47,  26,  30],
  49: [  3039, 202,   729514,  59,  30,  49,  26,  30],
  50: [  3150, 206,   789764,  60,  31,  49,  27,  31],
  51: [  3260, 210,   853681,  62,  31,  51,  27,  31],
  52: [  3371, 214,   921411,  63,  32,  51,  28,  32],
  53: [  3481, 218,   993104,  65,  32,  53,  28,  32],
  54: [  3592, 222,  1068911,  66,  33,  53,  29,  33],
  55: [  3702, 226,  1148988,  68,  33,  55,  29,  33],
  56: [  3813, 230,  1233492,  69,  34,  55,  30,  34],
  57: [  3923, 234,  1322584,  71,  34,  57,  30,  34],
  58: [  4034, 238,  1416427,  72,  35,  57,  31,  35],
  59: [  4144, 242,  1515188,  74,  35,  59,  31,  35],
  60: [  4255, 246,  1619036,  75,  36,  60,  32,  36],
  61: [  4374, 250,  1728142,  76,  36,  61,  32,  36],
  62: [  4493, 254,  1842682,  77,  37,  62,  32,  37],
  63: [  4612, 258,  1962834,  78,  37,  63,  33,  37],
  64: [  4731, 262,  2088778,  79,  38,  64,  33,  38],
  65: [  4850, 266,  2220698,  80,  38,  65,  34,  38],
  66: [  4969, 270,  2358781,  81,  39,  66,  34,  39],
  67: [  5088, 274,  2503215,  82,  39,  67,  35,  39],
  68: [  5207, 278,  2654193,  83,  40,  68,  35,  40],
  69: [  5326, 282,  2811910,  84,  40,  69,  36,  40],
  70: [  5462, 290,  2976564,  85,  41,  70,  36,  41],
  71: [  5598, 299,  3141218],
  72: [  5734, 307,  3305872],
  73: [  5870, 316,  3470526],
  74: [  6006, 324,  3635180],
  75: [  6142, 333,  3799834],
  76: [  6278, 341,  3964488],
  77: [  6414, 350,  4129142],
  78: [  6550, 358,  4293796],
  79: [  6686, 367,  4458450],
  80: [  6822, 375,  4623104],
  81: [  6958, 384,  4787758],
  82: [  7094, 392,  4952412],
  83: [  7230, 401,  5117066],
  84: [  7366, 409,  5281720],
  85: [  7502, 418,  5446374],
  86: [  7638, 426,  5611028],
  87: [  7774, 435,  5775682],
  88: [  7910, 443,  5940336],
  89: [  8046, 452,  6104990],
  90: [  8182, 460,  6269644],
  91: [  8318, 469,  6434298],
  92: [  8454, 477,  6598952],
  93: [  8590, 486,  6763606],
  94: [  8726, 494,  6928260],
  95: [  8862, 503,  7092914],
  96: [  8998, 511,  7257568],
  97: [  9134, 520,  7422222],
  98: [  9270, 528,  7586876],
  99: [  9406, 537,  7751530]
}
Ress.setLevel(10)
