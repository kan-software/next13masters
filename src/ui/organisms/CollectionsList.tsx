import { CollectionItem } from "../molecules/CollectionItem";
import { type CollectionsItemFragment } from "@/gql/graphql";

export function CollectionsList({ collections }: { collections: CollectionsItemFragment[] }) {
	return (
		<div className="bg-gray-100">
			<div className="mx-auto max-w-7xl px-8">
				<div className="mx-auto py-8">
					<h2 className="sr-only">Collections</h2>
					<div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
						{collections.map((collection) => (
							<CollectionItem key={collection.id} collection={collection} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
