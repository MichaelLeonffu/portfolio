# Portfolio

A portfolio for myself at [michaelleonffu.com](https://michaelleonffu.com).

To consolidate all my projects in a nice and presentable way. This includes links to many projects I've worked on and a CV.

## Design and Implementation

My developer goals for this portfolio:

- Easily maintainable and expandable
- Static single page site
- Cloud hosted
- Testable

My vision: to make this as easy to develop as possible so I can keep it up to date as often as possible. This also means I'll keep it as simple as possible with only essential features. All other features are deferred to separate projects.

Implemented using:

- Frontend Framework: [Next.js](https://nextjs.org) based on [React](https://reactjs.org)
- Styles: [MUI](https://mui.com)
- Hosted on: [Vercel.com](https://vercel.com)
- IDE: [VSCode](https://code.visualstudio.com)
- Version Control: [Github/michaelleonffu](https://github.com/MichaelLeonffu)
- Testing: Jest (todo)
- CI/CD: (todo)

### Why host on a cloud provider

I usually always prefer self-hosted solutions; why host on a cloud provider?

**Firstly**, I want the practice hosting on a cloud provider, CI/CD, building static sites, and learning the toolchain/workflow overall. I realize I have always self hosted and that it doesn't hurt to use a cloud provider.

**Secondly**, I want the uptime to be closer to 99.99% compared to my self-hosted uptime of 98.99% haha. I upgrade my servers or services and it falls apart when I relocate my servers. _But shouldn't my self hosted solutions include redundancy?_: yes it should. Right now I'm not focusing on that. Later I'll make a series on Docker and distributed style software systems.

**Lastly**, I will update this semi-infrequently making it a great use case for a static single-page cloud hosted webpage.

## Hosting and Services

Other services I've created and how I'm hosting them:

- Portfolio: React/Next.js hosted on Vercel
- cookieandrock.com: self-hosted on rasberrypi
- blog.cookieandrock.com: React/Next.js hosted on Vercel, no database yet
- img.cookieandrock.com: self-hosted on raspberrypi, database on MongoDB Atlas
- Annali Discord Bot: self-hosted on raspberrypi, database on MongoDB Atlas

## Progress

Check out my progress at [PROGRESS.md](./PROGRESS.md)

The changelog is really just a `git log`. Progress is a record of the method I used to build this project. I do this because I want to keep track of what I work on, how I worked on it, and for how long.

## Developing

**Installing**

Clone this repo, then run: `npm install`.

**Development mode**

Use `npm run dev`; Then go to [localhost:3000](http://localhost:3000).

**Pushing to production**

Test a production version with `npm run build`.

Commit to `main` and `git push` so Vercel can see the changes.

## References

Some references I used for designing and building the website.

### HTML/CSS/Next.js

- [W3 HTML Tutorial](https://www.w3schools.com/html/default.asp)
- [W3 CSS Tutorial](https://www.w3schools.com/css/default.asp)
- [MDN docs](https://developer.mozilla.org/en-US/docs/Web/CSS)
  - Looking at really detailed APIs, eg: linear-gradient() or clamp()
- [CSS-Tricks](https://css-tricks.com/guides/)
  - [Flex Box](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
  - [Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Next.js v13](https://beta.nextjs.org/docs/getting-started)

### Portfolios

- [My friend: Alex Baratti's portfolio](https://alexsmbaratti.com)
- [hackernoon 21 best dev portfolios](https://hackernoon.com/21-best-developer-portfolio-examples-p61j31wi)
- [brittanychiang.com](https://brittanychiang.com)
- [kuon.space](https://kuon.space)
- [riccardozanutta.com](http://riccardozanutta.com)
- [hashnode 30 web dev portfolios](https://hashnode.com/post/30-web-developer-portfolios-to-inspire-you-cknfx6wdg069kxws1bjjv8mhw)
- [braydoncoyer.dev](https://braydoncoyer.dev)
- [monicalent.com](https://monicalent.com)