// KUBKI
const imgLeftFirst = document.querySelectorAll('.img-left > img.cups_first')
const imgLeftSecond = document.querySelectorAll('.img-left > img.cups_second')
const imgLeftThird = document.querySelectorAll('.img-left > img.cups_third')
const imgLeftFour = document.querySelectorAll('.img-left > img.cups_four')
const imgLeftFive = document.querySelectorAll('.img-left > img.cups_five')
const imgLeftSix = document.querySelectorAll('.img-left > img.cups_six')
const imgLeftSeven = document.querySelectorAll('.img-left > img.cups_seven')
const imgLeftEight = document.querySelectorAll('.img-left > img.cups_eight')

const imgCenterFirst = document.querySelector('.img-center > img.cups_first')
const imgCenterSecond = document.querySelector('.img-center > img.cups_second')
const imgCenterThird = document.querySelector('.img-center > img.cups_third')
const imgCenterFour = document.querySelector('.img-center > img.cups_four')
const imgCenterFive = document.querySelector('.img-center > img.cups_five')
const imgCenterSix = document.querySelector('.img-center > img.cups_six')
const imgCenterSeven = document.querySelector('.img-center > img.cups_seven')
const imgCenterEight = document.querySelector('.img-center > img.cups_eight')

const boxFirst = document.querySelector('.box__first')
const boxSecond = document.querySelector('.box__second')
const boxThird = document.querySelector('.box__third')
const boxFour = document.querySelector('.box__four')
const boxFive = document.querySelector('.box__five')
const boxSix = document.querySelector('.box__six')
const boxSeven = document.querySelector('.box__seven')
const boxEight = document.querySelector('.box__eight')

