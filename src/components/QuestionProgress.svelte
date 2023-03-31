<script lang="ts">
	export let isCorrect: boolean | null;
</script>

{#if isCorrect === null}
	<div class="h-3 w-3 rounded-full bg-gray-300" />
{:else if isCorrect === true}
	<div class="h-3 w-3 rounded-full bg-green-300" />
{:else}
	<div class="h-3 w-3 rounded-full bg-red-300" />
{/if}

