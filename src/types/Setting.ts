export interface BaseInput {
  name: string,
  title: string,
  disabled: boolean,
}

export interface ToggleBaseSetting extends BaseInput {
  value: boolean,
}

export interface TextBaseSetting extends BaseInput {
  value: string,
}

export interface SelectBaseSetting extends BaseInput {
  value: string,
  options: {
    name: string,
    value: string,
  }[],
}

export interface NumberBaseSetting extends BaseInput {
  value: number,
  min?: number,
  max?: number,
  step?: number,
  unit?: string,
}

//  Theme
export type themeSelect = 'light' | 'dark' | 'system';
export type themeMenubarToggle = 'enableHome' | 'enableChat' | 'enableProfile' | 'enableContact' | 'enableBookmark' | 'enableForYou' | 'enableNotification' | 'enableSettings' | 'enableAboutUs' | 'enableLogin' | 'enableRegister' | 'system_menubar'

//  Notification
export type notificationModeSelect = 'bar' | 'toast' | 'badge' | 'system_notify_mode'
export type notificationEffectSelect = 'no_effect' | 'flicker' | 'starlight' | 'bright_screen' | 'bounce' | 'shake' | 'pop' | 'pulse' | 'system_notify_effect'
export type notificationPositionSelect = 'top_right' | 'top_left' | 'bottom_right' | 'bottom_left' | 'system_notify_position'
export type notificationDurationSelect = 'short' | 'long' | 'system_notify_duration'
export type notificationSoundSelect = 'system_notify_sound'
export type notificationVibrateSelect = 'system_notify_vibrate'
export type notificationToggle = 'enableNewNotification' | 'enableNotificationSound' | 'enableNotificationVibrate' | 'enableNotificationIcon' | 'enablePopup'

//  Log
export type logLevelSelect = 'debug' | 'info' | 'warn' | 'error' | 'system_log_level'
export type logToggle = 'enableLogAllow' | 'enableLogDisplay' | 'enableLogClear' | 'enableLogDownload'
export type logNumber = 'logTime' | 'logQty'

//  Session
export type sessionDurationSelect = '15min' | '30min' | '1hr' | '2hr' | '4hr' | '8hr' | '12hr' | '24hr' | 'system_session_duration'
export type sessionToggle = 'enableProtectSession' | 'enableAutoRefreshSession'

//  Recovery & Warning
export type recoveryToggle = 'enableRecovery' | 'enableRecoverAccountByEmail' | 'enableDataEncryption' | 'enableMultiDevice' | 'enableLogoutAllDevices' | 'enableManyStepVerification' | 'enableVerifyAccess'
export type warningToggle = 'enableWarning' | 'enableUnknowDeviceWarning' | 'enableMultipleFailedLoginsWarning' | 'enableChangeEmailWarning' | 'enableChangePasswordWarning'
