// Menu links
const pagesActive = document.querySelectorAll('.nav-link');

const flipPages = document.querySelectorAll('body main')


function changePages(index){

    pagesActive.forEach((live) => live.classList.remove('active'));
    pagesActive[index].classList.add('active');

    flipPages.forEach((page) => page.style.display = 'none');
    flipPages[index].style.display = 'block';

}

pagesActive.forEach((menuList, index)=>{
    menuList.addEventListener('click', (event)=>{
        event.preventDefault();
        changePages(index);
    });
});

// Local Storage saved even after the page reloaded
const savedIndex = localStorage.getItem('activePageIndex');
if(savedIndex !== null){
    changePages(parseInt(savedIndex))
}else{
    changePages(0)
}


pagesActive.forEach((menuList, index)=>{
    menuList.addEventListener('click', (event)=>{
        localStorage.setItem('activePageIndex', index)
    })
})


// Navbar Toggler Animation
const navToggler = document.querySelector('#navToggler');
const togglerIcon = document.querySelector('#navToggler i');

let isRotate = false;

navToggler.addEventListener('click', ()=>{
    isRotate = !isRotate;
    togglerIcon.style.transform = isRotate ? 'rotateY(180deg)' : 'rotateY(0deg)';
    togglerIcon.classList.add('transition')
})


// Animation line

function generateStyles(){
    return{
        backgroundColor: generateRandomColor(),
        // boxShadow: `0 0 50px 11px ${generateRandomColor()}`
    }
}

function generateRandomColor(){
    const letters = ['1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']
    let colors = '#';
    for(let i=0; i<6; i++){
        colors += letters[Math.floor(Math.random() * letters.length)]
    }
    return colors
}


setInterval(()=>{
    const spanElement = document.querySelectorAll('.border-animation span')
    const newStyles = generateStyles();
    spanElement.forEach((span)=>{
        Object.assign(span.style, newStyles)
    })
},500)


// Horizontal Scrolling Image

const placeList = document.querySelector('#placeList')

function slide(whichDirection){
    showSlider(whichDirection)
};

function showSlider(direction){
    const placeArray = Array.from(document.querySelectorAll('#placeList .placeItem'));

    if(direction === 'next'){
        placeList.appendChild(placeArray[0])
    }

    else{
        placeList.prepend(placeArray[placeArray.length - 1])
    }
}

const placeDetails = document.querySelectorAll('#placeList .content')

function updateStyles(){

    let leftValue = '25%';
    let fontSizeH1 = '6.5em';
    let fontSizeH2 = '3em';
    let content;

    if(window.innerWidth <= 1240) leftValue = '28%';
    if(window.innerWidth <= 1100) leftValue = '32%';
    if(window.innerWidth <= 970) leftValue = '38%';
    if(window.innerWidth <= 825) leftValue = '45%';

    if(window.innerWidth <= 700) fontSizeH1 = '5em';
    if(window.innerWidth <= 570) fontSizeH1 = '4em';
    if(window.innerWidth <= 435) fontSizeH1 = '3em';
    
    if(window.innerWidth <= 435) fontSizeH2 = '2em';

    if(window.innerWidth <= 700) content = '80%';


    placeDetails.forEach(pl =>{
        pl.style.left = leftValue;
        pl.style.width = content;
        const h1 = pl.querySelector('h1');
            if(h1) h1.style.fontSize = fontSizeH1

        const h2 = pl.querySelector('h2');
            if (h2) h2.style.fontSize = fontSizeH2;
    })

}

updateStyles()

window.addEventListener('resize', updateStyles)