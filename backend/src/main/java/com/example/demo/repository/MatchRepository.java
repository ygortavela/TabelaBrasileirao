package com.example.demo.repository;

import com.example.demo.entity.MatchEntity;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface MatchRepository extends CrudRepository<MatchEntity, Integer> {
    @Query(value = "SELECT * FROM jogo WHERE id_jogo IN (SELECT id_jogo FROM jogo EXCEPT (SELECT DISTINCT id_jogo FROM joga_jogo))", nativeQuery = true)
    List<MatchEntity> findMatchesThatIsNotPlayed();
}
