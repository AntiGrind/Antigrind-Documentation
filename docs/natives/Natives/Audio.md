---
sidebar_position: 3
---

# Audio

```lua
<void> PlayPedRingtone(char* ringtoneName, Ped ped, BOOL p2)
<bool> IsPedRingtonePlaying(Ped ped)
<void> StopPedRingtone(Ped ped)
<bool> IsMobilePhoneCallOngoing()
<bool> 0xc8b1b2425604cdd0()
<void> CreateNewScriptedConversation()
<void> AddLineToConversation(int p0, char* p1, char* p2, int p3, int p4, BOOL p5, BOOL p6, BOOL p7, BOOL p8, int p9, BOOL p10, BOOL p11, BOOL p12)
<void> AddPedToConversation(int pedIndex, Ped ped, char* name)
<void> 0x33e3c6c6f2f0b506(Any p0, float p1, float p2, float p3)
<void> 0x892b6ab8f33606f5(Any p0, Any p1)
<void> SetMicrophonePosition(BOOL p0, float x1, float y1, float z1, float x2, float y2, float z2, float x3, float y3, float z3)
<void> 0x0b568201dd99f0eb(BOOL p0)
<void> 0x61631f5df50d1c34(BOOL p0)
<void> StartScriptPhoneConversation(BOOL p0, BOOL p1)
<void> PreloadScriptPhoneConversation(BOOL p0, BOOL p1)
<void> StartScriptConversation(BOOL p0, BOOL p1, BOOL p2, BOOL p3)
<void> PreloadScriptConversation(BOOL p0, BOOL p1, BOOL p2, BOOL p3)
<void> StartPreloadedConversation()
<bool> 0xe73364db90778ffa()
<bool> IsScriptedConversationOngoing()
<bool> IsScriptedConversationLoaded()
<any> GetCurrentScriptedConversationLine()
<void> PauseScriptedConversation(BOOL finishCurLine)
<void> RestartScriptedConversation()
<any> StopScriptedConversation(BOOL p0)
<void> SkipToNextScriptedConversationLine()
<void> InterruptConversation(Ped targ, char* gxtLine, char* charName)
<void> InterruptConversationAndPause(Ped p0, char* p1, char* p2)
<any> 0xaa19f5572c38b564(Any* p0)
<void> 0xb542de8c3d1cb210(BOOL p0)
<void> RegisterScriptWithAudio(int p0)
<void> UnregisterScriptWithAudio()
<bool> RequestMissionAudioBank(char* p0, BOOL p1)
<bool> RequestAmbientAudioBank(char* p0, BOOL p1)
<bool> RequestScriptAudioBank(char* p0, BOOL p1)
<any> HintAmbientAudioBank(Any p0, Any p1)
<any> HintScriptAudioBank(Any p0, Any p1)
<void> ReleaseMissionAudioBank()
<void> ReleaseAmbientAudioBank()
<void> ReleaseNamedScriptAudioBank(char* audioBank)
<void> ReleaseScriptAudioBank()
<void> 0x19af7ed9b9d23058()
<void> 0x9ac92eed5e4793ab()
<int> GetSoundId()
<void> ReleaseSoundId(int soundId)
<void> PlaySound(Player soundId, char* audioName, char* audioRef, BOOL p3, Any p4, BOOL p5)
<void> PlaySoundFrontend(int soundId, char* audioName, char* audioRef, BOOL p3)
<void> 0xcada5a0d0702381e(char* p0, char* soundset)
<void> PlaySoundFromEntity(int soundId, char* audioName, Entity entity, char* audioRef, BOOL p4, Any p5)
<void> PlaySoundFromCoord(int soundId, char* audioName, float x, float y, float z, char* audioRef, BOOL p6, int range, BOOL p8)
<void> StopSound(int soundId)
<int> GetNetworkIdFromSoundId(int soundId)
<int> GetSoundIdFromNetworkId(int netId)
<void> SetVariableOnSound(int soundId, char* variableName, float value)
<void> SetVariableOnStream(char* p0, float p1)
<void> OverrideUnderwaterStream(Any* p0, BOOL p1)
<void> 0x733adf241531e5c2(char* name, float p1)
<bool> HasSoundFinished(int soundId)
<void> PlayAmbientSpeech1(Ped ped, char* speechName, char* speechParam)
<void> PlayAmbientSpeech2(Ped ped, char* speechName, char* speechParam)
<void> PlayAmbientSpeechWithVoice(Ped p0, char* speechName, char* voiceName, char* speechParam, BOOL p4)
<void> PlayAmbientSpeechAtCoords(char* speechName, char* voiceName, float x, float y, float z, char* speechParam)
<void> OverrideTrevorRage(char* p0)
<void> ResetTrevorRage()
<void> SetPlayerAngry(Ped playerPed, BOOL value)
<void> PlayPain(Ped ped, int painID, float p1)
<void> 0xd01005d2ba2eb778(char* p0)
<void> 0xddc635d5b3262c56(char* p0)
<void> SetAmbientVoiceName(Ped ped, char* name)
<void> ResetAmbientVoice(Ped ped)
<void> 0x7cdc8c3b89f661b3(Ped playerPed, Hash p1)
<void> 0xa5342d390cda41d6(Any p0, BOOL p1)
<void> SetPedMute(Ped ped)
<void> StopCurrentPlayingAmbientSpeech(Ped ped)
<bool> IsAmbientSpeechPlaying(Ped p0)
<bool> IsScriptedSpeechPlaying(Any p0)
<bool> IsAnySpeechPlaying(Ped ped)
<bool> CanPedSpeak(Ped ped, char* speechName, BOOL unk)
<bool> IsPedInCurrentConversation(Ped ped)
<void> SetPedIsDrunk(Ped ped, BOOL toggle)
<void> PlayAnimalVocalization(Entity entity, int unk, char* speech)
<bool> IsAnimalVocalizationPlaying(Any p0)
<void> SetAnimalMood(Ped animal, int mood)
<bool> IsMobilePhoneRadioActive()
<void> SetMobilePhoneRadioState(BOOL state)
<int> GetPlayerRadioStationIndex()
<char*> GetPlayerRadioStationName()
<char*> GetRadioStationName(int radioStation)
<any> GetPlayerRadioStationGenre()
<bool> IsRadioRetuning()
<bool> 0x0626a247d2405330()
<void> TuneForward()
<void> TuneBackward()
<void> SetRadioToStationName(char* stationName)
<void> SetVehRadioStation(Vehicle vehicle, char* radioStation)
<void> SetVehicleAsAmbientEmmitter(Vehicle vehicle)
<void> SetEmitterRadioStation(char* emitterName, char* radioStation)
<void> SetEmitterEnabled(char* emitterName, BOOL toggle)
<void> SetRadioToStationIndex(int radioStation)
<void> SetFrontendRadioActive(BOOL active)
<void> UnlockMissionNewsStory(int newsStory)
<int> GetNumberOfPassengerVoiceVariations(Any p0)
<int> GetAudibleMusicTrackTextId()
<void> PlayEndCreditsMusic(BOOL play)
<void> SkipRadioForward()
<void> FreezeRadioStation(char* radioStation)
<void> UnfreezeRadioStation(char* radioStation)
<void> SetRadioAutoUnfreeze(BOOL toggle)
<void> SetInitialPlayerStation(char* radioStation)
<void> SetUserRadioControlEnabled(BOOL toggle)
<void> SetRadioTrack(char* radioStation, char* effectOrEvent)
<void> SetVehicleRadioLoud(Vehicle vehicle, BOOL toggle)
<bool> IsVehicleRadioLoud(Vehicle vehicle)
<void> SetMobileRadioEnabledDuringGameplay(BOOL Toggle)
<bool> DoesPlayerVehHaveRadio()
<bool> IsPlayerVehicleRadioEnabled()
<void> SetVehicleRadioEnabled(Vehicle vehicle, BOOL toggle)
<void> SetCustomRadioTrackList(char* radioStation, char* trackList, BOOL b)
<void> ClearCustomRadioTrackList(char* radioStation)
<int> MaxRadioStationIndex()
<int> FindRadioStationIndex(int station)
<void> SetRadioStationMusicOnly(char* radioStation, BOOL p1)
<void> 0x2c96cdb04fca358e(float p0)
<void> 0x031acb6aba18c729(char* radioStation, char* p1)
<void> 0xf3365489e0dd50f9(Any p0, BOOL p1)
<void> SetAmbientZoneState(Any* p0, BOOL p1, BOOL p2)
<void> ClearAmbientZoneState(char* zoneName, BOOL p1)
<void> SetAmbientZoneListState(char* p0, BOOL p1, BOOL p2)
<void> ClearAmbientZoneListState(Any* p0, BOOL p1)
<void> SetAmbientZoneStatePersistent(char* ambientZone, BOOL p1, BOOL p2)
<void> SetAmbientZoneListStatePersistent(char* ambientZone, BOOL p1, BOOL p2)
<bool> IsAmbientZoneEnabled(char* ambientZone)
<void> SetCutsceneAudioOverride(char* p0)
<void> GetPlayerHeadsetSoundAlternate(char* p0, float p1)
<any> PlayPoliceReport(char* name, float p1)
<void> DisablePoliceReports()
<void> BlipSiren(Vehicle vehicle)
<void> OverrideVehHorn(Vehicle vehicle, BOOL mute, int p2)
<bool> IsHornActive(Vehicle vehicle)
<void> SetAggressiveHorns(BOOL toggle)
<void> 0x02e93c796abd3a97(BOOL p0)
<void> 0x58bb377bec7cd5f4(BOOL p0, BOOL p1)
<bool> IsStreamPlaying()
<int> GetStreamPlayTime()
<bool> LoadStream(char* streamName, char* soundSet)
<bool> LoadStreamWithStartOffset(char* streamName, int startOffset, char* soundSet)
<void> PlayStreamFromPed(Ped ped)
<void> PlayStreamFromVehicle(Vehicle vehicle)
<void> PlayStreamFromObject(Object object)
<void> PlayStreamFrontend()
<void> SpecialFrontendEqual(float x, float y, float z)
<void> StopStream()
<void> StopPedSpeaking(Ped ped, BOOL speaking)
<void> DisablePedPainAudio(Ped ped, BOOL toggle)
<bool> IsAmbientSpeechDisabled(Ped ped)
<void> SetSirenWithNoDriver(Vehicle vehicle, BOOL toggle)
<void> SoundVehicleHornThisFrame(Vehicle vehicle)
<void> SetHornEnabled(Vehicle vehicle, BOOL toggle)
<void> SetAudioVehiclePriority(Vehicle vehicle, Any p1)
<void> 0x9d3af56e94c9ae98(Any p0, float p1)
<void> UseSirenAsHorn(Vehicle vehicle, BOOL toggle)
<void> ForceVehicleEngineAudio(Vehicle vehicle, char* audioName)
<void> 0xf1f8157b8c3f171c(Any p0, char* p1, char* p2)
<void> 0xd2dccd8e16e20997(Any p0)
<bool> 0x5db8010ee71fdef2(Vehicle vehicle)
<void> 0x59e7b488451f4d3a(Any p0, float p1)
<void> 0x01bb4d577d38bd9e(Any p0, float p1)
<void> 0x1c073274e065c6d2(Any p0, BOOL p1)
<void> 0x2be4bc731d039d5a(Any p0, BOOL p1)
<void> SetVehicleBoostActive(Vehicle vehicle, BOOL toggle)
<void> 0x6fddad856e36988a(Any p0, BOOL p1)
<void> 0x06c0023bed16dd6b(Any p0, BOOL p1)
<void> PlayVehicleDoorOpenSound(Vehicle vehicle, int p1)
<void> PlayVehicleDoorCloseSound(Vehicle vehicle, int p1)
<void> EnableStallWarningSounds(Vehicle vehicle, BOOL toggle)
<bool> IsGameInControlOfMusic()
<void> SetGpsActive(BOOL active)
<void> PlayMissionCompleteAudio(char* audioName)
<bool> IsMissionCompletePlaying()
<bool> 0x6f259f82d873b8b8()
<void> 0xf154b8d1775b2dec(BOOL p0)
<bool> StartAudioScene(char* scene)
<void> StopAudioScene(char* scene)
<void> StopAudioScenes()
<bool> IsAudioSceneActive(char* scene)
<void> SetAudioSceneVariable(char* scene, char* variable, float value)
<void> 0xa5f377b175a699c5(Any p0)
<void> DynamicMixerRelatedFn(Entity p0, char* p1, float p2)
<void> 0x18eb48cfc41f2ea0(Ped p, float p1)
<bool> AudioIsScriptedMusicPlaying()
<bool> PrepareMusicEvent(char* eventName)
<bool> CancelMusicEvent(char* eventName)
<bool> TriggerMusicEvent(char* eventName)
<any> 0xa097ab275061fb21()
<any> GetMusicPlaytime()
<void> 0xfbe20329593dec9d(Any p0, Any p1, Any p2, Any p3)
<void> ClearAllBrokenGlass()
<void> 0x70b8ec8fc108a634(BOOL p0, Any p1)
<void> 0x149aee66f0cb3a99(float p0, float p1)
<void> 0x8bf907833be275de(float p0, float p1)
<void> 0x062d5ead4da2fa6a()
<bool> PrepareAlarm(char* alarmName)
<void> StartAlarm(char* alarmName, BOOL p2)
<void> StopAlarm(char* alarmName, BOOL toggle)
<void> StopAllAlarms(BOOL stop)
<bool> IsAlarmPlaying(char* alarmName)
<hash> GetVehicleDefaultHorn(Vehicle vehicle)
<hash> GetVehicleHornHash(Vehicle vehicle)
<void> ResetPedAudioFlags(Ped ped)
<void> 0xd2cc78cd3d0b50f9(Any p0, BOOL p1)
<void> 0xbf4dc1784be94dfa(Any p0, BOOL p1, Any p2)
<void> 0x75773e11ba459e90(Any p0, BOOL p1)
<void> 0xd57aaae0e2214d11()
<void> ForceAmbientSiren(BOOL value)
<void> 0x43fa0dfc5df87815(Vehicle vehicle, BOOL p1)
<void> SetAudioFlag(char* flagName, BOOL toggle)
<any> PrepareSynchronizedAudioEvent(char* audioName, BOOL unk)
<bool> PrepareSynchronizedAudioEventForScene(int SceneID, char* audioName)
<bool> PlaySynchronizedAudioEvent(int SceneID)
<bool> StopSynchronizedAudioEvent(int SceneID)
<void> 0xc8ede9bdbccba6d4(Any* p0, float p1, float p2, float p3)
<void> SetSynchronizedAudioEventPositionThisFrame(char* p0, Entity p1)
<void> 0x12561fcbb62d5b9c(int p0)
<void> 0x044dbad7a7fa2be5(char* p0, char* p1)
<void> 0xb4bbfd9cd8b3922b(char* p0)
<void> 0xe4e6dd5566d28c82()
<bool> 0x3a48ab4445d499be()
<void> SetPedTalk(Ped ped)
<void> 0x0150b6ff25a9e2e5()
<void> 0xbef34b1d9624d5dd(BOOL p0)
<void> 0x806058bbdc136e06()
<bool> 0x544810ed9db6bbe6()
<bool> 0x5b50abb1fe3746f4()
```