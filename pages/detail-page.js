// add event handler
function submitComment() {
    // gather data
    const inputField = document.getElementById('name')
    const name = inputField.value
    const textArea = document.getElementById('msg')
    const msg = textArea.value
    
    // create the elements you need
    const comment = document.createElement('section')
    const h3 = document.createElement('h3')
    const p = document.createElement('p')

    h3.innerHTML = `${name} said:` // <------ dus dit, goed lezen wat er staat!
    p.innerHTML = `${msg}`
    comment.classList.add('comment')
    comment.appendChild(h3)
    comment.appendChild(p)

    const commentSection = document.getElementById('comments')
    commentSection.appendChild(comment)

    inputField.value = null
    textArea.value = null


    
  }