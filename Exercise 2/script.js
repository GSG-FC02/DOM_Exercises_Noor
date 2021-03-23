let button =document.querySelector('button');
let a =document.querySelector('#wcc');
button.addEventListener ("click", getAttribute);


function getAttribute(){
    
    let attribute  = ('href = ' + a.getAttribute('href') + "\n" + 'hreflang = ' + a.getAttribute('hreflang') + "\n" +
    'rel = ' + a.getAttribute('rel') + "\n" + 'target = ' + a.getAttribute('target') + "\n"
    +'type = '+ a.getAttribute('href'));
    alert (attribute);
}