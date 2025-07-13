<script lang="js">
	import Date from '$lib/components/Date.svelte';
	import Tech from '$lib/components/Tech.svelte';
	const { projects = [] } = $props();
</script>

<ul class="stack">
	{#each projects as project}
		<li>
			<h2>
				{project.title}
			</h2>
			<Date date={project.year} />
			<h6>{project.excerpt}</h6>
			<div class="goal">{project.goal}</div>
			<Tech tech={project.tech} />
			<a href={project.url}>{project.url}</a>
		</li>
	{/each}
</ul>

<style>
	h2 {
		font-size: var(--font-size__title, var(--font-size-h2));
	}
	h6 {
		font-size: var(--font-size__excerpt, var(--font-size-h6));
	}
	.goal {
		font-size: var(--font-size__goal, var(--font-normal));
	}
	a {
		font-size: var(--font-small);
	}
</style>
