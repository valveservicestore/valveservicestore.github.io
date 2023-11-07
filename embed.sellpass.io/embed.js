const sellpassCss='.sellpass-modal {\n'+
'    position: fixed;\n'+
'    top: 0;\n'+
'    left: 0;\n'+
'    width: 100%;\n'+
'    height: 100%;\n'+
'    z-index: 99999;\n'+
'}\n'+
'\n'+
'.sellpass-iframe-wrapper {\n'+
'    position: relative;\n'+
'    margin: auto;\n'+
'    width: 100%;\n'+
'    height: 100%;\n'+
'    z-index: 1;\n'+
'    opacity: 0;\n'+
'\n'+
'    transition: opacity .2s linear;\n'+
'}\n'+
'\n'+
'.sellpass-iframe-wrapper.show {\n'+
'    opacity: 1;\n'+
'}\n'+
'\n'+
'.sellpass-iframe-backdrop {\n'+
'    background: #00000075;\n'+
'    backdrop-filter: blur(3px);\n'+
'    width: 100%;\n'+
'    height: 100%;\n'+
'    position: absolute;\n'+
'}\n'+
'\n'+
'.sellpass-iframe {\n'+
'    width: 100%;\n'+
'    height: 100%;\n'+
'    border: none;\n'+
'}\n'+
'\n'+
'.sellpass-spinner {\n'+
'    display: inline-block;\n'+
'    position: absolute;\n'+
'    top: 50%;\n'+
'    left: 50%;\n'+
'\n'+
'    transform: translate(-50%, -50%);\n'+
'    z-index: 2;\n'+
'    width: 80px;\n'+
'    height: 80px;\n'+
'}\n'+
'.sellpass-spinner div {\n'+
'    box-sizing: border-box;\n'+
'    display: block;\n'+
'    position: absolute;\n'+
'    width: 64px;\n'+
'    height: 64px;\n'+
'    margin: 8px;\n'+
'    border: 3px solid #fff;\n'+
'    border-radius: 50%;\n'+
'    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n'+
'    border-color: #fff transparent transparent transparent;\n'+
'}\n'+
'.sellpass-spinner div:nth-child(1) {\n'+
'    animation-delay: -0.45s;\n'+
'}\n'+
'.sellpass-spinner div:nth-child(2) {\n'+
'    animation-delay: -0.3s;\n'+
'}\n'+
'.sellpass-spinner div:nth-child(3) {\n'+
'    animation-delay: -0.15s;\n'+
'}\n'+
'@keyframes lds-ring {\n'+
'    0% {\n'+
'        transform: rotate(0deg);\n'+
'    }\n'+
'    100% {\n'+
'        transform: rotate(360deg);\n'+
'    }\n'+
'}\n'
const embedIframe=()=>{const buttons=document.querySelectorAll('[data-sellpass-product-path]')
const modal=document.createElement('div')
const backdrop=document.createElement('div')
const spinner=document.createElement('div')
const styleNode=document.createElement('style')
const iframe=document.createElement('iframe')
const iframeWrapper=document.createElement('div')
styleNode.innerText=sellpassCss
modal.classList.add('sellpass-modal')
iframeWrapper.classList.add('sellpass-iframe-wrapper')
iframe.classList.add('sellpass-iframe')
backdrop.classList.add('sellpass-iframe-backdrop')
spinner.classList.add('sellpass-spinner')
spinner.innerHTML='<div></div><div></div><div></div><div></div>'
buttons.forEach(elem=>{const productId=elem.dataset.sellpassProductPath
const shopHost=elem.dataset.sellpassDomain
modal.appendChild(backdrop)
modal.appendChild(iframeWrapper)
modal.appendChild(styleNode)
elem.addEventListener('click',()=>{iframe.setAttribute('src',`https://${shopHost}/embed/products/${productId}`)
iframeWrapper.appendChild(iframe)
modal.appendChild(spinner)
document.body.appendChild(modal)
iframe.onload=()=>{setTimeout(()=>{modal.removeChild(spinner)
iframeWrapper.classList.add('show')},1000)}})})
window.addEventListener('message',(event)=>{if(event.data==='close-embed'){document.body.removeChild(modal)
iframeWrapper.classList.remove('show')}})}
document.addEventListener('DOMContentLoaded',embedIframe,false);