// KUBKI
const imgLeftFirst = document.querySelectorAll('.img-left > img.cups_first')
const imgLeftSecond = document.querySelectorAll('.img-left > img.cups_second')
const imgCenterFirst = document.querySelector('.img-center > img.cups_first')
const imgCenterSecond = document.querySelector('.img-center > img.cups_second')

const boxFirst = document.querySelector('.box__first')
const boxSecond = document.querySelector('.box__second')
const btnFirst = document.querySelector('.one__btn')
const btnSecond = document.querySelector('.second__btn')


const html = document.querySelector('html')
const view = document.querySelector('.view')
// KUBKI
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
// 
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
// 

function ShowProducts1() {
	html.style.scrollPaddingTop = '140' + 'px'
	boxFirst.style.display = 'flex'
	boxSecond.style.display = 'none'
	view.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' })
}
function ShowProducts2() {
	html.style.scrollPaddingTop = '140' + 'px'
	boxFirst.style.display = 'none'
	boxSecond.style.display = 'flex'
	view.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' })
}


btnFirst.addEventListener('click', ShowProducts1)
btnSecond.addEventListener('click', ShowProducts2)

