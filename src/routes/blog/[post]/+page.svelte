<script>
	import Date from '$lib/components/Date.svelte';
	let { data } = $props();
	console.log('data', data);
	const { title, excerpt, date, updated } = data.meta;
	const { PageContent } = data;
</script>

<svelte:head>
	<!-- Be sure to add your image files and un-comment the lines below -->
	<title>{title}</title>
	<meta data-key="description" name="description" content={excerpt} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={title} />
	<meta name="twitter:title" content={title} />
	<meta property="og:description" content={excerpt} />
	<meta name="twitter:description" content={excerpt} />
	<!-- <meta property="og:image" content="https://yourdomain.com/image_path" /> -->
	<!-- meta property="og:image:width" content={coverWidth}  /-->
	<!--meta property="og:image:height" content={coverHeight} /-->
	<!-- <meta name="twitter:image" content="https://yourdomain.com/image_path" /> -->
</svelte:head>

<article class="content box border stack">
	<h1>{title}</h1>
	<Date {date} />
	<PageContent />
</article>

<style>
	article {
		min-height: 95%;
		background-color: var(--paper);
		--border-color: var(--dark-lighter);
		border: 2 px solid var(--dark-lighter);
		border-radius: 5px;
	}
</style>
