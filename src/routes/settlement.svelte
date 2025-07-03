<script lang="ts">
	import { foodDemands } from '$lib/data/foodDemands.svelte';
	import { items } from '$lib/data/items';
	import { settlementServices } from '$lib/data/settlementServices.svelte';
	import { type ItemName } from '$lib/data/types';
	import { unityDemands } from '$lib/data/unityDemands.svelte';
	import { round } from '$lib/helper';
	import { input, output } from './states.svelte';
</script>

<table>
	<thead>
		<tr>
			<th colspan="2"> </th>
			<th>Supplied</th>
			<th>Required</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>
				<img
					alt={'population'}
					src={'icons/' + items.filter((i) => i.name == 'Population')[0].icon}
				/>
			</td>
			<td>Population</td>
			<td><input bind:value={input.population} style:width={'4rem'} /></td>
			<td>{output().itemBalance['Population']?.out ?? 0}</td>
			<td></td>
		</tr>
		{#each ['Electricity', 'Unity', 'Computing', 'Maintenance I', 'Maintenance II', 'Maintenance III'] as item}
			<tr>
				<td>
					<img alt={item} src={'icons/' + items.filter((i) => i.name == item)[0].icon} />
				</td>
				<td>{item}</td>
				<td>{round(output().itemBalance[item as ItemName]?.in ?? 0)}</td>
				<td>{round(output().itemBalance[item as ItemName]?.out ?? 0)}</td>
				<td></td>
			</tr>
		{/each}
		<tr><th colspan="4">Food</th></tr>
		{#each foodDemands as food}
			<tr>
				<td>
					<img alt={food.item} src={'icons/' + items.filter((i) => i.name == food.item)[0].icon} />
				</td>
				<td>{food.item}</td>
				<td>{round(output().itemBalance[food.item]?.in ?? 0)}</td>
				<td>{round(output().settlementRequirements[food.item] ?? 0)}</td>
				<td><input type="checkbox" bind:checked={food.active} /></td>
			</tr>
		{/each}
		<tr><th colspan="4">Service</th></tr>
		{#each unityDemands as unity}
			<tr>
				<td>
					<img
						alt={unity.item}
						src={'icons/' + items.filter((i) => i.name == unity.item)[0].icon}
					/>
				</td>
				<td>{unity.item}</td>
				<td>{round(output().itemBalance[unity.item]?.in ?? 0)}</td>
				<td>{round(output().settlementRequirements[unity.item] ?? 0)}</td>
				<td><input type="checkbox" bind:checked={unity.active} /></td>
			</tr>
		{/each}
		{#each settlementServices as s}
			<tr>
				<td>
					<img
						alt={s.service}
						src={'icons/' + items.filter((i) => 'Settlement ' + i.name == s.service)[0].icon}
					/>
				</td>
				<td>{s.service}</td>
				<td></td>
				<td></td>
				<td><input type="checkbox" bind:checked={s.active} /></td>
			</tr>
		{/each}
	</tbody>
</table>

<style>
	td {
		white-space: nowrap;
	}
</style>
