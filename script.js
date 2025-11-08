/* AGAINST ALL ODDS – COMPLETE GAME BUILD */

let enterButton, choiceA, choiceB, choiceC;
let screen = 0;
let respect = 0, knowledge = 0, confidence = 0, money = 0;
let playerChoices = {};
let quoteToDisplay = "";
let nextScreen = 0; // Track which screen to go to after quote
let debateTeamJoined = false;
let scholarshipSubmitted = false;
let trustPenalty = false;

function setup() {
  createCanvas(900, 600);
  textAlign(CENTER, CENTER);
  textSize(16);

  enterButton = new Sprite(-100, -100);
  choiceA = new Sprite(-100, -100);
  choiceB = new Sprite(-100, -100);
  choiceC = new Sprite(-100, -100);

  setupButton(enterButton, "BEGIN", 200, 50);
  setupButton(choiceA, "Choice A", 300, 50);
  setupButton(choiceB, "Choice B", 300, 50);
  setupButton(choiceC, "Choice C", 300, 50);
}

function setupButton(button, txt, w, h) {
  button.w = w;
  button.h = h;
  button.text = txt;
  button.collider = "k";
  button.color = color(70, 130, 180);
  button.textColor = color(255);
  button.textSize = 14;
}

function draw() {
  background(245, 245, 220);

  switch (screen) {
    case 0: showTitleScreen(); break;
    case 1: showIntroduction(); break;
    case 2: showDebateOffer(); break;
    case 3: showFamilyReaction(); break;
    case 4: showShiftRequest(); break;
    case 4.5: showQuoteScreen(); break; // Quote screen after shift request
    case 5: showJamalParty(); break;
    case 5.5: showQuoteScreen(); break; // Quote screen after party invite
    case 6: showMissingHomework(); break;
    case 6.5: showQuoteScreen(); break; // Quote screen after homework
    case 7: showDinerDrama(); break;
    case 7.5: showQuoteScreen(); break; // Quote screen after diner
    case 8: showDadLetter(); break;
    case 9: showTaeOffer(); break;
    case 9.5: showQuoteScreen(); break; // Quote screen after Tae offer
    case 10: showLetterReflection(); break;
    case 11: showKionevReturn(); break;
    case 12: showPartyDecision(); break;
    case 12.5: showQuoteScreen(); break; // Quote screen after party decision
    case 13: showKionevTalk(); break;
    case 14: showMoneyOption(); break;
    case 14.5: showQuoteScreen(); break; // Quote screen after money option
    case 15: showDebateFollowUp(); break;
    case 15.5: showQuoteScreen(); break; // Quote screen after debate followup
    case 16: showScholarshipStruggle(); break;
    case 16.5: showQuoteScreen(); break; // Quote screen after scholarship struggle
    case 17: showDadMessage(); break;
    case 18: showBarbershop(); break;
    case 18.5: showQuoteScreen(); break; // Quote screen after barbershop
    case 19: showSundayDecision(); break;
    case 19.5: showQuoteScreen(); break; // Quote screen after Sunday decision
    case 20: showMondayWakeUp(); break;
    case 21: showLastShot(); break;
    case 21.5: showQuoteScreen(); break; // Quote screen after last shot
    case 22: showFinalReflection(); break;
    case 23: showEnding(); break;
  }

  drawHUD();
  handleButtonClicks();
}

function showTitleScreen() {
  fill(0);
  textSize(48);
  textAlign(CENTER);
  text("AGAINST ALL ODDS", width / 2, height / 2 - 100);
  textSize(20);
  text("A game about grit, struggle, and the fight to rise", width / 2, height / 2 - 60);
  text("without selling out.", width / 2, height / 2 - 35);
  textSize(16);
  text("Press BEGIN to start Khalil's journey.", width / 2, height / 2 + 20);

  positionButton(enterButton, width / 2, height / 2 + 80);
  enterButton.text = "BEGIN";

  if (enterButton.mouse.presses()) {
    clearButtons();
    screen = 1;
  }
}

