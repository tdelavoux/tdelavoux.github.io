let carouselInterval; 

const news = [...document.getElementsByClassName('news')];
news.forEach((el) => {
    el.addEventListener('click', (e) => {
        document.querySelector('.news.active').classList.remove('active');
        console.log(el);
        el.classList.add('active');
        clearInterval(carouselInterval);
        initInterval()
    });
});

function initInterval(){
    carouselInterval = setInterval(() => {
        const activeElement = document.querySelector('.news.active');
        const next = activeElement.nextElementSibling ?? news[0];
        activeElement.classList.remove('active');
        next.classList.add('active');
    }, 5000);
}
initInterval();