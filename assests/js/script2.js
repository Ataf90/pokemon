console.log("chargé");
//----------------------- crée Axios méthode ----------------------
console.log("chargé");
let datasAxios = await axiosTest();
console.log("Datas via Axios : ", datasAxios);
async function axiosTest() {
    const response = await axios.get("https://pokebuildapi.fr/api/v1/pokemon");
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

    let hp = document.getElementById("hp");
        hp.innerText = "?";

    let attack = document.getElementById("attack");
        attack.innerText = "?";

    let defense = document.getElementById("defense");
        defense.innerText = "?";

    let special_attack = document.getElementById("special_attack");
        special_attack.innerText = "?";

    let special_defense = document.getElementById("special_defense");
        special_defense.innerText = "?";

    let speed = document.getElementById("speed");
        speed.innerText = "?";

    let cadreTitre = document.getElementById("cadre_travail_titre");
        cadreTitre.innerText= "???"


//--------------------------- Finit Générate les performances--------------------

           

// ------------ Générate mes mes objet de pokemons------------------
/// --------------------selelct par NOM------------
document.getElementById("button_nom").addEventListener("click",()=>{
    document.getElementById("cadre_travail_titre").style.display ="flex";
    document.getElementById("cadre_travail_data").style.display="flex";
    document.getElementById("cadre_elements").style.display="flex";
    document.getElementById("cadre_evolution").style.display="flex";
    document.getElementById("cadre_liste").style.display ="flex";


    
})
datasAxios.forEach(pokemon => {
    // crée un element pour récuper tous les nom des pokemon de API 
    let option = document.createElement("option");
    // console.log("pokemon :", pokemon);
    // pour afficer le nome de chque Pkemons 
    option.innerText= pokemon.name;
    selectionList.appendChild(option);
});

selectionList.addEventListener("change", ()=>{
    if(selectionList.value == 0){
        image.setAttribute("src", "/assests/image/question.png");
    }else{

        console.log("seléction :" ,selectionList.value);
        let trouvUnpkemon = datasAxios.find((pokemon)=> pokemon.name == selectionList.value);
        console.log("pokemon trouve", trouvUnpkemon.image);
        // imageChoix.style.display= "block";
        image.setAttribute("src",trouvUnpkemon.image)
      
            console.log("Trouve : ", trouvUnpkemon);
            let recuperNomPokemon = trouvUnpkemon.name;
                cadreTitre.innerText=recuperNomPokemon;
            let recupperHp = trouvUnpkemon.stats.HP;
            let recupperAttack = trouvUnpkemon.stats.attack;
            let recupperDfense = trouvUnpkemon.stats.defense;
            let recupperSpecialAttack = trouvUnpkemon.stats.special_attack;
            let recupperSpecialDefense = trouvUnpkemon.stats.special_defense;
            let recupperSpeed = trouvUnpkemon.stats.speed;

                hp.innerText =+ recupperHp;
                attack.innerText=+ recupperAttack;
                defense.innerText =+ recupperDfense;
                special_attack.innerText =+ recupperSpecialDefense;
                special_defense.innerText =+ recupperSpecialAttack;
                speed.innerText =+ recupperSpeed;

            let champType = document.getElementById("elements");
                champType.innerText="";
            let champEvolution = document.getElementById("evolution") ;
                champEvolution.innerText=""; 
            let arrayTypeResults =[];    
    
    }
})

function listParNom(){

    let btnNom = document.getElementById("button_nom");
    console.log("seléction nom :" ,selectionList.value);
    if(btnNom.type == "checked"){
        let trouvUnpkemon = datasAxios.find((element)=> element.name == selection.value);
        console.log("pokemon trouve", trouvUnpkemon.image);
        // imageChoix.style.display= "block";  
    }


}
function listParElement(){
    let btnElemnt = document.getElementById("button_element");
    btnElemnt.forEach
    console.log("séléction element ")
    if(btnElemnt.type == "checked"){
        
            let trouvUnElement = datasAxios.find((element) =>(element.apiResistances) == (btnElemnt.value));
    console.log("pokemon traouve par Element",trouvUnElement.apiResistances);
    // imageChoix.style.display= "block";
    image.setAttribute("src",trouvUnElement.image)
    }

}

    document.getElementById("button_recherche").addEventListener("click", ()=>{
        listParNom();        
    })
    document.getElementById("button_recherche").addEventListener("click",()=>{
        listParElement();
    })
for (let i  = 0; i  < trouvUnpkemon.apiResistances.length; i ++) {
   console.log("trouve un pokemon par element ", i);
    
}
            
               

