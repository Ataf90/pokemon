console.log("chargé");
//-----------------------  Axios méthode ----------------------
console.log("chargé");
let datasAxios = await axiosTest();
console.log("Datas via Axios : ", datasAxios);
async function axiosTest() {
    const response = await axios.get("https://pokebuildapi.fr/api/v1/pokemon/limit/50");
    return response.data;
}
//-------- DATA AXIOS  types-----------------------------------
let datasAxiostype = await axiosType();
console.log("Datas type via Axios : ", datasAxiostype);
async function axiosType(){
    const response = await axios.get("https://pokebuildapi.fr/api/v1/types");
    return response.data;
}
//----------------------- END Axios méthode ----------------------

//---------- Commence  crée mes  allméents html & CSS --------------------

    let selectionList = document.createElement("select")
    let selection2 = document.createElement("op")
        document.getElementById("cadre_select").appendChild(selectionList);
    
    let optionDefault = document.createElement("option");
        optionDefault.classList.add("option");
        optionDefault.innerText = "-Faire une séléction- "
        optionDefault.value = 0;
        optionDefault.setAttribute("selected",true)
        selectionList.appendChild(optionDefault); 
            
    let image = document.createElement("img");
        image.classList.add("imge");
        image.setAttribute("id","img")
        image.setAttribute("src","/assests/image/question.png")
        document.getElementById("cadre_travail_image").appendChild(image);

/// --------------------selelct par NOM------------
cliqueSurParNom();
function cliqueSurParNom(){
document.getElementById("button_nom").addEventListener("click",()=>{
    document.getElementById("cadre_travail_titre").style.display ="flex";
    document.getElementById("cadre_travail_data").style.display="flex";
    document.getElementById("cadre_elements").style.display="flex";
    document.getElementById("cadre_evolution").style.display="flex";
    document.getElementById("cadre_liste").style.display ="none";   
})}
listParNom();
function listParNom(){
    datasAxios.forEach(pokemon => {
        // crée un element pour récuper tous les nom des pokemon de API 
        let option = document.createElement("option");
        // console.log("pokemon :", pokemon);
        // pour afficher le nome de chque Pokemons 
        option.innerText= pokemon.name;
        selectionList.appendChild(option);
    });
selectionList.addEventListener("change", ()=>{
    document.querySelector("#cadre_travail_stats").innerHTML = "";
    if(selectionList.value == 0){
        image.setAttribute("src", "/assests/image/question.png");
    }else{

        console.log("seléction :" ,selectionList.value);
        let trouvUnpkemon = datasAxios.find((pokemon)=> pokemon.name == selectionList.value);
        console.log("pokemon trouve", trouvUnpkemon.image);
        // imageChoix.style.display= "block";
        image.setAttribute("src",trouvUnpkemon.image)
        for (const [key, value] of Object.entries(trouvUnpkemon.stats)) {
            console.log(`${key}: ${value}`);

           let unStats = document.createElement("div");
                unStats.textContent = key +" : "+ value;
                document.getElementById("cadre_travail_stats").appendChild(unStats);
          }
    let cadreElement = document.querySelector("#elements");
    let cadreEvolution = document.querySelector("#evolution");
        // });
            /// géré mes types des chaque pokemons et mes types

//---------------------------            
        for (let index = 0; index < trouvUnpkemon.apiTypes.length; index++) {
            cadreElement.textContent = trouvUnpkemon.apiTypes[index].name;
        }
         /// géré mes types des chaque pokemons et mes evoulutions
        for (let index = 0; index < trouvUnpkemon.apiEvolutions.length; index++) {
            cadreEvolution.textContent = trouvUnpkemon.apiEvolutions[index].name;
        }
        let cadreTitrePokemon = document.getElementById("cadre_travail_titre");
            let recuperNomPokemon = trouvUnpkemon.name;
            cadreTitrePokemon.innerText=recuperNomPokemon;
    }

})
}

               
    /// --------------------selelct par ELEMENT------------
document.getElementById("button_element").addEventListener("click",()=>{
    document.getElementById("cadre_travail_titre").style.display ="none";
    document.getElementById("cadre_travail_data").style.display="none";
    document.getElementById("cadre_elements").style.display="none";
    document.getElementById("cadre_evolution").style.display="none";
    document.getElementById("cadre_liste").style.display ="flex"; 
})

listParElement();
function listParElement(){
    document.querySelectorAll("input[type='radio']").forEach(radio => {
        radio.addEventListener("change", changementstatutRadio);
    });
    selectionList.addEventListener("change", ()=>{

        let trouvUnpkemon = datasAxios.find((pokemon)=> pokemon.name == selectionList.value);
    
    function changementstatutRadio(eventRadio){
        selectionList.innerHTML="";
        let radioElement = eventRadio.target;
        if (eventRadio.target.value == "element") {
            datasAxiostype.forEach(element => {
                let optionElment = document.createElement("option");
                optionElment.innerText = element.name;
                selectionList.appendChild(optionElment);     
            })

        } else {
            datasAxios.forEach(pokemon => {
                // crée un element pour récuper tous les nom des pokemon de API 
                let option = document.createElement("li");
                    option.innerText = trouvUnpkemon.name;
                // console.log("pokemon :", pokemon);
                // pour afficer le nome de chque Pkemons 
                option.innerText= pokemon.name;
                selectionList.appendChild(option);
            });
        }     
    } 
    })
    }




    // document.getElementById("button_recherche").addEventListener("click", ()=>{
    //     listParNom();        
    // })
    // document.getElementById("button_recherche").addEventListener("click",()=>{
    //     listParElement();
    // })
            
               

