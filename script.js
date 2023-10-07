// Função para lidar com o login
function handleLogin(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const rememberMe = document.getElementById('remember').checked;

  // Lógica de login (substitua pelo seu código de autenticação)
  console.log('Login:', username, ' Password:', password, ' Remember Me:', rememberMe);

  // Redirecionar para a página do dashboard (simulando)
  window.location.href = 'dashboard.html';
}

// Função para lidar com o registo
function handleRegister(event) {
  event.preventDefault();
  const newUsername = document.getElementById('newUsername').value;
  const newPassword = document.getElementById('newPassword').value;

  // Lógica de registo (substitua pelo seu código de registo)
  console.log('Novo Utilizador:', newUsername, ' Nova Palavra-passe:', newPassword);

  // Redirecionar para a página do dashboard (simulando)
  window.location.href = 'dashboard.html';
}

// Adicionar os event listeners aos formulários
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');

if (loginForm) {
  loginForm.addEventListener('submit', handleLogin);
}

if (registerForm) {
  registerForm.addEventListener('submit', handleRegister);
}
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAA4VxGzwFLXwDTq-IRe2wGxF_e7pmg_tA",
  authDomain: "cryptrail.firebaseapp.com",
  projectId: "cryptrail",
  storageBucket: "cryptrail.appspot.com",
  messagingSenderId: "620884748860",
  appId: "1:620884748860:web:79304a7da9f72d9d9ab139",
  measurementId: "G-BBSL7K3F17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);