import { defineConfig } from "unocss";
import { presetUno } from "unocss";
import { presetWebFonts } from "unocss";

export default defineConfig({
  // ...UnoCSS options
  presets: [
    presetUno,
    presetWebFonts({
      provider: "google",
      fonts: {
        caveat: [
          {
            name: "Caveat",
            weights: ["400", "700"],
          },
        ],
        roboto: [
          {
            name: "Roboto",
            weights: ["100", "400", "700"],
          },
        ],
      },
    }),
  ],
  preflights: [
    {
      getCSS: () => `
      body{
        margin: 0;
      }

      #root {
        background-color: #ccc;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        height: 100vh;
      }
      `,
    },
  ],
  rules: [
    [
      "note",
      {
        "box-shadow": "0 2px 5px #ccc",
        "background-color": "#fff",
        color: "#023047ff",
      },
    ],
    [
      "login-form",
      {
        "box-shadow":
          "4px 4px 10px rgba(36,79,92,0.5), -4px -4px 5px rgba(184, 229, 247,0.5) ",
      },
    ],
    [/^bg-size-(\d+)px$/, ([, d]) => ({ "background-size": `${d}px` })],
    ["bg-position-y-center", { "background-position-y": "center" }],
    [
      /^bg-position-x-(\d+)px$/,
      ([, d]) => ({ "background-position-x": `${d}px` }),
    ],
    ["bg-primary-400", { "background-color": "#387386" }],
    ["bg-primary-600", { "background-color": "#122D36" }],
    ["color-primary-600", { color: "#122D36" }],
    ["color-primary-400", { color: "#387386" }],
    ["color-secundary-300", { color: "#B2974D" }],
    ["bg-secundary-300", { "background-color": "#B2974D" }],
    ["border-color-primary-600", { "border-color": "#122D36" }],
    ["border-color-secundary-600", { "border-color": "#3B3115" }],
    ["font-secundary", { "font-family": "caveat, sans-serif" }],
    ["font-primary", { "font-family": "roboto, sans-serif" }],
    ["font-light", { "font-weight": "100" }],
    ["font-regular", { "font-weight": "400" }],
    ["font-bold", { "font-weight": "700" }],
    ["font-size-title", { "font-size": "2.5rem" }],
    ["font-size-medium", { "font-size": "1.5rem" }],
    ["font-size-normal", { "font-size": "1rem" }],
  ],
  // ...other options
});
