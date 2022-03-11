export async function get() {
	return {
		headers: { Location: 'https://b.ba-ka.org/works' },
		status: 302
	}
}