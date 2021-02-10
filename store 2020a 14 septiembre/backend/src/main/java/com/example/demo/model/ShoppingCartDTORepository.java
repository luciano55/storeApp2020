package com.example.demo.model;

import javax.transaction.Transactional;
import java.util.Collection;

import com.example.demo.entity.ShoppingCartDTO;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ShoppingCartDTORepository extends JpaRepository<ShoppingCartDTO, Long> {

  Collection<ShoppingCartDTO> findByIdclient(int idClient);

  @Transactional
  int deleteByIdclientAndIdproduct(int idclient, int idproduct);

}
