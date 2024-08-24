import{S as u,i as f}from"./assets/vendor-BrddEoy-.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();function y(o,i){o.preventDefault();const n="45559560-5df08bb83c1629c82dd907879",e=o.target.elements.picture.value.trim(),t=document.querySelector(".loader"),s="https://pixabay.com/api/?key="+n+"&q="+encodeURIComponent(e)+"&per_page=45&image_type=photo&orientation=horizontal&safesearch=true";t.style.display="inline-block",fetch(s).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).then(r=>{i(r)}).catch(r=>console.log("Error:",r)).finally(()=>{t.style.display="none"})}function g(o){const i=document.querySelector(".image-gallery");i.innerHTML="";const n=new u(".gallery-link",{captionsData:"alt",captionDelay:250});if(o.hits.length>0){const l=o.hits.map(e=>{const{webformatURL:t,largeImageURL:s,tags:r,views:a,downloads:c,likes:d,comments:m}=e;return`
          <li class="gallery-item">
            <a class="gallery-link" href="${s}">
              <img 
                class="gallery-image" 
                src="${t}"
                alt="${r}"
              />
            </a>
            <div class="overlay">
            <div class="info">
                <div class="overlay-item">Likes<br>${d}</div>
                <div class="overlay-item">Views<br>${a}</div>
                <div class="overlay-item">Comments<br>${m}</div>
                <div class="overlay-item">Downloads<br>${c}</div>
                </div>
            </div>
          </li>`}).join("");i.innerHTML=l,n.refresh()}else f.show({message:"❌ Sorry, there are no images matching your search query.",position:"topRight",backgroundColor:"#F44336",messageColor:"#fff"})}const p=document.querySelector(".form");p.addEventListener("submit",o=>y(o,g));
//# sourceMappingURL=commonHelpers.js.map
