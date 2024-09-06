
function search() {

  let search = document.getElementById("input").value;

  let input = document.getElementById("container")

   let valor = "";

  for( let dado of dadosCars) {

    if(search === ""){
      return
    }else{
      
      if(dado.title.includes(search)) {
        valor += `
  
        <div class="card">
                <h2>
                    <a href="#" target="_blank">${dado.title}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
  
    `
  
      }

    }

   

   

  } 

  input.innerHTML = valor;

}