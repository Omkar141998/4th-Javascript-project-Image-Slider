(function () {
    const pictures = [
        "img1",
        "img2",
        "img3",
        "img4",
        "img5",
        "img6",
        "img7",
        "img8",
        "img9",
        "img10",
        "img11",
        "img12",
        "img13",
        "img14"
        
    ];

    const buttons = document.querySelectorAll(".addbtn")
    const imageDiv = document.querySelector(".img-container")

    let counter = 0

    buttons.forEach(function (button) {
        button.addEventListener("click", function (e) {
            if(button.classList.contains('btn-left')){
                counter--
                if(counter < 0){
                     counter = pictures.length - 1
                }
                imageDiv.style.background = `url('image/${pictures[counter]}.jpg')`
        
            }

            if(button.classList.contains('btn-right')){
                counter++
                if(counter > pictures.length - 1){
                counter = 0
                }
            imageDiv.style.background = `url('image/${pictures[counter]}.jpg')`
        
            }
        })
        
    })

})()