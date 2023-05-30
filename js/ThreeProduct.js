// KUBKI
const imgLeftFirst = document.querySelectorAll('.img-left > img.cups_first')
const imgLeftSecond = document.querySelectorAll('.img-left > img.cups_second')
const imgLeftThird = document.querySelectorAll('.img-left > img.cups_third')
const imgCenterFirst = document.querySelector('.img-center > img.cups_first')
const imgCenterSecond = document.querySelector('.img-center > img.cups_second')
const imgCenterThird = document.querySelector('.img-center > img.cups_third')

const boxFirst = document.querySelector('.box__first')
const boxSecond = document.querySelector('.box__second')
const boxThird = document.querySelector('.box__third')
const btnFirst = document.querySelector('.one__btn')
const btnSecond = document.querySelector('.second__btn')
const btnThird = document.querySelector('.third__btn')

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
function third(e) {
	imgLeftThird.forEach(el => {
		el.classList.remove('active')
		function chooseImg(e) {
			imgCenterThird.src = e.target.src
			e.target.classList.add('active')
		}
		chooseImg(e)
	})
}
imgLeftThird.forEach(el => {
	el.addEventListener('click', third)
})
// 
function ShowProducts1() {
	html.style.scrollPaddingTop = '140' + 'px'
	boxFirst.style.display = 'flex'
	boxSecond.style.display = 'none'
	boxThird.style.display = 'none'
	setTimeout(() => {
		view.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' })
	}, 50);
}
function ShowProducts2() {
	html.style.scrollPaddingTop = '140' + 'px'
	boxFirst.style.display = 'none'
	boxSecond.style.display = 'flex'
	boxThird.style.display = 'none'
	setTimeout(() => {
		view.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' })
	}, 50);
}
function ShowProducts3() {
	html.style.scrollPaddingTop = '140' + 'px'
	boxFirst.style.display = 'none'
	boxSecond.style.display = 'none'
	boxThird.style.display = 'flex'
	setTimeout(() => {
		view.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' })
	}, 50);
}

btnFirst.addEventListener('click', ShowProducts1)
btnSecond.addEventListener('click', ShowProducts2)
btnThird.addEventListener('click', ShowProducts3)
