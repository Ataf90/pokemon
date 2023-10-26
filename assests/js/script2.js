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


    let main = document.createElement("main");
        document.body.appendChild(main);

        let container = document.createElement("div");
            container.classList.add("container");
            main.appendChild(container);   
            let title = document.createElement("img");
            title.classList.add("header");
            title.classList.add("title")
            title.setAttribute('src',"/assests/image/title.png")
            container.appendChild(title); 
        let fieldSet = document.createElement("fieldset");
            fieldSet.classList.add("field-set");
            container.appendChild(fieldSet);
        let legend = document.createElement("legend");
                legend.classList.add("legend")
                legend.innerText="Rechéerche Pokemon";
                fieldSet.appendChild(legend)

        let radioParNom = document.createElement("input")
                radioParNom.setAttribute("type","radio")
                radioParNom.setAttribute("id","nom");
                radioParNom.innerText = "Par Nom : ";
                radioParNom.setAttribute("name","radio")
                fieldSet.appendChild(radioParNom)

        let labelnom = document.createElement("label")
            labelnom.textContent = "Par nom : ";
            labelnom.setAttribute("for","nom")
            fieldSet.appendChild(labelnom)

        let radioParEle = document.createElement("input");
            radioParEle.setAttribute("type","radio");
            radioParEle.setAttribute("id","element")
            radioParEle.setAttribute("name","radio")
            radioParEle.innerText = "Par Element : ";
            fieldSet.appendChild(radioParEle);

        let labelEle = document.createElement("label");
            labelEle.textContent = "Par Element : ";
            labelEle.setAttribute("for","element")
            fieldSet.appendChild(labelEle);
        let selection = document.createElement("select");
            selection.classList.add("selcte");
            fieldSet.appendChild(selection);     
        let option = document.createElement("option");
            option.classList.add("option");
            option.innerText = "-------- "
            option.value = 0;
            option.setAttribute("selected",true)
            selection.appendChild(option); 

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

        let imagePokemon = document.createElement("img");
        imagePokemon.classList.add("img-choix");
            container.appendChild(imagePokemon)            
//------------ Fini créé mes allement que je besion ----------------

// ------------ Générate mes mes objet de pokemons------------------

datasAxios.forEach(pokemon => {
    // crée un element pour récuper tous les nom des pokemon de API 
    option = document.createElement("option");
    console.log("pokemon :", pokemon);
    // pour afficer le nome de chque Pkemons 
    option.innerText= pokemon.name;
    selection.appendChild(option);
});

selection.addEventListener("change", ()=>{
    if(selection.value == 0){
        document.querySelector(".img-choix").setAttribute("src", "/assests/image/question.png");
    }else{
        console.log("seléction :" ,selection.value);
        let trouvUnpkemon = datasAxios.find((element)=> element.name == selection.value);
        console.log("pokemon trouve", trouvUnpkemon.image);
        // imageChoix.style.display= "block";
        imagePokemon.setAttribute("src",trouvUnpkemon.image)
        let recupperHp = trouvUnpkemon.stats.HP;
        let recupperAttack = trouvUnpkemon.stats.attack;
        let recupperDfense = trouvUnpkemon.stats.defense;
        let recupperSpecialAttack = trouvUnpkemon.stats.special_attack;
        let recupperSpecialDefense = trouvUnpkemon.stats.special_defense;
        let recupperSpeed = trouvUnpkemon.stats.speed;
            hpElement.innerText= "HP : " + recupperHp + "%";
            attackElement.innerText= "Attack :  " + recupperAttack;
            defensElement.innerText= "Defense :  " + recupperDfense;
            specialAttackElement.innerText= "Special attack :  " + recupperSpecialDefense;
            specialDefElement.innerText= "Special defense :  " + recupperSpecialAttack;
            speedElement.innerText= "Speed : " + recupperSpeed;
            console.log("Trouve : ", trouvUnpkemon);
    }
})


            
               

