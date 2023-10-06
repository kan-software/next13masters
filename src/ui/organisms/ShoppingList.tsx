import { ShoppingListItem } from "../molecules/ShoppingListItem";
import { type CartGetByIdQuery } from "@/gql/graphql";

export function ShoppingList({ cart }: { cart: CartGetByIdQuery["order"] }) {
	return (
		<div>
			<h2 className="sr-only">Products in your shopping cart</h2>
			<ul role="list" className="divide-y divide-gray-200 border-b border-t border-gray-200">
				{cart!.orderItems.map(
					(item) =>
						item.product && (
							<ShoppingListItem
								key={item.id}
								itemId={item.id}
								product={item.product}
								quantity={item.quantity}
							/>
						),
				)}
			</ul>
		</div>
	);
}
