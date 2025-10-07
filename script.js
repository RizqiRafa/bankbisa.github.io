// === Import Firebase ===
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

// === Konfigurasi Firebase kamu ===
const firebaseConfig = {
  apiKey: "AIzaSyDC9VXJcEjdA2fSls9ndkyef_z8kNYnTcM",
  authDomain: "banksampah-2ae2c.firebaseapp.com",
  projectId: "banksampah-2ae2c",
  storageBucket: "banksampah-2ae2c.firebasestorage.app",
  messagingSenderId: "202095888161",
  appId: "1:202095888161:web:af6726b3a9932f00322060",
  measurementId: "G-531QY3JWNJ",
};

// === Inisialisasi Firebase ===
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// === Elemen DOM asli kamu ===
const container = document.querySelector(".container");
const LoginLink = document.querySelector(".SignInLink");
const RegisterLink = document.querySelector(".SignUpLink");
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const errorMsg = document.getElementById("errorMsg");
const registerMsg = document.getElementById("registerMsg");

// === Animasi antar form (tetap seperti punyamu) ===
RegisterLink.addEventListener("click", (e) => {
  e.preventDefault();
  container.classList.add("active");
  errorMsg.textContent = "";
  registerMsg.textContent = "";
});

LoginLink.addEventListener("click", (e) => {
  e.preventDefault();
  container.classList.remove("active");
  errorMsg.textContent = "";
  registerMsg.textContent = "";
});

// === Fungsi Register (pakai Firebase Auth) ===
registerForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("reg_email").value.trim();
  const password = document.getElementById("reg_password").value;
  const username = document.getElementById("reg_username")?.value || email; // fallback

  if (!email || !password) {
    registerMsg.style.color = "#ffb3b3";
    registerMsg.textContent = "Lengkapi semua field.";
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      registerMsg.style.color = "#bfffc6";
      registerMsg.textContent = "Berhasil daftar! Silakan login.";
      registerForm.reset();

      setTimeout(() => {
        container.classList.remove("active");
        registerMsg.textContent = "";
        errorMsg.style.color = "#bfffc6";
        errorMsg.textContent = "Akun berhasil dibuat! Silakan login.";
        setTimeout(() => (errorMsg.textContent = ""), 3000);
      }, 1200);
    })
    .catch((error) => {
      registerMsg.style.color = "#ffb3b3";
      registerMsg.textContent = error.message;
    });
});

// === Fungsi Login (pakai Firebase Auth) ===
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  if (!email || !password) {
    errorMsg.style.color = "#ffb3b3";
    errorMsg.textContent = "Isi username dan password.";
    return;
  }

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      localStorage.setItem("loggedInUser", email);
      window.location.href = "home.html";
    })
    .catch((error) => {
      errorMsg.style.color = "#ffb3b3";
      errorMsg.textContent = "Login gagal: " + error.message;
    });
});
