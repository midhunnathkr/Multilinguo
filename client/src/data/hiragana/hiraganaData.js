// array of objects of frequently used hiragana characters and romaji
// empty strings are used to fill in the gaps in the grid
const hiraganaData = {
  // 5 columns
  basic: [
    { character: 'あ', romaji: 'a' },
    { character: 'い', romaji: 'i' },
    { character: 'う', romaji: 'u' },
    { character: 'え', romaji: 'e' },
    { character: 'お', romaji: 'o' },
    { character: 'か', romaji: 'ka' },
    { character: 'き', romaji: 'ki' },
    { character: 'く', romaji: 'ku' },
    { character: 'け', romaji: 'ke' },
    { character: 'こ', romaji: 'ko' },
  ],
  // 5 columns
  diacritics: [
    { character: 'が', romaji: 'ga' },
    { character: 'ぎ', romaji: 'gi' },
    { character: 'ぐ', romaji: 'gu' },
    { character: 'げ', romaji: 'ge' },
    { character: 'ご', romaji: 'go' },
  ],
  // 3 columns
  contracted: [
    { character: 'きゃ', romaji: 'kya' },
    { character: 'きゅ', romaji: 'kyu' },
    { character: 'きょ', romaji: 'kyo' },
    { character: 'しゃ', romaji: 'sha' },
    { character: 'しゅ', romaji: 'shu' },
    { character: 'しょ', romaji: 'sho' },
    { character: 'ちゃ', romaji: 'cha' },
    { character: 'ちゅ', romaji: 'chu' },
    { character: 'ちょ', romaji: 'cho' },
    { character: 'にゃ', romaji: 'nya' },
    { character: 'にゅ', romaji: 'nyu' },
    { character: 'にょ', romaji: 'nyo' },
    { character: 'ひゃ', romaji: 'hya' },
    { character: 'ひゅ', romaji: 'hyu' },
    { character: 'ひょ', romaji: 'hyo' },
    { character: 'みゃ', romaji: 'mya' },
    { character: 'みゅ', romaji: 'myu' },
    { character: 'みょ', romaji: 'myo' },
    { character: 'りゃ', romaji: 'rya' },
    { character: 'りゅ', romaji: 'ryu' },
    { character: 'りょ', romaji: 'ryo' },
    { character: 'ぎゃ', romaji: 'gya' },
    { character: 'ぎゅ', romaji: 'gyu' },
    { character: 'ぎょ', romaji: 'gyo' },
    { character: 'じゃ', romaji: 'ja' },
    { character: 'じゅ', romaji: 'ju' },
    { character: 'じょ', romaji: 'jo' },
    { character: 'びゃ', romaji: 'bya' },
    { character: 'びゅ', romaji: 'byu' },
    { character: 'びょ', romaji: 'byo' },
    { character: 'ぴゃ', romaji: 'pya' },
    { character: 'ぴゅ', romaji: 'pyu' },
    { character: 'ぴょ', romaji: 'pyo' },
  ],
  // 4 columns
  doubleConsonants: [
    { character: 'っ+k', romaji: 'kk' },
    { character: 'っ+s', romaji: 'ss' },
    { character: 'っ+t', romaji: 'tt' },
    { character: 'っ+p', romaji: 'pp' },
  ],
  // 5 columns
  longVowels: [
    { character: 'ああ', romaji: 'aa' },
    { character: 'いい', romaji: 'ii' },
    { character: 'うう', romaji: 'uu' },
    { character: 'ええ', romaji: 'ee' },
    { character: 'おお', romaji: 'oo' },
    { character: '', romaji: '' },
    { character: '', romaji: '' },
    { character: '', romaji: '' },
    { character: 'えい', romaji: 'ei' },
    { character: 'おう', romaji: 'ou' },
  ],
};

export default hiraganaData;
