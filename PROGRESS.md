# Progress

A list of steps I took and how long each one took me. This is only a record, not an in-depth tutorial.

## Next.js and Vercel Tutorial
**1 hour**

Firstly need to learn what the bare minimum is for making a Next.js project.

- I just skimmed it because this isn't the first time for me: [Next.js Docs](https://nextjs.org/learn/foundations)
- There are so many choices: but I'll stick with just getting a basic site online first.
- [Next.js Getting started](https://nextjs.org/docs/getting-started):
- `npx create-next-app@latest --typescript`
- Upload to github at [github.com/MichaelLeonffu/portfolio](https://github.com/MichaelLeonffu/portfolio)
- Connect it with [Vercel.com](https://vercel.com)
- Then, if you have a domain, set it using: [Vercel Domain Settings](https://vercel.com/michaelleonffu/portfolio/settings/domains)
- Make some changes to [index.tsx](./pages/index.tsx) to show Michael Leonffu
- Temporarily changed [favicon.ico](./public/favicon.ico)

## Portfolio
**18 hours**

I did a bad job keeping record here.

### Upkeep

Meta level code stuff: Upgrading, refactoring, creating constants...

- Upgraded to Next.js v13.0
- Removed the `/pages` for `/app`
  - Refactored code from `/pages/_document.jsx` and `/pages/_app.jsx` into `/app/page.tsx` and `/app/head.tsx`
- Removed `/pages/api`; not sure where it migrates to.
- Added a `IHomeData` type in `/types`
- Added a constant `home.ts` data constant in `/constants`
  - This way I can keep the data separate from the html

### Portfolio

I used some references (noted in README), also I did everything in plain CSS for practice.

- Added `section`s for each of:
  - Hero: introduction, has my name
  - About: 3 paragraphs about me and a profile picture
  - Experience: work experiences
  - Project: projects I've worked on
  - Skill: other skills or hobbies that I have
- Currently all the CSS and sections are in one file, needs to be refactored
- Had issues with testing since components don't update on refresh
- Styles currently exist in `/styles/` but can/will be moved per each component
- Color scheme inspired by Material color theme on VS Code
- Took a long time; Got Google Fonts to work. Notes in the implementation
  - A.k.a using 2 fonts via their `variable` implementation rather than their `className` implementation
  - Adding a `link` with `ts ignore` in order to avoid silly issues with hydration
- CSS selectors for React `classNames`; inner classnames can be found from `styles` as `styles.innerClassName` when inside a parent node which has the `styles.outerClassName`

I think it took a long time to style (CSS) the portfolio. I learned a lot about making responsive design. And I learned a lot of HTML/CSS since I didn't use any prebuilt component libraries. Also I didn't worry about loading data because the whole page is static.

Overall I had a good experience; but I think I need to move on to another project soon. It was fun working on this, and there is still some more work to be done on it.

### Refactoring
**2 Hours**

Using [Next.js Colocation](https://beta.nextjs.org/docs/routing/fundamentals#colocation) feature to move all related components and their styles into the same dir.

- Moved globals to `/app/global.css` [Global Styles](https://beta.nextjs.org/docs/styling/global-styles)
- Typing Function Components properly using [Function Components typing reference](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components)
- Moved `./styles/Home.modules.css` into `/app/styles.module.css` as Colocation
- Refactored out a "portfolio-section" `/app/portfolio-section.tsx` as all the containers that contain each portfolio section; styling was also refactored out
- Moved each section out into their own `.tsx` and `.module.css` files colocated each.
  - This makes it look like there are a lot of files. Not sure if this was the best choice.
- Now I'm fixing a lot of the mistakes in the CSS classes; some selectors are wrong after the refactoring
- It's easy to navigate the code, but now it's hard to look at the number of files