package com.works.services;

import com.works.entities.Carts;
import com.works.repositories.CartsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional
public class CartsService {

    final CartsRepository cartsRepository;

    public ResponseEntity add(Carts carts){
        try{
            cartsRepository.save(carts);
            return new ResponseEntity(carts, HttpStatus.OK);
        }catch (Exception ex){
            return new ResponseEntity(ex.getMessage(),HttpStatus.BAD_REQUEST);
        }
    }

}
