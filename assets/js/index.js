const closeBtn = document.getElementById("close-form-btn");
const form = document.getElementById("form-wrapper");
const floatingBtn = document.getElementById("floating-btn");

closeBtn.addEventListener("click", () => {
  form.classList.add("d-none");
});

// Show form when the floating button is clicked
floatingBtn.addEventListener("click", () => {
  form.classList.remove("d-none");
});

setInterval(() => {
  if (form.classList.contains("d-none")) {
    form.classList.remove("d-none");
    form.classList.add("d-flex");
  }
}, 10000);

// Handle form submission
function showToast(message, type) {
  const toastContainer = document.querySelector("#toast-container");
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.textContent = message;
  toastContainer.appendChild(toast);

  // Show the toast
  setTimeout(() => {
    toast.classList.add("show");
  }, 100);

  // Hide and remove the toast after 3 seconds
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => {
      toast.remove();
    }, 500); // Allow time for fade-out before removing
  }, 3000);
}

let myform = document.querySelector("#contact-form");
let secondForm = document.querySelector("#second-form");

secondForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let data = new FormData(secondForm);

  fetch(
    "https://script.google.com/macros/s/AKfycbzuBgMBkQur3NNsGjzLMhBgexvotYor4SWllPvTR7aaopECmRbcmRGmgxuZM7kjr3oMvA/exec",
    {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    }
  )
    .then((res) => res.text())
    .then((data) => {
      secondForm.reset();
      showToast("Form submitted successfully!", "success");
    })
    .catch((error) => {
      console.error("Error:", error);
      showToast(
        "There was an error submitting the form. Please try again.",
        "error"
      );
    });
});


myform.addEventListener("submit", (e) => {
  e.preventDefault();
  let data = new FormData(myform);

  fetch(
    "https://script.google.com/macros/s/AKfycbzuBgMBkQur3NNsGjzLMhBgexvotYor4SWllPvTR7aaopECmRbcmRGmgxuZM7kjr3oMvA/exec",
    {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    }
  )
    .then((res) => res.text())
    .then((data) => {
      myform.reset();
      form.classList.add('d-none');
      showToast("Form submitted successfully!", "success");
    })
    .catch((error) => {
      console.error("Error:", error);
      showToast(
        "There was an error submitting the form. Please try again.",
        "error"
      );
    });
});
