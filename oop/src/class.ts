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
}

const Montasir = new Student("Md.Montasir Alam",38,"montasir@gmail.com", "164/1 Dhaka", 1562)
console.log(Montasir);


class TiffinBox{
    name:string;
    item:string;
    shared:boolean;
    
    constructor(name:string, item:string, shared:boolean = false){
        this.name = name
        this.item = item
        this.shared = shared
    }
}

const rafi = new TiffinBox("Rafi", "Khacche")
const zahid = new TiffinBox("Zahid", "Bargar", true)

console.log(rafi.name + " brought " + rafi.item, "| shared:", rafi.shared);
console.log( zahid.name + " brought " + zahid.item, "| shared:", zahid.shared);
