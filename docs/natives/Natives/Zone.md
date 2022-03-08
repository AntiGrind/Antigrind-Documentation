---
sidebar_position: 42
---

# Zone

```lua
<int> GetZoneAtCoords(float x, float y, float z)
<int> GetZoneFromNameId(char* zoneName)
<int> GetZonePopschedule(int zoneId)
<char*> GetNameOfZone(float x, float y, float z)
<void> SetZoneEnabled(int zoneId, BOOL toggle)
<int> GetZoneScumminess(int zoneId)
<void> OverridePopscheduleVehicleModel(int scheduleId, Hash vehicleHash)
<void> ClearPopscheduleOverrideVehicleModel(int scheduleId)
<hash> GetHashOfMapAreaAtCoords(float x, float y, float z)
```