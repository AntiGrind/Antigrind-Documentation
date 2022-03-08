---
sidebar_position: 11
---

# DLC1

```lua
<int> GetNumDecorations(int character)
<bool> 0xff56381874f82086(int character, int p1, int* outComponent)
<void> InitShopPedComponent(int* outComponent)
<void> InitShopPedProp(int* outProp)
<int> 0x50f457823ce6eb5f(int p0, int p1, int p2, int p3)
<int> GetNumPropsFromOutfit(int character, int p1, int p2, BOOL p3, int p4, int componentId)
<void> GetShopPedQueryComponent(int componentId, int* outComponent)
<void> GetShopPedComponent(Hash p0, Any* p1)
<void> GetShopPedQueryProp(Any p0, Any* p1)
<void> 0x5d5caff661ddf6fc(Any p0, Any* p1)
<hash> GetHashNameForComponent(Entity entity, int componentId, int drawableVariant, int textureVariant)
<hash> GetHashNameForProp(Entity entity, int componentId, int propIndex, int propTextureIndex)
<int> GetVariantsForComponentCount(Hash componentHash)
<void> GetVariantComponent(Hash componentHash, int componentId, Any* p2, Any* p3, Any* p4)
<int> GetNumForcedComponents(Hash componentHash)
<any> GetForcedComponent(Any p0)
<void> GetForcedComponent(Hash componentHash, int componentId, Any* p2, Any* p3, Any* p4)
<void> 0xe1ca84ebf72e691d(Any p0, Any p1, Any* p2, Any* p3, Any* p4)
<bool> IsTagRestricted(Hash componentHash, Hash restrictionTag, int componentId)
<int> GetCharacterOutfitsCount(int character, BOOL p1)
<void> GetShopPedQueryOutfit(Any p0, Any* outfit)
<void> GetShopPedOutfit(Any p0, Any* p1)
<any> GetShopPedOutfitLocate(Any p0)
<bool> GetShopPedOutfitPropVariant(Any outfitStruct, int slot, Any* propStruct)
<bool> GetShopPedOutfitComponentVariant(Any outfitStruct, int slot, Any* componentStruct)
<int> GetNumDlcVehicles()
<hash> GetDlcVehicleModel(int dlcVehicleIndex)
<bool> GetDlcVehicleData(int dlcVehicleIndex, int* outData)
<int> GetDlcVehicleFlags(int dlcVehicleIndex)
<int> GetNumDlcWeapons()
<bool> GetDlcWeaponData(int dlcWeaponIndex, int* outData)
<int> GetNumDlcWeaponComponents(int dlcWeaponIndex)
<bool> GetDlcWeaponComponentData(int dlcWeaponIndex, int dlcWeapCompIndex, Any* ComponentDataPtr)
<bool> IsDlcDataEmpty(Any* dlcData)
<bool> IsDlcVehicleMod(Any modData)
<int> 0xc098810437312fff(int modData)
```