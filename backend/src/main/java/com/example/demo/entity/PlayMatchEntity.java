package com.example.demo.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.*;

import javax.persistence.*;

@Data
@NoArgsConstructor
@RequiredArgsConstructor
@Entity(name="joga_jogo")
public class PlayMatchEntity {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="id_joga_jogo")
    @NonNull
    private Integer playMatchId;

    @ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name="id_time")
    @JsonBackReference
    @NonNull
    TeamEntity team;

    @ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name="id_jogo")
    @JsonBackReference
    @NonNull
    MatchEntity match;

    @Column(name="qtd_gols")
    @NonNull
    private Integer goalAmount;

    @Column(name="qtd_cartao_amarelo")
    @NonNull
    private Integer yellowCardAmount;

    @Column(name="qtd_cartao_vermelho")
    @NonNull
    private Integer redCardAmount;
}
