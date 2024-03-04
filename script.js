const scriptURL = 'https://script.google.com/macros/s/AKfycbyDIJXWr3-f0ko1gMCAiShoOQEv4p4eRXF4YuJ7SxVYpzaS33v1YOoNG4SK5PmUw_TtYg/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})