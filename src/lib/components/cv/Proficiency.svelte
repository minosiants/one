<script>
	const { items, level } = $props();
	const dots = Array.from('......');
</script>

<ul class="stack">
	{#each items as item}
		<li class="cluster item">
			<h2>{item}</h2>
			<div class="level {level}">
				{#each dots as dot}
					<span>{dot}</span>
				{/each}
			</div>
		</li>
	{/each}
</ul>

<style>
	ul.stack {
		--stack-space: var(--s-2);
	}
	.level {
		color: var(--accent-2);
		font-size: var(--font-x-large);
		line-height: 0;
		letter-spacing: 0.4rem;
	}
	.expert {
		color: var(--accent-2);
	}
	.proficient :last-child {
		color: var(--dark-lighter);
	}
	.prior_experience :nth-last-child(1),
	.prior_experience :nth-last-child(2) {
		color: var(--dark-lighter);
	}
	.item {
		--justify: space-between;
		align-items: normal;
	}
	h2 {
		font-size: var(--font-normal);
	}
</style>
