package com.example.demo.dobleDespacho;

public interface IProfesor { // Visitador de cursos

  void saludar(ICurso curso);

  void impartir(Segundo segundo);

  void impartir(Primero primero);

  void despedirse();
}
