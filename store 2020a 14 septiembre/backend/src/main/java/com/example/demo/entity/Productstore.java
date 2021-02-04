package com.example.demo.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "productstore")
public class Productstore {

  @Id
  private long id;

  private int idProducto;
  private String referencia;
  private String modelo;
  private int idProveedor;
  private String proveedor;
  private Float precio;
  private int stock;
  private int descuento;
  private String memoria;
  private String brand;
  private String imageModel;
  private String imageRear;
  private String imageSide;

  public Productstore() {
  }

  public long getId() {
    return id;
  }

  public void setId(long id) {
    this.id = id;
  }

  public int getIdProducto() {
    return idProducto;
  }

  public void setIdProducto(int idProducto) {
    this.idProducto = idProducto;
  }

  public String getReferencia() {
    return referencia;
  }

  public void setReferencia(String referencia) {
    this.referencia = referencia;
  }

  public String getModelo() {
    return modelo;
  }

  public void setModelo(String modelo) {
    this.modelo = modelo;
  }

  public int getIdProveedor() {
    return idProveedor;
  }

  public void setIdProveedor(int idProveedor) {
    this.idProveedor = idProveedor;
  }

  public String getProveedor() {
    return proveedor;
  }

  public void setProveedor(String proveedor) {
    this.proveedor = proveedor;
  }

  public Float getPrecio() {
    return precio;
  }

  public void setPrecio(Float precio) {
    this.precio = precio;
  }

  public int getStock() {
    return stock;
  }

  public void setStock(int stock) {
    this.stock = stock;
  }

  public int getDescuento() {
    return descuento;
  }

  public void setDescuento(int descuento) {
    this.descuento = descuento;
  }

  public String getMemoria() {
    return memoria;
  }

  public void setMemoria(String memoria) {
    this.memoria = memoria;
  }

  public Productstore(long id, int idProducto, String referencia, String modelo, int idProveedor, String proveedor,
      Float precio, int stock, int descuento, String memoria, String brand, String imageModel, String imageRear,
      String imageSide) {
    this.id = id;
    this.idProducto = idProducto;
    this.referencia = referencia;
    this.modelo = modelo;
    this.idProveedor = idProveedor;
    this.proveedor = proveedor;
    this.precio = precio;
    this.stock = stock;
    this.descuento = descuento;
    this.memoria = memoria;
    this.brand = brand;
    this.imageModel = imageModel;
    this.imageRear = imageRear;
    this.imageSide = imageSide;
  }

  public Productstore(int idProducto, String referencia, String modelo, int idProveedor, String proveedor, Float precio,
      int stock, int descuento, String memoria, String brand, String imageModel, String imageRear, String imageSide) {

    this.idProducto = idProducto;
    this.referencia = referencia;
    this.modelo = modelo;
    this.idProveedor = idProveedor;
    this.proveedor = proveedor;
    this.precio = precio;
    this.stock = stock;
    this.descuento = descuento;
    this.memoria = memoria;
    this.brand = brand;
    this.imageModel = imageModel;
    this.imageRear = imageRear;
    this.imageSide = imageSide;
  }

  public String getBrand() {
    return brand;
  }

  public void setBrand(String brand) {
    this.brand = brand;
  }

  public String getImageModel() {
    return imageModel;
  }

  public void setImageModel(String imageModel) {
    this.imageModel = imageModel;
  }

  public String getImageRear() {
    return imageRear;
  }

  public void setImageRear(String imageRear) {
    this.imageRear = imageRear;
  }

  public String getImageSide() {
    return imageSide;
  }

  public void setImageSide(String imageSide) {
    this.imageSide = imageSide;
  }
}
