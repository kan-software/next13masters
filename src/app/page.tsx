import { getCollectionsList } from "@/api/collections";
import { CollectionsList } from "@/ui/organisms/CollectionsList";

export default async function Home() {
	const collections = await getCollectionsList();
	return <CollectionsList collections={collections} />;
}
