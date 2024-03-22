document.getElementById("from").addEventListener("click", function() {
  var block_id = document.getElementById("block_id").value;
  var color_id = document.getElementById("color_id").value;
  var grid_items = document.getElementsByClassName("grid-item");
  var block = document.getElementById(block_id);

  for (var i = 0; i < grid_items.length; i++) {
    grid_items[i].style.backgroundColor = "transparent";
  }

  block.style.backgroundColor = color_id;
});