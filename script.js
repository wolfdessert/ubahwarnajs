// tangkap tombolnya
// tangkap element yg dituju (kasus ini body)
// jadi akan ada event yang akan didengarkan saat tombol diklik


// const adalah keyword pengganti var
// nama variable sebenarnya bebas
// tangkap tombol
const tUbahWarna = document.getElementById('tUbahWarna');
// lalu tangkap element yang dituju
// menggunakan tagname karena body tidak memiliki id
// lalu kasih index nol, karena bytagElement mengembalikan html collection array
// khusus body tidak seperti ini tidak apa2 
// const body = document.getElementsByTagName('body')[0]
// karena body memiliki
// document.body
// mengambilnya bisa memakai add event atau eventlistener
tUbahWarna.onclick = function () {
    // document.body.style.backgroundColor = 'lightblue';
    // document.body.setAttribute('class', 'biru-muda');
    // toggle adalah ketika ada kelas dihilangkan atau sebaliknya
    document.body.classList.toggle('biru-muda');
}


// membuat tombol manupulasi node
const tAcakWarna = document.createElement('button');
const teksTombol = document.createTextNode('Acak Warna');
tAcakWarna.appendChild(teksTombol);
tAcakWarna.setAttribute('type', 'button');
tUbahWarna.after(tAcakWarna);

tAcakWarna.addEventListener('click', function () {
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});


const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');

sMerah.addEventListener('input', function () {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});

sHijau.addEventListener('input', function () {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';

});

sBiru.addEventListener('input', function () {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';

});


document.body.addEventListener('mousemove', function (e) {
    // posisi mouse
    // console.log(e.clientX);
    // ukuran browser
    // console.log(window.innerWidth);
    const xPos = Math.round((e.clientX / window.innerWidth) * 255);
    const yPos = Math.round((e.clientY / window.innerHeight) * 255);
    document.body.style.backgroundColor = 'rgb(' + xPos + ',' + yPos + ',100)'

});











