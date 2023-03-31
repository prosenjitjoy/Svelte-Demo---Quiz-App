<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { answers, type Answer } from '../../store';
	let answersValue: Answer[] = [];
	import { get } from 'svelte/store';

	console.log(get(answers));

	const numberOfCorrectAnswers = answersValue.reduce((sum, answer) => {
		if (answer.isCorrect) {
			return sum + 1;
		}
		return sum;
	}, 0);

	const numberOfQuestions = answersValue.length;

	const handleBack = () => {
		answers.set([]);
		goto('/');
	};

	onMount(() => {
		if (!answersValue.length) goto('/');
	});
</script>

<div class="rounded bg-gray-50 text-center">
	<h3 class="pt-4 text-4xl">{((numberOfCorrectAnswers * 100) / numberOfQuestions).toFixed(2)}%</h3>
	<p class="p-4">{numberOfCorrectAnswers}/{numberOfQuestions}</p>
	<button
		class="rounded bg-blue-900 px-12 py-3 font-bold text-white duration-300 active:scale-95"
		on:click={handleBack}>Return Home</button
	>
</div>
