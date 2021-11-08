// api url
const api_url = 
      "https://nameless-wave-08460.herokuapp.com/notes";

      const noteTab = document.querySelector("ul")

  
// Defining async function
async function getapi(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    if (response) {
        console.log(response);
    }

    show(data);
}
// Calling that async function
getapi(api_url);


function show(data){
    data.forEach(data => {

        const newName = document.createElement('p')
        newName.appendChild(document.createTextNode(data.content))
        noteTab.appendChild(newName)

    });
}
