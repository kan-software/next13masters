import { executeGraphql } from "./client";
import {
	type InputMaybe,
	ProductGetListDocument,
	type ProductWhereInput,
	ProductGetByIdDocument,
} from "@/gql/graphql";

type GetProductsListOptions = {
	pageNo: number;
	pageSize?: number;
	where?: InputMaybe<ProductWhereInput>;
};

export async function getProductById(id: string) {
	const { product } = await executeGraphql(ProductGetByIdDocument, { id });
	return product;
}

export async function getProductsList({
	pageSize = 4,
	pageNo,
	where = {},
}: GetProductsListOptions) {
	const offset = (pageNo - 1) * pageSize;

	const {
		products,
		productsConnection: {
			aggregate: { count },
		},
	} = await executeGraphql(ProductGetListDocument, {
		first: pageSize,
		skip: offset,
		where,
	});

	return {
		products,
		numberOfPages: Math.ceil(count / pageSize),
	};
}
