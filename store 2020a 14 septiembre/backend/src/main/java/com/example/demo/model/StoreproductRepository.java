package com.example.demo.model;

import com.example.demo.entity.Productstore;

import org.springframework.data.jpa.repository.JpaRepository;

public interface StoreproductRepository extends JpaRepository<Productstore, Long> {

}
