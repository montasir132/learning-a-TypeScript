interface Response<T>{
    data : T,
    status : number
}
const transactionResponse : Response<string> = {
    data : "transaction successful",
    status : 200,
}
const transactionStatus: Response<boolean> = {
    data :  true,
    status : 200,
}
const transactionAmaount: Response<number> = {
    data :  74,
    status : 200,
}

let getLength= <item>(arr : item[]):number =>{
    return arr.length;
}
getLength<string>(["","",'3'])