<script>
	const { experience } = $props();
	const mkStrong = (txt) => {
		const t = txt.split(' ');
		const fv = t.shift(1);
		t.unshift(`<strong>${fv}</strong>`);
		return t.join(' ');
	};
</script>

<div class="stack">
	<h2>{experience.company}</h2>
	<h3>{experience.position}</h3>
	<h6>{experience.type}</h6>
	<h6>{experience.from} - {experience.till}</h6>
	<h6>{experience.location}</h6>
	<ul>
		{#each experience.projects as project}
			<li class="stack">
				<h6>Project: <strong>{project.title}</strong></h6>
				<small>{project.about}</small>
				<ul class="stack">
					{#each project.work as work}
						<li class="work">{@html mkStrong(work)}</li>
					{/each}
				</ul>
			</li>
		{/each}
	</ul>
</div>

<style>
	.stack {
		--stack-space: var(--s-2);
	}
	h2 {
		font-size: var(--font-normal);
	}
	h3 {
		font-size: var(--font-pre-small);
	}
	h6,
	small,
	.work {
		font-size: var(--font-pre-pre-small);
		color: var(--dark-lighter);
	}
	strong {
		color: var(--ink);
		font-weight: inherit;
	}
	.work {
		color: var(--ink);
	}
</style>
