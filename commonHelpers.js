import{S as u,i as f}from"./assets/vendor-BrddEoy-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const y="45559560-5df08bb83c1629c82dd907879";function g(i){const o="https://pixabay.com/api/?key="+y+"&q="+encodeURIComponent(i)+"&per_page=45&image_type=photo&orientation=horizontal&safesearch=true";return fetch(o).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).catch(r=>console.log("Error:",r))}function p(i){const o=document.querySelector(".image-gallery"),r=i.hits.map(s=>{const{webformatURL:e,largeImageURL:t,tags:n,views:l,downloads:c,likes:d,comments:m}=s;return`
          <li class="gallery-item">
            <a class="gallery-link" href="${t}">
              <img 
                class="gallery-image" 
                src="${e}"
                alt="${n}"
              />
            </a>
            <div class="overlay">
            <div class="info">
                <div class="overlay-item">Likes<br>${d}</div>
                <div class="overlay-item">Views<br>${l}</div>
                <div class="overlay-item">Comments<br>${m}</div>
                <div class="overlay-item">Downloads<br>${c}</div>
                </div>
            </div>
          </li>`}).join("");o.innerHTML=r}const h=new u(".gallery-link",{captionsData:"alt",captionDelay:250}),a=document.querySelector(".loader"),v=document.querySelector(".form");v.addEventListener("submit",b);function b(i){i.preventDefault();const r=i.target.elements.picture.value.trim();a.style.display="inline-block",g(r).then(s=>{s.hits.length>0?(p(s),a.style.display="none"):f.show({message:"❌ Sorry, there are no images matching your search query.",position:"topRight",backgroundColor:"#F44336",messageColor:"#fff"})}),h.refresh()}
//# sourceMappingURL=commonHelpers.js.map
