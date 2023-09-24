import { notFound } from "next/navigation";
import { type Metadata } from "next";
import { ProductsPagination } from "@/ui/molecules/ProductsPagination";
import { ProductsList } from "@/ui/organisms/ProductsList";
import { getProductsList } from "@/api/products";
import { ProductsSection } from "@/ui/atoms/ProductsSection";
import { PageHeading } from "@/ui/atoms/PageHeading";

type CategoriesPageProps = { params: { pageNo: string; slug: string } };

export const generateMetadata = async ({ params }: CategoriesPageProps): Promise<Metadata> => {
	const { products } = await getProductsList({
		pageNo: +params.pageNo,
		where: { categories_every: { slug: params.slug } },
	});

	const category = products[0]?.categories?.[0];
	return {
		title: category ? category.name : "Category not found",
	};
};

export default async function CategoriesPage({ params }: CategoriesPageProps) {
	const { products, numberOfPages } = await getProductsList({
		pageNo: +params.pageNo,
		where: { categories_every: { slug: params.slug } },
	});

	if (products.length === 0) {
		return notFound();
	}

	return (
		<>
			<PageHeading>
				<h2>{products[0].categories[0].name}</h2>
			</PageHeading>
			<ProductsSection>
				<ProductsList products={products} />
				<ProductsPagination url={`/categories/${params.slug}`} numberOfPages={numberOfPages} />
			</ProductsSection>
		</>
	);
}
