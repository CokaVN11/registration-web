export class TimeUtil {
  static getCurrentTimestamp(): number {
    return Math.floor(Date.now() / 1000);
  }

  static timestampToDate(timestamp: number): Date {
    return new Date(timestamp * 1000);
  }

  static formatTimestamp(timestamp: number, locale: string = 'en-US'): string {
    return new Date(timestamp * 1000).toLocaleString(locale);
  }

  static getDaysBetweenTimestamps(start: number, end: number): number {
    return Math.floor((end - start) / (60 * 60 * 24));
  }

  static isExpired(timestamp: number, expirationInSec: number): boolean {
    return TimeUtil.getCurrentTimestamp() - timestamp > expirationInSec;
  }
}
