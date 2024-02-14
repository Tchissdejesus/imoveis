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

  // Função para obter o ID do imóvel da URL
function getIdFromUrl() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get('id');
}

// Função para carregar as informações do imóvel com base no ID
function loadImovelInfo() {
    const imovelId = getIdFromUrl();
    if (imovelId) {
        var imovelRef = firebase.database().ref('imoveis/' + imovelId);
        imovelRef.once('value', function(snapshot) {
            const imovel = snapshot.val();
            if (imovel) {
                // Exiba as informações do imóvel na página
                document.getElementById('quartos').textContent = imovel.quartos + " Quartos";
                document.getElementById('salas').textContent = imovel.salas + " Salas";
                document.getElementById('cozinhas').textContent = imovel.conzinhas + " Cozinhas";
                document.getElementById('preco').textContent = "Preço: " + imovel.preco;
                document.getElementById('tipo').textContent = imovel.tipo;
                document.getElementById('localizacao').textContent = imovel.localizacao;
                document.getElementById('descricao').textContent = imovel.descricao;
            } else {
                console.log('Imóvel não encontrado.');
            }
        });
    } else {
        console.log('ID do imóvel não encontrado na URL.');
    }
}

// Chama a função para carregar as informações do imóvel assim que a página carregar
window.onload = function() {
    loadImovelInfo();
};