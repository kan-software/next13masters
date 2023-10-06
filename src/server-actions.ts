"use server";

import {
	changeItemQuantity as changeItemQuantityApi,
	removeItem as removeItemApi,
} from "@/api/cart";

export async function changeItemQuantity(itemId: string, quantity: number) {
	return changeItemQuantityApi(itemId, quantity);
}

export async function removeItem(itemId: string) {
	return removeItemApi(itemId);
}
