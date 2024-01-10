// creating new object

const internsUserName = [
"muthukumarimoorthi",
"mshajid",
"swethadsalvatore",
"mushkir",
"gayathrihg",
"yrd369",
"esakki2104prsnl",
  "Vk2401",
  "suriyamassmsd",
  "riyaz1000",
  "hema-venkat3",
  "bearcin46",
  "dineshdevelope",
  "jeya-rosini",
  "muthuakalya",
  "vedhatech002",
  "danielace1",
  "sharif-22",
  "kishorekumar-kp",
];

// Variable cannot be accessed, XHR (based on callbacks not promises)

function fetchIntens(user) {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const data = JSON.parse(xhr.responseText);
      console.log(data.avatar_url);

      const cardContainerEl = document.getElementById("card-container");
      const cardEl = document.createElement("div");
      cardEl.className = "cardel";
      cardEl.innerHTML = `
    <img src="${data.avatar_url}"  alt="${data.login}-image" class="imgel">
      <h3 class="username">${data.name} </h3>
    <span class="role">Full Stack Engineer</span>
       <span class="location">${data.location}</span>
       <button class="button"><a href="${data.html_url}" target="_blank">View - Github</a></button>
        `;
      cardContainerEl.append(cardEl);
    }
  };
  xhr.open("GET", `https://api.github.com/users/${user}`);
  xhr.send();
}

internsUserName.forEach((intern) => fetchIntens(intern));
console.log(internsUserName);

// internsUserName.forEach((username) => {
//   // passing link as a parameter
//   const apiurl = `https://api.github.com/users/${username}`;

//   // opening a link
//   xhr.open("GET", apiurl, true);

//   // getting the responsetext from the link
//   xhr.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//       const data = JSON.parse(xhr.responseText);
//       console.log(data);
//       const cardContainerEl = document.getElementById("card-container");
//       const cardEl = document.createElement("div");
//       cardEl.className = "cardel";
//       cardEl.innerHTML = `
//        <img src="${data.avatar_url}"  alt="${data.login}-image" class="imgel">
//        <h3 class="username">${data.name} </h3>
//        <span class="role">Full Stack Engineer</span>
//        <span class="location">${data.location}</span>
//        <button class="button"><a href="${data.html_url}" target="_blank">View - Github</a></button>
//        `;
//       cardContainerEl.append(cardEl);
//     }
//   };
//   xhr.send();
// });

// send request to server

// internsRepos("MUTHUAKALYA");

// "suriyamassmsd",
//   "riyaz1000",
//   "hema-venkat3",
//   "yrd369",
//   "mushkir",
//   "bearcin46",
//   "dineshdevelope",
//   "jeya-rosini",
//   "swethadsalvatore",
//   "mshajid",
//   "muthuakalya",
//   "vedhatech002",
//   "danielace1",
//   "sharif-22",
//   "gayathrihg",
//   "kishorekumar-kp",
//   "muthukumarimoorthi"
