<svelte:head>
	<title>blog</title>
</svelte:head>

<script lang="ts">
	import type { Blog } from '$lib/interface/blog';
	import Menu from '$lib/components/Menu.svelte';
	import BlogCard from '$lib/components/BlogCard.svelte';
	
	async function getContent() {
		const url = 'https://c0re.ba-ka.org/v1/content?userid=4&limit=-1';
		const response = await fetch(url);
    	let responseJSON = await response.json();
		
		if (response.ok) {
			const content: Blog = responseJSON['result'];
			return content;
		}
	}

    export const posts: Promise<Blog> = getContent();
</script>

<div class="page blog">
	<div class="banner">
		<img src="/image/default.gif" alt="blog">
	</div>
	<Menu/>
	<h1 class="title">blog</h1>
	{#await posts}
		<p>loading...</p>
	{:then data}
		{#if data}
			{#each data.rows as post}
				<BlogCard
					code={post.content.code}
					title={post.content.title}
				/>
			{/each}
		{:else}
			post not found
		{/if}
	{:catch error}
		{error}
	{/await}
	<p class="copyright">&copy; 2021</p>
</div>