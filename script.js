//Done in regular javascript

// const newItem = document.createElement("li");
// const newItemText = document.createTextNode("Vegan Sausage");
// newItem.appendChild(newItemText);
// const groceryList = document.getElementById("list");
// groceryList.appendChild(newItem)

//Done in jQuery
/////This will execute only AFTER the document is created
$(document).ready(() => {
  //How to add a new li DOM node to the DOM
  const newItem = $("<li>Vegan Sausage</li>")
  $("#list").append(newItem)

  //Adding a click event handle listener
  // $('#list').on('click', (event) => {
  //   console.log(event.pageX)
  // })
  //Example of how to add and remove classes
  $("#list").removeClass("groceryList")
  $("#list").addClass("bigMac")
})

//Short hand of document ready

// $(() => {
//   const newItem = $("<li>Vegan Sausage</li>")
//   $("#list").append(newItem)

// })


