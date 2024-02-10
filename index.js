
//classe para o cadastro

let selectedOptionText;


let select = document.getElementById("select");
let list = document.getElementById("list");
    
let selectText = document.getElementById("selectText");
let options = document.getElementsByClassName("options");
    
select.onclick = function(){
    list.classList.toggle("open");
}
    
for(options of options){
    options.onclick = function(){   
        selectedOptionText = this.innerHTML;  
        selectText.innerHTML = selectedOptionText;     
    }
}
  
var firebaseConfig = {
    apiKey: "AIzaSyD559_itPgxedj7_HrxxcbTRm_ZIHBSry4",
    authDomain: "imoveis-2b74d.firebaseapp.com",
    projectId: "imoveis-2b74d",
    storageBucket: "imoveis-2b74d.appspot.com",
    messagingSenderId: "935647253208",
    appId: "1:935647253208:web:5f7c2cb259dcd9e4f43dad"
};
  //inicializar o firebase 
  firebase.initializeApp(firebaseConfig);
  
  var database = firebase.database();

 
  function save(){
  
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var username = document.getElementById('username').value;
    var telefone = document.getElementById('telefone').value;

    // Criar um novo usuário com email e senha no Firebase Authentication
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Cadastro bem-sucedido, agora você pode acessar o usuário criado em userCredential.user
            var user = userCredential.user;

            // Nomes das informações adicionais do usuário no banco de dados do Firebase
            var userData = {
                email: email,
                username: username,
                telefone: telefone,
                tipo_de_acesso: selectedOptionText
            };

            // Salvar dados do usuário no banco de dados do Firebase Realtime Database
            firebase.database().ref('users/' + user.uid).set(userData)
                .then(() => {
                    // Dados do usuário salvos com sucesso no banco de dados
                    console.log("Dados do usuário salvos com sucesso no banco de dados");
                    alert('Usuário cadastrado com sucesso!');
                })
                .catch((error) => {
                    console.error("Erro ao salvar os dados do usuário no banco de dados:", error);
                    alert('Erro ao salvar os dados do usuário no banco de dados: ' + error.message);
                });
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.error("Erro durante o cadastro do usuário:", errorMessage);
            alert('Erro durante o cadastro do usuário: ' + errorMessage);
        });
}


function login(){
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        // Login bem-sucedido
        var user = userCredential.user;
        console.log("Usuário autenticado:", user);
        alert('Login bem-sucedido!');
        // Redirecionar ou fazer algo após o login
    })
    .catch((error) => {
        // Lidar com erros durante o login
        var errorCode = error.code;
        var errorMessage = error.message;
        console.error("Erro durante o login:", errorMessage);
        alert('Erro durante o login: ' + errorMessage);
    });

}


function get(){}

function update(){}

function remove(){}


