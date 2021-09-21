<script lang="ts">
    export let code: string;
    export let title: string;
</script>

<div class="blog-list">
    <a href={`/blog/${code}`}>
        <h2>{title}</h2>
    </a>
</div>