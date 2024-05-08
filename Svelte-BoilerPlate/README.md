# Svelte starting pack

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/main/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
# choose boiler plate, and by default vite, playwright, prettier, ESlint

# install dependencies
npm i

# run to check if everything is working
npm run dev

```
## Add Daisy UI

[Daisy UI Tutorial on how to add](https://daisyui.com/blog/how-to-install-sveltekit-and-daisyui/)
```bash 
# add Tailwind + Daisy UI + tailwind-typography
npm install -D tailwindcss postcss autoprefixer daisyui @tailwindcss/typography
```
```bash
npx tailwindcss init -p
```

Install Tailwind CSS, PostCSS, Autoprefixer and daisyUI,
Then generate tailwind.config.js and postcss.config.js files:
```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,svelte,js,ts}'],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require('daisyui')],
  daisyui: {
    themes : [
      'cupcake'
    ]
  }
}
```

Add the following lines to svelte.config.js file, if not already setup at the creation step :
```js
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
/** @type {import('@sveltejs/kit').Config} */
const config = {
 preprocess: vitePreprocess(),
 kit: {
   // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
   // If your environment is not supported or you settled on a specific environment, switch out the adapter.
   // See https://kit.svelte.dev/docs/adapters for more information about adapters.
   adapter: adapter()
 }
};

export default config;
```


## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
