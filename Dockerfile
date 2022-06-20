FROM openjdk:17-ea-11-jdk-slim
VOLUME /tmp
COPY build/libs/consulting-0.0.1.jar Consulting.jar
ENTRYPOINT ["java", "-jar", "UserService.jar"]