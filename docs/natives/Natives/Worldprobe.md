---
sidebar_position: 41
---

# WorldProbe

```lua
<int> StartShapeTestLosProbe(float x1, float y1, float z1, float x2, float y2, float z2, int flags, Entity ent, int p8)
<int> StartShapeTestRay(float x1, float y1, float z1, float x2, float y2, float z2, int flags, Entity entity, int p8)
<int> StartShapeTestBoundingBox(Entity entity, int flags1, int flags2)
<int> StartShapeTestBox(float x, float y, float z, float x1, float y2, float z2, float rotX, float rotY, float rotZ, Any p9, Any p10, Any entity, Any p12)
<int> StartShapeTestBound(Entity entity, int flags1, int flags2)
<int> StartShapeTestCapsule(float x1, float y1, float z1, float x2, float y2, float z2, float radius, int flags, Entity entity, int p9)
<int> StartShapeTestCapsule2(float x1, float y1, float z1, float x2, float y2, float z2, float radius, int flags, Entity entity, Any p9)
<int> StartShapeTestSurroundingCoords(Vector3* pVec1, Vector3* pVec2, int flag, Entity entity, int flag2)
<int> GetShapeTestResult(int rayHandle, BOOL* hit, Vector3* endCoords, Vector3* surfaceNormal, Entity* entityHit)
<int> GetShapeTestResultEx(int rayHandle, BOOL* hit, Vector3* endCoords, Vector3* surfaceNormal, Hash* materialHash, Entity* entityHit)
<void> ShapeTestResultEntity(Hash entityHit)
```