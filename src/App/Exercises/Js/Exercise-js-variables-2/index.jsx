import './styles.css';

export function Exercise() {
  const mathResult1 = 2 * 5;

  return (
    <div className="playing-with-variables">
      <section>
        <h2>Operacje matematyczne</h2>
        <pre>
          <code>2 * 5 = {mathResult1}</code>
        </pre>
        {/* Uzupełnij wykorzystując zmienne*/}
        <pre>
          <code>3 : 2 = {3 / 2}</code>
        </pre>
        <pre>
          {/* kwadrat liczby */}
          <code>3&#178; = {Math.pow(3, 2)}</code>
        </pre>
        <pre>
          {/* pierwiastek z liczby */}
          <code>&#8730;3 = {Math.sqrt(3)}</code>
        </pre>
        <pre>
          {/* modulo */}
          <code>3%2 = {3 % 2}</code>
        </pre>
      </section>
    </div>
  );
}
