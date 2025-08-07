
/* AGAINST ALL ODDS – FULL GAME BUILD EXPANDED */

let enterButton, choiceA, choiceB, choiceC;
let screen = 0;
let respect = 50, knowledge = 50, confidence = 50, money = 50;
let playerChoices = {};
let quoteToDisplay = "";

function setup() {
  createCanvas(800, 500);
  textAlign(CENTER, CENTER);
  textSize(16);

  enterButton = new Sprite(-100, -100);
  choiceA = new Sprite(-100, -100);
  choiceB = new Sprite(-100, -100);
  choiceC = new Sprite(-100, -100);

  setupButton(enterButton, "Begin Story", 250, 60);
  setupButton(choiceA, "Choice A", 200, 50);
  setupButton(choiceB, "Choice B", 200, 50);
  setupButton(choiceC, "Choice C", 200, 50);
}

function setupButton(button, txt, w, h) {
  button.w = w;
  button.h = h;
  button.text = txt;
  button.collider = "k";
  button.color = color(70, 130, 180);
  button.textColor = color(255);
}

function draw() {
  background(245, 245, 220);

  switch (screen) {
    case 0: showTitleScreen(); break;
    case 1: showIntro(); break;
    case 2: screen2(); break;
    case 3: screen3(); break;
    case 4: screen4(); break;
    case 5: screen5(); break;
    case 6: displayScreen("Wednesday", "Khalil is offered a chance to volunteer at a youth center.", ["Say yes", "Say no", "Say maybe"], [10, 0, 5], ["You get what you give. – Common", "Sometimes saying no means nothing changes. – Meek Mill", "Bet on yourself. – Nas"]); break;
    case 7: displayScreen("Thursday", "Teacher reminds him: scholarship apps are due next week.", ["Start essay now", "Procrastinate", "Ask a friend for help"], [10, -10, 5], ["Move in silence. Let success speak. – J. Cole", "Procrastination is fear in disguise. – Kendrick", "Closed mouths don’t get fed. – Biggie"]); break;
    case 8: displayScreen("Friday", "Jamal pressures Khalil to skip school for a day trip.", ["Say no, focus on class", "Go anyway", "Compromise: go, then study later"], [10, -10, 5], ["Discipline is freedom. – Jay-Z", "Don’t chase clout, chase goals. – Lil Baby", "Balance the grind. – Cordae"]); break;
    case 9: displayScreen("Saturday", "Debate team meets. Khalil is tired but invited.", ["Show up anyway", "Skip for sleep", "Watch virtually"], [10, -10, 5], ["Winners work when others rest. – MJ", "Energy is wealth. Protect it. – Lauryn Hill", "Adapt and survive. – SZA"]); break;
    case 10: displayScreen("Sunday", "Church auntie sees him and says she's praying for him.", ["Say thank you", "Ignore it", "Ask for advice"], [10, -10, 5], ["Faith moves mountains. – Tupac", "Don’t let pride block blessings. – Lecrae", "Wisdom ain’t age-bound. – Malcolm X"]); break;
    case 11: displayScreen("Monday", "His older brother returns home and encourages law school.", ["Open up about doubts", "Act tough", "Say you’ll think about it"], [10, -10, 5], ["Vulnerability is strength. – Kendrick", "Hard don’t mean heartless. – Tupac", "You don't gotta know everything. – Ice Cube"]); break;
    case 12: displayScreen("Tuesday", "He’s offered extra hours at work – same day as scholarship interview.", ["Go to interview", "Go to work", "Try both"], [10, -10, 5], ["Make time for what matters. – Jay-Z", "Fast money leaves faster. – 21 Savage", "Half-steppin’ gets half-paid. – Pop Smoke"]); break;
    case 13: displayScreen("Wednesday", "Scholarship essay due.", ["Submit on time", "Submit late", "Don’t submit at all"], [10, 0, -10], ["Done is better than perfect. – Nipsey", "Late means risk. – Drake", "Closed doors don’t open themselves. – Diddy"]); break;
    case 14: displayScreen("Thursday", "Court hearing for his dad. He can speak if he wants.", ["Speak with heart", "Let lawyer do it", "Stay silent"], [10, 0, -10], ["Your voice matters. – Angela Davis", "Trust the process. – J. Cole", "Silence can speak too. – Kendrick"]); break;
    case 15: displayScreen("Friday", "Jamal confronts him again about "changing".", ["Explain your goals", "Brush him off", "Invite him to help out"], [10, -10, 5], ["Elevation requires separation. – Tupac", "You lose people chasing purpose. – Drake", "Lift while you climb. – Chance"]); break;
    case 16: displayScreen("Saturday", "Final debate round. Opponent mocks his background.", ["Stay calm", "Clap back", "Fumble"], [10, -10, -10], ["Stay poised. Stay powerful. – MLK", "Don't feed fire with fire. – Jay-Z", "Everyone stumbles. Keep going. – SZA"]); break;
    case 17: showResults(); break;
    case 18: showFinalMessage(); break;
    case 19: showEnding(); break;
  }

  drawHUD();
  handleButtonClicks();
  if (quoteToDisplay !== "") {
    textSize(14);
    fill(60);
    text(`\"${quoteToDisplay}\"`, width / 2, height - 140);
  }
}

