---
sidebar_position: 1
---

# Vector3

## Using Vectors
Vector3 is a struct containing 3 floats and some paddin' between them. Meaning you use this when using RAGE natives, and you access each element by doing .x, .y and .z
 
Easy and simple, here a bad example.

```lua
--<Vector3> GetEntityCoords(Entity entity, BOOL alive)
--Contains x,y and z all of them are floats denominating a location in 3d space

local v = GetEntityCoords(PlayerPedId(), false)

SetEntityCoords(PlayerPedId(), v.x + 5, v.y, v.z, false, false, false, false) --Sometimes you won't have to provide a Vector3 in those cases just use .x, .y and .z!

TeleportThisMan(i,v) --Teleports you 5 something forward in the X axis.
```
