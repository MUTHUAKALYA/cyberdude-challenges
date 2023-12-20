// const formContainerEl=document.getElementById("form-container");
// const studentNameEl=document.getElementById("studentname");
// const registerNumEl=document.getElementById("register-no");
// const dobEl=document.getElementById("dob");
// const mobileNumberEl=document.getElementById("mobile-no");
// const gmailEl=document.getElementById("gmail");
// const addressEl=document.getElementById("Address");
// const districtEl=document.getElementById("District");
// const submitButtonEl=document.getElementById("submit-button");

// const employeeIdEls = formEl.elements.employeeId.value

const formContainerEl = document.forms["Souvenir-details"]
const submitButtonEl=document.getElementById("submit-button");
const outputContentEl=document.getElementById("outputContent")
const outputEl = document.getElementById("output");

document.addEventListener("DOMContentLoaded",()=>{
    outputEl.style.display="none";
})

submitButtonEl.addEventListener("click",(e)=>{
    e.preventDefault();
    const studentNameEls=formContainerEl.elements.studentname.value;
    const registerNumEls=formContainerEl.elements.register.value;
    const dobEls=formContainerEl.elements.dob.value;
    const mobileNumberEls=formContainerEl.elements.mobile.value;
    const gmailEls=formContainerEl.elements.gmail.value;
    const addressEls=formContainerEl.elements.Address.value;
    const districtEls=formContainerEl.elements.District.value;
    console.log(registerNumEls)
    const uiOutput = `
            <p><strong>Full Name</strong> : ${studentNameEls}</p>
            <p><strong>Register Number</strong> : ${registerNumEls}</p>
            <p><strong>DOB</strong> : ${dobEls}</p>
            <p><strong>Mobile Number</strong> : ${mobileNumberEls}</p>
            <p><strong>Gmail</strong> : ${gmailEls}</p>
            <p><strong>Address</strong> : ${addressEls}</p>
            <p><strong>District</strong> : ${districtEls}</p>
        `;
        outputContentEl.innerHTML = uiOutput;
        formContainerEl.style.display="none"
        outputEl.style.display="block";
})







// const firstErrorMsgEl=document.getElementById("first-error");
// const secondErrorMsgEl=document.getElementById("second-error");
// const thirdErrorMsgEl=document.getElementById("third-error");
// const fourthErrorMsgEl=document.getElementById("fourth-error");
// const fifthErrorMsgEl=document.getElementById("fifth-error");
// const sixthErrorMsgEl=document.getElementById("sixth-error")
// const seventhErrorMsgEl=document.getElementById("seventh-error")
// document.addEventListener("DOMContentLoaded",()=>{
//     firstErrorMsgEl.style.display="none";
//     secondErrorMsgEl.style.display="none";
//     thirdErrorMsgEl.style.display="none";
//     fourthErrorMsgEl.style.display="none";
//     fifthErrorMsgEl.style.display="none";
//     sixthErrorMsgEl.style.display="none";
//     seventhErrorMsgEl.style.display="none";
    
// })

// submitButtonEl.addEventListener("click",(e)=>{
//      e.preventDefault();
//     if(studentNameEl === null || studentNameEl === ""){
//         firstErrorMsgEl.style.display="block"
//     }
//     else{
//         firstErrorMsgEl.style.display="none"
//     }
//     if(registerNumEl === null || registerNumEl === ""){
//         secondErrorMsgEl.style.display="block"
//     }
//     else{
//         secondErrorMsgEl.style.display="none"
//     }
//     if(dobEl === null ||dobEl === ""){
//         thirdErrorMsgEl.style.display="block"
//     }else{
//         thirdErrorMsgEl.style.display="none"
//     }
//     if(mobileNumberEl === null || mobileNumberEl === ""){
//         fourthErrorMsgEl.style.display="block"
//     }else{
//         fourthErrorMsgEl.style.display="none"
//     }
//     if(gmailEl.value === null || gmailEl.value === ""){
//         fifthErrorMsgEl.style.display="block"
//     }else{
//         fifthErrorMsgEl.style.display="none"
//     }
//     if(addressEl === null || addressEl === ""){
//         sixthErrorMsgEl.style.display="block"
//     }else{
//         sixthErrorMsgEl.style.display="none"
//     }
//     if(studentNameEl === null || studentNameEl === ""){
//         seventhErrorMsgEl.style.display="block"
//     }else{
//         seventhErrorMsgEl.style.display="none"
//     }
   
// })



// submitButtonEl.addEventListener("click",(e)=>{
//     console.log(studentNameEl.value)
//     console.log(registerNumEl.value)
//     console.log(dobEl.value);
//     console.log(mobileNumberEl.value)
//     console.log(gmailEl.value)
//     console.log(addressEl.value)
//     console.log(districtEl.value)
//     e.preventDefault()
// })
