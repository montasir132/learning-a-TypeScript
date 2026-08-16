type UserRole = 'admin' | 'user' | 'moderator' | 'guest'; 
interface User {
    name : string,
    role : string,
    email : string,
}
interface Admin extends User {
    permissions : string[],
}
interface Moderator extends User {
    moderationAreas : string[],
}

const adminUser : Admin = {
    name : "Alice Johnson",
    role : "admin",
    email : "fhkdfls@gmail.com",
    permissions : ["manage_users", "edit_content", "view_reports"]
}