import firebase from 'firebase'

var fribaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDlIUw5cYwAQ-MkLs4VnlOZm0gCZfOMFfU",
  authDomain: "kelly-s-portfolio.firebaseapp.com",
  databaseURL: "https://kelly-s-portfolio.firebaseio.com",
  projectId: "kelly-s-portfolio",
  storageBucket: "kelly-s-portfolio.appspot.com",
  messagingSenderId: "361532113560",
  appId: "1:361532113560:web:23b448f50fbeb17a0586ed"
})

var db = fribaseApp.firestore()

export { db }