
/* AGAINST ALL ODDS - Interactive Story */
/* VARIABLES */
let enterButton, choiceA, choiceB, choiceC;
let screen = 0;
let respect = 50, knowledge = 50, money = 50, confidence = 50, mentalStrength = 50;
let playerChoices = {}; // Track player decisions
let currentQuote = ""; // Store current motivational quote

/* SETUP RUNS ONCE */
function setup() {
  createCanvas(800, 500);
  textAlign(CENTER, CENTER);
  textSize(16);

  // Initialize buttons off-screen
  enterButton = new Sprite(-100, -100);
  choiceA = new Sprite(-100, -100);
  choiceB = new Sprite(-100, -100);
  choiceC = new Sprite(-100, -100);

  // Button styling
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

/* DRAW LOOP */
function draw() {
  background(20);
  
  // Handle screen navigation
  switch(screen) {
    case 0: showTitleScreen(); break;
    case 1: showMeetKhalil(); break;
    case 2: showMomsCall(); break;
    case 3: showDebateOffer(); break;
    case 4: showDebateOutcome(); break;
    case 5: showFriendsCheckIn(); break;
    case 6: showStreetOffer(); break;
    case 7: showJamalPartyInvite(); break;
    case 8: showDebateTryouts(); break;
    case 9: showDebateVsWork(); break;
    case 10: showSchoolStress(); break;
    case 11: showFamilyHomeworkNight(); break;
    case 12: showCustomerIncident(); break;
    case 13: showLetterFromDad(); break;
    case 14: showScholarshipInterview(); break;
    case 15: showFamilyEmergency(); break;
    case 16: showJamalConfrontation(); break;
    case 17: showDadCourtHearing(); break;
    case 18: showFinalDebateTournament(); break;
    case 19: showProgramResults(); break;
    case 20: showOneYearLater(); break;
    case 21: showFinalEnding(); break;
  }

  drawHUD();
  handleButtonClicks();
}

/* SCREEN FUNCTIONS */
function showTitleScreen() {
  fill(255, 215, 0);
  textSize(48);
  text("AGAINST ALL ODDS", width/2, height/2 - 80);
  
  fill(255);
  textSize(18);
  text("Press Begin Story to start Khalil's journey", width/2, height/2 - 20);
  
  positionButton(enterButton, width/2, height/2 + 40);
}

function showMeetKhalil() {
  displayStoryText([
    "Meet KHALIL he's 17, high school senior.",
    "Dad's in jail. Mom works double shifts.",
    "He's raising his siblings: Kya (13), King & Kayson (5).",
    "Works nights at a diner. Dreams of law school."
  ]);
  
  positionButton(enterButton, width/2, height - 80);
  enterButton.text = "Continue";
}

function showMomsCall() {
  displayStoryText([
    "Khalil is pulled out of class.",
    "His mom's in the hospital.",
    "Diagnosis: cancer.",
    "Auntie steps in."
  ]);
  
  positionButton(enterButton, width/2, height - 80);
  enterButton.text = "Continue";
}

function showDebateOffer() {
  displayStoryText([
    "Teacher invites Khalil to debate tryouts",
    "Friday after school."
  ]);
  
  setupChoice("Yes, sign up", "No, focus on work/family", "Try to do both");
}

function showDebateOutcome() {
  let choice = playerChoices[3];
  
  if (choice === 'A') {
    displayStoryText([
      "Khalil begins researching topics and preparing speeches.",
      "His mom beams with pride when he tells her.",
      "",
      "Gains +Knowledge, opens path to scholarship, confidence boost."
    ]);
    knowledge += 15;
    confidence += 10;
    currentQuote = "\"Reality is wrong. Dreams are for real.\" — Tupac";
  } else if (choice === 'B') {
    displayStoryText([
      "Khalil doubles down on work and caregiving.",
      "He misses an opportunity but strengthens his bond with his siblings.",
      "",
      "Gains +Respect for family commitment, but closes debate path."
    ]);
    respect += 15;
    currentQuote = "\"The biggest risk is not taking one.\" — Nipsey Hussle";
  } else {
    displayStoryText([
      "Khalil tries to prep for debate while working shifts.",
      "Sleep-deprived and stressed, he struggles to keep up.",
      "",
      "50/50 chance to balance both..."
    ]);
    
    if (random() > 0.5) {
      displayStoryText([
        "Khalil tries to prep for debate while working shifts.",
        "Sleep-deprived and stressed, he struggles to keep up.",
        "",
        "SUCCESS! Gains +Knowledge and +Money."
      ]);
      knowledge += 10;
      money += 10;
    } else {
      displayStoryText([
        "Khalil tries to prep for debate while working shifts.",
        "Sleep-deprived and stressed, he struggles to keep up.",
        "",
        "FAILED! Loses both opportunities."
      ]);
      knowledge -= 10;
      money -= 5;
    }
    currentQuote = "\"Success is my only option, failure's not.\" — Eminem";
  }
  
  capStats();
  positionButton(enterButton, width/2, height - 80);
  enterButton.text = "Continue";
}

function showFriendsCheckIn() {
  displayStoryText([
    "Friends notice Khalil drifting.",
    "He opens up about mom's illness.",
    "One friend offers risky 'help.'"
  ]);
  
  positionButton(enterButton, width/2, height - 80);
  enterButton.text = "Continue";
}

function showStreetOffer() {
  displayStoryText([
    "A friend offers Khalil a quick money gig:",
    "drop-offs for a local dealer."
  ]);
  
  setupChoice("Say NO", "Say YES", "Walk away silently");
}

function showJamalPartyInvite() {
  displayStoryText([
    "Monday, Jamal pulls up:",
    "\"Yo, party at 7 on Friday.",
    "I'll pick you up. You coming?\""
  ]);
  
  setupChoice("Say NO, study instead", "Say YES", "Make an excuse");
}

function showDebateTryouts() {
  if (playerChoices[3] === 'A' || playerChoices[3] === 'C') {
    displayStoryText([
      "Khalil delivers a strong speech",
      "on systemic injustice.",
      "Applause follows.",
      "Coach: \"You got something special.\""
    ]);
    confidence += 10;
    knowledge += 10;
    currentQuote = "\"It ain't about how hard you hit. It's about how hard you can get hit and keep moving forward.\" — Rocky Balboa";
  } else {
    displayStoryText([
      "Khalil focused on work and family instead.",
      "He watches others from the sidelines.",
      "\"Maybe next time,\" he thinks."
    ]);
    respect += 5;
    currentQuote = "\"The biggest risk is not taking one.\" — Nipsey Hussle";
  }
  
  capStats();
  positionButton(enterButton, width/2, height - 80);
  enterButton.text = "Continue";
}

function showDebateVsWork() {
  displayStoryText([
    "Boss calls. Wants Khalil to cover shift",
    "same time as tryout."
  ]);
  
  setupChoice("Work", "Debate", "Try both");
}

function showSchoolStress() {
  displayStoryText([
    "Homework late. Teacher not impressed.",
    "Khalil's slipping."
  ]);
  
  setupChoice("Study extra hard", "Skip class to work", "Ask for help");
}

function showFamilyHomeworkNight() {
  displayStoryText([
    "Siblings need help.",
    "Your own test is tomorrow."
  ]);
  
  setupChoice("Help siblings", "Focus on your work", "Split time evenly");
}

function showCustomerIncident() {
  displayStoryText([
    "Rude customer at the diner says:",
    "\"Figures someone like you would mess up.\""
  ]);
  
  setupChoice("Stay calm", "Clap back", "Walk out");
}

function showLetterFromDad() {
  displayStoryText([
    "Letter arrives from prison.",
    "\"They told me I'd never make it.",
    "So I had to.\" — Dad",
    "",
    "Khalil pins it on his wall."
  ]);
  
  mentalStrength += 10;
  currentQuote = "\"They told me I'd never make it. So I had to.\" — Dad";
  
  capStats();
  positionButton(enterButton, width/2, height - 80);
  enterButton.text = "Continue";
}

function showScholarshipInterview() {
  displayStoryText([
    "Teacher recommends Khalil",
    "for law program."
  ]);
  
  setupChoice("Go full force", "Turn it down", "Half-commit");
}

function showFamilyEmergency() {
  displayStoryText([
    "One twin sick.",
    "Midterm tomorrow."
  ]);
  
  setupChoice("Skip midterm, stay home", "Let Kya babysit", "Call aunt");
}

function showJamalConfrontation() {
  displayStoryText([
    "Jamal: \"You act brand new.",
    "You too good for us now?\""
  ]);
  
  setupChoice("\"I still ride for y'all\"", "\"I don't need this\"", "Stay silent");
}

function showDadCourtHearing() {
  displayStoryText([
    "Khalil can speak on dad's behalf."
  ]);
  
  setupChoice("Speak boldly", "Let lawyer handle it", "Freeze");
}

function showFinalDebateTournament() {
  displayStoryText([
    "Rival mocks Khalil:",
    "\"You're just a statistic.\""
  ]);
  
  setupChoice("Use logic and stay cool", "Clap back, street-style", "Freeze");
}

function showProgramResults() {
  let totalScore = knowledge + respect + confidence + mentalStrength;
  
  if (totalScore >= 240) {
    displayStoryText([
      "Khalil checks his email.",
      "",
      "ACCEPTED!",
      "",
      "Khalil calls his mom. She cries."
    ]);
    currentQuote = "\"The future belongs to those who prepare for it today.\" — Malcolm X";
  } else if (totalScore >= 180) {
    displayStoryText([
      "Khalil checks his email.",
      "",
      "WAITLISTED",
      "",
      "Coach promises to call in a favor."
    ]);
    currentQuote = "\"Sometimes you gotta take the scenic route to get where you're going.\" — J. Cole";
  } else {
    displayStoryText([
      "Khalil checks his email.",
      "",
      "REJECTED.",
      "",
      "He opens journal, writes new plan."
    ]);
    currentQuote = "\"Every setback is a setup for a comeback.\" — Unknown";
  }
  
  positionButton(enterButton, width/2, height - 80);
  enterButton.text = "Continue";
}

function showOneYearLater() {
  displayStoryText([
    "ONE YEAR LATER",
    "",
    "Khalil's grinding. College apps sent.",
    "Job lined up. Still dreaming."
  ]);
  
  currentQuote = "\"I'm not here to fit in. I'm here to break cycles.\" — Khalil";
  positionButton(enterButton, width/2, height - 80);
  enterButton.text = "Continue";
}

function showFinalEnding() {
  let totalScore = knowledge + respect + confidence + mentalStrength;
  
  if (totalScore >= 240) {
    displayStoryText([
      "ACADEMIC VICTORY",
      "",
      "Khalil made it to law school.",
      "First in his family to graduate college.",
      "",
      "Press R to play again and explore different paths."
    ]);
  } else if (totalScore >= 180) {
    displayStoryText([
      "REDEMPTION ARC",
      "",
      "Khalil found his path, his way.",
      "Not the traditional route, but his own.",
      "",
      "Press R to play again and explore different paths."
    ]);
  } else {
    displayStoryText([
      "FAMILY-FIRST OUTCOME",
      "",
      "Khalil chose family over everything.",
      "His siblings look up to him.",
      "",
      "Press R to play again and explore different paths."
    ]);
  }
}

/* UTILITY FUNCTIONS */
function displayStoryText(lines) {
  fill(255);
  textSize(18);
  let startY = 80;
  
  for (let i = 0; i < lines.length; i++) {
    text(lines[i], width/2, startY + (i * 25));
  }
  
  // Display quote if there is one
  if (currentQuote !== "") {
    fill(255, 215, 0); // Gold color for quotes
    textSize(14);
    text(currentQuote, width/2, height - 200);
    fill(255); // Reset to white
    textSize(18);
  }
}

function setupChoice(textA, textB, textC) {
  choiceA.text = textA;
  choiceB.text = textB;
  choiceC.text = textC;
  
  positionButton(choiceA, width/2, height - 150);
  positionButton(choiceB, width/2, height - 100);
  positionButton(choiceC, width/2, height - 50);
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

function handleButtonClicks() {
  if (enterButton.mouse.presses()) {
    clearButtons();
    screen++;
  }
  
  if (choiceA.mouse.presses()) {
    handleChoice('A');
  }
  
  if (choiceB.mouse.presses()) {
    handleChoice('B');
  }
  
  if (choiceC.mouse.presses()) {
    handleChoice('C');
  }
}

function getQuoteForChoice(choiceQuality) {
  let quotes = {
    good: [
      "\"Reality is wrong. Dreams are for real.\" — Tupac",
      "\"Success is my only option, failure's not.\" — Eminem", 
      "\"The future belongs to those who prepare for it today.\" — Malcolm X",
      "\"Champions are made when no one is watching.\" — Kobe Bryant"
    ],
    okay: [
      "\"The biggest risk is not taking one.\" — Nipsey Hussle",
      "\"If you don't stand for something, you'll fall for anything.\" — Malcolm X",
      "\"Honesty is a very expensive gift. Don't expect it from cheap people.\" — Warren Buffett"
    ],
    bad: [
      "\"More money, more problems.\" — The Notorious B.I.G.",
      "\"Don't sacrifice what you want most for what you want now.\" — Drake",
      "\"Sometimes you gotta take the L to feed the fam.\" — Meek Mill"
    ]
  };
  
  let selectedQuotes = quotes[choiceQuality];
  return selectedQuotes[Math.floor(Math.random() * selectedQuotes.length)];
}

function handleChoice(choice) {
  playerChoices[screen] = choice;
  currentQuote = ""; // Reset quote
  
  // Apply stat changes based on screen and choice
  switch(screen) {
    case 3: // Debate Offer - just store choice, outcome handled in next screen
      break;
      
    case 6: // Street Offer
      if (choice === 'A') {
        respect += 10; mentalStrength += 5;
        currentQuote = "\"I'd rather lose a leg than my integrity.\" — Logic";
      }
      else if (choice === 'B') {
        money += 20; respect -= 15;
        currentQuote = "\"More money, more problems.\" — The Notorious B.I.G.";
      }
      else {
        currentQuote = "\"Sometimes silence speaks louder than words.\" — Unknown";
      }
      break;
      
    case 7: // Jamal's Party
      if (choice === 'A') {
        knowledge += 10;
        currentQuote = "\"Champions are made when no one is watching.\" — Kobe Bryant";
      }
      else if (choice === 'B') {
        respect -= 10; knowledge -= 5;
        currentQuote = "\"Don't sacrifice what you want most for what you want now.\" — Drake";
      }
      else {
        currentQuote = "\"Honesty is a very expensive gift. Don't expect it from cheap people.\" — Warren Buffett";
      }
      break;
      
    case 9: // Debate vs Work
      if (choice === 'A') { 
        money += 15;
        currentQuote = "\"Sometimes you gotta take the L to feed the fam.\" — Meek Mill";
      }
      else if (choice === 'B') {
        knowledge += 15; confidence += 10;
        currentQuote = "\"If you stay ready, you ain't gotta get ready.\" — Snoop Dogg";
      }
      else {
        if (random() > 0.5) { knowledge += 5; money += 5; }
        else { knowledge -= 10; money -= 10; }
        currentQuote = "\"You can't pour from an empty cup.\" — Unknown";
      }
      break;
      
    case 10: // School Stress
      if (choice === 'A') {
        knowledge += 15; mentalStrength -= 5;
        currentQuote = "\"Work until your idols become your rivals.\" — Drake";
      }
      else if (choice === 'B') { 
        money += 10; knowledge -= 10;
        currentQuote = "\"This hustle don't come with a blueprint.\" — J. Cole";
      }
      else {
        knowledge += 5; respect += 5;
        currentQuote = "\"It takes a village to raise a child.\" — African Proverb";
      }
      break;
      
    case 11: // Family Homework Night
      if (choice === 'A') {
        respect += 15;
        currentQuote = "\"Family over everything.\" — Lil Durk";
      }
      else if (choice === 'B') { 
        knowledge += 10;
        currentQuote = "\"Sometimes you gotta be selfish with your time.\" — Rihanna";
      }
      else {
        respect += 5; knowledge += 5;
        currentQuote = "\"Balance is not something you find, it's something you create.\" — Jana Kingsford";
      }
      break;
      
    case 12: // Customer Incident
      if (choice === 'A') {
        respect += 15;
        currentQuote = "\"Class is knowing what to say, when not to say it.\" — Beyoncé";
      }
      else if (choice === 'B') { 
        mentalStrength += 10; money -= 5;
        currentQuote = "\"Speak your truth, even if your voice shakes.\" — Unknown";
      }
      else if (choice === 'C') { 
        confidence += 15; money -= 20;
        currentQuote = "\"Know your worth. Then add tax.\" — Cardi B";
      }
      break;
      
    case 14: // Scholarship Interview
      if (choice === 'A') {
        if (knowledge >= 70) { confidence += 20; }
        else { confidence -= 10; }
        currentQuote = "\"The future belongs to those who prepare for it today.\" — Malcolm X";
      }
      else if (choice === 'B') {
        mentalStrength += 10;
        currentQuote = "\"Protect your peace like your life depends on it.\" — Zendaya";
      }
      else {
        if (random() > 0.5) { confidence += 5; }
        else { respect -= 10; }
        currentQuote = "\"You either go all in or get out.\" — Eminem";
      }
      break;
      
    case 15: // Family Emergency
      if (choice === 'A') {
        respect += 15; knowledge -= 10;
        currentQuote = "\"Family first, always.\" — Vin Diesel";
      }
      else if (choice === 'B') {
        if (random() > 0.6) { /* Kya handles it */ }
        else { respect -= 10; }
        currentQuote = "\"Sometimes you gotta trust the people you love.\" — Unknown";
      }
      else {
        currentQuote = "\"It takes a village.\" — African Proverb";
      }
      break;
      
    case 16: // Jamal Confrontation
      if (choice === 'A') {
        respect += 10;
        currentQuote = "\"Real friends understand your growth.\" — Unknown";
      }
      else if (choice === 'B') {
        mentalStrength += 15;
        currentQuote = "\"You can't grow with people who don't want to grow.\" — Unknown";
      }
      else {
        currentQuote = "\"Sometimes silence is the best response.\" — Unknown";
      }
      break;
      
    case 17: // Dad's Court Hearing
      if (choice === 'A') { 
        respect += 20; confidence += 15;
        currentQuote = "\"Stand up for what you believe in.\" — Unknown";
      }
      else if (choice === 'B') {
        currentQuote = "\"Trust the process.\" — Joel Embiid";
      }
      else if (choice === 'C') { 
        confidence -= 15;
        currentQuote = "\"Courage isn't the absence of fear, it's acting despite it.\" — Unknown";
      }
      break;
      
    case 18: // Final Debate Tournament
      if (choice === 'A') {
        knowledge += 20; confidence += 15;
        currentQuote = "\"Logic will get you from A to B. Imagination will take you everywhere.\" — Einstein";
      }
      else if (choice === 'B') {
        respect += 10; knowledge -= 5;
        currentQuote = "\"Sometimes you gotta speak their language.\" — Unknown";
      }
      else {
        mentalStrength += 10;
        currentQuote = "\"Every loss is a lesson.\" — Unknown";
      }
      break;
  }
  
  capStats();
  clearButtons();
  screen++;
}

function capStats() {
  respect = Math.max(0, Math.min(100, respect));
  knowledge = Math.max(0, Math.min(100, knowledge));
  money = Math.max(0, Math.min(100, money));
  confidence = Math.max(0, Math.min(100, confidence));
  mentalStrength = Math.max(0, Math.min(100, mentalStrength));
}

function drawHUD() {
  fill(255);
  textAlign(LEFT, CENTER);
  textSize(12);
  
  text(`Respect: ${respect}`, 20, 25);
  text(`Knowledge: ${knowledge}`, 20, 40);
  text(`Money: ${money}`, 20, 55);
  text(`Confidence: ${confidence}`, 20, 70);
  text(`Mental Strength: ${mentalStrength}`, 20, 85);
  
  textAlign(CENTER, CENTER);
}

function keyPressed() {
  if (key === 'R' || key === 'r') {
    // Restart game
    screen = 0;
    respect = 50;
    knowledge = 50;
    money = 50;
    confidence = 50;
    mentalStrength = 50;
    playerChoices = {};
    currentQuote = "";
    clearButtons();
    positionButton(enterButton, width/2, height/2 + 40);
    enterButton.text = "Begin Story";
  }
}
