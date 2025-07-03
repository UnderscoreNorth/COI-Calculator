<script lang="ts">
	import { items } from '$lib/data/items';
	import { recipes } from '$lib/data/recipes.svelte';
	import { type ItemName, type Recipe } from '$lib/data/types';
	import { getBuilding, getItem, round } from '$lib/helper';
	import { input, output } from './states.svelte';
	let required = $derived.by(() => {
		const item = output().itemBalance[input.selectedItem as ItemName];
		if (item == undefined) return 0;
		return item.in - item.out;
	});
	let showAll = $state(false);
	function getBalance() {
		const item = output().itemBalance[input.selectedItem as ItemName];
		if (item == undefined) {
			return '';
		} else {
			return ` - Supplied: ${round(item.in)} Required: ${round(item.out)} Balance: ${round(item.in - item.out)}`;
		}
	}
	function fillRecipe(recipe: Recipe, type: 'min' | 'max') {
		const dir = Object.keys(recipe.input).includes(input.selectedItem) ? 'input' : 'output';
		const itemName = input.selectedItem as ItemName;
		const item = output().itemBalance[itemName];
		if (item == undefined) return;
		let required = item.in - item.out;
		if (!((required > 0 && dir == 'input') || (required < 0 && dir == 'output'))) return;
		required = Math.abs(required);
		const current = recipe.num ?? 0;
		const recipeItemRatio = recipe[dir][itemName];
		if (recipeItemRatio == undefined) return;
		const neededNum = required / recipeItemRatio;
		let newNum = current + neededNum;
		if (type == 'max') newNum = Math.ceil(newNum);
		recipe.num = newNum;
		input.selectedItem = '';
	}
	function getPriority(recipe: Recipe) {
		const dir = Object.keys(recipe.input).includes(input.selectedItem) ? 'input' : 'output';
		if (showAll) return 1;
		if (required > 0 && dir == 'input') return 1;
		if (required < 0 && dir == 'output') return 1;
		return 0;
	}
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div id="modal" onclick={(e) => e.stopPropagation()}>
	<div>
		<img
			alt={input.selectedItem}
			style:height={'1.5rem'}
			src={'icons/' + getItem(input.selectedItem).icon}
		/>
		{input.selectedItem}
		{getBalance()}
		<input type="checkbox" style:width={'auto'} bind:checked={showAll} />Show All Recipes
	</div>
	<div id="tableScroller">
		<table id="recipes">
			<thead>
				<tr>
					<th>Building</th>
					<th>Inputs</th>
					<th>Outputs</th>
					<th>#</th>
				</tr>
			</thead>
			<tbody>
				{#each recipes.filter((i) => getPriority(i)) as recipe}
					{#if Object.keys(recipe.input).includes(input.selectedItem) || Object.keys(recipe.output).includes(input.selectedItem)}
						<tr class="recipe">
							<td
								><img
									class="building"
									alt={recipe.building}
									src={'icons/' + getBuilding(recipe.building).icon}
								/>{recipe.building}</td
							>
							<td>
								<table>
									<tbody>
										{#each Object.entries(recipe.input) as [item, num]}
											<tr
												><td>{num}</td><td
													><img
														alt={item}
														src={'icons/' + items.filter((i) => i.name == item)[0].icon}
													/>
													{item}</td
												></tr
											>
										{/each}
									</tbody>
								</table>
							</td>
							<td>
								<table>
									<tbody>
										{#each Object.entries(recipe.output) as [item, num]}
											<tr
												><td>{num}</td><td
													><img
														alt={item}
														src={'icons/' + items.filter((i) => i.name == item)[0].icon}
													/>
													{item}</td
												></tr
											>
										{/each}
									</tbody>
								</table>
							</td>
							<td>
								<input type="number" bind:value={recipe.num} />
							</td>
							<td>
								<button onclick={() => fillRecipe(recipe, 'min')}>Fill to minimum</button>
							</td>
							<td>
								<button onclick={() => fillRecipe(recipe, 'max')}>Max out recipe use</button>
							</td>
						</tr>
					{/if}
				{/each}
			</tbody>
		</table>
	</div>
</div>

<style>
	#modal {
		height: 70vh;
		width: min-content;
		margin: auto;
		margin-top: calc(15vh - 1rem);
		background: #2f3536;
		color: white;
		font-family: 'Helvetica';
		padding: 1rem;
		display: grid;
		grid-template-rows: 2rem auto;
		grid-template-columns: min-content;
		gap: 5px;
	}
	#modal div:nth-child(1) {
		font-size: 24px;
		white-space: nowrap;
	}
	.recipe > td {
		border: solid 1px white;
		white-space: nowrap;
		padding: 0 5px;
	}
	input {
		width: 5rem;
	}
	.building {
		height: 24px;
		vertical-align: middle;
	}
	#tableScroller {
		overflow-y: scroll;
		height: 100%;
	}
</style>
