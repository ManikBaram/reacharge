let generatedOTP = "";

function generateOTP() {
  const mobile = document.getElementById("mobile").value;
  const plan = document.getElementById("plan").value;

  if (!/^[6-9]\d{9}$/.test(mobile)) {
    alert("Enter valid mobile number");
    return;
  }

  if (plan === "") {
    alert("Please select recharge plan");
    return;
  }

  generatedOTP = Math.floor(100000 + Math.random() * 900000);
  alert("OTP (Demo): " + generatedOTP);

  document.getElementById("otpSection").classList.remove("hidden");
  document.getElementById("message").innerText =
    "OTP sent to registered mobile number";
}

function verifyOTP() {
  const otp = document.getElementById("otpInput").value;

  if (otp === generatedOTP.toString()) {
    document.getElementById("paymentSection").classList.remove("hidden");
    document.getElementById("message").innerText =
      "OTP verified successfully";
  } else {
    alert("Invalid OTP");
  }
}

function pay() {
  document.getElementById("message").innerText =
    "Recharge successful. Thank you!";
}
