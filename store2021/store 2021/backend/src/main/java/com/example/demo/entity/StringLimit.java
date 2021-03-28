package com.example.demo.entity;

public class StringLimit {
  private String string;
  private int min;
  private int max;

  public StringLimit(String string, int min, int max) {
    this.string = string;
    this.min = min;
    this.max = max;
  }

  public String getString() {
    return string;
  }

  public void setString(String string) {
    this.string = string;
  }

  public int getMin() {
    return min;
  }

  public void setMin(int min) {
    this.min = min;
  }

  public int getMax() {
    return max;
  }

  public void setMax(int max) {
    this.max = max;
  }
}
