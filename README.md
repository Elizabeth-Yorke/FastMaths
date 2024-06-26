
# Fast Maths

Welcome to Fast Maths. This is an interactive maths game. 

A live version of the site can be viewed from [here.](https://elizabeth-yorke.github.io/FastMaths/index.html)

A mock-up image of Speed Maths interactive game, using the "Am I Responsive" site can be viewed [here.](https://amiresponsive.co.uk/).
![Am I responsive image](assets/images/am-i-responsive.png)

## UX Design
### Wireframes

My wireframe was created using [Balsamiq.](https://balsamiq.com/) Here are screenshots of the wireframes:
| Page | Phone Wireframe | Tablet Wireframe | Desktop Wireframe |
| --- | --- | --- | --- |
| home | [pdf](assets/documents/wireframes/index-phone.pdf) | [pdf](assets/documents/wireframes/index-tablet.pdf) | [pdf](assets/documents/wireframes/index-desktop.pdf) |
| multiplication | [pdf](assets/documents/wireframes/multiplication-phone.pdf) | [pdf](assets/documents/wireframes/multiplication-tablet.pdf) | [pdf](assets/documents/wireframes/multiplication-desktop.pdf) |
| addition | [pdf](assets/documents/wireframes/addition-phone.pdf) | [pdf](assets/documents/wireframes/addition-tablet.pdf) | [pdf](assets/documents/wireframes/division-desktop.pdf) |
| subtraction | [pdf](assets/documents/wireframes/subtraction-phone.pdf) | [pdf](assets/documents/wireframes/subtraction-tablet.pdf) | [pdf](assets/documents/wireframes/subtraction-desktop.pdf) |
| division | [pdf](assets/documents/wireframes/division-phone.pdf) | [pdf](assets/documents/wireframes/division-tablet.pdf) | [pdf](assets/documents/wireframes/division-desktop.pdf) |
| instructions | [pdf](assets/documents/wireframes/instructions-phone.pdf) | [pdf](assets/documents/wireframes/instructions-tablet.pdf) | [pdf](assets/documents/wireframes/instructions-desktop.pdf) |

### Colour Scheme

I used the UX Design section of [Adobe Color](https://color.adobe.com/trends/Ui/ux) to identify the most current user friendly colour palates available. I also looked at their game [design section](https://color.adobe.com/trends/Game-design) of Adobe Colour. I noticed that there was an abundance of dark purple in both sections, so I chose a dark purple based colour palate. I then checked this palate using [WebAIM contrast checker](https://webaim.org/resources/contrastchecker/), and made the shades lighter and darker to ensure I had a colour scheme that included a number of high contrast pairings. The palate was created by Adobe Colour and contained the following colours:

#1F0229 Dark purple
#E8C4F5 Light purple
#084A5C Dark teal
#B6E7F5 Light teal

### Fonts

I selected the fonts for this project from [Google Fonts.](https://fonts.google.com/) Having looked at a number of quiz type phone games, I decided that the title font should be a bit different, to catch the eye of the user. I chose the [Luckiest Guy](https://fonts.google.com/specimen/Luckiest+Guy?query=luckiest+guy) font. The font used for the numbers needed to be really clear to read, but still eyecatching. The numbers should look as interesting as possible, whilst maintaining clarity. I chose [Kaushan Script](https://fonts.google.com/specimen/Kaushan+Script?query=Kaushan+Script) for this purpose. The font used for the explanation needs to be very easy to read, or users won't bother to read it! I chose [Quicksand](https://fonts.google.com/specimen/Quicksand?query=quicksand) for this purpose.

## User Stories

User stories can be found below:

### New site users

    I would like a game with simple instructions that are easy to follow. 
    I would like a game that is quick to play.
    I would like instant feedback so I know if I'm getting things right or wrong.

### Returning site users

    I would like a game that feels like I'm using my brain a bit, but isn't too hard.
    I would like a game in which I can see myself improving as I play more.
    I would like there to be new questions every time I play.

### Site Owner

    I would like people to want to use this game.
    I would like people to leave good reviews about this game.
    I would like this game to respond smoothly.

## Features
### Existing Features

- Collapsable navigation bar with links.
- Structured layout.
- Every logo links to homepage.
- Social links in footer.
- Choice of levels, via buttons that set appropriate timers.
- Positive and negative score boards to monitor your progress as you go.
- Reset button at base of page.
- Favicon.
- Customised 404 page.

### Future Additions

- A scoreboard recording the best ever scores by other people, so you can try to beat it.
- An addition page.
- A subtraction page.
- A division page.
- A mixed questions page.
- A page with a grid of questions where you have to try to get 4 in a line.
- A page with more complex questions users could chose to have questions that include negative numbers, larger numbers, decimal numbers, or even questions from different topics.

## Testing
### Principles of Testing
Software must be tested to make sure it does what it is supposed to do, and meets all the criteria it was written to meet. Software testing needs to find and fix bugs, but it also needs to ensure that the software meets all the user requirements. Unfortunately, however many tests are run, and however many bugs are found and fixed, it is impossible to ever guarantee any software is bug-free. This is because it is impossible to test everything.

Software testing is easier and more effective if you do it in the early stages of development, and continue to do it throughout the project. This is because it is much easier to fix a bug if you have not already written large sections of code which are dependent on  the part with the bug in it. If you end up having to change something fundamental, you may have to rewrite whole large sections of code. Bugs are often found clustered together, so most of the bugs in a project will be found concentrated in a few small areas (often areas that change a lot or have dependencies). By correctly identifying these areas, and concentrating testing in these areas, testing can be made more efficient. That said, it is important not to assume bugs will always occur in the same places, because it is easy to then fall into the trap of simply repeating the same tests. Repeated identical tests will eventually fail to identify to find bugs, even if there are still bugs there. It is therefore advisable to use a variety of testing techniques and approaches that are regularly reviewed and updated.

It is important to keep in mind that software testing is context dependent. What you are testing and the resources you have available will affect the type of testing you choose to do on it.

### Manual vs Automated Testing
Software can be tested manually or using automated systems. Both methods are valid and have their own benefits. Manual testing is flexible, human-centric and responsive whilst automated testing is objective, repeatable and scalable.

#### Accuracy and Reliability
Manual testing is prone to human error, but includes human thinking and judgement. This makes it less accurate and less reliable than automated testing when it comes to straightforward repeatable test scenarios, but more accurate and more reliable when it comes to testing things that rely on human judgement (such as user experience). Whilst manual tests are susceptible to user error, automated tests are susceptible to test script errors and poor test design.

#### Cost Efficiency and Scalability
Automated testing is more cost effective for predictable tests that need to be repeated many times, because it is much faster and more accurate in these cases. It is much easier to apply to large scale projects, but the initial stages of test writing can be time consuming, making it less time efficient for small projects. Manual testing is more cost effective for tests that involve judgement or intuition, but less effective at testing large, complex scenarios. Manual testing also becomes very time consuming for large scale projects.

#### Skill Requirements
Manual testing requires a less skilled workforce, but is more effective if the people doing the testing have previous experience of testing similar software. Automated testing typically requires a workforce with strong programming skills.

#### When to use Manual Testing
Manual testing is cheaper and quicker to set up, especially for small scale projects. It is also more suited to a less skilled workforce. Some projects have specific requirements and/or have to meet regulations and standards that make manual testing essential. It is also more sensible to use manual testing for things that require human intuition and judgement, such as useability and exploratory testing.

#### When to use Automated Testing
Automated testing is more effective for large scale projects with big budgets and a workforce skilled in programming. It is more appropriate to use automated testing for frequent, repetitive and resource heavy testing, such as regression and performance testing, particularly on a large scale.

### Fast Maths Testing
This is a small scale project with no budget and a relatively unskilled workforce of one, so testing for this project has been entirely manual. 

Please find details of testing for this project on a separate page TESTING.md.

### Improvements Made After Initial Testing Phase

This project has been one of constant testing and improving.
Here are some of the most notable improvements:
- After the initial build I had to add functions to make sure it was only possible to select one timer once.
- I used calc() to make sure each page stretched to the bottom of the screen.
- I added a welcome page to ensure consistency throughout the site.
- I have persistently looked at ways to reduce the amount of javaScript, even after it was working well.
- I removed the alert which told the user their scores at the end of each timer, as it wasn't necessary and it wasn't closing properly in all browsers.
- I added a High Score function to each page.
- I replaced location.reload() with a function that reset the scores at the end of the timer without reloading the page, so the user could maintain the highscore until the page reloads.

### Improvements I would like to make
The main improvement I would like to make, is that I would like to combine all my JavaScript files into a single JavaScript file. I think this could be done quite easily, but I just ran out of time to do it before the deadline.

## Technologies Used

- [HTML](https://en.wikipedia.org/wiki/HTML) was used for the main site content.
- [CSS](https://en.wikipedia.org/wiki/CSS) was used for the main site design and layout.
- [JavaScript](https://en.wikipedia.org/wiki/JavaScript) was used for the game interactivity.
- [Git](https://en.wikipedia.org/wiki/Git) was used for version control. 
- [GitHub](https://github.com/) was used for version control.
- [GitHub Pages](https://pages.github.com/) was used to host the deployed front-end site.
- [Bootstrap](https://getbootstrap.com/) was used as a framework for pre-built components.
- [Google Fonts](https://fonts.google.com/) was used for the fonts.
- [Font Awesome](https://fontawesome.com/) was used for the icons.
- [Gitpod](https://www.gitpod.io/) was the IDE used to create this project.
- This project was created using this [GitHub template](https://github.com/Code-Institute-Org/ci-full-template) provided by Code Institute.

## Deployment

### Github Pages Deployment
The site was deployed to GitHub Pages. The steps to deploy are as follows:

    1. In the GitHub repository, navigate to the Settings tab
    2. Select Pages from the list on the right.
    3. Under the Build and Deployment title, click on the 'source' section drop-down menu
    4. Select Deploy from a branch
    5. Click on the first dropdown menu in the 'branch' section
    6. Select Main
    7. Click Save
    8. Wait for confirmation that the site has been deployed.

The live link can be found [here.]()

### Local Deployment
This project can be cloned or forked in order to make a local copy on your own system.

#### Cloning
You can clone this repository into your preferred IDE in order to edit it at your leisure. To clone this repository, follow these steps:

    1. Go to the GitHub repository
    2. Click on the green Code button above the files.
    3. Select your preferred type of clone (HTTPS, SSH or GitHub CLI).
    4. Click on the copy icon to copy the code.
    5. Open your chosen IDE.
    6. Select New Workspace.
    7. Paste the code you have copied (TBC) into the correct place.
    8. Press enter.
    9. Wait while the new workspace is created.

#### Forking
You can fork this repository in order to create an extra version of it which will be saved into your GitHub account. Once you have done this, you can edit your version and the original version will remain unaffected.

To fork this repository, follow these steps:

    1. Log in to GitHub and locate the GitHub Repository
    2. Locate the "Fork" Button, in the line of grey buttons above the green Code button.
    3. Click this button.
    4. Return to your GitHub Home page. You should now have your own copy of this repository.

#### Local VS Deployment

Initially there were some differences between local and live deployment, but since debugging as described in TESTING.md there are now no obvious differences.

## Credits

### Websites used to Generate Content

Here is a list of websites I used to create this project:
| Source | Purpose | Notes |
| --- | --- | --- |
| [Love Maths](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+CPJS_06_20+2020_T1/courseware/8f9b28d4b7664bb59ddf18b8e090671f/b6d5c008ef4a460ba0836a224aa3b3fb/) | 	| game function | I used this website because it showcased a lot of the javaScript I wanted to use in my project. |
| [Susie June's Cafe Website](https://elizabeth-yorke.github.io/SusieJunes-A/) | File structure | I used this website and its GitHub repository to remind myself of everything I learned in the first part of the course. |
| [mdn web docs](https://developer.mozilla.org/en-US/) | syntax queries | I used this website because it was recommmended to do so at numerous points during the course. |
| [Stack Overflow](https://stackoverflow.com/) | problem solving | I looked up questions and answers on Stack Overflow every time I just wanted to see if my ideas were feasible in html and css, before I got carried away researching how to do impossible things. |
| [W3Schools](https://www.w3schools.com/) | syntax queries | I used this website when I wanted to know how to use particular functions. |
| [CSS Tricks](https://css-tricks.com/) | problem solving | I used this website to help keep the screen filled. |
| [Favicon.cc](https://www.favicon.cc/) | favicon | I used this website to generate the favicon. |
| [AltAcademy](https://www.altcademy.com/?ref=blog) | problem solving | I used this website to help me discover new javascript functions. |
| [Adobe Color](https://color.adobe.com/create/color-wheel) | colors | I used this website to research and create a colour palate. |
| [Fontawesome](https://fontawesome.com/) |	icons |	I only really used this for the social media icons. |
| [Google Fonts](https://fonts.google.com/) | fonts | I used this for the fonts. |
| [Bootstrap](https://getbootstrap.com/) | navbar |	I bootstrapped a navbar, then personalised it. |

### Acknowledgements

    I would like to thank my Code Institute mentor, Sheryl Goldberg for her invaluable advice. I really feel she went over and above offering her time to answer my many questions on JS.
    I would like to thank Jessica Ickechukwu, my tutor.
    I would like to thank the Code Institute tutor team for their assistance.
    I would like to thank the Code Institute Slack community for the their support.
    I would like to thank my husband Kieron Yorke.

