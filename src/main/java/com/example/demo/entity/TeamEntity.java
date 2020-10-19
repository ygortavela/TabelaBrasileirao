package com.example.demo.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.*;

import javax.persistence.*;
import java.util.List;

@Data
@NoArgsConstructor
@RequiredArgsConstructor
@Entity(name="time")
@JsonIgnoreProperties("playMatch")
public class TeamEntity {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="id_time")
    @NonNull
    private Integer teamId;

    @Column(name="nome")
    @NonNull
    private String name;

    @Column(name="sigla")
    @NonNull
    private String initials;

    @OneToMany(mappedBy="team", fetch=FetchType.LAZY, cascade=CascadeType.ALL)
    @JsonManagedReference
    List<PlayMatchEntity> playMatch;
}
