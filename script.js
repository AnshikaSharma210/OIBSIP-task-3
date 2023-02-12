function tempconvert() {
    const temperature = parseFloat(document.getElementById("degree").value);
    const preunit = document.getElementById("initunit").value;
    const unit = document.getElementById("finunit").value;
    let finaltemp;
    if (preunit === "C" && unit === "K") {
      finaltemp = (temperature + 273.15).toFixed(2);
    } else if (preunit === "C" && unit === "F") {
      finaltemp = (temperature * 9/5 + 32).toFixed(2);
    } else if (preunit === "C" && unit === "C") {
      finaltemp = temperature;
    } else if (preunit === "K" && unit === "C") {
      finaltemp = (temperature - 273.15).toFixed(2);
    } else if (preunit === "K" && unit === "F") {
      finaltemp = (temperature * 9/5 - 459.67).toFixed(2);
    } else if (preunit === "K" && unit === "K") {
      finaltemp = temperature;
    } else if (preunit === "F" && unit === "C") {
      finaltemp = ((temperature - 32) * 5/9).toFixed(2);
    } else if (preunit === "F" && unit === "K") {
      finaltemp = ((temperature + 459.67) * 5/9).toFixed(2);
    }
    else{
      finaltemp = temperature;
    }
    if(unit==="C"){
    document.getElementById("display").innerHTML = `${finaltemp}  &#8451 `;}
    else if(unit==="F"){
      document.getElementById("display").innerHTML = `${finaltemp}  &#8457 `;}
      else{
        document.getElementById("display").innerHTML = `${finaltemp}  K `;
      }
      }
  document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
    tempconvert();
  });