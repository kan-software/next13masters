import { notFound } from "next/navigation";
import { executeGraphql } from "@/api/client";
import { ProductGetListDocument } from "@/gql/graphql";
import { ProductsPagination } from "@/ui/molecules/ProductsPagination";
import { ProductsList } from "@/ui/organisms/ProductsList";

export async function generateStaticParams() {
	const numberOfPages = 4;
	const pageNumbers = [...Array(numberOfPages).keys()].map((index) => (index + 1).toString());
	return pageNumbers.map((pageNo) => ({ pageNo }));
}

type ProductsPageProps = { params: { pageNo: string } };

const PAGE_SIZE = 4;

export default async function ProductsPage({ params }: ProductsPageProps) {
	const offset = (+params.pageNo - 1) * PAGE_SIZE;

	const {
		products,
		productsConnection: {
			aggregate: { count },
		},
	} = await executeGraphql(ProductGetListDocument, {
		first: PAGE_SIZE,
		skip: offset,
	});

	if (products.length === 0) {
		return notFound();
	}

	const numberOfPages = Math.ceil(count / PAGE_SIZE);

	return (
		<section className="sm:py-18 mx-auto flex w-full max-w-2xl flex-grow flex-col px-8 py-12 sm:px-6 lg:max-w-7xl">
			<ProductsList products={products} />
			<ProductsPagination numberOfPages={numberOfPages} />
		</section>
	);
}
