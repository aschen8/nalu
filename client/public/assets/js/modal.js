console.log("modal.js is connected");


var modal = $('#addNewProductModal');
var form = $('#newProductForm');
var newBtn = $("#addNewProductBtn");
var saveBtn = $("#saveBtn");
var cancelBtn = $("#cancelBtn");
var progress = $('.progress');
var close = $(".close");

// When the user clicks on the button, open the modal 
newBtn.click(function() {
  modal.show();
});

// When the user clicks on <span> (x) or the cancel button, close the modal
close.click(function() {
  modal.hide();
});

cancelBtn.click(function() {
  modal.hide();
});

saveBtn.click(function() {
  alert("Saved!");
  modal.hide();
});
