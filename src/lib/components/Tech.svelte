<script lang="js">
	const { tech } = $props();
</script>

<div class="cluster">
	{#each tech.split(',') as t}
		<span>{t.trim()}</span>
	{/each}
</div>

<style>
	div.cluster {
		--justify: flex-start;
	}
	span {
		font-size: var(--font-small);
		font-weight: bold;
	}
</style>
