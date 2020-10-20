package com.example.demo.dobleDespacho;

public class Primero implements ICurso {
  public void saludar() {
    System.out.println("Somos de primero, Hola profe");
  }

  public void despedirse() {
    System.out.println("Chao, buen día les desea los de primero");
  }

  public void aceptar(IProfesorPrimero profesor) {
    profesor.impartir(this);
  }

  public void aceptar(IProfesorX profesor) {
    // profesor.impartir(this);
  }

}