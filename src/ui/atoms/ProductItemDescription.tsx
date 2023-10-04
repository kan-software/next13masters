import { type ProductsListItemFragment } from "@/gql/graphql";
import { formatPrice } from "@/utils";

export type ProductItemDescriptionProps = {
	product: ProductsListItemFragment;
};

export function ProductItemDescription({ product }: ProductItemDescriptionProps) {
	const [category] = product.categories;
	return (
		<>
			<div className="flex flex-row justify-between">
				<h3 className="text-sm font-semibold text-slate-700">{product.name}</h3>
				<p className="small-caps text-sm font-medium text-slate-900" data-testid="product-price">
					{formatPrice(product.price)}
				</p>
			</div>
			<div className="mt-1 flex flex-row justify-between">
				<p className="text-sm text-slate-500">{category.name}</p>
			</div>
		</>
	);
}
