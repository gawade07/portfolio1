

let sections = document.querySelectorAll('section');
let navLink = document.querySelectorAll('header nav a');
let menuIcon =document.querySelector('#menu-btn');
let navbar =document.querySelector('.navbar');

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

}
window.onscroll=()=>{
    sections.forEach(sec =>{
        let top=window.scrollY;
        let offset = sec.offsetTop -150;
        let height =sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLink.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            })
        }

        console.log(top)
        console.log(offset)
        console.log(height)
        console.log(id)

    })

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}



