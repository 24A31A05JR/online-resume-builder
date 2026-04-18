let skills = [];

// Switch tabs
function showTab(tabId) {
  document.querySelectorAll(".tab").forEach(tab => {
    tab.classList.remove("active");
  });
  document.getElementById(tabId).classList.add("active");
}

// Add skill
function addSkill() {
  let input = document.getElementById("skillInput");

  if (input.value.trim() === "") return;

  skills.push(input.value);

  let span = document.createElement("span");
  span.innerText = input.value;

  // remove on click
  span.onclick = () => {
    skills = skills.filter(s => s !== input.value);
    span.remove();
  };

  document.getElementById("skillsList").appendChild(span);

  input.value = "";
}

// Generate resume (FIXED EVERYTHING)
function generateResume() {
  document.getElementById("r-name").innerText = document.getElementById("name").value;
  document.getElementById("r-title").innerText = document.getElementById("title").value;
  document.getElementById("r-email").innerText = document.getElementById("email").value;
  document.getElementById("r-phone").innerText = document.getElementById("phone").value;

  document.getElementById("r-summary").innerText = document.getElementById("summaryText").value;
  document.getElementById("r-education").innerText = document.getElementById("educationText").value;
  document.getElementById("r-experience").innerText = document.getElementById("experienceText").value;

  // Skills preview
  let skillsHTML = "";
  skills.forEach(skill => {
    skillsHTML += `<span style="background:#111;color:white;padding:5px 10px;margin:3px;border-radius:20px;">${skill}</span>`;
  });
  document.getElementById("r-skills").innerHTML = skillsHTML;

  // Profile Image FIX
  let fileInput = document.getElementById("image");
  let file = fileInput.files[0];

  if (file) {
    let reader = new FileReader();
    reader.onload = function(e) {
      document.getElementById("previewImg").src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
}

// Download
function downloadResume() {
  window.print();
}