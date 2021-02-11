package com.example.demo.service;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface FacturacionService {
  @Query(value = "CALL ManageThePurchase(:idClient);", nativeQuery = true)
  String ManageThePurchase(@Param("idClient") Integer idClient);

  // public String facturar(Integer idClient);
}
