package com.example.demo.model;

import java.util.Collection;

import com.example.demo.entity.ShoppingCartView;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ShoppingCartViewRepository extends JpaRepository<ShoppingCartView, Long> {

  // List<ShoppingCartView> findByModel(String model);

  // List<ShoppingCartView> findByUnits(Integer units);

  Collection<ShoppingCartView> findByIdclient(Integer idclient);

}