let onChange = () => {
  const password = document.querySelector('input[name=password]')
  const confirm = document.querySelector('input[name=confirm-password]')

  confirm.value === password.value ? confirm.setCustomValidity('') : confirm.setCustomValidity('Passwords do not match.')
}

document.querySelectorAll('.form-input').forEach((e) => {
  e.addEventListener(
    'blur',
    () => {
      e.classList.add('touched')
    },
    false
  )
})

document.querySelector('#submit-button').addEventListener(
  'click',
  () => {
    document.querySelectorAll('.form-input').forEach((e) => {
      e.classList.add('submitted')
    })
  },
  false
)
