let keys  = document.querySelectorAll('.key');
let x = document.querySelectorAll('audio');
console.log(x);

document.addEventListener('keydown', (e) => {
    
    
    let daCode = e.which;
    keys.forEach(element => {

        
        if(element.getAttribute('data-key') == daCode) {
            element.getAttributeNode('class').value += ' playing';        
            setTimeout(() => {
                element.getAttributeNode('class').value = 'key';        
            }, 200);
            x.forEach(adio =>{
                if(adio.getAttribute('data-key') == daCode) {
                    adio.play();
                }
            })
        }
        
        
    })
})