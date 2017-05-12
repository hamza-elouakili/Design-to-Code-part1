window.onload = function() {
  var acc = document.getElementsByClassName("accordion")
  var i

  for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
      this.classList.toggle("active")
      var panel = this.firstElementChild
      var icons = this.nextElementSibling
      var icon_down = icons.firstElementChild
      var icon_up = icons.lastElementChild
      if (panel.style.display === "block") {
        panel.style.display = "none"
        icon_down.style.display = "block"
        icon_up.style.display = "none"
      } else {
        panel.style.display = "block"
        icon_down.style.display = "none"
        icon_up.style.display = "block"
      }
    }
  }
}
