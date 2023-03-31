<script lang="ts">
	import Card from '../components/Card.svelte';
	import quizzes from '../data.json';
</script>

<div class="grid grid-cols-2 gap-4">
	{#each quizzes as quiz (quiz.id)}
		<Card {quiz} />
	{/each}
</div>
