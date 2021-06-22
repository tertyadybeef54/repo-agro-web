//post
const postList = document.querySelector("#post");
const setupPost = data =>{
    if (data!=null) {
        let html = '';
        const li = `<label>Email: ${data.email}</label><br> <label>Nombre: ${data.nombres} ${data.apellidos}</label>`;
        html+=li;
        postList.innerHTML = html;
    }
}

const postList2 = document.querySelector('#copia');
const setupPost2 = data =>{
    if (data!=null) {
        let html2 = '';
        const li2 = `<label>Última copia de seguridad: ${data.fechaUltimaSincro}</label>`
        html2+=li2;
        postList2.innerHTML = html2;
    }
}

correo = "andres@gmail.com";
//events
auth.onAuthStateChanged((user) => {
    if (user) {
      console.log("sign in");

        docRef =  fs.collection("users")
            .doc(`${user.email}`)
            .collection("Usuario")
            .doc("1");

        docRef.get().then((doc) => {
                if (doc.exists) {
                    post = doc.data();
                    setupPost(post);
                    setupPost2(post);
                } else {
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });

    }
    
  });

  // Logout
const logout = document.querySelector("#salir");

logout.addEventListener("click", (e) => {
  e.preventDefault();
  auth.signOut().then(() => {
    location.href = "index.html";
  });
});

 