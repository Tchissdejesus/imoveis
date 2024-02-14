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

function eliminarImovel(imovelId) {
    if (confirm('Tem certeza que deseja eliminar este imóvel?')) {
        var imovelRef = firebase.database().ref('imoveis/' + imovelId);
        imovelRef.remove().then(function() {
            console.log('Imóvel eliminado com sucesso!');
            listImoveis(); // Atualiza a lista de imóveis após a eliminação
        }).catch(function(error) {
            console.error('Erro ao eliminar o imóvel:', error);
        });
    }
}

// Chama a função para listar os imóveis assim que a página carregar
window.onload = function() {
    listImoveis();
};


// Função para listar os imóveis
function listImoveis_home() {
    var imoveisRef = firebase.database().ref('imoveis');
    imoveisRef.once('value', function(snapshot) {
        var imoveis = snapshot.val();
        var mainSection = document.createElement('div');
        mainSection.style.marginTop = '-1422px';
        mainSection.style.position = 'relative';
        mainSection.style.padding = '20px';
        mainSection.style.width = '100%';
        mainSection.style.borderRadius = '4px';
        mainSection.style.display = 'flex'; // Adiciona display flex
       
        document.body.appendChild(mainSection);

        if (imoveis) {
            Object.keys(imoveis).forEach(function(key) {
                var imovel = imoveis[key];
                var cardDiv = document.createElement('div');
                cardDiv.style.width = '25%';
                cardDiv.style.margin = '10px';
                cardDiv.style.background = '#fff';
                cardDiv.style.textAlign = 'center';
                cardDiv.style.borderRadius = '10px';
                cardDiv.style.padding = '10px';
                cardDiv.style.boxShadow = '0 20px 35px rgba(0, 0, 0, 0.1)';
                
                var imgLink = document.createElement('a');
                imgLink.href = "cadaCasa.html";
                
                // Adiciona um evento de clique ao link
                imgLink.addEventListener('click', function() {
                    window.location.href = imgLink.href; // Redireciona para o href do link ao clicar
                });
                
                var img = document.createElement('img');
                img.src = "IMG/site1.jpg";
                img.style.width = '100%';
                img.style.height = '200px';
                
                imgLink.appendChild(img); // Adiciona a imagem ao link

                var h4 = document.createElement('h4');
                h4.textContent = imovel.localizacao;

                var p1 = document.createElement('p');
                p1.textContent = imovel.tipo;

                var p2 = document.createElement('p');
                p2.textContent = imovel.preco;

                var perDiv = document.createElement('div');
                perDiv.style.padding = '5px';
                perDiv.style.borderRadius = '10px';
                perDiv.style.background = 'rgb(223, 223, 223)';

                var table = document.createElement('table');
                table.style.margin = 'auto';
                var tr1 = document.createElement('tr');
                var tr2 = document.createElement('tr');

                var tdQuartos = document.createElement('td');
                tdQuartos.innerHTML = '<span>Quartos</span>';
                tr1.appendChild(tdQuartos);
                var tdQuartosValue = document.createElement('td');
                tdQuartosValue.textContent = '#' + imovel.quartos;
                tr2.appendChild(tdQuartosValue);

                var tdSalas = document.createElement('td');
                tdSalas.innerHTML = '<span>Salas</span>';
                tr1.appendChild(tdSalas);
                var tdSalasValue = document.createElement('td');
                tdSalasValue.textContent = '#' + imovel.salas;
                tr2.appendChild(tdSalasValue);

                var tdCozinhas = document.createElement('td');
                tdCozinhas.innerHTML = '<span>Cozinhas</span>';
                tr1.appendChild(tdCozinhas);
                var tdCozinhasValue = document.createElement('td');
                tdCozinhasValue.textContent = '#' + imovel.cozinhas;
                tr2.appendChild(tdCozinhasValue);

                table.appendChild(tr1);
                table.appendChild(tr2);

                perDiv.appendChild(table);

                cardDiv.appendChild(imgLink);
                cardDiv.appendChild(img);
                cardDiv.appendChild(h4);
                cardDiv.appendChild(p1);
                cardDiv.appendChild(p2);
                cardDiv.appendChild(perDiv);

                mainSection.appendChild(cardDiv);
            });
        }
    });
}

// Chama a função para listar os imóveis assim que a página carregar
window.onload = function() {
    listImoveis_home();
};
