export default {
  login: {
    action: "Entrar",
    to_create_account: "ou crie sua conta",
  },
  sign_up: {
    action: "Crie sua conta",
    to_signin: "ou Entre",
  },
  placeholder: {
    email: "Endereço de Email",
    password: "Senha",
    confirm_password: "Confirme a Senha",
  },
  errors: {
    "auth/user-not-found":
      "Não existem usuários cadastrados com o email informado",
    "auth/invalid-email":
      "Verifique se o e-mail é válido, ex: voce@provedor.com",
    "auth/wrong-password":
      "Verifique se o e-mail ou senha estão corretos e tente novamente",
    "auth/email-already-in-use": "O e-mail informado já está em uso",
    "auth/weak-password": "A senha precisa ter pelo menos 6 caracteres",
  },
};
