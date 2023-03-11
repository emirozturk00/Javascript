// Kosullarla Calismak Bolum Sonu Calismasi:

const SUCCESSFUL = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-patch-check-fill" viewBox="0 0 16 16">
  <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"/>
</svg>
`
const UNSUCCESSFUL = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-patch-minus" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M5.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z"/>
  <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z"/>
</svg>
`

let examGrade = prompt("Puani Girin")
let textInfo;
let info = document.querySelector("#info")

if (examGrade >= 0 && examGrade <= 100) {
    // tum if yapilari buraya gelsin
    textInfo = SUCCESSFUL
    info.classList.add('text-success')
    if (examGrade >= 90) {
        textInfo += " AA"
    } else if (examGrade >= 85) {
        textInfo += " BA"
    } else if (examGrade >= 80) {
        textInfo += " BB"
    } else if (examGrade >= 75) {
        textInfo += " CB"
    } else if (examGrade >= 70) {
        textInfo += " CC"
    } else if (examGrade >= 65) {
        textInfo += " DC"
    } else if (examGrade >= 60) {
        textInfo += " DD"
    } else if (examGrade >= 50) {
        textInfo += " FD"
    } else if (examGrade < 50) {
        textInfo = `${UNSUCCESSFUL} FF`
        info.classList.remove('text-success')
        info.classList.add('text-danger')
    }
} else {
    textInfo = "Bilgiler Dogru Degil"
}


info.innerHTML = `${textInfo} -> ${examGrade}`