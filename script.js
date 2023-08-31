document.addEventListener("DOMContentLoaded", function() {
    let sections = [
      {btnId: "education-toggle", contentId: "education-content"},
      {btnId: "work-toggle", contentId: "work-content"},
      {btnId: "projects-toggle", contentId: "projects-content"}
    ];
    
    // Hide all sections except the clicked one
    function hideOtherSections(currentContentId) {
      sections.forEach(section => {
        let content = document.getElementById(section.contentId);
        if(section.contentId !== currentContentId) {
          content.style.display = 'none';
        }
      });
    }
  
    // Toggle function
    function toggleDropdown(btnId, contentId) {
      let btn = document.getElementById(btnId);
      let content = document.getElementById(contentId);
  
      btn.addEventListener("click", function() {
        if (content.style.display === 'none' || content.style.display === '') {
          hideOtherSections(contentId);
          content.style.display = 'block';
          btn.classList.add('active');

        } else {
          content.style.display = 'none';
          btn.classList.remove('active');
        }
      });
    }
  
    // Initialize toggles
    sections.forEach(section => {
      toggleDropdown(section.btnId, section.contentId);
    });
  });
  