function displayScreen(day, story, options, statChanges, quotes) {
  displayStoryText([`${day}:`, story]);
  setupChoice(options[0], options[1], options[2]);
  handleChoiceLogic(statChanges, quotes);
}

function handleChoiceLogic(statChanges, quotes) {
  if (choiceA.mouse.presses()) applyChoice('A', statChanges[0], quotes[0]);
  if (choiceB.mouse.presses()) applyChoice('B', statChanges[1], quotes[1]);
  if (choiceC.mouse.presses()) applyChoice('C', statChanges[2], quotes[2]);
}

function applyChoice(choice, statDelta, quote) {
  playerChoices[screen] = choice;
  if (statDelta === 10) knowledge += 10;
  if (statDelta === 5) confidence += 5;
  if (statDelta === -10) respect -= 10;
  quoteToDisplay = quote;
  respect = constrain(respect, 0, 100);
  knowledge = constrain(knowledge, 0, 100);
  money = constrain(money, 0, 100);
  confidence = constrain(confidence, 0, 100);
  clearButtons();
  screen++;
}

function showResults() {
  let total = respect + knowledge + confidence;
  if (total >= 180) {
    screen = 19;
  } else if (total >= 140) {
    screen = 19;
  } else {
    screen = 19;
  }
}

function showFinalMessage() {
  displayStoryText(["A year later…", "Khalil’s story echoes beyond the block.", "Every decision built the man he’s becoming."]);
  positionButton(enterButton, width / 2, height - 60);
  enterButton.text = "See Your Ending";
}


// Ending logic
function showEnding() {
  let totalScore = respect + knowledge + confidence;
  if (totalScore >= 180) {
    displayStoryText([
      "THE DREAM ACHIEVED",
      "Khalil became a world-known lawyer.",
      "Started an NGO and scholarship.",
      "\"I didn’t change who I was to make it. I changed what making it looked like.\" – Jay-Z"
    ]);
  } else if (totalScore >= 140) {
    displayStoryText([
      "THE COMMUNITY PROTECTOR",
      "Khalil skipped college, supported family, became a leader.",
      "Later inherited a law firm.",
      "\"You ain’t gotta leave the block to lead it.\" – Nipsey Hussle"
    ]);
  } else {
    displayStoryText([
      "THE FALLOUT",
      "Khalil got lost. Gave up his dream.",
      "\"Dreams don’t die. People just stop chasing.\" – Tupac"
    ]);
  }
  positionButton(enterButton, width / 2, height - 60);
  enterButton.text = "Restart";
  screen = 18;
  quoteToDisplay = "";
}

// Shared functions
function displayStoryText(lines) {
  fill(101, 67, 33);
  textSize(18);
  let startY = 100;
  for (let i = 0; i < lines.length; i++) {
    text(lines[i], width / 2, startY + i * 30);
  }
}

function setupChoice(textA, textB, textC) {
  choiceA.text = textA;
  choiceB.text = textB;
  choiceC.text = textC;
  positionButton(choiceA, width / 2, height - 150);
  positionButton(choiceB, width / 2, height - 100);
  positionButton(choiceC, width / 2, height - 50);
  quoteToDisplay = "";
}

