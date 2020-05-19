document
  .getElementById('unlock-trigger')
  .addEventListener('click', e => {
    e.preventDefault()

    const lockScreenForm = document.getElementById('lock-screen-form')

    e.currentTarget.closest('.buttons').classList.add('is-hidden')

    lockScreenForm.classList.remove('is-hidden')

    lockScreenForm.getElementsByTagName('input')[0].focus()

    lockScreenForm.addEventListener('submit', e => {
      e.preventDefault()

      const submitButton = lockScreenForm.getElementsByTagName('button')[0]

      submitButton.classList.add('is-loading')

      setTimeout(() => {
        document.location.href = 'index.html'
      }, 500)
    })
  })
