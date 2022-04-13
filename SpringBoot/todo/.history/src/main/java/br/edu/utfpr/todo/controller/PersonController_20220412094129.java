package br.edu.utfpr.todo.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("person")
public class PersonController {

    public String getAll() {
        return "GetAll!";
    }

    public String getById() {
        return "GetById!";
    }

    public String create() {
        return "Criar pessoa";
    }

    public String update() {
        return "Atualizar pessoa";
    }

    public String delete() {
        return "Deletar pessoa";
    }
}
