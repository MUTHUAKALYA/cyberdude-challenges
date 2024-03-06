// creating new object

const internsUserName = [
  "mushkir",
  "mshajid",
  "gayathrihg",
  "yrd369",
  "swethadsalvatore",
  "muthukumarimoorthi",
  "riyaz1000",
  "hema-venkat3",
  "bearcin46",
  "suriyamassmsd",
  "dineshdevelope",
  "jeya-rosini",
  "muthuakalya",
  "vedhatech002",
  "danielace1",
  "sharif-22",
  "kishorekumar-kp",
];

function fetchIntens(user) {
  const api = `https://api.github.com/users/${user}`;
  fetch(api)
    .then((response) => response.json())
    .then((data) => {
      const cardContainerEl = document.getElementById("card-container");
      const cardEl = document.createElement("div");
      cardEl.className = "cardel";
      cardEl.innerHTML = `
        <img src="${data.avatar_url}"  alt="${data.login}-image" class="imgel">
          <h3 class="username">${data.name} </h3>
           <span class="role">Full Stack Engineer</span> 
           <span class="location">${
             data.location ? data.location : "Tamilnadu , India"
           }</span>
           <div class="details">
           <div class="followersel">
           <span>${data.followers}</span>
           <span>Followers</span>
           </div>
           <div class="followersel">
           <span>${data.public_repos}</span>
           <span>Public Repositories</span>
           </div>
           </div>
          <div class="buttonContainer">
          <button class="button"><a href="${
            data.html_url
          }" target="_blank">View Github</a></button>
          <button class="button"><a href="https://github.com/${
            data.login
          }?tab=repositories" target="_blank">View All Repositories</a></button>
          </div>
            `;
      cardContainerEl.append(cardEl);
    });
}

// The following code uses XMLHttpRequest (yes,its going to be deprecated . Working on this method to get familiar with what is been used before the introduction of fetch)

// Variable cannot be accessed, XHR (based on callbacks not promises)

// function fetchIntens(user) {
//   const xhr = new XMLHttpRequest();
//   xhr.onreadystatechange = function () {
//     if (this.readyState === 4 && this.status === 200) {
//       const data = JSON.parse(xhr.responseText);
//       console.log(data.avatar_url);

//       const cardContainerEl = document.getElementById("card-container");
//       const cardEl = document.createElement("div");
//       cardEl.className = "cardel";
//       cardEl.innerHTML = `
//     <img src="${data.avatar_url}"  alt="${data.login}-image" class="imgel">
//       <h3 class="username">${data.name} </h3>
//     <span class="role">Full Stack Engineer</span>
//        <span class="location">${data.location}</span>
//        <div class="details">
//        <div class="followersel">
//        <span>${data.followers}</span>
//        <span>Followers</span>
//        </div>
//        <div class="followersel">
//        <span>${data.public_repos}</span>
//        <span>Public Repositories</span>
//        </div>
//        </div>
//        <button class="button"><a href="${data.html_url}" target="_blank">View - Github</a></button>
//         `;
//       cardContainerEl.append(cardEl);
//     }
//   };
//   xhr.open("GET", `https://api.github.com/users/${user}`);
//   xhr.send();
// }

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
