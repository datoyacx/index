<script context="module" lang="ts">
	export async function load({ page }) {
		return {
			props: {
				code: page.params.slug
			}
		}
	}
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<script lang="ts">
	import type { BlogData } from '$lib/interface/blogData';
	import marked from 'marked';
	
	async function getContent(code: number) {
		const url = `https://c0re.ba-ka.org/v1/content?code=${ code }`;
		const response = await fetch(url);
    	let responseJSON = await response.json();
		
		if (response.ok) {
			const content: BlogData = responseJSON['result'];
			if (content) {
				title = `blog - ${content.content.title}`;
			}
			return content;
		}
	}

	export let code: number;
	export let title: string = 'blog';
    export const posts: Promise<BlogData> = getContent(code);
</script>


{#await posts}
	<p>loading...</p>
{:then data}
	{#if data}
		<h1>{data.content.title}</h1>

		{@html marked(data.content.main)}
	{:else}
		post not found
	{/if}
{:catch error}
	{error}
{/await}