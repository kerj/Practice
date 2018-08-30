//$(document).ready(function() {
//   $("#listOfWeapons").submit(function(event) {
//      event.preventDefault();
//      var weaponList = {
//        oneHand,
//        twoHand: (arg) => {
//          return arg + ' butts'
//        }
//      }
//      weaponList.oneHand = $('#oneHand').val();
//      console.log(weaponList.oneHand);
//      console.log(weaponList.twoHand($('#twoHand').val()));
//    });
//});

$(document).ready(function()  {
  $('#listOfWeapons').submit(function(event)  {
    event.preventDefault();
    var weapons = [];
    var oneHander = $('#oneHand').val();
    var twoHander = $('#twoHand').val();
    weapons.push(oneHander);
    weapons.push(twoHander);

    $('#listOWeaps').text(weapons.toString());
    weapons.forEach(function(weapon) {
      alert("This weapon, " + weapon + ', is great!')
    });

  });
});
