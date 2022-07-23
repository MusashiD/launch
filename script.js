let launchDate = new Date('may 24, 2023 01:00:00')
function stopCounting() {
  clearInterval(idOfTime)
}

function timeCalc() {
  let now = new Date().getTime()

  let DifferenceInTime = launchDate - now

  let days = Math.floor(DifferenceInTime / (1000 * 60 * 60 * 24))

  if (days < 10) {
    days = '0' + days
  }

  let hours = Math.floor(
    (DifferenceInTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  )

  if (hours < 10) {
    hours = '0' + hours
  }

  let minutes = Math.floor((DifferenceInTime % (1000 * 60 * 60)) / (1000 * 60))

  if (minutes < 10) {
    minutes = '0' + minutes
  }

  let seconds = Math.floor((DifferenceInTime % (1000 * 60)) / 1000)

  if (seconds < 10) {
    seconds = '0' + seconds
  }

  let time = `${days} : ${hours} : ${minutes} : ${seconds}`

  if (DifferenceInTime < 0) {
    stopCounting()
  } else {
    document.querySelector('.timer').innerText = time
  }
}

const idOfTime = setInterval(timeCalc, 1000)
