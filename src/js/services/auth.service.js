class AuthService{
    login(){
        const result= await fetch("../")
        const users= await result.json()
        console.log(users)

    }
    logout(){

    }
}