import "../src/styles/index.css"

export const parameters = {
  //Test responsiveness
   viewport: {
    viewports: {
      mobile: { name: "Mobile", styles: { width: "375px", height: "667px" } },
      tablet: { name: "Tablet", styles: { width: "768px", height: "1024px" } },
    },
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  tags: ["autodocs"],
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
