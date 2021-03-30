

function validateForm() {
  if (
    document.getElementById("fullname").value.length > 0 &&
    document.getElementById("topic").value.length > 0 &&
    document.getElementById("message").value.length > 0 &&
    document.getElementById("email").value.length > 0 &&
    document.getElementById("email").validity.valid
  ) {
    document.getElementById("myContactForm").disabled = false;
    document.getElementById("invalidEmail").innerHTML = "";
  } else if (!document.getElementById("email").validity.valid) {
    document.getElementById("invalidEmail").innerHTML =
      "Please enter a valid email address";
  } else {
    document.getElementById("myContactForm").disabled = true;
  }
}

function showSubmittedText() {
  if (
    document.getElementById("fullname").value.length > 0 &&
    document.getElementById("topic").value.length > 0 &&
    document.getElementById("message").value.length > 0 &&
    document.getElementById("email").value.length > 0 &&
    document.getElementById("email").validity.valid
  ) {
    window.alert("Thank you! your form has been submited");
  }
}
// clock function
function runClock() {
  var now = new Date();
  var hour = now.getHours() % 12;
  var min = now.getMinutes();
  var sec = now.getSeconds();

  var clock = document.querySelector("div.clock");
  var hourHand = clock.querySelector("div.hour");
  var minHand = clock.querySelector("div.minute");
  var secHand = clock.querySelector("div.second");

  var hourRotation = 30 * hour; // 360/12
  var minRotation = 6 * min; // 360/60
  var secRotation = 6 * sec; //360/60

  hourHand.style.transform = "rotate(" + hourRotation + "deg)";
  minHand.style.transform = "rotate(" + minRotation + "deg)";
  secHand.style.transform = "rotate(" + secRotation + "deg)";

  requestAnimationFrame(runClock);
}

runClock();
