//getting elements from html
const formContainerEl = document.forms["Souvenir-details"];
const submitButtonEl = document.getElementById("submit-button");
const outputContentEl = document.getElementById("outputContent");
const outputEl = document.getElementById("output");
const thankyouEl = document.getElementById("thankyou");
const secondSubmitButtonEl = document.getElementById("secondSubmit");
const errorMessageEl = document.getElementById("errorMessage");
const formInputEl = document.getElementsByClassName("form-input");

//adding eventlistner
document.addEventListener("DOMContentLoaded", () => {
  outputEl.style.display = "none";
  thankyouEl.style.display = "none";
  errorMessageEl.style.display = "none";
});

//adding event listner for submit button
submitButtonEl.addEventListener("click", (e) => {
  //preventing refresh
  e.preventDefault();
  //getting form elements from html
  const studentNameEls = formContainerEl.elements.studentname.value;
  const registerNumEls = formContainerEl.elements.register.value;
  const dobEls = formContainerEl.elements.dob.value;
  const mobileNumberEls = formContainerEl.elements.mobile.value;
  const gmailEls = formContainerEl.elements.gmail.value;
  const addressEls = formContainerEl.elements.Address.value;
  const districtEls = formContainerEl.elements.District.value;

  const studentnameEl = document.getElementById("firstDiv");
  //validation conditions
  if (
    studentNameEls.length > 0 &&
    registerNumEls.length > 0 &&
    dobEls.length > 0 &&
    mobileNumberEls.length > 0 &&
    gmailEls.length > 0 &&
    addressEls.length > 0 &&
    districtEls.length > 0
  ) {
    errorMessageEl.style.display = "none";

    const uiOutput = `

    <table class="w-2xl">

    <tr>
    <th class="w-[45%] text-red-700"><strong>Full Name</strong></th>
    <td>${studentNameEls}</td>
    </tr>

    <tr>
    <th><strong>DOB</strong></th>
    <td>${dobEls}</td>
    </tr>


    <tr>
    <th><strong>Mobile Number</strong></th>
    <td>${mobileNumberEls}</td>
    </tr>

    <tr>
    <th><strong>Gmail</strong></th>
    <td>${gmailEls}</td>
    </tr>

    <tr>
    <th><strong>Address</strong></th>
    <td>${addressEls}</td>
    </tr>

    <tr>
    <th><strong>District</strong></th>
    <td>${districtEls}</td>
    </tr>


    </table>
       
       
        `;
    outputContentEl.innerHTML = uiOutput;
    formContainerEl.style.display = "none";
    outputEl.style.display = "block";
  } else {
    errorMessageEl.style.display = "block";
  }
});
//adding event listner for second submit button
secondSubmitButtonEl.addEventListener("click", () => {
  outputEl.style.display = "none";
  errorMessageEl.style.display = "none";
  thankyouEl.style.display = "block";
});
