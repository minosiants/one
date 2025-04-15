<script lang="js">
	import Date from '$lib/components/Date.svelte';
	import Tech from '$lib/components/Tech.svelte';
	let { projects = [] } = $props();
</script>

<ul class="stack">
	{#each projects as project}
		<li class="">
			<h2>
				{project.title}
			</h2>
			<Date date={project.year} />
			<h6>{project.excerpt}</h6>
			<div>{project.goal}</div>
			<Tech tech={project.tech} />
			<a href={project.url}>{project.url}</a>
		</li>
	{/each}
</ul>

<style>
	a {
		font-size: var(--font-small);
	}
</style>
