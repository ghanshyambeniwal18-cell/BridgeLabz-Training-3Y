<!DOCTYPE html>
<html>
<head>
    <title>JavaScript DOM Assignment</title>

    <style>
        body {
            font-family: Arial;
            background: #f4f4f4;
            padding: 20px;
        }

        section {
            background: white;
            padding: 20px;
            margin-bottom: 20px;
            border-radius: 10px;
        }

        button {
            padding: 8px 15px;
            margin: 5px;
            cursor: pointer;
            background: #2563eb;
            color: white;
            border: none;
            border-radius: 5px;
        }

        input, textarea {
            padding: 10px;
            margin: 5px;
        }

        li {
            margin: 10px;
        }

        .counter {
            font-weight: bold;
        }

        .yellow {
            color: orange;
        }

        .red {
            color: red;
        }

        .step {
            display: none;
        }

        .active {
            display: block;
        }

        /* Themes */

        .light {
            background: white;
            color: black;
        }

        .dark {
            background: #222;
            color: white;
        }

        .blue {
            background: #dbeafe;
            color: darkblue;
        }

        /* Image Gallery */

        .gallery {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }

        .gallery img {
            width: 120px;
            height: 100px;
            object-fit: cover;
            cursor: pointer;
        }

        #modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.8);
            justify-content: center;
            align-items: center;
        }

        #modal img {
            max-width: 80%;
            max-height: 80%;
        }

        /* Mouse Box */

        #mouseBox {
            width: 400px;
            height: 400px;
            background: lightblue;
            position: relative;
            border: 2px solid black;
            overflow: hidden;
        }

        .dot {
            width: 10px;
            height: 10px;
            background: red;
            border-radius: 50%;
            position: absolute;
        }

        /* Dropdown */

        #dropdownOptions {
            display: none;
            width: 150px;
            background: white;
            border: 1px solid gray;
        }

        #dropdownOptions div {
            padding: 10px;
            cursor: pointer;
        }

        #dropdownOptions div:hover {
            background: lightblue;
        }

        .error {
            color: red;
            font-size: 13px;
        }

        .success {
            color: green;
            font-weight: bold;
        }

        .no-result {
            color: red;
        }

    </style>
</head>

<body>

<h1>JavaScript DOM Assignment Q1-Q9</h1>


<!-- ================================= -->
<!-- Q1. Dynamic Product List Manager -->
<!-- ================================= -->

<section>

    <h2>Q1. Dynamic Product List Manager</h2>

    <input type="text" id="productInput"
           placeholder="Enter product name">

    <button id="addProduct">Add Product</button>

    <ul id="productList"></ul>

</section>


<!-- ================================= -->
<!-- Q2. Live Character Counter -->
<!-- ================================= -->

<section>

    <h2>Q2. Live Character Counter</h2>

    <textarea id="message"
              maxlength="100"
              placeholder="Write something..."
              rows="5"
              cols="40"></textarea>

    <p class="counter" id="counter">
        100 characters remaining
    </p>

    <button id="resetText">Reset</button>

</section>


<!-- ================================= -->
<!-- Q3. Multi-Step Form -->
<!-- ================================= -->

<section>

    <h2>Q3. Multi-Step Form</h2>

    <form id="multiForm">

        <div class="step active">

            <h3>Step 1: Name</h3>

            <input type="text" id="userName"
                   placeholder="Enter your name">

            <p class="error" id="nameError"></p>

        </div>

        <div class="step">

            <h3>Step 2: Email</h3>

            <input type="email" id="userEmail"
                   placeholder="Enter your email">

            <p class="error" id="emailError"></p>

        </div>

        <div class="step">

            <h3>Step 3: Password</h3>

            <input type="password" id="userPassword"
                   placeholder="Enter password">

            <p class="error" id="passwordError"></p>

        </div>

        <button type="button" id="backBtn">Back</button>

        <button type="button" id="nextBtn">Next</button>

        <div id="summary"></div>

    </form>

</section>


<!-- ================================= -->
<!-- Q4. Theme Switcher -->
<!-- ================================= -->

<section>

    <h2>Q4. Theme Switcher</h2>

    <button onclick="changeTheme('light')">Light Theme</button>

    <button onclick="changeTheme('dark')">Dark Theme</button>

    <button onclick="changeTheme('blue')">Blue Theme</button>

    <p>Click buttons to change the website theme.</p>

</section>


<!-- ================================= -->
<!-- Q5. Image Gallery -->
<!-- ================================= -->

