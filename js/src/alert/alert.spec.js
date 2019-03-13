import Alert from './alert'

describe('Alert', () => {
  it('should return version', () => {
    expect(typeof Alert.VERSION).toEqual('string')
  })
})
