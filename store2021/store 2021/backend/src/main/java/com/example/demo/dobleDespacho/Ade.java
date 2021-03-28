package com.example.demo.dobleDespacho;

public class Ade extends IProfesorCiclo {

  public void saludar(ICurso curso) {
    System.out.println("Hola chicos, soy Ade");
    curso.aceptar(this);
  }

  public void impartir(Segundo segundo) {
    System.out.println("Soy profesora de Entorno Gráfico");
  }

  public void impartir(Primero primero) {
    System.out.println("Soy profesora de Sistemas");
  }

  public void despedirse() {
    System.out.println("Ade: Chao chicos. ");
  }
}