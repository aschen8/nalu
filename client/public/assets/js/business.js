console.log("business.js is connected");

$.get( "/inventory", function( response ) {
  console.log(response);

    for(var i=0; i<response.length; i++) {
        // get object data
        resID = response[i].item_id;
        resSKU = response[i].sku;
        resCategory = response[i].category;
        resName = response[i].product_name;
        resCost = response[i].cost;
        resPrice = response[i].price;
        resStock = response[i].stock_quantity;
        resReorder = response[i].reorder_quantity;

        // faPencil = $().html("<a href=#><i id="#editID" class="fa fa-pencil"></i></a>")


        // create the ID's
        rowId = "#results" + (i+1);
        editID = "#edit" + (i+1);

        // populate the divs
        $("#dataTable > tbody").append (
            '<tr><td>' + resID +
            '</td> <td>' + resSKU + 
            '</td> <td>' + resCategory + 
            '</td> <td>' + resName + 
            '</td> <td>' + resCost + 
            '</td> <td>' + resPrice + 
            '</td> <td>' + resStock + 
            '</td> <td>' + resReorder + 
            // '</td> <td>' + faPencil +
            '</td></tr>'
            );

        }
});
