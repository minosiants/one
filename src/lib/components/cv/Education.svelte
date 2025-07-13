<script>
	const { education } = $props();
</script>

<div class="stack">
	<span>{education.provider}</span>
	<span>{education.subject}</span>
	<span>{education.location} {education.year}</span>
</div>

<style>
	div {
		--stack-space: var(--s-4);
		font-size: var(--font-pre-pre-small);
	}
	div :last-child {
		color: var(--dark-lighter);
	}
</style>
