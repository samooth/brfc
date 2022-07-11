/* eslint no-unused-expressions: 0 */
const { expect } = require('chai')
const { brfc } = require('../src/index')

describe('PaymailClient', () => {
  it('creates right value for example 1', () => {
    const result = brfc('BRFC Specifications', ['andy (nChain)'], 1)
    expect(result).to.be.eql('57dd1f54fc67')
  })

  it('creates right value for example 2', () => {
    const result = brfc('bsvalias Payment Addressing (PayTo Protocol Prefix)', ['andy (nChain)'], 1)
    expect(result).to.be.eql('74524c4d6274')
  })

  it('creates right value for example 3', () => {
    const result = brfc('bsvalias Integration with Simplified Payment Protocol', ['andy (nChain)'], 1)
    expect(result).to.be.eql('0036f9b8860f')
  })

  it('creates right value for verify public key owner', () => {
    const result = brfc(
      'bsvalias public key verify (Verify Public Key Owner)',
      [],
      ''
    )
    expect(result).to.be.eql('a9f510c16bde')
  })

  it('creates right value verifyPublicKeyOwner', () => {
    const result = brfc(
      'bsvalias public key verify (Verify Public Key Owner)',
      [],
      ''
    )
    expect(result).to.be.eql('a9f510c16bde')
  })

  it('creates the right value for publicProfile', () => {
    const result = brfc(
      'Public Profile (Name & Avatar)',
      ['Ryan X. Charles (Money Button)'],
      '1'
    )
    expect(result).to.be.eql('f12f968c92d6')
  })

  it('creates the right value for requestSenderValidation', () => {
    const result = brfc(
      'bsvalias Payment Addressing (Payer Validation)',
      ['andy (nChain)'],
      ''
    )
    expect(result).to.be.eql('6745385c3fc0')
  })
})
