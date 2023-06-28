const login_page = document.querySelector('.Login-page');
const sign_up_page = document.querySelector('.Sign-up-page');
const login_page_btn = document.getElementById('login-page-btn');
const SignUp_page_btn = document.getElementById('sign-up-page-btn');
const first_page = document.querySelector('.first-page');
const second_page = document.querySelector('.second-page');
login_page_btn.addEventListener('click', ()=> {
    login_page_btn.setAttribute('class', 'login-option options underline-option');
    SignUp_page_btn.setAttribute('class', 'sign-up-option options greyFont-option');
    sign_up_page.style = `transform: translateX(300px); transition: 0.4s;`;
    login_page.style = `transform: translateX(0px); transition: 0.4s;`;
    first_page.style = 'background-color: rgb(7, 98, 216);';
    second_page.style = 'background-color: white;';
})
SignUp_page_btn.addEventListener('click', ()=>{
    login_page_btn.setAttribute('class', 'login-option options greyFont-option');
    SignUp_page_btn.setAttribute('class', 'sign-up-option options underline-option');
    sign_up_page.style = `transform: translateX(0px); transition: 0.4s;`;
    login_page.style = `transform: translateX(-300px); transition: 0.4s;`;
    first_page.style = 'background-color: white;';
    second_page.style = 'background-color: rgb(7, 98, 216);';
})