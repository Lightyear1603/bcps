<script>
const VALID_USERNAME = "A141047";   // ← change here
const VALID_PASSWORD = "12345"; // ← change here

function handleLogin(event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorBox = document.getElementById("error-msg");

    if (username === VALID_USERNAME && password === VALID_PASSWORD) {
        localStorage.setItem("isLoggedIn", "true");
        window.location.href = "program.html";
    } else {
        errorBox.style.display = "block";
        errorBox.innerText = "Wrong credentials";
    }
}
</script>
