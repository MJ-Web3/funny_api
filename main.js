
let selection = document.querySelector('#selection');   // select element
let header = document.querySelector('h1');              // h1
let btn = document.querySelector('button');             // button
let imgDiv = document.querySelector('#img');            // img div
let theImg = document.querySelector('img');             // img element
const api = 'https://api.imgflip.com/get_memes';        // api

fetch(api)
.then(j => j.json())
.then(apiData=>{
    window.addEventListener('load',()=>{
        for(x=0;x<apiData.data.memes.length;x++){
            let newElement = document.createElement('option');
            newElement.setAttribute('value',apiData.data.memes[x].name);
            newElement.text = apiData.data.memes[x].name;
            selection.appendChild(newElement);
        }
    })
        btn.addEventListener('click',()=>{
            for(i=0;i<apiData.data.memes.length;i++){
                let newElement = document.createElement('option');
                newElement.setAttribute('value',apiData.data.memes[i].name);
                newElement.text = apiData.data.memes[i].name;
                selection.appendChild(newElement);
                if(selection.value == apiData.data.memes[i].name){
                    theImg.setAttribute('src',apiData.data.memes[i].url.replace('\\',''));
                    // console.log(apiData.data.memes[i].url.replace('\\',''));
                }
            }
            header.innerHTML= selection.value;
        }
        )
})



