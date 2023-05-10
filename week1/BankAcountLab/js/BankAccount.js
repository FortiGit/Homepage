

// }
const invoice = {
    invoice_number: 10,
    item:{
        itemNum: 1001,
        itemName: "item1",
    },
    printItem(){
        console.log(this.invoice_number)
    }


}
invoice.printItem();

const invoice1 = {};

invoice1.taxRate = 0.0875;

invoice1.getSalesTax = function(subtotal){
return (subtotal * this.taxRate);
};

