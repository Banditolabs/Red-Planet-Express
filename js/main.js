
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
})

const launchList = $.ajax(`https://fdo.rocketlaunch.live/json/launches/next/5`)
    .then((data) => {
        console.log (data)
        for (const element of data.result) {
            let $tr = $("<tr>")
            let $th = $("<th>")
            let $td1 = $("<td>")
            let $td2 = $("<td>")
            let $td3 = $("<td>")
            let date = new Date(element.sort_date*1000) // I want to get rid of some this extra date info
            let $launch = $("<option>")

            // `${element.slug} ${date} ${element.pad.location.country}, ${element.pad.location.state} ${element.provider.name}`

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
// Max 
function calculate() {
    $input.each(function (){
        packageStats.push($(this).val()) 
    })
    for (let i = 0; i < packageStats.length; i++) {
        let weight = packageStats [0]
        let length = packageStats [1]
        let width = packageStats [2]
        let height = packageStats [3]
    }
    console.log (packageStats)

}

$('#close-modal').on('click', function (){
    console.log ("wow")
    packageStats = []
}) 

        
        // let myModal = $('#modal-body')
        // $(document).on('shown.bs.modal', '#modal-body', function () {
        //     myModal.focus()
        // } )
    
    


////////////////////////
// Customer quote
////////////////////////

// It costs $30,000 dollars/LB to Mars
// 12,100 lb maximum shipping limit
// Maximum cargo dimensions are 43 ft X 17.1 ft


// The user will enter the dimensions of their cargo and it's weight
// The users selects the Launch they want
// They will click a button to submit
// An Invoice appears with the total cost and the details of their chosen launch.
// Ideally the invoice will appear as a popup overlay over the page. Hitting the "x" on that popup clears the fields and allows for new quote



// document.getElementById("submit").addEventListener("click", handler9);

// function handler9(e) {
//     let vocabEnglish = [];
//     let englishWords = document.getElementsByClassName("englishWord");

//     for (let i = 0; i < englishWords.length; i++) {
//         let englishWord = englishWords[i].value;
//         vocabEnglish.push(englishWord); 
//     }
//     console.log(vocabEnglish);
//     e.preventDefault()
// }