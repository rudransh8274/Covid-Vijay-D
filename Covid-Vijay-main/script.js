function userchk(){setTimeout( ()=> {

  console.log("hi");
  var x = document.querySelector("#inputPassword2").value;
  // const x = document.getElementById("adhar").value;
  console.log(x);


  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  const url = "https://covid19-vaccine.herokuapp.com/api/";

  fetch(proxyurl + url).then((apidata) => {
     
      return apidata.json();

  }).then((actualData) => {

console.log(actualData);

    // if(actualData.aadhar_nmber==x && actualData.dateofvaccination== null)
    // {
    //   alert("")
    // }

      let flag = true;
      for (const member in actualData) {

         
          if (x == actualData[member].aadhar_number) {
              flag = false;
        
              if (actualData[member].dateofvaccination === null) {
                 alert("You have not assigned date yet, wait some days");
              }
              else {
                  alert(`Your date of Vaccination is ${actualData[member].dateofvaccination}`);
              }
              break;
          }
      }
      if (flag)
          alert("Aadhar Number Not found");

  }).catch((error) => {
      console.log(error);
  })


}, 12000)};