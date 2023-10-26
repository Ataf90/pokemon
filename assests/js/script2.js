console.log("chargé");
//----------------------- crée Axios méthode ----------------------
console.log("chargé");
let datasAxios = await axiosTest();
console.log("Datas via Axios : ", datasAxios);
async function axiosTest() {
    const response = await axios.get("https://pokebuildapi.fr/api/v1/pokemon");
    return response.data;
}

    //---------- crée main--------------------
    let main = document.createElement("main");
        document.body.appendChild(main);
    //---------crée container-----------------

        let header = document.createElement("h1");
            header.classList.add("header");
            main.appendChild(header);
        let fieldSet = document.createElement("fieldset");
            fieldSet.classList.add("field-set");
            main.appendChild(fieldSet);
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
            fieldSet.appendChild(labelEle)               
            
               

