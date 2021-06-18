const singupForm = document.querySelector('#singup-form');

singupForm.addEventListener('submit', (e)=>{
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    e.preventDefault();
    auth
    .createUserWithEmailAndPassword(email, password)
    .then(userCredential=>{
        console.log('sing up')
    })

})