import base from '@theme-ui/preset-base'
// import nightOwl from '@theme-ui/prism/presets/vs-dark.json'
import { merge } from 'theme-ui'

export const palette = {
  darker: '#121217',
  dark: '#17171d',
  darkless: '#252429',
  black: '#1f2d3d',
  steel: '#273444',
  slate: '#3c4858',
  muted: '#8492a6',
  smoke: '#e0e6ed',
  snow: '#f9fafc',
  white: '#ffffff',
  pink: '#fef8f8',
  red: '#ec65ad',
  yellow: '#ffe01b',
  green: '#5db86b',
  blue: '#328af1',
  indigo: '#28318a',
  azure: '#3F24D5',
  lilac: '#849de1',
  rose: '#ff707a',
}

export default merge(base, {
  fonts: {
    body:
      'Whyte, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    heading:
      'Whyte, bold, italic, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    monospace: 'ui-monospace, SFMono-Regular, Menlo, monospace',
    prose: 'Crimson Pro, Libre Baskerville'
  },
  fontSizes: [14, 18, 24, 28, 36, 48, 64, 72, 96, 128],
  //fontSizes: [12, 16, 21, 28, 37, 50, 67, 89],
  fontWeights: {
    heading: 'bold',
    body: 400,
  },
  lineHeights: {
    title: 1.25,
    body: 1.625,
  },
  sizes: {
    container: 680,
    xl: 1024,
  },
  radii: {
    base: 6,
    extra: 9,
    circle: 9999,
  },
  initialColorModeName: 'light',
  printColorModeName: 'light',
  useColorSchemeMediaQuery: true,
  colors: {
    ...palette,
    text: palette.black,
    background: palette.white,
    sunken: palette.snow,
    primary: palette.blue,
    secondary: palette.lilac,
    muted: palette.smoke,
    accent: palette.red,
    modes: {
      dark: {
        text: palette.pink,
        background: palette.darker,
        sunken: palette.dark,
        primary: palette.yellow,
        secondary: palette.muted,
        muted: palette.darkless,
      },
    },
  },
  buttons: {
    primary: {
      borderRadius: 'circle',
      transition:
        'text-shadow 0.125s ease-in, background-color 0.5s ease-in-out',
      color: 'white !important', // prevent child a selector from overwriting
      ':hover,:focus': {
        bg: 'accent',
        textShadow: '0 0 6px currentColor',
      },
    },
  },
  cards: {
    secondary: {
      borderRadius: 'extra',
      color: 'secondary',
      border: '1px solid',
      borderColor: 'border',
      p: 3,
      my: 0,
      lineHeight: 'caption',
      strong: {
        display: 'block',
        fontSize: 2,
      },
      a: {
        display: 'block',
        textDecoration: 'none',
      },
    },
  },
  variants: {
    sheet: {
      bg: 'sunken',
      borderRadius: 8,
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.0625)',
      overflow: 'hidden',
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      color: 'text',
      fontSize: 2,
      transitionProperty: 'background-color',
      transitionTimingFunction: 'ease-out',
      transitionDuration: '.25s',
    },
    p: {
      fontFamily: 'prose',
    },
    'p + * > li': {
      fontFamily: 'prose',
    },
    'div[class*="footnotes"]': {
      fontFamily: 'prose',
    },
    h1: {
      textAlign: 'center',
      center: {
        textAlign: 'center',
      },
      left: {
        textAlign: 'start',
      }
    },
    'h1.css-0': {
      textAlign: 'start',
      mb: 3,
    },    
    h2: {
      //fontFamily: ['Lora'],
      fontSize: [3, 4],
      mt: [3, 4],
      mb: 2,
    },
    h3: {
      //fontFamily: ['Lora']
    },
    hr: {
      border: 0,
      height: 4,
      maxWidth: 256,
      bg: 'accent',
      borderRadius: 2,
      mx: 'auto',
      my: [3, 4],
    },
    pre: {
      p: 3,
      mx: [null, -3],
      bg: 'sunken',
      color: 'white',
      borderRadius: 'base',
      lineHeight: 1.375,
      fontSize: 0,
      '.plain, .parameter, .imports, .maybe-class-name, .interpolation': {
        color: 'accent',
      },
      '.comment,.prolog,.doctype,.cdata,.punctuation,.operator,.entity,.url': {
        color: 'secondary',
      },
      '.comment': {
        fontStyle: 'italic',
      },
      '.property, .tag, .boolean, .number, .constant, .symbol, .deleted, .function, .class-name, .regex, .important, .variable': {
        color: 'yellow',
      },
      '.atrule, .attr-value, .keyword': {
        color: 'primary',
      },
      '.selector, .attr-name, .string, .char, .builtin, .inserted': {
        color: 'lilac',
      },
    },
    inlineCode: {
      fontFamily: 'monospace',
      color: 'accent',
    },
    'p > code, li > code': {
      fontSize: '0.875em',
      ':before,:after': { content: '"`"' },
    },
    kbd: {
      fontFamily: 'monospace',
      color: 'accent',
      fontSize: '0.875em',
    },
    mark: {
      color: 'dark',
      bg: 'yellow',
      px: 2,
      mr: -1,
      borderRadius: '1em 0.5em',
    },
    blockquote: {
      borderLeft: '5px dotted',
      borderLeftColor: 'rose',
      ml: [0, -3],
      pl: 3,
      p: { color: 'rose' },
    },
    a: {
      color: 'primary',
      transition: 'color 0.125s ease-in-out',
      ':hover,:focus': {
        color: 'accent',
      },
    },
    'a[class*="Pods"]' : {
      fontFamily: 'body'
    },
    'ol > p > a': {
      ':hover,:focus': {
        color: '',
      },
    },
    'ol > div > li > a > strong': {
      //fontFamily: 'Lora',
    },
    'p > img:first-of-type:last-of-type, p > a:first-child:last-child > img': {
      display: 'block',
      transform: ['translateX(-0.5rem)', null, 'translateX(-1.5rem)'],
      width: ['calc(100% + 1rem)', null, 'calc(100% + 3rem)'],
      maxWidth: 'unset',
      maxHeight: '75vh',
      objectPosition: 'center',
      objectFit: 'contain',
      mx: 'auto',
      borderRadius: 'extra',
    },
    ul: {
      listStyleType: 'disc',
      pl: '1.375rem',
      '&.contains-task-list': {
        listStyle: 'none',
        pl: 3,
      },
    },
    li: {
      my: 2,
      '::marker': {
        fontSize: 'inherit',
        color: 'secondary',
      },
      li: {
        mt: 1,
        mb: 1,
        '&:last-of-type': {
          mb: 2,
        },
      },
      '&.task-list-item': {
        my: 1,
        input: {
          mr: 2,
        },
      },
    },
  },
})
