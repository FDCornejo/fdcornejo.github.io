# fdcornejo.github.io

Personal CV site of Daniel Cornejo, published at <https://fdcornejo.github.io>.

Built with **Vue 3**, **Vuetify 3**, **Vue Router** and **Vite**.

## Updating the content

All the CV text (education, experience, skills, contact…) lives in
[`src/data/cv.js`](src/data/cv.js). Edit that file; the components read from it.

## Development

Requires Node.js 20 or newer.

```bash
npm install
npm run dev       # local server with hot reload
npm run build     # production build in dist/
npm run preview   # serve the dist/ build locally
```

## Deployment

Every push to `master` builds the site and publishes it with GitHub Actions
(`.github/workflows/deploy.yml`). In the repository settings, **Pages → Source**
must be set to **GitHub Actions**.

## Structure

```
src/
  main.js              app entry
  router.js            routes (/ and /about), hash history
  plugins/vuetify.js   Vuetify setup and color palette
  data/cv.js           CV content
  components/AppNav.vue  top bar + contact drawer
  views/HomeView.vue   CV page
  views/AboutView.vue  "About this page"
  assets/me.jpg        profile photo
```
