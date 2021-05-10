# Events

### Debug event
```js
client.on("gDebug", (debug) => {
  console.log(debug)
})
```

### GuildMember events
```js
client.on("guildMemberNicknameUpdate", (newMember, oldNick, newNick) => {})
client.on("guildMemberUnboost", (newMember, oldPremiumSince, newPremiumSince) => {})
client.on("guildMemberBoost", (newMember, oldPremiumSince, newPremiumSince) => {})
```

### Guild
```js
client.on("guildBoostLevelUp", (newGuild, oldPremiumTier, newPremiumTier) => {})
client.on("guildBoostLevelDown", (newGuild, oldPremiumTier, newPremiumTier) => {})
client.on("guildRegionUpdate", (newGuild, oldRegion, newRegion) => {})
client.on("guildBannerUpdate", (newGuild, oldBanner, newBanner) => {})
client.on("guildAfkChannelUpdate", (newGuild, oldAfkChannel, newAfkChannel) => {})
client.on("guildVanityURLUpdate", (newGuild, oldVanity, newVanity) => {})
client.on("guildFeaturesUpdate", (newGuild, oldFeatures, newFeatures) => {})
client.on("guildAcronymUpdate", (newGuild, oldAcronym, newAcronym) => {})
client.on("guildOwnerUpdate", (newGuild, oldOwner, newOwner) => {})
client.on("guildPartnerUpdate", (newGuild, oldPartner, newPartner) => {})
client.on("guildVerifyUpdate", (newGuild, oldVerified, newVerified) => {})
```

### Channels
```js
client.on("guildChannelPermissionsUpdate", (newChannel, oldPerms, newPerms) => {})
client.on("guildChannelTopicUpdate", (newChannel, oldTopic, newTopic) => {})
client.on("guildChannelNSFWUpdate", (newChannel, oldNsfw, newNsfw) => {})
client.on("guildChannelTypeUpdate", (newChannel, oldType, newType) => {})
client.on("guildChannelUserLimitUpdate", (newChannel, oldUserLimit, newUserLimit) => {})
client.on("guildChannelBitrateUpdate", (newChannel, oldBitrate, newBitrate) => {})
```

### Role
```js
client.on("rolePositionUpdate", (newRole, oldPosition, newPosition) => {})
client.on("rolePermissionsUpdate", (newRole, oldPermission, newPermission) => {})
```

### User
```js
client.on("userAvatarUpdate", (newUser, oldAvatar, newAvatar) => {})
client.on("userUsernameUpdate", (newUser, oldUsername, newUsername) => {})
client.on("userDiscriminatorUpdate", (newUser, oldDiscrim, newDiscim) => {})
client.on("userFlagsUpdate", (newUser, oldFlags, newFlags) => {})
```

### Voice Channel
```js
client.on("voiceChannelJoin", (newChannel, newState) => {})
client.on("voiceChannelLeave", (newChannel, newState) => {})
client.on("voiceChannelSwitch", (channel, oldChannel, newChannel) => {})
client.on("voiceChannelMute", (newChannel, muteType) => {})
client.on("voiceChannelUnmute", (newChannel, muteType) => {})
client.on("voiceChannelDeaf", (newChannel, deafType) => {})
client.on("voiceChannelUndeaf", (newChannel, deafType) => {})
client.on("voiceStreamingStart", (newChannel, channel) => {})
client.on("voiceStreamingStop", (newChannel, channel) => {})
```
