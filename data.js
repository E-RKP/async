const button  = document.getElementById('button')

button.addEventListener('click', ()=>{
  alert('Hai cliccato!')

  let pEl = document.createElement('p')
  pEl.textContent = 'aoooooo'
  document.body.appendChild(pEl)
})

fetch('https://jsonpaceholder.typicode.com/photos').then(function(restituzionefetch){

  return restituzionefetch.json();
 
}).then(function(restituzionefetch){
  console.log(restituzionefetch)
}).catch(function(error){
  console.log(error)
})





