<script lang="ts">
	import { items } from '$lib/data/items';
	import { output, input } from './states.svelte';
	let toggle = $state(false);
	function getRowColor(input: number, output: number) {
		let diff = input - output;
		if (Math.abs(diff) < 0.1) return '';
		if (input > output) return '#0c2607';
		if (output > input) return ' #260707';
		return '';
	}
</script>

<table>
	<thead>
		<tr><th colspan="4"><input type="checkbox" bind:checked={toggle} />Show balanced items</th></tr>
		<tr><th colspan="2">Balance</th><th>Supplied</th><th>Required</th></tr></thead
	>
	<tbody>
		{#each Object.entries(output().itemBalance) as [itemName, bal]}
			{#if toggle || (!toggle && Math.abs(bal.in - bal.out) > 0.01)}
				<tr style:background={getRowColor(bal.in, bal.out)}>
					<td>
						<img alt={itemName} src={'icons/' + items.filter((i) => i.name == itemName)[0].icon} />
					</td>
					<td>{itemName}</td>
					<td>{Math.round(bal.in * 100) / 100}</td>
					<td>{Math.round(bal.out * 100) / 100}</td>
					<td><button onclick={() => (input.selectedItem = itemName)}>+</button></td>
				</tr>
			{/if}
		{/each}
	</tbody>
</table>
