// //
// let datasFetch;
// const urlApi = "https://pokebuildapi.fr/api/v1/pokemon";
// await getDataFetch(){

// }
console.log("chargé");
let datasAxios = await axiosTest();
console.log("Datas via Axios : ", datasAxios);
async function axiosTest() {
    const response = await axios.get("https://pokebuildapi.fr/api/v1/pokemon");
    return response.data;
}
const nomP = document.createElement("h1")
nomP.innerText = "Information Pokemon";
nomP.classList.add("nom-p");
document.body.appendChild(nomP);

const main = document.createElement("main");
document.body.appendChild(main);
let container = document.createElement("div");
container.classList.add("container")
main.appendChild(container);



const selection = document.createElement("select");
selection.setAttribute("id", "select")
selection.classList.add("select");
container.appendChild(selection);

let option = document.createElement("option");
option.innerText = "--choisir un pokemon--";
option.value = 0;
option.setAttribute("selected", true); // default choice 
selection.appendChild(option);
// selection.innerHTML = null;


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
    if (selection.value == 0){
        document.querySelector(".img-choix").style.display = "none";
    } else {
        console.log("Sélection : ", selection.value);
    // cette function trrouver image correspondance 
        let pokemonTrouve = datasAxios.find((element) => element.name == selection.value);
        console.log("Image du pokemon trouvé : ", pokemonTrouve.image);
        imageChoix.style.display = "block";
        imageChoix.setAttribute("src", pokemonTrouve.image);
        console.log("Trouve : ", pokemonTrouve);
    }
    

})










