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


function listImoveis() {
    console.log("Entrou!!");
    var imoveisRef = firebase.database().ref('imoveis');
    imoveisRef.once('value', function(snapshot) {
        var imoveis = snapshot.val();
        var tabelaBody = document.querySelector('.table tbody');
        tabelaBody.innerHTML = ''; // Limpa o conteúdo atual da tabela
        if (imoveis) {
            Object.keys(imoveis).forEach(function(key) {
                var imovel = imoveis[key];
                var row = tabelaBody.insertRow();
                row.innerHTML = `
                    <td>${imovel.id}</td>
                    <td>${imovel.tipo}</td>
                    <td>${imovel.localizacao}</td>
                    <td>${imovel.preco}</td>
                    <td>${imovel.descricao}</td>
                    <td>
                        <button class="redirect-button" onclick="redirectToPage2()">Detalhes</button>
                        <script>
                            function redirectToPage2(){
                                window.location.href="Detalhes_Imovel.html?id=${imovel.id}";
                            }
                        </script>
                    </td>
                    <td>
                        <button class="redirect-button" onclick="redirectToPage1()">Actualizar</button>
                        <script>
                            function redirectToPage1(){
                                window.location.href="Adm_detalhes_casa.html?id=${imovel.id}";
                            }
                        </script>
                    </td>
                    <td>
                        <button class="redirect-button" onclick="eliminarImovel('${key}')">Eliminar</button>
                    </td>
                `;
            });
        }
    });
}
