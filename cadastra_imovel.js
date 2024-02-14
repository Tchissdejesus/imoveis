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

  function saveData(){
    console.log("Entrou!!!");

    let id = document.getElementById('id').value;
    let tipo = document.getElementById('tipo').value;
    let localizacao = document.getElementById('localizacao').value;
    let ano = document.getElementById('ano').value;
    let preco = document.getElementById('preco').value;
    let topologia = document.getElementById('topologia').value;
    let quartos = document.getElementById('quartos').value;
    let salas = document.getElementById('salas').value;
    let cozinhas = document.getElementById('cozinhas').value;
    let descricao = document.getElementById('descricao').value;
    let emailUser = sessionStorage.getItem("emailUser");

    var imovelData = {
        id: id,
        tipo: tipo,
        localizacao: localizacao,
        ano: ano,
        preco: preco,
        topologia: topologia,
        quartos: quartos,
        salas: salas,
        cozinhas: cozinhas,
        descricao: descricao,
        corretor: emailUser
    };

    firebase.database().ref('imoveis/'+id).set(imovelData).then(() => {
        console.log("Dados do imovel salvos com sucesso no banco de dados");
        console.log(emailUser);
        alert('Imóvel salvo com sucesso!');
        window.location.href = "Corrector.html";
    }).catch((error) => {
        console.error("Erro ao salvar os dados do imóvel no banco de dados:", error);
        alert('Erro ao salvar os dados do imóvel no banco de dados: ' + error.message);
    });
}
