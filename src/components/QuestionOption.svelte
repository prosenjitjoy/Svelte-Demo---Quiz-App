<script lang="ts">
	interface Option {
		id: number;
		label: string;
		text: string;
	}
	export let option: Option;
	export let selectedOption: null | string;
	export let handleChangeOption: (label: string) => any;
	export let showCorrectAnswer: boolean;
	export let answer: string;
</script>

<button
	class={`rounded bg-gray-200 py-4 shadow-lg ${
		!showCorrectAnswer && option.label === selectedOption ? 'bg-yellow-200' : null
	} ${showCorrectAnswer && option.label === selectedOption ? 'bg-red-300' : null} ${
		showCorrectAnswer && answer === option.label ? '!bg-green-300' : 'null'
	}`}
	on:click={() => handleChangeOption(option.label)}>{option.text}</button
>
