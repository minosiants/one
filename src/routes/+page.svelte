<script>
	import VLine from '$lib/components/VLine.svelte';
</script>

<main class="box content">
	<ul class="with-sidebar1 center">
		<li>
			<VLine />
		</li>
		<li class="content">
			<div class="box stack">
				<h2 class="accent">Hi, I'm Kaspar.</h2>
				<h3>
					I’m passionate about crafting
					<a target="_blank" href="https://github.com/minosiants">software</a>, making
					<a target="_blank" href="https://www.instagram.com/artos450/">art</a>, and keeping a
					<a href="/blog" data-sveltekit-reload>blog</a>.
				</h3>
				<p>
					Have extensive experience in hands-on design and development of professional software
					across diverse industries, utilizing programming languages such as
					<a target="_blank" href="https://www.java.com/en/">Java</a>,
					<a target="_blank" href="https://www.scala-lang.org/">Scala</a>,
					<a target="_blank" href="https://kotlinlang.org/">Kotlin</a>,
					<a target="_blank" href="https://www.javascript.com/">JavaScript</a> and
					<a target="_blank" href="https://www.rust-lang.org/">Rust</a>.
				</p>
				<p>
					I love
					<a target="_blank" href="https://en.wikipedia.org/wiki/Functional_programming">FP</a>.
					Created some open source <a href="/projects" data-sveltekit-reload>projects</a>
				</p>
				<p class="bold">
					Live in
					<a
						target="_blank"
						href="https://www.openstreetmap.org/search?query=gold+coast#map=11/-27.9781/153.3604"
						>Gold Coast</a
					>
					, Australia.
				</p>
				<div>
					<p class="links">
						<a target="_blank" href="email:k@minosiant.com">k@minosiants.com</a>
						<a target="_blank" href="https://www.linkedin.com/in/kaspar/">LinkedIn</a>
					</p>
				</div>
			</div>
		</li>
	</ul>
</main>

<style>
	main {
		flex-direction: row;
		align-items: center;
	}
	main > :first-child {
		--padding: 0;
	}
	h3,
	h2 {
		margin-top: 0;
	}
	.bold {
		font-weight: bold;
	}
	.accent {
		background-color: var(--accent);
	}
	.links {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	.with-sidebar1 {
		display: flex;
		flex-wrap: wrap;
		gap: var(0, var(--s1));
	}

	.with-sidebar1 > :first-child {
		flex-basis: 2rem;
		flex-grow: 1;
	}
	.with-sidebar1 > :last-child {
		flex-basis: 0;
		flex-grow: 999;
		min-inline-size: 10%;
	}
</style>
