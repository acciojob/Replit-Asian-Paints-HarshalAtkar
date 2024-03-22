//your JS code here. If required.
document.getElementById("from").addEventListener("click", function() {
  var block_id = document.getElementById("block_id").value;
  var color_id = document.getElementById("colour_id").value;
  var grid_items = document.getElementsByClassName("grid-item");
  var block = document.getElementById(block_id);

  for (var i = 0; i < grid_items.length; i++) {
    grid_items[i].style.backgroundColor = "transparent";
  }

  block.style.backgroundColor = color_id;
});

document.getElementById("reset_button").addEventListener("click", function() {
  var blocks = document.getElementsByClassName("grid-item");
  for (var i = 0; i < blocks.length; i++) {
    blocks[i].style.backgroundColor = "transparent";
  }
});
