import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyD-Ri9RqvryvyG45ofqPAOxMlSVGkMdtjg",
    authDomain: "docs-clone-4777d.firebaseapp.com",
    projectId: "docs-clone-4777d",
    storageBucket: "docs-clone-4777d.appspot.com",
    messagingSenderId: "437489013925",
    appId: "1:437489013925:web:cc5b03ee37a4ca6c16a94c",
    measurementId: "G-PSDT0BWXLB"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

const db = app.firestore()

export { db };