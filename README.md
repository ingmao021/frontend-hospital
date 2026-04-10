# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).

## Deploy on Vercel

This project uses Vite, so the production build command is:

- npm run build

Vercel config is defined in the root [vercel.json](vercel.json) file with:

- buildCommand: npm run build
- outputDirectory: dist
- SPA rewrite to /index.html

If your Vercel dashboard has custom Build Command settings, make sure they do not override this with vue-cli-service.
