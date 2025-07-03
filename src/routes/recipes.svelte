<script lang="ts">
	import { items } from '$lib/data/items';
	import { recipes } from '$lib/data/recipes.svelte';
	import { getBuilding, round } from '$lib/helper';
</script>

<table id="recipes">
	<thead>
		<tr>
			<th>Building</th>
			<th>Inputs</th>
			<th>Outputs</th>
			<th>Num</th>
		</tr>
	</thead>
	<tbody>
		{#each recipes.filter((i) => i?.num ?? 0 > 0) as recipe}
			<tr class="recipe">
				<td class="item">
					<img
						alt={recipe.building}
						src={'icons/' + getBuilding(recipe.building).icon}
					/>{recipe.building}
				</td>
				<td>
					<table>
						<tbody>
							{#each Object.entries(recipe.input) as [item, num]}
								<tr>
									<td>{round(num)}</td>
									<td class="item">
										<img alt={item} src={'icons/' + items.filter((i) => i.name == item)[0].icon} />
										{item}
									</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</td>
				<td>
					<table>
						<tbody>
							{#each Object.entries(recipe.output) as [item, num]}
								<tr>
									<td>{round(num)}</td>
									<td class="item">
										<img alt={item} src={'icons/' + items.filter((i) => i.name == item)[0].icon} />
										{item}
									</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</td>
				<td>
					<input type="number" bind:value={recipe.num} />
				</td>
			</tr>
		{/each}
	</tbody>
</table>

<style>
	#recipes {
		width: calc(100% - 5px);
	}
	input {
		width: 5rem;
	}
	.item {
		white-space: nowrap;
	}
</style>
