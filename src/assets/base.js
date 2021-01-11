const elemsBtns = document.querySelectorAll(".fixed-action-btn");
const floatingBtn = M.FloatingActionButton.init(elemsBtns,{
    direction: "left",
    hoverEnabled: false
});

const elemsDropdown = document.querySelectorAll(".dropdown-trigger");
const instancesDropdown = M.Dropdown.init(elemsDropdown);


document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
  });