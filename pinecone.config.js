const { alpha } = require('pinecone-cli')

let accents = {
  love: '#eb6f92',
  gold: '#f6c177',
  rose: '#9A7471',
  pine: '#31748f',
  foam: '#9ccfd8',
  iris: '#c4a7e7',
}

let mutedAccents = {}

// create muted shades of each accent colour
Object.keys(accents).forEach((accent) => {
  mutedAccents[`${accent}Muted`] = alpha(accents[accent], 0.5)
})

module.exports = {
  options: {
    writeMeta: true,
  },
  theme: {
    variants: {
      main: {
        name: 'Dead Peach',
        type: 'dark',
      },
    },
    colors: {
      transparent: '#0000',
      unusedOpacity: alpha('#000', 0.5),

      primary: accents.rose,
      onPrimary: '#191724',

      text: '#D9CDC8',
      textSubtle: '#B19F9D',
      textIgnored: '#A48C8D',

      bgBase: '#3C3741',
      bgSurface: '#3A333C',
      bgOverlay: '#705C65',

      uiShadow: alpha('#010101', 0.1),

      highlight: alpha('#6e6a86', 0.2),
      highlightInactive: alpha('#6e6a86', 0.1),
      highlightOverlay: alpha('#6e6a86', 0.4),

      diffHighlightInserted: alpha(accents.foam, 0.08),
      diffHighlightRemoved: alpha(accents.love, 0.08),

      ...accents,
      ...mutedAccents,
    },
  },
}
