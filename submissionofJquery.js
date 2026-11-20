<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>jQuery Assignment Q1-Q10</title>

    <style>
        body {
            font-family: Arial, sans-serif;
            background: #f4f4f4;
            padding: 20px;
        }

        section {
            background: white;
            padding: 20px;
            margin-bottom: 25px;
            border-radius: 10px;
        }

        h2 {
            color: #333;
        }

        button {
            padding: 8px 14px;
            margin: 5px;
            cursor: pointer;
            background: #2563eb;
            color: white;
            border: none;
            border-radius: 5px;
        }

        input {
            padding: 9px;
            margin: 5px;
        }

        .product, .employee, .course, .post {
            padding: 12px;
            margin: 10px 0;
            background: #eee;
            border-radius: 5px;
        }

        .selected, .highlight {
            background: lightgreen !important;
        }

        .answer {
            display: none;
            padding: 10px;
            background: #eee;
        }

        .banner {
            padding: 20px;
            background: orange;
            margin: 10px 0;
        }

        .contact {
            display: none;
            color: blue;
        }

        .department {
            padding: 10px;
            border: 1px solid gray;
            margin: 10px 0;
        }

        .message {
            color: green;
            font-weight: bold;
            margin: 10px;
        }

        .tag {
            color: white;
            background: purple;
            padding: 4px 8px;
            margin: 5px;
        }

        .invalid {
            border: 2px solid red !important;
        }

        .widget {
            padding: 15px;
            background: #ddd;
            margin: 10px;
        }

        #modal {
            display: none;
            background: #dbeafe;
            padding: 20px;
            border: 1px solid blue;
        }
    </style>

    <!-- jQuery Version 1 -->
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>

    <script>
        const jq1 = jQuery.noConflict(true);
    </script>

    <!-- jQuery Version 2 -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

    <script>
        const jq2 = jQuery.noConflict(true);
    </script>

</head>

<body>

<h1>JavaScript and jQuery Assignment</h1>


<!-- ===================================== -->
<!-- Q1. Welcome Page Greeting -->
<!-- ===================================== -->

<section>
    <h2>Q1. Welcome Page Greeting</h2>

    <h3 id="greeting"></h3>

    <p id="welcome">Welcome to our website!</p>

    <button id="changeGreeting">Change Greeting</button>
    <button id="toggleWelcome">Toggle Welcome</button>
    <button id="greetingClick">Click Greeting</button>
</section>


<!-- ===================================== -->
<!-- Q2. Product Highlight -->
<!-- ===================================== -->

<section>
    <h2>Q2. Product Highlight</h2>

    <div class="product" data-stock="yes" data-discount="20">
        Laptop - ₹50000 (20% Discount)
        <button class="favorite">♡ Favorite</button>
        <p class="details">Powerful laptop with 8GB RAM.</p>
    </div>

    <div class="product" data-stock="no">
        Mobile - ₹20000 (Out of Stock)
        <button class="favorite">♡ Favorite</button>
        <p class="details">Latest smartphone with great features.</p>
    </div>

    <div class="product" data-stock="yes" data-discount="10">
        Headphones - ₹2000 (10% Discount)
        <button class="favorite">♡ Favorite</button>
        <p class="details">Wireless headphones with clear sound.</p>
    </div>
</section>


<!-- ===================================== -->
<!-- Q3. Interactive FAQ -->
<!-- ===================================== -->

<section>
    <h2>Q3. Interactive FAQ</h2>

    <div class="question">
        <h3 class="faq-question">What is JavaScript?</h3>
        <div class="answer">
            JavaScript is a programming language used to make websites interactive.
            <input type="text" placeholder="Write your answer">
        </div>
    </div>

    <div class="question">
        <h3 class="faq-question">What is jQuery?</h3>
        <div class="answer">
            jQuery is a JavaScript library that simplifies DOM manipulation.
            <input type="text" placeholder="Write your answer">
        </div>
    </div>

    <div class="question">
        <h3 class="faq-question">What is HTML?</h3>
        <div class="answer">
            HTML is used to create the structure of web pages.
            <input type="text" placeholder="Write your answer">
        </div>
    </div>
</section>


<!-- ===================================== -->
<!-- Q4. Special Offer Banner -->
<!-- ===================================== -->

<section>
    <h2>Q4. Special Offer Banner</h2>

    <div class="banner">Special Offer 1 - 20% Discount</div>
    <div class="banner">Special Offer 2 - Buy One Get One</div>
    <div class="banner">Special Offer 3 - Free Delivery</div>

    <button id="hideBanner">Hide</button>
    <button id="showBanner">Show</button>
    <button id="slideUp">Slide Up</button>
    <button id="slideDown">Slide Down</button>
    <button id="fadeOut">Fade Out</button>
    <button id="fadeIn">Fade In</button>
</section>


