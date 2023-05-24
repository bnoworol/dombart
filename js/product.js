
// KUBKI
const imgLeftFirst = document.querySelectorAll('.img-left > img.cups_first')
const imgLeftSecond = document.querySelectorAll('.img-left > img.cups_second')
const imgCenterFirst = document.querySelector('.img-center > img.cups_first')
const imgCenterSecond = document.querySelector('.img-center > img.cups_second')
// KOSZULKI
function first(e) {
	imgLeftFirst.forEach(el => {
		el.classList.remove('active')
		function chooseImg(e) {
			imgCenterFirst.src = e.target.src
			e.target.classList.add('active')
		}
		chooseImg(e)
	})
}
imgLeftFirst.forEach(el => {
	el.addEventListener('click', first)
})

function second(e) {
	imgLeftSecond.forEach(el => {
		el.classList.remove('active')
		function chooseImg(e) {
			imgCenterSecond.src = e.target.src
			e.target.classList.add('active')
		}
		chooseImg(e)
	})
}
imgLeftSecond.forEach(el => {
	el.addEventListener('click', second)
})