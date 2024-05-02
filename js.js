deixar URL="dados.xml";
Var id = 0;

$.Ajax(URL)
    .terminado(função(XML){
        $(XML).encontrar("flor").cada(função(){
            $("#cards").acrescentar('<div class="card"><a href="individual.html?id='+$(este).encontrar("Id").Texto()+'"><p class="procurado">Procurado</p> <img class="foto"src="'+ $(este).encontrar("Id").Texto() +'.jpg"><p class="vivo">Vivo ou Morto</p> <p class="nome">'+ $(este).encontrar("nome").Texto() +'</p> <p>'+ $(este).encontrar("Alcunha").Texto()+'<\p> <p class="rec"> <img class="berrys" src="Berrys.png">'+ $(este).encontrar("recompensa").Texto()+' </p><p> Status:'+ $(este).encontrar("Status").Texto()+'</a> </p><\div>');
        });
    })
    .falhar(função(){
        alerta("Ocorreu um erro na leitura do arquivo XML.");
    })

   


    Var url_string = janela.localização.HREF;
    Var URL1 = Novo URL(url_string);
    Var id = parseInt(URL1.pesquisaParams.Obter("Id"));

    $.Ajax(URL)
    .terminado(função(XML){
            $(XML).encontrar("flor").cada(função(){
                Var pdv = parseInt($(este).encontrar("Id").Texto())
                se(id == pdv){
                $("#individual").acrescentar('<div class="card"><p class="procurado">Procurado</p> <img class="foto"src="'+ $(este).encontrar("Id").Texto() +'.jpg"><p class="vivo">Vivo ou Morto</p> <p class="nome">'+ $(este).encontrar("nome").Texto() +'</p> <p>'+ $(este).encontrar("Alcunha").Texto()+'<\p> <p class="rec"> <img class="berrys" src="Berrys.png">'+ $(este).encontrar("recompensa").Texto()+' </p><p> Status:'+ $(este).encontrar("Status").Texto()+' </p><\div>');
                }
            });
        
    })
    .falhar(função(){
        alerta("Ocorreu um erro na leitura do arquivo XML.");
    })
