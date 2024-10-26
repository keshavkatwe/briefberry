import plugin from "tailwindcss/plugin";
import { getTextVariant } from "./utils";

const tailwindInputVariants = plugin(({ addUtilities, theme }) => {
  addUtilities({
    ".input-field": {
      position: "relative",
      paddingTop: theme("spacing.[1.5]"),
      label: {
        position: "absolute",
        backgroundColor: theme("colors.background-surface1"),
        top: "1px",
        marginLeft: theme("spacing.5"),
        paddingLeft: theme("spacing.2"),
        paddingRight: theme("spacing.2"),
        fontSize: theme("fontSize.small.0"),
        lineHeight: theme("fontSize.small.1.lineHeight"),
        fontWeight: theme("fontSize.small.1.fontWeight"),
      },
      input: {
        height: theme("spacing.12"),
        backgroundColor: theme("colors.background-transparent"),
        borderWidth: "1.5px",
        borderColor: theme("colors.stroke1"),
        borderStyle: "solid",
        borderRadius: theme("borderRadius.full"),
        paddingLeft: theme("spacing.7"),
        paddingRight: theme("spacing.7"),
        width: theme("width.full"),
        ...getTextVariant("button", theme),
      },
      textarea: {
        backgroundColor: theme("colors.background-transparent"),
        borderWidth: "1.5px",
        borderColor: theme("colors.stroke1"),
        borderStyle: "solid",
        borderRadius: theme("borderRadius.full"),
        paddingLeft: theme("spacing.7"),
        paddingRight: theme("spacing.7"),
        paddingTop: theme("spacing.4"),
        paddingBottom: theme("spacing.4"),
        width: theme("width.full"),
        height: theme("spacing.52"),
        ...getTextVariant("button", theme),
      },
    },

    ".input-large": {
      input: {
        height: theme("spacing.16"),
        borderRadius: theme("borderRadius.16"),
      },
      textarea: {
        borderRadius: theme("borderRadius.16"),
      },
    },
  });
});

export default tailwindInputVariants;