function showIntroduction() {
  fill(0);
  textSize(24);
  textAlign(CENTER);
  text("Meet Khalil", width / 2, 60);

  textSize(16);
  let intro = [
    "This is Khalil. 17 years old.",
    "Lives in the hood. Wakes up early, works late, still shows up for school.",
    "He's a busboy at the local diner.",
    "",
    "But don't get it twisted - his dream? LAW SCHOOL.",
    "Not just for money. For justice. For his dad. For his family.",
    "",
    "His dad, Big Jim, is in prison for something he didn't do.",
    "His mom, Lisa, is holding it all down - barely.",
    "He's got siblings: Kya (13), Kionev (21), and the twins (5).",
    "",
    "This is his story. Your choices shape what happens next."
  ];

  let startY = 120;
  for (let i = 0; i < intro.length; i++) {
    text(intro[i], width / 2, startY + (i * 25));
  }

  positionButton(enterButton, width / 2, height - 60);
  enterButton.text = "Continue";

  if (enterButton.mouse.presses()) {
    clearButtons();
    screen = 2;
  }
}

function showDebateOffer() {
  displayStoryText([
    "MONDAY, 3:00 PM - The Debate Offer",
    "",
    "School's out. Khalil's packing up when his teacher stops him.",
    "",
    "Teacher: 'You've got a strong voice, Khalil.",
    "Tryouts for the debate team are tomorrow. Think about it.'"
  ]);

  positionButton(enterButton, width / 2, height - 60);
  enterButton.text = "Continue";

  if (enterButton.mouse.presses()) {
    clearButtons();
    screen = 3;
  }
}

function showFamilyReaction() {
  displayStoryText([
    "MONDAY, 6:00 PM - Family Reaction",
    "",
    "At home, Khalil tells his mom.",
    "She smiles - really smiles - for the first time in a minute.",
    "Later, he visits his dad at prison.",
    "",
    "Big Jim: 'They see your zip code, not your potential.",
    "Change that. Show up and let 'em hear you.'"
  ]);

  positionButton(enterButton, width / 2, height - 60);
  enterButton.text = "Continue";

  if (enterButton.mouse.presses()) {
    clearButtons();
    screen = 4;
  }
}

function showShiftRequest() {
  displayStoryText([
    "MONDAY, 10:03 PM - Shift Request",
    "",
    "Khalil's boss calls:",
    "'Hey, one of the servers called in sick.",
    "Any chance you can cover tomorrow after school?'"
  ]);

  setupChoice("Go to work", "Go to debate", "Try to do both");

  if (choiceA.mouse.presses()) {
    applyChoice('A', "Sometimes you gotta do what you gotta do to do what you wanna do. - Denzel Washington", 5, 0, 0, 10);
  }
  if (choiceB.mouse.presses()) {
    applyChoice('B', "I'm not a businessman. I'm a business, man. - Jay-Z", 0, 10, 0, -5);
    debateTeamJoined = true;
  }
  if (choiceC.mouse.presses()) {
    let success = random() > 0.5;
    if (success) {
      applyChoice('C', "The marathon continues. - Nipsey Hussle", 5, 5, 5, 5);
    } else {
      applyChoice('C', "Can't do everything at once. - Common", -5, -5, -5, -5);
    }
  }
}

function showJamalParty() {
  displayStoryText([
    "TUESDAY, 1:15 PM - Jamal's Party Invite",
    "",
    "Khalil's at his locker when his boy Jamal pulls up.",
    "",
    "Jamal: 'Yo! Big party Friday night. You in or what?'"
  ]);

  setupChoice("Say no, I gotta study", "Say yes, let's go", "Make an excuse");

  if (choiceA.mouse.presses()) {
    applyChoice('A', "I'm tryin' to make a dollar outta fifteen cents. - Tupac", 0, 10, 5, 0);
  }
  if (choiceB.mouse.presses()) {
    applyChoice('B', "If you don't stand for something, you'll fall for anything. - Malcolm X", -10, 0, -5, 0);
  }
  if (choiceC.mouse.presses()) {
    applyChoice('C', "Reality is wrong, dreams are for real. - Tupac", 0, 0, 0, 0);
  }
}

