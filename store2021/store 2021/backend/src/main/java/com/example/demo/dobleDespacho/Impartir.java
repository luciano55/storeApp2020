package com.example.demo.dobleDespacho;

import java.util.Random;

public class Impartir {
  Segundo segundo;
  Primero primero;

  private Impartir() {
    segundo = new Segundo();
    primero = new Primero();
  }

  public static void main(String[] args) {
    new Impartir().simularEscenario();
  }

  private void simularEscenario() {
    Random random = new Random(System.currentTimeMillis());
    for (int i = 0; i < 5; i++) {
      IProfesorX profesor = null;
      int r = random.nextInt(3);
      if (r == 0) {
        profesor = new Luciano();
      } else if (r == 1) {
        profesor = new Jose();
      } else if (r == 2) {
        profesor = new Ade();
        // } else if (r == 3) {
        // profesor = new Olga();
      }
      this.simularEscenario(profesor);
    }
  }

  private void simularEscenario(IProfesorX profesor) {
    segundo.saludar();
    profesor.saludar(segundo);
    segundo.despedirse();
    profesor.despedirse();
    primero.saludar();
    profesor.saludar(primero);
    primero.despedirse();
    profesor.despedirse();
    System.out.println("... ");
    System.out.println("...  fin de las clases de ....!");
    System.out.println("... ");
  }
}
