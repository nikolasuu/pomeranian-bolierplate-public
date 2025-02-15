import './styles.css';
import fox from '../../../Images/snow-wolf.png';

export const FloatsAndPositioningExercises = () => {
  return (
    <div className="box">
      <div className="container">
        <div className="block-0-position-absolut">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="block-1">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className="block-1-margin">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>

        <div className="block-2-background-gray">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh
            mauris cursus mattis molestiea iaculis at. Dictum varius duis at
            consectetur lorem donec.
          </p>
        </div>

        <div className="block-3-fox-and-right-text">
          <img src={fox} alt="" />
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </div>
        <div className="block-4-bg-gray-color-white">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh
            mauris cursus mattis molestiea iaculis at. Dictum varius duis at
            consectetur lorem donec.{' '}
          </p>
        </div>
        <div className="block-5-btn-rose">
          <p>zapisz na poźniej</p>
        </div>
        <div className="block-6">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh
            mauris cursus mattis molestie a iaculis at. Dictum varius duis at
            consectetur lorem donec. Sit amet dictum sit amet justo. Fringilla
            phasellus faucibus scelerisque eleifend donec. Elementum pulvinar
            etiam non quam lacus suspendisse faucibus interdum posuere. Arcu
            dictum varius duis at consectetur lorem. Massa ultricies mi quis
            hendrerit.
          </p>
          <p>
            Leo vel orci porta non pulvinar neque laoreet. In egestas erat
            imperdiet sed euismod nisi porta lorem. Ut porttitor leo a diam
            sollicitudin tempor id. Tortor at auctor urna nunc id. Gravida quis
            blandit turpis cursus in. Ornare quam viverra orci sagittis eu.
            Metus dictum at tempor commodo ullamcorper a. Vestibulum mattis
            ullamcorper velit sed ullamcorper morbi. Amet massa vitae tortor
            condimentum lacinia quis. Quis enim lobortis scelerisque fermentum
            dui faucibus in ornare. Auctor elit sed vulputate mi.
          </p>
        </div>
        <div className="block-7-border-and-icons">
          <div className="square square-gray-1">1</div>
          <div className="square square-gray-2">2</div>
          <div className="square square-gray-3">3</div>
        </div>
        <div className="block-8-right-sidebar">
          <p>zapisz na poźniej</p>
        </div>
      </div>
    </div>
  );
};
