// KUBKI
const imgLeftFirst = document.querySelectorAll('.img-left > img.cups_first')
const imgCenterFirst = document.querySelector('.img-center > img.cups_first')


const boxFirst = document.querySelector('.box__first')
const btnFirst = document.querySelector('.one__btn')






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

// 

function ShowProducts1() {
	html.style.scrollPaddingTop = '140' + 'px'
	boxFirst.style.display = 'flex'
	setTimeout(() => {
		view.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' })
	}, 50);
}



btnFirst.addEventListener('click', ShowProducts1)

