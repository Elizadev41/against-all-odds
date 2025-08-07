
/* AGAINST ALL ODDS – FULL GAME BUILD EXPANDED */

let enterButton, choiceA, choiceB, choiceC;
let screen = 0;
let respect = 50, knowledge = 50, confidence = 50, money = 50;
let playerChoices = {};
let quoteToDisplay = "";

// Story data organized for easier maintenance
const storyData = [
  { day: "Monday", story: "Khalil's friend Jamal offers him a shortcut to quick money.", options: ["Say no", "Listen to the offer", "Ask for details"], statChanges: [{respect: 10}, {respect: -10}, {knowledge: 5}], quotes: ["Stay focused on your goals. – Nipsey Hussle", "Fast money ain't always good money. – Jay-Z", "Knowledge is power. – Nas"] },
  { day: "Tuesday", story: "A teacher notices Khalil's potential and offers extra help.", options: ["Accept gratefully", "Decline politely", "Say maybe later"], statChanges: [{knowledge: 10}, {}, {confidence: 5}], quotes: ["Education is the passport to the future. – Malcolm X", "Missed opportunities don't come back. – Drake", "Timing is everything. – Kendrick"] },
  { day: "Wednesday", story: "His mom asks him to help with bills instead of studying.", options: ["Help immediately", "Study first, help later", "Find a compromise"], statChanges: [{money: 5}, {knowledge: 10}, {confidence: 10}], quotes: ["Family first, always. – Chance the Rapper", "Invest in your future. – Diddy", "Balance is key. – J. Cole"] },
  { day: "Thursday", story: "Court date for his dad's case. Khalil could speak up.", options: ["Speak your truth", "Stay quiet", "Support silently"], statChanges: [{respect: 10}, {}, {confidence: 5}], quotes: ["Truth will set you free. – Tupac", "Sometimes silence speaks volumes. – Kendrick", "Stand by your family. – Meek Mill"] },
  { day: "Wednesday", story: "Khalil is offered a chance to volunteer at a youth center.", options: ["Say yes", "Say no", "Say maybe"], statChanges: [{respect: 10}, {}, {confidence: 5}], quotes: ["You get what you give. – Common", "Sometimes saying no means nothing changes. – Meek Mill", "Bet on yourself. – Nas"] },
  { day: "Thursday", story: "Teacher reminds him: scholarship apps are due next week.", options: ["Start essay now", "Procrastinate", "Ask a friend for help"], statChanges: [{knowledge: 10}, {knowledge: -10}, {confidence: 5}], quotes: ["Move in silence. Let success speak. – J. Cole", "Procrastination is fear in disguise. – Kendrick", "Closed mouths don't get fed. – Biggie"] },
  { day: "Friday", story: "Jamal pressures Khalil to skip school for a day trip.", options: ["Say no, focus on class", "Go anyway", "Compromise: go, then study later"], statChanges: [{knowledge: 10}, {respect: -10}, {confidence: 5}], quotes: ["Discipline is freedom. – Jay-Z", "Don't chase clout, chase goals. – Lil Baby", "Balance the grind. – Cordae"] },
  { day: "Saturday", story: "Debate team meets. Khalil is tired but invited.", options: ["Show up anyway", "Skip for sleep", "Watch virtually"], statChanges: [{respect: 10}, {knowledge: -10}, {confidence: 5}], quotes: ["Winners work when others rest. – MJ", "Energy is wealth. Protect it. – Lauryn Hill", "Adapt and survive. – SZA"] },
  { day: "Sunday", story: "Church auntie sees him and says she's praying for him.", options: ["Say thank you", "Ignore it", "Ask for advice"], statChanges: [{respect: 10}, {respect: -10}, {knowledge: 5}], quotes: ["Faith moves mountains. – Tupac", "Don't let pride block blessings. – Lecrae", "Wisdom ain't age-bound. – Malcolm X"] },
  { day: "Monday", story: "His older brother returns home and encourages law school.", options: ["Open up about doubts", "Act tough", "Say you'll think about it"], statChanges: [{confidence: 10}, {respect: -10}, {knowledge: 5}], quotes: ["Vulnerability is strength. – Kendrick", "Hard don't mean heartless. – Tupac", "You don't gotta know everything. – Ice Cube"] },
  { day: "Tuesday", story: "He's offered extra hours at work – same day as scholarship interview.", options: ["Go to interview", "Go to work", "Try both"], statChanges: [{knowledge: 10}, {money: 10, respect: -10}, {confidence: 5}], quotes: ["Make time for what matters. – Jay-Z", "Fast money leaves faster. – 21 Savage", "Half-steppin' gets half-paid. – Pop Smoke"] },
  { day: "Wednesday", story: "Scholarship essay due.", options: ["Submit on time", "Submit late", "Don't submit at all"], statChanges: [{knowledge: 10}, {}, {knowledge: -10}], quotes: ["Done is better than perfect. – Nipsey", "Late means risk. – Drake", "Closed doors don't open themselves. – Diddy"] },
  { day: "Thursday", story: "Court hearing for his dad. He can speak if he wants.", options: ["Speak with heart", "Let lawyer do it", "Stay silent"], statChanges: [{respect: 10}, {}, {respect: -10}], quotes: ["Your voice matters. – Angela Davis", "Trust the process. – J. Cole", "Silence can speak too. – Kendrick"] },
  { day: "Friday", story: "Jamal confronts him again about \"changing\".", options: ["Explain your goals", "Brush him off", "Invite him to help out"], statChanges: [{knowledge: 10}, {respect: -10}, {confidence: 5}], quotes: ["Elevation requires separation. – Tupac", "You lose people chasing purpose. – Drake", "Lift while you climb. – Chance"] },
  { day: "Saturday", story: "Final debate round. Opponent mocks his background.", options: ["Stay calm", "Clap back", "Fumble"], statChanges: [{respect: 10}, {respect: -10}, {confidence: -10}], quotes: ["Stay poised. Stay powerful. – MLK", "Don't feed fire with fire. – Jay-Z", "Everyone stumbles. Keep going. – SZA"] }
];

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
    case 2: case 3: case 4: case 5: case 6: case 7: case 8: case 9: case 10: case 11: case 12: case 13: case 14: case 15: case 16:
      showStoryScreen(); break;
    case 17: showResults(); break;
    case 18: showFinalMessage(); break;
    case 19: showEnding(); break;
  }

  drawHUD();
  handleButtonClicks();
  if (quoteToDisplay !== "") {
    textSize(14);
    fill(60);
    text(`"${quoteToDisplay}"`, width / 2, height - 140);
  }
}

