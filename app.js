
function search() {

  let search = document.getElementById("input").value;

  let input = document.getElementById("container")

   let valor = "";
   let title = "";
   let descricao = "";

  

  for( let dado of dadosCars) {    
    search = search.toLowerCase();

    title = dado.title.toLowerCase();
    descricao = dado.descricao.toLowerCase();

    if(search === ""){
      return
    }else{
      
      if(title.includes(search) || descricao.includes(search)) {    


        valor += `
  
        <div class="card">
                <h2>
                    <a href="#" target="_blank">${title}</a>
                </h2>
                <p class="descricao-meta">${descricao}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
  
    `
  
      }

    }
  

  } 

  input.innerHTML = valor;

}