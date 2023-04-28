const plugin = require("tailwindcss/plugin")

module.exports = {
  plugins: [
    plugin(({ addBase, addComponents, addUtilities, theme }) => {
      const isSP = `@media (max-width: ${theme("screens").md})`
      addBase({
        html: {
          fontFamily: `"Noto Sans JP", sans-serif`,
          color: theme("colors.rak-black"),
        },
        body: {
          lineHeight: "150%",
        },
        h1: {
          fontSize: theme("fontSize.2xl"),
          fontWeight: theme("fontWeight.bold"),
          lineHeight: "150%",
          [isSP]: {
            fontSize: theme("fontSize.xl"),
          },
        },
        h2: {
          fontSize: theme("fontSize.xl"),
          fontWeight: theme("fontWeight.bold"),
          lineHeight: "150%",
          [isSP]: {
            fontSize: theme("fontSize.lg"),
          },
        },
        label: {
          fontSize: theme("fontSize.xs"),
          lineHeight: "150%",
          fontWeight: theme("fontWeight.medium"),
        },
        button: {
          fontSize: theme("fontSize.base"),
          lineHeight: "150%",
          fontWeight: theme("fontWeight.medium"),
        },
      })
      addComponents({
        ".display-m": {
          fontSize: theme("fontSize.5xl"),
          lineHeight: "150%",
          fontWeight: theme("fontWeight.bold"),
          // letterSpacing: "2%",
          [isSP]: {
            fontSize: theme("fontSize.4xl"),
          },
        },
        ".headline-m": {
          fontSize: theme("fontSize.2xl"),
          fontWeight: theme("fontWeight.bold"),
          lineHeight: "150%",
          [isSP]: {
            fontSize: theme("fontSize.xl"),
          },
        },
        ".headline-s": {
          fontSize: theme("fontSize.xl"),
          fontWeight: theme("fontWeight.bold"),
          lineHeight: "150%",
          [isSP]: {
            fontSize: theme("fontSize.lg"),
          },
        },
        ".body-m-normal": {
          fontSize: theme("fontSize.base"),
          fontWeight: theme("fontWeight.normal"),
          lineHeight: "170%",
        },
        ".body-m-bold": {
          fontSize: theme("fontSize.base"),
          fontWeight: theme("fontWeight.bold"),
          lineHeight: "170%",
        },
        ".body-s-normal": {
          fontSize: theme("fontSize.sm"),
          fontWeight: theme("fontWeight.normal"),
          lineHeight: "170%",
        },
        ".body-s-bold": {
          fontSize: theme("fontSize.sm"),
          fontWeight: theme("fontWeight.bold"),
          lineHeight: "170%",
        },
        ".label.s": {
          fontSize: theme("fontSize.xxs"),
          lineHeight: "150%",
          fontWeight: theme("fontWeight.medium"),
        },
        ".button.s": {
          fontSize: theme("fontSize.sm"),
          lineHeight: "150%",
          fontWeight: theme("fontWeight.medium"),
        },
      })
      addUtilities({})
    }),
  ],
}
