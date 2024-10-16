let url = 'https://api.sheetbest.com/sheets/84c5c2ef-9605-4500-b76e-555c83e9e5b9';
fetch(url)
    .then( response => response.json() )
    .then( data => mostrarData(data) )
    .catch( error => console.log(error) )

const mostrarData = (data) => {
    console.log(data)
    let body = ""
    for (var i = 0; i < data.length; i++) {      
       body+=`<tr><td>${data[i].Nombre}</td><td>${data[i].Email}</td><td>${data[i].NFamiliares}</td></tr>`
    }
    document.getElementById('data').innerHTML = body
    //console.log(body)
}