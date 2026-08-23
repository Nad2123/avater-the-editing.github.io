const revealItems = document.querySelectorAll('.section, .featured-card, .service-grid article, .tools-list span, .about-copy, .contact');
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('reveal','visible');
      observer.unobserve(entry.target);
    }
  });
},{threshold:.08});
revealItems.forEach(el=>observer.observe(el));
