package com.example.demo.repository;

import com.example.demo.entity.PlayMatchEntity;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface PlayMatchRepository extends CrudRepository<PlayMatchEntity, Integer> {
    @Query(value = "SELECT * FROM joga_jogo WHERE id_jogo=:matchId", nativeQuery = true)
    List<PlayMatchEntity> findTeamsThatPlayMatchByMatchId(@Param("matchId") int matchId);
}
