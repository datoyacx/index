<svelte:head>
	<title>&#12488;&#12516;</title>
</svelte:head>

<script lang="ts">
	import Menu from '$lib/components/Menu.svelte';
	import Footer from '$lib/components/Footer.svelte';

	export const profile: string = 'https://avatars.githubusercontent.com/u/53964388';
</script>

<div class="page home">
	<h1 class="title">&#12488;&#12516;</h1>
	<p class="description">a lazy guy who want to sleep and write code in isekai</p>
	<img src="{profile}" alt="toya profile">
	<Menu/>
	<Footer/>
</div>