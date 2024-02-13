  //classe para ligin
var firebaseConfig = {
    apiKey: "AIzaSyD559_itPgxedj7_HrxxcbTRm_ZIHBSry4",
    authDomain: "imoveis-2b74d.firebaseapp.com",
    projectId: "imoveis-2b74d",
    storageBucket: "imoveis-2b74d.appspot.com",
    messagingSenderId: "935647253208",
    appId: "1:935647253208:web:5f7c2cb259dcd9e4f43dad"
};

  firebase.initializeApp(firebaseConfig);
  
  var database = firebase.database();

  function listarDados(){
        var user_ref = database.ref('users')
        user_ref.on('value', function(snapshot) {
        //var data = snapshot.val()
        //console.log(data['email'])
         snapshot.forEach(function (childSnapshot) {
          var value = childSnapshot.val()
          console.log(value.email);
          });
        })
  }

function tipoUsuario(emailUser){
  let tp = ""
    var user_ref = database.ref('users')
    user_ref.on('value', function(snapshot) {
    snapshot.forEach(function (childSnapshot) {
      var value = childSnapshot.val()
      if(value.email === emailUser)
        tp = value.tipo_de_acesso
      });
    })
    return tp
}

function login(){
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        // Login bem-sucedido
        var user = userCredential.user;
        console.log("Usuário autenticado:", user);
        //alert('Login bem-sucedido!');
        // Redirecionar ou fazer algo após o login
        
      //Codigo de verificacao de tipo de usuario
      let tU = tipoUsuario(email) 
      console.log(tU)

      if(tU === "Corretor")
        window.location.href = "login.html"
      else if(tU === "Cliente")
        window.location.href = "index.html"
      else if(tU === "Equipa de manutenção")
        window.location.href = "login.html"
      else if(tU === "Admin")
        window.location.href = "Adm.html"

    })
    .catch((error) => {
        // Lidar com erros durante o login
        var errorCode = error.code;
        var errorMessage = error.message;
        console.error("Erro durante o login:", errorMessage);
        alert('Erro durante o login: ' + errorMessage);
    });

}





