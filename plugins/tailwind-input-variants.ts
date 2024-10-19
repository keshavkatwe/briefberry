import plugin from "tailwindcss/plugin";
import { getTextVariant } from "./utils";

const tailwindInputVariants = plugin(({ addUtilities, theme }) => {
  addUtilities({
    ".input-field": {
      position: "relative",
      label: {
        position: "absolute",
        backgroundColor: theme("colors.background-surface1"),
        top: "-5px",
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
    },
  });
});

export default tailwindInputVariants;
