const navMobile = document.querySelector('.nav-mobile')
const navBtn = document.querySelector('.hamburger')
const allNavItems = document.querySelectorAll('.nav__link')
const body = document.getElementById('body')
const allNavItemsClose = document.querySelectorAll('.nav')
const footerYear = document.querySelector('.footer__year')
const navDesktop = document.querySelector('.nav__color-logo')
const arrowUp = document.querySelector('.go-up')
const dropdownLinks = document.querySelectorAll('.dropdown__link')

const shirt = document.querySelectorAll('.t-shirt')
const awards = document.querySelectorAll('.awards')
const thanks = document.querySelectorAll('.thanks')
const cups = document.querySelectorAll('.cups')
const another = document.querySelectorAll('.another')

const shirtBtn = document.querySelector('.t-shirt-btn')
const awardsBtn = document.querySelector('.awards-btn')
const thanksBtn = document.querySelector('.thanks-btn')
const cupsBtn = document.querySelector('.cups-btn')
const anotherBtn = document.querySelector('.another-btn')

const handleNav = () => {
	navBtn.classList.toggle('is-active')
	navMobile.classList.toggle('nav-mobile--active')
	body.classList.toggle('disable')

	allNavItems.forEach(item => {
		item.addEventListener('click', () => {
			navMobile.classList.remove('nav-mobile--active')
			navBtn.classList.remove('is-active')
			body.classList.remove('disable')
		})
	})
	allNavItemsClose.forEach(item => {
		item.addEventListener('click', () => {
			navMobile.classList.remove('nav-mobile--active')
			navBtn.classList.remove('is-active')
			body.classList.remove('disable')
		})
	})
}

function addedBackground() {
	const navbarY = window.pageYOffset
	if (navbarY >= 200) {
		navDesktop.style.backgroundColor = '#f5f5f5'
		arrowUp.style.visibility = 'visible'
	} else {
		navDesktop.style.backgroundColor = 'transparent'
		arrowUp.style.visibility = 'hidden'
	}
	const item = dropdownLinks.forEach(el => {
		if (navbarY >= 200) {
			el.style.backgroundColor = '#f5f5f5'
		}
		else if (navbarY <= 200) {
			el.style.backgroundColor = '#0000001a'
		}
	})
}

;[navBtn, allNavItemsClose].map(allNavItemsClose => navBtn.addEventListener('click', handleNav))

function handleCurrentYear() {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}


shirtBtn.addEventListener('click', () => {
	shirt.forEach(el => {
			el.classList.toggle('t-shirt')
		if (el.classList.contains('t-shirt')) {
			shirtBtn.textContent = '⇩'
		} else {
			shirtBtn.textContent = '⇧'
			awards.forEach(el => {
				el.classList.add('awards')
				awardsBtn.textContent = '⇩'

			})
			thanks.forEach(el => {
				el.classList.add('thanks')
				thanksBtn.textContent = '⇩'

			})
			cups.forEach(el => {
				el.classList.add('cups')
				cupsBtn.textContent = '⇩'

			})
			another.forEach(el => {
				el.classList.add('another')
				anotherBtn.textContent = '⇩'

			})
		}
	})
})
awardsBtn.addEventListener('click', () => {
	awards.forEach(el => {
		el.classList.toggle('awards')
		if (el.classList.contains('awards')) {
			awardsBtn.textContent = '⇩'
		} else {
			awardsBtn.textContent = '⇧'
			shirt.forEach(el => {
				el.classList.add('t-shirt')
				shirtBtn.textContent = '⇩'

			})
			thanks.forEach(el => {
				el.classList.add('thanks')
				thanksBtn.textContent = '⇩'

			})
			cups.forEach(el => {
				el.classList.add('cups')
				cupsBtn.textContent = '⇩'

			})
			another.forEach(el => {
				el.classList.add('another')
				anotherBtn.textContent = '⇩'

			})
		}
	})
})
thanksBtn.addEventListener('click', () => {
	thanks.forEach(el => {
		el.classList.toggle('thanks')
		if (el.classList.contains('thanks')) {
			thanksBtn.textContent = '⇩'
		} else {
			thanksBtn.textContent = '⇧'
			shirt.forEach(el => {
				el.classList.add('t-shirt')
				shirtBtn.textContent = '⇩'

			})
			awards.forEach(el => {
				el.classList.add('awards')
				awardsBtn.textContent = '⇩'

			})
			cups.forEach(el => {
				el.classList.add('cups')
				cupsBtn.textContent = '⇩'

			})
			another.forEach(el => {
				el.classList.add('another')
				anotherBtn.textContent = '⇩'

			})
		}
	})
})
cupsBtn.addEventListener('click', () => {
	cups.forEach(el => {
		el.classList.toggle('cups')
		if (el.classList.contains('cups')) {
			cupsBtn.textContent = '⇩'
		} else {
			cupsBtn.textContent = '⇧'
			awards.forEach(el => {
				el.classList.add('awards')
				awardsBtn.textContent = '⇩'

			})
			thanks.forEach(el => {
				el.classList.add('thanks')
				thanksBtn.textContent = '⇩'

			})
			shirt.forEach(el => {
				el.classList.add('t-shirt')
				shirtBtn.textContent = '⇩'

			})
			another.forEach(el => {
				el.classList.add('another')
				anotherBtn.textContent = '⇩'

			})
		}
	})
})
anotherBtn.addEventListener('click', () => {
	another.forEach(el => {
		el.classList.toggle('another')
		if (el.classList.contains('another')) {
			anotherBtn.textContent = '⇩'
		} else {
			anotherBtn.textContent = '⇧'
			awards.forEach(el => {
				el.classList.add('awards')
				awardsBtn.textContent = '⇩'

			})
			thanks.forEach(el => {
				el.classList.add('thanks')
				thanksBtn.textContent = '⇩'

			})
			cups.forEach(el => {
				el.classList.add('cups')
				cupsBtn.textContent = '⇩'

			})
			shirt.forEach(el => {
				el.classList.add('t-shirt')
				shirtBtn.textContent = '⇩'

			})
		}
	})
})



handleCurrentYear()
document.addEventListener('scroll', addedBackground)
