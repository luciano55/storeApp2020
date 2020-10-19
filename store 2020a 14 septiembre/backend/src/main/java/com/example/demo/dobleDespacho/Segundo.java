package com.example.demo.dobleDespacho;

public class Segundo implements ICurso {
  public void saludar() {
    System.out.println("Somos de segundo,Hola Buenos dias");
  }

  public void despedirse() {
    System.out.println("Chao profe, buen fin de semana te desean los de segundo");
  }

  public void aceptar(IProfesor profesor) {
    profesor.impartir(this);
  }

}
