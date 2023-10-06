import { type TypedDocumentString } from "@/gql/graphql";

export type GraphQLResponse<T> =
	| { data?: undefined; errors: { message: string }[] }
	| { data: T; errors?: undefined };

export const executeGraphql = async <TResult, TVariables>({
	query,
	variables,
	cache,
	next,
	headers,
}: {
	query: TypedDocumentString<TResult, TVariables>;
	cache?: RequestCache;
	headers?: HeadersInit;
	next?: NextFetchRequestConfig | undefined;
} & (TVariables extends { [key: string]: never }
	? { variables?: never }
	: { variables: TVariables })): Promise<TResult> => {
	if (!process.env.API_URL) {
		throw new Error("Missing API configuration");
	}

	const res = await fetch(process.env.API_URL, {
		method: "POST",
		body: JSON.stringify({
			query,
			variables,
		}),
		cache,
		next,
		headers: {
			...headers,
			"Content-Type": "application/json",
			Authorization: `Bearer ${process.env.AUTH_TOKEN}`,
		},
	});

	const graphqlResponse = (await res.json()) as GraphQLResponse<TResult>;

	if (graphqlResponse.errors) {
		throw TypeError(`GraphQL Error`, {
			cause: graphqlResponse.errors,
		});
	}

	return graphqlResponse.data;
};
