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


$.get( "/index", function( response ) {
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

        if (resStock < resReorder) {

            // populate the divs
            $("#dashboardTable > tbody").append (
                '<tr><td>' + resSKU +
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
        }
});

// Instagram feed
// var feed = new Instafeed({
//   clientId: '[71dd0923bb6946368683a630724ab386]',
//   get: 'tagged',
//   tagName: '#northface',
//   resolution: 'low_resolution'
// });
// feed.run();

// $('#socialCardContent').append()


    
// $("saveBtn").click(function(){

//     var name=$("#name").val();
//     var category=$("#category").val();
//     var sku=$("#sku").val();
//     var description=$("#description").val();
//     var imgUrl=$("#imgUrl").val();
//     var cost=$("#cost").val();
//     var retailPrice=$("#retailPrice").val();
//     var salePrice=$("#salePrice").val();
//     var reorder=$("#reorder").val();

//     $.post( "/index", function( response ) {
//     console.log(response);

//         url: '/inventory',
//         type: 'POST',
//         data: 'name =' + name + '&category=' + category + '&sku=' + sku + '&description=' + description + '&imgURL=' + imgURL + '&cost=' + cost + '&retailPrice=' + retailPrice + '&salePrice=' + salePrice + '&reorder=' + reorder 


//        // success: function(result){
//        //       $('#response').remove();
//        //       $('#container').append('<p id = "response">' + result + '</p>');
//        //       $('#loading').fadeOut(500, function(){
//        //           $(this).remove();

//        //      });

//        // }

//     });         

//    return false;

// });