function showMissingHomework() {
  displayStoryText([
    "WEDNESDAY, 8:20 AM - Missing Homework",
    "",
    "Khalil walks into class late and tired.",
    "Stayed up watching the twins so his mom could rest.",
    "Teacher: 'Where's your essay, Khalil?'",
    "He checks his bag. Nothing. He forgot."
  ]);

  setupChoice("Be honest - I forgot", "Make up a lie", "Ask for more time");

  if (choiceA.mouse.presses()) {
    applyChoice('A', "Even when I was wrong, I got my point across. - 50 Cent", 10, -5, 5, 0);
  }
  if (choiceB.mouse.presses()) {
    applyChoice('B', "You gotta fake it till you make it... but don't fake too long. - Snoop Dogg", -5, 0, -5, 0);
    trustPenalty = true;
  }
  if (choiceC.mouse.presses()) {
    let success = random() > 0.5;
    if (success) {
      applyChoice('C', "Opportunity doesn't knock. You gotta break that door down. - The Rock", 5, 5, 5, 0);
    } else {
      applyChoice('C', "Sometimes teachers don't give second chances. - Common", 0, -10, -5, 0);
    }
  }
}

function showDinerDrama() {
  displayStoryText([
    "WEDNESDAY, 7:15 PM - Diner Drama",
    "",
    "Khalil's working the dinner shift.",
    "A customer snaps at him:",
    "'You people are always lazy and rude.'",
    "Khalil freezes. His boss says nothing."
  ]);

  setupChoice("Stay calm, finish shift", "Clap back, then walk away", "Leave mid-shift silently");

  if (choiceA.mouse.presses()) {
    applyChoice('A', "You gotta learn to survive in the game before you can win it. - Ice Cube", 10, 0, 10, 5);
  }
  if (choiceB.mouse.presses()) {
    applyChoice('B', "I'm not violent, but I will protect my energy. - Lauryn Hill", -5, 0, 10, 0);
  }
  if (choiceC.mouse.presses()) {
    applyChoice('C', "Silence is sometimes the loudest statement. - Kendrick Lamar", 0, 0, 10, -10);
  }
}

function showDadLetter() {
  displayStoryText([
    "THURSDAY, 7:45 AM - Letter from His Dad",
    "",
    "Khalil checks the mailbox on his way out.",
    "Inside, a letter. Thick paper. His dad's handwriting.",
    "",
    "Big Jim: 'The system wasn't built for us - but that doesn't",
    "mean we don't belong in it. You don't gotta become them",
    "to beat them. Just be smarter. Be louder.'"
  ]);

  confidence += 10;
  confidence = constrain(confidence, 0, 100);

  positionButton(enterButton, width / 2, height - 60);
  enterButton.text = "Continue";

  if (enterButton.mouse.presses()) {
    clearButtons();
    screen = 9;
  }
}

function showTaeOffer() {
  displayStoryText([
    "THURSDAY, 12:00 PM - The Offer",
    "",
    "At lunch, upperclassman Tae slides up.",
    "",
    "Tae: 'Yo, I know you're tryna stack some cash.",
    "All you gotta do is drop a package. No questions. Easy money.'"
  ]);

  setupChoice("Say no - I'm not risking it", "Say yes", "Walk away silently");

  if (choiceA.mouse.presses()) {
    applyChoice('A', "You can't change the world if you're stuck in a cell. - Meek Mill", 15, 0, 10, 0);
  }
  if (choiceB.mouse.presses()) {
    applyChoice('B', "The streets raised me, but I'm tryna raise the bar. - J. Cole", -10, 0, -10, 20);
  }
  if (choiceC.mouse.presses()) {
    applyChoice('C', "Just because I don't say it, doesn't mean I'm not thinking 10 steps ahead. - Jay-Z", 0, 5, 5, 0);
  }
}

