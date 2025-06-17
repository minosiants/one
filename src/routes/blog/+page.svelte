<script>
	import Posts from '$lib/components/Posts.svelte';
	import Pagination from '$lib/components/Pagination.svelte';
	import { siteDescription, siteAuthor } from '$lib/config';

	let { data } = $props();
</script>

<svelte:head>
	<title>{siteAuthor} - Blog</title>
	<meta data-key="description" name="description" content={siteDescription} />
</svelte:head>

<main class="content center box border">
	<h1>Blog</h1>
	<div class="box"></div>
	<Posts posts={data.posts} />
	<Pagination currentPage={1} totalPosts={data.total} />
</main>

<style>
	main {
		--border-radius: var(--border-radius-large);
	}
</style>
