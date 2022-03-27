
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
    
    // const launches = {This is from a time when it wasn't nested}
    $.ajax(`https://fdo.rocketlaunch.live/json/launches/next/5`)
    .then((data) => {
        console.log (data)
        for (const element of data.result) {
            let $tr = $("<tr>")
            let $th = $("<th>")
            let $td1 = $("<td>")
            let $td2 = $("<td>")
            let $td3 = $("<td>")
            let date = new Date(element.sort_date*1000)
            console.log (date)

            $th.text (element.slug)
            $td1.text (date)
            $td2.text (`${element.pad.location.country} - ${element.pad.location.state} `)
            $td3.text (element.provider.name)

            $tr.append($th, $td1, $td2, $td3)
            $("tbody").append($tr)
        }
    })
})

////////////////////////
// Cost Calculations
////////////////////////