const btnFirst = document.querySelector('.one__btn')
const btnSecond = document.querySelector('.second__btn')
const btnThird = document.querySelector('.third__btn')
const btnFour = document.querySelector('.four__btn')
const btnFive = document.querySelector('.five__btn')
const btnSix = document.querySelector('.six__btn')
const btnSeven = document.querySelector('.seven__btn')
const btnEight = document.querySelector('.eight__btn')

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
function four(e) {
	imgLeftFour.forEach(el => {
		el.classList.remove('active')
		function chooseImg(e) {
			imgCenterFour.src = e.target.src
			e.target.classList.add('active')
		}
		chooseImg(e)
	})
}
imgLeftFour.forEach(el => {
	el.addEventListener('click', four)
})
function five(e) {
	imgLeftFive.forEach(el => {
		el.classList.remove('active')
		function chooseImg(e) {
			imgCenterFive.src = e.target.src
			e.target.classList.add('active')
		}
		chooseImg(e)
	})
}
imgLeftFive.forEach(el => {
	el.addEventListener('click', five)
})
function six(e) {
	imgLeftSix.forEach(el => {
		el.classList.remove('active')
		function chooseImg(e) {
			imgCenterSix.src = e.target.src
			e.target.classList.add('active')
		}
		chooseImg(e)
	})
}
imgLeftSix.forEach(el => {
	el.addEventListener('click', six)
})
function seven(e) {
	imgLeftSeven.forEach(el => {
		el.classList.remove('active')
		function chooseImg(e) {
			imgCenterSeven.src = e.target.src
			e.target.classList.add('active')
		}
		chooseImg(e)
	})
}
imgLeftSeven.forEach(el => {
	el.addEventListener('click', seven)
})
function eight(e) {
	imgLeftEight.forEach(el => {
		el.classList.remove('active')
		function chooseImg(e) {
			imgCenterEimgLeftEight.src = e.target.src
			e.target.classList.add('active')
		}
		chooseImg(e)
	})
}
imgLeftEight.forEach(el => {
	el.addEventListener('click', eight)
})
//
function ShowProducts1() {
	html.style.scrollPaddingTop = '140' + 'px'
	boxFirst.style.display = 'flex'
	boxSecond.style.display = 'none'
	boxThird.style.display = 'none'
	boxFour.style.display = 'none'
	boxFive.style.display = 'none'
	boxSix.style.display = 'none'
	boxSeven.style.display = 'none'
	boxEight.style.display = 'none'
	setTimeout(() => {
		view.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' })
	}, 50)
}
function ShowProducts2() {
	html.style.scrollPaddingTop = '140' + 'px'
	boxFirst.style.display = 'none'
	boxSecond.style.display = 'flex'
	boxThird.style.display = 'none'
	boxFour.style.display = 'none'
	boxFive.style.display = 'none'
	boxSix.style.display = 'none'
	boxSeven.style.display = 'none'
	boxEight.style.display = 'none'
	setTimeout(() => {
		view.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' })
	}, 50)
}
function ShowProducts3() {
	html.style.scrollPaddingTop = '140' + 'px'
	boxFirst.style.display = 'none'
	boxSecond.style.display = 'none'
	boxThird.style.display = 'flex'
	boxFour.style.display = 'none'
	boxFive.style.display = 'none'
	boxSix.style.display = 'none'
	boxSeven.style.display = 'none'
	boxEight.style.display = 'none'
	setTimeout(() => {
		view.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' })
	}, 50)
}
function ShowProducts4() {
	html.style.scrollPaddingTop = '140' + 'px'
	boxFirst.style.display = 'none'
	boxSecond.style.display = 'none'
	boxThird.style.display = 'none'
	boxFour.style.display = 'flex'
	boxFive.style.display = 'none'
	boxSix.style.display = 'none'
	boxSeven.style.display = 'none'
	boxEight.style.display = 'none'
	setTimeout(() => {
		view.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' })
	}, 50)
}
function ShowProducts5() {
	html.style.scrollPaddingTop = '140' + 'px'
	boxFirst.style.display = 'none'
	boxSecond.style.display = 'none'
	boxThird.style.display = 'none'
	boxFour.style.display = 'none'
	boxFive.style.display = 'flex'
	boxSix.style.display = 'none'
	boxSeven.style.display = 'none'
	boxEight.style.display = 'none'
	setTimeout(() => {
		view.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' })
	}, 50)
}
function ShowProducts6() {
	html.style.scrollPaddingTop = '140' + 'px'
	boxFirst.style.display = 'none'
	boxSecond.style.display = 'none'
	boxThird.style.display = 'none'
	boxFour.style.display = 'none'
	boxFive.style.display = 'none'
	boxSix.style.display = 'flex'
	boxSeven.style.display = 'none'
	boxEight.style.display = 'none'
	setTimeout(() => {
		view.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' })
	}, 50)
}
function ShowProducts7() {
	html.style.scrollPaddingTop = '140' + 'px'
	boxFirst.style.display = 'none'
	boxSecond.style.display = 'none'
	boxThird.style.display = 'none'
	boxFour.style.display = 'none'
	boxFive.style.display = 'none'
	boxSix.style.display = 'none'
	boxSeven.style.display = 'flex'
	boxEight.style.display = 'none'
	setTimeout(() => {
		view.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' })
	}, 50)
}
function ShowProducts8() {
	html.style.scrollPaddingTop = '140' + 'px'
	boxFirst.style.display = 'none'
	boxSecond.style.display = 'none'
	boxThird.style.display = 'none'
	boxFour.style.display = 'none'
	boxFive.style.display = 'none'
	boxSix.style.display = 'none'
	boxSeven.style.display = 'none'
	boxEight.style.display = 'flex'
	setTimeout(() => {
		view.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' })
	}, 50)
}

btnFirst.addEventListener('click', ShowProducts1)
btnSecond.addEventListener('click', ShowProducts2)
btnThird.addEventListener('click', ShowProducts3)
btnFour.addEventListener('click', ShowProducts4)
btnFive.addEventListener('click', ShowProducts5)
btnSix.addEventListener('click', ShowProducts6)
btnSeven.addEventListener('click', ShowProducts7)
btnEight.addEventListener('click', ShowProducts8)
