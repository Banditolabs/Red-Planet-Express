
// create a variable for things you intend to use alot
const nasaKey = "32ndWDdG9R2YQKYRUdErh6vj6S19DHAnxBAdNed6"

//get random picture
const marsPics = $.ajax(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${nasaKey}`)
.then((data) => {
    console.log (data)
// Pulled img sources
    let img1 = Math.floor(Math.random() * 100)
    let img2 = Math.floor(Math.random() * 100)
    let img3 = Math.floor(Math.random() * 100) 
        //Should the max here be the length value of the array? 
        //How would I handel an array of unknown length?
    let firstPic = data.photos[img1].img_src
    let scndPic = data.photos[img2].img_src
    let thrdPic = data.photos[img3].img_src
// Slide selectors
    const firstSlide = $("#first-slide")
    const scndSlide = $("#second-slide")
    const thrdSlide = $("#third-slide")
// Image application
    firstSlide.attr("src",`${firstPic}`)
    scndSlide.attr("src",`${scndPic}`)
    thrdSlide.attr("src",`${thrdPic}`)
    
    // const launches = 
    $.ajax(`https://fdo.rocketlaunch.live/json/launches/next/5`)
    .then((data) => {
        console.log (data)
        // I need to select the correct cell or row somehow
        const tableRows = []
        tableRows.push ($(".launch-row"))
        // for (let i = 1; i < tableRows.length; i++) {
        //     tableRows [i] =
        //   }
        console.log (tableRows)
        tableRows.forEach(element => {
            // element.[0][1].innerText = data.
        })
        // These constans need to interpolate the correct index 1-5 based on the current selected row
        const date = ""
        const location = ""
        const time = ""
        const provider =""

    })
})
// const marsWeather = $.ajax(`https://api.nasa.gov/insight_weather/?api_key=${nasaKey}&feedtype=json&ver=1.0`)
// .then((data) =>{
//     console.log (data)
// //     const temp = ""
// //     const windSpeed = ""
// //     const B = ""
// })
// get next 5 launches



