
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
  
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
  
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });






//THAT iS FOR MAIN BANNER PIC ..MAINBILD

const images = document.querySelectorAll('.image-container img');
let currentIndex = 0;

function changeSlide(){
images.forEach((img, index)=> {
    img.style.opacity = '0';
    img.style.transform = 'scale(1)'
});
images[currentIndex].style.opacity = '0.34';
images[currentIndex].style.transform = 'scale(1.2)'

currentIndex = (currentIndex + 1) % images.length;
}
setInterval(changeSlide, 5000);
    


changeSlide ();


// navbar scolled 80 and take another color

// Event listener to follow scroll
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
  
    
    if (window.scrollY > 80) {
      header.classList.add('scrolled'); 
    } else {
      header.classList.remove('scrolled');
    }
  });
  


//HERE IS FOR PARAGRAPH H3 AND BUTTON SLIDE UP ANIMATION

document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('show');
          } else {
              entry.target.classList.remove('show'); // Heq animacionin kur largohet
          }
      });
  }, { threshold: 0.5 });

  const elementsToObserve = document.querySelectorAll('.title, .paragraph, .button');

  elementsToObserve.forEach(element => {
      element.classList.add('hidden'); // Shtojmë klasën 'hidden' që të fillojmë me opacity 0
      observer.observe(element);
  });
});

// Here is Dom function for clicked ,actived nav

document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click',function(){
            
            // Here we remove activ class from all others links
            navLinks.forEach(link => link.classList.remove('active'));

            //and here i add active class just to the link where is clicked
            this.classList.add('active');

        })
    })
})


       //     reviews changing in 3 secpnds

       const reviews = document.querySelectorAll('.review');
let currentReview = 0;

function showNextReview() {
    reviews[currentReview].style.display = 'none';
    currentReview = (currentReview + 1) % reviews.length;
    reviews[currentReview].style.display = 'block';
}

setInterval(showNextReview, 3000); 




// thats gonna be when i scroll cards photos etc animate scroll

 document.addEventListener("DOMContentLoaded", () => {
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });


},{ threshold: 0.1});



 const cards = document.querySelectorAll('.card');
 const paragraphs = document.querySelectorAll('p');
 const headers = document.querySelectorAll('h3');
 const galeryItems = document.querySelectorAll('.galery-item');

 // I vëzhgojmë të gjitha elementet me observer
 cards.forEach(card => observer.observe(card));
 paragraphs.forEach(p => observer.observe(p));
 headers.forEach(h3 => observer.observe(h3));
 galeryItems.forEach(item => observer.observe(item));
}); 


