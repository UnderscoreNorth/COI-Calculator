<script lang='ts'>
	import { calc } from "$lib/calc";
	import { items } from "$lib/data/items";
	import { recipes } from "$lib/data/recipes.svelte";
	import { getBuilding } from "$lib/helper";
	import InOut from "./inOut.svelte";
	import ItemComponent from "./ItemComponent.svelte";
	import Recipes from "./recipes.svelte";
	import { initialInOuts } from "./states.svelte";

	let itemList:Array<{item:string,input:number,output:number,key:number}> = $state([]);
    let buildingList:Array<{building:string,recipe:string,num:number}> = $state([]);
    let showRecipes:Boolean = $state(false);
    let showInit:Boolean = $state(false);
    $effect(()=>{
        let result = calc(recipes,initialInOuts)
        itemList = result.itemList
        buildingList = result.buildingList
    }) 
</script>
{#if showRecipes}
<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class='bg' onclick={()=>showRecipes=false}>
    <Recipes /> 
</div>
{/if}
{#if showInit}
<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class='bg' onclick={()=>showInit=false}>
    <InOut/> 
</div>
{/if}
<div id='container'>
    <div>
        <a href='https://www.captain-of-industry.com/' target="_blank">Captain of Industry</a>
        <a href='https://github.com/UnderscoreNorth/COI-Calculator' target="_blank">Github</a>
    </div>
<div>
    <button onclick={()=>{showInit = true}}>Show Init</button>
    <button onclick={()=>{showRecipes = true}}>Toggle Recipes</button>
</div>
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
        <td><img alt={building} src={'icons/' + getBuilding(building).icon} /></td>
        <td>{building}</td>
        <td><img alt={recipe} src={'icons/' + items.filter(i=>i.name==recipe)[0].icon} /></td>
        <td>{Math.ceil(num)}</td>
        <td>{getBuilding(building).pop * Math.ceil(num)}</td>
        <td>{Math.round(getBuilding(building).kw * num * 10)/10}</td>
        <td>{Math.round(getBuilding(building).tflop * num * 10)/10}</td>
    </tr>
{/each}
</tbody>
</table>
</div>
</div>
<style>
    td,th{
        padding:0 0.5rem;
    }
   
    :global(body,html){
        background:#2f3536;
        margin:0;
        font-family:'Helvetica';
        color:rgb(212, 212, 212);
        font-size:16px;
    }
    :global(img){
        height:16px;
    }
     .bg{
        background:rgba(0,0,0,0.5);
        height:100vh;
        width: 100vw;
        top:0;
        z-index: 1;
        position:absolute;
    }
    .inline-block{
        overflow-y: auto;
        max-height: calc(100vh - 5rem);
    }
    #container{
        display:flex;
        max-height: calc(100vh - 3rem);
        flex-direction: column;
        flex-wrap: wrap;
        gap:1rem;
        padding:1rem;
        width:min-content;
    }
    button{
        width:15rem;
        padding:0.5rem;
    }
    a{
        color:rgb(197, 182, 95)
    }
</style>