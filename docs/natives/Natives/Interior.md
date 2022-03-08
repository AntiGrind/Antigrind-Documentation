---
sidebar_position: 17
---

# Interior

```lua
<int> GetInteriorGroupId(int interiorID)
<vector3> GetOffsetFromInteriorInWorldCoords(int interiorID, float x, float y, float z)
<bool> IsInteriorScene()
<bool> IsValidInterior(int interiorID)
<void> ClearRoomForEntity(Entity entity)
<void> ForceRoomForEntity(Entity entity, int interiorID, Hash roomHashKey)
<hash> GetRoomKeyFromEntity(Entity entity)
<hash> GetKeyForEntityInRoom(Entity entity)
<int> GetInteriorFromEntity(Entity entity)
<void> 0x82ebb79e258fa2b7(Entity entity, int interiorID)
<void> 0x920d853f3e17f1da(int interiorID, Hash roomHashKey)
<void> 0xaf348afcb575a441(char* roomName)
<void> 0x405dc2aef6af95b9(Hash roomHashKey)
<hash> GetRoomKeyFromGameplayCam()
<void> 0x23b59d8912f94246()
<int> GetInteriorAtCoords(float x, float y, float z)
<void> AddPickupToInteriorRoomByName(Pickup pickup, char* roomName)
<void> LoadInterior(int interiorID)
<void> UnpinInterior(int interiorID)
<bool> IsInteriorReady(int interiorID)
<any> 0x4c2330e61d3deb56(int interiorID)
<int> GetInteriorAtCoordsWithType(float x, float y, float z, char* interiorType)
<int> UnkGetInteriorAtCoords(float x, float y, float z, int unk)
<bool> AreCoordsCollidingWithExterior(float x, float y, float z)
<int> GetInteriorFromCollision(float x, float y, float z)
<void> EnableInteriorProp(int interiorID, char* propName)
<void> DisableInteriorProp(int interiorID, char* propName)
<bool> IsInteriorPropEnabled(int interiorID, char* propName)
<void> RefreshInterior(int interiorID)
<void> HideMapObjectThisFrame(Hash mapObjectHash)
<void> DisableInterior(int interiorID, BOOL toggle)
<bool> IsInteriorDisabled(int interiorID)
<void> CapInterior(int interiorID, BOOL toggle)
<bool> IsInteriorCapped(int interiorID)
<void> 0x9e6542f0ce8e70a3(BOOL toggle)
```