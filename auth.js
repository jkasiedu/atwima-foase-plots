
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBzuvqZTqlgxoI7f4lc7ESsHRo7NZSjWrM",
  authDomain: "atwima-fose-plots.firebaseapp.com",
  projectId: "atwima-fose-plots",
  storageBucket: "atwima-fose-plots.firebasestorage.app",
  messagingSenderId: "1016223978172",
  appId: "1:1016223978172:web:0b5f3c15a187ad7ebdb6b9",
  measurementId: "G-FQHXTBWT4V"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.signupUser = async () => {
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    alert("Account created successfully");
  } catch (error) {
    alert("Signup Error: " + error.message);
  }
};

window.loginUser = async () => {
  const email = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    alert("Login Error: " + error.message);
  }
};

window.logoutUser = async () => {
  await signOut(auth);
  window.location.reload();
};

window.resetPassword = () => {
  const email = document.getElementById("username").value;
  if (!email) return alert("Enter email to reset password.");
  auth.sendPasswordResetEmail(email).then(() => {
    alert("Password reset email sent.");
  }).catch((error) => {
    alert("Reset Error: " + error.message);
  });
};

onAuthStateChanged(auth, (user) => {
  document.querySelector(".auth-section").style.display = user ? "none" : "block";
  document.getElementById("dashboard").style.display = user ? "block" : "none";
  if (user) document.getElementById("userEmailDisplay").textContent = `Logged in as: ${user.email}`;
});
