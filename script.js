let txtuser = document.querySelector('#user');
let btn = document.querySelector('button');

btn.addEventListener('click', buscar);

function buscar(){
let ajax = new XMLHttpRequest();

// ajax.open("GET",`https://api.github.com/users/${txtuser.value}`);
console.log(txtuser.value);
ajax.open("GET",`https://api.github.com/users/${txtuser.value}`);
ajax.send(null);

    ajax.onreadystatechange = () => {
        if(ajax.readyState === 4){
            if(ajax.status === 200){
                usuario = JSON.parse(ajax.responseText);
                let p = document.createElement('p');
                p.innerHTML = usuario.login; 
                let div = document.querySelector('#dados'); 
                div.innerHTML = ''; 
                let divImg = document.createElement('img');
                divImg.setAttribute('src',usuario.avatar_url);                      
                        
                div.appendChild(p);
                div.appendChild(divImg);
                
            }
        }
    }
}


