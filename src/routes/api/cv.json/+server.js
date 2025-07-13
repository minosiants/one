import fetchCv from '$lib/assets/js/fetchCv';
import { json } from '@sveltejs/kit';

export const prerender = true;

export const GET = async () => {
	const { cv } = await fetchCv();
	return json(cv);
};
