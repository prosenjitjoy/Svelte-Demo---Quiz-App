<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import QuestionButton from '../../../components/QuestionButton.svelte';
	import QuestionOption from '../../../components/QuestionOption.svelte';
	import QuestionProgress from '../../../components/QuestionProgress.svelte';
	import QuestionText from '../../../components/QuestionText.svelte';
	import { answers, type Answer } from '../../store';

	interface Quiz {
		id: number;
		name: string;
		imageUrl: string;
		total: number;
		questions: Question[];
	}
	interface Question {
		id: number;
		question: string;
		options: Option[];
		answer: string;
	}
	interface Option {
		id: number;
		label: string;
		text: string;
	}
	export let data: Quiz;

	function randArray(min: number, max: number) {
		return Array.from({ length: 10 }, function () {
			return Math.floor(Math.random() * (max - min + 1)) + min;
		});
	}

	function compare(a: number, b: number) {
		if (a < b) {
			return -1;
		} else if (a > b) {
			return 1;
		} else {
			return 0;
		}
	}

	let arr: number[] = randArray(0, data.total);
	arr.sort(compare);

	let randomQuiz: Question[] = [];
	for (let i = 0; i < 10; i++) {
		randomQuiz.push(data.questions[arr[i]]);
	}

	let currentQuestionIndex = 0;
	let answersValue: Answer[];
	let selectedOption: null | string = null;
	let showCorrectAnswer = false;

	function handleChangeOption(label: string) {
		selectedOption = label;
	}

	let buttontext = 'Submit';
	const handleNext = () => {
		showCorrectAnswer = false;
		selectedOption = null;
		if (currentQuestionIndex === randomQuiz.length - 1) {
			goto('/results');
		} else {
			currentQuestionIndex++;
		}
	};

	const handleSubmit = () => {
		if (!selectedOption) return;
		showCorrectAnswer = true;
		answers.update((currentState) => {
			const updatedAnswerState = currentState;
			updatedAnswerState[currentQuestionIndex].isCorrect = selectedOption === question.answer;
			return updatedAnswerState;
		});
	};

	answers.subscribe((value) => {
		answersValue = value;
	});
	$: question = randomQuiz[currentQuestionIndex];

	onMount(() => {
		answers.set(
			randomQuiz.map((question: any) => {
				return {
					id: question.id,
					isCorrect: null
				};
			})
		);
	});
</script>

<div class="w-full">
	<div class="flex items-center justify-center gap-4 p-4">
		{#each answersValue as answer}
			<QuestionProgress isCorrect={answer.isCorrect} />
		{/each}
	</div>

	<QuestionText text={question.question} />

	<div class="grid grid-cols-1 gap-2 sm:grid-cols-2">
		{#each question.options as option (option.id)}
			<QuestionOption
				{option}
				{selectedOption}
				{handleChangeOption}
				{showCorrectAnswer}
				answer={question.answer}
			/>
		{/each}
	</div>
	<QuestionButton {handleSubmit} {showCorrectAnswer} {handleNext} {currentQuestionIndex} />
</div>
