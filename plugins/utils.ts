export const getTextVariant = (
  variant: string,
  theme: (path: string) => string,
) => {
  return {
    fontSize: theme(`fontSize.${variant}.0`),
    lineHeight: theme(`fontSize.${variant}.1.lineHeight`),
    fontWeight: theme(`fontSize.${variant}.1.fontWeight`),
  };
};
