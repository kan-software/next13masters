import { ShoppingListItemImage } from "../atoms/ShoppingListItemImage";
import { ShoppingListItemDescription } from "../atoms/ShoppingListItemDescription";
import { ShoppingListItemActions } from "../atoms/ShoppingListItemActions";
import { type ProductsListItemFragment } from "@/gql/graphql";

export function ShoppingListItem({
	itemId,
	product,
	quantity,
}: {
	itemId: string;
	product: ProductsListItemFragment;
	quantity: number;
}) {
	return (
		<li className="flex py-4">
			<ShoppingListItemImage src={product.images[0]?.url ?? ""} alt={product.name} />
			<div className="relative ml-4 flex flex-1 flex-col justify-between">
				<ShoppingListItemDescription product={product} />
				<div className="mt-4">
					<ShoppingListItemActions itemId={itemId} quantity={quantity} />
				</div>
			</div>
		</li>
	);
}
