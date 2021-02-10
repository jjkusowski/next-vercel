This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/*.ts`. The page auto-updates as you edit the file.

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

### REST Queries and Slice Data

Prismic REST API is used in conjunction with graphql in some places. Define a query using Prismic REST library within `getStaticProps` and return the data as `props.data`. For RESTful queries, all data from the requested document is returned, not just that which you query for specifically (a la graphql). Since all data is fetched at the top-level, it is important to be able to share data with children without prop-drilling. This is done via a page context and page content custom hooks.

#### Querying

Until such time that we introduce non-static pages, all fetching should be done at build time. This decreases page load time dramatically by avoiding request-time fetching.

Queries for page data can come from any source, but all querying should be done within a page's `getStaticProps` async method, which is a named export from every static page in the pages directory.

Read up on `getStaticProps` [here](https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation).

Our convention is simply to return `props.data`, which represents a complete CMS document.

#### Slice Data (aka CMS document)

Our CMS at the present is Prismic, a headless CMS which uses a concept called "slices" to match data modeling to a modern componentized UI model.

For a given page type, we query the Prismic API for a document, and we receive a blob of data that includes a `data.body` field. Example:

```js
const doc = await fakePrismicApiCall();

const slices = doc.data.body;
```

A "slice" or "slice data" is the atomic data necessary to render a single component. View `ISliceProps` [here](./common/interfaces.ts) for our current slice interface.

#### Using Slice Data to build a page

A paradigm we are fond of so far is using slices as the primary content model from our CMS. To better understand this, it's useful to dig into CMS content modeling:

A headless CMS is nothing more than a database with a RESTful or GraphQL API access layer. This database is filled with documents. A document has a type, and a document's type indicates what other documents or data is contained within. Since content is infinitely modelable and nestable, we must make decisions about what ought to be its own document (ie independently queryable and nestable in other documents), and what ought to be single-use data, owned by a parent document. Our paradigm leverages "slices", which are repeatable data _types_ that can be dynamically attached to an eligible parent document at the discretion of the content owner (ie non-technical marketer).

A primary business case we are solving is the ability for a content creator to have full liberty to create content safely, which leads us to the "slice-driven page" concept. It's simple: for every slice in our data model there is a corresponding React component, and pages are made up of one or more slices. Such a page returns the following data object:

```js
const slicePage = {
  data: {
    body: [
      // array of slices
    ],
  },
};
```

The advantage to page-building is obvious: simply loop over each supported slice in the body array and you have a fully-built page. Content creators can change the contents of that array at their leisure without fear of breaking a page.

## Writing Components

### createComponent

`yarn createComponent MyComponentName`

Use this script for most component authoring needs. It will scaffold the below component file structure, leaving you ready to write component code.

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
│   │   <unit-test>.ts
```

Where `index.tsx` serves as the default export for `MyComponent`. The `**UI.tsx` file should be a "dumb" UI component, accepting any data as props from its parent, the `index.tsx` file. This provides a clean testing layer free of side-effects, state, and business logic. The only exception to this rule of "dumb" components is `useIntl()` hook, which is responsible for providing the `formatMessage` function used to localize any content that does not come pre-localized via CMS.

We currently have no testing framework or storybook integration, but these will be added down the line.

`translations.ts` should default export the result of a `defineMessages` function, from the react-intl library. See any `translations.ts` for an example.

### Exceptions

We hold React's componentization as a first-class engineering principle, to be applied liberally _with the following exception_: **components that do not need to be exported should not have their own directory**.

That means we do not strictly adhere to the "one component per file" rule.

Our goal is code cleanliness and maintainability. Use your best judgment as to when you should co-locate a non-export child component or a helper component; if a file is getting bloated with such components, consider adding them as a child file within the parent component's directory.

### Slices, usePageData, and `resolver`s

In some cases, insulation from rapidly-changing data models is desired. In such a case, you may yse the following hepler functions to retrieve data and map it to arbitrary keys for consumption.

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