function showLetterReflection() {
  displayStoryText([
    "THURSDAY, 9:00 PM - Alone with the Letter",
    "",
    "Khalil's in his room. The house is quiet.",
    "Mom's working late. Twins are asleep.",
    "He opens the letter again.",
    "",
    "'Your name means something. Make sure they remember",
    "it for the right reasons.' - Big Jim"
  ]);

  positionButton(enterButton, width / 2, height - 60);
  enterButton.text = "Continue";

  if (enterButton.mouse.presses()) {
    clearButtons();
    screen = 11;
  }
}

function showKionevReturn() {
  displayStoryText([
    "FRIDAY, 4:00 PM - Big Brother Returns",
    "",
    "Khalil walks in from school.",
    "It's Kionev, his 21-year-old brother.",
    "",
    "Kionev: 'There's this summer program. Pre-law.",
    "Might lead to a scholarship. But the application fee's $50.",
    "That dream real? Then don't play scared.'"
  ]);

  confidence += 10;
  confidence = constrain(confidence, 0, 100);

  positionButton(enterButton, width / 2, height - 60);
  enterButton.text = "Continue";

  if (enterButton.mouse.presses()) {
    clearButtons();
    screen = 12;
  }
}

function showPartyDecision() {
  displayStoryText([
    "FRIDAY, 7:30 PM - Jamal's Party Is ON",
    "",
    "Phone buzzes. It's Jamal.",
    "'Bro, we outside. Party's lit. Come out!'",
    "",
    "Khalil looks at the twins, sleeping. Mom's still working."
  ]);

  setupChoice("Stay home, work on essay", "Sneak out to party", "Text 'Can't tonight, fam stuff'");

  if (choiceA.mouse.presses()) {
    applyChoice('A', "I don't pop bottles, I plot problems and solve them. - J. Cole", 5, 15, 10, 0);
    scholarshipSubmitted = true;
  }
  if (choiceB.mouse.presses()) {
    applyChoice('B', "Fun is temporary. Freedom is permanent. - Kendrick Lamar", -10, -5, -5, 0);
  }
  if (choiceC.mouse.presses()) {
    applyChoice('C', "I don't need the spotlight, just the power to flip the switch. - Dave East", 0, 0, 0, 0);
  }
}

function showKionevTalk() {
  if (playerChoices[12] === 'A') {
    displayStoryText([
      "FRIDAY, 10:45 PM - Kionev's Talk",
      "",
      "Kionev passes by his room, sees him typing.",
      "",
      "Kionev: 'That's what I like to see. You focused.'",
      "'Don't worry 'bout being from the hood.",
      "Worry 'bout what you're gonna do with it.'"
    ]);
  } else {
    displayStoryText([
      "FRIDAY, 10:45 PM - Kionev's Talk",
      "",
      "Kionev's sitting on the porch when Khalil sneaks in.",
      "",
      "Kionev: 'Hope the fun was worth the backslide.'",
      "'You can dance with the moment, but don't let it lead.' - Common"
    ]);
  }

  positionButton(enterButton, width / 2, height - 60);
  enterButton.text = "Continue";

  if (enterButton.mouse.presses()) {
    clearButtons();
    screen = 14;
  }
}

