---
sidebar_position: 2
---

# App

```lua
<hash> AppDataValid()
<int*> AppGetInt(ScrHandle property)
<float> AppGetFloat(char* property)
<char*> AppGetString(char* property)
<void> AppSetInt(char* property, int value)
<void> AppSetFloat(char* property, float value)
<void> AppSetString(char* property, char* value)
<void> AppSetApp(char* appName)
<void> AppSetBlock(char* blockName)
<void> AppClearBlock()
<void> AppCloseApp()
<void> AppCloseBlock()
<bool> AppHasLinkedSocialClubAccount()
<bool> AppHasSyncedData(char* appName)
<void> AppSaveData()
<any> AppGetDeletedFileStatus()
<bool> AppDeleteAppData(char* appName)
```