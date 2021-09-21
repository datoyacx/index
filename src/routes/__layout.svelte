<script lang="ts">
    import PageTransition from "$lib/components/PageTransition.svelte"
    export let key
</script>

<script context="module" lang="ts">
    export const load = async ({ page }) => ({
      props: {
        key: page.path,
      },
    })
</script>

<style lang="scss" global>
	@import '../styles/global.scss';
</style>

<PageTransition refresh={key}>
    <slot/>
</PageTransition>