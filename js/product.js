const imgLeft = document.querySelectorAll('.img-left > img')
const imgCenter = document.querySelector('.img-center > img')

function go(e) {
	imgLeft.forEach(el => {
		el.classList.remove('active')
		function chooseImg(e) {
			imgCenter.src = e.target.src
			e.target.classList.add('active')
		}
		chooseImg(e)
	})
}
imgLeft.forEach(el => {
	el.addEventListener('click', go)
})
