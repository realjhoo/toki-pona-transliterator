// p, t, k, s, m, n, l, j, w
// a, e, i, o, u
// FORBIDDEN ji, ti > si, wo > o, wu > u

// --------------------------------------------------------
function transliterate(engString) {
  tpString = engString.toLowerCase();
  // do various manipulations of tpString

  // TEST - is string empty or null -> return ""
  // TEST - one letter, a vowel -> return unchanged

  // what to do about non-silent E? Prolly nothing :(

  // Transliteration Begins Here
  tpString = tpString.replaceAll(" ", "");
  tpString = tpString.replaceAll("-", "");

  // Special fixes for specific words
  tpString = tpString.replaceAll("eur", "el"); // Europe

  // double consonants (bb, cc, dd, ff, gg, ll, mm, nn, pp, rr, ss, tt)
  tpString = tpString.replaceAll("bb", "b");
  tpString = tpString.replaceAll("cc", "c");
  tpString = tpString.replaceAll("dd", "d");
  tpString = tpString.replaceAll("ff", "f");
  tpString = tpString.replaceAll("gg", "g");
  tpString = tpString.replaceAll("ll", "l");
  tpString = tpString.replaceAll("mm", "m");
  tpString = tpString.replaceAll("nn", "n");
  tpString = tpString.replaceAll("pp", "p");
  tpString = tpString.replaceAll("rr", "r");
  tpString = tpString.replaceAll("ss", "s");
  tpString = tpString.replaceAll("tt", "t");

  // double vowels that equal a tp letter sound
  tpString = tpString.replaceAll("ee", "i");
  tpString = tpString.replaceAll("oo", "u");

  // replace double vowels, dithongs, tripthongs, all the thongs
  tpString = tpString.replaceAll("ei", "i");
  tpString = tpString.replaceAll("eu", "e");
  tpString = tpString.replaceAll("ia", "ija");

  // consonant clusters representing a single sound (th, ng)
  tpString = tpString.replaceAll("ng", "n");
  tpString = tpString.replaceAll("th", "s");

  // consonant clusters like ck, qu
  tpString = tpString.replaceAll("qu", "k");

  // replace general letter equivelents in all positions
  tpString = tpString.replaceAll("b", "p");
  tpString = tpString.replaceAll("d", "t");
  tpString = tpString.replaceAll("f", "p");
  tpString = tpString.replaceAll("g", "k");
  tpString = tpString.replaceAll("r", "w");
  tpString = tpString.replaceAll("v", "w");
  tpString = tpString.replaceAll("x", "k");
  tpString = tpString.replaceAll("z", "s");

  // FIRST LETTER
  if (tpString.charAt(0) === "j") {
    tpString = tpString.replace("j", "s");
  }

  // LAST LETTER
  // if the last letter is y, make it an i
  if (tpString.charAt(tpString.length - 1) === "y") {
    tpString = tpString.slice(0, -1) + "i";
  }

  // letters used in digraphs replaced after digraphs
  tpString = tpString.replaceAll("h", "");
  tpString = tpString.replaceAll("c", "s"); // k or s???

  // append final n where needed

  // fix forbidden syllables
  tpString = tpString.replaceAll("ti", "si");
  tpString = tpString.replaceAll("wo", "o");
  tpString = tpString.replaceAll("wu", "u");

  // remove final consonant if not N
  let lastLetter = tpString.charAt(tpString.length - 1);
  if (isConsonant(lastLetter) && lastLetter != "n") {
    tpString = tpString.slice(0, -1);
  }

  // all done... return the string tokiponaized
  return capitalize(tpString);
}

// --------------------------------------------------------
function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// --------------------------------------------------------
function isConsonant(letter) {
  return !(
    letter === "a" ||
    letter === "e" ||
    letter === "i" ||
    letter === "o" ||
    letter === "u"
  );
}
