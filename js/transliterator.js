// p, t, k, s, m, n, l, j, w
// a, e, i, o, u
// a = ah; e = eh; i=ee; o = oh; u=oo
// FORBIDDEN ji, ti > si, wo > o, wu > u

// --------------------------------------------------------
function transliterate(engString) {
  let tpString = engString.toLowerCase();
  // do various manipulations of tpString

  // TEST - is string empty or null -> return ""
  // TEST - one letter, a vowel -> return unchanged

  // what to do about non-silent E? Prolly nothing :(

  // Transliteration Begins Here
  // *** Delete spaces and dashes
  tpString = tpString.replaceAll(" ", "");
  tpString = tpString.replaceAll("-", "");

  // *** Special fixes for specific words
  tpString = tpString.replaceAll("eur", "el"); // Europe

  // *** detect double consonants, delete one of them (bb, cc, dd etc)
  tpString = tpString.replace(
    /([^aeiou\.,\/=?:\d&\s!@#$%^*();\\|<>"'_+-])\1{1}/gi,
    "$1"
  );

  // double vowels equal a single tp letter sound
  // aa ee ii oo uu
  tpString = tpString.replaceAll("aa", "a");
  tpString = tpString.replaceAll("ee", "i");
  tpString = tpString.replaceAll("ii", "e");
  tpString = tpString.replaceAll("oo", "u");
  tpString = tpString.replaceAll("uu", "ju"); // ??

  // replace double vowels, dithongs, tripthongs, all the thongs
  tpString = tpString.replaceAll("au", "o");
  tpString = tpString.replaceAll("ea", "i");
  tpString = tpString.replaceAll("ei", "i");
  tpString = tpString.replaceAll("eu", "e");
  tpString = tpString.replaceAll("ew", "u");
  tpString = tpString.replaceAll("ia", "ija");
  tpString = tpString.replaceAll("ou", "e");

  // consonant clusters representing a single sound (th, ng, ch, sh)
  tpString = tpString.replaceAll("ng", "n");
  tpString = tpString.replaceAll("th", "s");
  tpString = tpString.replaceAll("ch", "s");
  tpString = tpString.replaceAll("sh", "s");

  // consonant clusters like ck, qu
  tpString = tpString.replaceAll("qu", "k");
  tpString = tpString.replaceAll("ck", "k");
  tpString = tpString.replaceAll("cz", "k");

  // replace general letter equivalents in all positions
  tpString = tpString.replaceAll("b", "p");
  tpString = tpString.replaceAll("d", "t");
  tpString = tpString.replaceAll("f", "p");
  tpString = tpString.replaceAll("g", "k");
  tpString = tpString.replaceAll("r", "w");
  tpString = tpString.replaceAll("v", "w");
  tpString = tpString.replaceAll("x", "k");
  tpString = tpString.replaceAll("z", "s");

  // letters used in digraphs replaced after digraphs
  tpString = tpString.replaceAll("h", "");
  tpString = tpString.replaceAll("c", "s"); // k or s???

  // FIRST LETTER changes
  let firstLetter = tpString.charAt(0);
  if (firstLetter === "j") {
    tpString = tpString.replace("j", "s");
  }

  // *** two consonants in a row... if one of them is w, l or j delete it, else delete the 2nd consonant
  for (let j = 0; j < tpString.length; j++) {
    if (
      isConsonant(tpString.slice(j, j + 1)) &&
      isConsonant(tpString.slice(j - 1, j))
    ) {
      // console.log(tpString.slice(j - 1, j), tpString.slice(j, j + 1));
      // output is correct. but what about three consonants in a row?
    }
  }

  // *** two vowels in a row, delete the 2nd vowel
  for (let i = 0; i < tpString.length; i++) {
    if (
      !isConsonant(tpString.slice(i, i + 1)) &&
      !isConsonant(tpString.slice(i - 1, i))
    ) {
      let before = tpString.substring(0, i);
      let after = tpString.substring(i + 1, tpString.length);
      tpString = before + after;
    }
  }

  // LAST LETTER changes change y to i, leave n, delete consonants
  let lastLetter = tpString.charAt(tpString.length - 1);
  if (lastLetter === "y") {
    tpString = tpString.slice(0, -1) + "i";
  } else if (lastLetter === "n") {
    // do nothing
  } else if (isConsonant(lastLetter)) {
    tpString = tpString.slice(0, -1);
  }

  // *** fix forbidden syllables
  tpString = tpString.replaceAll("ti", "si");
  tpString = tpString.replaceAll("wo", "o");
  tpString = tpString.replaceAll("wu", "u");

  // all done... return the tokiponaized string
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

// --------------------------------------------------------
testWords();
