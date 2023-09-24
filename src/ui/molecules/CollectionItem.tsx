import { CollectionItemImage } from "../atoms/CollectionItemImage";
import { CollectionItemName } from "../atoms/CollectionItemName";
import { type CollectionItemFragment } from "@/gql/graphql";

export function CollectionItem({ collection }: { collection: CollectionItemFragment }) {
	return (
		<div className="group relative">
			<CollectionItemImage src={collection.image.url} alt={collection.name} />
			<CollectionItemName name={collection.name} slug={collection.slug} />
		</div>
	);
}
