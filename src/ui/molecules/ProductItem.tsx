import { type Product } from "@/types/Product";
import { ProductItemImage } from "@/ui/atoms/ProductItemImage";
import { ProductItemDescription } from "@/ui/atoms/ProductItemDescription";

export type ProductItemProps = {
	product: Product;
};

export function ProductItem({ product }: ProductItemProps) {
	return (
		<li>
			<ProductItemImage {...product.image} />
			<div className="mt-2">
				<ProductItemDescription product={product} />
			</div>
		</li>
	);
}
