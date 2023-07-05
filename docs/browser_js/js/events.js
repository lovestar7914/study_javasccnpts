let keydownobject = document.querySelector("#keydownEmter")//iD로 설정 해줌

ownobject.addEventListener('keydown',(event) => {
    if (event.code == 'Enter'){
        console.log('key down');
    }
    
} );
