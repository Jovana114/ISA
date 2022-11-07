package com.example.demo;

import com.example.demo.model.UserObj;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class IsaApplication {

	public static void main(String[] args) {
		SpringApplication.run(IsaApplication.class, args);
		UserObj xx = new UserObj();
		System.out.println(xx.getEmail());
	}


}
