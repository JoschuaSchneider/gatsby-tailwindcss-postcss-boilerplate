<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby's default starter with TailwindCSS and PostCSS
</h1>

This will get you started with gatsby and TailwindCSS for both development and production. The config is very minimal and the default pages are re-build with tailwind from the original Gatsby Starter.

### Check out the **[Gatsby Starter Repo](https://github.com/gatsbyjs/gatsby-starter-default)** for help on getting started with Gatsby.

### Check out [TailwindCSS](https://tailwindcss.com/) for more info and docs!


## Setting up for development

In development, all tailwind classes are available when running `npm start` or `gatsby develop`
```shell
npm install
npm start
```

## Building for production

In production, unused classes will be removed using PurgeCSS. If this breaks
your styles, read the docs for [gatsby-plugin-purgecss](https://www.gatsbyjs.org/packages/gatsby-plugin-purgecss/).

In addition, postcss is preconfigured with **autoprefixer**.
```shell
npm run build
npm run serve
```

## Customizing Tailwind

Open and edit the `tailwind.config.js` file in the project root.
You can find more help on how to configure tailwind in their [docs](https://tailwindcss.com/docs/configuration).

## 
