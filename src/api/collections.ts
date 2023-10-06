import { executeGraphql } from "./client";
import { CollectionsGetListDocument } from "@/gql/graphql";

export async function getCollectionsList() {
	const { collections } = await executeGraphql({ query: CollectionsGetListDocument });
	return collections;
}
