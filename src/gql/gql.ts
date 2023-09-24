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
    "query CollectionGetList {\n  collections {\n    ...CollectionItem\n  }\n}\n\nfragment CollectionItem on Collection {\n  name\n  slug\n  id\n  image {\n    url\n  }\n}": types.CollectionGetListDocument,
    "fragment ProductDetail on Product {\n  name\n  price\n  description\n  images {\n    url\n  }\n}\n\nquery ProductGetById($id: ID = \"\") {\n  product(where: {id: $id}) {\n    ...ProductDetail\n  }\n}": types.ProductDetailFragmentDoc,
    "query ProductGetBySearch($name_contains: String!) {\n  products(where: {name_contains: $name_contains}) {\n    ...ProductListItem\n  }\n}\n\nfragment ProductListItem on Product {\n  name\n  price\n  images {\n    url\n  }\n  categories {\n    name\n  }\n  id\n}": types.ProductGetBySearchDocument,
    "query ProductGetList($first: Int! = 4, $skip: Int! = 0, $where: ProductWhereInput = {}) {\n  products(first: $first, skip: $skip, where: $where) {\n    ...ProductListItem\n  }\n  productsConnection(where: $where) {\n    aggregate {\n      count\n    }\n  }\n}\n\nfragment ProductListItem on Product {\n  name\n  price\n  images {\n    url\n  }\n  categories {\n    name\n  }\n  id\n}": types.ProductGetListDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionGetList {\n  collections {\n    ...CollectionItem\n  }\n}\n\nfragment CollectionItem on Collection {\n  name\n  slug\n  id\n  image {\n    url\n  }\n}"): typeof import('./graphql').CollectionGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductDetail on Product {\n  name\n  price\n  description\n  images {\n    url\n  }\n}\n\nquery ProductGetById($id: ID = \"\") {\n  product(where: {id: $id}) {\n    ...ProductDetail\n  }\n}"): typeof import('./graphql').ProductDetailFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetBySearch($name_contains: String!) {\n  products(where: {name_contains: $name_contains}) {\n    ...ProductListItem\n  }\n}\n\nfragment ProductListItem on Product {\n  name\n  price\n  images {\n    url\n  }\n  categories {\n    name\n  }\n  id\n}"): typeof import('./graphql').ProductGetBySearchDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetList($first: Int! = 4, $skip: Int! = 0, $where: ProductWhereInput = {}) {\n  products(first: $first, skip: $skip, where: $where) {\n    ...ProductListItem\n  }\n  productsConnection(where: $where) {\n    aggregate {\n      count\n    }\n  }\n}\n\nfragment ProductListItem on Product {\n  name\n  price\n  images {\n    url\n  }\n  categories {\n    name\n  }\n  id\n}"): typeof import('./graphql').ProductGetListDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
