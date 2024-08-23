import{S as c}from"./assets/vendor-CgTBfC_f.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const i of e.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function n(t){if(t.ep)return;t.ep=!0;const e=s(t);fetch(t.href,e)}})();const l="45559560-5df08bb83c1629c82dd907879";function a(o,r){o.preventDefault();const n=o.target.elements.picture.value.trim(),t="https://pixabay.com/api/?key="+l+"&q="+encodeURIComponent(n)+"&per_page=45";fetch(t).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>{r(e)}).catch(e=>console.log("Error:",e))}function u(o){const r=document.querySelector(".image-gallery");if(r.innerHTML="",o.hits.length>0){const s=o.hits.map(n=>{const{webformatURL:t,largeImageURL:e,tags:i,views:m,downloads:d,likes:p,comments:g}=n;return`
          <li class="gallery-item">
            <a class="gallery-link" href="${e}">
              <img 
                class="gallery-image" 
                src="${t}"
                alt="${i}"
              />
            </a>
          </li>`}).join("");r.innerHTML=s,new c(".gallery-link",{captionsData:"alt",captionDelay:250})}else r.innerHTML="<p>No images found.</p>"}const f=document.querySelector(".form");f.addEventListener("submit",o=>a(o,u));
//# sourceMappingURL=commonHelpers.js.map
