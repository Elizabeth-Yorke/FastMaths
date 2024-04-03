# Testing

Return back to the [README.md] (README.md) file.

## Validating Code

### HTML

The following validation has been done using the recommended [HTML W3C Validator](https://validator.w3.org) using the live, deployed site using the site links shown below.

| Page | W3C URL | Screenshot | Notes |
| --- | --- | --- | --- |
| Home | [W3C] (https://validator.w3.org/nu/?doc=https%3A%2F%2Felizabeth-yorke.github.io%2FFastMaths%2Findex.html)| ![screenshot](assets/documents/validation/index.html.png) | No errors.|
| Multiplication| [W3C] (https://validator.w3.org/nu/?doc=https%3A%2F%2Felizabeth-yorke.github.io%2FFastMaths%2Fmultiplication.html)| ![screenshot](assets/documents/validation/multiplication.html.png) | No errors.|
| Addition | [W3C] (https://validator.w3.org/nu/?doc=https%3A%2F%2Felizabeth-yorke.github.io%2FFastMaths%2Faddition.html)| ![screenshot](assets/documents/validation/addition.html.png) | No errors.|
| Subtraction | [W3C] (https://validator.w3.org/nu/?doc=https%3A%2F%2Felizabeth-yorke.github.io%2FFastMaths%2Fsubtraction.html)| ![screenshot](assets/documents/validation/subtraction.html.png) | No errors.|
| Division | [W3C] (https://validator.w3.org/nu/?doc=https%3A%2F%2Felizabeth-yorke.github.io%2FFastMaths%2Fdivision.html)| ![screenshot](assets/documents/validation/division.html.png) | No errors.|
| Instructions | [W3C] (https://validator.w3.org/nu/?doc=https%3A%2F%2Felizabeth-yorke.github.io%2FFastMaths%2Finstructions.html)| ![screenshot](assets/documents/validation/instructions.html.png) | No errors.|
| 404 | [W3C] (https://validator.w3.org/nu/?doc=https%3A%2F%2Felizabeth-yorke.github.io%2FFastMaths%2F404.html)| ![screenshot](assets/documents/validation/404.html.png) | No errors.|

### CSS

The following validation has been done using the recommended [The W3C CSS Validaton Service](https://jigsaw.w3.org/css-validator/validator) using the live, deployed site using the site links shown below.

| Page | W3C URL | Screenshot | Notes |
| --- | --- | --- | --- |
| style.css| [W3C] ([weblink](https://jigsaw.w3.org/css-validator/validator)) | ![screenshot](assets/documents/validation/style.css.png) | No errors: Initial errors found and fixed.|

### JavaScript

#### Syntax Testing
The following validation has been done using [jshint.com](https://jshint.com/) using the live, deployed site using the site links shown below.

| Page | Screenshot | Notes | Comments |
| --- | --- | --- | --- |
| multiplication.js | ![screenshot](assets/documents/validation/multiplication.js.png) | The same 3 warnings, numerous times: 1. Functions declared within loops referencing an outer scoped variable may lead to confusing semantics. 2. 'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). 3. 'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').| Given that the 3 things referred to above were all demonstrated within the course, I ignored this as they must be acceptable. |
| addition.js| ![screenshot](assets/documents/validation/addition.js.png) | The same 3 warnings, numerous times: 1. Functions declared within loops referencing an outer scoped variable may lead to confusing semantics. 2. 'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). 3. 'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').| Given that the 3 things referred to above were all demonstrated within the course, I ignored this as they must be acceptable. |
| subtraction.js| ![screenshot](assets/documents/validation/subtraction.js.png) | The same 3 warnings, numerous times: 1. Functions declared within loops referencing an outer scoped variable may lead to confusing semantics. 2. 'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). 3. 'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').| Given that the 3 things referred to above were all demonstrated within the course, I ignored this as they must be acceptable. |
| division.js| ![screenshot](assets/documents/validation/division.js.png) | The same 3 warnings, numerous times: 1. Functions declared within loops referencing an outer scoped variable may lead to confusing semantics. 2. 'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). 3. 'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').| Given that the 3 things referred to above were all demonstrated within the course, I ignored this as they must be acceptable. |

As all forms of javaScript refered to in these warnings were recommended within the course, I have decided to ignore the warnings for now.

####Functionality Testing
On each of the game pages, I tested that:
- The links in the menu bar worked.
- I saw what I expected to see on the screen.
- The lightening bolt made questions appear.
- The questions were questions I expected to see.
- The answer box allowed me to put answers in.
- The submit button allowed me to submit answers.
- The answers were correctly checked.
- The positive scores updated correctly.
- The negative scores updated correctly.
- The high scores updated correctly.
- The reset button reset everything.
- Each of the timer buttons worked as expected.
- The next part of the game was always instantly ready to play again.
- The links in the footer worked.

At various stages of testing some of these functions did not work as expected, and had to be debugged before the worked. They all work now.

## Testing Browser Compatibility

I've tested my deployed project on multiple browsers to check for compatibility issues.

| Browser | Screenshot | Notes |
| --- | --- | --- |
| Chrome | ![index](assets/documents/browser-testing/chrome/index.html.png) ![multiplication](assets/documents/browser-testing/chrome/multiplication.html.png) ![addition](assets/documents/browser-testing/chrome/addition.html.png) ![subtraction](assets/documents/browser-testing/chrome/subtraction.html.png) ![division](assets/documents/browser-testing/chrome/division.html.png) ![instructions](assets/documents/browser-testing/chrome/instructions.html.png) | Works as expected.|
| Firefox | ![home](assets/documents/browser-testing/mozilla/index.html.png) ![multiplication](assets/documents/browser-testing/mozilla/multiplication.html.png) ![addition](assets/documents/browser-testing/mozilla/addition.html.png) ![subtraction](assets/documents/browser-testing/mozilla/subtraction.html.png) ![division](assets/documents/browser-testing/mozilla/division.html.png)  ![instructions](assets/documents/browser-testing/mozilla/instructions.html.png)  | Works as expected, except that if you use web tools to inspect, there is a warning about incompatability with a fontawesome property. |
| Edge | ![i](assets/documents/browser-testing/edge/) [i](assets/documents/browser-testing/edge/) [i](assets/documents/browser-testing/edge/) [i](assets/documents/browser-testing/edge/) [i](assets/documents/browser-testing/edge/) [i](assets/documents/browser-testing/edge/)| Minor scaling issues |
| Opera | ![index](assets/documents/browser-testing/opera/index.html.png) ![multiplication](assets/documents/browser-testing/opera/multiplication.html.png) ![addition](assets/documents/browser-testing/opera/addition.html.png) ![subtraction](assets/documents/browser-testing/opera/subtraction.html.png) ![division](assets/documents/browser-testing/opera/division.html.png) ![instructions](assets/documents/browser-testing/opera/instructions.html.png) | Works as expected|
| Avast | ![index](assets/documents/browser-testing/avast/index.html.png) ![multiplication](assets/documents/browser-testing/avast/multiplication.html.png) ![addition](assets/documents/browser-testing/avast/addition.html.png) ![subtraction](assets/documents/browser-testing/avast/subtraction.html.png) ![division](assets/documents/browser-testing/avast/division.html.png) ![instrcutions](assets/documents/browser-testing/avast/instructions.html.png) | Works as expected.|

## Testing Different Screen Sizes

I used media genesis responsive design checker [Media Genesis responsive design checker] (https://www.responsivedesignchecker.com/checker.php?url=https%3A%2F%2Felizabeth-yorke.github.io%2FFastMaths%2Findex.html&width=1400&height=700) to check how responsive this website is. I used the live, deployed site. Links below.

|Device|Screensize|URL|Screenshot|Notes|
| --- | --- | --- | --- | --- |
|Desktop 24"|Screensize 1920x1200|[screenshot](assets/documents/screen-sizes/desktop1920x1200.png) |Works as expected|
|Desktop 20"|Screensize 1600x900|[screenshot](assets/documents/screen-sizes/desktop1600x900.png) |Works as expected|
|Notebook 13"|Screensize 1024x800|[screenshot](assets/documents/screen-sizes/notebook1024x800.png) |Works as expected|
|Tablet Apple iPad Pro|Screensize 1366x1024|[screenshot](assets/documents/screen-sizes/tablet1366x1024.png) |Works as expected|
|Tablet Amazon Fire|Screensize 768x1024|[screenshot](assets/documents/screen-sizes/tablet768x1024.png) |Works as expected|
|Tablet Nexus 7|Screensize 600x960|[screenshot](assets/documents/screen-sizes/tablet600x960.png) |Too much blank space due to calc() otherwise working well.|
|Phone Apple iPhone 7 Plus|Screensize 414x736|[screenshot](assets/documents/screen-sizes/phone414x736.png) |Too much blank space due to calc() otherwise working well.|
|Phone Google Pixel|Screensize 411x731|[screenshot](assets/documents/screen-sizes/phone411x731.png) |Too much blank space due to calc() otherwise working well.|
|Phone Apple iphone5|Screensize 360x640|[screenshot](assets/documents/screen-sizes/phone320x480.png) |Too much blank space due to calc() otherwise working well.|

## Testing Website Speed

I tested my deployed project using using PageSpeed Insights via web.dev [PageSpeed](https://pagespeed.web.dev/analysis/https-elizabeth-yorke-github-io-FastMaths-index-html/lkce88vsfn?form_factor=mobile)

|Page|Screensize|PageSpeed URL|Screenshot|Notes|
| --- | --- | --- | --- | --- |
|Home|Mobile|[PageSpeed URL](https://pagespeed.web.dev/analysis/https-elizabeth-yorke-github-io-FastMaths-index-html/0h04w0bo3d?form_factor=mobile)|[screenshot](assets/documents/pagespeed/home-mobile.png)|Biggest issue bootstrap and fontawesome.|
|Home|Desktop|[PageSpeed URL](https://pagespeed.web.dev/analysis/https-elizabeth-yorke-github-io-FastMaths-index-html/0h04w0bo3d?form_factor=mobile)|[screenshot](assets/documents/pagespeed/home-desktop.png)|Biggest issue bootstrap and fontawesome.|
|Multiplication|Mobile|[PageSpeed URL](https://pagespeed.web.dev/analysis/https-elizabeth-yorke-github-io-FastMaths-multiplication-html/wjri8egdiv?form_factor=mobile)|[screenshot](assets/documents/pagespeed/multiplication-mobile.png)|Biggest issue bootstrap and fontawesome.|
|Multiplication|Desktop|[PageSpeed URL](https://pagespeed.web.dev/analysis/https-elizabeth-yorke-github-io-FastMaths-multiplication-html/wjri8egdiv?form_factor=desktop)|[screenshot](assets/documents/pagespeed/multiplication-desktop.png)|Biggest issue bootstrap and fontawesome.|
|Addition|Mobile|[PageSpeed URL](https://pagespeed.web.dev/analysis/https-elizabeth-yorke-github-io-FastMaths-addition-html/pxj49epfmm?form_factor=mobile)|[screenshot](assets/documents/pagespeed/addition-mobile.png)|Biggest issue bootstrap and fontawesome.|
|Addition|Desktop|[PageSpeed URL](https://pagespeed.web.dev/analysis/https-elizabeth-yorke-github-io-FastMaths-addition-html/pxj49epfmm?form_factor=desktop)|[screenshot](assets/documents/pagespeed/addition-desktop.png)|Biggest issue bootstrap and fontawesome.|
|Subtraction|Mobile|[PageSpeed URL](https://pagespeed.web.dev/analysis/https-elizabeth-yorke-github-io-FastMaths-subtraction-html/m62qgzo8w2?form_factor=mobile)|[screenshot](assets/documents/pagespeed/subtraction-mobile.png)|Biggest issue bootstrap and fontawesome.|
|Subtraction|Desktop|[PageSpeed URL](https://pagespeed.web.dev/analysis/https-elizabeth-yorke-github-io-FastMaths-subtraction-html/m62qgzo8w2?form_factor=desktop)|[screenshot](assets/documents/pagespeed/subtraction-desktop.png)|Biggest issue bootstrap and fontawesome.|
|Division|Mobile|[PageSpeed URL](https://pagespeed.web.dev/analysis/https-elizabeth-yorke-github-io-FastMaths-division-html/kzx868c0ps?form_factor=mobile)|[screenshot](assets/documents/pagespeed/division-mobile.png)|Biggest issue bootstrap and fontawesome.|
|Division|Desktop|[PageSpeed URL](https://pagespeed.web.dev/analysis/https-elizabeth-yorke-github-io-FastMaths-division-html/kzx868c0ps?form_factor=desktop)|[screenshot](assets/documents/pagespeed/division-desktop.png)|Biggest issue bootstrap and fontawesome.|
|Instructions|Mobile|[PageSpeed URL](https://pagespeed.web.dev/analysis/https-elizabeth-yorke-github-io-FastMaths-instructions-html/ux81u6cbh0?form_factor=mobile)|[screenshot](assets/documents/pagespeed/instructions-mobile.png)|Biggest issue bootstrap and fontawesome.|
|Instructions|Desktop|[PageSpeed URL](https://pagespeed.web.dev/analysis/https-elizabeth-yorke-github-io-FastMaths-instructions-html/ux81u6cbh0?form_factor=desktop)|[screenshot](assets/documents/pagespeed/instructions-desktop.png)|Biggest issue bootstrap and fontawesome.|

## Fullfilling User Story Requirements

| User |User Story|Answer|Screenshot|
| --- | --- | --- | --- |
| New site user | I would like a game with simple instructions that are easy to follow. |This game has easy instructions.| [screenshot](assets/documents/user-stories/user-story-A.png)|
| New site user | I would like a game that is quick to play. | This game can be played in as little as 20 seconds.| [screenshot](assets/documents/user-stories/user-story-B.png)|
| New site user | I would like instant feedback so I know if I'm getting things right or wrong. |Your answers are instantly checked and a tally of correct and incorrect scores updates as you play.| [screenshot](assets/documents/user-stories/user-story-C.png)|
| Returning site user | I would like a game that feels like I'm using my brain a bit, but isn't too hard. | This game allows you to answer maths questions which all have integer answers.| [screenshot](assets/documents/user-stories/user-story-D.png)|
| Returning site user | I would like a game in which I can see myself improving as I play more. |Initially a pop-up box showing final scores appeared when the timer finished. This was later replaced by a High Score box in the footer, for greater clarity.| [screenshot](assets/documents/user-stories/user-story-E.png)|
| Returning site user | I would like there to be new questions every time I play. | You are provided with a new question every time you click on the lightening bolt or the submit button. | [screenshot](assets/documents/user-stories/user-story-F.png)|
| Site Owner | I would like people to want to use this game. | This user story is difficult to answer as very few people have seen this game.| All the people I have asked to test it for me have wanted to have a go at it.|
| Site Owner | I would like people to leave good reviews about this game. | Links to social media are included in the footer to encourage people to share progress and leave reviews.| [screenshot](assets/documents/user-stories/user-story-G.png)|
| Site Owner | I would like this game to respond smoothly. | This site works smoothly according to pageSpeed.| [screenshot](assets/documents/user-stories/user-story-H.png)|

## Debugging

I encountered a few bugs, particularly in during the testing phase. Here is what I did with each of them:

| Bug | Solution |
| --- | --- |
| The page wasn't reaching the bottom of the screen. | I added calc() |
| calc() made the phone pages very long. | I tried different combinations of calc(), media queries and bootstrap columns until I had everything I could covered. |
| There was still an issue with whitespace on one particular screen size, and calc() doesn't work in media queries | I added a whitespace cover media query which seems to work well. |
| There was some white space horizontal lines due to margins and padding in some of the earlier commits. | I used the dev tools to inspect and figure out the problem, and deleted unnecessary padding. |
| I had forgotten some aria-labels | I added the missing labels. |
| I couldn't get the blue lines under this links on index.html to disappear with normal css.| i tried !important, then I tried adding css to various parents. Eventually I had to write it into the html on the <a> to get it to work. |
| The comment box needs to be clicked several times before it disappears in a number of browsers. | I removed the alert box as it is an unnecesary addition as the positive and negative scores are already displayed on the screen. |
| The scores were continuing on from last game. | I added a page reload function to the end of the timer to clear all the scores. |
| When I added the highscore function, the reload function wiped the highscores. | I wrote a rest function and added it to the end of the timers.|
| When users continued from the untimed practice to the timed game, the scores continued. | I moved the reset function to the start of the timers.|

## Unfixed Bugs

| Bug | Comments |
| --- | --- |
| A user may get the same question multiple times in one game. | This is because the numbers chosen are entirely random. I'm not sure if this is actually a bad thing, so I left it as it is.| 