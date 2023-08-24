package com.works.entities;


import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long pid;

    @Size(min = 2, max = 100)
    @NotEmpty
    @NotNull
    private String title;

    @Size(min = 4, max = 250)
    @NotEmpty
    @NotNull
    private String detail;

    @Max(2000)
    @Min(1)
    @NotNull
    private Integer price;


    @NotEmpty
    @NotNull
    private String thumbnail;


    @CollectionTable(name = "images", joinColumns = @JoinColumn(name = "pid"))
    @ElementCollection(targetClass = String.class, fetch = FetchType.EAGER)
    @Column(name = "images", nullable = false)
    private List<String> images = new ArrayList<>();
    /*list,set, map gibi dizileri farklı bir tabloda saklamayı sağlar. JPA 2 ile geliyor.
    Bu anotasyon sadece primitive tipler (enumeration da olabilir) veya @Embeddable olarak işaretli sınıflar
     ile kullanılabilir. @CollectionTable İle Birlikte Kullanılır
    Bu anotasyon @CollectionTable ile birliktedir. Eğer liste olarak kullanıyorsak sırayı korumak
    için @OrderColumn ile kullanılabilir.*/
    @ManyToMany
    List<Category> categories;

}
