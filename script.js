  function openTab() {
    document.getElementById("tab").style.height = "20vh"
    document.getElementById("tab").style.opacity = "1";
    document.getElementById("close").style.opacity = "1"

    closeAllDescriptions()
  }
  function closeTab() {
    document.getElementById("tab").style.height = "0";
    document.getElementById("tab").style.opacity = "0";
    document.getElementById("close").style.opacity = "0"
    
    closeAllDescriptions()
  }


  // Function to close all descriptions on page 
  function closeAllDescriptions() {
    const descs = document.querySelectorAll('.description')
    descs.forEach(desc => {
      desc.style.display = 'none'
    })
  }


  function openDescription(x) {
    document.getElementById("description" + x).style.display= "block"
    document.getElementById("tab").style.height = "0";
    document.getElementById("tab").style.opacity = "0";
    document.getElementById("close").style.opacity = "0";
  }
  function setWord(x){
    document.getElementById("pokazinside").style.alignItems = x
  }
  function setBackground(x) {
    document.getElementById("pokazinside2").style.backgroundColor = x
  }
  function setImage(x){
    const box = document.getElementById("pokazinside3");
    box.style.background = 'none';
    box.style.backgroundImage = x
  }

  function setGradient1(x){
    const box = document.getElementById("pokazinside3");
    box.style.backgroundImage = 'none';
    box.style.background = x;
  }


  function setBack(x){
    document.getElementById("pokazinside4").style.backgroundSize = x
  }
  function setImage2(x){
    document.getElementById("pokazinside5").style.backgroundPosition = x
  }
  function setAttach(x){
    document.getElementById("pokazinside6").style.backgroundAttachment = x
  }
  function setRepeat(x){
    document.getElementById("pokazinside7").style.backgroundRepeat = x
  }
  function setBorder(x){
    document.getElementById("pokazinside8").style.border = x
  }
  function setBorder2(x){
    document.getElementById("pokazinside9").style.borderRadius = x
  }

function clearPostion() {
  const kloc = document.getElementById('kloc')

  kloc.style.bottom = 'auto'
  kloc.style.right = 'auto'
  kloc.style.left = 'auto'
  kloc.style.top = 'auto'
}
  function moveBottom(x){
    clearPostion()
    document.getElementById("kloc").style.bottom = x
  }
  function moveRight(x){
    clearPostion()
    document.getElementById("kloc").style.right = x
  }
  function moveLeft(x){
    clearPostion()
    document.getElementById("kloc").style.left = x
  }
  function moveTop(x){
    clearPostion()
    document.getElementById("kloc").style.top = x
  }
  function addShadow(x){
    document.getElementById("pokazinside11").style.boxShadow = x
  }
  function addColor(x){
    document.getElementById("pokazinside12").style.color = x
  }
  function addDisplay(x){
    document.getElementById("pokazinside13").style.display = x
  }