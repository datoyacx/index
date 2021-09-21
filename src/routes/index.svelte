<svelte:head>
	<title>toya</title>
</svelte:head>

<script lang="ts">
	import Menu from '$lib/components/Menu.svelte';

	export const profile: string = 'https://avatars.githubusercontent.com/u/53964388';
</script>

<div class="page home">
	<h1 class="title">toya</h1>
	<p class="description">a lazy guy who want to sleep and write code in isekai</p>
	<img src="{profile}" alt="toya profile">
	<Menu/>
	<p class="copyright">&copy; 2021</p>
</div>