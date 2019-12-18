
function ready() {
    document.body.style.background = "#EAE7DC";
    // slider variables
    var slider = document.getElementById("myRange");
    var output = document.getElementById("demo");
    let date = document.getElementById("typer");
    output = slider.value;
    

    date.onchange = function() {
        output = date
    }
    //continues to change sliders number if moved
    slider.oninput = function() {
        output = this.value;    
        document.getElementById("def").innerHTML=" ";
        def.append(output + " C.E.");
        console.log(output);

        // swaping images based on slider # using if statements
        if (output < 99) {
            document.getElementById('map').src = "https://www.euratlas.net/history/europe/1/1.jpg"
           document.getElementById("events").innerHTML=" ";
            events.append("43 CE: Claudiuses conquest of Britain");
        }
        if(output >= 100 && output <= 199) {
            document.getElementById('map').src = "https://www.euratlas.net/history/europe/100/100.jpg"
            document.getElementById("events").innerHTML=" ";
            events.append("122-132 CE: Hadrian's Wall across Northern England.");        
        }
        if(output >= 200 && output <= 299) {
            document.getElementById('map').src = "https://www.euratlas.net/history/europe/200/200.jpg"
            document.getElementById("events").innerHTML=" ";
            events.append("235-284 CE: Crisis of the 3rd Century");
        }
        if(output >= 300 && output <= 399) {
            document.getElementById('map').src = "https://www.euratlas.net/history/europe/300/300.jpg"
            document.getElementById("events").innerHTML=" ";
            events.append("306-337: Constantine the Great , ends persecution of Christians in the Roman Empire");
        }
        if(output >= 400 && output <= 499) {
            document.getElementById('map').src = "https://www.euratlas.net/history/europe/400/400.jpg"
            document.getElementById("events").innerHTML=" ";
            events.append("476 CE: Fall of Rome");
        }
        if(output >= 500 && output <= 599) {
            document.getElementById('map').src = "https://www.euratlas.net/history/europe/500/500.jpg"
            document.getElementById("events").innerHTML=" ";
            events.append("");
        }
        if(output >= 600 && output <= 699) {
            document.getElementById('map').src = "https://www.euratlas.net/history/europe/600/600.jpg"
            document.getElementById("events").innerHTML=" ";
            events.append("");
        }
        if(output >= 700 && output <= 799) {
            document.getElementById('map').src = "https://www.euratlas.net/history/europe/700/700.jpg"
            document.getElementById("events").innerHTML=" ";
            events.append("");
        }
        if(output >= 800 && output <= 899) {
            document.getElementById('map').src = "https://www.euratlas.net/history/europe/800/800.jpg"
            document.getElementById("events").innerHTML=" ";
            events.append("");
        }
        if(output >= 900 && output <= 999) {
            document.getElementById('map').src = "https://www.euratlas.net/history/europe/900/900.jpg"
            document.getElementById("events").innerHTML=" ";
            events.append("");
        }
        if(output >= 1000 && output <= 1099) {
            document.getElementById('map').src = "https://www.euratlas.net/history/europe/1000/1000.jpg"
            document.getElementById("events").innerHTML=" ";
            events.append("");
        }
        if(output >= 1100 && output <= 1199) {
            document.getElementById('map').src = "https://www.euratlas.net/history/europe/1100/1100.jpg"
            document.getElementById("events").innerHTML=" ";
            events.append("");
        }
        if(output >= 1200 && output <= 1299) {
            document.getElementById('map').src = "https://www.euratlas.net/history/europe/1200/1200.jpg"
            document.getElementById("events").innerHTML=" ";
            events.append("");
        }
        if(output >= 1300 && output <= 1399) {
            document.getElementById('map').src = "https://www.euratlas.net/history/europe/1300/1300.jpg"
            document.getElementById("events").innerHTML=" ";
            events.append("");
        }
        if(output >= 1400 && output <= 1499) {
            document.getElementById('map').src = "https://www.euratlas.net/history/europe/1400/1400.jpg"
            document.getElementById("events").innerHTML=" ";
            events.append("");
        }
        if(output >= 1500 && output <= 1599) {
            document.getElementById('map').src = "https://www.euratlas.net/history/europe/1500/1500.jpg"
            document.getElementById("events").innerHTML=" ";
            events.append("");
        }
        if(output >= 1600 && output <= 1699) {
            document.getElementById('map').src = "https://www.euratlas.net/history/europe/1600/1600.jpg"
            document.getElementById("events").innerHTML=" ";
            events.append("");
        }
        if(output >= 1700 && output <= 1799) {
            document.getElementById('map').src = "https://www.euratlas.net/history/europe/1700/1700.jpg"
            document.getElementById("events").innerHTML=" ";
            events.append("");
        }
        if(output >= 1800 && output <= 1899) {
            document.getElementById('map').src = "https://www.euratlas.net/history/europe/1800/1800.jpg"
            document.getElementById("events").innerHTML=" ";
            events.append("");
        }
        if(output >= 1900 && output <= 1999) {
            document.getElementById('map').src = "https://www.euratlas.net/history/europe/1900/1900.jpg"
            document.getElementById("events").innerHTML=" ";
            events.append("");
        }
        if(output >= 2000 && output <= 2099) {
            document.getElementById('map').src = "https://www.euratlas.net/history/europe/2000/2000.jpg"
        document.getElementById("events").innerHTML=" ";
            events.append("");
        }
    }




}

document.addEventListener("DOMContentLoaded", ready)