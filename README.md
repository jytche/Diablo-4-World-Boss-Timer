# Diablo 4 World Boss Timer
#### Video Demo:  https://youtu.be/zGqlV9yYMM8
#### Description: A countdown timer for when the next world boss spawns in Diablo 4.

>_"Browse at ease whilst knowing when the next Diablo 4 world boss is going to spawn!"_

Hate always having a second browser open whilst checking when the next world boss is going to spawn in Diablo 4? Well look no further, this Chrome extension allows you to browse at ease.

The Diablo 4 World Boss Timer ("D4WBT") is a simple intuitive countdown timer that sits in your browser and lets you know how many hours, minutes and seconds there are left until the next world boss spawns.

### Installation instructions

**Google Chrome**

1. Download this repo as a ZIP file from GitHub.
2. Unzip the file and you should have a folder named D4WBT.
3. In Chrome go to the extensions page (chrome://extensions).
4. Enable Developer Mode.
5. Drag the D4WBT folder anywhere on the page to import it (do not delete the folder afterwards.)
6. Make sure you pin the extension so you can see the countdown timer in the badge!

### Background Information

This chrome extension is my capstone project as part of finishing [CS50](https://pll.harvard.edu/course/cs50-introduction-computer-science).

I decided to create this timer as I was playing Diablo 4 whilst going through the course, and encountered situations where I needed to have two windows up at once to track the next world boss spawn in Diablo 4. I thought of creating this chrome extension to free up desktop space and tried to keep it as simple as possible.

This project allowed me to understand how Chrome extensions are created and what files are needed.

#### manifest.json

The most important file is the manifest.json file, which holds all the essential information about the application such as the name, description and points to other files such as the icon and background.js file.

#### background.js / times.json

The background.js file is a JavaScript file that does all the event handling and communication between other components of the extension. In this example the file asks the extension to load the times.json file which holds all the future times where world bosses spawn. This is because the formula for world boss times has been figured out (as of July 2023) and so I have created the times.json file that predicts the future times for the forseeable future.

The background.js then updates the countdown timer based on the closest future time, and then starts the timer in the extension badge. Once the timer hits zero, the times.json file then reloads to find out the next closest time, then starts the countdown timer again.

#### popup.js

The popup.js file refers to the script behind the popup banner that appears when you left click on the extension, which shows a dynamic countdown timer in a bigger format.

#### popup.html

The popup.html file details the format of the popup banner itself, which I kept clean and minimal to ensure no distractions were introduced apart from the timer itself.