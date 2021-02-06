// --------------------------------------------------------
function unitTest(testWord, expectedOutput) {
  // init the variables
  let tpWord = "";
  let testResult = "";
  let outputMsg = "";

  // TODO
  // Add time in and time out to calc how long the operation took

  // send the word to be transliterated
  tpWord = transliterate(testWord);

  // log out success or failure of transliteration
  if (tpWord === expectedOutput) {
    testResult = "SUCCESS!";
    outputMsg = `${testWord} - ${testResult}`;
    console.log(outputMsg);
  } else {
    testResult = "FAIL!";
    outputMsg = `${testWord} - ${testResult} 
Expected output -> ${expectedOutput}
Actual output   -> ${tpWord}`;
    console.warn(outputMsg);
  }
}

// --------------------------------------------------------
function testWords() {
  unitTest("Hoover", "Uwe");
  unitTest("Liberia", "Lapewija");
}

// --------------------------------------------------------
function buttonlistener() {
  document.getElementById("test-button").addEventListener("click", (e) => {
    testWords();
  });
}

// --------------------------------------------------------
function main() {
  buttonlistener();
}

// --------------------------------------------------------
main();
