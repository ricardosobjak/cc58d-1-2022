package br.edu.utfpr.todo.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.edu.utfpr.todo.model.Person;
import br.edu.utfpr.todo.repository.PersonRepository;

@Service
public class PersonService {
    @Autowired
    private PersonRepository personRepository;

    @Transactional
    public Person save(Person person) {
        return this.personRepository.save(person);
    }

    public List<Person> findAll() {
        return this.personRepository.findAll();
    }

    public Optional<Person> findById(Long id) {
        return this.personRepository.findById(id);
    }

    @Transactional
    public void delete(Person person) {
        this.personRepository.delete(person);
    }

}
