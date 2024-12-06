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
        title: [
          {
            name: "Caveat",
            weights: ["700"],
          },
        ],
        primary: [
          {
            name: "Roboto",
            weights: ["100", "400", "700"],
          },
        ],
      },
    }),
  ],
  theme: {
    colors: {
      brand: {
        primary: {
          400: "#387386", //class="bg-brand-primary-400"
        },
        secundary: {
          300: "#B2974D", //class="bg-brand-secundary-300"
          600: "#3B3115", //class="bg-brand-secundary-600"
        },
        DEFAULT: "#122D36", //class="bg-brand" (primary-600)
      },
    },
  },
  preflights: [
    {
      getCSS: () => `
      body{
        margin: 0;
        background-color: #ccc;
        color: #122D36;
      }

      #root {
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        min-height: 100vh;
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
      },
    ],
    [
      "shadow-brand",
      {
        "box-shadow":
          "4px 4px 10px rgba(36,79,92,0.5), -4px -4px 5px rgba(184, 229, 247,0.5) ",
      },
    ],
    ["fs-modal", {"position": "absolute", "top":0, "bottom": 0, "left": 0, "right": 0}],
    ["font-light", { "font-weight": "100" }],
    ["font-regular", { "font-weight": "400" }],
    ["font-bold", { "font-weight": "700" }],
    ["font-size-title", { "font-size": "2.5rem" }],
    ["font-size-medium", { "font-size": "1.5rem" }],
    ["font-size-normal", { "font-size": "1rem" }],
    ["font-size-small", { "font-size": "0.8rem" }],
  ],
});
