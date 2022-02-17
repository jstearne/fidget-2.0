
// scroll to top button
function toTop() { 
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
  // hide buttons, show edit post field
  function editPost() {
    const editWindow = document.getElementById("edit-comment");
    const editButton = document.getElementById("edit-button");
    const deleteForm = document.getElementById("delete-form");
    editWindow.style.display = "block"; 
    editButton.style.display = "none";
    deleteForm.style.display = "none";
};
  