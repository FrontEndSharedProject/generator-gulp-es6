export default {
  loadFont () {
    let link = document.createElement('link')
    link.href = `https://fonts.googleapis.com/css?family=Raleway:100,300,400`
    link.rel = 'stylesheet'
    
    document.head.appendChild(link)
  }
}
