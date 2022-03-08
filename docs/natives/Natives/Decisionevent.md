---
sidebar_position: 9
---

# Decisionevent

```lua
<void> SetDecisionMaker(Ped ped, Hash name)
<void> ClearDecisionMakerEventResponse(Hash name, int type)
<void> BlockDecisionMakerEvent(Hash name, int type)
<void> UnblockDecisionMakerEvent(Hash name, int type)
<scrhandle> AddShockingEventAtPosition(int type, float x, float y, float z, float duration)
<scrhandle> AddShockingEventForEntity(int type, Entity entity, float duration)
<bool> IsShockingEventInSphere(int type, float x, float y, float z, float radius)
<bool> RemoveShockingEvent(ScrHandle event)
<void> RemoveAllShockingEvents(BOOL p0)
<void> RemoveShockingEventSpawnBlockingAreas()
<void> SuppressShockingEventsNextFrame()
<void> SuppressShockingEventTypeNextFrame(int type)
<void> SuppressAgitationEventsNextFrame()
```