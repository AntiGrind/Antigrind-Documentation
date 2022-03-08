---
sidebar_position: 31
---

# System

```lua
<void> Wait(int ms)
<int> StartNewScript(char* scriptName, int stackSize)
<int> StartNewScriptWithArgs(char* scriptName, Any* args, int argCount, int stackSize)
<int> StartNewScriptWithNameHash(Hash scriptHash, int stackSize)
<int> StartNewScriptWithNameHashAndArgs(Hash scriptHash, Any* args, int argCount, int stackSize)
<int> Timera()
<int> Timerb()
<void> Settimera(int value)
<void> Settimerb(int value)
<float> Timestep()
<float> Sin(float value)
<float> Cos(float value)
<float> Sqrt(float value)
<float> Pow(float base, float exponent)
<float> Vmag(float x, float y, float z)
<float> Vmag2(float x, float y, float z)
<float> Vdist(float x1, float y1, float z1, float x2, float y2, float z2)
<float> Vdist2(float x1, float y1, float z1, float x2, float y2, float z2)
<int> ShiftLeft(int value, int bitShift)
<int> ShiftRight(int value, int bitShift)
<int> Floor(float value)
<int> Ceil(float value)
<int> Round(float value)
<float> ToFloat(int value)
```