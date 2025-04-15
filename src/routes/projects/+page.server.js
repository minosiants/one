export const load = async ({ url, fetch }) => {
	const projectsRes = await fetch(`${url.origin}/api/projects.json`);
	const projects = await projectsRes.json();

	return { projects };
};
