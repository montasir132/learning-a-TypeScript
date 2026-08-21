/*
* phone number
* balance
* pin
* history 
*/
class BkashAccount{
    accountNumber:string
    private balance : number
    private pin : number
    history : any = []

    constructor(accountNumber : string, balance : number, pin : number){
        this.accountNumber = accountNumber
        this.balance = balance
        this.pin = pin
    }
    getBalance(pin:number):any{
        if(this.pin === pin){
            return `your balance is ${this.balance}Tk.`
        }
        return `You provide wrong pin.`
    }
}
const rafi = new BkashAccount("01822614757", 70124, 122147)
 
console.log(rafi.getBalance(122147));