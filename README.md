# About This Project
This project includes my personal website server files made by React.Js and Java Springboot.
.
* **Front-End:** React.Js
* **Back-End:** Java (Spring Boot)
* **Database:** Oracle
* **Service Test Tools:** Postman
* **Web Test Tools:** Selenium
* **Container:** Docker
.
## Setups
1. Install Node.Js for front-end project.
2. Install Docker for database.
3. Import Oracle database image in the project to your Docker application.
.
.
## Database informations:**
* Database user name: berkay
* Şifre: 1234
* Port: 1521
* Service name: XEPDB1
.
.
**Notes**
* Clean Docker Oracle setup: docker run -d --name oracle-db -p 1522:1521 -e ORACLE_PASSWORD=1234 -e APP_USER=berkay -e APP_USER_PASSWORD=1234 gvenzl/oracle-xe
