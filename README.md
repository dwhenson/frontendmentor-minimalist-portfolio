# Frontend Mentor - Minimalist portfolio website

![Design preview for the Minimalist portfolio website coding challenge](./preview.jpg)

## The challenge

Your users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements throughout the site
- Click the "About Me" call-to-action on the homepage and have the screen scroll down to the next section
- Receive an error message when the contact form is submitted if:
  - The `Name`, `Email Address` or `Message` fields are empty should show "This field is required"
  - The `Email Address` is not formatted correctly should show "Please use a valid email address"

## Lessons learnt

- 💡 I learnt a lot about 11ty on this project. I used collections and pagination for the first time. It was difficult but I can see this being very useful
- 💡 I think I could have hard coded this in about half the time, but making edits to this site is now a real breeze thanks to 11ty and nunjunks templating.
- 💡 Using 11ty's pagination feature (and collections), adding projects from a markdown file also updates the portfolio page and the pagination links and text automatically
- 💡 I also inlined my CSS to improve performance. I split my CSS into 'critical', which appears on every page, and other page specific CSS is inlined on each page
- 💡 I need to get in the habit of checking browser support as I had issues with Safari not accepting some CSS rules late on; it took me a while to work out what was happening

## Problems

I would very much welcome advice on the following issues:

- ⚠️ Regarding 11ty, I spent a lot of time working out pagination. I thought that content that I put below the last `---` in my .md files would appear in the template I referenced. This didn't happen. I suspect something to do with 11ty's data cascade, but I haven't understood what was happening yet.
- ⚠️ One thing that has driven me crazy is styling the textarea on the form. I would like the text to wrap, at the moment it just carries on on one line, and I would like to user inputed text to start at the top (in the same location as the placeholder text). I moved the placeholder text, but cannot get the user text to start where I want it to

## Future learning

- 🙇‍♂️ Get comfortable with responsive images (srcset, sizes etc).
- 🙇‍♂️ Continue to improve knowledge of Gulp and build steps.
- 🙇‍♂️ Keep going with 11ty!!

## Resources

- 🔗 I used Andy Bell's totally full on [fully responsive progressively enhanced burger menu ](https://piccalil.li/tutorial/build-a-fully-responsive-progressively-enhanced-burger-menu/) which is excellent and very robust.
- 🔗 I used Andy Bell's totally full on [Learn Eleventy from Scratch Course ](https://piccalil.li/course/learn-eleventy-from-scratch/) which is excellent, really in-depth and free!. It should probably be called learn 11ty, SASS, gulp, some accessibility stuff and how to structure CSS...
