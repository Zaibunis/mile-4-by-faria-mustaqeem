// Function to generate the resume
function generateResume() {
    // Get form values
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const education = (document.getElementById("education") as HTMLTextAreaElement).value;
    const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;
    const skills = (document.getElementById("skills") as HTMLTextAreaElement).value;

    // Generate resume content
    let resumeContent = `
        <h2>Personal Information</h2>
        <p><strong>Name:</strong> <span id="resumeName">${name}</span></p>
        <p><strong>Father Name:</strong> <span id="resumeFatherName">Mustaqeem Ahmed Khan</span></p>
        <p><strong>Gender:</strong> <span id="resumeGender">Female</span></p>
        <p><strong>Email:</strong> <span id="resumeEmail">${email}</span></p>
        <p><strong>Phone Number:</strong> <span id="resumePhone">${phone}</span></p>

        <h2>Education:</h2>
        <p><span id="resumeEducation">${education}</span></p>

        <h2>Skills:</h2>
        <ul id="resumeSkills">
            <li>${skills.split('\n').join('</li><li>')}</li>
        </ul>

        <h2>Work Experience:</h2>
        <p><span id="resumeExperience">${experience}</span></p>

        <footer>
            <p>&copy; 2024 Faria Mustaqeem</p>
        </footer>
    `;

    // If a profile picture is uploaded, add it above the name
    if (profilePictureUrl) {
        resumeContent = `
            <div>
                <img src="${profilePictureUrl}" alt="Profile Picture" style="width: 150px; height: 150px; border-radius: 50%; margin-bottom: 20px;">
            </div>
            ${resumeContent}
        `;
    }

    // Display the resume content in the output div
    const resumeOutput = document.getElementById('resumeOutput');
    if (resumeOutput) {
        resumeOutput.innerHTML = resumeContent;
    }

   
}



// Event listener for the "Generate Resume" button click
const generateResumeButton = document.getElementById('generateResume') as HTMLButtonElement;
generateResumeButton.addEventListener('click', generateResume);

// Profile Picture logic
const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;
let profilePictureUrl: string | null = null;

// Event listener for file input change (file selection)
profilePictureInput.addEventListener('change', function (event: Event) {
    const target = event.target as HTMLInputElement;
    const file = target.files?.[0]; // Get the selected file

    if (file) {
        const reader = new FileReader(); // Create a FileReader to read the file

        // On file read success, store the image URL
        reader.onload = function (e: ProgressEvent<FileReader>) {
            profilePictureUrl = e.target?.result as string;
        };

        // Read the file as a Data URL (base64)
        reader.readAsDataURL(file);
    }
});
