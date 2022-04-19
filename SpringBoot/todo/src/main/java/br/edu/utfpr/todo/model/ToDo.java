package br.edu.utfpr.todo.model;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

//@Getter
//@Setter
//@ToString
//@EqualsAndHashCode
@Data
@NoArgsConstructor
@AllArgsConstructor

public class ToDo {
    private Long id;
    private String title;
    private String description;
    private boolean done = false;
    private LocalDateTime date;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

}
