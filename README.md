
# 🚀 Static Portfolio Deployment using Docker & AWS EC2

## 📌 Project Overview

This project demonstrates how to build and deploy a **static portfolio website** using **DevOps practices**.
The application is containerized using **Docker** and deployed on **AWS EC2** with an **automated CI/CD pipeline** implemented using **GitHub Actions**.

Any code update pushed to GitHub is automatically built and deployed to the live server.

---

## 🛠️ Technologies Used

* **Frontend**: HTML, CSS, JavaScript
* **Web Server**: Nginx
* **Containerization**: Docker
* **CI/CD**: GitHub Actions
* **Cloud Platform**: AWS EC2 (Ubuntu)
* **Version Control**: Git & GitHub

---

## 🏗️ Project Architecture

```
Developer Machine
      ↓ (git push)
GitHub Repository
      ↓
GitHub Actions (CI/CD)
      ↓
AWS EC2 (Docker + Nginx)
      ↓
Live Portfolio Website
```

---

## 📁 Project Structure

```
PORTFOLIO/
│
├── img/
├── index.html
├── styles.css
├── script.js
├── Dockerfile
│
└── .github/
    └── workflows/
        └── deploy.yml
```

---

## ⚙️ Step-by-Step Implementation

### 1️⃣ Create Static Portfolio Website

* Developed a responsive static portfolio using HTML, CSS, and JavaScript.
* Includes personal details, skills, and project showcase.

---

### 2️⃣ Dockerize the Application

Created a Dockerfile to serve static files using Nginx.

```dockerfile
FROM nginx:alpine
COPY . /usr/share/nginx/html
EXPOSE 80
```

---

### 3️⃣ Test Application Locally

```bash
docker build -t portfolio .
docker run -d -p 8080:80 portfolio
```

Access the site at:

```
http://localhost:8080
```

---

### 4️⃣ Push Code to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio with Docker"
git push origin main
```

---

### 5️⃣ Setup AWS EC2

* Launched an Ubuntu EC2 instance (t2.micro)
* Opened ports **22 (SSH)** and **80 (HTTP)**
* Installed Docker and Git on EC2

---

### 6️⃣ Clone Repository on EC2

```bash
git clone https://github.com/<your-username>/portfolio-devops.git
cd portfolio-devops
```

---

### 7️⃣ Configure CI/CD with GitHub Actions

* Created GitHub Actions workflow
* Pipeline connects to EC2 using SSH
* Pulls latest code
* Builds Docker image
* Runs container automatically

#### Deployment Script (deploy.yml)

```yaml
docker stop portfolio || true
docker rm portfolio || true
docker build -t portfolio .
docker run -d -p 80:80 --name portfolio portfolio
```

---

### 8️⃣ Automated Deployment

* Every `git push` triggers the CI/CD pipeline
* Website is automatically updated on AWS EC2

---

## 🌐 Live Application

Access the live website using:

```
http://<EC2-PUBLIC-IP>
```

---

## 🎓 Key Learning Outcomes

* Understanding of **Docker containerization**
* Practical implementation of **CI/CD pipelines**
* Experience with **AWS EC2 cloud deployment**
* Hands-on DevOps automation using GitHub Actions

---

## 🏆 Resume Description

> Developed a static portfolio website, containerized it using Docker, and deployed it on AWS EC2 with an automated CI/CD pipeline using GitHub Actions.

---

## 🔮 Future Enhancements

* Add HTTPS using SSL (Certbot)
* Use custom domain with Route 53
* Implement Docker image versioning
* Add monitoring using AWS CloudWatch

---

## 👨‍💻 Author

**Anup Prajapati**
MCA Student | DevOps | AWS Cloud

---

## ⭐ Acknowledgement

This project was created for academic and learning purposes to understand real-world DevOps deployment workflows.

---

