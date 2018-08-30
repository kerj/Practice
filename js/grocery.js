$(document).ready(function() {
  $('#listOfGroceries').submit(function(event) {
    event.preventDefault();
    var groceryListItems = []
    var listSpots = [
      "item1", "item2", "item3",
      "item4", "item5", "item6",
      "item7", "item8", "item9",
      "item10", "item11", "item12"
    ]

    listSpots.forEach(function(listspot){
      var formInput = $('#' + listspot).val();
    //  $('#' + listspot).text(formInput);
      //idk if you need this ^^
      // you can just push to grovery list items because formInput is set as the listspot value
      // i think the next step is to create something that populates whereever you want to show
      // the grocery list with the groceryListItems array.
      // maybe:
            // groceryItemsList.forEach(function(item){
            //   $('#listDisplay').append(<li> + 'item' + </li>)
            // })
          //console.log(formInput); this creates a list from what is inputed from html
          groceryListItems.push(formInput); //this takes list items and places them into the global array grocerylistItems
    });
    var finalList = groceryListItems.filter(Boolean)
    finalList.sort(); //alphabetical order
      console.log(finalList);
    finalList.forEach(function(item){
      $("#groceryList").append("<li>" + item.charAt(0).toUpperCase() + item.slice(1) + "</li>")
    });
    $('#listOfGroceries').hide();
  });
});
