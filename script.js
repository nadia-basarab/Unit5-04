document.getElementById('change-image')
.addEventListener('click', image)
document.getElementById('change-text')
.addEventListener('click', text)
document.getElementById('hide').addEventListener
('click', hide)
document.getElementById('show').addEventListener
('click', show)
document.getElementById('bg').addEventListener
('click', background)

function image () {
 document.getElementById('picture').src =
 "images/puppy2.0.jpg"
}

function text () {
 document.getElementById('text').innerHTML =
 "More adorable dogs"
}

function hide () {
 document.getElementById('text').style.display = 
 "none"
}

function show () {
 document.getElementById('text').style.display = 
 "block"
}

function background () {
 document.body.style.backgroundColor = "lightblue"
}
