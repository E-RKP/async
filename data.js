const button  = document.getElementById('button')

button.addEventListener('click', ()=>{
  alert('Hai cliccato!')

  let pEl = document.createElement('p')
  pEl.textContent = 'aoooooo'
  document.body.appendChild(pEl)
})

let response = fetch('nivniv')
console.log(response)
console.log('buongiorno')