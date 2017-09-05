export default (text = 'Hello hello hello!') => {
	const element = document.createElement("div")

	element.innerHTML = text

	return element
}