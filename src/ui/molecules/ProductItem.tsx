import Link from "next/link";
import { type Product } from "@/types/Product";
import { ProductItemImage } from "@/ui/atoms/ProductItemImage";
import { ProductItemDescription } from "@/ui/atoms/ProductItemDescription";

export type ProductItemProps = {
	product: Product;
};

export function ProductItem({ product }: ProductItemProps) {
	return (
		<li>
			<Link href={`/product/${product.id}`}>
				<ProductItemImage src={product.image} alt={product.title} />
				<div className="mt-2">
					<ProductItemDescription product={product} />
				</div>
			</Link>
		</li>
	);
}
