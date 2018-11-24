function encrypt()  {
  var array = []
  var input = $("#encrypt").val().toLowerCase().replace(/[^\w]/gi,"")
  var inputArray = input.split("")
  var columns = Math.ceil(Math.sqrt(input.length))
  if(columns*(columns-1)>= input.length){
    var rows = columns -1
  }else{var rows = columns}
  while(inputArray.length >= 1) {
    array.push(inputArray.splice(0, rows))
  }
  console.log(array)
}

function decrypt() {

}

$(document).ready(function()  {
  $("#enSubmit").click(function()  {
    encrypt();
    event.preventDefault();
  })
})
