function upDate(previewPic) {
  document.getElementById('image');
  image.style.backgroundImage = "url('" + previewPic.src + "')";
  document.getElementById('image').textContent = previewPic.alt;

}

function unDo() {
  document.getElementById('image').textContent = "Hover over an image below to display here.";
  document.getElementById('image').style.backgroundImage = "url('')";
}