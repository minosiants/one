<ul>
	<li></li>
	<li></li>
</ul>

<style>
	ul {
		display: flex;
		flex-wrap: no-wrap;
		align-items: stretch;
		height: 100%;
		width: clamp(1.8rem, calc(1.8rem + 1vw), 2.5rem);
	}
	ul > :first-child {
		background-color: var(--accent);
		width: 10%;
	}
	ul > :last-child {
		background-color: var(--ink);
		width: 90%;
	}
</style>
