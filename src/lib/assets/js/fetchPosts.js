import { postsPerPage } from '$lib/config';

const fetchPosts = async ({ offset = 0, limit = postsPerPage } = {}) => {
	const posts = await Promise.all(
		Object.entries(import.meta.glob('/src/lib/posts/*.md')).map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const slug = path.split('/').pop().slice(0, -3);
			return { ...metadata, slug };
		})
	);

	let sortedPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));

	if (offset) {
		sortedPosts = sortedPosts.slice(offset);
	}

	if (limit && limit < sortedPosts.length && limit != -1) {
		sortedPosts = sortedPosts.slice(0, limit);
	}

	sortedPosts = sortedPosts.map((post) => ({
		title: post.title,
		slug: post.slug,
		excerpt: post.excerpt,
		date: post.date
	}));

	return {
		posts: sortedPosts
	};
};

export default fetchPosts;
