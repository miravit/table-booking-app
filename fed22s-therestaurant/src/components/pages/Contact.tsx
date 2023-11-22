import { WrapperColumnCentered } from "../styled/Wrapper";
import "../../scss/main.scss";

export const Contact = () => {
  return (
    <>
      <div className="contact">
        <h1>CONTACT</h1>
        <WrapperColumnCentered className="contact__column">
          <h2>STOCKHOLM</h2>
          <p>Regeringsgatan 100</p>
          <p>113 39 Stockholm</p>
          <p>08 - 442 95 00</p>
          <a href="mailto:nina.khodnia@medieinstitutet.se" target="_blank">
            reservation@dirtytapas.se
          </a>
        </WrapperColumnCentered>
        <WrapperColumnCentered className="contact__column">
          <h3>Dinner</h3>
          <p>Mon - Sun: 17-19 & 19-21</p>
          <p>
            To make a reservation for 10+ people, please contact
            events@dirtytapas.com
          </p>
        </WrapperColumnCentered>
        <WrapperColumnCentered className="contact__column">
          <span>
            Follow our journey on Instagram or Facebook @dirtytapassthlm!
          </span>
        </WrapperColumnCentered>
      </div>
    </>
  );
};
