---
sidebar_position: 27
---

# Script

```lua
<void> RequestScript(Player* Playermenu)
<void> SetScriptAsNoLongerNeeded(char* scriptName)
<bool> HasScriptLoaded(char* scriptName)
<bool> DoesScriptExist(char* scriptName)
<void> RequestScriptWithNameHash(Hash scriptHash)
<void> SetScriptWithNameHashAsNoLongerNeeded(Hash scriptHash)
<bool> HasScriptWithNameHashLoaded(Hash scriptHash)
<bool> DoesScriptWithNameHashExist(Hash scriptHash)
<void> TerminateThread(int threadId)
<bool> IsThreadActive(int threadId)
<char*> GetNameOfThread(int threadId)
<void> BeginEnumeratingThreads()
<int> GetIdOfNextThreadInEnumeration()
<int> GetIdOfThisThread()
<void> TerminateThisThread()
<int> GetNumberOfInstancesOfScriptWithNameHash(Hash scriptHash)
<char*> GetThisScriptName()
<hash> GetHashOfThisScriptName()
<int> GetNumberOfEvents(int eventGroup)
<bool> GetEventExists(int eventGroup, int eventIndex)
<int> GetEventAtIndex(int eventGroup, int eventIndex)
<bool> GetEventData(int eventGroup, int eventIndex, int* argStruct, int argStructSize)
<void> TriggerScriptEvent(int eventGroup, Any* args, int argCount, int bit)
<void> ShutdownLoadingScreen()
<void> SetNoLoadingScreen(BOOL toggle)
<bool> GetNoLoadingScreen()
<void> 0xb1577667c3708f9b()
```