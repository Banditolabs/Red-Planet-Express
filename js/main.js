// create a variable for things you intend to use alot
const $input = $("input")
const $button = $("button")
const $aside = $("aside")
const nasaKey = "32ndWDdG9R2YQKYRUdErh6vj6S19DHAnxBAdNed6"

//get random picture
const marsPics = $.ajax(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${nasaKey}`)
.then((data) => {
    console.log (data)
    const nextFive = []
})
const marsWeather = $.ajax(`https://api.nasa.gov/insight_weather/?api_key=${nasaKey}&feedtype=json&ver=1.0`)
.then((data) =>{
    console.log (data)
//     const temp = ""
//     const windSpeed = ""
//     const B = ""
})
// get next 5 launches
const launches = $.ajax(`https://fdo.rocketlaunch.live/json/launches/next/5`)
.then((data) => {
    console.log (data)
    const nextFive =[]
})


