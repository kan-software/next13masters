import { ProductItemImage } from "../atoms/ProductItemImage";
import { ProductDetailDescription } from "../atoms/ProductDetailDescription";
import { type Product } from "@/types/Product";

export type ProductDetailProps = {
	product: Product;
};

export function ProductDetail({ product }: ProductDetailProps) {
	return (
		<article>
			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
				<ProductItemImage src={product.image} alt={product.title} />
				<div className="px-6">
					<ProductDetailDescription product={product} />
				</div>
			</div>
		</article>
	);
}
