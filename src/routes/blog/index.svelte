<svelte:head>
	<title>blog</title>
</svelte:head>

<script lang="ts">
	import type { Blog } from '$lib/interface/blog';
	
	async function getContent() {
		const url = 'https://c0re.ba-ka.org/v1/content?userid=4';
		const response = await fetch(url);
    	let responseJSON = await response.json();
		
		if (response.ok) {
			const content: Blog = responseJSON['result'];
			return content;
		}
	}

    export const posts: Promise<Blog> = getContent();
</script>

<h1>blog</h1>
<p>gonna wrote something here via <a href="https://ah0.ba-ka.org/">ah0 project</a></p>

{#await posts}
	<p>loading...</p>
{:then data}
	{#if data}
		{#each data.rows as post}
		<a href={`/blog/${post.content.code}`}>
		<h2 class="title">{post.content.title}</h2>
		<p>{post.content.description}</p>
		</a>
	{/each}
	{:else}
		post not found
	{/if}
{:catch error}
	{error}
{/await}

