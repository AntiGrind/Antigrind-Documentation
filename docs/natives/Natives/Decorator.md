---
sidebar_position: 10
---

# Decorator

```lua
<bool> DecorSetTime(Entity entity, char* propertyName, int timestamp)
<bool> DecorSetBool(Entity entity, char* propertyName, BOOL value)
<bool> DecorSetFloat(Entity entity, char* propertyName, float value)
<bool> DecorSetInt(Entity entity, char* propertyName, int value)
<bool> DecorGetBool(Entity entity, char* propertyName)
<float> DecorGetFloat(Entity entity, char* propertyName)
<int> DecorGetInt(Entity entity, char* propertyName)
<bool> DecorExistOn(Entity entity, char* propertyName)
<bool> DecorRemove(Entity entity, char* propertyName)
<void> DecorRegister(char* propertyName, int type)
<bool> DecorIsRegisteredAsType(char* propertyName, int type)
<void> DecorRegisterLock()
<bool> 0x241fca5b1aa14f75()
```