package br.edu.utfpr.todo.dto;

import java.time.LocalDate;

public class PersonDTO {
    private String name;
    private String email;
    private String username;
    private String password;
    private LocalDate birth;

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public LocalDate getBirth() {
        return this.birth;
    }

    public void setBirth(LocalDate birth) {
        this.birth = birth;
    }
}
