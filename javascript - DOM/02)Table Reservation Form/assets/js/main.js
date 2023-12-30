import JustValidate from 'just-validate';
const formEl = document.getElementById('table-reservation-form')


const validateForm = new JustValidate(formEl, {
    validateBeforeSubmitting: true
});

// formEl.addEventListener("submit",()=>{
//     validateForm.onSuccess((e)=>{
//         const formData = new FormData(formEl);

//         for (const value of formData.values()) {
//             console.log(value)
//         }


//         // console.log(formData.entries());
//     });
//     return false;
// })

// const formData = new FormData(formEl);
// console.log(formData)

// for(const value of formData.values()){
//     console.log(value)
// }