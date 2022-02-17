
// scroll to top button
function toTop() { 
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
  
  function editPost() {
    const editWindow = document.getElementById("edit-comment");
    const editButton = document.getElementById("edit-button");
    editWindow.style.display = "block"; 
    editButton.style.display = "none";
};
  