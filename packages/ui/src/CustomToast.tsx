import { Platform } from 'react-native'
import { NativeToast as Toast } from './NativeToast'

type ExpoConstantsModule = {
  executionEnvironment?: string
  ExecutionEnvironment?: {
    StoreClient: string
  }
}

const isExpoGo = (() => {
  if (Platform.OS === 'web') {
    return false
  }

  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const constants = require('expo-constants') as ExpoConstantsModule
    return (
      constants.executionEnvironment &&
      constants.ExecutionEnvironment?.StoreClient &&
      constants.executionEnvironment === constants.ExecutionEnvironment.StoreClient
    )
  } catch {
    return false
  }
})()

export const CustomToast = () => {
  if (isExpoGo) {
    return null
  }

  return <Toast />
}
