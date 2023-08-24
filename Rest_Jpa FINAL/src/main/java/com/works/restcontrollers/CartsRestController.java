package com.works.restcontrollers;

import com.works.entities.Carts;
import com.works.services.CartsService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;



@CrossOrigin
@RestController
@RequiredArgsConstructor
@RequestMapping("/carts")
public class CartsRestController {

    final CartsService cartsService;

    @PostMapping("/add")
    public ResponseEntity add(@RequestBody Carts carts){
        return cartsService.add(carts);
    }

}
