
/* AGAINST ALL ODDS - Interactive Story */
/* VARIABLES */
let enterButton, choiceA, choiceB, choiceC;
let screen = 0;
let respect = 50, knowledge = 50, money = 50, confidence = 50;
let playerChoices = {}; // Track player decisions

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
  background(245, 245, 220); // cream color
  
  // Handle screen navigation
  switch(screen) {
    case 0: showTitleScreen(); break;
    case 1: showMeetKhalil(); break;
    case 2: showDebateOffer(); break;
    case 3: showFamilyTalk(); break;
    case 4: showLateNightCall(); break;
    case 5: showJamalParty(); break;
    case 6: showFirstDebate(); break;
    case 7: showMissingHomework(); break;
    case 8: showCustomerIncident(); break;
    case 9: showDadLetter(); break;
    case 10: showClassmateOffer(); break;
    case 11: showTeacherRecommendation(); break;
    case 12: showFamilyEmergency(); break;
    case 13: showInterview(); break;
    case 14: showJamalAgain(); break;
    case 15: showCourtHearing(); break;
    case 16: showFinalDebate(); break;
    case 17: showProgramResults(); break;
    case 18: showOneYearLater(); break;
    case 19: showEnding(); break;
  }

  drawHUD();
  handleButtonClicks();
}

/* SCREEN FUNCTIONS */
function showTitleScreen() {
  fill(101, 67, 33); // dark brown
  textSize(48);
  text("AGAINST ALL ODDS", width/2, height/2 - 80);
  
  fill(101, 67, 33); // dark brown
  textSize(18);
  text("An Interactive Story About Khalil's Journey", width/2, height/2 - 20);
  
  positionButton(enterButton, width/2, height/2 + 40);
}

function showMeetKhalil() {
  displayStoryText([
    "Meet KHALIL  17, smart, underestimated, raised in the hood.",
    "Dad's in prison for a crime he didn't commit.",
    "Mom's holding it down with three younger siblings:",
    "Kya (13), King and Kayson (5-year-old twins).",
    "",
    "Khalil works nights at a local diner to help out  but his dream?",
    "LAW SCHOOL.",
    "People laugh when he says it, but he's not backing down."
  ]);
  
  positionButton(enterButton, width/2, height - 80);
  enterButton.text = "Continue";
}

function showDebateOffer() {
  displayStoryText([
    "Khalil's in class, zoning out when the teacher calls on him.",
    "He answers flawlessly.",
    "",
    "\"Why don't you try out for the debate team?\"",
    "the teacher says. \"Tryouts are Tuesday after school.\"",
    "",
    "He shrugs, unsure."
  ]);
  
  positionButton(enterButton, width/2, height - 80);
  enterButton.text = "Continue";
}

function showFamilyTalk() {
  displayStoryText([
    "That night, Khalil tells his mom.",
    "She's proud  tears in her eyes.",
    "",
    "He visits his dad and shares the news.",
    "\"Take it,\" his dad says. \"You were born for this.\""
  ]);
  
  positionButton(enterButton, width/2, height - 80);
  enterButton.text = "Continue";
}

function showLateNightCall() {
  displayStoryText([
    "10:03 PM.",
    "Khalil's boss calls:",
    "\"Hey Khalil, can you take a shift Tuesday?",
    "Someone called in sick.\"",
    "",
    "Debate tryouts or shift?"
  ]);
  
  setupChoice("Go to work", "Go to debate", "Try to do both");
}

function showJamalParty() {
  displayStoryText([
    "Monday after school, Khalil's friend Jamal pulls up.",
    "\"Yo, party tonight at 7! You in?\""
  ]);
  
  setupChoice("Say no, I gotta study", "Say yes, let's go", "Make an excuse");
}

function showFirstDebate() {
  if (playerChoices[4] === 'B' || playerChoices[4] === 'C') {
    displayStoryText([
      "Khalil's standing in front of a small crowd.",
      "His palms sweat.",
      "But then... He speaks.",
      "Clear. Confident. Bold.",
      "Applause."
    ]);
    knowledge += 10;
    confidence += 10;
  } else {
    displayStoryText([
      "Khalil had to work instead of trying out.",
      "He watches from the sidelines as others debate.",
      "\"Maybe next time,\" he thinks."
    ]);
    money += 10;
  }
  
  // Cap stats
  respect = Math.max(0, Math.min(100, respect));
  knowledge = Math.max(0, Math.min(100, knowledge));
  money = Math.max(0, Math.min(100, money));
  confidence = Math.max(0, Math.min(100, confidence));
  
  positionButton(enterButton, width/2, height - 80);
  enterButton.text = "Continue";
}

