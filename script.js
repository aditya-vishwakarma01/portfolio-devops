// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mainNav = document.getElementById("mainNav");

mobileMenuBtn.addEventListener("click", () => {
  mainNav.classList.toggle("active");
  mobileMenuBtn.innerHTML = mainNav.classList.contains("active")
    ? '<i class="fas fa-times"></i>'
    : '<i class="fas fa-bars"></i>';
});

// Close mobile menu when clicking a link
document.querySelectorAll("#mainNav a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("active");
    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
  });
});

// Dark/Light Mode Toggle
const themeToggle = document.getElementById("themeToggle");
const themeIcon = themeToggle.querySelector("i");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
    localStorage.setItem("theme", "dark");
  } else {
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
    localStorage.setItem("theme", "light");
  }
});

// Check for saved theme preference
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");
  themeIcon.classList.remove("fa-moon");
  themeIcon.classList.add("fa-sun");
}

// Project Filtering
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons
    filterButtons.forEach((btn) => btn.classList.remove("active"));

    // Add active class to clicked button
    button.classList.add("active");

    const filterValue = button.getAttribute("data-filter");

    // Filter projects
    projectCards.forEach((card) => {
      if (
        filterValue === "all" ||
        card.getAttribute("data-category").includes(filterValue)
      ) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// Animated Skill Bars on Scroll
const skillBars = document.querySelectorAll(".skill-progress");

function animateSkillBars() {
  skillBars.forEach((bar) => {
    const barPosition = bar.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (barPosition < screenPosition) {
      const percent = bar.getAttribute("data-percent");
      bar.style.width = percent + "%";
    }
  });
}

// Initial call and on scroll
window.addEventListener("scroll", animateSkillBars);

// Form Validation and Submission
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Simple validation
  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return;
  }

  // In a real implementation, you would send this data to a server
  // For demo purposes, we'll just show an alert
  alert(
    `Thank you, ${name}! Your message has been sent. I'll get back to you soon at ${email}.`,
  );

  // Reset form
  contactForm.reset();
});

// Download Resume Button
const downloadResumeBtn = document.getElementById("downloadResume");

downloadResumeBtn.addEventListener("click", () => {
  // In a real implementation, this would link to a PDF file
  alert("Resume download would start. For now, this is a demo.");

  // You could create and download a simple text file as demo
  const resumeContent = `
ANUP PRAJAPATI
Ishwar Nagar, Kalwa, Thane, Mumbai
+91-9321884294 | prajapatianup608@gmail.com

OBJECTIVE
Recent IT graduate with foundational knowledge in cloud computing, web development, and DevOps. 
Certified AWS Cloud Practitioner with hands-on experience in networking, Linux, Python, and web technologies. 
Seeking a position to apply and enhance technical skills while contributing to innovative cloud and web-based solutions.

PROJECTS
1. Static Website Deployment and Monitoring on AWS
2. Automated CI/CD Pipeline for Website Deployment
3. Create Your Own Image and Create Container Within the Image

SKILLS
AWS: VPC, EC2, IAM, S3, Lambda, CloudWatch, AutoScaling, CICD, Route53, Load Balancer, SQS & SNS
Other: Git/GitHub, Linux, Python, HTML, CSS, Networking

EDUCATION
Ramanand Arya D.A.V College, Mumbai - BSc IT - CGPA: 7.67
K.J Somaiya College, Mumbai - HSC - Percentage: 67.69%
Kalwa Hindi High School, Mumbai - SSC - Percentage: 74.60%

CERTIFICATIONS
- AWS Certified Cloud Practitioner (Completed on January 07, 2025)
- AWS re/Start Graduate
            `;

  const blob = new Blob([resumeContent], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "Anup_Prajapati_Resume.txt";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});

// Initialize skill bars on page load
window.addEventListener("load", animateSkillBars);
