let debug = false;
class Events
{
    send(category:string, action:string, label?:String, value?:number)
    {
        if (debug) console.log("event:" + category + "/" + action + " - " + label + " - " + value);
        if (typeof ga !== 'undefined') 
            ga("send", "event", category, action, label, value);
    }
}

class Metrics
{
    set(num:number, value:any)
    {
        if (debug) console.log("metric:" + num + " value:" + value);
        if (typeof ga !== 'undefined') 
            ga('set', 'metric' + num, value);
    }
}

export module Insights
{
    export let init = (id:String)=>
    {
        if (typeof ga !== 'undefined') 
            ga('create', id, 'auto');
    }
    
    export let event = new Events();   
    export let metric = new Metrics();
}