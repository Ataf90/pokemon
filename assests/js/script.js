//------------ Permière crée un API-----------------------------

console.log("chargé");
let datasAxios = await axiosTest();
console.log("Datas via Axios : ", datasAxios);
async function axiosTest() {
    const response = await axios.get("https://pokebuildapi.fr/api/v1/pokemon");
    return response.data;
}
//------------ End crée un API-----------------------------
//------------- crée mon main----------- 
const main = document.createElement("main");
    document.body.appendChild(main);
//--------------------------------------    
//-------------- crée mon container 
    let container = document.createElement("div");
        container.classList.add("container")
        main.appendChild(container);

            let header = document.createElement("h1");
                header.innerText = "Information Pokemon";
                header.classList.add("header");
                container.appendChild(header);
//---------- crée mon selection pour faire list dropDown
            let selection = document.createElement("select");
                selection.setAttribute("id", "select")
                selection.classList.add("selecte");
                container.appendChild(selection);

            let containerPerformance = document.createElement("ul");
                containerPerformance.classList.add("container-perform");
                container.appendChild(containerPerformance);

                let hpElement = document.createElement("li");
                    hpElement.setAttribute("id","hp");
                    hpElement.style.listStyleType="none"
                    containerPerformance.appendChild(hpElement);

                let attackElement = document.createElement("li");
                    attackElement.setAttribute("id","attack");
                    attackElement.style.listStyleType="none"
                    containerPerformance.appendChild(attackElement);

                let defensElement = document.createElement("li");
                    defensElement.setAttribute("id","defense");
                    defensElement.style.listStyleType="none";
                    containerPerformance.appendChild(defensElement);

                let specialAttackElement = document.createElement("li");
                    specialAttackElement .setAttribute("id","special_attack");
                    specialAttackElement.style.listStyleType="none";
                    containerPerformance.appendChild(specialAttackElement );

                let specialDefElement = document.createElement("li");
                    specialDefElement.setAttribute("id","special_defense");
                    specialDefElement.style.listStyleType="none";
                    containerPerformance.appendChild(specialDefElement);

                let speedElement= document.createElement("li");
                    speedElement.setAttribute("id","speed");
                    speedElement.style.listStyleType="none"
                    containerPerformance.appendChild(speedElement);

                    container.appendChild(containerPerformance)

                let option = document.createElement("option");
                    option.innerText = "--choisir un pokemon--";
                    option.value = 0;
                    option.setAttribute("selected", true); // default choice 
                    selection.appendChild(option);
//----Gére mes listes des pokemons ---------


datasAxios.forEach(pokemon => {
    option = document.createElement("option");

    console.log("pokemon :", pokemon);
    option.innerText = pokemon.name;
    selection.appendChild(option);
    });

    let imageChoix = document.createElement("img");
        imageChoix.classList.add("img-choix");
        container.appendChild(imageChoix)

selection.addEventListener("change", () => {
    if (selection.value == 0) {
        document.querySelector(".img-choix").setAttribute("src", "/assests/image/question.png");
        
        
    } else {
        console.log("Sélection : ", selection.value);
        // cette function trrouver image correspondance 
        let pokemonTrouve = datasAxios.find((element) => element.name == selection.value);
        console.log("Image du pokemon trouvé : ", pokemonTrouve.image);
        imageChoix.style.display = "block";
        imageChoix.setAttribute("src", pokemonTrouve.image);
        let recupperHp = pokemonTrouve.stats.HP;
        let recupperAttack = pokemonTrouve.stats.attack;
        let recupperDfense = pokemonTrouve.stats.defense;
        let recupperSpecialAttack = pokemonTrouve.stats.special_attack;
        let recupperSpecialDefense = pokemonTrouve.stats.special_defense;
        let recupperSpeed = pokemonTrouve.stats.speed;
            hpElement.innerText= "HP : " + recupperHp;
            attackElement.innerText= "Attack :  " + recupperAttack;
            defensElement.innerText= "Defense :  " + recupperDfense;
            specialAttackElement.innerText= "Special attack :  " + recupperSpecialDefense;
            specialDefElement.innerText= "Special defense :  " + recupperSpecialAttack;
            speedElement.innerText= "Speed : " + recupperSpeed;
            console.log("Trouve : ", pokemonTrouve);

    }


})










