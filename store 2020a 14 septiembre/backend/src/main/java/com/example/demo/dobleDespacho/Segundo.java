package com.example.demo.dobleDespacho;

public class Segundo implements ICurso {
  public void saludar() {
    System.out.println("Somos de segundo,Hola Buenos dias");
  }

  public void despedirse() {
    System.out.println("Chao profe, buen fin de semana te desean los de segundo");
  }

  public void aceptar(IProfesorSegundo profesor) {
    profesor.impartir(this);
  }

  public void aceptar(IProfesorX profesor) {
    // profesor.impartir(this);
  }
}
