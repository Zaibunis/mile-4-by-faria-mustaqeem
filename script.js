// Function to generate the resume
function generateResume() {
    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    // Generate resume content
    var resumeContent = "\n        <h2>Personal Information</h2>\n        <p><strong>Name:</strong> <span id=\"resumeName\">".concat(name, "</span></p>\n        <p><strong>Father Name:</strong> <span id=\"resumeFatherName\">Mustaqeem Ahmed Khan</span></p>\n        <p><strong>Gender:</strong> <span id=\"resumeGender\">Female</span></p>\n        <p><strong>Email:</strong> <span id=\"resumeEmail\">").concat(email, "</span></p>\n        <p><strong>Phone Number:</strong> <span id=\"resumePhone\">").concat(phone, "</span></p>\n\n        <h2>Education:</h2>\n        <p><span id=\"resumeEducation\">").concat(education, "</span></p>\n\n        <h2>Skills:</h2>\n        <ul id=\"resumeSkills\">\n            <li>").concat(skills.split('\n').join('</li><li>'), "</li>\n        </ul>\n\n        <h2>Work Experience:</h2>\n        <p><span id=\"resumeExperience\">").concat(experience, "</span></p>\n\n        <footer>\n            <p>&copy; 2024 Faria Mustaqeem</p>\n        </footer>\n    ");
    // If a profile picture is uploaded, add it above the name
    if (profilePictureUrl) {
        resumeContent = "\n            <div>\n                <img src=\"".concat(profilePictureUrl, "\" alt=\"Profile Picture\" style=\"width: 150px; height: 150px; border-radius: 50%; margin-bottom: 20px;\">\n            </div>\n            ").concat(resumeContent, "\n        ");
    }
    // Display the resume content in the output div
    var resumeOutput = document.getElementById('resumeOutput');
    if (resumeOutput) {
        resumeOutput.innerHTML = resumeContent;
    }
    // Add event listeners to make text editable when clicked
    makeEditableOnClick('resumeName');
    makeEditableOnClick('resumeEmail');
    makeEditableOnClick('resumePhone');
    makeEditableOnClick('resumeEducation');
    makeEditableOnClick('resumeExperience');
    makeEditableOnClick('resumeSkills');
}
// Function to make text fields editable when clicked
function makeEditableOnClick(elementId) {
    var element = document.getElementById(elementId);
    if (element) {
        element.addEventListener('click', function () {
            var currentText = element.innerText;
            element.innerHTML = "<input type=\"text\" value=\"".concat(currentText, "\" class=\"editableField\" />");
            var input = element.querySelector('input');
            if (input) {
                input.focus();
                input.addEventListener('blur', function () {
                    var updatedValue = input.value;
                    element.innerHTML = updatedValue;
                });
            }
        });
    }
}
// Event listener for the "Generate Resume" button click
var generateResumeButton = document.getElementById('generateResume');
generateResumeButton.addEventListener('click', generateResume);
// Profile Picture logic
var profilePictureInput = document.getElementById('profilePicture');
var profilePictureUrl = null;
// Event listener for file input change (file selection)
profilePictureInput.addEventListener('change', function (event) {
    var _a;
    var target = event.target;
    var file = (_a = target.files) === null || _a === void 0 ? void 0 : _a[0]; // Get the selected file
    if (file) {
        var reader = new FileReader(); // Create a FileReader to read the file
        // On file read success, store the image URL
        reader.onload = function (e) {
            var _a;
            profilePictureUrl = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
        };
        // Read the file as a Data URL (base64)
        reader.readAsDataURL(file);
    }
});
