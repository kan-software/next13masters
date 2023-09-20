export type GraphQLResponse<T> =
	| { data?: undefined; errors: { message: string }[] }
	| { data: T; errors?: undefined };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function executeGraphql<T>(query: string, variables: Record<string, any>) {
	if (!process.env.API_URL || !process.env.API_AUTH_TOKEN) {
		throw new Error("Missing API configuration");
	}

	return fetch(process.env.API_URL, {
		method: "POST",
		body: JSON.stringify({
			query,
			variables,
		}),
		headers: {
			Authorization: process.env.API_AUTH_TOKEN,
			"Content-Type": "application/json",
		},
	}).then((response) => response.json()) as Promise<GraphQLResponse<T>>;
}
