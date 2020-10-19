package com.example.demo.dobleDespacho;

public class Jose implements IProfesor {

  public void saludar(ICurso curso) {
    System.out.println("Hola chicos, soy Jose");
    curso.aceptar(this);
  }

  public void impartir(Segundo segundo) {
    System.out.println("Hola querido Segundo");
    System.out.println("Soy Jose profesor de Móviles");
  }

  public void impartir(Primero primero) {
    System.out.println("Hola Primero");
    System.out.println("Soy profesor de Programación");
  }

  public void despedirse() {
    System.out.println("Jose dice: Adios chicos");
  }
}