function handleChoice(choice) {
  playerChoices[screen] = choice;
  let quote = "";
  switch (choice) {
    case 'A':
      knowledge += 10;
      quote = "You gotta learn to survive, not just exist. – Tupac";
      break;
    case 'B':
      respect -= 10;
      quote = "Don't lose yourself tryna fit in. – Snoop Dogg";
      break;
    case 'C':
      confidence += 5;
      quote = "You can fake it 'til you make it, just don’t stop moving. – Kendrick Lamar";
      break;
  }
  respect = constrain(respect, 0, 100);
  knowledge = constrain(knowledge, 0, 100);
  money = constrain(money, 0, 100);
  confidence = constrain(confidence, 0, 100);
  quoteToDisplay = quote;
  clearButtons();
  screen++;
}

function drawHUD() {
  fill(101, 67, 33);
  textAlign(LEFT, CENTER);
  textSize(14);
  text(`Respect: ${respect}`, 20, 30);
  text(`Knowledge: ${knowledge}`, 20, 50);
  text(`Money: ${money}`, 20, 70);
  text(`Confidence: ${confidence}`, 20, 90);
  textAlign(CENTER, CENTER);
}

function handleButtonClicks() {
  if (enterButton.mouse.presses()) {
    clearButtons();
    screen++;
  }
  if (choiceA.mouse.presses()) handleChoice('A');
  if (choiceB.mouse.presses()) handleChoice('B');
  if (choiceC.mouse.presses()) handleChoice('C');
}

function positionButton(button, x, y) {
  button.pos = { x: x, y: y };
}

function clearButtons() {
  enterButton.pos = { x: -999, y: -999 };
  choiceA.pos = { x: -999, y: -999 };
  choiceB.pos = { x: -999, y: -999 };
  choiceC.pos = { x: -999, y: -999 };
}

function showTitleScreen() {
  displayStoryText([
    "AGAINST ALL ODDS",
    "The Story of Khalil",
    "A young man's journey through choices that shape his destiny."
  ]);
  positionButton(enterButton, width / 2, height / 2 + 40);
  enterButton.text = "Begin Story";
}

function showIntro() {
  displayStoryText([
    "Meet Khalil, 17, from the block.",
    "Dreams of being a lawyer but faces daily pressures.",
    "Every choice matters. Every decision shapes his future.",
    "This is his story."
  ]);
  positionButton(enterButton, width / 2, height - 60);
  enterButton.text = "Start Journey";
}

function screen2() {
  displayScreen("Monday", "Khalil's friend Jamal offers him a shortcut to quick money.", ["Say no", "Listen to the offer", "Ask for details"], [10, -10, 5], ["Stay focused on your goals. – Nipsey Hussle", "Fast money ain't always good money. – Jay-Z", "Knowledge is power. – Nas"]);
}

function screen3() {
  displayScreen("Tuesday", "A teacher notices Khalil's potential and offers extra help.", ["Accept gratefully", "Decline politely", "Say maybe later"], [10, 0, 5], ["Education is the passport to the future. – Malcolm X", "Missed opportunities don't come back. – Drake", "Timing is everything. – Kendrick"]);
}

function screen4() {
  displayScreen("Wednesday", "His mom asks him to help with bills instead of studying.", ["Help immediately", "Study first, help later", "Find a compromise"], [5, 10, 10], ["Family first, always. – Chance the Rapper", "Invest in your future. – Diddy", "Balance is key. – J. Cole"]);
}

function screen5() {
  displayScreen("Thursday", "Court date for his dad's case. Khalil could speak up.", ["Speak your truth", "Stay quiet", "Support silently"], [10, 0, 5], ["Truth will set you free. – Tupac", "Sometimes silence speaks volumes. – Kendrick", "Stand by your family. – Meek Mill"]);
}

function keyPressed() {
  if (key === 'R' || key === 'r') {
    screen = 0;
    respect = 50;
    knowledge = 50;
    money = 50;
    confidence = 50;
    playerChoices = {};
    quoteToDisplay = "";
    clearButtons();
    positionButton(enterButton, width / 2, height / 2 + 40);
    enterButton.text = "Begin Story";
  }
}
