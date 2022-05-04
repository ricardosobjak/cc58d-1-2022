package br.edu.utfpr.todo.controller;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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
    public List<Person> getAll() {
        return this.personService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> getById(@PathVariable Long id) {
        Optional<Person> p = this.personService.findById(id);
        System.out.println(p);

        return (p.isPresent())
                ? ResponseEntity.ok().body(p)
                : ResponseEntity.notFound().build();
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
    public ResponseEntity<Object> update(
        @PathVariable Long id, @RequestBody PersonDTO personDTO) {
        
        var p = personService.findById(id);

        if (p.isEmpty())
            return ResponseEntity.notFound().build();
        
        var personUpdate = new Person();
        BeanUtils.copyProperties(personDTO, personUpdate);
        personUpdate.setId(id);
        personUpdate.setCreatedAt(p.get().getCreatedAt());
        personUpdate.setUpdatedAt(
            LocalDateTime.now(ZoneId.of("UTC")));

        return ResponseEntity
            .status(200)
            .body(personService.save(personUpdate));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> delete(@PathVariable Long id) {
        var p = personService.findById(id);

        if (p.isEmpty())
            return ResponseEntity.notFound().build();

        personService.delete(p.get());
        return ResponseEntity.ok().build();
    }

}
