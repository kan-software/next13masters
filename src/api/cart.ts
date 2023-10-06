import { cookies } from "next/headers";
import { executeGraphql } from "./client";
import {
	CartAddItemDocument,
	CartChangeItemQuantityDocument,
	CartCreateDocument,
	CartGetByIdDocument,
	CartRemoveItemDocument,
	ProductGetByIdDocument,
} from "@/gql/graphql";

export async function getOrCreateCart() {
	const cartId = cookies().get("cartId")?.value;
	if (cartId) {
		const { order: cart } = await executeGraphql(CartGetByIdDocument, {
			id: cartId,
		});
		if (cart) {
			return cart;
		}
	}

	const { createOrder: newCart } = await executeGraphql(CartCreateDocument);
	if (!newCart) {
		throw new Error("Failed to create cart");
	}

	cookies().set("cartId", newCart.id);
	return newCart;
}

export async function addProductToCart(cartId: string, productId: string) {
	const { product } = await executeGraphql(ProductGetByIdDocument, {
		id: productId,
	});
	if (!product) {
		throw new Error(`Product with id ${productId} not found`);
	}

	await executeGraphql(CartAddItemDocument, {
		cartId,
		productId,
		total: product.price,
	});
}

export async function changeItemQuantity(itemId: string, quantity: number) {
	await executeGraphql(CartChangeItemQuantityDocument, {
		itemId,
		quantity,
	});
}

export async function removeItem(itemId: string) {
	await executeGraphql(CartRemoveItemDocument, { itemId });
}