<section>

    <h2>Q5. Image Gallery with Modal</h2>

    <div class="gallery">

        <img src="https://picsum.photos/id/1015/400/300" alt="Mountain">
        <img src="https://picsum.photos/id/1016/400/300" alt="Nature">
        <img src="https://picsum.photos/id/1025/400/300" alt="Animal">
        <img src="https://picsum.photos/id/1035/400/300" alt="Landscape">
        <img src="https://picsum.photos/id/1043/400/300" alt="Forest">
        <img src="https://picsum.photos/id/1069/400/300" alt="Ocean">

    </div>

    <div id="modal">

        <img id="bigImage" src="" alt="Preview">

    </div>

</section>


<!-- ================================= -->
<!-- Q6. Real-Time Table Filter -->
<!-- ================================= -->

<section>

    <h2>Q6. Student Table Filter</h2>

    <input type="text" id="searchStudent"
           placeholder="Search student">

    <table border="1" cellpadding="10" width="100%"
           id="studentTable">

        <thead>
            <tr>
                <th>Name</th>
                <th>Branch</th>
                <th>CGPA</th>
            </tr>
        </thead>

        <tbody>

            <tr>
                <td>Rahul</td>
                <td>CSE</td>
                <td>8.5</td>
            </tr>

            <tr>
                <td>Aman</td>
                <td>IT</td>
                <td>7.8</td>
            </tr>

            <tr>
                <td>Priya</td>
                <td>ECE</td>
                <td>9.1</td>
            </tr>

            <tr>
                <td>Neha</td>
                <td>CSE</td>
                <td>8.2</td>
            </tr>

            <tr>
                <td>Karan</td>
                <td>ME</td>
                <td>7.5</td>
            </tr>

        </tbody>

    </table>

    <p id="noResult" class="no-result"></p>

</section>


<!-- ================================= -->
<!-- Q7. Mouse Coordinates Logger -->
<!-- ================================= -->

<section>

    <h2>Q7. Mouse Path and Coordinates</h2>

    <p id="coordinates">
        Move your mouse inside the box.
    </p>

    <div id="mouseBox"></div>

</section>


<!-- ================================= -->
<!-- Q8. Custom Dropdown -->
<!-- ================================= -->

<section>

    <h2>Q8. Custom Dropdown</h2>

    <div id="dropdown">

        <button id="dropdownBtn">
            Select Course
        </button>

        <div id="dropdownOptions">

            <div>Java</div>

            <div>Python</div>

            <div>JavaScript</div>

            <div>Cyber Security</div>

            <div>Machine Learning</div>

        </div>

    </div>

</section>


<!-- ================================= -->
<!-- Q9. Form Submit Blocker -->
<!-- ================================= -->

<section>

    <h2>Q9. Registration Form Validation</h2>

    <form id="registrationForm">

        <input type="text" id="name"
               placeholder="Enter Name">

        <p class="error" id="nameMsg"></p>

        <input type="text" id="email"
               placeholder="Enter Email">

        <p class="error" id="emailMsg"></p>

        <input type="password" id="password"
               placeholder="Enter Password">

        <p class="error" id="passwordMsg"></p>

        <button type="submit">Submit</button>

    </form>

    <p id="finalMessage" class="success"></p>

</section>



<!-- ================================= -->
<!-- JAVASCRIPT CODE -->
<!-- ================================= -->

<script>


// =================================
// Q1. Dynamic Product List Manager
// =================================

let addButton = document.getElementById("addProduct");

let productInput = document.getElementById("productInput");

let productList = document.getElementById("productList");

addButton.addEventListener("click", function() {

    let value = productInput.value.trim();

    if (value === "") {
        alert("Please enter product name");
        return;
    }

    let li = document.createElement("li");

    let span = document.createElement("span");
    span.textContent = value;

    let edit = document.createElement("button");
    edit.textContent = "Edit";
    edit.className = "edit";

    let del = document.createElement("button");
    del.textContent = "Delete";
    del.className = "delete";

    li.append(span, edit, del);

    productList.appendChild(li);

    productInput.value = "";

});

// Event delegation

