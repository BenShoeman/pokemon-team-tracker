var td_change = undefined

var b64_url = "" // This will get set to the result of calling get_base64
const get_base64 = (file) => new Promise((resolve, reject) => {
  const reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onload = () => resolve(reader.result)
  reader.onerror = (error) => reject(error)
})

function load_fields()
{
  for (var i = 1; i <= 6; i++)
  {
    bg_value = localStorage.getItem("pokemon" + i)
    if (bg_value !== null)
    {
      var td = document.getElementById("pokemon" + i)
      td.style.backgroundImage = bg_value
    }

    text_value = localStorage.getItem("name" + i)
    if (text_value !== null)
    {
      var inpt = document.getElementById("name" + i)
      inpt.value = text_value
    }
  }
}

function clear_fields()
{
  if (confirm("Do you want to clear all images and text fields?"))
  {
    for (var i = 1; i <= 6; i++)
    {
      localStorage.removeItem("pokemon" + i)
      var td = document.getElementById("pokemon" + i)
      td.style.backgroundImage = "none"

      localStorage.removeItem("name" + i)
      var inpt = document.getElementById("name" + i)
      inpt.value = ""
    }
  }
}

function add_img(td)
{
  td_change = td
  var finpt = document.getElementById("fileinput")
  finpt.click()
}

function clear_img(td, evt)
{
  // Prevent context menu from popping up
  evt.preventDefault()
  evt.stopPropagation()
  localStorage.removeItem(td.id)
  td.style.backgroundImage = "none"
}

function add_img_handler(finpt)
{
  if (td_change)
  {
    get_base64(finpt.files[0]).then(function (result) {
      var td = td_change
      b64_url = result
      td_change.style.backgroundImage = "url('" + b64_url + "')"
      localStorage.setItem(td_change.id, "url('" + b64_url + "')") // Save the url to local storage
    })
    finpt.value = ""
  }
}

function change_text(inpt)
{
  localStorage.setItem(inpt.id, inpt.value)
}

function prevent_escape_delete(evt)
{
  if (evt.key === "Escape")
  {
    evt.preventDefault()
  }
}

// Global keypress events
document.onkeydown = function(evt) {
  evt = evt || window.event;
  if (evt.key === "Delete")
  {
    clear_fields()
  }
  else if (evt.key === "Escape")
  {
    document.activeElement.blur()
  }
}

// Load all previous images/text fields when page is loaded
document.addEventListener("DOMContentLoaded", load_fields)