function showMissingHomework() {
  displayStoryText([
    "Next day, teacher says, \"Where's your paper?\"",
    "Khalil forgot. He stayed up babysitting.",
    "He can explain or take the L."
  ]);
  
  setupChoice("Be honest — I forgot", "Make up a lie", "Beg for more time");
}

function showCustomerIncident() {
  displayStoryText([
    "At the diner, a customer talks reckless.",
    "\"You people are all the same.\"",
    "Khalil feels heated.",
    "His boss watches silently."
  ]);
  
  setupChoice("Keep calm, finish shift", "Clap back", "Walk out");
}

function showDadLetter() {
  displayStoryText([
    "A letter arrives from prison.",
    "His dad shares a quote:",
    "",
    "\"They told me I'd never make it.",
    "So I had to.\"",
    "",
    "Khalil pins it on his wall."
  ]);
  
  confidence += 5;
  
  // Cap stats
  respect = Math.max(0, Math.min(100, respect));
  knowledge = Math.max(0, Math.min(100, knowledge));
  money = Math.max(0, Math.min(100, money));
  confidence = Math.max(0, Math.min(100, confidence));
  
  positionButton(enterButton, width/2, height - 80);
  enterButton.text = "Continue";
}

function showClassmateOffer() {
  displayStoryText([
    "At school, a known plug offers Khalil money",
    "to \"drop off a package.\"",
    "\"No risk, easy cash.\""
  ]);
  
  setupChoice("Say no, not risking it", "Say yes", "Walk away silently");
}

function showTeacherRecommendation() {
  displayStoryText([
    "Khalil's teacher says she wants to recommend him",
    "for a pre-law summer program.",
    "He needs references, an essay, and... time."
  ]);
  
  setupChoice("Go for it full force", "Turn it down", "Say yes, half-commit");
}

function showFamilyEmergency() {
  displayStoryText([
    "One twin has a fever.",
    "Mom has to work.",
    "Khalil has a midterm tomorrow."
  ]);
  
  setupChoice("Stay home, skip test", "Leave siblings with Kya", "Call backup");
}

function showInterview() {
  displayStoryText([
    "Khalil gets called in for a scholarship interview.",
    "He's nervous.",
    "",
    "Question: Why do you want to be a lawyer?"
  ]);
  
  setupChoice("Fight for people like dad", "Prove them wrong", "Want a better life");
}

function showJamalAgain() {
  displayStoryText([
    "Jamal pulls up again:",
    "\"Bro, you changing. You too good for us now?\"",
    "Khalil has to respond."
  ]);
  
  setupChoice("I still ride for y'all", "I don't need this", "Say nothing");
}

function showCourtHearing() {
  displayStoryText([
    "Big day. Khalil has a chance to speak for his dad.",
    "Eyes on him.",
    "Will he?"
  ]);
  
  setupChoice("Speak boldly", "Let lawyer handle it", "Freeze up");
}

function showFinalDebate() {
  displayStoryText([
    "Khalil's team makes finals.",
    "He's up against a private school kid",
    "who mocks his background."
  ]);
  
  setupChoice("Stay cool, use logic", "Call him out", "Fumble it");
}

function showProgramResults() {
  let totalScore = knowledge + respect + confidence;
  
  if (totalScore >= 180) {
    displayStoryText([
      "The email hits.",
      "",
      "ACCEPTED!",
      "",
      "Khalil got into the pre-law program!"
    ]);
  } else if (totalScore >= 140) {
    displayStoryText([
      "The email hits.",
      "",
      "WAITLISTED",
      "",
      "But hope remains..."
    ]);
  } else {
    displayStoryText([
      "The email hits.",
      "",
      "REJECTED.",
      "",
      "But this isn't the end of his story."
    ]);
  }
  
  positionButton(enterButton, width/2, height - 80);
  enterButton.text = "Continue";
}

function showOneYearLater() {
  displayStoryText([
    "ONE YEAR LATER",
    "",
    "Khalil's applying to college.",
    "No longer just the busboy.",
    "Still the big brother.",
    "Still hungry.",
    "Still climbing."
  ]);
  
  positionButton(enterButton, width/2, height - 80);
  enterButton.text = "Continue";
}

