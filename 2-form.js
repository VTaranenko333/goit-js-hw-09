import"./assets/modulepreload-polyfill-B5Qt9EMX.js";const o="feedback-form-state";let e={email:"",message:""};const a=document.querySelector(".feedback-form");l();a.addEventListener("input",i);a.addEventListener("submit",n);function i(t){e[t.target.name]=t.target.value,localStorage.setItem(o,JSON.stringify(e))}function n(t){if(t.preventDefault(),e.email=a.elements.email.value.trim(),e.message=a.elements.message.value.trim(),!e.email||!e.message){alert("Fill please all fields");return}console.log(e),a.reset(),localStorage.removeItem(o),e={email:"",message:""}}function l(){const t=localStorage.getItem(o);t&&(e=JSON.parse(t),a.elements.email.value=e.email||"",a.elements.message.value=e.message||"")}const s=`
  .feedback-form {
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    padding: 24px;
    width: 408px;
    height: auto;
  }

  .feedback-form input, 
  .feedback-form textarea {
    display: flex;
    flex-direction: column;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0.04em;
    color: #2e2f42;
    border: 1px solid #808080;
    margin-bottom: 8px;
    border-radius: 4px;
    width: 360px;
    height: 40px;
  }

  .feedback-form input:hover {
    border: 1px solid #000;
    border-radius: 4px;
    width: 360px;
    height: 40px;
  }

  .feedback-form button[type="submit"] {
    align-self: start;
    border: none;
    border-radius: 8px;
    padding: 8px 16px;
    width: auto;
    height: 40px;
    background: #4e75ff;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0.04em;
    color: #fff;
  }

  .feedback-form button[type="submit"]:hover {
    background: #6c8cff;
  }
`,r=document.createElement("style");r.innerText=s;document.head.appendChild(r);
//# sourceMappingURL=2-form.js.map