function showMoneyOption() {
  displayStoryText([
    "SATURDAY, 9:00 AM - The Money Option",
    "",
    "Phone buzzes. Text from a friend:",
    "'My boss needs one more for weekend shift. Pays $40 flat.'",
    "",
    "Khalil thinks: $40 = application fee for scholarship."
  ]);

  setupChoice("Take the job", "Turn it down and rest", "Ask for half shift");

  if (choiceA.mouse.presses()) {
    applyChoice('A', "Money ain't the goal. It's just the tool. - Nipsey Hussle", 0, 0, -5, 20);
  }
  if (choiceB.mouse.presses()) {
    applyChoice('B', "You can't pour from an empty cup. - Erykah Badu", 0, 0, 10, 0);
  }
  if (choiceC.mouse.presses()) {
    applyChoice('C', "Balance ain't easy, but it's necessary. - Issa Rae", 0, 0, 0, 10);
  }
}

function showDebateFollowUp() {
  displayStoryText([
    "SATURDAY, 2:00 PM - Debate Team Follow-Up",
    "",
    "Khalil gets a call from the debate coach.",
    "",
    "'I liked your energy during tryouts. You've got potential.",
    "Come Monday. You're in. But miss one meeting and you're off.'"
  ]);

  setupChoice("Go all in on debate", "Say no - too much on plate", "Ask for part-time");

  if (choiceA.mouse.presses()) {
    applyChoice('A', "Use your voice like it's the only weapon you've got. - Angela Davis", 0, 15, 10, 0);
    debateTeamJoined = true;
  }
  if (choiceB.mouse.presses()) {
    applyChoice('B', "Saying no is self-care, not failure. - Solange", -5, 0, 10, 0);
  }
  if (choiceC.mouse.presses()) {
    applyChoice('C', "You don't have to do it all to be doing enough. - Janelle Monáe", 0, 5, 5, 0);
  }
}

function showScholarshipStruggle() {
  displayStoryText([
    "SATURDAY, 8:30 PM - Scholarship Essay Struggle",
    "",
    "Khalil opens the scholarship app on his laptop.",
    "Blank screen.",
    "Essay question: 'What does justice mean to you?'",
    "",
    "He stares. Thinks of his dad. His fingers won't move."
  ]);

  setupChoice("Take a break, listen to music", "Start writing anyway", "Text dad for inspiration");

  if (choiceA.mouse.presses()) {
    applyChoice('A', "Music is what feelings sound like. - SZA", 0, 0, 10, 0);
  }
  if (choiceB.mouse.presses()) {
    applyChoice('B', "You can't edit a blank page. - Ava DuVernay", 0, 10, 0, 0);
  }
  if (choiceC.mouse.presses()) {
    applyChoice('C', "Sometimes you gotta go back to where it started. - Kendrick Lamar", 5, 5, 10, 0);
  }
}

function showDadMessage() {
  displayStoryText([
    "SUNDAY, 10:00 AM - A Message from Big Jim",
    "",
    "Khalil wakes up to a voicemail.",
    "",
    "Dad: 'I don't got much time on this call...",
    "You remind me of me - before life hit.",
    "But you different. Smarter. Louder. Don't waste that.",
    "They put me in a box. You build the blueprint.'"
  ]);

  confidence += 15;
  respect += 10;
  confidence = constrain(confidence, 0, 100);
  respect = constrain(respect, 0, 100);

  positionButton(enterButton, width / 2, height - 60);
  enterButton.text = "Continue";

  if (enterButton.mouse.presses()) {
    clearButtons();
    screen = 18;
  }
}

function showBarbershop() {
  displayStoryText([
    "SUNDAY, 1:00 PM - At the Barbershop",
    "",
    "Uncle Dre notices him.",
    "'Heard you tryna be a lawyer. That's rare around here.",
    "But don't think you gotta change who you are.",
    "Take the culture with you.'"
  ]);

  setupChoice("I just wanna make it out", "I want them to know who I am", "Man, I don't know anymore");

  if (choiceA.mouse.presses()) {
    applyChoice('A', "Don't run from the block. Redesign it. - Killer Mike", -5, 10, 0, 0);
  }
  if (choiceB.mouse.presses()) {
    applyChoice('B', "Be so dope they can't erase you. - Issa Rae", 10, 0, 10, 0);
  }
  if (choiceC.mouse.presses()) {
    applyChoice('C', "You either evolve or repeat. - SZA", -10, 0, -5, 0);
  }
}

