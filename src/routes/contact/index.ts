export async function get() {
	return {
		headers: { location: 'https://hako.work/contact' },
		status: 301
	}
}