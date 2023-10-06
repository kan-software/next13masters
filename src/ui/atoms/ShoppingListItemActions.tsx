export function ShoppingListItemActions({ quantity }: { quantity: number }) {
	return (
		<>
			<div className="flex">
				<button className="h-6 w-6 border" data-testid="decrement">
					-
				</button>
				<span className="w-8 text-center" data-testid="quantity">
					{quantity}
				</span>
				<button className="h-6 w-6 border" data-testid="increment">
					+
				</button>
			</div>
			<button className="ml-4 text-sm font-medium text-indigo-600 hover:text-indigo-500 sm:ml-0 sm:mt-3">
				<span>Remove</span>
			</button>
		</>
	);
}
