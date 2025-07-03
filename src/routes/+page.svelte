<script lang="ts">
	import { autoCalc } from '$lib/autoCalc';
	import AddRecipe from './addRecipe.svelte';
	import AddRequirement from './addRequirement.svelte';
	import GlobalBalance from './globalBalance.svelte';
	import Recipes from './recipes.svelte';
	import Settlement from './settlement.svelte';
	import { input, output } from './states.svelte';
	let showInit: Boolean = $state(false);
	let loading: Boolean = $state(false);
	let loops: number = $state(1);
	async function calc() {
		loading = true;
		loops = 1;
		let [before, after] = ['', ''];
		do {
			await new Promise((res, rej) => {
				setTimeout(() => {
					res(null);
				}, 1);
			});
			before = JSON.stringify(output().itemBalance);
			autoCalc();
			after = JSON.stringify(output().itemBalance);
			loops++;
		} while (loops < 100 && before !== after);

		loading = false;
	}
</script>

{#if showInit}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div class="bg" onclick={() => (showInit = false)}><AddRequirement /></div>
{/if}
{#if loading}
	<div class="bg">
		<div
			style:font-size={'5rem'}
			style:margin={'auto'}
			style:width={'25rem'}
			style:margin-top={'15%'}
			style:font-weight={'bold'}
			style:text-align={'center'}
		>
			Loading, Loop: {loops}
		</div>
	</div>
{/if}
{#if input.selectedItem !== ''}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div class="bg" onclick={() => (input.selectedItem = '')}><AddRecipe /></div>
{/if}
<div>
	<a href="https://www.captain-of-industry.com/" target="_blank">Captain of Industry</a>
	<a href="https://github.com/UnderscoreNorth/COI-Calculator" target="_blank">Github</a>
	<button
		onclick={() => {
			showInit = true;
		}}>Add Requirements</button
	>
	<button onclick={() => calc()}> Auto calc </button>
</div>
<div id="container">
	<div><Settlement /></div>
	<div><GlobalBalance /></div>
	<div><Recipes /></div>
</div>

<style>
	:global(body, html) {
		background: #2f3536;
		margin: 0;
		font-family: 'Helvetica';
		color: rgb(212, 212, 212);
		font-size: 12px;
	}
	:global(img) {
		height: 12px;
	}
	.bg {
		background: rgba(0, 0, 0, 0.5);
		height: 100vh;
		width: 100vw;
		top: 0;
		z-index: 1;
		position: absolute;
	}
	#container {
		display: flex;
		max-height: calc(100vh - 5rem);
		flex-direction: column;
		flex-wrap: wrap;
		gap: 1rem;
		padding: 1rem;
		width: min-content;
	}
	#container > div {
		height: calc(100vh - 5rem);
		overflow-y: auto;
		padding-right: 1rem;
	}
	button {
		width: 10rem;
		padding: 0.5rem;
		white-space: nowrap;
	}
	a {
		color: rgb(197, 182, 95);
	}
</style>
