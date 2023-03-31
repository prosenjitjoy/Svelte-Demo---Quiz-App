<script lang="ts">
	export let handleSubmit: () => void;
	export let showCorrectAnswer: boolean;
	export let handleNext: () => void;
	export let currentQuestionIndex: number;
</script>

<div class="py-4 text-center">
	{#if showCorrectAnswer && currentQuestionIndex === 9}
		<button
			class="rounded bg-blue-900 px-12 py-3 font-bold text-white duration-300 active:scale-95"
			on:click={handleNext}>Finish</button
		>
	{:else if showCorrectAnswer}
		<button
			class="rounded bg-blue-900 px-12 py-3 font-bold text-white duration-300 active:scale-95"
			on:click={handleNext}>Next</button
		>
	{:else}
		<button
			class="rounded bg-blue-900 px-12 py-3 font-bold text-white duration-300 active:scale-95"
			on:click={handleSubmit}>Submit</button
		>
	{/if}
</div>
