var app = document.getElementById('app')

var Typewriter = new Typewriter(app, {
    loop: true,
    delay : 55,
});

Typewriter
    .pauseFor(2000)
    .typeString('Hey Miracle, ')
    .pauseFor(300)
    .deleteChars(20)
    .typeString("been quite the year, hasn't it?<br>")
    // .deleteChars(161)
    .pauseFor(4000)
    .typeString(" I know today hasn't necessarily been the best birthday ever, but i just wanna say...Happy birthday to a pretty, fuuny, extremely talented and creative person. <br> ")
    .typeString(" Miracle, i'm glad i know you, you're weird and interesting😂 and a really good friend. i'm glad you texted me on FB that time frrr. i know 20 years sounds crazy but i want you to know that i'm here for you, if you ever need someone to talk to n shi. <br> ")
    .typeString(" People suck and that's the reality of stuff, i know you've had rough experiences and all but i hope and pray this new year brings you way better days, people, lifestyle, relationships and what not.  <br>      ")
    .pauseFor(4000)

    .typeString(" I wish you all the happiness in the world and more. May you always find reasons to smile, even on tough days. I pray you’re surrounded by love and positivity always, and whenever life is a bitch, you get up turn it around. <br> ")
    .typeString(" I pray for academic excellence, i pray you smash everything, like every single thing, from classworks to assignments to projects, like a whole new wave of academic excellence like never seen before, i hope every exam is a breeze. Most of all, i pray you hardwork pays off and you get the opportunites you deserve. <br>")
    .typeString("I pray you experience God in his goodness and mercy and grace. I pray the lord guides you, keeps you, may his face shine upon you and may he be gracious unto you. <br> ")
    .typeString(' <h1 style="color: pink;">I Love You</h1> <br>')
    .pauseFor(300)
    .typeString(" <i>Love, Davies</i>")


    .pauseFor(1000)
    .start()
