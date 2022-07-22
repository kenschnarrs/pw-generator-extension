# Password Generator Chrome Extension
A simple password generator that returns a unique password when given a site name and a master password. This unique password is (by design) meant to reproducible. This way, the user only needs to remember a master password and know the name of the site they are trying to access. There is no need for storage of passwords even locally on the user's machine. By accomplishing this, the user's password data is not easily compromiseable. 


## How to add to your browser:

1. Download the zip file
2. Unzip it via the file explorer (or terminal if you're cool)
3. Go to your Chromium-based browser's extension manager page
4. Turn on "Developer mode"
5. Click "Load unpacked"
6. Select the extension folder
7. You're done! 

You can pin the extension if you like by clicking the extensions button on the top browser bar and then clicking the little pin next to "Password Generator".


## Disclaimer
This extension is only really intended to be used by a relatively small number of people at this point in time. It utilizes a text scrambler function that is not complex nor secure -- but it gets the job done in the sense that it makes passwords long and nonsensical. If everybody in the world used this for all their passwords, it would be the equivalent of everybody using one password on all sites as "hackers" would be able to utilize the scrambling algorithm found within this source code. Fortunately, that scenario is improbable. 
