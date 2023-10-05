import { CollectionItemImage } from "../atoms/CollectionItemImage";
import { CollectionItemName } from "../atoms/CollectionItemName";
import { type CollectionsItemFragment } from "@/gql/graphql";

export function CollectionItem({ collection }: { collection: CollectionsItemFragment }) {
	return (
		<div className="group relative">
			<CollectionItemImage src={collection.image.url} alt={collection.name} />
			<CollectionItemName name={collection.name} slug={collection.slug} />
		</div>
	);
}