productList.addEventListener("click", function(event) {

    let li = event.target.closest("li");

    if (!li || !productList.contains(li)) return;

    if (event.target.classList.contains("delete")) {

        li.remove();

    }

    if (event.target.classList.contains("edit")) {

        let span = li.querySelector("span");

        if (li.querySelector("input")) return;

        let input = document.createElement("input");

        input.value = span.textContent;

        span.replaceWith(input);

        input.focus();

        function saveEdit() {

            if (!input.isConnected) return;

            let newSpan = document.createElement("span");

            newSpan.textContent = input.value.trim() || "Unnamed Product";

            input.replaceWith(newSpan);

        }

        input.addEventListener("blur", saveEdit);

        input.addEventListener("keydown", function(e) {

            if (e.key === "Enter") {
                input.blur();
            }

        });

    }

});


// =================================
// Q2. Live Character Counter
// =================================

let message = document.getElementById("message");

let counter = document.getElementById("counter");

message.addEventListener("input", function() {

    let remaining = 100 - message.value.length;

    counter.textContent = remaining + " characters remaining";

    counter.className = "counter";

    if (remaining <= 20 && remaining > 0) {

        counter.classList.add("yellow");

    }

    if (remaining === 0) {

        counter.classList.add("red");

    }

});

// Prevent typing after 100 characters

message.addEventListener("keydown", function(event) {

    if (message.value.length >= 100) {

        let allowedKeys = [
            "Backspace",
            "Delete",
            "ArrowLeft",
            "ArrowRight",
            "ArrowUp",
            "ArrowDown",
            "Tab"
        ];

        if (!allowedKeys.includes(event.key) &&
            !event.ctrlKey && !event.metaKey) {

            event.preventDefault();

        }

    }

});

// Reset button

document.getElementById("resetText").addEventListener("click", function() {

    message.value = "";

    counter.textContent = "100 characters remaining";

    counter.className = "counter";

});


// =================================
// Q3. Multi-Step Form
// =================================

let currentStep = 0;

let steps = document.querySelectorAll(".step");

let nextBtn = document.getElementById("nextBtn");

let backBtn = document.getElementById("backBtn");

function showStep() {

    steps.forEach(function(step, index) {

        step.classList.toggle("active", index === currentStep);

    });

    backBtn.style.display = currentStep === 0 ? "none" : "inline-block";

    nextBtn.textContent =
        currentStep === 2 ? "Finish" : "Next";

}

function validateStep() {

    if (currentStep === 0) {

        let name = document.getElementById("userName").value.trim();

        if (name === "") {

            document.getElementById("nameError").textContent =
                "Name is required";

            return false;

        }

        document.getElementById("nameError").textContent = "";

    }

    if (currentStep === 1) {

        let email = document.getElementById("userEmail").value.trim();

        let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!pattern.test(email)) {

            document.getElementById("emailError").textContent =
                "Enter a valid email";

            return false;

        }

        document.getElementById("emailError").textContent = "";

    }

    if (currentStep === 2) {

        let password =
            document.getElementById("userPassword").value;

        if (password.length < 6) {

            document.getElementById("passwordError").textContent =
                "Password must be at least 6 characters";

            return false;

        }

        document.getElementById("passwordError").textContent = "";

    }

    return true;

}

nextBtn.addEventListener("click", function() {

    if (!validateStep()) return;

    if (currentStep < 2) {

        currentStep++;

        showStep();

    } else {

        let name = document.getElementById("userName").value;

        let email = document.getElementById("userEmail").value;

        document.getElementById("multiForm").innerHTML = `
            <h3>Registration Completed!</h3>
            <p>Name: ${escapeHTML(name)}</p>
            <p>Email: ${escapeHTML(email)}</p>
            <p class="success">All steps completed successfully!</p>
        `;

    }

});

backBtn.addEventListener("click", function() {

    if (currentStep > 0) {

        currentStep--;

        showStep();

    }

});

function escapeHTML(value) {

    let div = document.createElement("div");

    div.textContent = value;

    return div.innerHTML;

}

showStep();


// =================================
// Q4. Theme Switcher
// =================================

function changeTheme(theme) {

    document.body.setAttribute("class", theme);

    document.body.setAttribute("data-theme", theme);

}


// =================================
// Q5. Image Gallery with Modal
// =================================

let galleryImages = document.querySelectorAll(".gallery img");

let modal = document.getElementById("modal");

let bigImage = document.getElementById("bigImage");

galleryImages.forEach(function(img) {

    img.addEventListener("click", function() {

        modal.style.display = "flex";

        bigImage.src = img.src;

    });

});

// Clicking outside image closes modal

modal.addEventListener("click", function() {

    modal.style.display = "none";

});

// Clicking inside image does not close modal

bigImage.addEventListener("click", function(event) {

    event.stopPropagation();

});


