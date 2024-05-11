
# Running / Building locally  <h1 align="center">Alek`s Frisør Nettside</h1>
```sh
git clone https://github.com/Olah-Barbershop/website
cd website
pnpm install
```

### OPTIONAL: The default API URL is "https://olahbarbershop.codes"; however, this can be changed

#### In the `.env` file, create the `VITE_BASE_URL` variable
```env
set VITE_BASE_URL=https://alexfrisor.vercel.app/

VITE_BASE_URL=[the base URL of your API instance]
```

## Running
```sh
pnpm dev --open
```

## Building
```sh
pnpm build
pnpm preview --open
```

git init


**IMPORTANT** If you're building the site and **not** serving it from your root directory, add the absolute path that your build is served from to a `.env` file, e.g. "/website" if you're serving from example.com/website
```env
BASE_PATH=[your path]
```
#### The official website for Oláh Barbershop, built using [SvelteKit](https://kit.svelte.dev), hosted by [GitHub Pages](https://pages.github.com)

# Content, features
General:
- Simple wave animation at the bottom to give it some life

Home page:
- A kind of intro message, since I had no idea what to put here

Contact page:
- All the ways to reach, follow, and interact with us

Services page:
- What we offer

Locations page:
- Our locations listed in a nice, modular format

About page:
- The *About us* section. Nothing special
