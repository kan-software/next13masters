import { notFound } from "next/navigation";
import { ProductsPagination } from "@/ui/molecules/ProductsPagination";
import { ProductsList } from "@/ui/organisms/ProductsList";
import { getProductsList } from "@/api/products";

type CategoriesPageProps = { params: { pageNo: string; slug: string } };

export default async function CategoriesPage({ params }: CategoriesPageProps) {
	const { products, numberOfPages } = await getProductsList({
		pageNo: +params.pageNo,
		where: { categories_every: { slug: params.slug } },
	});

	if (products.length === 0) {
		return notFound();
	}

	return (
		<section className="sm:py-18 mx-auto flex w-full max-w-2xl flex-grow flex-col px-8 py-12 sm:px-6 lg:max-w-7xl">
			<ProductsList products={products} />
			<ProductsPagination url={`/categories/${params.slug}`} numberOfPages={numberOfPages} />
		</section>
	);
}