// =================================
// Q6. Real-Time Table Filter
// =================================

let searchStudent = document.getElementById("searchStudent");

searchStudent.addEventListener("input", function() {

    let value = searchStudent.value.toLowerCase();

    let rows = document.querySelectorAll("#studentTable tbody tr");

    let count = 0;

    rows.forEach(function(row) {

        let text = row.textContent.toLowerCase();

        if (text.includes(value)) {

            row.style.display = "";

            count++;

        } else {

            row.style.display = "none";

        }

    });

    let noResult = document.getElementById("noResult");

    if (count === 0) {

        noResult.textContent = "No results found";

    } else {

        noResult.textContent = "";

    }

});


// =================================
// Q7. Mouse Coordinates Logger
// =================================

let mouseBox = document.getElementById("mouseBox");

let coordinates = document.getElementById("coordinates");

mouseBox.addEventListener("mousemove", function(event) {

    coordinates.textContent =
        "Client X: " + event.clientX +
        " | Client Y: " + event.clientY;

});

// Double click to create red dot

mouseBox.addEventListener("dblclick", function(event) {

    let rect = mouseBox.getBoundingClientRect();

    let x = event.clientX - rect.left;

    let y = event.clientY - rect.top;

    let dot = document.createElement("div");

    dot.className = "dot";

    dot.style.left = (x - 5) + "px";

    dot.style.top = (y - 5) + "px";

    mouseBox.appendChild(dot);

});


// =================================
// Q8. Custom Dropdown
// =================================

let dropdown = document.getElementById("dropdown");

let dropdownBtn = document.getElementById("dropdownBtn");

let dropdownOptions = document.getElementById("dropdownOptions");

// Show and hide options

dropdownBtn.addEventListener("click", function(event) {

    event.stopPropagation();

    dropdownOptions.style.display =
        dropdownOptions.style.display === "block"
        ? "none" : "block";

});

// Select option

dropdownOptions.addEventListener("click", function(event) {

    if (event.target.tagName === "DIV") {

        dropdownBtn.textContent = event.target.textContent;

        dropdownOptions.style.display = "none";

    }

});

// Capturing phase closes dropdown on outside click

document.addEventListener("click", function(event) {

    if (!dropdown.contains(event.target)) {

        dropdownOptions.style.display = "none";

    }

}, true);


// =================================
// Q9. Form Submit Blocker
// =================================

let registrationForm = document.getElementById("registrationForm");

let nameField = document.getElementById("name");

let emailField = document.getElementById("email");

let passwordField = document.getElementById("password");

let nameMsg = document.getElementById("nameMsg");

let emailMsg = document.getElementById("emailMsg");

let passwordMsg = document.getElementById("passwordMsg");

let finalMessage = document.getElementById("finalMessage");

function validateName() {

    if (nameField.value.trim() === "") {

        nameMsg.textContent = "Name is required";

        nameField.style.border = "2px solid red";

        return false;

    }

    nameMsg.textContent = "";

    nameField.style.border = "2px solid green";

    return true;

}

function validateEmail() {

    if (!emailField.value.includes("@") ||
        emailField.value.trim() === "") {

        emailMsg.textContent = "Enter a valid email containing @";

        emailField.style.border = "2px solid red";

        return false;

    }

    emailMsg.textContent = "";

    emailField.style.border = "2px solid green";

    return true;

}

function validatePassword() {

    if (passwordField.value.length < 6) {

        passwordMsg.textContent =
            "Password must contain at least 6 characters";

        passwordField.style.border = "2px solid red";

        return false;

    }

    passwordMsg.textContent = "";

    passwordField.style.border = "2px solid green";

    return true;

}

// Live validation

nameField.addEventListener("input", validateName);

emailField.addEventListener("input", validateEmail);

passwordField.addEventListener("input", validatePassword);

// Form submission

registrationForm.addEventListener("submit", function(event) {

    event.preventDefault();

    let nameValid = validateName();

    let emailValid = validateEmail();

    let passwordValid = validatePassword();

    if (nameValid && emailValid && passwordValid) {

        finalMessage.textContent =
            "Form Submitted Successfully!";

        registrationForm.reset();

        nameField.style.border = "";
        emailField.style.border = "";
        passwordField.style.border = "";

        nameMsg.textContent = "";
        emailMsg.textContent = "";
        passwordMsg.textContent = "";

    } else {

        finalMessage.textContent = "";

    }

});

</script>

</body>
</html>
