package br.edu.utfpr.todo.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("person")
public class PersonController {

    @GetMapping
    public ResponseEntity<Object> getAll() {
        return ResponseEntity.ok().build();
    }

    @GetMapping("/{id}")
    public String getById() {
        return "GetById!";
    }

    @PostMapping
    public String create() {
        return "Criar pessoa";
    }

    @PutMapping("/{id}")
    public String update() {
        return "Atualizar pessoa";
    }

    @DeleteMapping("/{id}")
    public String delete() {
        return "Deletar pessoa";
    }

}
