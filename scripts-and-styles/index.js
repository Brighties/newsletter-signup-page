document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded");

  // chamging the image src when the screen is smaller

  // grab the value of the current screen size
  const screenWidth = window.innerWidth;
  const newsletterImage = document.querySelector(".newsletter-page-image");
  console.log(screenWidth);
  if (screenWidth <= 600 && newsletterImage) {
    newsletterImage.src = "./assets/images/illustration-sign-up-mobile.svg";
  }

  // email input field logic
  let emailAddress = "";
  const emailInputField = document.querySelector("#email-input-field");
  const submitBtn = document.querySelector(".submit-button");

  // popup message in case of invalid email addresses
  const popupMessage = document.querySelector(".popup-message");
  const popupMessageText = document.querySelector(".popup-message-content");
  const emailRegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const updateEmailAddress = () => {
    emailInputField.classList.remove("invalid-email-address");
    emailAddress = emailInputField.value.trim();
    popupMessage.classList.remove("visible");
  };
  emailInputField.addEventListener("input", updateEmailAddress);
  emailInputField.addEventListener("change", updateEmailAddress);

  // Click event listener for the submit button
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    // Check email validity before redirecting
    if (emailRegExp.test(emailAddress)) {
      console.log("Redirecting to success page");
      window.location.href = `./pages/success-page.html?email=${encodeURIComponent(
        emailAddress
      )}`;
    } else {
      emailInputField.classList.add("invalid-email-address");
      popupMessageText.textContent = "Valid email required";
      popupMessage.classList.add("visible");
    }
  });
});
