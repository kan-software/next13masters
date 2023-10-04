import { executeGraphql } from "./client";
import { CollectionsGetListDocument } from "@/gql/graphql";

export async function getCollectionsList() {
	const { collections } = await executeGraphql(CollectionsGetListDocument);
	return collections;
}
