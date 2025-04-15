<script>
	import Projects from '$lib/components/Projects.svelte';
	import { siteDescription } from '$lib/config';

	let { data } = $props();
</script>

<svelte:head>
	<title>Personal Projects</title>
	<meta data-key="description" name="description" content={siteDescription} />
</svelte:head>

<main class="content center box border">
	<h1>Personal Projects</h1>
	<div class="box"></div>
	<Projects projects={data.projects} />
</main>
