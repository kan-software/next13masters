import { notFound } from "next/navigation";
import { ProductsList } from "@/ui/organisms/ProductsList";
import { getProductsList } from "@/api/products";
import { ProductsSection } from "@/ui/atoms/ProductsSection";

export default async function CollectionsPage({ params }: { params: { slug: string } }) {
	const { products } = await getProductsList({
		pageNo: 1,
		where: { collections_every: { slug: params.slug } },
	});

	if (products.length === 0) {
		return notFound();
	}

	return (
		<ProductsSection>
			<ProductsList products={products} />
		</ProductsSection>
	);
}
