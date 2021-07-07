// --------------------------------------------------------
function unitTest(testWord, expectedOutput) {
  // init the variables
  let tpWord = "";
  let testResult = "";
  let outputMsg = "";

  // TODO
  // Add time in and time out to calc how long the operation took

  // send the testWord to be transliterated
  tpWord = transliterate(testWord);

  // log out success or failure of transliteration
  if (tpWord === expectedOutput) {
    testResult = "SUCCESS!";
    outputMsg = `${testWord} - ${testResult}`;
    console.log("%c" + outputMsg, "color: #66ff00");
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
  console.clear();
  // log out the date/time
  console.log(theDate());

  unitTest("Jerry", "Sewi");
  unitTest("Leigh", "Li");
  unitTest("Hoover", "Uwe");
  unitTest("Africa", "Apika");
  unitTest("America", "Mewika");
  unitTest("Antartica", "Antasika");
  unitTest("Asia", "Asija");
  unitTest("Australia", "Osalija");
  unitTest("Czechoslovakia", "Kesolowakija");
  unitTest("Ethiopia", "Isijopija");
  unitTest("Europe", "Elopa");
  unitTest("France", "Kanse");
  unitTest("Germany", "Tosi");
  unitTest("Greenland", "Kinlan");
  unitTest("Houston", "Eton");
  unitTest("India", "Insija");
  unitTest("Liberia", "Lapewija");
  unitTest("Namibia", "Namipija");
  unitTest("New Zealand", "Nusilan");
  unitTest("North America", "Nowamewika");
  unitTest("Papua New Guinea", "Papuwanijukini");
  unitTest("Queensland", "Kinlan");
  unitTest("South America", "Setamewika");
  unitTest("Sugar Land", "Sukalane");
  unitTest("Texarkana", "Tekawana");
  unitTest("Texas", "Teka");
  unitTest("Trekker", "???");
}

// --------------------------------------------------------
function buttonlistener() {
  document.getElementById("test-button").addEventListener("click", (e) => {
    testWords();
  });
}

// --------------------------------------------------------
function theDate() {
  let now = new Date();
  let time =
    now.getFullYear() +
    "." +
    now.getMonth() +
    "." +
    now.getDate() +
    " " +
    now.getHours() +
    ":" +
    now.getMinutes();
  return time;
}
// --------------------------------------------------------
function main() {
  buttonlistener();
}

// --------------------------------------------------------
main();
