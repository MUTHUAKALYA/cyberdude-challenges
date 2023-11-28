# Primitive array (Javascript Challenge)
This challenge is part of free internship (Fullstack Engineer) offered by [CyberDude Networks Pvt. Ltd.](https://cyberdudenetworks.com) You can find all the source code and live links below.

> Task #2: Create a primitive array and perform CRUD operations

```js
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
```

<!-- ### Live link -> 
Deploy it and put the link here. -->


## Acknowledgement:
 - I would like to express my gratitude to
 [Mr.Shajid Shafee](https://github.com/mshajid) [Github-profile] for helping me to solve my problems.

## References:

Paste the `YOUTUBE_VIDEO_ID_HERE` with the video id.
```md
[![IMAGE ALT TEXT](http://img.youtube.com/vi/xG5IUyZvbDk/0.jpg)](http://www.youtube.com/watch?v=xG5IUyZvbDk "#28 - JavaScript Switch-case (With Examples) - (தமிழில்) (Tamil) | JavaScript Course")
```
Attachments area
