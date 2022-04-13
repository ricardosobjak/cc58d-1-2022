package br.edu.utfpr.todo.controller;

@RestController
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
