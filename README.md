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

## Planning

_This is more about planning for my next 3 days not so much so the portfolio; I'll remove this later._

To be built in 3 days worth of time.

- Static Frontend Portfolio (1 day):
  - Built with React and styled with MUI
  - Single page
- Blog blog.cookieandrock.com:
  - Next.js framework with SSR and hosted on Vercel
  - CMS backend using Strapi V4.0 (self-hosted)
  - React/Next.js front end
  - Incremental static building!!!!
- Annali Bot, Art backend
  - Account handling (via F2A using Discord)
  - Session handling
  - Full data and user preferences/permissions schema

And if time permits then Jest testing for CI/CD.

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

To update and rebuild the site.

**Installing**

Clone this repo, then run: `npm install`

**Development mode**

Use `npm run dev`

**Pushing to production**

Use ...

**UPDATE THIS LATER**
