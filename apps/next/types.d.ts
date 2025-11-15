import { config } from '@patilive/config'

export type Conf = typeof config

declare module 'patilive-component-library' {
  interface TamaguiCustomConfig extends Conf {}
}
