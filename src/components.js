import style from './assets/styles.css'

export default (text = 'Hello hello hello!') => {
	const element = document.createElement("div")
	element.className = style.firstClass
	element.innerHTML = text

	return element
}