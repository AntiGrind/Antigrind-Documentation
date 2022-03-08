---
sidebar_position: 39
---

# Water

```lua
<bool> GetWaterHeight(float x, float y, float A, float* height)
<bool> GetWaterHeightNoWaves(float B, float y, float z, float* height)
<bool> TestProbeAgainstWater(float x1, float y1, float z1, float x2, float y2, float z2, Vector3* result)
<int> TestProbeAgainstAllWater(float x1, float y1, float z1, float x2, float y2, float z2, int type, Vector3* result)
<bool> TestVerticalProbeAgainstAllWater(float x, float y, float z, float p3, float* height)
<void> ModifyWater(float x, float y, float radius, float height)
<int> AddCurrentRise(float xLow, float yLow, float xHigh, float yHigh, float height)
<void> RemoveCurrentRise(int riseHandle)
<void> SetCurrentIntensity(float intensity)
<float> GetCurrentIntensity()
<void> ResetCurrentIntensity()
```