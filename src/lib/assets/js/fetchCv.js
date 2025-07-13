import { parse } from 'smol-toml';
import work from '$lib/cv/work.toml?raw';
const fetchCv = async () => {
	const parsed = parse(work);
	return {
		cv: parsed
	};
};

export default fetchCv;
