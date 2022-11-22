const myHours = window.prompt('Number of hours?', 0);

const seconds = 3600;

const result = myHours * seconds;

const isShowMessage = window.confirm('Show message?');

if(isShowMessage){
alert(`Diff betwen  ${myHours} and ${seconds} is ${result}`)
}
else{
alert(`Undefined`)
}

