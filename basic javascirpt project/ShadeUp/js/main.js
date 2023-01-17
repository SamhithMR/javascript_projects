function randompickerbtn() {
    // 1.used random function to generate random number 
    // 2. used toString(16) to convert the number to hexa decimal number
    let randomHex = Math.floor(Math.random() * 16000000).toString(16);
    document.querySelector("#randomValuePara").textContent = `#${randomHex}`
    document.querySelector("#randomPicker").style.backgroundColor = `#${randomHex}`
}

function hexFindbtn() {
    let x = document.querySelector("#hexInput").value
    try {
        //if the input is valid then convert it to rgb and change the value of background
        document.querySelector("#color-box").style.backgroundColor = `rgb(${x.convertToRGB()})`
    } catch {
        document.querySelector("#hexInput").value = "invalid!"
    }
}

function RGBFindbtn() {
    let RGBInputs = document.querySelectorAll("#BInput,#GInput,#RInput")
    //since the queryselectorAll returns object convert it to array
    //from each elements in array get the value and convert it to nubmers
    RGBInputs = [...RGBInputs].map(x => +x.value);
    document.querySelector("#rgb-color-box").style.backgroundColor = `rgb(${RGBInputs})`
}

function RangeSelector() {
    let RGBInputs = document.querySelectorAll("#RrInput, #GrInput, #BrInput")
    //since the queryselectorAll returns object convert it to array
    //from each elements in array get the value and convert it to nubmers
    RGBInputs = [...RGBInputs].map((x) => +x.value);
    document.querySelector("#range-color-box").textContent = `rgb(${RGBInputs})`
}

// hex to rgb converter
String.prototype.convertToRGB = function () {
    //proceed if the hex input contain #
    if (this.search(/^#/g) == 0) {
        //proced if the hex input contains 6 digits
        if (this.search(/^#?([a-f0-9]{6})$/g) == 0) {
            let ttt = []

            // using parseInt inbuilt function convert 2 charecter into hex value
            for (let i = 1; i < this.length; i = i + 2) {
                ttt.push(parseInt(this.slice(i, i + 2), 16))
            }
            return ttt.toString()

        }
        //if the hexa decimal value contains only 3 digits that convert it to six digits
        // example:- #123 -> #112233
        else if (this.search(/^#?([a-f0-9]{3})$/g) == 0) {
            return this.replace(/#([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])/g, "#$1$1$2$2$3$3").convertToRGB()
        }

        //if there are any invalid charecters before # then remove it
        else if (this.search(/^[^#]*#/g) == 0) {
            return this.replace(/^[^#]*#/g, '').convertToRGB()
        }

        //if the value contains values out of range return invalid
        else {
            return "invalid!"
        }
    }
    //if the hex input does not contain # than # must be padded
    else {
        return this.padStart(this.length + 1, "#").convertToRGB()
    }

};

function hexConvbtn() {
    let HexInput = document.getElementById("hexCInp");
    //convert hex to rgb and display it
    document.getElementById("hexCOut").textContent = `rgb(${HexInput.value.convertToRGB()})`
}

function rgbConvbtn() {
    let RGBInput = document.querySelectorAll("#RCInput, #GCInput, #BCInput")
    //since the queryselectorall returns objects convert it to arrya using destructuring method
    let arrOfHex = [...RGBInput].map((x) => {
        //if the value is in between 0 and 255 convert to rgb value using tostring method
        if (+x.value >= 0 && +x.value <= 255) {
            //if the value is single digit padign it with 0
            return (+x.value).toString(16).padStart(2, "0")
        } else {
            return ` invalid! `
        }
    })
    document.querySelector("#rgbCOut").textContent = `#${arrOfHex.join("")}`
}