/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"

export default {
  content: ["./src/**/*.{html,js, ts,svelte}"],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui,
  ],
}

