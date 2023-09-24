import { executeGraphql } from "./client";
import { CollectionGetListDocument } from "@/gql/graphql";

export async function getCollectionsList() {
	const { collections } = await executeGraphql(CollectionGetListDocument);
	return collections;
}
