
export default function Head() {

  // https://beta.nextjs.org/docs/routing/pages-and-layouts eslint doesn't like this. but it works for React and NextJs
  //@ts-ignore
  const googleIcons = (<link precedence="default" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined&display=optional" rel="stylesheet" key="link google icons"/>);

  return (
    <>
      <title>Michael Leonffu</title>
      {googleIcons}
      <meta name="description" content="Michael Leonffu's portfolio" key="meta description"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" key="meta viewport"></meta>
      <link rel="icon" href="/favicon.ico" key="link icon"/>
    </>
  )
}