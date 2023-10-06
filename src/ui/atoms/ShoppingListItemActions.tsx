"use client";

import { experimental_useOptimistic as useOptimistic } from "react";
import { changeItemQuantity, removeItem } from "@/server-actions";

export function ShoppingListItemActions({
	itemId,
	quantity,
}: {
	itemId: string;
	quantity: number;
}) {
	const [optimisticQuantity, setOptimisticQuantity] = useOptimistic(
		quantity,
		(_state, newQuantity: number) => newQuantity,
	);

	const updateQuantity = async (newQuantity: number) => {
		setOptimisticQuantity(newQuantity);
		await changeItemQuantity(itemId, newQuantity);
	};

	return (
		<>
			<div className="flex">
				<button
					type="submit"
					className="h-6 w-6 border"
					data-testid="decrement"
					formAction={async () => {
						await updateQuantity(optimisticQuantity - 1);
					}}
				>
					-
				</button>
				<span className="w-8 text-center" data-testid="quantity">
					{optimisticQuantity}
				</span>
				<button
					type="submit"
					className="h-6 w-6 border"
					data-testid="increment"
					formAction={async () => {
						await updateQuantity(optimisticQuantity + 1);
					}}
				>
					+
				</button>
			</div>
			<button
				className="ml-4 text-sm font-medium text-indigo-600 hover:text-indigo-500 sm:ml-0 sm:mt-3"
				formAction={async () => {
					await removeItem(itemId);
				}}
			>
				<span>Remove</span>
			</button>
		</>
	);
}
