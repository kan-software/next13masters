import { notFound } from "next/navigation";
import { ProductsPagination } from "@/ui/molecules/ProductsPagination";
import { ProductsList } from "@/ui/organisms/ProductsList";
import { getProductsList } from "@/api/products";
import { ProductsSection } from "@/ui/atoms/ProductsSection";

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
		<ProductsSection>
			<ProductsList products={products} />
			<ProductsPagination url={`/categories/${params.slug}`} numberOfPages={numberOfPages} />
		</ProductsSection>
	);
}
