import { AccountCtrl } from '@web3modal/core'
import { html, LitElement } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { ifDefined } from 'lit/directives/if-defined.js'
import '../w3m-account-button'
import '../w3m-connect-button'

@customElement('w3m-core-button')
export class W3mCoreButton extends LitElement {
  // -- state & properties ------------------------------------------- //
  @state() public isConnected = AccountCtrl.get().isConnected
  @property() public label? = 'Connect Wallet'
  @property() public icon? = true

  // -- lifecycle ---------------------------------------------------- //
  public constructor() {
    super()
    this.accountUnsub = AccountCtrl.watch(accountState => {
      this.isConnected = accountState.isConnected
    })
  }

  public disconnectedCallback() {
    super.disconnectedCallback()
    this.accountUnsub?.()
  }

  // -- private ------------------------------------------------------ //
  private readonly accountUnsub?: () => void = undefined

  // -- render ------------------------------------------------------- //
  protected render() {
    return this.isConnected
      ? html`<w3m-account-button></w3m-account-button>`
      : html`<w3m-connect-button
          label=${ifDefined(this.label)}
          icon=${ifDefined(this.icon)}
        ></w3m-connect-button>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'w3m-core-button': W3mCoreButton
  }
}
