package com.example.demo.model;

import com.example.demo.entity.ShoppingCartDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Collection;

public interface ShoppingCartDTOProcedureRepository extends JpaRepository<ShoppingCartDTO, Long> {

  @Query(value = "{call CartList()}", nativeQuery = true)
  Collection<ShoppingCartDTO> cartList();

  @Query(value = "{call CartClient(:idIn)}", nativeQuery = true)
  Collection<ShoppingCartDTO> cartClient(@Param("idIn") int idIN);

  @Query(value = "{call CartClientProduct(:idClientIn, :idProductIn)}", nativeQuery = true)
  Collection<ShoppingCartDTO> cartClientProduct(@Param("idClientIn") int idClientIn,
      @Param("idProductIn") int idProductIn);

  @Query(value = "{call CartClientProductAmount(:idClientIn, :idProductIn)}", nativeQuery = true)
  float cartClientProductAmount(@Param("idClientIn") int idClientIn, @Param("idProductIn") int idProductIn);

  @Query(value = "{call ManageThePurchase(:idClientIn)}", nativeQuery = true)
  String managerThePurchase(@Param("idClientIn") int idClientIn);

}
