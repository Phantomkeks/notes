export const updateImportPassphrase = (state, oPayload) => {
  state.settings.importPassphrase = oPayload.importPassphrase
}

export const updateExportPassphrase = (state, oPayload) => {
  state.settings.exportPassphrase = oPayload.exportPassphrase
}

export const updateCloudPassphrase = (state, oPayload) => {
  state.settings.cloudPassphrase = oPayload.cloudPassphrase
}

export const updateDropboxToken = (state, oPayload) => {
  state.settings.dropboxToken = oPayload.dropboxToken
}

export const updateGoogleDriveToken = (state, oPayload) => {
  state.settings.googleDriveToken = oPayload.googleDriveToken
}

export const updateCloudIntegrationStep = (state, oPayload) => {
  state.settings.cloudIntegrationStep = oPayload.cloudIntegrationStep
}
