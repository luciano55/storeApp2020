package com.example.demo.dobleDespacho;

public class Jose extends IProfesorCiclo {

  public void saludar(ICurso curso) {
    System.out.println("Hola chicos, soy Luciano");
    curso.aceptar(this);
  }

  public void impartir(Segundo segundo) {
    System.out.println("Hola querido Segundo");
    System.out.println("Soy Jose profesor de Móviles");

  }

  public void impartir(Primero primero) {
    System.out.println("Hola novatos de Primero");
    System.out.println("Soy profesor de Programación");

  }

}
