import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	try {
		const post = await import(`../../../lib/posts/${params.post}.md`);
		return {
			PageContent: post.default,
			meta: { ...post.metadata, slug: params.post }
		};
	} catch (err) {
		console.log(err);
		error(404, 'not found');
	}
};
