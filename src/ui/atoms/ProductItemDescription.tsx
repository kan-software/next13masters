import { type Product } from "@/types/Product";
import { formatPrice } from "@/utils";

export type ProductItemDescriptionProps = {
	product: Product;
};

export function ProductItemDescription({ product }: ProductItemDescriptionProps) {
	return (
		<>
			<div className="flex flex-row justify-between">
				<h3 className="text-sm font-semibold text-slate-700">{product.title}</h3>
				<p className="small-caps text-sm font-medium text-slate-900" data-testid="product-price">
					{formatPrice(product.price)}
				</p>
			</div>
			<div className="mt-1 flex flex-row justify-between">
				<p className="text-sm text-slate-500">{product.category}</p>
			</div>
		</>
	);
}
