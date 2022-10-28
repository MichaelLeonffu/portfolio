import '../styles/globals.css'
import { Inter, Noto_Sans_Mono} from '@next/font/google'

// Fonts
const inter = Inter({
  variable: '--font-Google-Inter',
  subsets: [
    'latin',
    'latin-ext'
  ],
  fallback: ['serif']});
const notoSansMono = Noto_Sans_Mono({
  variable: '--font-Google-Noto-Sans-Mono',
  subsets: [
    'latin',
    'latin-ext'
  ],
  fallback: ['serif']});

/* 
  NOTE: I pass this in as a "variable" which makes it easier to use in the CSS 
  Took a while to figure this one out: https://nextjs.org/docs/api-reference/next/font#css-variables
*/
const fontClassNames = [inter.variable, notoSansMono.variable].join(' ');

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={fontClassNames}>
      {/* Populated in ./head.tsx */}
      <head />
      <body>{children}</body>
    </html>
  )
}
