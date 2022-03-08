---
sidebar_position: 32
---

# Time

```lua
<void> SetClockTime(int hour, int minute, int second)
<void> PauseClock(BOOL toggle)
<void> AdvanceClockTimeTo(int hour, int minute, int second)
<void> AddToClockTime(int hours, int minutes, int seconds)
<int> GetClockHours()
<int> GetClockMinutes()
<int> GetClockSeconds()
<void> SetClockDate(int day, int month, int year)
<int> GetClockDayOfWeek()
<int> GetClockDayOfMonth()
<int> GetClockMonth()
<int> GetClockYear()
<int> GetMillisecondsPerGameMinute()
<void> GetPosixTime(int* year, int* month, int* day, int* hour, int* minute, int* second)
<void> GetUtcTime(int* year, int* month, int* day, int* hour, int* minute, int* second)
<void> GetLocalTime(int* year, int* month, int* day, int* hour, int* minute, int* second)
```