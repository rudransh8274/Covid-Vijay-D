function updateVacc(){setTimeout( ()=>{

var x = document.querySelector("#adhar").value;

const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = "https://covid19-vaccine.herokuapp.com/api/";

fetch(proxyurl + url).then((apidata) => {
    // console.log(apidata);
    return apidata.json();

}).then((actualData) => {
    for(const member in actualData){
        
    }
}).catch((error) => {
    console.log(error);
})




// Instantiating new EasyHTTP class 
const http = new EasyHTTP; 
// User Data 
const data = { 
    
    //isVaccinated: true 
    
  } 
  
// Update Post 
http.put( 
proxyurl+url, 
     data) 
  
// Resolving promise for response data 
.then(data => console.log(data)) 
  
// Resolving promise for error 
.catch(err => console.log(err));
},2000)}