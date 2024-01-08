const card_block = document.querySelector('.block')
const inputs = document.querySelectorAll('input')
const nameCard = document.querySelector('.name_card')
const numCard = document.querySelector('.num_card')
const dataCard = document.querySelector('.data_card')
const cvvCard = document.querySelector('.cvv_card')

const svich = document.querySelector('.svich')
const svichBtn = document.querySelector('.svich_btn')

const add_btn = document.querySelector('.add')
const save_btn = document.querySelector('.save_card')
const button_delet = document.querySelector('.checkout_btn')

get()

function get() {
  
  card_block.innerHTML = ''
  let getData = JSON.parse(localStorage.getItem('info')) || [];
  getData.forEach((el, index) => {
    
    let info_block = document.createElement('div')
    let logo_icon = document.createElement('div')
    let logo = document.createElement('div')
    let icon = document.createElement('div')
    let ion = document.createElement('ion-icon')
    let ion1 = document.createElement('ion-icon')
    let number_card = document.createElement('div')
    let persons_data = document.createElement('div')
    let person_name = document.createElement('div')
    let h2_name = document.createElement('h2')
    let name = document.createElement('div')
    let person_data = document.createElement('div')
    let h2_data = document.createElement('h2')
    let data = document.createElement('div')
    info_block.setAttribute('class', 'info_block')
    logo_icon.setAttribute('class', 'logo_icon')
    logo.setAttribute('class', 'logo')
    icon.setAttribute('class', 'icon')
    number_card.setAttribute('class', 'number_card')
    persons_data.setAttribute('class', 'persons_data')
    person_name.setAttribute('class', 'person_name')
    name.setAttribute('class', 'name')
    person_data.setAttribute('class', 'person_data')
    data.setAttribute('class', 'data')


    ion.name = "trash-outline"
    ion1.name = "create-outline"
    h2_name.innerText = 'Name'
    h2_data.innerText = 'Valid Till'
    name.innerHTML = `${el.nameCard}`
    data.innerHTML = `${el.dataCard}`
    number_card.innerHTML = `${el.numCard}`
    icon.append(ion , ion1)
    logo_icon.append(logo , icon)
    person_name.append(h2_name , name)
    person_data.append(h2_data , data)
    persons_data.append(person_name , person_data)
    info_block.append(logo_icon ,number_card ,persons_data)
    card_block.append(info_block)

    ion.addEventListener('click', () => {
      addDelete(index)
     })
    ion1.addEventListener('click', () => {
      addEdit(index)
    })
  });
}
function addDelete(index) {
  let data = JSON.parse(localStorage.getItem('info')) || []
  data.splice(index, 1)
  localStorage.setItem('info', JSON.stringify(data))
  get()
}

function addEdit(index) {
  save_btn.style.display = 'block'
  add_btn.style.display = 'none'
  nameCard.setAttribute('id', index)
  let data = JSON.parse(localStorage.getItem('info')) || []
  nameCard.value = data[index].nameCard
  numCard.value = data[index].numCard
  dataCard.value = data[index].dataCard
  cvvCard.value = data[index].cvvCard

}

save_btn.addEventListener('click', () => {
  saveList()
})
function saveList() {
  let id = nameCard.id
  let editObj = {
    nameCard: nameCard.value,
    numCard: numCard.value,
    dataCard: dataCard.value,
    cvvCard: cvvCard.value,
  }
  let data = JSON.parse(localStorage.getItem('info')) || []
  data.splice(id, 1, editObj)
  localStorage.setItem('info', JSON.stringify(data))
  get()
  for (let input of inputs) {
    input.value = ''
  }
  save_btn.style.display = 'none'
  add_btn.style.display = 'block'
}
button_delet.addEventListener('click', () => {
 
  localStorage.clear()
  // let obj = {
  //   block: block.value
  // }

  // let data = JSON.parse(localStorage.clear('info'))
  get()
})




add_btn.addEventListener('click', () => {
  let obj = {
    nameCard: nameCard.value,
    numCard: numCard.value,
    dataCard: dataCard.value,
    cvvCard: cvvCard.value,
  };

  let data = JSON.parse(localStorage.getItem('info')) || []
  data.push(obj)
  localStorage.setItem('info', JSON.stringify(data))
  get()
  for (let input of inputs) {
    input.value = ''
  }
})



let str = false
svich.addEventListener('click' , () => {
  str = !str
  svichBtn.style.marginLeft = str ? '13px' : ''
  
  svich.style.background = str ? '#F90' : ''
  svich.style.border = str ? '#F90' : ''

})


nameCard.addEventListener('input', () => {
  nameCard.style.borderBottom = '2px solid rgba(73, 73, 73, 0.25'
})

numCard.addEventListener('input', () => {
  numCard.style.borderBottom = '2px solid rgba(73, 73, 73, 0.25)'
  let str = numCard.value
  if (str.length > 16) {
    numCard.value = str.slice(0, 19)
  } else {
    str = str.replace(/-/g,'')
    let res = ''
  
    for (let i = 0; i < str.length; i++){
      if (i !== 0 && i % 4 === 0){
        res += '-'
      }
        res += str[i]
    }
    numCard.value = res
  }
 
})

dataCard.addEventListener('input', () => {
  dataCard.style.borderBottom = '2px solid rgba(73, 73, 73, 0.25)'
  let data = dataCard.value
  
  if (data.length > 4) {
    dataCard.value = data.slice(0, 5)
  } else {
    data = data.replace('/', '')
    let res = ''

    for (let i = 0; i < data.length; i++) {
      if (i !== 0 && i % 2 === 0) {
        res += '/'
       }
        res += data[i]
    }
    dataCard.value = res
  }
  
})

cvvCard.addEventListener('input', () => {
  cvvCard.style.borderBottom = '2px solid rgba(73, 73, 73, 0.25)'
  let cvv = cvvCard.value
  if (cvv.length > 3) {
    cvvCard.value = cvv.slice(0, 3)
  }
})



