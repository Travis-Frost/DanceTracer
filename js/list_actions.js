// JS for the dancer list

var dancer_input = document.getElementById("new_dancer"); //new dancer
var add_button = document.getElementById("add_button"); //first button
var not_in_vip_holder = document.getElementById("not_in_vip"); // available dancers
var in_vip_holder= document.getElementById("in_vip"); // dancers in vip

// New Dancer List Item
var create_dancer_element = function(dancer_string) {
  //Create List Item
  var list_item = document.createElement("li");

  // vip_checkbox (checkbox)
  var vip_checkbox = document.createElement("input");
  //label
  var label = document.createElement("label");
  //input (text)
  var edit_input = document.createElement("input"); // text
  //button.edit
  var edit_button = document.createElement("button");
  //button.delete
  var delete_button = document.createElement("button");


  //Each element needs modifying

  // checkBox.type = "checkbox";
  vip_checkbox.class = "form-check-input"; /* bootstrap class forn the checkbox */
  vip_checkbox.type = "checkbox";
  edit_input.type = "text";

  edit_button.innerText = "Edit";
  edit_button.className = "edit";
  delete_button.innerText = "Delete";
  delete_button.className = "delete";

  label.innerText = dancer_string;

  //Each element needs appending
  // list_item.appendChild(checkBox);
  list_item.appendChild(vip_checkbox);
  list_item.appendChild(label);
  list_item.appendChild(edit_input);
  list_item.appendChild(edit_button);
  list_item.appendChild(delete_button);

  return list_item;
}

//Add a new dancer
var add_dancer = function() {
  console.log("Add dancer...");
  //Create a new list item with the text from new_dancer
  var list_item = create_dancer_element(dancer_input.value);
  //Append list_item to not_in_vip_holder
  not_in_vip_holder.appendChild(list_item);
  bind_list_events(list_item, dancer_in_vip);

  dancer_input.value = "";
}

//Edit an existing Dancer
var edit_dancer = function() {
  console.log("Edit dancer...");

  var list_item = this.parentNode;

  var edit_input = list_item.querySelector("input[type=text]");
  var label = list_item.querySelector("label");

  var containsClass = list_item.classList.contains("edit_mode");

  //if the class of the parent is .edit_mode
  if(containsClass) {
    //Switch from .edit_mode
    //label text become the input's value
    label.innerText = edit_input.value;
  } else {
    //Switch to .edit_mode
    //input value becomes the label's text
    edit_input.value = label.innerText;
  }
  //Toggle .edit_mode on the list item
  list_item.classList.toggle("edit_mode");
}

//Delete an existing task
var delete_dancer = function() {
  console.log("Delete dancer...");
  var list_item = this.parentNode;
  var ul = list_item.parentNode;

  //Remove the parent list item from the ul
  ul.removeChild(list_item);
}

//Mark dancer as in vip
var dancer_in_vip = function() {
  console.log("Dancer going to VIP...");
  //Append the dancer list item to the #completed-tasks
  var list_item = this.parentNode;
  in_vip_holder.appendChild(list_item);
  bind_list_events(list_item, dancer_not_in_vip);
}

//Mark dancer as not in vip
var dancer_not_in_vip = function() {
  console.log("Dancer leaving VIP...");
  //Append the dancer list item to the not_in_vip_holder
  var list_item = this.parentNode;
  not_in_vip_holder.appendChild(list_item);
  bind_list_events(list_item, dancer_in_vip);
}

var bind_list_events = function(dancer_list_item, checkBoxEventHandler) {
  console.log("Bind list item events");
  //select list_item's children
  var vip_checkbox = dancer_list_item.querySelector("input[type=checkbox]");
  var edit_button = dancer_list_item.querySelector("button.edit");
  var delete_button = dancer_list_item.querySelector("button.delete");

  //bind edit_dancer to edit_button
  // edit_button.onclick = edit_dancer;
  edit_button.addEventListener("click", edit_dancer);
  //bind delete_dancer to delete button
  // delete_button.onclick = delete_dancer;
  delete_button.addEventListener("click", delete_dancer);

  vip_checkbox.onchange = checkBoxEventHandler;
}

//Set the click handler to the add_dancer function
add_button.addEventListener("click", add_dancer);

//cycle over not_in_vip_holder ul list items
for(var i = 0; i < not_in_vip_holder.children.length; i++) {
  //bind events to list item's children (dancer_in_vip)
  bind_list_events(not_in_vip_holder.children[i], dancer_in_vip);
}

//cycle over in_vip_holder ul list items
for(var i = 0; i < in_vip_holder.children.length; i++) {
  //bind events to list item's children (dancer_not_in_vip)
  bind_list_events(in_vip_holder.children[i], dancer_not_in_vip);
}
