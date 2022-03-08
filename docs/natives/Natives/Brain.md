---
sidebar_position: 4
---

# Brain

```lua
<void> AddScriptToRandomPed(char* name, Hash model, float p2, float p3)
<void> RegisterObjectScriptBrain(char* scriptName, Hash objectName, int p2, float p3, int p4, int p5)
<bool> IsObjectWithinBrainActivationRange(Object object)
<void> RegisterWorldPointScriptBrain(Any* p0, float p1, Any p2)
<bool> IsWorldPointWithinBrainActivationRange()
<void> EnableScriptBrainSet(int brainSet)
<void> DisableScriptBrainSet(int brainSet)
<void> StopAllScripts()
<void> FlushAllScripts()
<void> 0x6d6840cee8845831(char* action)
<void> 0x6e91b04e08773030(char* action)
```