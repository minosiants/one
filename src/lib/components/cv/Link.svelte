<script>
	import Blog from '$lib/components/svg/Blog.svelte';
	import Github from '$lib/components/svg/Github.svelte';
	import IdCard from '$lib/components/svg/IdCard.svelte';
	import LinkedIn from '$lib/components/svg/LinkedIn.svelte';
	import Code from '$lib/components/svg/Code.svelte';
	import Instagram from '$lib/components/svg/Instagram.svelte';
	const { type, url } = $props();
</script>

<div class="cluster">
	<h5>
		{#if type == 'github'}
			<Github />
		{:else if type == 'linkedin'}
			<LinkedIn />
		{:else if type == 'blog'}
			<Blog />
		{:else if type == 'projects'}
			<Code />
		{:else if type == 'homepage'}
			<IdCard />
		{:else if type == 'instagram'}
			<Instagram />
		{:else}{/if}
	</h5>
	<a href={url} target="_blank" class="link">{url}</a>
</div>

<style>
	div {
		--justify: flex-start;
		--svg-size: var(--font-pre-small);
		--svg-fill: var(--ink);
		--svg-fill-hover: var(--ink);
		font-size: var(--font-pre-pre-small);
		text-decoration: none;
	}
	a.link {
		font-size: var(--font-pre-pre-small);
	}
</style>
