<script lang='ts'>
	import { items } from "$lib/data/items";

    export let itemList:Array<{item:string,input:number,output:number,key:number}> = [];
    export let key:number;    
    function getRowColor(input:number,output:number){
        let diff = input - output;
        if(Math.abs(diff) < 0.1) return ''
        if (input > output) return '#0c2607'
        if (output > input) return ' #260707'
        return ''
    }
</script>
<table>
    <thead>
        <tr><th colspan=2>Item</th><th>Supplied</th><th>Required</th></tr>
    </thead>
    <tbody>
{#each itemList.filter(i=>i.key == key) as item}
    <tr style:background={getRowColor(item.input,item.output)}>
        <td><img alt={item.item} src={'/icons/' + items.filter(i=>i.name==item.item)[0].icon} /></td>
        <td>{item.item}</td>
        <td>{Math.round(item.input*100)/100}</td>
        <td>{Math.round(item.output*100)/100}</td></tr>
{/each}
</tbody>
</table>
<style>
     td,th{
        font-family:'Helvetica';
        color:white;
        padding:0 0.5rem;
    }
    img{
        height:32px
    }
    table{
        display:inline-block;
        vertical-align: top;
    }
</style>