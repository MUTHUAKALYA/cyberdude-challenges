# Reference Array (Javascript Challenge)
This challenge is part of free internship (Fullstack Engineer) offered by [CyberDude Networks Pvt. Ltd.](https://cyberdudenetworks.com) You can find all the source code and live links below.

> Task #2: Create a reference array and perform CRUD operation

```js

//creating an array
let students = [{
    id:1,
    fullname:"amala",
    livesin:"India"
},
{
    id:2,
    fullname:"vimala",
    livesin:"India"
},
{
    id:3,
    fullname:"radha",
    livesin:"India"
}
];

// add
students.push({id:4,fullname:"sneha",livesin:"india"}, {id:5,fullname:"sree",livesin:"india",pincode:123456})

console.log(students)

//update & delete
students.find(function(student){
    if (student.fullname === "sree")
    student.fullname = "sreekala"
    delete student.pincode
    }
)
console.log(students)
```

<!-- ### Live link -> 
Deploy it and put the link here. -->


## Acknowledgement:
 - I would like to express my gratitude to [Mr.Shajid Shafee](https://github.com/mshajid) - [Github profile] for helping me .

## References:

Paste the `YOUTUBE_VIDEO_ID_HERE` with the video id.
```md
[![IMAGE ALT TEXT](http://img.youtube.com/vi/xG5IUyZvbDk/0.jpg)](http://www.youtube.com/watch?v=xG5IUyZvbDk "#28 - JavaScript Switch-case (With Examples) - (தமிழில்) (Tamil) | JavaScript Course")
```
Attachments area
