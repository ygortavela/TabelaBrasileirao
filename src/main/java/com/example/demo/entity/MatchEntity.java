package com.example.demo.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Data
@NoArgsConstructor
@RequiredArgsConstructor
@Entity(name="jogo")
@JsonIgnoreProperties("playMatch")
public class MatchEntity {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="id_jogo")
    @NonNull
    private Integer matchId;

    @Column(name="rodada")
    @NonNull
    private Integer round;

    @Column(name="data_horario")
    @NonNull
    private LocalDateTime matchDateTime;

    @Column(name="local_jogo")
    @NonNull
    private String matchPlace;

    @OneToMany(mappedBy="match", fetch=FetchType.LAZY, cascade=CascadeType.ALL)
    @JsonManagedReference
    List<PlayMatchEntity> playMatch;
}