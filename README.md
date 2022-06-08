
# 🏳️‍🌈 Out & About 🏳️‍🌈 2022 Pride events calendar
**Open-sourcing Anima's pride events calendar app**

[![](https://animaapp.s3.amazonaws.com/sample-files/out-and-about/out-and-about-cover.png)](https://out-and-about.netlify.app)

We collected 2022 pride events from around the globe and gathered them all under one simple mobile web application. 

**Be proud all year long!** 🏳️‍🌈

❤️🧡💛💚💙💜
## So what is this code?
**Most of the code was written automatically with [Anima](https://www.animaapp.com), given a Figma design.**
[Anima](https://animaapp.com/?utm_source=anima-github&utm_campaign=out-and-about&utm_medium=anima-github) converts design into code. In this case, Figma to Vue.

Starting from a boilerplate code with all the design means you fast forward to implementing the logic.
We are doing a lot to produce developer-friendly code. The result is not yet perfect, but it requires minor tweaks in most cases.

Behind the scenes, we do A LOT of heavy lifting to give you super clean code. To name a few of the algorithms:
* Automatically name elements (i.e 'vector567' -> 'Share icon')
* Automatically tagging elements (i.e detecting h1 / h2 / p, etc.)
* Restructure the DOM as close as possible to what a human engineer would with multiple heuristics
* Unwrapping divs and creating flex-based divs for a tidy layout
* Merging elements
* Removing redundant elements
* Extract CSS variables & classes for repeating colors, fonts, and more
* Find repeating DOM patterns and refactor to components
And much more.

In addition, we run **visual tests** with headless browsers on multiple resolutions, to make sure you're getting pixel-perfect code.

Again, **our code is not perfect** yet, as you will see in this repo.<br>
However, the fact that it is **10x faster to build products is mind-blowing** for everyone building an MVP, POC or even a demo.

For this application it took ~2h of development time to fix issues with the design + implementing the logic. Crazy fast :)

## How to run this code
In Terminal, go into the project's folder, then -
```
npm install
npm start
```
Open [http://localhost:8080](http://localhost:8080).

## How to deploy to netlify

### One click

[![](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/AnimaApp/out-and-about)

### Manual

If you don't have netlify:
```
npm install netlify-cli -g 
```
Once you do have netlify:
```
npm run build
netlify deploy
```
Choose `dist` folder when asked, and you'll get a link on netlify to your React app.
Use `netlify deploy --prod` when you have the final result, and get a sharable link.

Any feedback is welcome 🙏
