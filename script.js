const qr_text=document.getElementById('qr-text');
const  sizes=document.getElementById('sizes');
const qr_body=document.querySelector('.qr-body');
const Genratebtn=document.getElementById('Genrate');
const download=document.getElementById('downlode');

let size=sizes.value;
Genratebtn.addEventListener('click',(e)=>{
e.preventDefault();
isEmptyInput();

})
sizes.addEventListener('change',(e)=>{
size = e.target.value;

isEmptyInput();
});

download.addEventListener('click', ()=>{
    let img = document.querySelector('.qr-body img');

    if(img !== null){
        let imgAtrr = img.getAttribute('src');
        download.setAttribute("href", imgAtrr);
    }
    else{
        download.setAttribute("href", `${document.querySelector('canvas').toDataURL()}`);
    }
});
function isEmptyInput(){
    // if(qrText.value.length > 0){
    //     generateQRCode();
    // }
    // else{
    //     alert("Enter the text or URL to generate your QR code");
    // }
    qr_text.value.length > 0 ? generateQRCode() : alert("Enter the text or URL to generate your QR code");;
}
function generateQRCode(){
qr_body.innerHTML = "";
new QRCode(qr_body, {
    text:qr_text.value,
    height:size,
    width:size,
    colorLight:"#fff",
    colorDark:"#000"
});
}
