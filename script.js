// Função para lidar com o login
function handleLogin(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const rememberMe = document.getElementById('remember').checked;
  
  // Lógica de login (substitua pelo seu código de autenticação)
  console.log('Login:', username, ' Password:', password, ' Remember Me:', rememberMe);
  
  // Redirecionar para a página do select
  window.location.href = 'select.html';
}

// Função para lidar com o registo
function handleRegister(event) {
  event.preventDefault();
  const newUsername = document.getElementById('newUsername').value;
  const newPassword = document.getElementById('newPassword').value;
  
  // Lógica de registo (substitua pelo seu código de registo)
  console.log('Novo Utilizador:', newUsername, ' Nova Palavra-passe:', newPassword);
  
  // Redirecionar para a página de select 
  window.location.href = 'select.html';
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
// Seleção de moedas
document.getElementById('coinSelectionForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const selectedCoins = [];
  document.querySelectorAll('input[name="coins"]:checked').forEach(checkbox => {
      selectedCoins.push(checkbox.value);
  });
  localStorage.setItem('favoriteCoins', JSON.stringify(selectedCoins));
  window.location.href = 'dashboard.html';
});

// Dashboard
const coinData = [
  { name: "Bitcoin", exchangeRate: "€45,000", recommendedSite: "example1.com" },
  // ... outros dados ...
];

const dashboardTable = document.getElementById('dashboardCoins');
coinData.forEach(coin => {
  const row = document.createElement('tr');
  row.innerHTML = `
      <td>${coin.name}</td>
      <td>${coin.exchangeRate}</td>
      <td><a href="http://${coin.recommendedSite}" target="_blank">${coin.recommendedSite}</a></td>
  `;
  dashboardTable.appendChild(row);
});

// Perfil
const favoriteCoins = JSON.parse(localStorage.getItem('favoriteCoins') || '[]');
const favoriteCoinsList = document.getElementById('favoriteCoinsList');
favoriteCoins.forEach(coin => {
  const listItem = document.createElement('li');
  listItem.textContent = coin;
  favoriteCoinsList.appendChild(listItem);
});

// Notícias
const newsData = [
  { title: "Bitcoin atinge novo recorde!", content: "Bitcoin atingiu um novo recorde de €50,000 hoje." },
  // ... outras notícias ...
];

const newsContainer = document.getElementById('newsContainer');
newsData.forEach(news => {
  const newsDiv = document.createElement('div');
  newsDiv.innerHTML = `
      <h3>${news.title}</h3>
      <p>${news.content}</p>
  `;
  newsContainer.appendChild(newsDiv);
});
// ... scripts já fornecidos anteriormente ...

// Gráficos
// Nota: Este é um exemplo simplificado. Na prática, você usaria uma biblioteca como Chart.js ou D3.js para renderizar gráficos reais.

const chartData = [
  { title: "Bitcoin", data: [/* ... dados de preços ... */] },
  { title: "Ethereum", data: [/* ... dados de preços ... */] },
  // ... outros dados de moedas ...
];

const chartsContainer = document.getElementById('chartsContainer');
chartData.forEach(chart => {
  const chartDiv = document.createElement('div');
  chartDiv.className = 'chart';
  chartDiv.innerHTML = `
      <div class="chart-title">${chart.title}</div>
      <!-- Aqui, o gráfico real seria renderizado -->
  `;
  chartsContainer.appendChild(chartDiv);
});


//FIREBASE
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