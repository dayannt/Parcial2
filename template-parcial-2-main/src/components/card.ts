import { navigateTo } from '../utils/utils';

class PlantsCard extends HTMLElement {
  private plants: plants | null = null;

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  set data(plants: plants) {
    this.plants = plants;
    this.render();
  }

  private render() {
    if (!this.shadowRoot || !this.plants) return;

    this.shadowRoot.innerHTML = `
      <style>
        }
        .plants-card {
          display: block;
          height: 470px;
          flex-direction: column;
          background-color: white;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          cursor: pointer;

        }
        .plants-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
        }
        .plants-title {
          padding: 15px;
          background-color: #2c3e50;
          color: white;
          font-size: 1.2rem;
          font-weight: bold;
          text-align: center;
        }
        .plants-preview {
          display: flex;
          padding: 10px;
        }
        .character-preview {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 10px;
          position: relative;
        }
        .character-preview img {
          width: 100%;
          height: 250px;
          object-fit: cover;
          border-radius: 5px;
        }
        .character-name {
          margin-top: 10px;
          font-weight: bold;
          text-align: center;
        }
      </style>
        <div class="plants-title">${this.plants.title}</div>
        <div class="plants-preview">
          <div class="character-preview">
            <img src="${this.plants.character1.imageUrl}" alt="${this.plants.character1.name}">
            <div class="character-name">${this.plants.character1.name}</div>
          </div>
          <div class="vs-badge">VS</div>
          <div class="character-preview">
            <img src="${this.plants.character2.imageUrl}" alt="${this.plants.character2.name}">
            <div class="character-name">${this.plants.character2.name}</div>
          </div>
        </div>
        <div class="view-plants">Ver plantse</div>
      </div>
    `;

    const card = this.shadowRoot.querySelector('.plants-card');
    if (card) {
      card.addEventListener('click', this.handleClick.bind(this));
    }
  }
}

customElements.define('plants-card', plantsCard);

export default plantsCard;