<!-- ===================================== -->
<!-- Q5. Team Members Directory -->
<!-- ===================================== -->

<section>
    <h2>Q5. Team Members Directory</h2>

    <button id="collapseTeam">Collapse Team</button>
    <button id="expandTeam">Expand Team</button>
    <button id="randomEmployee">Select Random Employee</button>

    <div id="team">

        <div class="department">
            <h3 class="department-name">IT Department</h3>

            <div class="employee manager">Manager: Rahul</div>

            <div class="employee">Aman - Developer
                <p class="contact">Email: aman@gmail.com</p>
            </div>

            <div class="employee">Ravi - Tester
                <p class="contact">Email: ravi@gmail.com</p>
            </div>
        </div>

        <div class="department">
            <h3 class="department-name">HR Department</h3>

            <div class="employee manager">Manager: Priya</div>

            <div class="employee">Neha - HR Executive
                <p class="contact">Email: neha@gmail.com</p>
            </div>

            <div class="employee">Karan - Recruiter
                <p class="contact">Email: karan@gmail.com</p>
            </div>
        </div>

    </div>
</section>


<!-- ===================================== -->
<!-- Q6. Event Subscription Panel -->
<!-- ===================================== -->

<section>
    <h2>Q6. Event Subscription Panel</h2>

    <button id="subscribe">Subscribe</button>
    <button id="unsubscribe">Unsubscribe</button>

    <br>

    <input type="text" id="topicInput" placeholder="Enter topic">
    <button id="addTopic">Add Topic</button>

    <div id="topics">
        <button class="topic-toggle">JavaScript</button>
        <button class="topic-toggle">Web Development</button>
    </div>

    <p id="subscriptionMessage"></p>
</section>


<!-- ===================================== -->
<!-- Q7. Search Courses -->
<!-- ===================================== -->

<section>
    <h2>Q7. Search Courses</h2>

    <input type="text" id="searchCourse" placeholder="Search courses">

    <h3 id="courseCount"></h3>

    <div class="course">Java Programming</div>
    <div class="course">Python Programming</div>
    <div class="course">Web Development</div>
    <div class="course">Cyber Security</div>
    <div class="course">Data Structures</div>
    <div class="course">Machine Learning</div>

    <button id="clearSearch">Clear Search</button>
</section>


<!-- ===================================== -->
<!-- Q8. Dynamic Blog Posts -->
<!-- ===================================== -->

<section>
    <h2>Q8. Dynamic Blog Posts</h2>

    <button id="addPost">Add New Post</button>
    <button id="featuredPost">Prepend Featured Post</button>
    <button id="removePost">Remove Last Post</button>
    <button id="addTags">Add Tags</button>
    <button id="highlightPosts">Highlight Keywords</button>

    <div id="posts">
        <div class="post">JavaScript Basics</div>
        <div class="post">Learning jQuery</div>
        <div class="post">Advanced Programming</div>
    </div>
</section>


<!-- ===================================== -->
<!-- Q9. Multi-jQuery Widgets -->
<!-- ===================================== -->

<section>
    <h2>Q9. Multi-jQuery Widgets</h2>

    <div id="carousel" class="widget">
        Carousel Slide 1
    </div>

    <button id="nextSlide">Next Slide</button>

    <div class="widget">Dashboard Widget 1</div>
    <div class="widget">Dashboard Widget 2</div>

    <button id="openModal">Show Notification</button>

    <div id="modal">
        Notification: Welcome to the Dashboard!
        <button id="closeModal">Close</button>
    </div>

    <p title="This is a helpful tooltip">Hover here to see tooltip.</p>
</section>


<!-- ===================================== -->
<!-- Q10. Registration Form Validation -->
<!-- ===================================== -->

<section>
    <h2>Q10. Registration Form Validation</h2>

    <form id="registrationForm">

        <input type="text" id="name" placeholder="Enter Name">
        <br>

        <input type="email" id="email" placeholder="Enter Email">
        <br>

        <input type="password" id="password" placeholder="Enter Password">
        <br>

        <button type="submit">Register</button>

    </form>

    <p id="formMessage"></p>
</section>


<!-- ===================================== -->
<!-- ALL JQUERY CODE -->
<!-- ===================================== -->

<script>

// =====================================
// Q1. Welcome Page Greeting
// =====================================

let hour = new Date().getHours();
let greeting;

if (hour < 12) {
    greeting = "Good Morning!";
}
else if (hour < 17) {
    greeting = "Good Afternoon!";
}
else {
    greeting = "Good Evening!";
}

jq1("#greeting").text(greeting);

jq1("#changeGreeting").click(function() {
    jq1("#greeting").text("Believe in yourself and keep learning!");
});

jq1("#toggleWelcome").click(function() {
    jq1("#welcome").toggle();
});

