# creative-coding-portfolio
What is the significance of Creative Coding in a Creative Computing program? (150 words)
Creative Coding is the process of creating art using code, and at Bath Spa University RAK, it is a module taught to first-year Creative Coding students. The subject focuses on teaching JavaScript and p5.js as primary tools for creating generative visuals and interactive digital experiences. Through hands-on projects, learners explore how programming can be a medium for artistic expression, enabling them to produce dynamic artworks. The module encourages experimentation, helping students develop both technical skills and creative thinking. Whether creating visual patterns, animations, or interactive installations, students gain the ability to turn imaginative ideas into reality using code. This approach bridges the gap between art and technology, fostering innovation in the digital age.

How does creative coding encourage creativity, experimentation, and exploration? (150 words)
Creative Coding encourages the coder to program not necessarily in a way that is meant to be practical or functional but can simply be to explore and experiment with different styles. It encourages students to explore the intersection of art and technology, enabling them to use code, image, video, and sound to build interactive works that can respond to users, data, or the environment and to push boundaries through experimentation and creative expression.

How does creative coding differ from other types of art form? (150 words)
There are two types of art: performance and visual. Performance art includes singing, dancing, and acting, while visual art includes drawing, painting, writing, and more. Creative Coding can be used to combine both. It allows for art to be interactive and controlled by its user.

Act 1: Car
The first task of the module was to create a car using the basics of p5.js: rectangles [rect()], ellipses, and lines. While I find cars fascinating, I'm not knowledgeable on them and needed a reference picture. My favorite color is blue, so I just searched for a blue car and found an image of the Mercedes AMG GT R Pro, which I liked.

I started with the body, the wheels, and the windows then moved on to smaller details such as the door handle, spoiler, and the lines (see the code for clarity). As for the background, I went with a plain blue with a yellow ellipse serving as the sun. I also made a road with a black rectangle and white lines.

Act 3: Alien
The task for act 3 was to make an alien using the following functions: beginShape(), endShape(), translate(), bezierVertex(), push(), pop(), scale(), and rotate(). When I read the word "alien," I immediately thought of the song by Lee Suhyun, and I remembered that the music video has animations of an alien girl. I used the character as a reference and posed mine holding a laser gun, like in the album cover, with the other hand in a peace sign above her head.

I wanted to personalize it, so I put my name under the title and on the handle of the gun. I also wanted to add more details to the clothes and the background, but I had already spent a great amount of time making the body and I didn’t want to take more time away from doing the other activities. So, I settled for making the basic details.

Act 4: Images
The task for act 4 was to explore different image manipulation techniques, specifically pixel data and the pointillism and posterize effects. The image I used is a photo taken in Kolkata, West Bengal, India by ANUSMIT SIL. I initially chose a photo of a man wearing a blanket and standing in a field of yellow flowers with his back facing the camera as it reminded me of the music video of Serendipity by Jimin, but when I added the effects, the colors were too pale or lacked contrast, making the images dull.

In the first image, you can see that there is an ellipse where the cursor is and it is the color of whatever pixel the cursor is on. In the second image, ellipses with the colors in the photo fill up the canvas, making it look blurry. Lastly, the third image uses the posterize effect wherein the bit depth of the photo has been decreased. While the effect may not look that dramatic in the photo, the intensity changes when viewing it live.

Act 5: Pattern
The task for act 5 was to make a pattern using randomness, repetition, and/or algorithmic design. When I saw the sample pattern on the portfolio template, I knew I wanted mine to be colorful as well but animated, something that could be mesmerizing.

I decided to use the pattern that Ms. Esha showed us during our lecture on repetition: multiple circles within circles covering the canvas. I made it colorful by randomizing the fill from an array of colors and animated it by randomizing the size between a range of numbers. I didn't want it to be overwhelming and an eye sore, so the colors I chose weren't too bright and I slowed down the frame rate to eight FPS. The canvas is sized according to the browser window, and the background is plain black to not distract from the circles. I contemplated on not giving the shapes an outline but when comparing the two, I felt having one looked better.

Act 6: Typography
The task for act six required to create a 1000 x 1000 px canvas with animated words. Ms. Mary taught us how to make rotating words with a colorful trail, and I wanted to use that to make a CD with my name rotating inside. For some extra animation, I also wanted to make text that would bounce around the canvas like a DVD screensaver. Unfortunately, I couldn’t make it look how I wanted. The trail wouldn’t show up on the rotating text when I added an ellipse to serve as the CD, but I couldn't remove the trail from the bouncing text.

