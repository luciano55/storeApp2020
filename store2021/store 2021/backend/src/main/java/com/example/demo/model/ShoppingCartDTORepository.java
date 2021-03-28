package com.example.demo.model;

import javax.transaction.Transactional;
import java.util.Collection;

import com.example.demo.entity.ShoppingCartDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.query.Procedure;

public interface ShoppingCartDTORepository extends JpaRepository<ShoppingCartDTO, Long> {

  Collection<ShoppingCartDTO> findByIdclient(int idClient);

  @Transactional
  int deleteByIdclientAndIdproduct(int idclient, int idproduct);

  @Transactional
  int deleteByIdclient(int idclient);

  @Procedure
  String shopCart(int id);

  @Query(value = "{call cartList()}", nativeQuery = true)
  Collection<ShoppingCartDTO> cartList();
}
