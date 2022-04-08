function getImage() {
  fetch('https://api.github.com/users/luizguerreiro')
  .then(async res => {
    
    if(!res.ok) {
      throw new Error(res.status)
    }
    
    let dataApi = await res.json()
  
    let images = document.querySelectorAll('img')
    
    images.forEach(item => {
      item.setAttribute('src', `${dataApi.avatar_url}`)
      item.setAttribute('alt', `Foto de ${dataApi.name}`)
    })
  }).catch(e => console.log(e))
}

getImage()