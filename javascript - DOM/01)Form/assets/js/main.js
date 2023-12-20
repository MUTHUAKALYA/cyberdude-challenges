const formContainerEl=document.getElementById("form-container");
const studentNameEl=document.getElementById("studentname");
const registerNumEl=document.getElementById("register-no");
const dobEl=document.getElementById("dob");
const mobileNumberEl=document.getElementById("mobile-no");
const gmailEl=document.getElementById("gmail");
const addressEl=document.getElementById("Address");
const districtEl=document.getElementById("District");
const submitButtonEl=document.getElementById("submit-button");



submitButtonEl.addEventListener("click",(e)=>{
    console.log(studentNameEl.value)
    console.log(registerNumEl.value)
    console.log(dobEl.value);
    console.log(mobileNumberEl.value)
    console.log(gmailEl.value)
    console.log(addressEl.value)
    console.log(districtEl.value)
    e.preventDefault()
})
