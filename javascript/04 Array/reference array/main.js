
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





