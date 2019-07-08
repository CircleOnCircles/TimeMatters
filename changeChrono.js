const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }

function changeChrono(){
    console.log('run changeChrono()')
    let clearButton = document.querySelector("#hdtb-rst");
    if(clearButton){
        return;
    }
    let toolsButton = document.querySelector("#hdtb-tls");
    toolsButton.click();
    let anyTimeDropdown = document.querySelector("#hdtbMenus > div > div:nth-child(2) > div");
    anyTimeDropdown.click();
    sleep(100).then(() => {
        //do stuff
      })
    let pastYearItem = document.querySelector("#qdr_y > a");
    pastYearItem.click();
}

changeChrono();
