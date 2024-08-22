import{S as m}from"./assets/vendor-CgTBfC_f.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const r of e.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function s(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function n(t){if(t.ep)return;t.ep=!0;const e=s(t);fetch(t.href,e)}})();function d(i){const o="45559560-5df08bb83c1629c82dd907879";i.preventDefault();const n=i.target.elements.picture.value.trim(),t="https://pixabay.com/api/?key="+o+"&q="+encodeURIComponent(n);fetch(t).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>{const r=document.querySelector(".image-gallery");if(r.innerHTML="",e.hits.length>0){const c=e.hits.map(l=>{const{webformatURL:a,largeImageURL:u,tags:f}=l;return`
              <li class="gallery-item">
                <a class="gallery-link" href="${u}">
                  <img 
                    class="gallery-image" 
                    src="${a}"
                    alt="${f}"
                    width="300px"
                  />
                </a>
              </li>`}).join("");r.innerHTML=c,new m(".gallery-link",{captionsData:"alt",captionDelay:250})}else r.innerHTML="<p>No images found.</p>"}).catch(e=>console.log("Error:",e))}const p=document.querySelector(".form");document.querySelector(".submit-btn");p.addEventListener("submit",d);
//# sourceMappingURL=commonHelpers.js.map
