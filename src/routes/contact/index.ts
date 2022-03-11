export async function get() {
	return {
		headers: { Location: 'https://b.ba-ka.org/contact' },
		status: 302
	}
}