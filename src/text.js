// My api key
const apikey = {
    key: "SUA API KEY VEM AQUI"
}

// GET fecth Requisition
fecth('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_KEY=' + apikey.key)
    .then((response) => {
        if(!response.ok) throw new Error('Erro ao executar a requisição, status' + response.status);

        return response.json();
    })
    // resposta da api
    .then((api) => {
        console.log(api);
    })
    // reposta de erro
    .catch((error) => {
        console.error(error.message);
    })

    
// inner html
.then((api) => {

    const text = "";
    // GET 10 coins and symbols
    for (let i; 1 < 20; i++) {

    }

    // show API informantion
    text = text + `
    <div class="media">
       <img src="coin.jpg" class="align-self-center nr-3" alt="coin" width="100" height="60">
       <div class="media-body">
        <h5 class="nt-2">${api.data[i].names}</h5>
        <p>${api.data[i].symbol}</p>   
        </div>
    </div> `;

    document.getElementById('coins').innerHTML = text;
})
