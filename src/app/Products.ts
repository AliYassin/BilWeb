

export class Product {

    constructor (public Name: string, public price : number, public count : number) {}

    getName()
    {
     return ` ${this.Name}`  
    }

    getPrice()
    {
    return ` ${this.price}`
    }

   getCount()
   {
   return `${this.count}`
   }
}