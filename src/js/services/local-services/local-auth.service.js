 export class LocalAuthService{
    //
    static async login (){
        const result= await fetch("../data/local-data-sources/user.json")
        const users= await result.json()
        console.log(users)

    }
    logout(){

    }
}