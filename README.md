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

---

## 🛠️ STEP 1: Login to EC2 Manually (One Time)

Launch an **Ubuntu EC2 instance** and connect using SSH:

```bash
ssh -i your-key.pem ubuntu@<EC2_PUBLIC_IP>
```

---

## 🛠️ STEP 2: Install Docker on EC2

Run the following commands on EC2:

```bash
sudo apt update
sudo apt install docker.io -y
sudo systemctl start docker
sudo systemctl enable docker
sudo usermod -aG docker ubuntu
```

🔁 **Logout and login again** for Docker permission to apply.

Verify installation:

```bash
docker --version
```

---

## 🛠️ STEP 3: Install Git on EC2

```bash
sudo apt install git -y
git --version
```

---

## 🛠️ STEP 4: Clone GitHub Repository on EC2

```bash
git clone https://github.com/<your-username>/portfolio-devops.git
cd portfolio-devops
```

Verify files:

```bash
ls
```

You should see:

```
Dockerfile
index.html
styles.css
script.js
```

---

## 🛠️ STEP 5: Dockerize the Application

Dockerfile used to serve static files with Nginx:

```dockerfile
FROM nginx:alpine
COPY . /usr/share/nginx/html
EXPOSE 80
```

---

## 🛠️ STEP 6: Test Application Locally (Optional)

```bash
docker build -t portfolio .
docker run -d -p 8080:80 portfolio
```

Access:

```
http://localhost:8080
```

---

## 🛠️ STEP 7: Configure CI/CD with GitHub Actions

* Created a GitHub Actions workflow
* Pipeline connects to EC2 via SSH
* Pulls latest code
* Builds Docker image
* Runs container automatically

### Deployment Commands Used in Pipeline

```bash
docker stop portfolio || true
docker rm portfolio || true
docker build -t portfolio .
docker run -d -p 80:80 --name portfolio portfolio
```

---

### 🛠️ STEP: Add Secrets in GitHub Repository

1. Go to your **GitHub Repository**
2. Navigate to:

   ```
   Settings → Secrets and variables → Actions
   ```
3. Click **New repository secret**
4. Add the following secrets:

---

### 🔑 Required Secrets

#### 1️⃣ EC2_HOST

* **Name**: `EC2_HOST`
* **Value**: Public IP address of your EC2 instance

  ```
  Example: 13.233.xxx.xxx
  ```

---

#### 2️⃣ EC2_KEY

* **Name**: `EC2_KEY`
* **Value**: Contents of your EC2 private key file (`.pem`)

📌 How to get key content:

```bash
cat your-key.pem
```

⚠️ Copy the **entire content**, including:

```
-----BEGIN RSA PRIVATE KEY-----
-----END RSA PRIVATE KEY-----
```

---

### 🔒 Why Secrets Are Required

* Prevents hardcoding sensitive credentials
* Ensures secure SSH access from GitHub Actions
* Follows industry-standard security practices

---

### ✅ After Adding Secrets

Once secrets are added:

* Push any code change to `main`
* GitHub Actions will automatically:

  * Connect to EC2 securely
  * Pull latest code
  * Build Docker image
  * Deploy updated container

---

## 🔁 Automated Deployment Flow

* Any `git push` to `main` branch triggers CI/CD
* GitHub Actions deploys latest version to EC2
* Website updates automatically without manual intervention

---

## 🌐 Live Application

Access the live website using:

```
http://<EC2-PUBLIC-IP>
```

---

## 🎓 Key Learning Outcomes

* Docker containerization for static applications
* CI/CD pipeline implementation using GitHub Actions
* Cloud deployment using AWS EC2
* Real-world DevOps automation workflow

---

## 🏆 Resume Description

> Developed a static portfolio website, containerized it using Docker, and deployed it on AWS EC2 with an automated CI/CD pipeline using GitHub Actions.

---

## 🔮 Future Enhancements

* HTTPS using SSL (Certbot)
* Custom domain using AWS Route 53
* Docker image versioning
* Monitoring with AWS CloudWatch

---

## 👨‍💻 Author

**Anup Prajapati**
MCA Student | DevOps | AWS Cloud

---

## ⭐ Acknowledgement

This project was created for academic and learning purposes to understand real-world DevOps deployment workflows.

---