function showSundayDecision() {
  displayStoryText([
    "SUNDAY, 8:00 PM - The Decision",
    "",
    "Khalil sits at his desk.",
    "Laptop open. Debate prep on one side.",
    "Scholarship app still blinking on the other.",
    "No one's telling him what to do. He has to choose."
  ]);

  setupChoice("Stay up, finish essay", "Rest, I need to breathe", "Scroll, zone out, do nothing");

  if (choiceA.mouse.presses()) {
    applyChoice('A', "No sleep 'til the mission complete. - J. Cole", 0, 20, 5, 0);
    scholarshipSubmitted = true;
  }
  if (choiceB.mouse.presses()) {
    applyChoice('B', "Burnout don't build legacy. - Lauryn Hill", 0, 0, 15, 0);
  }
  if (choiceC.mouse.presses()) {
    applyChoice('C', "Distraction is the enemy of destiny. - Kendrick Lamar", -5, -15, -10, 0);
  }
}

function showMondayWakeUp() {
  displayStoryText([
    "MONDAY, 7:00 AM - Wake-Up Call",
    "",
    "Alarm goes off. Khalil opens his eyes.",
    "Laptop's still on.",
    "",
    "Two tabs open:",
    "• Pre-Law Scholarship Submission - DUE 12PM",
    "• Debate Team Practice - 4PM"
  ]);

  positionButton(enterButton, width / 2, height - 60);
  enterButton.text = "Continue";

  if (enterButton.mouse.presses()) {
    clearButtons();
    screen = 21;
  }
}

function showLastShot() {
  displayStoryText([
    "MONDAY, 9:00 AM - Last Shot",
    "",
    "Khalil sits in front of the laptop.",
    "He's got 3 hours to submit that scholarship app.",
    "But the diner calls. They're short-staffed.",
    "He's needed NOW."
  ]);

  setupChoice("Submit scholarship, skip work", "Go to work, skip scholarship", "Try to do both");

  if (choiceA.mouse.presses()) {
    applyChoice('A', "If you don't bet on yourself, why would anyone else? - Diddy", 0, 15, 10, -10);
    scholarshipSubmitted = true;
  }
  if (choiceB.mouse.presses()) {
    applyChoice('B', "Sometimes responsibility wins. Don't forget your dreams. - Common", 10, -5, 5, 15);
  }
  if (choiceC.mouse.presses()) {
    let totalStats = respect + knowledge + confidence;
    if (totalStats >= 120) {
      applyChoice('C', "Pressure builds diamonds. - Drake", 5, 10, 10, 5);
      scholarshipSubmitted = true;
      debateTeamJoined = true;
    } else {
      applyChoice('C', "Can't do everything perfectly. - Common", -5, -10, -5, 0);
    }
  }
}

function showFinalReflection() {
  let totalStats = respect + knowledge + confidence;

  if (totalStats >= 150 && scholarshipSubmitted && debateTeamJoined) {
    displayStoryText([
      "MONDAY, 11:00 PM - Final Reflection",
      "",
      "Khalil lies awake in bed.",
      "He submitted the app. He's in debate.",
      "His essay hit deep.",
      "A future's waiting - and it's got his name on it.",
      "",
      "'They said I wouldn't make it. I'm making it anyway.' - Jay-Z"
    ]);
  } else if (respect >= 40 && confidence >= 40) {
    displayStoryText([
      "MONDAY, 11:00 PM - Final Reflection",
      "",
      "He skipped the app. But he's stepping up at home.",
      "People in his neighborhood look up to him.",
      "He's starting community programs.",
      "His name rings bells - not in courtroom, but on every block.",
      "",
      "'If I can't be the lawyer, I'll still be the voice.' - Tupac"
    ]);
  } else {
    displayStoryText([
      "MONDAY, 11:00 PM - Final Reflection",
      "",
      "He didn't submit. Didn't show up.",
      "Phone is silent. Fridge is empty.",
      "Hope feels distant.",
      "",
      "'This ain't how it's supposed to end...",
      "but the story ain't over yet.' - Kendrick Lamar"
    ]);
  }

  positionButton(enterButton, width / 2, height - 60);
  enterButton.text = "See Your Ending";

  if (enterButton.mouse.presses()) {
    clearButtons();
    screen = 23;
  }
}

