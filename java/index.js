const firstList = document.getElementById('Lista')
firstList.addEventListener('submit', function (e) {
  e.preventDefault()

  const firstActivityInput = document.getElementById('attività')

  const Work = {
    attività: firstActivityInput.value,
  }
  console.log('AGGIUNTE', Work)

  const NewWork = document.createElement('li')
  NewWork.classList.add('GoodWork')
  NewWork.innerHTML = `
    <li>${Work.attività}</li>
    
    `
  const Save = document.getElementById('lavori')
  NewWork.addEventListener('click', function () {
   NewWork.classList.add('finale')
   
  })
  Save.appendChild(NewWork)

  firstList.reset()
})
