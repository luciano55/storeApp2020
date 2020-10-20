package com.example.demo.dobleDespacho;

abstract class IProfesorCiclo implements IProfesorPrimero, IProfesorSegundo {

  public void saludar(Primero primero) {
    System.out.println("Hola chic@s de Primero");
    primero.aceptar(this);
  }

  public void saludar(Segundo segundo) {
    System.out.println("Hola chic@s de Segundo");
    segundo.aceptar(this);

  }

  abstract public void impartir(Segundo segundo);

  abstract public void impartir(Primero primero);

  public void despedirse() {
    System.out.println("Buen finde chic@s");
  }

}
