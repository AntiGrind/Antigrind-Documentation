---
sidebar_position: 14
---

# Fire

```lua
<hash> StartScriptFire(float X, float Y, float Z, int maxChildren, BOOL isGasFire)
<void> RemoveScriptFire(int fireHandle)
<ped> StartEntityFire(Ped entity)
<void> StopEntityFire(Entity entity)
<bool> IsEntityOnFire(Entity entity)
<int> GetNumberOfFiresInRange(float x, float y, float z, float radius)
<void> StopFireInRange(float x, float y, float z, float radius)
<bool> GetClosestFirePos(Vector3* outPosition, float x, float y, float z)
<void> AddExplosion(float x, float y, float z, int explosionType, float damageScale, BOOL isAudible, BOOL isInvisible, float cameraShake)
<void> AddOwnedExplosion(Ped ped, float x, float y, float z, int explosionType, float damageScale, BOOL isAudible, BOOL isInvisible, float cameraShake)
<void> AddExplosionWithUserVfx(Entity x, Entity y, Entity z, int explosionType, Hash explosionFx, float damageScale, BOOL isAudible, BOOL isInvisible, float cameraShake)
<bool> IsExplosionInArea(int explosionType, float x1, float y1, float z1, float x2, float y2, float z2)
<int> GetExplosionsInArea(int explosionType, float x1, float y1, float z1, float x2, float y2, float z2)
<bool> IsExplosionInSphere(int explosionType, float x, float y, float z, float radius)
<bool> IsExplosionInAngledArea(int explosionType, float x1, float y1, float z1, float x2, float y2, float z2, float angle)
<entity> GetPedInsideExplosionArea(int explosionType, float x1, float y1, float z1, float x2, float y2, float z2, float radius)
```