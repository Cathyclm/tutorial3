console.log("hello");




const button = document.querySelector('#button');

button.addEventListener('click',function(){
 const heightInput = document.querySelector('#height-input').value;
 const weightInput = document.querySelector('#weight-input').value;

  // console.log(('clicked~'));

  // 如果input是空的，就有一个弹窗提醒
  if (heightInput === '' || weightInput === '') {
    alert('please enter your value in');
    return;
  }

  // console.log('height', heightValue);
  // console.log('height type is', typeof heightValue);
  // console.log('weight', weightValue);
 
// Number.parseFloat('123.33') 把字符串string变为数字number
  const heightValue = Number.parseFloat(heightInput);
  const weightValue = Number.parseFloat(weightInput);

  // 如果是负数？··
  // 如果身高特别高，>2.5m --->alert
  // 如果体重特别重，>1000kg <10kg ----alert
  // normal range BIM 18.5-24.9

  const BMI = weightValue / (heightValue * heightValue);

  const BMIString = BMI.toFixed(2);
  console.log(`Your BMI is ${BMIString}`);

  // 判断身体状态，轻、中、重、超重？   

  const resultNode = document.querySelector('#result');
  resultNode.innerHTML = `Your BMI is ${BMIString}`;



  // const res = weightValue + heightValue;
  // console.log(`your weight + height is ${res}`);

});




