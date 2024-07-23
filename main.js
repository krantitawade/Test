console.log('hi');


function myFunction() {
  
  let inputValue = document.getElementById('myInput').value;

  console.log(inputValue);

  document.getElementById('test').innerHTML = inputValue.toUpperCase();

  var a = document.getElementById('myUL').innerText;
  var anchorlink = document.getElementById('myUL').textContent;
  console.log(a);
  console.log(anchorlink);


}
