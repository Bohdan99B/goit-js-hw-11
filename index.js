import{a as f,S as p,i as n}from"./assets/vendor-5YrzWRhu.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const m="51945757-a6508522bd1a0e2757f375d6a",y="https://pixabay.com/api/";async function h(a){try{return(await f.get(y,{params:{key:m,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}catch(t){throw console.error("Помилка при запиті до Pixabay API:",t),t}}const l=document.querySelector(".gallery"),u=document.querySelector(".loader"),g=new p(".gallery a",{captionsData:"alt",captionDelay:250});function L(a){const t=a.map(r=>`
      <li class="gallery-item">
        <a href="${r.largeImageURL}">
          <img src="${r.webformatURL}" alt="${r.tags}" loading="lazy" />
        </a>
        <div class="info">
          <p>Likes: ${r.likes}</p>
          <p>Views: ${r.views}</p>
          <p>Comments: ${r.comments}</p>
          <p>Downloads: ${r.downloads}</p>
        </div>
      </li>
    `).join("");l.insertAdjacentHTML("beforeend",t),g.refresh()}function w(){l.innerHTML=""}function b(){u.classList.add("visible")}function c(){u.classList.remove("visible")}const d=document.querySelector(".form"),v=d.querySelector("input[name='search-text']");d.addEventListener("submit",async a=>{a.preventDefault();const t=v.value.trim();if(!t){n.warning({title:"Warning",message:"Please enter a search query!"});return}w(),b();try{const r=await h(t);if(c(),!r.hits.length){n.error({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!"});return}L(r.hits)}catch{c(),n.error({title:"Error",message:"Something went wrong while fetching images."})}});
//# sourceMappingURL=index.js.map
