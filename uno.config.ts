import { defineConfig } from "unocss";
import { presetUno } from "unocss";

export default defineConfig({
  // ...UnoCSS options
  presets: [presetUno],
  preflights: [
    {
      getCSS: () => `
        body {
          background-color: #ccc;
          padding: 0;
          margin: 0;
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
    ["color-primary", { color: "#023047ff" }],
  ],
  // ...other options
});
