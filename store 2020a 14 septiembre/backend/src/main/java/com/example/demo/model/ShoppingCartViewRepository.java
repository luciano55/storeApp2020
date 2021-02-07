package com.example.demo.model;

import java.util.List;

import com.example.demo.entity.ShoppingCartView;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ShoppingCartViewRepository extends JpaRepository<ShoppingCartView, Long> {

  List<ShoppingCartView> findByModel(String model);

  List<ShoppingCartView> findByUnits(Integer units);

  List<ShoppingCartView> findByidclient(Integer idclient);

}