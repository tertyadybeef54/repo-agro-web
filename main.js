const singinForm = document.querySelector('#login-form');

singinForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    auth
    .signInWithEmailAndPassword(email, password)
    .then(userCredential=>{
    })
})

// events
// list for auth state changes
auth.onAuthStateChanged((user) => {
    if (user) {
      console.log("sign in");

        docRef =  fs.collection("users")
            .doc(`${user.email}`)
            .collection("Usuario")
            .doc("1");

        docRef.get().then((doc) => {
                if (doc.exists) {
                    location.href = "usuario.html";
                } else {
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    }
  });

