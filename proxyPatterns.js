function CryptocurrencyAPI(){
    this.getValue=(coin)=>{
        console.log("Calling some external API")
        switch(coin){
            case "Bitcoin":
                return "$ 700";
                break;
            case "Litecoin":
                return "$ 456"
                break;
            case "Etherium":
                return "$ 520";
                break;
        }

    }
}
/////
/* to avoid need to call the api all time
let api=new CryptocurrencyAPI();
console.log(api.getValue("Bitcoin"))
console.log(api.getValue("Litcoin"))
console.log(api.getValue("Etherium"))
console.log(api.getValue("Bitcoin"))
*/

function CryptocurrencyProxy(){
    this.api= new CryptocurrencyAPI();
    this.cache={};
    this.getValue=function(coin){
        if(this.cache[coin]==null){
            this.cache[coin]=this.api.getValue(coin)
        }
        return this.cache[coin]
    }
}

const proxy= new CryptocurrencyProxy();
console.log(proxy.getValue("Bitcoin"))
console.log(proxy.getValue("Litecoin"))
console.log(proxy.getValue("Etherium"))
console.log(proxy.getValue("Bitcoin"))