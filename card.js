const card_block = document.querySelector('.block')
const form = document.querySelector('form')
const inputs = document.querySelectorAll('input')
const nameCard = document.querySelector('.name_card')
const numCard = document.querySelector('.num_card')
const dataCard = document.querySelector('.data_card')
const cvvCard = document.querySelector('.cvv_card')
const svich = document.querySelector('.svich')
const svichBtn = document.querySelector('.svich_btn')
const LogoCard = document.querySelector('.logo_card')
const bgMaster = document.querySelector('.master_bg')
const bgVisa = document.querySelector('.visa_bg')

let bg = 0
let arr = [
 {lg: 'url(/img/Logo.png) no-repeat',
  back: 'url(/img/Gousian.png)',
}, {
  lg: 'url(/img/Logo1.png) no-repeat',
  back: 'url(/img/Group11.png)',
}
]
bgMaster.addEventListener('click', () => {
  bg = 0
})

bgVisa.addEventListener('click', () => {
  bg = 1
})


const btnCard = document.querySelector('.btn_card')
const add_btn = document.querySelector('.add')
const save_btn = document.querySelector('.save_card')
const button_delet = document.querySelector('.checkout_btn')

get()

function get() {

  card_block.innerHTML = ''
  let getData = JSON.parse(localStorage.getItem('card')) || [];
  getData.forEach((el, index) => {
    
    let infoBlock = document.createElement('div')
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
    infoBlock.setAttribute('class', 'info_block')
    logo_icon.setAttribute('class', 'logo_icon')
    logo.setAttribute('class', 'logo')
    icon.setAttribute('class', 'icon')
    number_card.setAttribute('class', 'number_card')
    persons_data.setAttribute('class', 'persons_data')
    person_name.setAttribute('class', 'person_name')
    name.setAttribute('class', 'name')
    person_data.setAttribute('class', 'person_data')
    data.setAttribute('class', 'data')

    infoBlock.style.background = `${el.LogoCard.back} no-repeat center / cover`
    logo.style.background = el.LogoCard.lg
    
    // logo.innerHTML = `${el.LogoCard}`
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
    infoBlock.append(logo_icon ,number_card ,persons_data)
    card_block.append(infoBlock)

    ion.addEventListener('click', () => {
      addDelete(index)
     })
    ion1.addEventListener('click', () => {
      addEdit(index)
    })
  });
}


// LOGO ......
// let l = false
// bgMaster.addEventListener('click', () => {
//   l = !l 
//   console.log(l);
//   info_block.style.background = l ? 'url(/img/Gousian Layer.png) no-repeat center' : ''
//   logo.style.background = l ? 'url(/img/Logo.png) no-repeat' : ''
//   get()
// })
// bgVisa.addEventListener('click', () => {
//   l = !l
//   console.log(l);
//   info_block.style.background = l ? 'url(/img/Group\ 11.png) no-repeat center' : ''
//   logo.style.background = l ? 'url(/img/Logo1.png) no-repeat' : ''
//   get()
// })
// // LOGO ......



function addDelete(index) {
  let data = JSON.parse(localStorage.getItem('card')) || []
  data.splice(index, 1)
  localStorage.setItem('card', JSON.stringify(data))
  get()
}

function addEdit(index) {
  save_btn.style.display = 'block'
  add_btn.style.display = 'none'
  nameCard.setAttribute('id', index)
  let data = JSON.parse(localStorage.getItem('card')) || []
  nameCard.value = data[index].nameCard
  numCard.value = data[index].numCard
  dataCard.value = data[index].dataCard
  cvvCard.value = data[index].cvvCard
}

save_btn.addEventListener('click', () => {
  saveList()
})
function saveList() {
  if (nameCard.value !== '' && numCard.value !== '' && dataCard !== '' && cvvCard !== '') {
    let id = nameCard.id
  let editObj = {
    nameCard: nameCard.value,
    numCard: numCard.value,
    dataCard: dataCard.value,
    cvvCard: cvvCard.value,
    LogoCard: arr[bg]

  }
  let data = JSON.parse(localStorage.getItem('card')) || []
  data.splice(id, 1, editObj)
  localStorage.setItem('card', JSON.stringify(data))
  get()
  for (let input of inputs) {
    input.value = ''
  }
  save_btn.style.display = 'none'
  add_btn.style.display = 'block'
  } else if (nameCard.value === '' && numCard.value === '' && dataCard === '' && cvvCard === '') {
    alert('Заполните все поля!!!')
  }
  
}
button_delet.addEventListener('click', () => {
 
  localStorage.clear()
  get()
})




add_btn.addEventListener('click', () => {
  addBtn()
})

cvvCard.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    addBtn()
  }
})
let n = 0
function addBtn() {
  if (nameCard.value !== '' && numCard.value !== '' && dataCard !== '' && cvvCard !== '') {
    // nameCard.style.borderBottom = '2px solid #000'
    // numCard.style.borderBottom = '2px solid #000'
    // dataCard.style.borderBottom = '2px solid #000'
    // cvvCard.style.borderBottom = '2px solid #000'

    let obj = {
      nameCard: nameCard.value,
      numCard: numCard.value,
      dataCard: dataCard.value,
      cvvCard: cvvCard.value,
      LogoCard: arr[bg]
    };
  
    let data = JSON.parse(localStorage.getItem('card')) || []
    data.push(obj)
    localStorage.setItem('card', JSON.stringify(data))
    get()
    for (let input of inputs) {
      input.value = ''
    }  
  } else if (nameCard.value === '' && numCard.value === '' && dataCard === '' && cvvCard === '') {
    alert('Заполните все поля!!!')
      // nameCard.style.borderBottom = '2px solid rgba(255, 0, 0, 0.701)'
      // numCard.style.borderBottom = '2px solid rgba(255, 0, 0, 0.701)'
      // dataCard.style.borderBottom = '2px solid rgba(255, 0, 0, 0.701)'
      // cvvCard.style.borderBottom = '2px solid rgba(255, 0, 0, 0.701)'
      // if (n < 1) {
      //   for(let i = 4; i < 5; i += 4) {
      //     const p = document.createElement('p')
      //     oneList.append(p)
      //     p.style.order = i
      //     p.setAttribute('class', 'delSms')
      //   }
      //   n += 4
      // }
  }

}


let str = false
svich.addEventListener('click' , () => {
  str = !str
  LogoCard.style.display = str ? 'flex' : ''
  svichBtn.style.marginLeft = str ? '13px' : ''
  svich.style.background = str ? '#F90' : ''
  svich.style.border = str ? '#F90' : ''
  btnCard.style.height = str ? '100px' : ''
})


// nameCard.addEventListener('input', () => {
//   nameCard.style.borderBottom = '2px solid rgba(73, 73, 73, 0.25'
// })

numCard.addEventListener('input', () => {
  // numCard.style.borderBottom = '2px solid rgba(73, 73, 73, 0.25)'
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
  // dataCard.style.borderBottom = '2px solid rgba(73, 73, 73, 0.25)'
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
  // cvvCard.style.borderBottom = '2px solid rgba(73, 73, 73, 0.25)'
  let cvv = cvvCard.value
  if (cvv.length > 3) {
    cvvCard.value = cvv.slice(0, 3)
  }
})







// let arr1 = [
//   {
//     id:1,
//     name:'sultan'
//   },
//   {
//     id:2,
//     name:'aziz'
//   }
// ]

// console.log(
//   adit(2)
// );

// function adit(id){
//   return arr1.map(el => {
//     if(el.id === id){
//       return {...el , name:name='sultan1' , price: p}
//     }
//     return el
//   })
// }


