export class LocalAuthService {
  static async login(email, password) {
    console.log(email);
    console.log(password);

    const result = await fetch("../data/local-data-sources/user.json");
    const users = await result.json();

    const user = users.find(u => u.email === email);

    if (!user) {
      console.log("no user found");
      return "no user found";
    }

    if (user.password !== password) {
      console.log("no password");
      return "bad request";
    }

    const storage = window.localStorage;
    const data = {
      email: user.email,
      firstname: user.firstname,
      lastname: user.lastname,
    };
    storage.setItem("user", JSON.stringify(data));

    console.log("connexion réussie");
    window.location.href = "/src/index.html";
  }

  static async logout() {
    console.log("méthode logout");
    const storage = window.localStorage;
    storage.removeItem("user");
    window.location.href = "/src/view/login.html";
    
  }
}
