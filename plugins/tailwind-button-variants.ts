import plugin from "tailwindcss/plugin";
import { CSSRuleObject } from "tailwindcss/types/config";
//
// // Defining types for better clarity and type safety
// interface ButtonStyles {
//   [key: string]: string | ButtonStyles;
// }
//
// export default plugin(function ({ addComponents, theme }) {
//   // Fetch button sizes, variants, and shapes from the theme configuration
//   const buttonSizes: Record<string, string> = theme("buttonSizes", {
//     regular: "h-12 px-7 text-button",
//     md: "py-2 px-4 text-base",
//     lg: "py-3 px-6 text-lg",
//   });
//
//   const buttonVariants: Record<string, ButtonStyles> = theme("buttonVariants", {
//     primary: {
//       backgroundColor: theme("colors.gray.500"),
//       color: theme("colors.white"),
//       "&:hover": {
//         backgroundColor: theme("colors.gray.600"),
//       },
//     },
//     secondary: {
//       backgroundColor: theme("colors.background-surface2"),
//       color: theme("colors.text-secondary"),
//       "&:hover": {
//         backgroundColor: theme("colors.blue.600"),
//       },
//     },
//     danger: {
//       backgroundColor: theme("colors.red.500"),
//       color: theme("colors.white"),
//       "&:hover": {
//         backgroundColor: theme("colors.red.600"),
//       },
//     },
//   });
//
//   const buttonShapes: Record<string, string> = theme("buttonShapes", {
//     rounded: "rounded-full",
//     square: "rounded-none",
//     default: "rounded-md",
//   });
//
//   const buttons: Record<string, ButtonStyles> = {};
//
//   // // Generate size classes
//   Object.keys(buttonSizes).forEach((size) => {
//     buttons[`.btn-${size}`] = {
//       ...parseButtonStyle(buttonSizes[size]),
//     };
//   });
//
//   // Generate variant classes
//   Object.keys(buttonVariants).forEach((variant) => {
//     buttons[`.btn-${variant}`] = buttonVariants[variant];
//   });
//
//   // Generate shape classes
//   Object.keys(buttonShapes).forEach((shape) => {
//     buttons[`.btn-${shape}`] = {
//       borderRadius: buttonShapes[shape],
//     };
//   });
//
//   // Add all generated button styles to Tailwind's component library
//   addComponents(buttons);
// });
//
// // Helper function to split size class strings and convert them to CSS styles
// function parseButtonStyle(styleString: string): ButtonStyles {
//   const styles = styleString.split(" ");
//   const styleObject: ButtonStyles = {};
//
//   styles.forEach((style) => {
//     const [key, value] = style.split(":");
//     styleObject[key] = value;
//   });
//
//   console.log(styleObject);
//   return styleObject;
// }

const tailwindButtonVariants = plugin(({ addComponents, theme }) => {
  const buttons: CSSRuleObject = {};

  const buttonVariants = theme("buttonVariants", {
    primary: {
      backgroundColor: theme("colors.gray.500"),
      color: theme("colors.white"),
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

  // Generate variant classes
  Object.keys(buttonVariants).forEach((variant) => {
    buttons[`.btn-${variant}`] = buttonVariants[variant];
  });

  addComponents(buttons);
});

export default tailwindButtonVariants;
