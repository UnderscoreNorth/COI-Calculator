<script lang='ts'>
	import { items } from "$lib/data/items";
    import { recipes } from "$lib/data/recipes.svelte";
	import { getBuilding } from "$lib/helper";
    let search = $state('')
</script>
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div id='modal' onclick={(e)=>e.stopPropagation()}>
        <input bind:value={search} placeholder="Search" />
        <table id='recipes'>
            <thead>
                <tr>
                    <th>Building</th>
                    <th>Inputs</th>
                    <th>Outputs</th>
                    <th>Active</th>
                </tr>
            </thead>
            <tbody>
            {#each recipes.filter(i=>
                Object.keys(i.input).some(j=>j.toLowerCase().includes(search.toLowerCase())) 
                || Object.keys(i.output).some(j=>j.toLowerCase().includes(search.toLowerCase())) 
                || search == ''
            ) as recipe}
                <tr class='recipe'>
                    <td><img alt={recipe.building} src={'/icons/' + getBuilding(recipe.building).icon} />{recipe.building}</td>
                    <td>
                        <table>
                            <tbody>
                        {#each Object.entries(recipe.input) as [item,num]}
                        <tr><td>{num}</td><td><img alt={item} src={'/icons/' + items.filter(i=>i.name==item)[0].icon} />
                            {item}</td></tr>
                        {/each}
                            </tbody>
                        </table>
                    </td>
                    <td>
                        <table>
                            <tbody>
                        {#each Object.entries(recipe.output) as [item,num]}
                        <tr><td>{num}</td><td><img alt={item} src={'/icons/' + items.filter(i=>i.name==item)[0].icon} />
                            {item}</td></tr>
                        {/each}
                            </tbody>
                        </table>
                    </td>
                    <td>
                        <input type='checkbox' bind:checked={recipe.active}>
                    </td>
                </tr>
            {/each}
            </tbody>
        </table>
    </div>

<style>
   
    #modal{
        height:70vh;
        width:70vw;
        margin: auto;
        overflow-y: scroll;
        margin-top:calc(15vh - 1rem);
        background:#2f3536;
        color:white;
        font-family: 'Helvetica';
        padding:1rem;
        font-size:24px;
    }
    img{height:24px}
    .recipe>td{
        border:solid 1px white;
        
    }
    #recipes{
        width:100%
    }
    input{
        width:100%;
        font-size:24px;
    }
    input[type=checkbox]{height:24px}
</style>