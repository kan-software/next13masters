import { type ProductsListItemFragment } from "@/gql/graphql";
import { formatPrice } from "@/utils";

export function ShoppingListItemDescription({ product }: { product: ProductsListItemFragment }) {
	return (
		<div className="flex justify-between">
			<div className="pr-6">
				<h3 className="font-medium text-slate-700">{product.name}</h3>
				<p className="mt-1 text-sm text-slate-500">{product.categories[0]?.name}</p>
			</div>
			<div className="small-caps p-4  text-right font-semibold text-slate-900">
				{formatPrice(product.price)}
			</div>
		</div>
	);
}
