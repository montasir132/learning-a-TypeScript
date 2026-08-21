class Student {
    name:string
    roll:number
    email:string
    address:string
    id:number

    constructor(name:string, roll:number, email:string, address:string, id:number){
        this.name = name
        this.roll = roll
        this.email = email
        this.address = address
        this.id = id
    }

    getInfo():string{
        return `Ther student name ${this.name}, his roll ${this.roll} and Gmail No. ${this.email}`
    }
}

const Montasir = new Student("Md.Montasir Alam",38,"montasir@gmail.com", "164/1 Dhaka", 1562)
console.log(Montasir.getInfo());



class TeaShop {
    tital : string
    soldItem:any = []
    constructor(tital:string){
        this.tital = tital
    }
    buy(item:string,price:number):[] {
        return this.soldItem.push({item,price})
    }
    totalPrice():number{
        return this.soldItem.reduce((acc:number,item:any) => acc+item.price ,0 )
    }
}

const shop1 = new TeaShop("Tea Shop")
shop1.buy("Tea", 10)
shop1.buy("Cake", 15)
shop1.buy("Cake", 15)

console.log(shop1.totalPrice())
