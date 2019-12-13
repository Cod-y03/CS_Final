
function ready() {
    document.body.style.background = "#EAE7DC";
    // slider variables
    var slider = document.getElementById("myRange");
    var output = document.getElementById("demo");
    output.innerHTML = slider.value;

    //continues to change sliders number if moved
    slider.oninput = function() {
        output.innerHTML = this.value;
        document.getElementById("def").innerHTML=" ";
        def.append(output.innerHTML);
    }
    // swaping images based on slider using if statements
    if (output = 1) {
        document.getElementById('map').src = "https://www.euratlas.net/history/europe/1/1.jpg";
    }else if(output = 100) {
        document.getElementById('map').src = "https://www.euratlas.net/history/europe/100/100.jpg"
    }

}

document.addEventListener("DOMContentLoaded", ready)