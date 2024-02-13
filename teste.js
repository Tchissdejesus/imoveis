//classe para login
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

  function listImoveis(){
    console.log("Entrou!!")
    var imoveis = database.ref('imoveis')
    imoveis.on('value', function(snapshot) {
    var value = snapshot.val()
    console.log(value)
    snapshot.forEach(function (childSnapshot) {
      //var value = childSnapshot.val()
      //console.log(value.email)
      });
    })
}