document.querySelectorAll('.form-input').forEach((e) => {
  e.addEventListener(
    'blur',
    () => {
      e.classList.add('touched')
    },
    false
  )
})

document.querySelector('#submit-button').addEventListener('click', () => {
  document.querySelectorAll('.form-input').forEach((e) => {
    e.classList.add('submitted')
  })
}, false)
