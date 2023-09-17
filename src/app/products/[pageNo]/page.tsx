import { getProducts } from "@/api/products";
import { ProductsPagination } from "@/ui/molecules/ProductsPagination";
import { ProductsList } from "@/ui/organisms/ProductsList";

type ProductsPageProps = { params: { pageNo: string } };

export default async function ProductsPage({ params }: ProductsPageProps) {
	const products = await getProducts({ page: +params.pageNo });

	return (
		<section className="sm:py-18 mx-auto flex w-full max-w-2xl flex-grow flex-col px-8 py-12 sm:px-6 lg:max-w-7xl">
			<ProductsList products={products} />
			<ProductsPagination numberOfPages={4} />
		</section>
	);
}
