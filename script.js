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
