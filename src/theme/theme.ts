import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const customConfig = defineConfig({
  theme: {
    tokens: {
      colors: {
        space: {
          50: { value: "#e4e4e4" },
          100: { value: "#c6c6c6" },
          200: { value: "#a9a9a9" },
          300: { value: "#8b8b8b" },
          400: { value: "#6e6e6e" },
          500: { value: "#474747" }, // Default: Outer Space
          600: { value: "#3a3a3a" },
          700: { value: "#2d2d2d" },
          800: { value: "#202020" },
          900: { value: "#121212" },
          910: { value: "#12121280" }, // Home Page Text Background Opacity
          950: { value: "#0b0b0b" },
        },
        oxford: {
          50: { value: "#dbe4ec" },
          100: { value: "#b8cadb" },
          200: { value: "#94afc9" },
          300: { value: "#7095b7" },
          400: { value: "#4d7ba5" },
          500: { value: "#0B1F32" }, // Default: Oxford Blue
          600: { value: "#092034" },
          700: { value: "#081b2d" },
          800: { value: "#061626" },
          900: { value: "#040f1f" },
          950: { value: "#030a17" },
        },
        sea: {
          50: { value: "#d0eaf0" },
          100: { value: "#a3d3e1" },
          200: { value: "#77bccc" },
          300: { value: "#4aa5b8" },
          400: { value: "#217698" },
          450: { value: "#174d67" },
          500: { value: "#002B3D" },
          600: { value: "#002735" },
          700: { value: "#00222d" },
          800: { value: "#001c25" },
          900: { value: "#00171d" },
          950: { value: "#001116" },
        },
        night: {
          50: { value: "#f5f5f5" },
          100: { value: "#e6e6e6" },
          200: { value: "#d6d6d6" },
          300: { value: "#c7c7c7" },
          400: { value: "#b8b8b8" },
          500: { value: "#121416" }, // Default: Night
          600: { value: "#9a9a9a" },
          700: { value: "#8a8a8a" },
          800: { value: "#777777" },
          900: { value: "#656565" },
          950: { value: "#535353" },
        },
      },
    },
    semanticTokens: {
      colors: {
        text: {
          default: { value: "white" }, // Force all text to be white
          _dark: { value: "white" },
        },
        background: {
          default: { value: "#121212" }, // Set dark background
          _dark: { value: "#121212" },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, customConfig);
