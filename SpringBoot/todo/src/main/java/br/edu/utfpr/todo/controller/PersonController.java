package br.edu.utfpr.todo.controller;

import java.time.LocalDateTime;
import java.time.ZoneId;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.edu.utfpr.todo.dto.PersonDTO;
import br.edu.utfpr.todo.model.Person;
import br.edu.utfpr.todo.service.PersonService;

@RestController
@RequestMapping("person")
public class PersonController {

    @Autowired
    private PersonService personService;

    @GetMapping
    public ResponseEntity<Object> getAll() {
        return ResponseEntity.ok().build();
    }

    @GetMapping("/{id}")
    public String getById() {
        return "GetById!";
    }

    @PostMapping
    public ResponseEntity<Object> create(
        @RequestBody PersonDTO personDTO) {

        var person = new Person();
        BeanUtils.copyProperties(personDTO, person);

        LocalDateTime now = LocalDateTime.now(ZoneId.of("UTC"));
        person.setCreatedAt(now);
        person.setUpdatedAt(now);

        try {
            return ResponseEntity.status(HttpStatus.CREATED)
                    .body(this.personService.save(person));
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body(e.getMessage());
        }
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
