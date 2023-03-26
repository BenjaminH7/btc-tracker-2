

makeRequest();
setInterval(makeRequest, 15000);


function makeRequest () {

    const url = 'https://blockchain.info/ticker';

    let request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'json';
    
    

    request.send();

    request.onload = function () {
        if(request.readyState === XMLHttpRequest.DONE){
            if(request.status === 200){
             let response = request.response;
    
    
            const price = document.querySelector('#priceBTC');
            price.outerHTML= `<p id="priceBTC" class="animate-pulse text-center pt-10 text-5xl">${response.CHF.last} CHF</p>`;
           console.log('updated');
        }
        }
        else{
            response = "une erreur est survenue, merci de réessayer plus tard";
        }
    };
}