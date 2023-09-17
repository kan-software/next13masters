import { products } from "@/types/Product";
import { ProductDetail } from "@/ui/molecules/ProductDetail";

type ProductPageProps = {
	params: { productId: string };
};

export default function ProductPage({ params }: ProductPageProps) {
	const { productId } = params;
	const product = products.find((product) => product.id === productId)!;
	return (
		<section className="mx-auto grid max-w-7xl p-8">
			<ProductDetail product={product} />
		</section>
	);
}
