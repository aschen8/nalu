  console.log("modal.js is connected");

  // Get the modal
  var modal = document.getElementById('addNewProductModal');

  // Get the button that opens the modal
  var newBtn = document.getElementById("addNewProductBtn");
  var saveBtn = document.getElementById("saveBtn");
  var cancelBtn = document.getElementById("cancelBtn");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on the button, open the modal 
  newBtn.onclick = function() {
      modal.style.display = "block";
  }

  // When the user clicks on <span> (x) or the cancel button, close the modal
  span.onclick = function() {
      modal.style.display = "none";
  }

  cancelBtn.onclick = function() {
      modal.style.display = "none";
  }

  // // When the user clicks anywhere outside of the modal, close it
  // window.onclick = function(event) {
  //     if (event.target == modal) {
  //         modal.style.display = "none";
  //     }
  // }