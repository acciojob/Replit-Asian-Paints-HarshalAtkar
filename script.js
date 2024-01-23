//your JS code here. If required.
document.getElementById("from").addEventListener("click", function() {
  var block_id = document.getElementById("block_id").value;
  var color_id = document.getElementById("color_id").value;
  var block = document.getElementById(block_id);
  block.style.backgroundColor = color_id;
});

document.getElementById("reset_button").addEventListener("click", function() {
  var blocks = document.getElementsByClassName("grid-item");
  for (var i = 0; i < blocks.length; i++) {
    blocks[i].style.backgroundColor = "transparent";
  }
});
