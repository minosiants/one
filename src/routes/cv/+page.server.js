export const load = async ({ url, fetch }) => {
	const cvRes = await fetch(`${url.origin}/api/cv.json`);
	const cv = await cvRes.json();
	const projectsRes = await fetch(`${url.origin}/api/projects.json`);
	const projects = await projectsRes.json();
	return { cv, projects };
};
