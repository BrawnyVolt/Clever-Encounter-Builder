# Clever-Encounter-Builder
Self-contained encounter builder for DnD

Hey there! This is my solution for keeping track of monster hp and stats. You only need to download either the <a href="https://github.com/BrawnyVolt/Clever-Encounter-Builder/blob/main/Clever%20Encounter%20Builder.html">Clever Encounter Builder</a> or it's <a href="https://github.com/BrawnyVolt/Clever-Encounter-Builder/blob/main/Clever%20Encounter%20Builder%20Mini.html">Mini Version</a>

Usage:

The use is pretty straight forward, and it's got the steps as you go through it. But basically, you're building an old school website for your encounter.

![image](https://user-images.githubusercontent.com/62290713/156913626-3861d9d4-5019-47d3-bbe4-86ca70ed6e73.png)

This is how I build my images, all the stats I need, and I don't have to deal with WOtC sending me a cease and desist for copyright stuff.

Just grab a screen shot of the monsters you want and toss them all into the same folder, upload them into the CEB, then manually enter in how many of each you want and their hp.

The CEB will spit out an HTML formatted file that is intended to live in the folder with all your images. There's also a handy hp function I built to save me from writing 400 numbers everytime I run a combat.

I also left in a notes area at the top, but you'll have to manually enter those in. I recommend using the non-minified version for any customization, it got squished real good, and it outputs real dense html.

Technology:

There's a bunch of vanilla html, css and JavaScript. My goal was always to make the most self contained end product as possible, so of course I started with React and Rails and Ruby, but cut them because it just put more maintenance into the mix. I figured JS and HTML probably aren't going to fundamentally change anytime soon, so this should be fairly future proof.

I do want to give credit to the tutorial where I learned the saveing files approach, but I've lost the link to the sands of time and power outages. If you happen to know where it came from, let me know!

