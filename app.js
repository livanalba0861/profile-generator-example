   
 
   const bground = document.getElementById('bground');
   const fname = document.getElementById('fname');



    const lastname = document.getElementById('lastname');
    const smposition = document.getElementById('smposition');
    const github = document.getElementById('github'); 
    const twiter = document.getElementById('twiter');





    const instagram = document.getElementById('instagram');
    const linkedin = document.getElementById('linkedin');
    const role = document.getElementById('role');
    const city = document.getElementById('city');
    const country = document.getElementById('country');


    
    const names = document.getElementById('name')
    const lnames = document.getElementById('lname')
    const roles = document.getElementById('roles')
    const cities = document.getElementById('cities')
    const img1 = document.getElementById('img1')



    const container = document.getElementById('container')
    const github_text = document.getElementById('github_text')
    const instagram_text = document.getElementById('instagram_text')
    const twiter_text = document.getElementById('twiter_text')



    const linkedin_text = document.getElementById('linkedin_text')
    const reverse = document.querySelectorAll('.reverse')
    const trigg = document.querySelectorAll('.trigg')
    

    const unl = document.getElementById('unl')

 const updateCode = (text, input)=> text.innerText = input;
 

fname.addEventListener('change', ()=>   updateCode(names, fname.value) );

lastname.addEventListener('change', ()=>   updateCode(lnames ,lastname.value));

role.addEventListener('change', ()=>   updateCode(roles, role.value));

city.addEventListener('change', ()=>   updateCode(cities, city.value) );

country.addEventListener('change', ()=>   updateCode(countries, country.value) );

bground.addEventListener('change', function(){
    if(bground.value === 'off'){
        img1.style.display = 'none'
    }
})

bground.addEventListener('change', function(){
    if(bground.value === 'off'){
        img1.style.display = 'none'
    }
    if(bground.value === 'on'){
        img1.style.display = 'block'
    }
})

smposition.addEventListener('change', ()=>{

if(smposition.value === 'left'){


unl.classList.remove('right')

if(unl.classList.contains('left')===false){
    unl.classList.add('left')
}


if(trigg[0].classList.contains('reverse')===false){
    for(let i = 0; i < trigg.length; i++){
        trigg[i].classList.add('reverse')

    }
}

}

if(smposition.value === 'right'){
    unl.classList.remove('left');
    if(trigg[0].classList.contains('reverse')===true){
    for(let i = 0; i< trigg.length; i++){
        trigg[i].classList.remove('reverse')
    }
}

    unl.classList.add('right')
}

})

console.log(smposition.value)

github.addEventListener('change', ()=> updateCode(github_text, github.value))

instagram.addEventListener('change', ()=> updateCode(instagram_text, instagram.value))

linkedin.addEventListener('change', ()=> updateCode(linkedin_text, linkedin.value))

twiter.addEventListener('change', ()=> updateCode(twiter_text, twiter.value))