jq1("#greetingClick").click(function() {
    alert("Welcome! Have a great day!");
});

jq1("#greeting").click(function() {
    alert("Greeting clicked!");
});


// =====================================
// Q2. Product Highlight
// =====================================

jq1(".product").click(function() {
    jq1(this).toggleClass("highlight");

    if (jq1(this).attr("data-stock") === "no") {
        alert("This product is out of stock!");
    }
});

jq1(".product").hover(
    function() {
        jq1(this).find(".details").show();
    },
    function() {
        jq1(this).find(".details").hide();
    }
);

jq1(".details").hide();

jq1(".favorite").click(function(event) {
    event.stopPropagation();

    jq1(this).toggleClass("selected");
});


// =====================================
// Q3. Interactive FAQ
// =====================================

jq1(".faq-question").click(function() {
    jq1(this).next(".answer").slideToggle();
});

jq1(".faq-question").hover(
    function() {
        jq1(this).css("color", "blue");
    },
    function() {
        jq1(this).css("color", "black");
    }
);

jq1(".faq-question").dblclick(function() {
    jq1(".answer").slideUp();
});

jq1(".answer input").focus(function() {
    jq1(this).closest(".question").find(".faq-question")
        .css("background", "lightyellow");
});

jq1(".answer input").blur(function() {
    jq1(this).closest(".question").find(".faq-question")
        .css("background", "");
});


// =====================================
// Q4. Special Offer Banner
// =====================================

jq1("#hideBanner").click(function() {
    jq1(".banner:first").hide();
});

jq1("#showBanner").click(function() {
    jq1(".banner").show();
});

jq1("#slideUp").click(function() {
    jq1(".banner").slideUp();
});

jq1("#slideDown").click(function() {
    jq1(".banner").slideDown();
});

jq1("#fadeOut").click(function() {
    jq1(".banner").fadeOut();
});

jq1("#fadeIn").click(function() {
    jq1(".banner").fadeIn();
});

// Automatically rotate banners every 5 seconds

let bannerIndex = 0;

setInterval(function() {
    let banners = jq1(".banner");

    banners.fadeOut();

    bannerIndex = (bannerIndex + 1) % banners.length;

    banners.eq(bannerIndex).fadeIn();

}, 5000);


// =====================================
// Q5. Team Members Directory
// =====================================

// Click manager to highlight direct reports

jq1(".manager").click(function() {
    jq1(this).nextAll(".employee").addClass("highlight");
});

// Hover employee to show contact using next()

jq1(".employee").not(".manager").hover(
    function() {
        jq1(this).next(".contact").show();

        // Contact is a child, so use find() here
        jq1(this).find(".contact").show();
    },
    function() {
        jq1(this).find(".contact").hide();
    }
);

// Click department to change member background using children()

jq1(".department-name").click(function() {
    jq1(this).parent().children(".employee")
        .css("background", "lightblue");
});

// Select random employee and highlight siblings

jq1("#randomEmployee").click(function() {
    let employees = jq1(".employee");
    let random = Math.floor(Math.random() * employees.length);

    let selected = employees.eq(random);

    selected.siblings(".employee").addClass("highlight");
});

// Collapse and expand team using parent() and find()

jq1("#collapseTeam").click(function() {
    jq1("#team").parent().find(".employee").hide();
});

jq1("#expandTeam").click(function() {
    jq1("#team").parent().find(".employee").show();
});


// =====================================
// Q6. Event Subscription Panel
// =====================================

jq1("#subscribe").click(function() {
    jq1("#subscriptionMessage").text(
        "Successfully subscribed! Notifications enabled."
    );
});

jq1("#unsubscribe").click(function() {
    jq1("#subscriptionMessage").text(
        "Unsubscribed! Notifications disabled."
    );
});

// Attach click event using on()

function topicClick() {
    jq1("#subscriptionMessage").text(
        "Topic selected: " + jq1(this).text()
    );
}

jq1(document).on("click.topic", ".topic-toggle", topicClick);

let topicNumber = 0;

jq1("#addTopic").click(function() {
    let topic = jq1("#topicInput").val().trim();

    if (topic === "") {
        alert("Please enter a topic!");
        return;
    }

    topicNumber++;

    let id = "topic-" + topicNumber;

    let newTopic = jq1("<div></div>").attr("id", id);

    let button = jq1("<button></button>")
        .addClass("topic-toggle")
        .text(topic);

    let remove = jq1("<button></button>")
        .text("Remove")
        .addClass("remove-topic");

    newTopic.append(button, remove);

    jq1("#topics").append(newTopic);

    jq1("#topicInput").val("");
});

// Remove topic and detach its click event using off()

jq1(document).on("click.remove", ".remove-topic", function() {

    let topic = jq1(this).parent();

    topic.find(".topic-toggle").each(function() {
        jq1(document).off(
            "click.topic",
            ".topic-toggle",
            topicClick
        );
    });

    topic.remove();

    jq1("#subscriptionMessage").text("Topic removed successfully!");
});


