<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { page } from '$app/state';

	const isRoot = page.url.pathname === '/';
</script>

<svelte:head>
	<link rel="stylesheet" href="/css/vars.css" />
	<link rel="stylesheet" href="/css/root.css" />
	<link rel="stylesheet" href="/css/layout.css" />
	<link rel="stylesheet" href="/css/fonts.css" />
	<link rel="stylesheet" href="/css/components.css" />
	<link rel="stylesheet" href="/css/utils.css" />
	<link rel="stylesheet" href="/css/form.css" />
	<link rel="stylesheet" href="/css/typography.css" />
	<link rel="stylesheet" href="/css/code.css" />
	<link rel="stylesheet" href="/css/prism.css" />
</svelte:head>

{#if isRoot}
	<main class="layout">
		<slot />
	</main>
{:else}
	<main class="layout center">
		<Header />
		<slot />
		<Footer />
	</main>
{/if}

<style>
	.layout {
		--padding: 0px;
	}
</style>