function showEnding() {
  let totalStats = respect + knowledge + confidence;

  fill(0);
  textSize(28);
  textAlign(CENTER);

  if (totalStats >= 150 && scholarshipSubmitted && debateTeamJoined) {
    text("THE DREAM ACHIEVED", width / 2, 80);
    textSize(16);
    let ending = [
      "",
      "Khalil didn't just survive. He broke the cycle.",
      "",
      "Scholarship? Got it. Debate team? Took gold.",
      "Law school? Graduated top of his class.",
      "",
      "Now he's standing on stages, speaking truth,",
      "defending the people the system forgot.",
      "",
      "He started his own NGO - helping kids like him",
      "chase big dreams without losing their roots.",
      "",
      "'I didn't change who I was to make it.",
      "I changed what making it looked like.' - Jay-Z"
    ];

    let startY = 120;
    for (let i = 0; i < ending.length; i++) {
      text(ending[i], width / 2, startY + (i * 22));
    }

  } else if (respect >= 40 && confidence >= 40) {
    text("THE COMMUNITY PROTECTOR", width / 2, 80);
    textSize(16);
    let ending = [
      "",
      "Khalil never made it to college.",
      "He made it home instead.",
      "",
      "He held down his siblings.",
      "Made sure Kya made it to high school honors.",
      "Got the twins into a better school.",
      "",
      "His dad got out and saw his son turn",
      "the neighborhood into a movement.",
      "",
      "'You ain't gotta leave the block to lead it.' - Nipsey Hussle"
    ];

    let startY = 120;
    for (let i = 0; i < ending.length; i++) {
      text(ending[i], width / 2, startY + (i * 25));
    }

  } else {
    text("THE FALLOUT", width / 2, 80);
    textSize(16);
    let ending = [
      "",
      "Khalil didn't make the debate team.",
      "Didn't submit the scholarship.",
      "Didn't finish the essay.",
      "",
      "He started skipping class. Stopped picking up calls.",
      "The noise got too loud, and the dream faded.",
      "",
      "Khalil wanted to rise - but somewhere along the way,",
      "he gave up the fight.",
      "",
      "'Dreams don't die. People just stop chasing.' - Tupac"
    ];

    let startY = 120;
    for (let i = 0; i < ending.length; i++) {
      text(ending[i], width / 2, startY + (i * 25));
    }
  }

  fill(100);
  textSize(14);
  text("Thanks for playing! Refresh to play again.", width / 2, height - 40);
}

// Helper functions
function displayStoryText(lines) {
  fill(0);
  textSize(16);
  textAlign(CENTER);
  let startY = 80;
  for (let i = 0; i < lines.length; i++) {
    text(lines[i], width / 2, startY + (i * 22));
  }
}

function setupChoice(optionA, optionB, optionC) {
  positionButton(choiceA, width / 2, 400);
  positionButton(choiceB, width / 2, 470);
  positionButton(choiceC, width / 2, 540);

  choiceA.text = optionA;
  choiceB.text = optionB;
  choiceC.text = optionC;
}

