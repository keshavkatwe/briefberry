import plugin from "tailwindcss/plugin";
import { CSSRuleObject, RecursiveKeyValuePair } from "tailwindcss/types/config";

const tailwindButtonVariants = plugin(({ addComponents, theme }) => {
  const buttons: CSSRuleObject = {};

  const buttonVariants: RecursiveKeyValuePair = theme("buttonVariants", {
    primary: {
      backgroundColor: theme("colors.background-dark1"),
      color: theme("colors.text-light"),
      "&:hover": {
        backgroundColor: theme("colors.gray.600"),
      },
    },
    secondary: {
      backgroundColor: theme("colors.background-surface2"),
      color: theme("colors.text-secondary"),
      "&:hover": {
        backgroundColor: theme("colors.blue.600"),
      },
    },
    danger: {
      backgroundColor: theme("colors.red.500"),
      color: theme("colors.white"),
      "&:hover": {
        backgroundColor: theme("colors.red.600"),
      },
    },
  });

  const buttonSizes: RecursiveKeyValuePair = theme("buttonSizes", {
    regular: {
      height: theme("spacing.12"),
      padding: `0 ${theme("spacing.7")}`,
      width: theme("width.full"),
      borderRadius: theme("borderRadius.full"),
    },
  });

  // Generate variant classes
  Object.keys(buttonVariants).forEach((variant) => {
    buttons[`.btn-${variant}`] = buttonVariants[variant];
  });
  Object.keys(buttonSizes).forEach((size) => {
    buttons[`.btn-${size}`] = buttonSizes[size];
  });

  addComponents(buttons);
});

export default tailwindButtonVariants;
