(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const l=[{registerNumber:1911085,firstName:"Muthu Akalya",lastname:"A",image:"./images/firstone.png",tutorName:"Vivek anand",department:"ECE",DayScholar:!0,personalDetails:{mobileNumber:"8634906734",mailId:"akalya@gmail.com",address:"Thoothukudi"},languagesKnown:["Tamil","English","Telugu"]},{registerNumber:1911086,firstName:"Samyuktha",lastname:"R",image:"./images/secondone.png",tutorName:"Kaleesh",department:"ECE",DayScholar:!0,personalDetails:{mobileNumber:"7312563456",mailId:"samyuktha@gmail.com",address:"Madurai"},languagesKnown:["Tamil","English","korean"]},{registerNumber:1911087,firstName:"Anitha",lastname:"G",image:"./images/thirdone.png",tutorName:"Kaleesh",department:"ECE",DayScholar:!0,personalDetails:{mobileNumber:"7543785990",mailId:"anitha@gmail.com",address:"Kanyakumari"},languagesKnown:["Tamil","English","Malayalam"]},{registerNumber:191108,firstName:"Uma Raja Selvi",lastname:"R",image:"./images/lastone.png",tutorName:"Cammilus",department:"ECE",DayScholar:!0,personalDetails:{mobileNumber:"9994543267",mailId:"umarajaselvi@gmail.com",address:"Thoothukudi"},languagesKnown:["Tamil","English","urudu"]}],t=document.getElementById("detailsblock");console.log(t);l.forEach(a=>{const s=document.createElement("div");s.className="containerel ",s.innerHTML=`
    <div class="imgel">
    <img src="${a.image}" alt="firstpersone_image">
    </div>
    <div class="textel">
    <span><strong>First Name:</strong>${a.firstName}</span>
    <span><strong>Last Name:</strong>${a.lastname}</span>
    <span><strong>Register Number:</strong>${a.registerNumber}</span>
    <span><strong>Tutor Name:</strong>${a.tutorName}</span>
    <span><strong>Department:</strong>${a.department}</span>
    <span><strong>Dayscholar:</strong>${a.DayScholar}</span>
    <span><strong>Personal Details :</strong></span>
    <span><strong>Mobile Number:</strong>${a.personalDetails.mobileNumber}</span>
    <span><strong>Email Id:</strong>${a.personalDetails.mailId}</span>
    <span><strong>Address:</strong>${a.personalDetails.address}</span>
    <span><strong>Languages Known:</strong>${a.languagesKnown.join(", ")}</span>
    </div>`,t.append(s)});
