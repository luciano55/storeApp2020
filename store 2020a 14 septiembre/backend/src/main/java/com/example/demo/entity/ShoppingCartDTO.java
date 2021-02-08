package com.example.demo.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;

import org.springframework.hateoas.RepresentationModel;

@Entity
@Table(name = "shoppingcart")
@IdClass(CustomerDetailPk.class)
public class ShoppingCartDTO extends RepresentationModel<ShoppingCartDTO> {
  @Id
  private int idclient;
  @Id
  private int idproduct;
  private int units;

  public ShoppingCartDTO() {
  }

  public ShoppingCartDTO(int idclient, int idproduct, int units) {
    this.idclient = idclient;
    this.idproduct = idproduct;
    this.units = units;
  }

  public int getIdclient() {
    return idclient;
  }

  public void setIdclient(int idclient) {
    this.idclient = idclient;
  }

  public int getIdproduct() {
    return idproduct;
  }

  public void setIdproduct(int idproduct) {
    this.idproduct = idproduct;
  }

  public int getUnits() {
    return units;
  }

  public void setUnits(int units) {
    this.units = units;
  }
}

class CustomerDetailPk implements Serializable {

  /**
   *
   */
  private static final long serialVersionUID = 1L;

  @Column(name = "idclient")
  private int idclient;

  @Column(name = "idproduct")
  private int idproduct;

  /* Getters And Setters */

  /* Override Equals And HashCode */

}