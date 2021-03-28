package com.example.demo.util;

import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;

public class BlockingTime {
  LocalDateTime blockingDate = null;
  int durationLock;
  float totalSeconds = 0;

  public BlockingTime(LocalDateTime blockingDate, int durationLock) {
    this.blockingDate = blockingDate;
    this.durationLock = durationLock;
  }

  private void secondsCounter() {

    if (this.blockingDate != null) {

      LocalDateTime fechaActual = LocalDateTime.now();

      long days = this.blockingDate.until(fechaActual, ChronoUnit.DAYS);
      this.blockingDate = this.blockingDate.plusDays(days);

      long hours = blockingDate.until(fechaActual, ChronoUnit.HOURS);
      blockingDate = blockingDate.plusHours(hours);

      long minutes = this.blockingDate.until(fechaActual, ChronoUnit.MINUTES);
      this.blockingDate = this.blockingDate.plusMinutes(minutes);

      long seconds = this.blockingDate.until(fechaActual, ChronoUnit.SECONDS);

      this.totalSeconds = seconds + 60 * minutes + hours * 3600 + days * 86400;
    } else
      this.totalSeconds = this.durationLock + 1;

  }

  public Boolean isBlocking() {
    this.secondsCounter();
    if (this.durationLock > this.totalSeconds) {
      return true;
    }
    return false;

  }
}
