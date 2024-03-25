//JavaScript Geolocation
const x = document.getElementById("demo1");

function getLocation() {
  try {
    navigator.geolocation.getCurrentPosition(showPosition);
  } catch {
    x.innerHTML = err;
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
}

//JavaScript Validation
function myValidation() {
    const inpObj = document.getElementById("id1");
    if (!inpObj.checkValidity()) {
      document.getElementById("demo2").innerHTML = inpObj.validationMessage;
    } else {
      document.getElementById("demo2").innerHTML = "Input OK";
    } 
  } 

  //JavaScript overflow Validation
  function myValid() {
    let text;
    if (document.getElementById("id2").validity.rangeOverflow) {
      text = "Value too large";
    } else {
      text = "Input OK";
    } 
    document.getElementById("demo3").innerHTML = text;
  }
    //JavaScript Underflow Validation
    function  myUnder() {
        let text;
        if (document.getElementById("id3").validity.rangeUnderflow) {
          text = "Value too small";
        } else {
          text = "Input OK";
        } 
        document.getElementById("demo4").innerHTML = text;
      }
    //JavaScript History back() Method
    function myBack() {
        window.history.back();
      }

    //JavaScript History jumps back() Method
    function myJump() {
        window.history.go(-2);
      }

//JavaScript Web worker
let w;

function startWorker() {
  if(typeof(w) == "undefined") {
    w = new Worker("demo_workers.js");
  }
  w.onmessage = function(event) {
    document.getElementById("result").innerHTML = event.data;
  };
}

function stopWorker() { 
  w.terminate();
  w = undefined;
}



