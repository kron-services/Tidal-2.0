function dragElement(element, container) {
    let posX = 0;
    let posY = 0;
  
    element.querySelector('window-header')?.addEventListener('mousedown', dragMouseDown)

    function dragMouseDown (e: MouseEvent): void {
        e.preventDefault()
        closeAll()
    
        posX = e.clientX
        posY = e.clientY
    
        document.onmouseup = closeDragElement
        document.onmousemove = elementDrag
  }
  dragElement(someElement, someContainer);
}

function elementDrag (e: MouseEvent): void {
    e.preventDefault()

    const dx = e.clientX - posX
    const dy = e.clientY - posY

    const newTop = element.offsetTop + dy
    const newLeft = element.offsetLeft + dx

    const containerWidth = container.offsetWidth
    const containerHeight = container.offsetHeight

    if (newTop >= 0 && newTop + element.offsetHeight <= containerHeight) {
      element.style.top = `${newTop}px`
    }

    if (newLeft >= 0 && newLeft + element.offsetWidth <= containerWidth) {
      element.style.left = `${newLeft}px`
    }

    posX = e.clientX
    posY = e.clientY
  }

  function closeDragElement (): void {
    document.onmouseup = null
    document.onmousemove = null
    container.onmouseleave = null
  }

  function closeAll (): void {
    closeDragElement()
    container.onmouseenter = null
  }



