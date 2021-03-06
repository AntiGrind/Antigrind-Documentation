---
sidebar_position: 40
---

# Weapon

```lua
<void> EnableLaserSightRendering(BOOL toggle)
<hash> GetWeaponComponentTypeModel(Hash componentHash)
<hash> GetWeapontypeModel(Hash weaponHash)
<hash> GetWeapontypeSlot(Hash weaponHash)
<hash> GetWeapontypeGroup(Hash weaponHash)
<void> SetCurrentPedWeapon(Ped ped, Hash weaponHash, BOOL equipNow)
<bool> GetCurrentPedWeapon(Ped ped, Hash* weaponHash, BOOL unused)
<entity> GetCurrentPedWeaponEntityIndex(Ped ped)
<hash> GetBestPedWeapon(Ped ped, BOOL p1)
<bool> SetCurrentPedVehicleWeapon(Ped ped, Hash weaponHash)
<bool> GetCurrentPedVehicleWeapon(Ped ped, Hash* weaponHash)
<bool> IsPedArmed(Ped ped, int p1)
<bool> IsWeaponValid(Hash weaponHash)
<bool> HasPedGotWeapon(Ped ped, Hash weaponHash, BOOL p2)
<bool> IsPedWeaponReadyToShoot(Ped ped)
<hash> GetPedWeapontypeInSlot(Ped ped, Hash weaponSlot)
<int> GetAmmoInPedWeapon(Ped ped, Hash weaponhash)
<void> AddAmmoToPed(Ped ped, Hash weaponHash, int ammo)
<void> SetPedAmmo(Ped ped, Hash weaponHash, int ammo)
<void> SetPedInfiniteAmmo(Ped ped, BOOL toggle, Hash weaponHash)
<void> SetPedInfiniteAmmoClip(Ped ped, BOOL toggle)
<void> GiveWeaponToPed(Ped ped, Hash weaponHash, int ammoCount, BOOL isHidden, BOOL equipNow)
<void> GiveDelayedWeaponToPed(Ped ped, Hash weaponHash, int ammoCount, BOOL equipNow)
<void> RemoveAllPedWeapons(Ped ped, BOOL unused)
<void> RemoveWeaponFromPed(Ped ped, Hash weaponHash)
<void> HidePedWeaponForScriptedCutscene(Ped ped, BOOL toggle)
<void> SetPedCurrentWeaponVisible(Ped ped, BOOL visible, BOOL deselectWeapon, BOOL p3, BOOL p4)
<void> SetPedDropsWeaponsWhenDead(Ped ped, BOOL toggle)
<bool> HasPedBeenDamagedByWeapon(Ped ped, Hash weaponHash, int weaponType)
<void> ClearPedLastWeaponDamage(Ped ped)
<bool> HasEntityBeenDamagedByWeapon(Entity entity, Hash weaponHash, int weaponType)
<void> ClearEntityLastWeaponDamage(Entity entity)
<void> SetPedDropsWeapon(Ped ped)
<void> SetPedDropsInventoryWeapon(Ped ped, Hash weaponHash, float xOffset, float yOffset, float zOffset, int ammoCount)
<int> GetMaxAmmoInClip(Ped ped, Hash weaponHash, BOOL p2)
<bool> GetAmmoInClip(Ped ped, Hash weaponHash, int* ammo)
<bool> SetAmmoInClip(Ped ped, Hash weaponHash, int ammo)
<bool> GetMaxAmmo(Ped ped, Hash weaponHash, int* ammo)
<void> SetPedAmmoByType(Ped ped, Hash ammoType, int ammo)
<int> GetPedAmmoByType(Ped ped, Hash ammoType)
<void> SetPedAmmoToDrop(Any ammoType, int ammo)
<void> 0xe620fd3512a04f18(float p0)
<hash> GetPedAmmoTypeFromWeapon(Ped ped, Hash weaponHash)
<bool> GetPedLastWeaponImpactCoord(Ped ped, Vector3* coords)
<void> SetPedGadget(Ped ped, Hash gadgetHash, BOOL p2)
<bool> GetIsPedGadgetEquipped(Ped ped, Hash gadgetHash)
<hash> GetSelectedPedWeapon(Ped ped)
<void> ExplodeProjectiles(Ped ped, Hash weaponHash, BOOL p2)
<void> RemoveAllProjectilesOfType(Hash weaponHash, BOOL p1)
<float> GetLockonDistanceOfCurrentPedWeapon(Ped ped)
<float> GetMaxRangeOfCurrentPedWeapon(Ped ped)
<bool> HasVehicleGotProjectileAttached(Ped driver, Vehicle vehicle, Hash weaponHash, Any p3)
<void> GiveWeaponComponentToPed(Ped ped, Hash weaponHash, Hash componentHash)
<void> RemoveWeaponComponentFromPed(Ped ped, Hash weaponHash, Hash componentHash)
<bool> HasPedGotWeaponComponent(Ped ped, Hash weaponHash, Hash componentHash)
<bool> IsPedWeaponComponentActive(Ped ped, Hash weaponHash, Hash componentHash)
<bool> PedSkipNextReloading(Ped ped)
<bool> MakePedReload(Ped ped)
<void> RequestWeaponAsset(Hash weaponHash, int p1, int p2)
<bool> HasWeaponAssetLoaded(Hash weaponHash)
<void> RemoveWeaponAsset(Hash weaponHash)
<object> CreateWeaponObject(Hash weaponHash, int ammoCount, float x, float y, float z, BOOL showWorldModel, float heading, Any p7)
<void> GiveWeaponComponentToWeaponObject(Object weaponObject, Hash addonHash)
<void> RemoveWeaponComponentFromWeaponObject(Object weaponObject, Hash component)
<bool> HasWeaponGotWeaponComponent(Object weapon, Hash addonHash)
<void> GiveWeaponObjectToPed(Object weaponObject, Ped ped)
<bool> DoesWeaponTakeWeaponComponent(Hash weaponHash, Hash componentHash)
<object> GetWeaponObjectFromPed(Ped ped, BOOL p1)
<void> SetPedWeaponTintIndex(Ped ped, Hash weaponHash, int tintIndex)
<int> GetPedWeaponTintIndex(Ped ped, Hash weaponHash)
<void> SetWeaponObjectTintIndex(Object weapon, int tintIndex)
<int> GetWeaponObjectTintIndex(Object weapon)
<int> GetWeaponTintCount(Hash weaponHash)
<bool> GetWeaponHudStats(Hash weaponHash, Any* outData)
<bool> GetWeaponComponentHudStats(Hash componentHash, int* outData)
<float> 0x3133b907d8b32053(Hash weapon, int p1)
<int> GetWeaponClipSize(Hash weaponHash)
<void> SetPedChanceOfFiringBlanks(Ped ped, float xBias, float yBias)
<entity> SetPedShootOrdnanceWeapon(Ped ped, BOOL p1)
<void> RequestWeaponHighDetailModel(Entity weaponObject)
<bool> IsPedCurrentWeaponSilenced(Ped ped)
<bool> SetWeaponSmokegrenadeAssigned(Ped ped)
<any> SetFlashLightFadeDistance(float distance)
<void> SetWeaponAnimationOverride(Ped ped, Hash animStyle)
<int> GetWeaponDamageType(Hash weaponHash)
<void> 0xe4dcec7fd5b739a5(Ped ped)
<bool> CanUseWeaponOnParachute(Hash weaponHash)
```