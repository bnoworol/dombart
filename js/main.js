const navMobile = document.querySelector('.nav-mobile')
const navBtn = document.querySelector('.hamburger')
const allNavItems = document.querySelectorAll('.nav__link')
const body = document.getElementById('body')
const allNavItemsClose = document.querySelectorAll('.nav')
const footerYear = document.querySelector('.footer__year')
const navDesktop = document.querySelector('.nav__color-logo')
const arrowUp = document.querySelector('.go-up')
const dropdownLinks = document.querySelectorAll('.dropdown__link')

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
handleCurrentYear()
document.addEventListener('scroll', addedBackground)
