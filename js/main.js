
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
})

const launchList = $.ajax(`https://fdo.rocketlaunch.live/json/launches/next/5`)
    .then((data) => {
        console.log (data)
        for (const element of data.result) {
            let $tr = $("<tr>", {"class":"text-center"})
            let $th = $("<th>")
            let $td1 = $("<td>")
            let $td2 = $("<td>")
            let $td3 = $("<td>")
            let date = new Date(element.sort_date*1000) // I want to get rid of some this extra date info
            let $launch = $("<option>")

            $th.text (element.slug)
            $td1.text (date)
            $td2.text (`${element.pad.location.country} - ${element.pad.location.state} `)
            $td3.text (element.provider.name)
            $launch.text (`${element.slug} || ${element.pad.location.country},${element.pad.location.state}`)

            $tr.append($th, $td1, $td2, $td3)
            $("tbody").append($tr)
            $("select").append($launch)
        }
    })
console.log("new")

let packageStats = []
let $input = $(".input")

$('#submit-btn').on('click', calculate)

// Max diameter is  (5.2 m, 17.2 ft)
// Max height is 230
// Max weight is 18,300 lb

function calculate() {
    $input.each(function (){
        packageStats.push($(this).val()) 
    })
    let weight = parseInt(packageStats [0])
    let length = parseInt(packageStats [1])
    let width = parseInt(packageStats [2])
    let height = parseInt(packageStats [3])
    let price = parseInt(weight) *30000
    let launch = $("#launch-select option:selected").text()
    // if (length||width > 12) {
    //     console.log (length)
    // }
    // if (height > 230) {
    //     alert ("Height must be under 230 ft")
    // }
    // if (weight > 18,300) {
    //     alert ("Weight must be under 18,300")
    // }
    // else { }
        $("#height").text(`Height: ${height}`)
        $("#length").text(`Length: ${length}`)
        $("#width").text(`Width: ${width}`)
        $("#weight").text(`Cargo weight: ${weight}`)
        $("#price").text(`Shipping cost: $${price}`)
        $("#launch").text (`${launch}`)
    console.log (launch)
    console.log (packageStats)

}

$('#close-modal').on('click', function (){
    console.log ("wow")
    packageStats = []
})
