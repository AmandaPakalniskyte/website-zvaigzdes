
// ------------On scroll

const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});






var div1 = document.getElementById('Div1'),
    div2 = document.getElementById('Div2'),
    div3 = document.getElementById('Div3'),
    div4 = document.getElementById('Div4');
function switchVisible() {
  if(!div1) return;
  if (getComputedStyle(div1).display == 'block') {
    div1.style.display = 'none';
    div2.style.display = 'block';
    // div3.style.display = 'block';
    // div4.style.display = 'block';
  } else {
    div1.style.display = 'block';
    div2.style.display = 'none';
    // div3.style.display = 'none';
    // div4.style.display = 'none';
  }
}
document.getElementById('Button1').addEventListener('click', switchVisible);




// function switchVisible() {
//   if(!div2) return;
//   if (getComputedStyle(div2).display == 'block') {
//     // div1.style.display = 'block';
//     div2.style.display = 'block';
//     // div3.style.display = 'block';
//     // div4.style.display = 'block';
//   } else {
//     div1.style.display = 'none';
//     div2.style.display = 'block';
//     // div3.style.display = 'none';
//     // div4.style.display = 'none';
//   }
// }
// document.getElementById('Button2').addEventListener('click', switchVisible);




// function switchVisible() {
//   if(!div3) return;
//   if (getComputedStyle(div3).display == 'block') {
//     div1.style.display = 'block';
//     div2.style.display = 'block';
//     div3.style.display = 'none';
//     div4.style.display = 'block';
//   } else {
//     div1.style.display = 'none';
//     div2.style.display = 'none';
//     div3.style.display = 'block';
//     div4.style.display = 'none';
//   }
// }
// document.getElementById('Button3').addEventListener('click', switchVisible);






// ------------------Show pictures------------------

var btn = document.getElementsByClassName("btn");
var gallery = document.getElementById("gallery");
var images = new Array(
  "../images/star.png",
  "../images/circle.png",
  "../images/fire.png"
);

for(let i=0; i<btn.length; i++) {
  btn[i].onclick = function() {
    gallery.src = images[i];
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    this.className += " active";
  };
};

