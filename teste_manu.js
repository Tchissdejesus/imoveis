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


function listManutencoes() {
    console.log("Entrou na listagem de manutenções!!");
    var manutencoesRef = firebase.database().ref('manutencao');
    manutencoesRef.once('value', function(snapshot) {
        var manutencoes = snapshot.val();
        var tabelaBody = document.querySelector('.table tbody');
        tabelaBody.innerHTML = ''; // Limpa o conteúdo atual da tabela
        if (manutencoes) {
            Object.keys(manutencoes).forEach(function(key) {
                var manutencao = manutencoes[key];
                var row = tabelaBody.insertRow();
                row.innerHTML = `
                    <td>${manutencao.id}</td>
                    <td>${manutencao.tipo}</td>
                    <td>${manutencao.localizacao}</td>
                    <td>${manutencao.preco}</td>
                    <td>${manutencao.descricao}</td>
                    
                    <td>
                        <button class="redirect-button" onclick="eliminarItem('${key}', 'manutencao')">Eliminar</button>
                    </td>
                `;
            });
        }
    });
}
function eliminarItem(imovelId) {
    if (confirm('Tem certeza que deseja eliminar este imóvel?')) {
        var imovelRef = firebase.database().ref('manutencao/' + imovelId);
        imovelRef.remove().then(function() {
            console.log('Imóvel eliminado com sucesso!');
            listImoveis(); // Atualiza a lista de imóveis após a eliminação
        }).catch(function(error) {
            console.error('Erro ao eliminar o imóvel:', error);
        });
    }
}