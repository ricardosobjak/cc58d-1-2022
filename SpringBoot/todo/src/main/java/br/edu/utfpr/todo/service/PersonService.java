package br.edu.utfpr.todo.service;

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
}
