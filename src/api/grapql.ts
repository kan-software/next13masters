export type GraphQLResponse<T> =
	| { data?: undefined; errors: { message: string }[] }
	| { data: T; errors?: undefined };

export function executeGraphql<T>(query: string) {
	if (!process.env.API_URL || !process.env.API_AUTH_TOKEN) {
		throw new Error("Missing API configuration");
	}

	return fetch(process.env.API_URL, {
		method: "POST",
		body: JSON.stringify({
			query,
		}),
		headers: {
			Authorization: process.env.API_AUTH_TOKEN,
			"Content-Type": "application/json",
		},
	}).then((response) => response.json()) as Promise<GraphQLResponse<T>>;
}
