package com.example.demo.converters;

import com.example.demo.dto.PlayMatchDTO;
import com.example.demo.entity.PlayMatchEntity;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class PlayMatchConverter {
    @Autowired
    private ModelMapper modelMapper;

    public PlayMatchEntity convertToEntity(PlayMatchDTO playMatchDTO) {
        modelMapper.typeMap(PlayMatchDTO.class, PlayMatchEntity.class).addMappings(mapper -> mapper.skip(PlayMatchEntity::setPlayMatchId));
        PlayMatchEntity playMatch = modelMapper.map(playMatchDTO, PlayMatchEntity.class);

        return playMatch;
    }


}
