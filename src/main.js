function tab (tabDomList, boxDomList) {
  function activeIndex (index) {
    for (let index = 0; index < boxDomList.length; index++) {
      const element = boxDomList[index];
      element.style.display = 'none'
      element.classList.remove('show')
    }
    tabDomList[index].classList.add('active')
    boxDomList[index].style.display = 'block'
    boxDomList[index].classList.add('show')
  }
  for (let index = 0; index < tabDomList.length; index++) {
    // 清理其他项的活跃class
    const element = tabDomList[index];
    element.onclick = function () {
      for (let index = 0; index < tabDomList.length; index++) {
        const element = tabDomList[index];
        element.classList.remove('active')
      }
      activeIndex(index)
    }
  }
  setTimeout(() => {
    activeIndex(0)
  }, 0);
}