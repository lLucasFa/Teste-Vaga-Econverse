import React from 'react';
import '../styles/Footer.scss';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="list-container">
        <div className="list">
          <h3>Sobre nós</h3>
          <ul>
            <li>CONHEÇA</li>
            <li>COMO COMPRAR</li>
            <li>INDICAÇÃO E DESCONTO</li>
            <div className="social-grid">
                <img src={require('../image/facebook.png')} />
                <img src={require('../image/instagram.png')} />
                <img src={require('../image/youtube.png')} />
            </div>    
          </ul>
        </div>

        <div className="list">
          <h3>INFORMAÇÕES ÚTEIS</h3>
          <ul>
            <li>FALE CONOSCO</li>
            <li>DÚVIDAS</li>
            <li>PRAZOS DE ENTREGA</li>
            <li>FORMAS DE PAGAMENTO</li>
            <li>POLÍTICA DE PRIVACIDADE</li>
            <li>TROCAS E DEVOLUÇÕES</li>
          </ul>
        </div>

        <div className="list">
            <h3>FORMAS DE PAGAMENTO</h3>
            <div className="photo-grid">
                <img src={require('../image/visa.png')} />
                <img src={require('../image/elo.png')} />
                <img src={require('../image/alelo.png')} />
                <img src={require('../image/dinners.png')} />
                <img src={require('../image/ifood.png')} />
                <img src={require('../image/mastercard.png')} />
                <img src={require('../image/pix.png')} />
                <img src={require('../image/amex.png')} />
                <img src={require('../image/ticket.png')} />
                <img src={require('../image/sodexo.png')} />
          </div>
          </div>

        <div className="additional-content">
          <div className="additional-title">CADASTRE-SE E RECEBA NOSSAS</div>
          <div className="additional-title-mid">NOVIDADES E PROMÇÕES</div>
          <div className="additional-description">Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia lorem ipsum</div>
          <div className="input-container">
            <input type="text" placeholder="SEU E-MAIL" />
            <button>OK</button>
          </div>
        </div>
      </div>

      <div className="footer-line"></div>

      <div className="footer-text">Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas imagens
                                   são de propriedade de seus respectivos donos.<br/> É vedada a reprodução, total ou 
                                   parcial, de qualquer conteúdo sem expressa autorização.</div>
      <div className="image-grid">
                <img src={require('../image/vteximg.png')} />
                <img src={require('../image/econverse.png')} />
      </div>   
    </footer>
    
  );
};

export default Footer;
