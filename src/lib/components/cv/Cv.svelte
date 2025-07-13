<script lang="js">
	import Proficiency from './Proficiency.svelte';
	import Experience from './Experience.svelte';
	import Education from './Education.svelte';
	import Projects from '../Projects.svelte';
	import Link from './Link.svelte';
	const { cv, projects } = $props();
	const companies = cv.experience.concat(cv.companies);
	const skills = cv.skills.split(',');
</script>

<main class="with-sidebar">
	<div class="stack">
		<div class="stack me">
			<h1>
				<div>{cv.first_name}</div>
				<div>{cv.last_name}</div>
				<div class="title">{cv.title}</div>
			</h1>
			<h2>{cv.mobile}</h2>
			<h2>{cv.email}</h2>
			<div>{cv.status}</div>
			<div>{cv.location}</div>
			<div>{cv.about}</div>
		</div>
		<div class="stack">
			<Proficiency items={cv.languages.expert} level="expert" />
			<Proficiency items={cv.languages.proficient} level="proficient" />
			<Proficiency items={cv.languages.prior_experience} level="prior_experience" />
		</div>
		<div>
			<div class="links dont-break">
				<h4>Links</h4>
				<div class="stack">
					<Link url={cv.links.linkedin} type="linkedin" />
					<Link url={cv.links.github} type="github" />
					<Link url={cv.links.instagram} type="instagram" />
					<Link url={cv.links.homepage} type="homepage" />
					<Link url={cv.links.blog} type="blog" />
					<Link url={cv.links.projects} type="projects" />
				</div>
			</div>
		</div>
		<div class="skills dont-break">
			<h4>Skills</h4>
			<div class="cluster">
				{#each skills as skill}
					<span>{skill}</span>
				{/each}
			</div>
		</div>
		<div class="dont-break">
			<h4>Worked For</h4>
			<ul>
				{#each companies as comp}
					<li>
						<a href={comp.url} target="_blank">{comp.company}</a>
					</li>
				{/each}
			</ul>
		</div>
		<div class="dont-break">
			<h4>Education</h4>
			<ul class="stack">
				{#each cv.education as ed}
					<li>
						<Education education={ed} />
					</li>
				{/each}
			</ul>
		</div>
		<div class="dont-break">
			<h4>Certifications</h4>
			<ul class="stack">
				{#each cv.certification as cert}
					<li class="cluster">
						<span>{cert.subject}</span>
						<span>{cert.provider}</span>
					</li>
				{/each}
			</ul>
		</div>
		<div class="projects dont-break">
			<h4>Personal projects</h4>
			<Projects {projects} />
		</div>
	</div>
	<div>
		<ul class="stack">
			{#each cv.experience as exp}
				<li class="dont-break">
					<Experience experience={exp} />
				</li>
			{/each}
		</ul>
	</div>
</main>

<style>
	.me :first-child {
		background-color: var(--accent);
	}
	.title {
		font-size: var(--font-normal);
	}
	main {
		--cluster-space: var(--s-2);
		--justify: left;
	}
	.stack.me {
		--stack-space: var(--s-1);
	}
	h1 {
		border-radius: 0;
		border-color: var(--accent);
	}
	h2 {
		font-size: var(--font-normal);
	}
	h2 {
		color: var(--accent-2);
	}
	h4 {
		font-size: var(--font-pre-small);
		border-bottom: 1px solid var(--accent);
	}
	span {
		font-size: var(--font-pre-pre-small);
	}
	.links {
		--stack-space: var(--s-2);
	}

	.projects {
		--font-size__title: var(--font-pre-small);
		--font-size__excerpt: var(--font-pre-pre-small);
		--font-size__goal: var(--font-pre-pre-small);
	}
	@media print {
		@page {
			size: A4;
			margin: 0cm; /* this affects the margin in the printer settings */
			padding: 0.5cm;
		}
		@page:right {
			@right-bottom {
				content: counter(page);
			}
		}
		.dont-break {
			break-inside: avoid-page;
		}
	}
</style>
