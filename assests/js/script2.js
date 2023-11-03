console.log("chargé");
//----------------------- crée Axios méthode ----------------------
console.log("chargé");
let datasAxios = await axiosTest();
console.log("Datas via Axios : ", datasAxios);
async function axiosTest() {
    const response = await axios.get("https://pokebuildapi.fr/api/v1/pokemon/limit/50");
    return response.data;
}
//-------- DATA AXIOS POUR types
let datasAxiostype = await axiosType();
console.log("Datas type via Axios : ", datasAxiostype);
async function axiosType(){
    const response = await axios.get("https://pokebuildapi.fr/api/v1/types");
    return response.data;
}
//----------------------- END Axios méthode ----------------------

    //---------- Commence  crée mes  allméents html & CSS --------------------

    let selectionList = document.createElement("select")
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

    // let hp = document.getElementById("hp");
    //     hp.innerText = "?";

    // let attack = document.getElementById("attack");
    //     attack.innerText = "?";

    // let defense = document.getElementById("defense");
    //     defense.innerText = "?";

    // let special_attack = document.getElementById("special_attack");
    //     special_attack.innerText = "?";

    // let special_defense = document.getElementById("special_defense");
    //     special_defense.innerText = "?";

    // let speed = document.getElementById("speed");
    //     speed.innerText = "?";

    // let cadreTitre = document.getElementById("cadre_travail_titre");
    //     cadreTitre.innerText= "???"
    
        
          

 


//--------------------------- Finit Générate les performances--------------------

           

// ------------ Générate mes mes objet de pokemons------------------
/// --------------------selelct par NOM------------
document.getElementById("button_nom").addEventListener("click",()=>{
    document.getElementById("cadre_travail_titre").style.display ="flex";
    document.getElementById("cadre_travail_data").style.display="flex";
    document.getElementById("cadre_elements").style.display="flex";
    document.getElementById("cadre_evolution").style.display="flex";
    document.getElementById("cadre_liste").style.display ="none";   
})
/// --------------------selelct par ELEMENT------------
document.getElementById("button_element").addEventListener("click",()=>{
    document.getElementById("cadre_travail_titre").style.display ="none";
    document.getElementById("cadre_travail_data").style.display="none";
    document.getElementById("cadre_elements").style.display="none";
    document.getElementById("cadre_evolution").style.display="none";
    document.getElementById("cadre_liste").style.display ="flex"; 
})



listParNom();
function listParNom(){
    datasAxios.forEach(pokemon => {
        // crée un element pour récuper tous les nom des pokemon de API 
        let option = document.createElement("option");
        // console.log("pokemon :", pokemon);
        // pour afficer le nome de chque Pkemons 
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
        // trouvUnpkemon.apiType.forEach(element => {
        //     let cadreElement = document.getElementById("elements");
        //     cadreElement.innerText = trouvUnpkemon.apiTypes.element.name;
           
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
           






            // let recuperNomPokemon = trouvUnpkemon.name;
            //     cadreTitre.innerText=recuperNomPokemon;
            // let recupperHp = trouvUnpkemon.stats.HP;
            // let recupperAttack = trouvUnpkemon.stats.attack;
            // let recupperDfense = trouvUnpkemon.stats.defense;
            // let recupperSpecialAttack = trouvUnpkemon.stats.special_attack;
            // let recupperSpecialDefense = trouvUnpkemon.stats.special_defense;
            // let recupperSpeed = trouvUnpkemon.stats.speed;

            //     hp.innerText =+ recupperHp;
            //     attack.innerText=+ recupperAttack;
            //     defense.innerText =+ recupperDfense;
            //     special_attack.innerText =+ recupperSpecialDefense;
            //     special_defense.innerText =+ recupperSpecialAttack;
            //     speed.innerText =+ recupperSpeed;

            // let champType = document.getElementById("elements");
            //     champType.innerText="";
            // let champEvolution = document.getElementById("evolution") ;
            //     champEvolution.innerText="";    
    
    }

})
}
document.querySelectorAll("input[type='radio']").forEach(radio => {
    radio.addEventListener("change", changementstatutRadio);
});
let trouvUnpkemon = datasAxios.find((pokemon)=> pokemon.name == selectionList.value);
    
    function changementstatutRadio(eventRadio){
        selectionList.innerHTML="";
        let radioElement = eventRadio.target;
        console.log("radio element : ", radioElement);
        if (eventRadio.target.value == "element") {
            datasAxiostype.forEach(element => {
                let optionElment = document.createElement("option");
                optionElment.innerText = element.name;
                selectionList.appendChild(optionElment);
                
            })

        } else {
            datasAxios.forEach(pokemon => {
                // crée un element pour récuper tous les nom des pokemon de API 
                let option = document.createElement("option");
                // console.log("pokemon :", pokemon);
                // pour afficer le nome de chque Pkemons 
                option.innerText= pokemon.name;
                selectionList.appendChild(option);
            });
        }     
    }                
// listParElement();
function listParElement(){
    selectionList.addEventListener("change", ()=>{
        if(selectionList.value == 0){
            image.setAttribute("src", "/assests/image/question.png");
        }else{
            let trouvUnpkemon = datasAxios.find((pokemon)=> pokemon.name == selectionList.value);
            console.log("seléction de pokemon  :" ,selectionList.value);

            // console.log("pokemon type: ", trouvUnpkemonApiTypes.name);
            // console.log("pokemon trouve", trouvUnpkemon.image);
            // console.log("API types " , trouvUnpkemon.type[1]);
            // imageChoix.style.display= "block";
            datasAxiostype.forEach(element => {
                let listPokemonParType = document.createElement("li");
                listParElement.innerText = element.name;
                selectionList.appendChild(listPokemonParType);
            });
            image.setAttribute("src",trouvUnpkemon.image)
        
        }
    
    })
    }




    document.getElementById("button_recherche").addEventListener("click", ()=>{
        listParNom();        
    })
    document.getElementById("button_recherche").addEventListener("click",()=>{
        listParElement();
    })
            
               

