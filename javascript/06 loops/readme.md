# Loops (Javascript Challenge)
This challenge is part of free internship (Fullstack Engineer) offered by [CyberDude Networks Pvt. Ltd.](https://cyberdudenetworks.com) You can find all the source code and live links below.

> Task #2:  Create a Array of objects and loop through it. Discuss about various looping

```js
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
```

<!-- ### Live link -> 
Deploy it and put the link here. -->


## Acknowledgement:
 - I would like to express my gratitude to [Yogha Raj Dhayal] for helping me .

## References:

Paste the `YOUTUBE_VIDEO_ID_HERE` with the video id.
```md
[![IMAGE ALT TEXT](http://img.youtube.com/vi/xG5IUyZvbDk/0.jpg)](http://www.youtube.com/watch?v=xG5IUyZvbDk "#28 - JavaScript Switch-case (With Examples) - (தமிழில்) (Tamil) | JavaScript Course")
```
Attachments area