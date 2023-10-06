"use server";

import { revalidateTag } from "next/cache";
import { changeItemQuantity, removeItem } from "@/api/cart";

export async function changeItemQuantityAction(itemId: string, quantity: number) {
	return changeItemQuantity(itemId, quantity);
}

export async function removeItemAction(itemId: string) {
	await removeItem(itemId);
	revalidateTag("cart");
}
