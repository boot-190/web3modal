import { html, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'
import ModalCtrl from '../../controllers/ModalCtrl'
import closeIcon from '../../images/closeIcon'
import transparentNoise from '../../images/transparentNoise'
import walletConnectLogo from '../../images/walletConnectLogo'
import Whatamesh from '../../libs/Whatamesh'
import global from '../../theme/global'
import styles from './styles'

@customElement('w3m-modal-backcard')
export class W3mModalBackcard extends LitElement {
  public static styles = [global, styles]

  // -- lifecycle ---------------------------------------------------- //
  public firstUpdated() {
    const gradient = new Whatamesh()
    gradient.initGradient(this.canvasEl)
  }

  // -- private ------------------------------------------------------ //
  private get canvasEl() {
    const el = this.renderRoot.querySelector('.w3m-gradient-canvas')
    if (!el) throw new Error('.w3m-gradient-canvas not found')

    return el
  }

  // -- render ------------------------------------------------------- //
  protected render() {
    return html`
      <canvas class="w3m-gradient-canvas"></canvas>
      ${transparentNoise}
      <div class="w3m-modal-highlight"></div>
      <div class="w3m-modal-toolbar">
        ${walletConnectLogo}
        <button class="w3m-modal-close-btn" @click=${ModalCtrl.closeModal}>${closeIcon}</button>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'w3m-modal-backcard': W3mModalBackcard
  }
}
