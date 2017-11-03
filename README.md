# Hckrs.eu web app and website

## Install dependencies

`yarn` (`npm install yarn --g` first if you don't have Yarn)

## Start dev server

`yarn start`

## Compile produciton build

`yarn build`

## Live preview

The current state of the **master** branch is reflected <a href="http://hckrs-app.netlify.com/" target="_blank">here</a>.

## Switch between Logged-in and Logged-out views

By default, the app is loaded in a Logged-out view. Due to the lack of a back-end stack, the process has to be simulated. Use the little checkbox at the top right hand side of the titlebar to "switch".

![Demo](/demo.gif)

## Page list

These are all the pages built by the design team using Hckrs' design system. The list covers all different template patterns the app might need at the time of writing this. Pages that have to be built by the dev team in the future should follow the same patterns.

### Marketing website
- [Home](http://hckrs-app.netlify.com/)
- [Challenges](http://hckrs-app.netlify.com/challenges)
- [Benefits](http://hckrs-app.netlify.com/benefits)
- [Hackers listing](http://hckrs-app.netlify.com/hackers)
- [News listing](http://hckrs-app.netlify.com/benenewsfits)
- [Sign up](http://hckrs-app.netlify.com/signup)
- [Log in](http://hckrs-app.netlify.com/log-in)
- [Profile](http://hckrs-app.netlify.com/profile)
- [404](http://hckrs-app.netlify.com/awronglink)

### App
- [Dashboard](http://hckrs-app.netlify.com/dashboard)
- [Challenges](http://hckrs-app.netlify.com/challenges)
- [Hackers listing](http://hckrs-app.netlify.com/hackers)
- [News listing](http://hckrs-app.netlify.com/benenewsfits)
- [Activity (notifications)](http://hckrs-app.netlify.com/activity)
- [New challenge](http://hckrs-app.netlify.com/new-challenge)
- [Profile](http://hckrs-app.netlify.com/profile)
- [Draft challenge](http://hckrs-app.netlify.com/draft-challenge)
- [Single challenge view](http://hckrs-app.netlify.com/challenges/hack-mty)
- [Configure time slots (advisor)](http://hckrs-app.netlify.com/configure-time-slots)
- [Book time slot (hacker)](http://hckrs-app.netlify.com/http://hckrs-app.netlify.com/book-time-slot)
- [404](http://hckrs-app.netlify.com/awronglink)

## Miscellaneous notes
- the Newsletter subscription block could be omitted from the footer in case it's not needed
- in user flows where proper routing can't be achieved without a working back-end, hard-coded routes are used to demonstrate how the flows should work
- as a general notion, Hckrs tries not to ask for too much data up-front in order not to alienate new users. To achieve this, creating new content (like a user account or a challenge) follows the "postponed data entry" pattern. An example of how this should work is included with the ["New challenge" flow](http://hckrs-app.netlify.com/new-challenge). After the user has filled in the absolutely essential details in the standard form, the challenge is published and visible to the rest of the users. In the same time, all other types of data like rich description, sub-challenges, agenda, etc. are added after the challenge is created in the [Draft view](http://hckrs-app.netlify.com/draft-challenge). Follow this pattern when building this sort of patterns. You can rely on the `NewBlock.js` component in most scenarios.