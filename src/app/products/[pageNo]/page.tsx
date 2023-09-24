import { notFound } from "next/navigation";
import { ProductsPagination } from "@/ui/molecules/ProductsPagination";
import { ProductsList } from "@/ui/organisms/ProductsList";
import { getProductsList } from "@/api/products";
import { ProductsSection } from "@/ui/atoms/ProductsSection";
import { PageHeading } from "@/ui/atoms/PageHeading";

export async function generateStaticParams() {
	const numberOfPages = 4;
	const pageNumbers = [...Array(numberOfPages).keys()].map((index) => (index + 1).toString());
	return pageNumbers.map((pageNo) => ({ pageNo }));
}

type ProductsPageProps = { params: { pageNo: string } };

export default async function ProductsPage({ params }: ProductsPageProps) {
	const { products, numberOfPages } = await getProductsList({ pageNo: +params.pageNo });

	if (products.length === 0) {
		return notFound();
	}

	return (
		<>
			<PageHeading>All products</PageHeading>
			<ProductsSection>
				<ProductsList products={products} />
				<ProductsPagination url="/products" numberOfPages={numberOfPages} />
			</ProductsSection>
		</>
	);
}
