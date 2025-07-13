<script>
	import Cv from '$lib/components/cv/Cv.svelte';
	import { siteDescription, siteAuthor } from '$lib/config';

	let { data } = $props();
	const date = new Date().toISOString().split('T')[0];
	const title = `${siteAuthor}-CV-${date}`.replaceAll(' ', '-').toLowerCase();
</script>

<svelte:head>
	<title>{title}</title>
	<meta data-key="description" name="description" content={siteDescription} />
</svelte:head>

<main class="content center box border">
	<Cv cv={data.cv} projects={data.projects} />
</main>

<style>
</style>
