enum STATUS{
    APPROVED, CANCELED, PENDING
}

enum Users{
    ANONYMOUS, ADMINISTRATOR, ROOT, BLOCKED
}

enum Permission{
    READ = "Read Entities", WRITE = "Write Entites", MODIFY = "Modify Entities", ALL = "Super Permission!", DELETE = "Delete Entites"
}

let userResponse = {user: Users.ANONYMOUS, permission: Permission.ALL}

if(userResponse.user === Users.ADMINISTRATOR && userResponse.permission === Permission.ALL){
    console.log("Adming is logged in! You can destroy the entire system *evil laugh*");
}else if(userResponse.user === Users.ADMINISTRATOR){
    console.log("Adming is logged in! But you don't have the Super Permission, Your Permission is for: " + userResponse.permission)
}else{
    console.log("who are you?")
}