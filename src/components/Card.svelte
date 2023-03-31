<script lang="ts">
	import { goto } from '$app/navigation';
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
	export let quiz: Quiz;
</script>

<button
	class=" overflow-hidden rounded-lg bg-white shadow duration-300 active:scale-95"
	on:click={() => goto(`/quiz/${quiz.id}`)}
>
	<img
		src={quiz.imageUrl}
		alt="{quiz.name} image"
		class="2x:h-48 h-28 sm:h-32 md:h-36 lg:h-40 xl:h-44"
	/>
	<h1 class="text-center font-bold uppercase">{quiz.name}</h1>
</button>
