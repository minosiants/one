<script lang="js">
	const { date = [] } = $props();
	const formatter = new Intl.DateTimeFormat('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
	const d = ('' + date).length === 4 ? date : formatter.format(new Date(date));
</script>

<span> {d} </span>

<style>
	span {
		border-left: solid 2px var(--accent-2);
		font-size: var(--font-small);
		padding-left: var(--s1);
	}
</style>
