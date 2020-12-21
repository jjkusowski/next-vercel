import { get } from "lodash";

type DataFields = string[][];
export type PageData = Record<string, unknown>;
export type Resolver = (pageData: PageData) => Record<string, unknown>;

const resolverFactory = (fields: DataFields, path?: string): Resolver => {
  return (data: PageData) =>
    fields.reduce((obj, [key, newKey]) => {
      const nestedData = get(data, path, data);
      // eslint-disable-next-line no-param-reassign
      obj[newKey || key] = nestedData[key];
      return obj;
    }, {});
};

export default resolverFactory;
