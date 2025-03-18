const emailForm = document.getElementById("emailForm");



const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

emailForm.addEventListener("submit", (e) => {
  e.preventDefault()

  const email = document.getElementById("email")
  const errorMessage = document.querySelector(".errorMessage")

  if (emailRegex.test(email.value)) {
    console.log("Email is Valid");
    errorMessage.textContent = "You've been notified via your email address :)";

    // errorMessage.style.display = "none"
    errorMessage.classList.remove("hidden")
    email.classList.add("border-paleBlue")
    email.classList.remove("border-lightRed")
    errorMessage.classList.remove("text-lightRed")
    errorMessage.style.color = "#4C7BF3"

  } else {
    if (email.value == "") {
      errorMessage.textContent = "Whoops! It looks like you forgot to add your email";
    } else {
      errorMessage.textContent = "please provide a valid email address";

    }
    errorMessage.style.display = "block";
    errorMessage.classList.remove("hidden");
    email.classList.add("border-lightRed")
    email.classList.remove("border-paleBlue")
  }

})