<script lang='ts'>
	import { calc } from "$lib/calc";
	import { items } from "$lib/data/items";
	import { recipes } from "$lib/data/recipes.svelte";
	import { getBuilding } from "$lib/helper";
	import ItemComponent from "./ItemComponent.svelte";
	import Recipes from "./recipes.svelte";

	let itemList:Array<{item:string,input:number,output:number,key:number}> = $state([]);
    let buildingList:Array<{building:string,recipe:string,num:number}> = $state([]);
    let showRecipes:Boolean = $state(false);
    $effect(()=>{
        let result = calc(recipes)
        itemList = result.itemList
        buildingList = result.buildingList
    }) 
</script>
<div>
    <button onclick={()=>{showRecipes = true}}>Show Recipes</button>
</div>
{#if showRecipes}

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div id='bg' onclick={()=>showRecipes=false}>
    <Recipes />
    
</div>
{/if}
<div class='inline-block'><ItemComponent {itemList} key={4}/></div>
<div class='inline-block'><ItemComponent {itemList} key={3}/></div>
<div class='inline-block'><ItemComponent {itemList} key={2}/></div>
<div class='inline-block'><ItemComponent {itemList} key={1}/></div>
<div class='inline-block'>
<table>
    <thead>
        <tr><th colspan=2>Building</th><th>Recipe</th><th>Num</th><th>Pop</th><th>KW</th><th>TFlops</th></tr>
    </thead>
    <tbody>
{#each buildingList as {building,recipe,num}}
    <tr>
        <td><img alt={building} src={'/icons/' + getBuilding(building).icon} /></td>
        <td>{building}</td>
        <td><img alt={recipe} src={'/icons/' + items.filter(i=>i.name==recipe)[0].icon} /></td>
        <td>{Math.ceil(num)}</td>
        <td>{getBuilding(building).pop * Math.ceil(num)}</td>
        <td>{Math.round(getBuilding(building).kw * num * 10)/10}</td>
        <td>{Math.round(getBuilding(building).tflop * num * 10)/10}</td>
    </tr>
{/each}
</tbody>
</table>
</div>
<style>
    td,th{
        padding:0 0.5rem;
    }
    img{
        height:32px
    }
    :global(body,html){
        background:#2f3536;
        margin:0;
        font-family:'Helvetica';
        color:white;
    }
     #bg{
        background:rgba(0,0,0,0.5);
        height:100vh;
        width: 100vw;
        top:0;
        z-index: 1;
        position:absolute;
    }
    .inline-block{
        overflow-y: auto;
        display:inline-block;
        vertical-align: top;
        max-height: calc(100vh - 5rem);
    }
</style>