// =====================================
// Q7. Search Courses
// =====================================

jq1("#searchCourse").keyup(function() {

    let search = jq1(this).val().toLowerCase();
    let count = 0;

    jq1(".course").each(function() {

        let courseName = jq1(this).text();

        if (courseName.toLowerCase().includes(search)) {

            jq1(this).show();
            count++;

            if (search !== "") {
                jq1(this).css({
                    "color": "blue",
                    "font-weight": "bold"
                });
            } else {
                jq1(this).css({
                    "color": "black",
                    "font-weight": "normal"
                });
            }

        } else {
            jq1(this).hide();
            jq1(this).css("color", "black");
        }
    });

    jq1("#courseCount").text("Matched Courses: " + count);
});

// Clear Search

jq1("#clearSearch").click(function() {

    jq1("#searchCourse").val("");

    jq1(".course").show();

    jq1(".course").css({
        "color": "black",
        "font-weight": "normal"
    });

    jq1("#courseCount").text("Matched Courses: " + jq1(".course").length);
});

jq1("#courseCount").text("Matched Courses: " + jq1(".course").length);


// =====================================
// Q8. Dynamic Blog Posts
// =====================================

let postNumber = 4;

// Add new post

jq1("#addPost").click(function() {

    jq1("#posts").append(
        `<div class="post">New Blog Post ${postNumber}</div>`
    );

    postNumber++;
});

// Prepend featured post

jq1("#featuredPost").click(function() {

    jq1("#posts").prepend(
        '<div class="post highlight">Featured Blog Post</div>'
    );

});

// Remove last post

jq1("#removePost").click(function() {

    jq1("#posts").children(".post").last().remove();

});

// Add tags using before() and after()

jq1("#addTags").click(function() {

    jq1(".post").first().before(
        '<span class="tag">New Tag</span>'
    );

    jq1(".post").last().after(
        '<span class="tag">End Tag</span>'
    );

});

// Highlight posts with keywords

jq1("#highlightPosts").click(function() {

    jq1(".post").each(function() {

        let text = jq1(this).text().toLowerCase();

        if (text.includes("javascript") ||
            text.includes("programming")) {

            jq1(this).css("background", "yellow");
        }
    });

});


// =====================================
// Q9. Multi-jQuery Widgets
// =====================================

// Version 1 handles carousel

let slides = [
    "Carousel Slide 1",
    "Carousel Slide 2",
    "Carousel Slide 3"
];

let slideIndex = 0;

jq1("#nextSlide").click(function() {

    slideIndex = (slideIndex + 1) % slides.length;

    jq1("#carousel").text(slides[slideIndex]);

});

// Version 1 highlights active widget

jq1(".widget").click(function() {

    jq1(".widget").removeClass("highlight");

    jq1(this).addClass("highlight");

});

// Version 2 handles modal popup

jq2("#openModal").click(function() {
    jq2("#modal").fadeIn();
});

jq2("#closeModal").click(function() {
    jq2("#modal").fadeOut();
});

// Version 2 attaches tooltips on hover

jq2("[title]").hover(
    function() {
        jq2(this).css("background", "yellow");
    },
    function() {
        jq2(this).css("background", "");
    }
);

/*
noConflict() explanation:

jq1 contains jQuery version 3.7.1.
jq2 contains jQuery version 3.6.0.

Both versions work independently without
overwriting each other's variables.
*/


// =====================================
// Q10. Registration Form Validation
// =====================================

let existingEmails = ["test@gmail.com", "admin@gmail.com"];

jq1("#registrationForm").submit(function(event) {

    event.preventDefault();

    let name = jq1("#name").val().trim();
    let email = jq1("#email").val().trim();
    let password = jq1("#password").val();

    let valid = true;

    // Name validation

    if (name === "") {

        jq1("#name").css("border", "2px solid red");
        valid = false;

    } else {

        jq1("#name").css("border", "2px solid green");
    }

    // Email validation

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email) ||
        existingEmails.includes(email.toLowerCase())) {

        jq1("#email").css("border", "2px solid red");
        valid = false;

    } else {

        jq1("#email").css("border", "2px solid green");
    }

    // Password validation

    if (password.length < 8) {

        jq1("#password").css("border", "2px solid red");
        valid = false;

    } else {

        jq1("#password").css("border", "2px solid green");
    }

    // Final result

    if (valid) {

        jq1("#formMessage").text(
            "Registration Successful!"
        ).css("color", "green");

        existingEmails.push(email.toLowerCase());

        jq1("#registrationForm")[0].reset();

    } else {

        jq1("#formMessage").text(
            "Please enter valid details!"
        ).css("color", "red");
    }

});

</script>

</body>
</html>
