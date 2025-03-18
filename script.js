const emailForm = document.getElementById("emailForm");



const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

emailForm.addEventListener("submit", (e) => {
  e.preventDefault()

  const email = document.getElementById("email")
  const errorMessage = document.querySelector(".errorMessage")

  if (emailRegex.test(email.value)) {
    console.log("Email is Valid");
    errorMessage.style.display = "none"
    errorMessage.classList.remove("hidden")
  } else {
    errorMessage.style.display = "block";
    errorMessage.classList.add("hidden");
    email.classList.add("border-lightRed")
    email.classList.remove("border-paleBlue")

  }

})