let admissionFormCount = 5;
//creating an array
let newAdmission = [];
let fullName;
let date = new Date();
for(let i =0; i<admissionFormCount; i++){
    fullName = prompt("Enter Your Full name");
    newAdmission.push(fullName);
}

//read
console.log("Admission on ",date.getDate(),"/", date.getMonth(),"/",date.getFullYear());
console.log("New students name list:")
for(let value of newAdmission){
    console.log("\t",value);
}


//delete
let feesPendingList = [...newAdmission];
let i;
let yourName = prompt("Enter your name as per as admission form")
if (newAdmission.includes(yourName)) {
    console.log("Your name is available on the list , pay your fees here ");
    i = feesPendingList.indexOf(yourName);
    delete feesPendingList[i];
} else {
    console.log("Your application is pending , wait for some time");
    
}
console.log(feesPendingList);




