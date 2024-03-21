function login() {
let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    
    
    localStorage.setItem("username", username);

    
    window.location.href = "form.html";
    return false; 
}