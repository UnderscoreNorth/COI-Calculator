<script lang="ts">
	import { items } from '$lib/data/items';
	import type { ItemName } from '$lib/data/types';
	import { input } from './states.svelte';
	let toggle = $state(false);
	function changeValue(direction: 'in' | 'out', value: number, item: ItemName) {
		let filtered = input.requirements.filter((i) => i.item == item)[0];
		if (filtered == undefined) {
			filtered = {
				item,
				in: 0,
				out: 0
			};
			input.requirements.push(filtered);
		}
		filtered[direction] = parseInt(value.toString()) ?? 0;
	}
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div id="modal" onclick={(e) => e.stopPropagation()}>
	<div><input type="checkbox" bind:checked={toggle} /> Show Empty Rows</div>
	<div id="tableScroller">
		<table id="recipes">
			<thead>
				<tr>
					<th colspan="2">Item</th>
					<th>Supply</th>
					<th>Require</th>
				</tr>
			</thead>
			<tbody>
				{#each items
					.sort((a, b) => (a.name > b.name ? 1 : -1))
					.filter((i) => {
						let filtered = input.requirements.filter((j) => i.name == j.item)[0];
						return filtered?.in || filtered?.out || toggle;
					}) as item}
					<tr>
						<td><img alt={item.name} src={'icons/' + item.icon} /></td>
						<td>{item.name}</td>
						<td
							><input
								onchange={(e) => changeValue('in', e.target.value, item.name)}
								value={input.requirements.filter((i) => i.item == item.name)[0]?.in ?? 0}
							/></td
						>
						<td
							><input
								onchange={(e) => changeValue('out', e.target.value, item.name)}
								value={input.requirements.filter((i) => i.item == item.name)[0]?.out ?? 0}
							/></td
						>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>

<style>
	#modal {
		height: 70vh;
		width: 40rem;
		margin: auto;
		margin-top: calc(15vh - 1rem);
		background: #2f3536;
		color: white;
		font-family: 'Helvetica';
		padding: 1rem;
	}
	#tableScroller {
		overflow-y: scroll;
		height: 100%;
	}
</style>
