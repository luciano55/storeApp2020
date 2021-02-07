package com.example.demo.model;

import java.util.List;

import javax.transaction.Transactional;

import com.example.demo.entity.ShoppingCartDTO;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ShoppingCartDTORepository extends JpaRepository<ShoppingCartDTO, Long> {

  List<ShoppingCartDTO> findByIdclient(int idClient);

  @Transactional
  int deleteByIdclientAndIdproduct(int idclient, int idproduct);

}
