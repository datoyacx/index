<svelte:head>
	<title>blog</title>
</svelte:head>

<script lang="ts">
	import type { Blog } from '$lib/interface/blog';
	import Menu from '$lib/components/Menu.svelte';
	import BlogCard from '$lib/components/BlogCard.svelte';
	
	async function getContent() {
		const url = 'https://c.ba-ka.org/api/v1/kami?userid=61f3b1500c22a792c78228ee';
		const response = await fetch(url);
    	let responseJSON = await response.json();
		
		if (response.ok) {
			const content: Blog = responseJSON;
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
	<div class="content">
		<h1 class="title">blog</h1>
		{#await posts}
			<p>loading...</p>
		{:then data}
			{#if data}
				{#each data.row as post}
					<BlogCard
						code={post.id}
						title={post.title}
					/>
				{/each}
			{:else}
				post not found
			{/if}
		{:catch error}
			{error}
		{/await}
	</div>
	<p class="copyright">&copy; 2021</p>
</div>