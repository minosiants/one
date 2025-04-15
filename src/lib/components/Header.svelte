<script lang="js">
	import Blog from '$lib/components/svg/Blog.svelte';
	import Github from '$lib/components/svg/Github.svelte';
	import IdCard from '$lib/components/svg/IdCard.svelte';
	import LinkedIn from '$lib/components/svg/LinkedIn.svelte';
	import Code from '$lib/components/svg/Code.svelte';
</script>

<div class="navigation box cluster">
	<a href="/blog" class="me">KM</a>
	<nav class="cluster">
		<a href="/" data-sveltekit-reload>
			<IdCard />
		</a>
		<a href="/blog">
			<Blog />
		</a>
		<a href="/projects">
			<Code />
		</a>

		<a target="_blank" href="https://www.linkedin.com/in/kaspar/">
			<LinkedIn />
		</a>
		<a target="_blank" href="https://github.com/minosiants">
			<Github />
		</a>
	</nav>
</div>

<style>
	.navigation {
		color: var(--accent);
		--justify: space-between;
		--box-bg-color: var(--ink);
	}
	.navigation a {
		color: var(--accent);
		font-size: var(--font-large);
		font-weight: bold;
	}
	.navigation a:hover {
		color: var(--ink);
	}
	.navigation nav a {
		--justify: space-between;
		--svg-size: var(--font-pre-small);
		--svg-fill: var(--accent);
		--svg-fill-hover: var(--ink);
		font-size: var(--font-pre-small);
		text-decoration: none;
	}
	.navigation a.me {
		text-decoration-color: var(--accent-2);
	}
</style>
