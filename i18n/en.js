export default {
  login: {
    action: "Login",
    to_create_account: "or create your account",
  },
  sign_up: {
    action: "Create Account",
    to_signin: "or login",
  },
  placeholder: {
    email: "Email address",
    password: "Senha",
    confirm_password: "Confirm your password",
  },
  errors: {
    "auth/user-not-found": "No user found with the given e-mail",
    "auth/invalid-email":
      "Check if it's a valid e-mail, ex: your-name@provider.com",
    "auth/wrong-password":
      "Check if e-mail or password are correct and try again",
    "auth/email-already-in-use": "The given e-mail is already in use",
    "auth/weak-password": "The password must be at least 6 characters",
  },
};
