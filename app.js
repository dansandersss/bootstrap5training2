const header = document.querySelector('header')
const poppers = document.querySelectorAll('.popper')
const copyButtons = document.querySelectorAll('.copy-label')
const inputElement = document.querySelectorAll('input')
const navBtn = document.querySelector('.navbar-toggler-icon')
const xMark = document.querySelector('#x-mark')
const lineMark = document.querySelector('#line-mark')
let isLineMarkVisible = true; 

navBtn.addEventListener('click', toggleMarks);

function toggleMarks() {
    if (isLineMarkVisible) {
        lineMark.style.display = "none";
        xMark.style.display = "block";
    } else {
        lineMark.style.display = "block";
        xMark.style.display = "none";
    }
    
    // Изменяем состояние
    isLineMarkVisible = !isLineMarkVisible;
}

copyButtons.forEach(function(button) {
	button.addEventListener("click", function(event) {
			event.preventDefault(); // Предотвратить действие по умолчанию (например, переход по ссылке)
			const popper = button.nextElementSibling; // Найти соответствующий popper элемент
				popper.textContent = 'Copied';
				button.innerHTML = ''
				button.insertAdjacentHTML('afterbegin', 
				`
					<i class="fa-solid fa-check color1"></i>
				`)
			
			
			// button.style.backgroundImage = 'url(images/check-solid.svg)';
			let coppiedText = button.previousElementSibling.value
			navigator.clipboard.writeText(coppiedText)

			const interval = setInterval(function(){
				popper.textContent = 'Copy';
				button.innerHTML = ''
				button.insertAdjacentHTML('afterbegin', 
				`
					<i class="fa-solid fa-copy"></i>
				`)
				

				setTimeout(function(){
					clearInterval (interval)
				},5000)
			}, 3000)
			
	});

	button.addEventListener("mouseenter", function(event) {
			const popper = button.nextElementSibling;
			popper.classList.add('active');
	});

	button.addEventListener("mouseleave", function(event) {
			const popper = button.nextElementSibling;
			popper.classList.remove('active');
	});
	
});

function scrollHeader() {
	if (window.pageYOffset > 0) {
			header.classList.add("sticky");
	} else {
			header.classList.remove("sticky");
	}
}

window.addEventListener("scroll", scrollHeader);