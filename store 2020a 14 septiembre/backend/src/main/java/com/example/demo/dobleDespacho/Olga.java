package com.example.demo.dobleDespacho;

public class Olga implements IProfesor {

  public void saludar(ICurso curso) {
    System.out.println("Hola chicos, soy Olga");
    curso.aceptar(this);
  }

  public void impartir(Segundo segundo) {
    System.out.println("No doy en segundo");
  }

  public void impartir(Primero primero) {
    System.out.println("Soy profesora de Entorno de desarrollo");
  }

  public void despedirse() {
    System.out.println("Olga: Chao chicos. ");
  }
}