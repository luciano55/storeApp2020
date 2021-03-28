package com.example.demo.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Id;
import javax.persistence.IdClass;

@Entity
@Table(name = "shopping_cart_view")
@IdClass(CartViewPk.class)
public class ShoppingCartView {

  @Id
  private int idclient;
  private int idproduct;
  private String model;
  private int units;
  private float price;
  private String photo;

  public ShoppingCartView() {
  }

  public ShoppingCartView(int idclient, int idproduct, String model, int units, float price, String photo) {

    this.idclient = idclient;
    this.idproduct = idproduct;
    this.model = model;
    this.units = units;
    this.price = price;
    this.photo = photo;
  }

  public int getIdClient() {
    return idclient;
  }

  public void setIdClient(int idclient) {
    this.idclient = idclient;
  }

  public int getIdProduct() {
    return idproduct;
  }

  public void setId_product(int idproduct) {
    this.idproduct = idproduct;
  }

  public String getModel() {
    return model;
  }

  public void setModel(String model) {
    this.model = model;
  }

  public int getUnits() {
    return units;
  }

  public void setUnits(int units) {
    this.units = units;
  }

  public float getPrice() {
    return price;
  }

  public void setPrice(float price) {
    this.price = price;
  }

  public String getPhoto() {
    return photo;
  }

  public void setPhoto(String photo) {
    this.photo = photo;
  }

}

class CartViewPk implements Serializable {

  /**
   *
   */
  private static final long serialVersionUID = 1L;

  @Column(name = "idclient")
  private int idclient;

  @Column(name = "idproduct")
  private int idproduct;

}