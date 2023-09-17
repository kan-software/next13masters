import { getProduct } from "@/api/products";
import { ProductDetail } from "@/ui/molecules/ProductDetail";

type ProductPageProps = {
	params: { productId: string };
};

export default async function ProductPage({ params }: ProductPageProps) {
	const { productId } = params;
	const product = await getProduct(productId);
	return (
		<section className="mx-auto grid max-w-7xl p-8">
			<ProductDetail product={product} />
		</section>
	);
}
