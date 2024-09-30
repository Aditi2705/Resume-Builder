// User Authentication
let currentUser = null;

function showLoginForm() {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('registerForm').style.display = 'none';
}

function showRegisterForm() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'block';
}

function login(email, password) {
    // Implement actual authentication logic here
    currentUser = { email };
    document.getElementById('loginBtn').style.display = 'none';
    document.getElementById('registerBtn').style.display = 'none';
    document.getElementById('logoutBtn').style.display = 'block';
    document.getElementById('resumeBuilder').style.display = 'block';
    document.getElementById('authSection').style.display = 'none';
}

function register(email, password) {
    // Implement actual registration logic here
    login(email, password);
}

function logout() {
    currentUser = null;
    document.getElementById('loginBtn').style.display = 'block';
    document.getElementById('registerBtn').style.display = 'block';
    document.getElementById('logoutBtn').style.display = 'none';
    document.getElementById('resumeBuilder').style.display = 'none';
    document.getElementById('authSection').style.display = 'block';
}

// Resume Builder
const templates = [
    { id: 'template1', name: 'Professional' },
    { id: 'template2', name: 'Creative' },
    { id: 'template3', name: 'Minimalist' }
];

function loadTemplates() {
    const templateList = document.getElementById('templateList');
    templates.forEach(template => {
        const button = document.createElement('button');
        button.textContent = template.name;
        button.onclick = () => selectTemplate(template.id);
        templateList.appendChild(button);
    });
}

function selectTemplate(templateId) {
    // Implement template selection logic
    console.log(`Selected template: ${templateId}`);
}

function addEducation() {
    const educationSection = document.getElementById('educationSection');
    const educationEntry = document.createElement('div');
    educationEntry.innerHTML = `
        <input type="text" placeholder="School Name" required>
        <input type="text" placeholder="Degree" required>
        <input type="text" placeholder="Graduation Year" required>
    `;
    educationSection.insertBefore(educationEntry, document.getElementById('addEducation'));
}

function addExperience() {
    const experienceSection = document.getElementById('experienceSection');
    const experienceEntry = document.createElement('div');
    experienceEntry.innerHTML = `
        <input type="text" placeholder="Company Name" required>
        <input type="text" placeholder="Job Title" required>
        <input type="text" placeholder="Employment Period" required>
        <textarea placeholder="Job Description"></textarea>
    `;
    experienceSection.insertBefore(experienceEntry, document.getElementById('addExperience'));
}

// Customization
function loadFonts() {
    const fontSelect = document.getElementById('fontType');
    const fonts = ['Arial', 'Helvetica', 'Times New Roman', 'Courier', 'Verdana', 'Georgia'];
    fonts.forEach(font => {
        const option = document.createElement('option');
        option.value = font;
        option.textContent = font;
        fontSelect.appendChild(option);
    });
}

function loadColorSchemes() {
    const schemeSelect = document.getElementById('colorScheme');
    const schemes = ['Default', 'Dark', 'Light', 'Colorful'];
    schemes.forEach(scheme => {
        const option = document.createElement('option');
        option.value = scheme.toLowerCase();
        option.textContent = scheme;
        schemeSelect.appendChild(option);
    });
}

// Preview and Download
function updatePreview() {
    // Implement preview update logic
    const previewContent = document.getElementById('previewContent');
    previewContent.innerHTML = '<p>Preview content goes here</p>';
}

function downloadPDF() {
    // Implement PDF download logic
    console.log('Downloading PDF...');
}

function downloadDOCX() {
    // Implement DOCX download logic
    console.log('Downloading DOCX...');
}

function printResume() {
    window.print();
}

// Help and Support
function showFAQ() {
    // Implement FAQ display logic
    console.log('Showing FAQ...');
}

function showContactForm() {
    // Implement contact form display logic
    console.log('Showing contact form...');
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('loginBtn').addEventListener('click', showLoginForm);
    document.getElementById('registerBtn').addEventListener('click', showRegisterForm);
    document.getElementById('logoutBtn').addEventListener('click', logout);
    document.getElementById('loginFormElement').addEventListener('submit', (e) => {
        e.preventDefault();
        login(document.getElementById('loginEmail').value, document.getElementById('loginPassword').value);
    });
    document.getElementById('registerFormElement').addEventListener('submit', (e) => {
        e.preventDefault();
        register(document.getElementById('registerEmail').value, document.getElementById('registerPassword').value);
    });
    document.getElementById('addEducation').addEventListener('click', addEducation);
    document.getElementById('addExperience').addEventListener('click', addExperience);
    document.getElementById('downloadPDF').addEventListener('click', downloadPDF);
    document.getElementById('downloadDOCX').addEventListener('click', downloadDOCX);
    document.getElementById('printResume').addEventListener('click', printResume);
    document.getElementById('showFAQ').addEventListener('click', showFAQ);
    document.getElementById('showContactForm').addEventListener('click', showContactForm);

    loadTemplates();
    loadFonts();
    loadColorSchemes();
});

// Drag and Drop functionality
let draggedItem = null;

function enableDragAndDrop() {
    const draggableElements = document.querySelectorAll('#resumeForm fieldset');
    draggableElements.forEach(elem => {
        elem.setAttribute('draggable', true);
        elem.addEventListener('dragstart', dragStart);
        elem.addEventListener('dragover', dragOver);
        elem.addEventListener('drop', drop);
    });
}

function dragStart(e) {
    draggedItem = e.target;
    e.dataTransfer.setData('text/plain', e.target.id);
}

function dragOver(e) {
    e.preventDefault();
}

function drop(e) {
    e.preventDefault();
    if (e.target.tagName === 'FIELDSET') {
        const form = document.getElementById('resumeForm');
        const draggedElement = document.getElementById(e.dataTransfer.getData('text'));
        const dropTarget = e.target;
        form.insertBefore(draggedElement, dropTarget);
    }
}

// Call this function after the resume form is loaded
enableDragAndDrop();