function applyChoice(choice, quote, respectChange, knowledgeChange, confidenceChange, moneyChange) {
  playerChoices[screen] = choice;
  respect += respectChange;
  knowledge += knowledgeChange;
  confidence += confidenceChange;
  money += moneyChange;

  // Constrain stats
  respect = constrain(respect, 0, 100);
  knowledge = constrain(knowledge, 0, 100);
  confidence = constrain(confidence, 0, 100);
  money = constrain(money, 0, 100);

  quoteToDisplay = quote;
  nextScreen = screen + 1; // Store the next story screen
  clearButtons();
  screen += 0.5; // Go to quote screen (e.g., 4 -> 4.5)
}

function drawHUD() {
  // Stats display
  fill(0);
  textSize(14);
  textAlign(LEFT);
  text(`Respect: ${respect}`, 10, 30);
  text(`Knowledge: ${knowledge}`, 10, 50);
  text(`Confidence: ${confidence}`, 10, 70);
  text(`Money: ${money}`, 10, 90);

  // Progress indicator
  text(`Scene: ${screen}/23`, 10, height - 20);
}

function handleButtonClicks() {
  // Button hover effects
  if (enterButton.mouse.hovering()) {
    enterButton.color = color(100, 150, 200);
  } else {
    enterButton.color = color(70, 130, 180);
  }

  if (choiceA.mouse.hovering()) {
    choiceA.color = color(100, 150, 200);
  } else {
    choiceA.color = color(70, 130, 180);
  }

  if (choiceB.mouse.hovering()) {
    choiceB.color = color(100, 150, 200);
  } else {
    choiceB.color = color(70, 130, 180);
  }

  if (choiceC.mouse.hovering()) {
    choiceC.color = color(100, 150, 200);
  } else {
    choiceC.color = color(70, 130, 180);
  }
}

function clearButtons() {
  positionButton(enterButton, -100, -100);
  positionButton(choiceA, -100, -100);
  positionButton(choiceB, -100, -100);
  positionButton(choiceC, -100, -100);
  // Don't clear quote immediately - let it show for a moment
}

function positionButton(button, x, y) {
  button.x = x;
  button.y = y;
}

function displayQuote() {
  if (quoteToDisplay !== "") {
    fill(60, 60, 60);
    textSize(14);
    textAlign(CENTER);

    // Create a background for the quote
    fill(240, 240, 240, 180);
    rect(50, height - 120, width - 100, 60, 10);

    // Display the quote text
    fill(40, 40, 40);
    text(`"${quoteToDisplay}"`, width / 2, height - 90);
  }
}

function showQuoteScreen() {
  // Dark background for impact
  background(40, 40, 60);

  fill(255);
  textSize(24);
  textAlign(CENTER);
  text("Words of Wisdom", width / 2, 150);

  // Quote display with better styling
  fill(220, 220, 220);
  textSize(18);

  // Split quote into multiple lines if too long
  let lines = splitQuote(quoteToDisplay, 50);
  let startY = 220; // Moved up from 250

  for (let i = 0; i < lines.length; i++) {
    text(lines[i], width / 2, startY + (i * 30));
  }

  // Show stat changes
  fill(150, 255, 150);
  textSize(14);
  text("Your choice had an impact...", width / 2, 370); // Moved up from 400

  positionButton(enterButton, width / 2, 450); // Moved up from 480
  enterButton.text = "Continue";

  if (enterButton.mouse.presses()) {
    clearButtons();
    quoteToDisplay = "";
    screen = nextScreen; // Go to the next story screen
  }
}

function splitQuote(quote, maxLength) {
  if (quote.length <= maxLength) {
    return [quote];
  }

  let words = quote.split(' ');
  let lines = [];
  let currentLine = '';

  for (let word of words) {
    if ((currentLine + word).length <= maxLength) {
      currentLine += (currentLine ? ' ' : '') + word;
    } else {
      if (currentLine) lines.push(currentLine);
      currentLine = word;
    }
  }

  if (currentLine) lines.push(currentLine);
  return lines;
}