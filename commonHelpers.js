import{S as f,i as l}from"./assets/vendor-BrddEoy-.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const g="45559560-5df08bb83c1629c82dd907879";function y(i){const s="https://pixabay.com/api/?key="+g+"&q="+encodeURIComponent(i)+"&per_page=45&image_type=photo&orientation=horizontal&safesearch=true";return fetch(s).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()}).catch(o=>console.log("Error:",o))}function p(i){const s=document.querySelector(".image-gallery"),o=i.hits.map(r=>{const{webformatURL:e,largeImageURL:t,tags:a,views:c,downloads:d,likes:m,comments:u}=r;return`
          <li class="gallery-item">
            <a class="gallery-link" href="${t}">
              <img 
                class="gallery-image" 
                src="${e}"
                alt="${a}"
              />
            </a>
            <div class="overlay">
            <div class="info">
                <div class="overlay-item">Likes<br>${m}</div>
                <div class="overlay-item">Views<br>${c}</div>
                <div class="overlay-item">Comments<br>${u}</div>
                <div class="overlay-item">Downloads<br>${d}</div>
                </div>
            </div>
          </li>`}).join("");s.innerHTML=o}const h=new f(".gallery-link",{captionsData:"alt",captionDelay:250}),n=document.querySelector(".loader"),v=document.querySelector(".form");v.addEventListener("submit",b);function b(i){i.preventDefault();const o=i.target.elements.picture.value.trim();n.style.display="inline-block",y(o).then(r=>{n.style.display="none",r.hits.length>0?(p(r),h.refresh()):l.show({message:"❌ Sorry, there are no images matching your search query.",position:"topRight",backgroundColor:"#F44336",messageColor:"#fff"})}).catch(r=>{n.style.display="none",l.show({message:`❌ Сталася помилка: ${r.message}`,position:"topRight",backgroundColor:"#F44336",messageColor:"#fff"})})}
//# sourceMappingURL=commonHelpers.js.map
