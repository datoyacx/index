export async function get() {
	return {
		headers: { location: 'https://hako.work/work' },
		status: 301
	}
}