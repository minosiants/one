const fetchProjects = async () => {
	const projects = await Promise.all(
		Object.entries(import.meta.glob('/src/lib/projects/*.md')).map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			return metadata;
		})
	);

	let sortedProjects = projects.sort((a, b) => b.year - a.year);

	sortedProjects = sortedProjects.map((project) => ({
		title: project.title,
		excerpt: project.excerpt,
		year: project.year,
		goal: project.goal,
		tech: project.tech,
		url: project.url
	}));

	return {
		projects: sortedProjects
	};
};

export default fetchProjects;