function showStoryScreen() {
  if (screen >= 2 && screen <= 16) {
    let storyIndex = screen - 2;
    let story = storyData[storyIndex];
    displayScreen(story.day, story.story, story.options, story.statChanges, story.quotes);
  }
}

function displayScreen(day, story, options, statChanges, quotes) {
  displayStoryText([`${day}:`, story]);
  setupChoice(options[0], options[1], options[2]);
  
  if (choiceA.mouse.presses()) applyChoice('A', statChanges[0], quotes[0]);
  if (choiceB.mouse.presses()) applyChoice('B', statChanges[1], quotes[1]);
  if (choiceC.mouse.presses()) applyChoice('C', statChanges[2], quotes[2]);
}

function applyChoice(choice, statChange, quote) {
  playerChoices[screen] = choice;
  applyStatChanges(statChange);
  quoteToDisplay = quote;
  clearButtons();
  screen++;
}

function applyStatChanges(changes) {
  if (changes.respect) respect += changes.respect;
  if (changes.knowledge) knowledge += changes.knowledge;
  if (changes.confidence) confidence += changes.confidence;
  if (changes.money) money += changes.money;
  
  respect = constrain(respect, 0, 100);
  knowledge = constrain(knowledge, 0, 100);
  money = constrain(money, 0, 100);
  confidence = constrain(confidence, 0, 100);
}

function showResults() {
  let total = respect + knowledge + confidence;
  screen = 19;
}

function showFinalMessage() {
  displayStoryText(["A year later…", "Khalil's story echoes beyond the block.", "Every decision built the man he's becoming."]);
  positionButton(enterButton, width / 2, height - 60);
  enterButton.text = "See Your Ending";
}

function showEnding() {
  let totalScore = respect + knowledge + confidence;
  if (totalScore >= 180) {
    displayStoryText([
      "THE DREAM ACHIEVED",
      "Khalil became a world-known lawyer.",
      "Started an NGO and scholarship.",
      "\"I didn't change who I was to make it. I changed what making it looked like.\" – Jay-Z"
    ]);
  } else if (totalScore >= 140) {
    displayStoryText([
      "THE COMMUNITY PROTECTOR",
      "Khalil skipped college, supported family, became a leader.",
      "Later inherited a law firm.",
      "\"You ain't gotta leave the block to lead it.\" – Nipsey Hussle"
    ]);
  } else {
    displayStoryText([
      "THE FALLOUT",
      "Khalil got lost. Gave up his dream.",
      "\"Dreams don't die. People just stop chasing.\" – Tupac"
    ]);
  }
  positionButton(enterButton, width / 2, height - 60);
  enterButton.text = "Restart";
  quoteToDisplay = "";
}

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
    if (screen === 19) {
      resetGame();
    } else {
      clearButtons();
      screen++;
    }
  }
}

function positionButton(button, x, y) {
  button.position.x = x;
  button.position.y = y;
}

function clearButtons() {
  enterButton.position.x = -999;
  enterButton.position.y = -999;
  choiceA.position.x = -999;
  choiceA.position.y = -999;
  choiceB.position.x = -999;
  choiceB.position.y = -999;
  choiceC.position.x = -999;
  choiceC.position.y = -999;
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

function resetGame() {
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

function keyPressed() {
  if (key === 'R' || key === 'r') {
    resetGame();
  }
}
