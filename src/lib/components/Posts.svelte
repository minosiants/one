<script lang="js">
	import Date from './Date.svelte';

	let { posts = [] } = $props();
</script>

<ul class="stack">
	{#each posts as post}
		<li>
			<a href="/blog/{post.slug}">
				<h3>
					{post.title}
				</h3>
			</a>
			<Date date={post.date} />
		</li>
	{/each}
</ul>
