(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const u of t.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&l(u)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const i=document.getElementById("button");console.log(i);const n=document.getElementById("nameform");console.log(n);const m=n.elements[0];console.log(m);const p=n.elements[1];console.log(p);const s=n.elements[2];console.log(s);const d=n.elements.addbutton;console.log(d);const c=n.elements[4];console.log(c);const g=document.getElementById("addName");document.getElementById("chips");s.addEventListener("keyup",a=>{if(a.preventDefault(),s.value!==""){d.removeAttribute("disabled"),d.classList.add("hover:bg-pink-200");for(let o=0;o<s.value;o++){const r=`<input
   type="text"
   name="${o+1}personname"
   id="${o+1}personname"
   placeholder="Name"
   id="nameoftheevent"
   class="py-3 px-5 rounded-lg outline-none text-gray-400 text-md "
   autocomplete="off"
   required
 />`;g.innerHTML+=r}}else d.setAttribute("disabled",null),d.classList.remove("hover:bg-pink-200")});n.addEventListener("keyup",()=>{m.value!==""&&p.value!==""&&s.value!==""&&c.value!==""?(i.removeAttribute("disabled"),i.classList.add("hover:bg-pink-200")):(i.setAttribute("disabled",null),i.classList.remove("hover:bg-pink-200"))});n.addEventListener("submit",a=>{a.preventDefault(),window.alert("form submitted succesfully"),console.log(c.value/s.value);const o=new FormData(n),r=Object.fromEntries(o.entries());console.log(r);const l=[],e=localStorage.getItem("splitAmountData"),t=JSON.parse(e);t?(t.push(r),localStorage.setItem("splitAmountData",JSON.stringify(t))):(l.push(r),localStorage.setItem("splitAmountData",JSON.stringify(l))),n.reset(),window.location.reload()});function b(){const a=localStorage.getItem("splitAmountData"),o=JSON.parse(a);if(console.log(o),o&&o.length>0){bookingListCard.style.display="block";const r=document.getElementById("bookingListTable");r.innerHTML="";const l=o.map((e,t)=>(console.log(e),`
        <tr>
                  <td class="py-2 px-4  border border-darkPrimaryColor">${t+1}</td>
                 
                  <td class="py-2 px-4 border border-darkPrimaryColor">${e.nameoftheevent}</td>
                  <td class="py-2 px-4 border border-darkPrimaryColor">${e.totalamount}</td>

                  <td class="py-2 px-4 border border-darkPrimaryColor">${e.personname}</td>

                  <td class="py-2 px-4 border border-darkPrimaryColor">${c.value/s.value}</td>

                  <td class="py-2 px-4 border border-darkPrimaryColor"> <button type="submit" class=" deleteBtn px-3 py-2 rounded bg-darkPrimaryColor hover:bg-lightPrimaryColor hover:text-black text-gray-100 font-bold">Delete </button>
                  </td>
                 
                </tr>                  
        `)).join(" ");console.log(l),r.innerHTML+=l}else localStorage.removeItem("bookingData"),bookingListCard.style.display="none",console.log(" Not booked Yet ..!")}b();
