let $ = document

let weightElem = $.querySelector('#weight')
let weightValElem = $.querySelector('#weight-val')

let heightElem = $.querySelector('#height')
let heightValElem = $.querySelector('#height-val')

let result = $.querySelector('#result')
let category = $.querySelector('#category')

weightElem.addEventListener('change', function(event){
    let weight = event.target.value
    weightValElem.innerHTML = weight + " kg"
    BMICalculation()
})

heightElem.addEventListener('change', function(event){
    let height = event.target.value
    heightValElem.innerHTML = height + " cm"
    BMICalculation()
})

function BMICalculation(){
    let convertedHeight = parseFloat(height.value / 100)
    let BMI = (weight.value / convertedHeight ** 2).toFixed(1)
    if(BMI < 18.5){
        category.innerHTML = 'underweight'
        result.innerHTML = BMI
        result.style.color = '#FFBE33'
    } else if(BMI > 18.5 && BMI < 24.9){
        category.innerHTML = 'normal weight'
        result.innerHTML = BMI
        result.style.color = '#5BFF33'
    } else if (BMI > 24.9 && BMI < 29.9){
        category.innerHTML = 'obese'
        result.innerHTML = BMI
        result.style.color = '#FC0707'
    }

}

// setInterval(BMICalculation, 10)