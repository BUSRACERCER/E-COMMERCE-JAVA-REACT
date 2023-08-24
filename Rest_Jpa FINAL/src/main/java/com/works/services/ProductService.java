package com.works.services;

import com.works.configs.Rest;
import com.works.entities.Product;
import com.works.repositories.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ProductService {

    final ProductRepository productRepository;

    public ResponseEntity save(Product product){
        try{
            productRepository.save(product);
            Rest rest = new Rest(true,product);
            return new ResponseEntity(rest, HttpStatus.OK);
        }catch (Exception ex){
            Rest rest = new Rest(false,ex.getMessage());
            return new ResponseEntity(rest,HttpStatus.BAD_REQUEST);
        }
    }

    public ResponseEntity delete(Long pid){
        try{
            productRepository.deleteById(pid);
            Rest rest = new Rest(true,pid);
            return new ResponseEntity(rest, HttpStatus.OK);
        }catch (Exception ex){
            Rest rest = new Rest(false,ex.getMessage());
            return new ResponseEntity(rest,HttpStatus.BAD_REQUEST);
        }
    }
    public ResponseEntity update(Product product){
        Optional<Product> optionalProduct = productRepository.findById(product.getPid());
        if(optionalProduct.isPresent()){

            productRepository.saveAndFlush(product);
            Rest rest = new Rest(true,product);
            return new ResponseEntity(rest,HttpStatus.OK);
        }
        Rest rest = new Rest(false,product);
        return new ResponseEntity(rest,HttpStatus.BAD_REQUEST);
    }

    public ResponseEntity list(){
        List<Product> ls = productRepository.findAll();
        Rest rest = new Rest(true,ls);
        return new ResponseEntity(rest,HttpStatus.OK);
    }

    public ResponseEntity getSingleProduct ( Long pid) {
        Optional<Product> optionalProduct = productRepository.findById(pid);

        if (optionalProduct.isPresent()){
            return new ResponseEntity(optionalProduct.get(),HttpStatus.OK);
        }

        return new ResponseEntity("Single Product Failed !",HttpStatus.BAD_REQUEST);
    }
   public ResponseEntity getCategoryProduct(String name){
         List<Product> ls = productRepository.findByCategories_NameEquals(name);
         return new ResponseEntity(ls,HttpStatus.OK);
   }
}
