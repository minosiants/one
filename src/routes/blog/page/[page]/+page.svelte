<!-- This file handles any /blog/page/x route for pagination -->
<script>
	import Posts from '$lib/components/Posts.svelte';
	import Pagination from '$lib/components/Pagination.svelte';
	import { postsPerPage, siteDescription } from '$lib/config';

	let { data } = $props();
	const { page, totalPosts, posts } = data;

	let lowerBound = $derived(page * postsPerPage - (postsPerPage - 1) || 1);
	let upperBound = $derived(Math.min(page * postsPerPage, totalPosts));
</script>

<svelte:head>
	<title>Blog - page {page}</title>
	<meta data-key="description" name="description" content={siteDescription} />
</svelte:head>

{#if posts.length}
	<h1>Posts {lowerBound}–{upperBound} of {totalPosts}</h1>
	<Pagination currentPage={page} {totalPosts} />

	<Posts {posts} />

	<Pagination currentPage={page} {totalPosts} />
{:else}
	<h1>Oops!</h1>

	<p>Sorry, no posts to show here.</p>

	<a href="/blog">Back to blog</a>
{/if}
