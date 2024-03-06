(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const a=["mushkir","mshajid","gayathrihg","yrd369","swethadsalvatore","muthukumarimoorthi","riyaz1000","hema-venkat3","bearcin46","suriyamassmsd","dineshdevelope","jeya-rosini","muthuakalya","vedhatech002","danielace1","sharif-22","kishorekumar-kp"];function l(o){const r=`https://api.github.com/users/${o}`;fetch(r).then(t=>t.json()).then(t=>{const n=document.getElementById("card-container"),e=document.createElement("div");e.className="cardel",e.innerHTML=`
        <img src="${t.avatar_url}"  alt="${t.login}-image" class="imgel">
          <h3 class="username">${t.name} </h3>
           <span class="role">Full Stack Engineer</span> 
           <span class="location">${t.location?t.location:"Tamilnadu , India"}</span>
           <div class="details">
           <div class="followersel">
           <span>${t.followers}</span>
           <span>Followers</span>
           </div>
           <div class="followersel">
           <span>${t.public_repos}</span>
           <span>Public Repositories</span>
           </div>
           </div>
          <div class="buttonContainer">
          <button class="button"><a href="${t.html_url}" target="_blank">View Github</a></button>
          <button class="button"><a href="https://github.com/${t.login}?tab=repositories" target="_blank">View All Repositories</a></button>
          </div>
            `,n.append(e)})}a.forEach(o=>l(o));console.log(a);
