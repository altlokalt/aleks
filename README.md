
# Runnin npm update @sveltejs/kit  <pnpm run build pnpm run preview
```sh
git clone https://github.com/altlokalt/aleks
cd website
pnpm install
```
# new folder dir
mkdir public

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
# Create a new repository on GitHub: Note the repository URL.

git init
git add .
git commit -m "my first upload commit"
# obs on the branch u can create many branches too
# remove origin
git remote remove origin
git remote add origin https://github.com/altlokalt/aleks.git
# update it
git remote set-url origin https://github.com/altlokalt/aleks.git
# push to existing repo
git remote add origin https://github.com/altlokalt/aleks.git
git branch -M main
git push -u origin main

# create from scratch from command line
echo "# aleks" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/altlokalt/aleks.git
git push -u origin main





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
