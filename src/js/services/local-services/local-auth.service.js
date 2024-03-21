export class LocalAuthService {
  //
  static async login(email, password) {
    console.log(email)
    console.log(password)
    const result = await fetch("../data/local-data-sources/user.json");
    const users = await result.json();

    const userCallback = u => u.email == email
    
     

    const user = users.find(userCallback);
    console.log(user);

    if (!user) {
      console.log("no user found");
      return "no user found";
    }
    if (user.password !== password) {
      console.log("no password");
      return "bad request";
    }

    console.log("connexion reussie")
    window.location.href="http://127.0.0.1:5503/src/index.html"

     const storage= window.localStorage;
    const data= {
      email: user.email,
      firstname:user.firstname,
      lastname: user.lastname,
    };
    storage.setItem("user", JSON.stringify(data));
  }

    static logout() {
    console.log("méthode logout");
    const storage = window.localStorage;
    storage.removeItem("user") 
  }
}
