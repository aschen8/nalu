/* global moment */
// When the page loads, grab and display all of our inventory
$.get("/api/all", function(data) {
  if (data.length !== 0) {
    for (var i = 0; i < data.length; i++) {
      var row = $("<div>");
      row.addClass("Item");
      row.append("Item ID: " + data[i].item_id + "  //  ";
      row.append("Sku: " + data[i].sku + " // ";
      row.append("Product Name: " + data[i].product_name + "  //  ";
      row.append("Price: $" + data[i].price + "  //  ";
      row.append("Category: " + data[i].category_name + "  //  ";
      row.append("Quantity: " + data[i].stock_quantity + "\n";
      $("business").prepend(row);
    }
  }
});
// When manager adds to inventory (clicks addBtn)
$("#submitButton").on("click", function(event) {
  event.preventDefault();
  // Make a newItem object
  var newItem = {
    author: $("#author").val().trim(),
    body: $("#chirp-box").val().trim(),
    created_at: moment().format("YYYY-MM-DD HH:mm:ss")
  };
  console.log(newItem);
  // Send an AJAX POST-request with jQuery
  $.post("/api/new", newItem)
    // On success, run the following code
    .done(function() {
      var row = $("<div>");
      row.addClass("Item");
      row.append("Sku: " + data[i].sku + " // ";
      row.append("Product Name: " + data[i].product_name + "  //  ";
      row.append("Price: $" + data[i].price + "  //  ";
      row.append("Category: " + data[i].category_name + "  //  ";
      row.append("Quantity: " + data[i].stock_quantity + "\n";
      $("business").prepend(row);
      
    });
  row.append("Sku: " + data[i].sku + " // ";
      row.append("Product Name: " + data[i].product_name + "  //  ";
      row.append("Price: $" + data[i].price + "  //  ";
      row.append("Category: " + data[i].category_name + "  //  ";
      row.append("Quantity: " + data[i].stock_quantity + "\n";
      $("business").prepend(row);
