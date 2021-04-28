let date = new Date(); 
console.log(date)
let updatedElement = document.getElementById('last-updated') 
updatedElement.innerHTML = `Last updated - ${date}`
let yearElement = document.getElementById('year') 
yearElement.innerHTML = date.getFullYear()