I scratched the idea and made a vinyl player instead. I found a picture of a record needle and a wooden texture which I used as the background. I also added a knob and my name as the logo—changed the rotating text to “I Like U.” Unfortunately, I wasn’t able to figure out how to layer the needle in front of the rotating text and fill the outline of the vinyl without messing up the colorful trail. However, I ended up liking the result more than what I had with my initial idea. I even added the song I Like U by NIKI that could be paused and played by clicking on the canvas. Once the music ends, the song can be repeated by simply pressing the mouse again.

Act 7: Mouse Trails
The task for act seven was to create a sketch that responds to the user's mouse movement by generating a mouse trail. For this, I wanted to replicate the eye squiggles called Phosphenes that appear when one rubs or closes their eyes tightly. The text “Phosphenes” has low opacity and is positioned in the center of a black background. A fading trail of color-changing, both stroke and fill, ellipses follow the user’s cursor. It’s simple but gets the point across.

Act 8: Audio Visualization
Act 8 is about visualizing audio. For the activity, I wanted to create sound waves and moving particles like the ones I remember seeing on fan-made music videos back in 2017-2019. I chose a fan-made instrumental of Nobody Gets Me by SZA and used an image of the ocean as the background like her album cover. I kept the colors minimal as I wanted to stick to the look of the album—placing the white waves and particles in front of a translucent black rectangle.

Not only do the sound waves react to the music but also the background image and the particles. The image shakes when the frequency is above 233, and the particles change velocity depending on the amplification of the sound. The effect is more noticeable starting at the 40-second mark where the music starts to build up. I love how intense the three movements react when the song gets to the chorus, encapsulating how emotional and vulnerable the song is.

Act 10: Interactive Art (Group)
For this activity, I was grouped with two people and we had a meeting to decide what to do. I had been enjoying adding audio to my sketches so I came up with the idea to make a working piano, and we decided to do that with mouse interaction. When the user clicks on a piano key, it will play a note. Additionally, we wanted to make note symbols appear when clicking on the keys. However, we weren’t able to go through with it.

For the text, as we wanted to add in as many kinds of interaction as we could, we decided to use the lesson Ms. Mary taught us wherein the size of the text would depend on the level of mic input. 

We divided the tasks, and I was assigned to do the sounds. I found, downloaded, and put the sounds into p5.js. I was also assigned to make the appearing notes, but when I tried it, it didn’t look how we imagined it and I couldn’t find a tutorial to guide me. So, we dismissed the idea.

The member assigned to make the keys wasn’t able to make the width of the rectangles responsive so they didn’t cover the whole width of the canvas, only occupying the left side. As we were supposed to get feedback already, we didn’t have enough time to figure out how to fix it, so I just positioned the keys and the labels in the center of the canvas using translate(). Though in doing that we ran into another problem: the sounds wouldn’t play. The notes were supposed to play only when the mouse is at the same position as their respective keys, but because I had moved the keys, the users were clicking the center of the canvas instead of the left. I told Ms. Mary about our dilemma, and we figured out that we had to use translate() for the sounds’ specified positions as well.

Act 11: Interactive Art (Individual)
This task was meant to be a digital art piece that reflects my personal creative vision. Admittedly, I had spent a lot of time on the other activities and wasn't able to do much for this one. I just made a simple fading mouse trail with ellipses and my name on a black background. I'd say the real reflections of my creativity are my works for the previous activities. I put in great amount of effort on those, making them look as good and interactive as possible even though I haven't been coding with JavaScript for long.

Critical Reflection
Throughout the Creative Coding module, I explored the intersection of art and technology, using JavaScript and p5.js to create a series of interactive artworks. My journey began with simple shapes, like the car in Act 1, where I learned how to use shapes, lines, and vertices to build a visual form.

As the module progressed, I tackled more complex projects, such as the alien in Act 3 and the animated pattern in Act 5. These works allowed me to experiment with more advanced functions like push() and pop(), rotate(), and randomness, pushing me to think creatively about how I could produce the visuals with code.

Two of my proudest achievements were the typography activity in Act 6 and the audio visualization in Act 8, where I synchronized sound waves and particle movements with music, capturing the emotional intensity of the song Nobody Gets Me by SZA. This project demonstrated my growing ability to merge technical skills with artistic expression. An honorable mention is the alien which I spent the most time on and where I would say I mastered the basics. I actually started on the alien before I finished the car and used the knowledge I gained in that activity to go back and improve the first.

However, the module also presented challenges. In Act 6: Typography—while I do like the result—and the group project in Act 10, I struggled with layering elements and ensuring interactive components functioned as intended. These setbacks taught me the value of problem-solving and the importance of time management, especially when balancing multiple tasks.

Overall, this module has been transformative. It not only equipped me with technical proficiency in creative coding but also encouraged me to view code as a medium for storytelling and personal expression. While there were hurdles, each project reinforced my resilience and creativity. Moving forward, I aim to refine my skills further, exploring even more innovative ways to blend art and technology.
