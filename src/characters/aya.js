import { Character } from './character'
import { CharacterStats } from './character-stats'
const stats = new CharacterStats()
stats.attack = 0
stats.magic = 0
stats.accuracy = 75
stats.defense = 0
stats.evasion = 30
stats.magicDefense = 1
stats.magicEvasion = 1

export const Aya = new Character("Aya", "Wynd", null)
Aya.stats = stats
Aya.hp = stats.hitPoints
Aya.mp = stats.magicPoints
//black mage
//hp, mp, exp, str, agil, sta, int, spirit
Aya.levels = {
  10: [   110,  50,     1957,   8,   7,   6,  10,  15],
  11: [   127,  58,     2692,   8,   8,   6,  10,  16],
  12: [   144,  67,     3624,   9,   8,   7,  10,  17],
  13: [   161,  75,     4786,   9,   9,   7,  10,  18],
  14: [   178,  84,     6215,   9,   9,   7,  10,  19],
  15: [   195,  92,     7951,  10,  10,   8,  11,  20],
  16: [   220, 101,    10036,  10,  10,   8,  11,  21],
  17: [   246, 109,    12515,  11,  11,   9,  11,  22],
  18: [   271, 118,    15436,  11,  11,   9,  11,  23],
  19: [   297, 126,    18849,  11,  12,   9,  11,  24],
  20: [   322, 135,    22809,  12,  12,  10,  12,  25],
  21: [   348, 143,    27371,  12,  13,  10,  12,  26],
  22: [   373, 152,    32595,  13,  13,  11,  12,  27],
  23: [   399, 160,    38543,  13,  14,  11,  12,  28],
  24: [   433, 169,    45280,  13,  14,  11,  12,  29],
  25: [   467, 177,    52873,  14,  15,  12,  13,  30],
  26: [   501, 186,    61393,  14,  15,  12,  13,  31],
  27: [   535, 194,    70914,  14,  16,  13,  13,  32],
  28: [   569, 203,    81511,  15,  16,  13,  13,  33],
  29: [   603, 211,    93263,  15,  17,  13,  13,  34],
  30: [   637, 220,   106253,  15,  17,  14,  14,  35],
  31: [   671, 228,   120564,  15,  18,  14,  14,  36],
  32: [   713, 237,   136284,  16,  18,  15,  14,  37],
  33: [   756, 245,   153504,  16,  18,  15,  14,  38],
  34: [   798, 254,   172316,  16,  19,  15,  14,  39],
  35: [   841, 262,   192817,  16,  19,  16,  15,  40],
  36: [   883, 271,   215105,  16,  19,  16,  15,  41],
  37: [   926, 279,   239281,  17,  20,  17,  15,  42],
  38: [   968, 288,   265450,  17,  20,  17,  15,  43],
  39: [  1011, 296,   293719,  17,  20,  17,  15,  44],
  40: [  1062, 305,   324199,  17,  21,  18,  16,  45],
  41: [  1113, 313,   357001,  17,  21,  18,  16,  46],
  42: [  1164, 322,   392242,  17,  22,  19,  16,  47],
  43: [  1215, 330,   430040,  17,  22,  19,  16,  48],
  44: [  1266, 339,   470516,  18,  22,  19,  16,  49],
  45: [  1317, 347,   513794,  18,  23,  20,  17,  50],
  46: [  1368, 356,   560001,  18,  23,  20,  17,  51],
  47: [  1419, 364,   609267,  18,  24,  21,  17,  52],
  48: [  1478, 373,   661725,  18,  24,  21,  17,  53],
  49: [  1538, 381,   717510,  18,  24,  21,  17,  54],
  50: [  1597, 390,   776760,  19,  25,  22,  18,  55],
  51: [  1657, 398,   839615,  19,  25,  22,  18,  56],
  52: [  1716, 407,   906220,  19,  26,  22,  18,  57],
  53: [  1776, 415,   976722,  19,  26,  23,  18,  58],
  54: [  1835, 424,  1051270,  19,  26,  23,  18,  59],
  55: [  1895, 432,  1130016,  20,  27,  23,  19,  60],
  56: [  1954, 441,  1213115,  20,  27,  24,  19,  61],
  57: [  2014, 449,  1296214,  20,  28,  24,  19,  62],
  58: [  2073, 458,  1388496,  20,  28,  24,  19,  63],
  59: [  2133, 466,  1485614,  20,  28,  25,  19,  64],
  60: [  2192, 475,  1587734,  21,  29,  25,  20,  65],
  61: [  2252, 483,  1695025,  21,  29,  25,  20,  66],
  62: [  2311, 492,  1807659,  21,  30,  26,  20,  67],
  63: [  2371, 500,  1925811,  21,  30,  26,  20,  68],
  64: [  2430, 509,  2049658,  21,  30,  26,  20,  69],
  65: [  2498, 517,  2179381,  22,  31,  27,  21,  70],
  66: [  2566, 526,  2315164,  22,  31,  27,  21,  71],
  67: [  2634, 534,  2457192,  22,  32,  27,  21,  72],
  68: [  2702, 543,  2605655,  22,  32,  28,  21,  73],
  69: [  2770, 551,  2760744,  22,  32,  28,  21,  74],
  70: [  2838, 560,  2922654,  23,  33,  28,  22,  75],
  71: [  2906, 568,  3084564],
  72: [  2974, 577,  3246474],
  73: [  3042, 585,  3408384],
  74: [  3110, 594,  3570294],
  75: [  3178, 602,  3732204],
  76: [  3246, 611,  3894114],
  77: [  3314, 619,  4056024],
  78: [  3382, 628,  4217934],
  79: [  3450, 636,  4379844],
  80: [  3518, 645,  4541754],
  81: [  3586, 653,  4703664],
  82: [  3654, 662,  4865574],
  83: [  3722, 670,  5027484],
  84: [  3790, 679,  5189394],
  85: [  3858, 687,  5351304],
  86: [  3926, 696,  5513214],
  87: [  3994, 704,  5675124],
  88: [  4062, 713,  5837034],
  89: [  4130, 721,  5998944],
  90: [  4198, 730,  6160854],
  91: [  4266, 738,  6322764],
  92: [  4334, 747,  6484674],
  93: [  4402, 755,  6646584],
  94: [  4470, 764,  6808494],
  95: [  4538, 772,  6970404],
  96: [  4606, 781,  7132314],
  97: [  4674, 789,  7294224],
  98: [  4742, 798,  7456134],
  99: [  4810, 806,  7618044],

}

Aya.setLevel(10)