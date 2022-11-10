# ISA Projekat

[![Build Status](https://travis-ci.org/codecentric/springboot-sample-app.svg?branch=master)](https://travis-ci.org/codecentric/springboot-sample-app)
[![Coverage Status](https://coveralls.io/repos/github/codecentric/springboot-sample-app/badge.svg?branch=master)](https://coveralls.io/github/codecentric/springboot-sample-app?branch=master)
[![License](http://img.shields.io/:license-apache-blue.svg)](http://www.apache.org/licenses/LICENSE-2.0.html)

Minimal [Spring Boot](http://projects.spring.io/spring-boot/) sample app.

## When working
- git pull (main branch)
- git checkout dev

## Project Specification

- 1: 3.2, 3.6, 3.9, 3.10, 3.16, 6           (Aleksandra)
- 2: 3.3, 3.8, 3.11, 3.14, 3.20, 4 ili 5    (Filip)
- 3: 3.1, 3.4, 3.7, 3.12, 3.18, 4 ili 5     (Jovana)
- 4: 3.5, 3.13, 3.15, 3.17, 3.19            (Ilija)


- [Internet Softverske Arhitekture](https://github.com/ivana-k/isa-vezbe/blob/main/Specifikacija%20projekta/Specifikacija%20projekta%20E2-IN%20ISA%202022_2023.pdf)
## Requirements

For building and running the application you need:

- [JDK 17](https://www.oracle.com/java/technologies/downloads/#jdk17-windows)
- [Maven](https://maven.apache.org)

## Running the application locally

There are several ways to run a Spring Boot application on your local machine. One way is to execute the `main` method in the `de.codecentric.springbootsample.Application` class from your IDE.

Alternatively you can use the [Spring Boot Maven plugin](https://docs.spring.io/spring-boot/docs/current/reference/html/build-tool-plugins-maven-plugin.html) like so:

```shell
mvn spring-boot:run
```

## Deploying the application to OpenShift

The easiest way to deploy the sample application to OpenShift is to use the [OpenShift CLI](https://docs.openshift.org/latest/cli_reference/index.html):

```shell
oc new-app codecentric/springboot-maven3-centos~https://github.com/codecentric/springboot-sample-app
```

If you want to access the app from outside your OpenShift installation, you have to expose the springboot-sample-app service:

```shell
oc expose springboot-sample-app --hostname=www.example.com
```

## Copyright

Released under the Apache License 2.0. See the [LICENSE](https://github.com/codecentric/springboot-sample-app/blob/master/LICENSE) file.
