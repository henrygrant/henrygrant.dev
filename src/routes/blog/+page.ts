import { slugFromPath } from '$lib/slugFromPath';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const blogPosts: App.BlogPost[] = [];
	const modules = import.meta.glob(`/src/blog/*.{md,svx,svelte.md}`);
	for (const [path, resolver] of Object.entries(modules) as [string, App.MdsvexResolver][]) {
		const post = await resolver();
		const slug = slugFromPath(path);
		const { published, title, description, date } = post.metadata;
		if (post && post.metadata.published && slug) {
			blogPosts.push({
				published,
				title,
				description,
				date,
				slug
			});
		}
	}
	return {
		blogPosts
	};
};
