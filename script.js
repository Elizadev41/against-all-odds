//Press a button to choose your path
//See the README file for more information

/* VARIABLES */
let enterButton;
let a1Button;
let a2Button;
let b1Button;
let b2Button;
let screen = 0;
let respect = 100;
let motivation = 100; 
let knowledge = 100;

/* SETUP RUNS ONCE */
function setup() {
  createCanvas(750, 700);
  textAlign(CENTER, CENTER);
  textSize(20);
  noStroke();

/* SETUP RUNS ONCE */
function setup() {
  createCanvas(600, 400);
  textAlign(CENTER);
  textSize(20);
  noStroke();

  // Set up the home screen - Screen 0: Splash Screen
    fill("black");
    textSize(30); // Font size increased
    textStyle(BOLD); // Made the font thicker
    text("Khalil's Journey", width / 2, height / 2 - 80);
    textSize(20);
    textStyle(NORMAL);
    fill(255);
    text("An interactive story about hustle, pressure,\nchoices and making it out the mud.", width / 2, height / 2 - 40);

  


    // Create buttons for all screens
     enterButton = new Sprite(width / 2, height / 2 + 60, 200, 50);
      enterButton.text = "Begin Journey";
      enterButton.collider = "k";
      enterButton.color = "purple";
      enterButton.textColor = "white";

      // These will be moved into place when needed
      a1Button = new Sprite(-999, -999, 200, 45);
      a2Button = new Sprite(-999, -999, 200, 45);
      b1Button = new Sprite(-999, -999, 200, 45);
      b2Button = new Sprite(-999, -999, 200, 45);

      a1Button.collider = "k";
      a2Button.collider = "k";
      b1Button.collider = "k";
      b2Button.collider = "k";
    }

  /* DRAW LOOP REPEATS */
  function draw() {
    // Display start button
    enterButton.w = 175;
    enterButton.h = 65;
    enterButton.collider = "k";
    enterButton.color = "purple";
    enterButton.text = "Begin Adventure";

    // Check enter button
    if (enterButton.mouse.presses()) {
      print("pressed");
      showScreen1();
      screen = 1;
    }

    if (screen == 1) {
      if(a1Button.mouse.presses()){
        print("Display screen 2");
        showScreen2();
        screen = 2;
      } else if(a2Button.mouse.presses()){
        print("Display screen 5");
        showScreen5();
        screen = 5;
      }
    }

    if (screen == 2) {
      if(b1Button.mouse.presses()){
        print("Display screen 3");
        showScreen3();
        screen = 3;
      } else if(b2Button.mouse.presses()){
        print("Display screen 4");
        showScreen4();
        screen = 4;
      }
    }

    print(screen);
  }


}

/* FUNCTIONS TO DISPLAY SCREENS */
