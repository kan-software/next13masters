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
    "mutation CartAddItem($cartId: ID!, $productId: ID!, $total: Int!) {\n  createOrderItem(\n    data: {quantity: 1, total: $total, order: {connect: {id: $cartId}}, product: {connect: {id: $productId}}}\n  ) {\n    id\n  }\n}": types.CartAddItemDocument,
    "mutation CartChangeItemQuantity($quantity: Int!, $itemId: ID!) {\n  updateOrderItem(data: {quantity: $quantity}, where: {id: $itemId}) {\n    quantity\n  }\n}": types.CartChangeItemQuantityDocument,
    "mutation CartCreate {\n  createOrder(data: {total: 0}) {\n    id\n  }\n}": types.CartCreateDocument,
    "query CartGetById($id: ID!) {\n  order(where: {id: $id}, stage: DRAFT) {\n    id\n    orderItems {\n      id\n      quantity\n      product {\n        ...ProductsListItem\n      }\n    }\n  }\n}": types.CartGetByIdDocument,
    "mutation CartRemoveItem($itemId: ID!) {\n  deleteOrderItem(where: {id: $itemId}) {\n    id\n  }\n}": types.CartRemoveItemDocument,
    "query CollectionsGetList {\n  collections {\n    ...CollectionsItem\n  }\n}\n\nfragment CollectionsItem on Collection {\n  name\n  slug\n  id\n  image {\n    url\n  }\n}": types.CollectionsGetListDocument,
    "fragment ProductDetail on Product {\n  name\n  price\n  description\n  images {\n    url\n  }\n}\n\nquery ProductGetById($id: ID = \"\") {\n  product(where: {id: $id}) {\n    ...ProductDetail\n  }\n}": types.ProductDetailFragmentDoc,
    "query ProductsGetByCollectionList($slug: String! = \"new-arrivals\") {\n  products(where: {collections_every: {slug: $slug}}) {\n    ...ProductsByCollectionItem\n  }\n}\n\nfragment ProductsByCollectionItem on Product {\n  ...ProductsListItem\n  collections {\n    name\n    description\n  }\n}": types.ProductsGetByCollectionListDocument,
    "query ProductsGetBySearch($name_contains: String!) {\n  products(where: {name_contains: $name_contains}) {\n    ...ProductsListItem\n  }\n}": types.ProductsGetBySearchDocument,
    "query ProductsGetList($first: Int! = 4, $skip: Int! = 0, $where: ProductWhereInput = {}) {\n  products(first: $first, skip: $skip, where: $where) {\n    ...ProductsListItem\n  }\n  productsConnection(where: $where) {\n    aggregate {\n      count\n    }\n  }\n}": types.ProductsGetListDocument,
    "fragment ProductsListItem on Product {\n  name\n  price\n  images {\n    url\n  }\n  categories {\n    name\n  }\n  id\n}": types.ProductsListItemFragmentDoc,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartAddItem($cartId: ID!, $productId: ID!, $total: Int!) {\n  createOrderItem(\n    data: {quantity: 1, total: $total, order: {connect: {id: $cartId}}, product: {connect: {id: $productId}}}\n  ) {\n    id\n  }\n}"): typeof import('./graphql').CartAddItemDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartChangeItemQuantity($quantity: Int!, $itemId: ID!) {\n  updateOrderItem(data: {quantity: $quantity}, where: {id: $itemId}) {\n    quantity\n  }\n}"): typeof import('./graphql').CartChangeItemQuantityDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartCreate {\n  createOrder(data: {total: 0}) {\n    id\n  }\n}"): typeof import('./graphql').CartCreateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CartGetById($id: ID!) {\n  order(where: {id: $id}, stage: DRAFT) {\n    id\n    orderItems {\n      id\n      quantity\n      product {\n        ...ProductsListItem\n      }\n    }\n  }\n}"): typeof import('./graphql').CartGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartRemoveItem($itemId: ID!) {\n  deleteOrderItem(where: {id: $itemId}) {\n    id\n  }\n}"): typeof import('./graphql').CartRemoveItemDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionsGetList {\n  collections {\n    ...CollectionsItem\n  }\n}\n\nfragment CollectionsItem on Collection {\n  name\n  slug\n  id\n  image {\n    url\n  }\n}"): typeof import('./graphql').CollectionsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductDetail on Product {\n  name\n  price\n  description\n  images {\n    url\n  }\n}\n\nquery ProductGetById($id: ID = \"\") {\n  product(where: {id: $id}) {\n    ...ProductDetail\n  }\n}"): typeof import('./graphql').ProductDetailFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetByCollectionList($slug: String! = \"new-arrivals\") {\n  products(where: {collections_every: {slug: $slug}}) {\n    ...ProductsByCollectionItem\n  }\n}\n\nfragment ProductsByCollectionItem on Product {\n  ...ProductsListItem\n  collections {\n    name\n    description\n  }\n}"): typeof import('./graphql').ProductsGetByCollectionListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetBySearch($name_contains: String!) {\n  products(where: {name_contains: $name_contains}) {\n    ...ProductsListItem\n  }\n}"): typeof import('./graphql').ProductsGetBySearchDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetList($first: Int! = 4, $skip: Int! = 0, $where: ProductWhereInput = {}) {\n  products(first: $first, skip: $skip, where: $where) {\n    ...ProductsListItem\n  }\n  productsConnection(where: $where) {\n    aggregate {\n      count\n    }\n  }\n}"): typeof import('./graphql').ProductsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductsListItem on Product {\n  name\n  price\n  images {\n    url\n  }\n  categories {\n    name\n  }\n  id\n}"): typeof import('./graphql').ProductsListItemFragmentDoc;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
