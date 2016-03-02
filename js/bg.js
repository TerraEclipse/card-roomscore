$(function () {
  function setBackground () {
    var card = document.getElementsByClassName('card')[0]
    var bg = document.getElementsByClassName('background')[0]
    var state = card.getAttribute('data-state')
    var number = Math.floor(Math.random() * 3) + 1

    bg.setAttribute('style', `background-image: url(https://s3-us-west-2.amazonaws.com/roomscore/states-cropped/${state}-${number}.jpg)`)
  }
  setBackground()
});