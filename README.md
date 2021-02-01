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

While it is possible to use tailwind's `@apply` liberally to achieve CSS componentization, we should prioritize React's own componentization story. Therefore, while .btn-blue is a helpful abstract class to create using tailwind, we prefer to create a shared Button component in React.

## Fetching and using data

We have not had the time to define a clean data-fetching abstraction, so in order to handle the abstraction leak we have exposed the leak in its entirety. This means we are querying atomically using Prismic APIs and graphql. We will revisit fetching abstractions down the road, but for the moment we will expose our fetching at the top-level and attempt to consume the data agnostically through our components.

### REST Queries

Prismic REST API is used in conjunction with graphql in some places. Define a query using Prismic REST library within `getStaticProps` and return the data as `props.data`. For RESTful queries, all data from the requested document is returned, not just that which you query for specifically (a la graphql). Since all data is fetched at the top-level, it is important to be able to share data with children without prop-drilling. This is done via a page context and page content custom hooks.

Due to the aforementioned lack of fetching abstraction, we have provided a data hook called `usePageData`, which accepts a `resolver` of prismic API fields to unopinionated data key names.

For instance:

```js
const dataFields: DataFields = [
  ["hero_image", "image"],
  ["signup_form", "form"],
  ["hero_title", "title"],
  ["hero_header", "header"],
  ["hero_copy", "copy"],
];

const heroResolver = resolverFactory(dataFields);

const Hero = () => {
  const heroData = usePageData(heroResolver);

  return <HeroUI heroData={heroData} />;
};

export default Hero;
```

Where the 0th index in each `DataFields` array is a prismic API key, and the 1st index is an agnostic key to consume the data. The ideal is that we avoid re-writing client code if our data shape, data keys, or data source change.

We then create a resolver via `resolverFactory`, and we pass that resolver into our `usePageData` hook, which will return the data with the requested keys set in the resolver.

## Writing Components

### createComponent

`yarn createComponent MyComponentName`

Use this script for most component authoring needs. It will scaffold the below component file structure, leaving you ready to code.

### Basic component structure

In general, components should have the following structure:

```
component
│
└─── MyComponent
│   │   index.tsx
│   │   MyComponentUI.tsx
│   │   translations.ts
│   │   storybook.ts
│   │   <test>.ts
```

Where `index.tsx` serves as the default export for `MyComponent`. The `**UI.tsx` file should be a "dumb" UI component, accepting any data as props from its parent, the `index.tsx` file. This provides a clean testing layer free of side-effects, state, and business logic. The only exception to this rule of "dumb" components is `useIntl()` hook, which is responsible for providing the `formatMessage` function used to localize any content that does not come pre-localized via CMS.

We currently have no testing framework or storybook integration, but these will be added down the line.

`translations.ts` should export default the result of a `defineMessages` function, from the react-intl library. See any `translations.ts` for an example.

### Exceptions

We hold React's componentization as a first-class engineering principle, to be applied liberally _with the following exception_: **components that do not need to be exported should not have their own directory**.

That means we do not strictly adhere to the "one component per file" rule.

Our goal is code cleanliness and maintainability. Use your best judgment as to when you should co-locate a non-export child component or a helper component; if a file is getting bloated with such components, consider adding them as a child file within the parent component's directory.
