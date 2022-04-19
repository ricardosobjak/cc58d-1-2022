package br.edu.utfpr.todo.dto;

import java.time.LocalDate;
import br.edu.utfpr.todo.model.PersonType;
public class PersonDTO {
    private String name;
    private String email;
    private String username;
    private String password;
    private LocalDate birth;
    private PersonType type;

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    public LocalDate getBirth() {
        return birth;
    }
    public void setBirth(LocalDate birth) {
        this.birth = birth;
    }
    public PersonType getType() {
        return type;
    }
    public void setType(PersonType type) {
        this.type = type;
    }
}