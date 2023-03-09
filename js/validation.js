
const fullName = document.querySelector('.name')
const email = document.querySelector('.email')
const interest = document.querySelector('.select')
const submit = document.querySelector('.contact-send')

submit.addEventListener('click', ()=> {
    if (fullName.value == '' || email.value == '' || select.value == '') {
        alert('Isi datamu dengan benar ya.')
    } else if (fullName.value.length < 5) {
        alert('Masukkan nama kamu dengan minimal panjang karakter 5 huruf.')
    } else if(email.value.indexOf('@gmail.com') == -1){
        alert('Masukkan format email dengan benar.')
    } else {
        alert('Hore, data kamu telah terkirim! silahkan tunggu admin untuk menghubungi!')
    }
})

