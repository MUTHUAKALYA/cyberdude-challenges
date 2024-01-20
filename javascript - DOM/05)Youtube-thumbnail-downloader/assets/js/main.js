const inputEl = document.getElementById("youtubeInput");
const buttonEl = document.getElementById("searchButton");

buttonEl.addEventListener("click", (e) => {
  e.preventDefault();
  const videoID = inputEl.value;
  videoIDEl.contains("v=")
  //   trimming the videoid of the youtube url


  //playlist browser url -https://www.youtube.com/watch?v=4DkNCgUXbig&list=RDEMlr0BH1pM2cputhVM9u_tuQ&start_radio=1&rv=22bLNq6iCjU
    const videoIDEl = videoID.slice(videoID.indexOf("?v=")+3, videoID.indexOf("&"))
    console.log(videoIDEl);


  // playlist - copy video url -> https://youtu.be/4DkNCgUXbig?list=RDEMlr0BH1pM2cputhVM9u_tuQ
//   const videoIDEl = videoID.slice(videoID.lastIndexOf("/")+1, videoID.indexOf("?"))
//   console.log(videoIDEl)


//video -> copy video url https://youtu.be/2TiqBM1Ri-Y
// const videoIDEl = videoID.substring(videoID.lastIndexOf("/")+1);
// console.log(videoIDEl);


// video -> browser url https://www.youtube.com/watch?v=2TiqBM1Ri-Y
// const videoIDEl = videoID.slice(videoID.indexOf("v=")+2)
// console.log(videoIDEl)

  const thumbnaillinkEl = document.getElementById("thumbnaillink");
  const beforereplace = thumbnaillinkEl.textContent.replace(
    "[VIDEO_ID]",
    videoIDEl
  );
  window.open(beforereplace);
  console.log(beforereplace);
});

// const videoID = inputEl.value;
//   const videoIDEl = videoID.substring(videoID.lastIndexOf("/") + 1);
//   console.log(videoIDEl);
//   const thumbnaillinkEl = document.getElementById("thumbnaillink");
//   const beforereplace = thumbnaillinkEl.textContent.replace(
//     "[VIDEO_ID]",videoIDEl
//   );
//   window.open(beforereplace)
//   console.log(beforereplace);

// const str = 'https://www.youtube.com/watch?v=UlkK-vWX7y8';
// const substr = '?v=';
// const yvideoId = str.substring(str.indexOf(substr)+3);
// console.log(yvideoId)


var text = 'this is some sample text';
var values = ['sample', 'anything'];
const result = contains(text,values)
