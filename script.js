const container = document.querySelector('.container');
const LoginLink = document.querySelector('.SignInLink');
const RegisterLink = document.querySelector('.SignUpLink');

RegisterLink.addEventListener('click', () =>{
    container.classList.add('active');
})

LoginLink.addEventListener('click', () => {
    container.classList.remove('active');
})


// ===== VALIDASI LOGIN =====
const loginForm = document.getElementById("loginForm");
const errorMsg = document.getElementById("errorMsg");

loginForm.addEventListener("submit", function(e) {
  e.preventDefault(); // cegah reload halaman

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "gacor" && password === "mantap") {
    // kalau benar masuk ke home.html
    window.location.href = "h2.html"; 
  } else {
    // kalau salah tampilkan pesan
    errorMsg.textContent = "❌ Username atau Password salah!";
  }
});
