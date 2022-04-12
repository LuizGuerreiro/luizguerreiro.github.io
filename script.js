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

function getRepos() {
  fetch('https://api.github.com/users/luizguerreiro/repos')
  .then(async res => {
    if(!res.ok) {
      throw new Error(res.status)
    }
    
    let dataApi = await res.json()
    
    let h3 = document.querySelectorAll('h3')
    let i = dataApi.length
    h3.forEach(item => {
      i--
      item.innerHTML = dataApi[i].name
    })
    
    let desc = document.querySelectorAll('.description')
    i = dataApi.length
    desc.forEach(item => {
      i--
      item.innerHTML = dataApi[i].description
    })
    
    let stars = document.querySelectorAll('.projectStars')
    i = dataApi.length
    stars.forEach(item => {
      i--
      item.innerHTML = dataApi[i].stargazers_count
    })
    
    let forks = document.querySelectorAll('.projectForks')
    i = dataApi.length
    forks.forEach(item => {
      i--
      item.innerHTML = dataApi[i].forks_count
    })
    
    let techs = document.querySelectorAll('.tech')
    i = dataApi.length
    techs.forEach(item => {
      i--
      item.innerHTML = dataApi[i].language
    })
  })
}

getImage()
getRepos()