function showEnding() {
  let totalScore = respect + knowledge + confidence;

  clearButtons();
  textSize(20);
  fill(101, 67, 33);

  if (totalScore >= 180) {
    // Ending 1 – The Dream Achieved
    displayStoryText([
      "ENDING: THE DREAM ACHIEVED",
      "Khalil became a world-known lawyer.",
      "He launched an NGO and scholarship to lift others like him.",
      "He didn't change who he was — he made the system see his worth.",
      "\"I didn't change who I was to make it. I changed what making it looked like.\" – Jay-Z"
    ]);
  } else if (totalScore >= 140) {
    // Ending 2 – The Community Protector
    displayStoryText([
      "ENDING: THE COMMUNITY PROTECTOR",
      "Khalil skipped college, held down his family, and led change.",
      "His dad got out. His siblings got better schools.",
      "A lawyer passed him a firm. He passed the torch.",
      "\"You ain't gotta leave the block to lead it.\" – Nipsey Hussle"
    ]);
  } else {
    // Ending 3 – The Fallout
    displayStoryText([
      "ENDING: THE FALLOUT",
      "Khalil missed his chances. He got lost in the noise.",
      "No debate. No scholarship. No law school.",
      "The street got him before the system could.",
      "\"Dreams don't die. People just stop chasing.\" – Tupac"
    ]);
  }

  positionButton(enterButton, width/2, height - 80);
  enterButton.text = "Play Again";
}

function showFinalMessage() {
  displayStoryText([
    "\"They said I wouldn't make it.\"",
    "",
    "\"But I'm not here to fit in.",
    "I'm here to build something bigger.\"",
    "",
    "🎓 You've reached one of Khalil's endings.",
    "Press R to play again and explore different paths."
  ]);
}

/* UTILITY FUNCTIONS */
function displayStoryText(lines) {
  fill(101, 67, 33); // dark brown
  textSize(18);
  let startY = 80;
  
  for (let i = 0; i < lines.length; i++) {
    text(lines[i], width/2, startY + (i * 25));
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

function handleChoice(choice) {
  playerChoices[screen] = choice;
  
  // Apply stat changes based on screen and choice
  switch(screen) {
    case 4: // Late night call
      if (choice === 'A') { respect += 5; money += 10; }
      else if (choice === 'B') { knowledge += 10; money -= 5; }
      else { 
        if (random() > 0.5) { knowledge += 5; money += 5; }
        else { knowledge -= 5; money -= 5; }
      }
      break;
      
    case 5: // Jamal's party
      if (choice === 'A') knowledge += 10;
      else if (choice === 'B') respect -= 10;
      break;
      
    case 7: // Missing homework
      if (choice === 'A') { respect += 5; knowledge -= 5; }
      else if (choice === 'C') money -= 5;
      break;
      
    case 8: // Customer incident
      if (choice === 'A') respect += 10;
      else if (choice === 'B') { respect -= 5; confidence += 5; }
      else if (choice === 'C') { money -= 10; confidence += 10; }
      break;
      
    case 10: // Classmate offer
      if (choice === 'A') respect += 10;
      else if (choice === 'B') { money += 20; respect -= 15; }
      break;
      
    case 15: // Court hearing
      if (choice === 'A') { respect += 15; confidence += 10; }
      else if (choice === 'C') { respect -= 10; }
      break;
  }
  
  // Cap all stats between 0 and 100
  respect = Math.max(0, Math.min(100, respect));
  knowledge = Math.max(0, Math.min(100, knowledge));
  money = Math.max(0, Math.min(100, money));
  confidence = Math.max(0, Math.min(100, confidence));
  
  clearButtons();
  screen++;
}

function drawHUD() {
  fill(101, 67, 33); // dark brown
  textAlign(LEFT, CENTER);
  textSize(14);
  
  text(`Respect: ${respect}`, 20, 30);
  text(`Knowledge: ${knowledge}`, 20, 50);
  text(`Money: ${money}`, 20, 70);
  text(`Confidence: ${confidence}`, 20, 90);
  
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
    playerChoices = {};
    clearButtons();
    positionButton(enterButton, width/2, height/2 + 40);
    enterButton.text = "Begin Story";
  }
}
