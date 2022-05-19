const LinksSocialMedia = {
  github: 'Matheus-N-da-Silva',
  facebook: 'MatheusN07',
  instagram: 'MatheusN03',
  twitter: 'MATHEUSNdS03'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

// i = i + 1
// i++

// ser humano 12345678910
//computador 0123456789

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userPhoto.src = data.avatar_url
    })
}

getGitHubProfileInfos()
