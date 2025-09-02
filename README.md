# About This Project
This project includes my personal website server files made by React.Js and Java Springboot.

## Including
* **Front-End:** React.Js (includes Axios and Redux)
* **Back-End:** Java (Spring Boot, Hibernate and Maven)
* **Database:** Oracle SQL
* **Service Test Tools:** Postman
* **Web Test Tools:** Selenium
* **Container:** Docker
* **Data Transfer:** Redis

## Setups
1. Install Node.Js for front-end project.
2. Install Docker for database.
3. Import Docker image in the project to your Docker application for Oracle database and redis.
4. Install Java 24 for back-end project.
5. DBeaver is recomended for database connections.

## Database informations:
* **Database user name:** berkay
* **Şifre:** 1234
* **Port:** 1521
* **Service name:** XEPDB1

### Notes
* **Clean Docker Oracle setup command:** docker run -d --name oracle-db -p 1522:1521 -e ORACLE_PASSWORD=1234 -e APP_USER=berkay -e APP_USER_PASSWORD=1234 gvenzl/oracle-xe
* **Redis run command:** docker run -d --name redis -p 6379:6379 redis
