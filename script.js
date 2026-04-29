function toggleMode() {
  const body = document.body
  //if (body.classList.contains("light")) {
  // body.classList.remove("light")
  //} else {
  // body.classList.add("light")
  //}
  body.classList.toggle("light")

  const img = document.querySelector("#profile img")
  if (body.classList.contains("light")) {
    img.setAttribute("src", "./assets/assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/assets/avatar.png")
  }
}
