let studentDetails = [
    {
        studentName: "Mathumitha",
        rollNo: 11,
        city: "Tirunelveli",
        mobileNo: 1234567890,
        gmailId: "mathumitha@gmail.com"
    },
    {
        studentName: "Malathika",
        rollNo: 12,
        city: "Thiruvenkadam",
        mobileNo: 1234567890,
        gmailId: "malathika@gmail.com"
    },
    {
        studentName: "Karthika",
        rollNo: 13,
        city: "karaikudi",
        mobileNo: 1234567890,
        gmailId: "karthika@gmail.com"
    },
    {
        studentName: "Amala",
        rollNo: 14,
        city: "Rameshwaram",
        mobileNo: 1234567890,
        gmailId: "amala@gmail.com"
    }
]

//for loop
// for(let i = 0; i<studentDetails.length; i++){
//     console.log(studentDetails[i])
// }

//for each
// studentDetails.forEach(function(student){
//     for(let key in student){
//         console.log(student[key])
//     }
// })

//for-of
// for(let student of studentDetails){
//    for(let key in student){
//     console.log(student[key])
//    }
// }





//while loop
// let i=0;
// while(i<studentDetails.length){
//     console.log(studentDetails[i]);
//     i++;
// }

//do-while loop
let i=0;
do{
    console.log(studentDetails[i])
}while(i<studentDetails.length)