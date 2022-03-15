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
	import Menu from '$lib/components/Menu.svelte';
	import type { BlogData } from '$lib/interface/blogData';
	import marked from 'marked';
	
	async function getContent(code: number) {
		const url = `https://c.ba-ka.org/api/v1/kami?id=${ code }`;
		const response = await fetch(url);
    	let responseJSON = await response.json();
		
		if (response.ok) {
			const content: BlogData = responseJSON;
			if (content) {
				title = `blog - ${content.title}`;
			}
			return content;
		}
	}

	export let code: number;
	export let title: string = 'blog';
    export const posts: Promise<BlogData> = getContent(code);
</script>

<div class="page blog-detail">
	<div class="banner">
		<img src="/image/default.gif" alt="reading">
	</div>
	<Menu/>
	<div class="content">
	{#await posts}
		<h1 class="title">blog</h1>
		<p>loading...</p>
	{:then data}
		{#if data}
			<h1 class="title">{data.title}</h1>

			{@html marked(data.content)}
		{:else}
			<h1 class="title">sadkek...</h1>
			<p>post not found</p>
		{/if}
	{:catch error}
		{error}
	{/await}
	</div>
	<p class="copyright">&copy; 2021</p>
</div>