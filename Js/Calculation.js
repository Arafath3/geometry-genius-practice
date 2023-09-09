function commonInputField(id){
    const commonInputField = document.getElementById(id);
    const inputFieldString = commonInputField.value;
    const inputFieldValue = parseFloat(inputFieldString);
    return inputFieldValue;
}

function commonElementShow(id, values){
    const input = document.getElementById(id);
    const inputValueString = input.innerText;
    const inputValue = parseFloat(inputValueString);
    input.innerText = values;
}
// triangle 
document.getElementById('btn-triangle').addEventListener('click', function(){
    const triangleInputField1 = commonInputField('input1-triangle')
    const triangleInputField2 = commonInputField('input2-triangle')
    const area = .5 * triangleInputField1 * triangleInputField2;
    const triangleArea = commonElementShow('triangle-area', area);

})
// rectangle
document.getElementById('btn-rectangle').addEventListener('click', function(){
    const rectangleWidth = commonInputField('rectangle-width');
    const rectangleLength = commonInputField('rectangle-length');
    const area = rectangleWidth * rectangleLength;
    const rectangleArea = commonElementShow('rectanhle-area', area)
})

// parallelogram
document.getElementById('btn-parallelogram').addEventListener('click', function(){
    const parallelogramBase = commonInputField('parallelogram-base');
    const parallelogramHeight = commonInputField('parallelogram-height');
    const Area = parallelogramBase * parallelogramHeight;
    const parallelogramArea = commonElementShow('parallelogram-area', Area);
})
// rhombus
document.getElementById('btn-rhombus').addEventListener('click', function(){
    const rhombusD1 = commonInputField('rhombus-d1');
    const rhombusD2 = commonInputField('rhombus-d2');
    const area = .5 * rhombusD1 * rhombusD2;
    const rhombusArea = commonElementShow('rhombus-area', area);
})
// Ellipse
document.getElementById('btn-ellipse').addEventListener('click', function(){
    const ellipseRedius1 = commonInputField('ellipse-redius1');
    const ellipseRedius2 = commonInputField('ellipse-redius2');
    const ellArea = (Math.PI) * ellipseRedius1 * ellipseRedius2;
    const ellipseArea = commonElementShow('ellipse-area', ellArea);
})