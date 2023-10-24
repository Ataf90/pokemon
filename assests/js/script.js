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

const main = document.createElement("main");
    document.body.appendChild(main);

const tableau = document.createElement("table");
    tableau.classList.add("tableau");
    main.appendChild(tableau);
// for (let i = 0; i < ; index++) {
//     const element = array[index];
    
// }   

const cellule = document.createElement("div");
    cellule.classList.add("cellule");



