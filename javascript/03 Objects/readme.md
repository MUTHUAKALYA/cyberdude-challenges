# Object (Javascript Challenge)
This challenge is part of free internship (Fullstack Engineer) offered by [CyberDude Networks Pvt. Ltd.](https://cyberdudenetworks.com) You can find all the source code and live links below.

> Task #1: Create a object and perform crud operation

```js
// Paste your code here
const akalya = {
    fullName: "Muthu Akalya",
    age: 21,
    mailId:'akalyaa222@gmail.com',
    isworking: true,
    favColor: "black",
    languages: ['telugu', 'tamil', 'english'],
    hobbies: ["drawing", "cooking"],
    address: {
        state: "Tamil Nadu",
        district: "Thoothukudi",
        pincode: 854732
    },
    details: function () {
        return (`Hello!!
        
    I'm ${this.fullName} from ${this.address.district} 

    I'm ${this.age} years old 

    I'm an ${this.education} graduate 

    My favorite color is ${this.favColor}

    I speak ${this.languages}

    My hobbies are ${this.hobbies}

    My favorite choclates are ${this.favfoods.choclates}
        
    My favorite fruit is ${this.favfoods.fruit}
        
    My favorite food items are ${this.favfoods.varietyRice} & ${this.favfoods.sweets}
        `
        )
    }
}



//add
akalya.education = "Engineering";
akalya.favfoods = {
    choclates: ["snickers", "bounty", "ferrero rocher"],
    sweets: ["rasagula", "paalkova", "Boondhi"],
    fruit: "apple",
    varietyRice: ["Curd rice", "Bisibelebath", "tomato rice"]
}

// console.log(`I am an ${akalya.education},My favorite choclates are ${akalya.favfoods.choclates}`);

//delete
delete akalya.mailId;
// console.log(akalya)

// //update
akalya.favfoods.sweets.push("kaju katli")
// console.log(akalya.favfoods.sweets)


// //read
console.log(akalya.details())
```

<!-- ### Live link -> 
Deploy it and put the link here. -->


## Acknowledgement:
 - I would like to express my gratitude [Bearclin SWeety](https://github.com/bearcin46) [Github-profile] for helping me to understand objects better.

## References:

Paste the `YOUTUBE_VIDEO_ID_HERE` with the video id.
```md
[![IMAGE ALT TEXT](http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg)](http://www.youtube.com/watch?v=YOUTUBE_VIDEO_ID_HERE "Video Title")
```
Attachments area
