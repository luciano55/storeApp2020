package com.example.demo.dobleDespacho;

public class Luciano extends IProfesorCiclo {

  public void saludar(ICurso curso) {
    System.out.println("Hola chicos, soy Luciano");
    curso.aceptar(this);
  }

  public void impartir(Segundo segundo) {
    System.out.println("Soy profesor de Acceso a adatos");
  }

  public void impartir(Primero primero) {
    System.out.println("Soy profesor de Base de datos");
  }

  public void despedirse() {
    System.out.println("Luciano: Adios chicos. Estudiad ... mucho");
  }
}
