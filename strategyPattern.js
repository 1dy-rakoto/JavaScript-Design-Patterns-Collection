function Fedex(){
    this.calculate=package=>{
        // some fedex stuff calculation..
        return 2.5
    }
}
function UPS(){
    this.calculate=package=>{
        // some UPS stuff calculation..
        return 1.95
    }
}
function USPS(){
    this.calculate=package=>{
        // some USPS stuff calculation..
        return 2.7
    }
}
const fedex= new Fedex();
const ups= new UPS();
const usps= new USPS();
const package={from:'Mada', to:'Georgia',weight:1.56}

/* au lieu de cela, on peut factoriser la logique
fedex.calculate(package);
ups.calculate(package);
usps.calculate(package);
 */
function Shipping(){
    this.company="";
    this.setStrategy=(company)=>{
        this.company=company;
    }
    this.calculate=package=>{
        return this.company.calculate(package);
    }
}

const shipping = new Shipping();
shipping.setStrategy(fedex);
console.log("fedex: "+shipping.calculate(package) );

shipping.setStrategy(ups);
console.log("ups: "+shipping.calculate(package) );

shipping.setStrategy(usps);
console.log("usps: "+shipping.calculate(package) );