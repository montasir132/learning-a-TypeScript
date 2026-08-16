type Gender = "male" | "female" | "private";
type Student = {
    name : string,
    class : number,
    Roll : null | number,
    section ?: string | null,
    isStudent ?: boolean,
    gender ?: Gender,
}


const studentInfo : Student = {
    name : "rafi",
    class : 7,
    Roll : 74,
    section : "c",
    isStudent : true,
    gender : "female"
}

const rakibInfo : Student = {
    name : "Rakib",
    class : 7,
    Roll : 74,
    section : "c",
    isStudent : true,
}