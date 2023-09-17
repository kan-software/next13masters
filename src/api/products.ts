import { type Product } from "@/types/Product";

const API_URL = "https://naszsklep-api.vercel.app";

export async function getProducts(): Promise<Product[]> {
	const response = await fetch(`${API_URL}/api/products?take=20`);
	return response.json() as Promise<Product[]>;
}

export async function getProduct(id: string): Promise<Product> {
	const response = await fetch(`${API_URL}/api/products/${id}`);
	return response.json() as Promise<Product>;
}
