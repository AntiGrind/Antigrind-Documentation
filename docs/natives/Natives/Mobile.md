---
sidebar_position: 19
---

# Mobile

```lua
<void> CreateMobilePhone(int p4)
<void> DestroyMobilePhone()
<void> SetMobilePhoneScale(float scale)
<void> SetMobilePhoneRotation(float rotX, float rotY, float rotZ, Any p3)
<void> GetMobilePhoneRotation(Vector3* rotation, int p1)
<void> SetMobilePhonePosition(float posX, float posY, float posZ)
<void> GetMobilePhonePosition(Vector3* position)
<void> ScriptIsMovingMobilePhoneOffscreen(BOOL toggle)
<bool> CanPhoneBeSeenOnScreen()
<void> MoveFinger(int direction)
<void> SetPhoneLean(BOOL Toggle)
<void> CellCamActivate(BOOL toggle, BOOL p1)
<void> DisablePhoneThisFrame(BOOL toggle)
<void> 0xa2ccbe62cd4c91a4(int* toggle)
<void> 0x1b0b4aeed5b9b41c(float p0)
<void> 0x53f4892d18ec90a4(float p0)
<void> 0x3117d84efa60f77b(float p0)
<void> 0x15e69e2802c24b8d(float p0)
<void> 0xac2890471901861c(float p0)
<void> 0xd6ade981781fca09(float p0)
<void> 0xf1e22dc13f5eebad(float p0)
<void> 0x466da42c89865553(float p0)
<bool> CellCamIsCharVisibleNoFaceCheck(Entity entity)
<void> GetMobilePhoneRenderId(int* renderId)
<bool> NetworkShopDoesItemExist(char* name)
<bool> NetworkShopDoesItemExistHash(Hash hash)
```