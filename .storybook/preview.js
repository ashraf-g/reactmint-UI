export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  tags: ["autodocs"],
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
