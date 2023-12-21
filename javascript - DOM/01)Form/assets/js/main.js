
const formContainerEl = document.forms["Souvenir-details"]
const submitButtonEl=document.getElementById("submit-button");
const outputContentEl=document.getElementById("outputContent")
const outputEl = document.getElementById("output");
const thankyouEl= document.getElementById("thankyou")
const secondSubmitButtonEl=document.getElementById("secondSubmit")

console.log(secondSubmitButtonEl);

document.addEventListener("DOMContentLoaded",()=>{
    outputEl.style.display="none";
    thankyouEl.style.display="none";
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
    //validation conditions
    

    if((studentNameEls.length>0 && registerNumEls.length>0 && dobEls.length>0 && mobileNumberEls.length>0 && gmailEls.length>0 && addressEls.length>0 && districtEls.length>0)){
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
    }

    
})

secondSubmitButtonEl.addEventListener("click",()=>{
    outputEl.style.display="none";
    thankyouEl.style.display="block";
})









