# hma_js1_ca

Course Aassignment JavaScript1

API: Beer recipes from PunkAPI
**https://api.punkapi.com/v2/beers**

# Course Assignment JavaSccript 1 by Hans Marius Andreassen.

I initially had a random coctail generator idea I wanted to make, but the endpoint only had 100 connections before hitting the pay wall, so I started over with this API which I am really happy with and it gives 3600 connections per hour which should be quite enough.

I drew a little design idea on a piece of paper and jumped to the HTML and CSS build. I skipped doing a prototype because I did not have any idea about the end result because of me not having any experience with JS before starting this semester.
From having no experience to some idea of how it works I am actually very happy with my result.
It is simple but it works which I hope is the whole idea for this CA.

# index.html

I set up index page like I usually do with some examples for me to style in CSS so I could see what I was doing and create the styling I would eventually need when I got the JS to work.

Here you will find a really simple header with the name and a link to the contact.html page.
Beer cards, names, pictures and taglines are all generated with JS in the index.js file.
Clicking the card (the whole card is the link) brings us to the ==>

# details.html

Here you will first see the CSS loader (not created by me. See refrences for source) for a second before JS loads and loads the querystring ID to the page so it generates the selected beer and its info.
We have the name of the beer (loaded in to the document.title as well), the date of when it was made first, the description of this beer, the main hop and malt ingredients as well as good food matches and brewers tips.
I decided agains having more info on here, but I might add that later for fun and more practice. At the bottom of the card there are programmatically added links to go back and one to take you to the ==>

# contact.html

Hey it's the loader again! This is a simple form page where I brought back the index.html header and its "go back" link to go back to the index page.

The form itself is basic and made to accommodate the CA brief and its criterias.
I initially had required parameters in the html for the name and email but I wanted my own error message so I removed those and programmed in what I had in mind. After som mock up in html to create the classes and IDs. This way I could make my idea com to life with having the requirements for each written under the inputs and let JS handle them. I wanted them to go away as you are writing when the criteria is fulfilled. More about this in the form.js section.

# JavaScript

**index.js**
I will write this very straight forward, leaving out all the backs and forth I had to go through to make it work.
Theres a simple fetch function to obtain the array from punkabi.com. No key required for this one. The privious I made had a key requirement so i got to play with that too (I got it to work I would like to add) but for this one it was open.
Fetch and create. Made a for loop to loop the array pulling out the before mentioned information and create the cards with the information you see on index.html

**details.js**
This does the same basically as index.js but you will also find the querystring id being added here with the URLSearchParams.
After it's pretty self explanitory I guess. It does the same as index.js. The content is all created with JS. At the bottom is the setTimeoutfunction to delay the call on the fetchBeer function.
Here I also added the "go back" and "contact" links but to mix it up I added these programmatically with JS instead of hard coding them in to the HTML.

**form.js**
This was kind of where the fun started for me and where I have spent the most time.
My validateForm Function became quite big but I am quite pleased with how I solved my idea about the criterias. By adding listeners to the inputs and values and wrote if/else statements to show and hide the criteria text on the form itself. This however presented a new problem with preventing form default behavior as I had to call the validateForm before submitting it. It caused an error but it also stopped the criteria "reading" while typing that I wanted to accomplish, so I had to figure out a way to solve this which I could not find in our modules. I tried looking in MDN but could not seem to find it there either. I solved this by creating a function for the preventDefault() and adding a eventlistener to the form container listening for the submit to happen. To be honest. I am not all sure why it works but it does. The removeMessage function holds a document.reload() method to reset the form when the success message disappears.

for the checkLength function I decided against the trim() method as it makes no sense to have names and addresses trimmed in this context. I did how ever make it just to try it but removed it later.

After this I wanted to try the lvl 2 of the brief (not going to lie here. It was my intention all the way) and make the error/success messages showing up by checking if all criterias were met and displaying the messages accordingly.
It is a basic if/else statment in short. If all of validateForm come back "true" via the checkLength function the createSuccessHtml function is called. If "else" the createErrorHtml function is called.
I also added a shadow highlight to the submit button if error or success.
In the checkFormBoolean function you will also see a clearIputs function. This will clear the inputs if the form is "true" and is submitted. If "false" everything will stay written in the inputs for correction purposes and not to mention practical reasons.
To display the relevant error I made a switch that will check validity and display the relevant unmet input criteria. This one I struggled quite a bit with but I am pleased with how I solved it in the end.

**functions.js**
To clean things up I played with writing reusable functions and export/import and moved quite a bit of functions over from form.js to functions.js to have them imported instead.

# Conclusion

This was fun. I learned far more from working with the CA than I did trying to work through the modules. Face a problem and work it through.
All code and functions are my own apart from the obvious ones like the loader, the regEx and bits and pieces from the modules.

# refrences and sources

https://cssloaders.github.io/
https://digitalfortress.tech/tips/top-15-commonly-used-regex/
https://api.punkapi.com/v2/beers
https://developer.mozilla.org/en-US/
https://stackoverflow.com/
