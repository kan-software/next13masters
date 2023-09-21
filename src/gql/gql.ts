/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "fragment ProductDetail on Product {\n  name\n  price\n  description\n  images {\n    url\n  }\n}\n\nquery ProductGetById($id: ID = \"\") {\n  product(where: {id: $id}) {\n    ...ProductDetail\n  }\n}": types.ProductDetailFragmentDoc,
    "query ProductGetList($first: Int! = 4, $skip: Int! = 0) {\n  products(first: $first, skip: $skip) {\n    ...ProductListItem\n  }\n  productsConnection {\n    aggregate {\n      count\n    }\n  }\n}\n\nfragment ProductListItem on Product {\n  name\n  price\n  images {\n    url\n  }\n  categories {\n    name\n  }\n  id\n}": types.ProductGetListDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductDetail on Product {\n  name\n  price\n  description\n  images {\n    url\n  }\n}\n\nquery ProductGetById($id: ID = \"\") {\n  product(where: {id: $id}) {\n    ...ProductDetail\n  }\n}"): typeof import('./graphql').ProductDetailFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetList($first: Int! = 4, $skip: Int! = 0) {\n  products(first: $first, skip: $skip) {\n    ...ProductListItem\n  }\n  productsConnection {\n    aggregate {\n      count\n    }\n  }\n}\n\nfragment ProductListItem on Product {\n  name\n  price\n  images {\n    url\n  }\n  categories {\n    name\n  }\n  id\n}"): typeof import('./graphql').ProductGetListDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
