import './styles/footer.css';

const email = 'twoj-email@pomeranian.it';
const phone = '+48-999-999-999';

export function AppFooter() {
  return (
    <footer>
      <div>
        Projekt uzyskał dofinansowanie ze środków Unii Europejskiej z
        Europejskiego Funduszu Rozwoju Regionalnego w ramach projektu grantowego
        „Invest in Pomerania 2020”.
      </div>
      <div>
        <a href={`mailto:${email}`}>{`Email: ${email}`}</a>
        <a href={`tel:${phone}`}>{`Tel: ${phone}`}</a>
      </div>
    </footer>
  );
}
