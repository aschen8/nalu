
    $.get('/inventory', function(data) {
      console.log("inventory ajax call");
      console.log(data);

      var tbody = $('tbody');

      for (var i = 0; i < data.length; i++) {
        var row = data[i];

        console.log(row);

        for (var prop in row) {
          console.log(row[prop])
        }
      }
      // if (data.length !== 0) {
      //   for (var i = 0; i < data.length; i++) {
      //     var $tr = $('<tr>').append(
      //         $('<td>').text(data.item_id),
      //         $('<td>').text(data.sku),
      //         $('<td>').text(data.category_name),
      //         $('<td>').text(data.product_name),
      //         $('<td').text(data.cost),
      //         $('<td>').text(data.price),
      //         $('<td>').text(data.stock_quantity),
      //         $('<td>').text(data.reorder_quantity),
      //     ).appendTo('#dataTable');
      //     // console.log($tr.wrap('<p>').html());
      //     }
      //   }
      });

// When manager adds to inventory (clicks addBtn)
// $("#submitButton").on("click", function(event) {
//   event.preventDefault();
  // Make a newItem object
//   var newItem = {
//     author: $("#author").val().trim(),
//     body: $("#chirp-box").val().trim(),
//     created_at: moment().format("YYYY-MM-DD HH:mm:ss")
//   };
//   console.log(newItem);
//   // Send an AJAX POST-request with jQuery
//   $.post("/api/new", newItem)
//     // On success, run the following code
//     .done(function() {
//       var row = $("<div>");
//       row.addClass("Item");
//       row.append("Sku: " + data[i].sku + " // ";
//       row.append("Product Name: " + data[i].product_name + "  //  ";
//       row.append("Price: $" + data[i].price + "  //  ";
//       row.append("Category: " + data[i].category_name + "  //  ";
//       row.append("Quantity: " + data[i].stock_quantity + "\n";
//       $("business").prepend(row);
      
//     });
//   row.append("Sku: " + data[i].sku + " // ";
//       row.append("Product Name: " + data[i].product_name + "  //  ";
//       row.append("Price: $" + data[i].price + "  //  ";
//       row.append("Category: " + data[i].category_name + "  //  ";
//       row.append("Quantity: " + data[i].stock_quantity + "\n";
//       $("business").prepend(row);

// closes the document.ready function