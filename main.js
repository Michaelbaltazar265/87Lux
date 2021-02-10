
const projectsSlide = document.querySelector('.projectsSlide');
const projectsImages = document.querySelectorAll('img');

const prevBtnEl = document.querySelector('#prevBtn');
const nextBtnEl = document.querySelector('#nextBtn');

let counter = 1;
const size = projectsImages[0].clientWidth;

projectsSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';

nextBtnEl.addEventListener('click', () => {
	if (counter >= projectsImages.length -1) return;
	projectsSlide.style.transition = "transform 0.3s ease-in-out";
	counter++;
	projectsSlide.style.transform = 'translateX(' + (-size * counter  ) + 'px)';
	
});

prevBtnEl.addEventListener('click', () => {
	if (counter <= 0) return;
	projectsSlide.style.transition = "transform 0.3s ease-in-out";
	counter--;

	projectsSlide.style.transform = 'translateX(' + (-size * counter  ) + 'px)';
	
});

projectsSlide.addEventListener('transitionend', () => {
	if(projectsImages[counter].id === 'first') {
		projectsSlide.style.transition = "none";
		counter = projectsImages.length - 2 ;
		projectsSlide.style.transform = 'translateX(' + (-size * counter  ) + 'px)';
	}

	if(projectsImages[counter].id === 'last') {
		projectsSlide.style.transition = "none";
		counter = projectsImages.length - counter ;
		projectsSlide.style.transform = 'translateX(' + (-size * counter  ) + 'px)';
	}
}) 


