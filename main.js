const $ = document.querySelector.bind(document)
const $$=document.querySelectorAll.bind(document)

const registerBtn = $('.registerBtn')
const loginBtn = $('.loginBtn')
const modal = $('.modal')
const modalOverlays = $('.modal__overlays')
const authForm = $$('.auth-form')
const authFormSwitchBtn = $$('.auth-form__switch-btn')


function handleEvent () {
    // Event click button Register
    registerBtn.onclick = function () {
        modal.style.display = 'flex';
        authForm[0].classList.add('active')
    }
    // Event click button Login
    loginBtn.onclick = function () {
        modal.style.display = 'flex';
        authForm[1].classList.add('active')
    }
    // Event click overlay modal
    modalOverlays.onclick = function () {
        modal.style.display = 'none';
        authForm.forEach(index => {
            index.classList.remove('active')
        });
    }
    authFormSwitchBtn.forEach(index => {
        index.onclick = function () {
            if(index.innerText === 'Đăng nhập') {
                authForm[0].classList.remove('active')
                authForm[1].classList.add('active')
            }
            else {
                authForm[1].classList.remove('active')
                authForm[0].classList.add('active')
            }
        }
    });
}


handleEvent();