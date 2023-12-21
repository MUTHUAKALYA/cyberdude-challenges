(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const n=document.forms["Souvenir-details"],m=document.getElementById("submit-button"),a=document.getElementById("outputContent"),c=document.getElementById("output");document.getElementById("studentElerror");document.addEventListener("DOMContentLoaded",()=>{c.style.display="none"});m.addEventListener("click",i=>{i.preventDefault();const s=n.elements.studentname.value,l=n.elements.register.value,r=n.elements.dob.value,e=n.elements.mobile.value,t=n.elements.gmail.value,o=n.elements.Address.value,u=n.elements.District.value;if(s.length>0&&l.length>0&&r.length>0&&e.length>0&&t.length>0&&o.length>0&&u.length>0){const d=`
            <p><strong>Full Name</strong> : ${s}</p>
            <p><strong>Register Number</strong> : ${l}</p>
            <p><strong>DOB</strong> : ${r}</p>
            <p><strong>Mobile Number</strong> : ${e}</p>
            <p><strong>Gmail</strong> : ${t}</p>
            <p><strong>Address</strong> : ${o}</p>
            <p><strong>District</strong> : ${u}</p>
        `;a.innerHTML=d,n.style.display="none",c.style.display="block"}});
