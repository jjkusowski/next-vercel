This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## VSCode Setup

It is recommended that you install the following VSCode plugins:

ESLint
Prettier
Tailwind CSS Intellisense

## Themes and Styling

Theming and styling will be done through [tailwindCSS](https://tailwindcss.com/), a lightweight postcss utility library.

Define application colors and fonts once in [tailwind config](./tailwind.config.js), and use them everywhere in the application.

## Fetching and using data

Apollo client and apollo client hooks are used to query prismic CMS and populate pages with data. NextJS' `getStaticProps` function is only available at the page level, so it's "one query to rule them all".

To break up the mono-queries, we can abstract gql queries into fragments at the component level, and import them at the top level to initiate the mono-query. Component data needs are collocated with the component code, and each component uses apollo's `useQuery` hook to query into the apollo cache to retrieve required data.
