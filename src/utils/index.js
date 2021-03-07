function isNumberKey(evt) {
  let charCode = evt.which ? evt.which : event.keyCode

  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    evt.preventDefault()
    return false
  }

  return true
}

export { isNumberKey }
