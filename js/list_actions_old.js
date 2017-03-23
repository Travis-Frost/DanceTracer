var name_input = document.getElementById("new_dancer");  // New dancer
var add_button = document.getElementsByTagName("button")[0]; // Get the first button, don't like this but will use it for now
var available_dancers = document.getElementById("available_dancers");
var unavailable_dancers = document.getElementById("unavailable_dancers");

console.log(name_input);
// creates new dancer list item
var create_new_dancer = function(dancer_string) {
  var list_item = document.createElement("li");
  // var check_box = document.createElement("input"); here just incase... need to remove
  var label = document.createElement("label");// Dance Name
  var edit_input = document.createElement("input"); // text field
  var edit_button = document.createElement("button");
  var delete_button = document.createElement("button");
  var vip_half_hour_button = document.createElement("button");
  var vip_full_hour_button = document.createElement("button");

  // Modify each element
  // check_box.ype = "checkbox";  here just incase,should remove
  edit_input.type = "text";

  // Edit Button
  edit_button.innerText = "Edit";
  edit_button.className = "edit"; //pretty sure i can add bootstrap classes here
  // Delete Button
  delete_button.innerText = "Delete";
  delete_button.className = "delete";
  // Half Hour VIP Button
  vip_half_hour_button.innerText = "30 Minutes";
  vip_half_hour_button.className = "vip_half_hour_button";
  // Full Hour VIP Button
  vip_full_hour_button.innerText = "1 Hour";
  vip_full_hour_button.className = "vip_full_hour_button";

  label.innerText = dancer_string;

  // Append each element
  // list_item.appendChild(check_box);
  list_item.appendChild(label);
  list_item.appendChild(edit_input);
  list_item.appendChild(edit_button);
  list_item.appendChild(delete_button);
  list_item.appendChild(vip_half_hour_button);
  list_item.appendChild(vip_full_hour_button);

  return list_item;
}

// Add a dancer
var add_dancer = function() {
  console.log("Add Dancer...");
  // call the dancer list_item creation function
  var list_item = create_new_dancer(name_input.value);
  // Add the new dancer list_item to the available_dancers list
  available_dancers.appendChild(list_item);
  bind_dancer_events(list_item, in_vip);

  name_input.value = "";
}

// Edit an existing dancer
var edit_dancer = function() {
  console.log("Editing dancer name...");

  // target the list_item i'm fucused on... not sure how to exlain it.. ask about it
  var list_item = this.parentNode;

  // this querySelector is getting the element input of the list_item with type - text
  var edit_input = list_item.querySelector("input[type=text]");
  // this querySelector is getting the element label - i think anyway
  var label = list_item.querySelector("label");

  var contains_class = list_item.classList.contains("edit_mode");

  // if the class of the parent is .edit_mode
  if(contains_class) {
    // Switch from edit_mode, label text becomes the edit_input
    label.innerText = edit_input.value;
  } else {
    // Switch to edit_mode, edit_input becomes te label text
    edit_input.value = label.innerText;
  }
  list_item.classList.toggle("edit_mode");
}

// Delete an existing dancer
var delete_dancer = function() {
  console.log("Deleting a dancer... ");
  var list_item = this.parentNode;
  var ul = list_item.parentNode;

  // Remove the parrent dancer list item from the ul
  ul.removeChild(list_item);
}

// mark dancer list_item as in VIP
var in_vip = function() {
  console.log("Dancer going to VIP...");
  // WILL NEED TO ADD 30 MINUTES VS 1 HOUR
  // AND TIMER??
  var list_item = this.parentNode;
  // append li to unavailable_dancers list
  unavailable_dancers.appendChild(list_item);
  bind_dancer_events(list_item, not_in_vip);
}

// mark dancer list_item as not in VIP
var not_in_vip = function() {
  console.log("Dancer leaving VIP... ");

  var list_item = this.parentNode;
  // append li to unavailable_dancers list
  available_dancers.appendChild(list_item);
  bind_dancer_events(list_item, in_vip);
}

var bind_dancer_events = function(dancer_list_item, click_event_handler) {
  console.log("Event binding...");
  // var check_box = dancer_list_item.querySelector("input[type=checkbox]");
  var edit_button = dancer_list_item.querySelector("button.edit");
  var delete_button = dancer_list_item.querySelector("button.delete");
  var vip_half_hour_button = dancer_list_item.querySelector("button.vip_half_hour_button");
  var vip_full_hour_button = dancer_list_item.querySelector("button.vip_full_hour_button");

  // bind the functions to the buttons
  edit_button.onClick = edit_dancer;
  delete_button.onClick = delete_dancer;
  vip_half_hour_button.onClick = click_event_handler;
  vip_full_hour_button.onClick = click_event_handler;

  // edit_button.addEventListener("click", edit_dancer);
  // delete_button.addEventListener("click", delete_dancer);
  // vip_half_hour_button.addEventListener("click", click_event_handler);
  // vip_full_hour_button.addEventListener("click", click_event_handler);
}

var vip_half_hour = function() {
  console.log("30 Minute VIP...");
}

var vip_full_hour = function() {
  console.log("1 Hour VIP...");
}

// Set up the event listeners
add_button.addEventListener("click", add_dancer);

// Cycle available_dancers ul li
for(var i = 0; i < available_dancers.children.length; i++) {
  // Bind events to li children unavailable_dancers
  bind_dancer_events(available_dancers.children[i], in_vip);
}

// Cycle unavailable_dancers ul li
for(var i = 0; i < unavailable_dancers.children.length; i++) {
  // bind events to li children available_dancers
  bind_dancer_events(unavailable_dancers.children[i], not_in_vip)
}
