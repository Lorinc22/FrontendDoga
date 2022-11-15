document.addEventListener('DOMContentLoaded'), () =>{

    //1.Feladat Összes Idézet + Szerző nevek
    document.getElementById('osszes').addEventListener('click', async ()=>{
        let response = await fetch('/users.json');
        let data = await response.json();
        data.quotes.map(quote => quotes.author.toUpperCase()+','+ quote.quotes);
        quotes.sort((a,b) =>a.localeCompare(b));
        let quoteLista = document.getElementById('lista')
        for(let u of quotes){
            let li = document.createElement('li');
            li.textContent=u;
            quoteLista.appendChild(li);
        }
    });
    //2.Feladat The
    document.getElementById('the').addEventListener('click', async ()=>{
        let response = await fetch('/users.json');
        let data = await response.json();

    });
    //3.Feladat Hossz
    document.getElementById('hossz').addEventListener('click', async ()=>{
        let response = await fetch('/users.json');
        let data = await response.json();

    });
    //4.feladat Darabszám
    document.getElementById('darabszam').addEventListener('click', async ()=>{
        let response = await fetch('/users.json');
        let data = await response.json();

    });

    
}
