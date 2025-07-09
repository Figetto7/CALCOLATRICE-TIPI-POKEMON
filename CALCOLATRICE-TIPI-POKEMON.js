const normaleBtn = document.getElementById("normale");
const elettroBtn = document.getElementById("elettro");
const fuocoBtn = document.getElementById("fuoco");
const acquaBtn = document.getElementById("acqua");
const erbaBtn = document.getElementById("erba");
const psicoBtn = document.getElementById("psico");
const lottaBtn = document.getElementById("lotta");
const ghiaccioBtn = document.getElementById("ghiaccio");
const rocciaBtn = document.getElementById("roccia");
const velenoBtn = document.getElementById("veleno");
const coleotteroBtn = document.getElementById("coleottero");
const volanteBtn = document.getElementById("volante");
const dragoBtn = document.getElementById("drago");
const buioBtn = document.getElementById("buio");
const terraBtn = document.getElementById("terra");
const follettoBtn = document.getElementById("folletto");
const acciaioBtn = document.getElementById("acciaio");
const spettroBtn = document.getElementById("spettro");
const risultati = document.getElementById("risultati");

elettroBtn.addEventListener("click", () => {
  risultati.innerHTML = `
  <table>
    <thead>
      <tr>
        <th>Superefficace (x2)</th>
        <th>Non molto efficace (x½)</th>
        <th>Immune</th>
        <th>Inefficace</th>
        <th>Debole (x2)</th>
        <th>Resistente (x½)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Acqua</td>
        <td>Erba</td>
        <td></td>
        <td>Terra</td>
        <td>Terra</td>
        <td>Volante</td>
      </tr>
      <tr>
        <td>Volante</td>
        <td>Elettro</td>
        <td></td>
        <td></td>
        <td></td>
        <td>Acciaio</td>
      </tr>
      <tr>
        <td></td>
        <td>Drago</td>
        <td></td>
        <td></td>
        <td></td>
        <td>Elettro</td>
      </tr>
    </tbody>
  </table>
  `;
});

fuocoBtn.addEventListener("click", () => {
  risultati.innerHTML = `
  <table>
    <thead>
      <tr>
        <th>Superefficace (x2)</th>
        <th>Non molto efficace (x½)</th>
        <th>Immune</th>
        <th>Inefficace</th>
        <th>Debole (x2)</th>
        <th>Resistente (x½)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Erba</td>
        <td>Fuoco</td>
        <td></td>
        <td></td>
        <td>Acqua</td>
        <td>Coleottero</td>
      </tr>
      <tr>
        <td>Ghiaccio</td>
        <td>Acqua</td>
        <td></td>
        <td></td>
        <td>Terra</td>
        <td>Acciaio</td>
      </tr>
      <tr>
        <td>Coleottero</td>
        <td>Roccia</td>
        <td></td>
        <td></td>
        <td>Roccia</td>
        <td>Fuoco</td>
      </tr>
      <tr>
        <td>Acciaio</td>
        <td>Drago</td>
        <td></td>
        <td></td>
        <td></td>
        <td>Erba</td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>Ghiaccio</td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>Folletto</td>
      </tr>
    </tbody>
  </table>
  `;
});

erbaBtn.addEventListener("click", () => {
  risultati.innerHTML = `
  <table>
    <thead>
      <tr>
        <th>Superefficace (x2)</th>
        <th>Non molto efficace (x½)</th>
        <th>Immune</th>
        <th>Inefficace</th>
        <th>Debole (x2)</th>
        <th>Resistente (x½)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Acqua</td>
        <td>Fuoco</td>
        <td></td>
        <td></td>
        <td>Fuoco</td>
        <td>Terra</td>
      </tr>
      <tr>
        <td>Terra</td>
        <td>Erba</td>
        <td></td>
        <td></td>
        <td>Ghiaccio</td>
        <td>Acqua</td>
      </tr>
      <tr>
        <td>Roccia</td>
        <td>Veleno</td>
        <td></td>
        <td></td>
        <td>Veleno</td>
        <td>Erba</td>
      </tr>
      <tr>
        <td></td>
        <td>Volante</td>
        <td></td>
        <td></td>
        <td>Volante</td>
        <td>Elettro</td>
      </tr>
      <tr>
        <td></td>
        <td>Coleottero</td>
        <td></td>
        <td></td>
        <td>Coleottero</td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td>Drago</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td>Acciaio</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  `;
});

lottaBtn.addEventListener("click", () => {
  risultati.innerHTML = `
  <table>
    <thead>
      <tr>
        <th>Superefficace (x2)</th>
        <th>Non molto efficace (x½)</th>
        <th>Immune</th>
        <th>Inefficace</th>
        <th>Debole (x2)</th>
        <th>Resistente (x½)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Normale</td>
        <td>Roccia</td>
        <td>Spettro</td>
        <td></td>
        <td>Volante</td>
        <td>Roccia</td>
      </tr>
      <tr>
        <td>Roccia</td>
        <td>Coleottero</td>
        <td></td>
        <td></td>
        <td>Psico</td>
        <td>Coleottero</td>
      </tr>
      <tr>
        <td>Acciaio</td>
        <td>Veleno</td>
        <td></td>
        <td></td>
        <td>Folletto</td>
        <td>Buio</td>
      </tr>
      <tr>
        <td>Ghiaccio</td>
        <td>Psico</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>Buio</td>
        <td>Volante</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td>Folletto</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  `;
});

ghiaccioBtn.addEventListener("click", () => {
  risultati.innerHTML = `
  <table>
    <thead>
      <tr>
        <th>Superefficace (x2)</th>
        <th>Non molto efficace (x½)</th>
        <th>Immune</th>
        <th>Inefficace</th>
        <th>Debole (x2)</th>
        <th>Resistente (x½)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Erba</td>
        <td>Acciaio</td>
        <td></td>
        <td></td>
        <td>Fuoco</td>
        <td>Ghiaccio</td>
      </tr>
      <tr>
        <td>Terra</td>
        <td>Fuoco</td>
        <td></td>
        <td></td>
        <td>Lotta</td>
        <td></td>
      </tr>
      <tr>
        <td>Volante</td>
        <td>Acqua</td>
        <td></td>
        <td></td>
        <td>Roccia</td>
        <td></td>
      </tr>
      <tr>
        <td>Drago</td>
        <td>Ghiaccio</td>
        <td></td>
        <td></td>
        <td>Acciaio</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  `;
});

rocciaBtn.addEventListener("click", () => {
  risultati.innerHTML = `
  <table>
    <thead>
      <tr>
        <th>Superefficace (x2)</th>
        <th>Non molto efficace (x½)</th>
        <th>Immune</th>
        <th>Inefficace</th>
        <th>Debole (x2)</th>
        <th>Resistente (x½)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Fuoco</td>
        <td>Lotta</td>
        <td></td>
        <td></td>
        <td>Acqua</td>
        <td>Normale</td>
      </tr>
      <tr>
        <td>Ghiaccio</td>
        <td>Terra</td>
        <td></td>
        <td></td>
        <td>Erba</td>
        <td>Volante</td>
      </tr>
      <tr>
        <td>Volante</td>
        <td>Acciaio</td>
        <td></td>
        <td></td>
        <td>Lotta</td>
        <td>Veleno</td>
      </tr>
      <tr>
        <td>Coleottero</td>
        <td></td>
        <td></td>
        <td></td>
        <td>Terra</td>
        <td>Fuoco</td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>Acciaio</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  `;
});

coleotteroBtn.addEventListener("click", () => {
  risultati.innerHTML = `
  <table>
    <thead>
      <tr>
        <th>Superefficace (x2)</th>
        <th>Non molto efficace (x½)</th>
        <th>Immune</th>
        <th>Inefficace</th>
        <th>Debole (x2)</th>
        <th>Resistente (x½)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Erba</td>
        <td>Lotta</td>
        <td></td>
        <td></td>
        <td>Fuoco</td>
        <td>Lotta</td>
      </tr>
      <tr>
        <td>Psico</td>
        <td>Terra</td>
        <td></td>
        <td></td>
        <td>Volante</td>
        <td>Terra</td>
      </tr>
      <tr>
        <td>Buio</td>
        <td>Veleno</td>
        <td></td>
        <td></td>
        <td>Roccia</td>
        <td>Erba</td>
      </tr>
      <tr>
        <td></td>
        <td>Spettro</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td>Acciaio</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td>Fuoco</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td>Folletto</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  `;
});

volanteBtn.addEventListener("click", () => {
  risultati.innerHTML = `
  <table>
    <thead>
      <tr>
        <th>Superefficace (x2)</th>
        <th>Non molto efficace (x½)</th>
        <th>Immune</th>
        <th>Inefficace</th>
        <th>Debole (x2)</th>
        <th>Resistente (x½)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Erba</td>
        <td>Elettro</td>
        <td></td>
        <td></td>
        <td>Elettro</td>
        <td>Erba</td>
      </tr>
      <tr>
        <td>Lotta</td>
        <td>Roccia</td>
        <td></td>
        <td></td>
        <td>Ghiaccio</td>
        <td>Lotta</td>
      </tr>
      <tr>
        <td>Coleottero</td>
        <td>Acciaio</td>
        <td></td>
        <td></td>
        <td>Roccia</td>
        <td>Coleottero</td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>Terra</td>
      </tr>
    </tbody>
  </table>
  `;
});

dragoBtn.addEventListener("click", () => {
  risultati.innerHTML = `
  <table>
    <thead>
      <tr>
        <th>Superefficace (x2)</th>
        <th>Non molto efficace (x½)</th>
        <th>Immune</th>
        <th>Inefficace</th>
        <th>Debole (x2)</th>
        <th>Resistente (x½)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Drago</td>
        <td>Acciaio</td>
        <td></td>
        <td>Folletto</td>
        <td>Ghiaccio</td>
        <td>Fuoco</td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>Drago</td>
        <td>Acqua</td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>Folletto</td>
        <td>Elettro</td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>Erba</td>
      </tr>
    </tbody>
  </table>
  `;
});

buioBtn.addEventListener("click", () => {
  risultati.innerHTML = `
  <table>
    <thead>
      <tr>
        <th>Superefficace (x2)</th>
        <th>Non molto efficace (x½)</th>
        <th>Immune</th>
        <th>Inefficace</th>
        <th>Debole (x2)</th>
        <th>Resistente (x½)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Psico</td>
        <td>Lotta</td>
        <td></td>
        <td></td>
        <td>Lotta</td>
        <td>Spettro</td>
      </tr>
      <tr>
        <td>Spettro</td>
        <td>Buio</td>
        <td></td>
        <td></td>
        <td>Coleottero</td>
        <td>Buio</td>
      </tr>
      <tr>
        <td></td>
        <td>Folletto</td>
        <td></td>
        <td></td>
        <td>Folletto</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  `;
});

terraBtn.addEventListener("click", () => {
  risultati.innerHTML = `
  <table>
    <thead>
      <tr>
        <th>Superefficace (x2)</th>
        <th>Non molto efficace (x½)</th>
        <th>Immune</th>
        <th>Inefficace</th>
        <th>Debole (x2)</th>
        <th>Resistente (x½)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Fuoco</td>
        <td>Erba</td>
        <td></td>
        <td>Volante</td>
        <td>Acqua</td>
        <td>Veleno</td>
      </tr>
      <tr>
        <td>Elettro</td>
        <td>Coleottero</td>
        <td></td>
        <td></td>
        <td>Erba</td>
        <td>Roccia</td>
      </tr>
      <tr>
        <td>Veleno</td>
        <td></td>
        <td></td>
        <td></td>
        <td>Ghiaccio</td>
        <td></td>
      </tr>
      <tr>
        <td>Roccia</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>Acciaio</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  `;
});

follettoBtn.addEventListener("click", () => {
  risultati.innerHTML = `
  <table>
    <thead>
      <tr>
        <th>Superefficace (x2)</th>
        <th>Non molto efficace (x½)</th>
        <th>Immune</th>
        <th>Inefficace</th>
        <th>Debole (x2)</th>
        <th>Resistente (x½)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Lotta</td>
        <td>Fuoco</td>
        <td></td>
        <td></td>
        <td>Veleno</td>
        <td>Lotta</td>
      </tr>
      <tr>
        <td>Drago</td>
        <td>Veleno</td>
        <td></td>
        <td></td>
        <td>Acciaio</td>
        <td>Coleottero</td>
      </tr>
      <tr>
        <td>Buio</td>
        <td>Acciaio</td>
        <td></td>
        <td></td>
        <td></td>
        <td>Buio</td>
      </tr>
    </tbody>
  </table>
  `;
});

acciaioBtn.addEventListener("click", () => {
  risultati.innerHTML = `
  <table>
    <thead>
      <tr>
        <th>Superefficace (x2)</th>
        <th>Non molto efficace (x½)</th>
        <th>Immune</th>
        <th>Inefficace</th>
        <th>Debole (x2)</th>
        <th>Resistente (x½)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Roccia</td>
        <td>Fuoco</td>
        <td></td>
        <td></td>
        <td>Fuoco</td>
        <td>Normale</td>
      </tr>
      <tr>
        <td>Ghiaccio</td>
        <td>Acqua</td>
        <td></td>
        <td></td>
        <td>Lotta</td>
        <td>Volante</td>
      </tr>
      <tr>
        <td>Folletto</td>
        <td>Elettro</td>
        <td></td>
        <td></td>
        <td>Terra</td>
        <td>Roccia</td>
      </tr>
      <tr>
        <td></td>
        <td>Acciaio</td>
        <td></td>
        <td></td>
        <td></td>
        <td>Coleottero</td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>Acciaio</td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>Erba</td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>Psico</td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>Ghiaccio</td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>Drago</td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>Folletto</td>
      </tr>
    </tbody>
  </table>
  `;
});

spettroBtn.addEventListener("click", () => {
  risultati.innerHTML = `
  <table>
    <thead>
      <tr>
        <th>Superefficace (x2)</th>
        <th>Non molto efficace (x½)</th>
        <th>Immune</th>
        <th>Inefficace</th>
        <th>Debole (x2)</th>
        <th>Resistente (x½)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Psico</td>
        <td>Buio</td>
        <td></td>
        <td>Normale</td>
        <td>Spettro</td>
        <td>Veleno</td>
      </tr>
      <tr>
        <td>Spettro</td>
        <td></td>
        <td></td>
        <td></td>
        <td>Buio</td>
        <td>Coleottero</td>
      </tr>
    </tbody>
  </table>
  `;
});

normaleBtn.addEventListener("click", () => {
  risultati.innerHTML = `
  <table>
    <thead>
      <tr>
        <th>Superefficace (x2)</th>
        <th>Non molto efficace (x½)</th>
        <th>Immune</th>
        <th>Inefficace</th>
        <th>Debole (x2)</th>
        <th>Resistente (x½)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td></td>
        <td>Roccia</td>
        <td>Spettro</td>
        <td>Spettro</td>
        <td>Lotta</td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td>Acciaio</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  `;
});



acquaBtn.addEventListener("click", () => {
  risultati.innerHTML = `
  <table>
    <thead>
      <tr>
        <th>Superefficace (x2)</th>
        <th>Non molto efficace (x½)</th>
        <th>Immune</th>
        <th>Inefficace</th>
        <th>Debole (x2)</th>
        <th>Resistente (x½)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Terra</td>
        <td>Acqua</td>
        <td></td>
        <td></td>
        <td>Erba</td>
        <td>Acciaio</td>
      </tr>
      <tr>
        <td>Roccia</td>
        <td>Erba</td>
        <td></td>
        <td></td>
        <td>Elettro</td>
        <td>Fuoco</td>
      </tr>
      <tr>
        <td>Fuoco</td>
        <td>Drago</td>
        <td></td>
        <td></td>
        <td></td>
        <td>Acqua</td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>Ghiaccio</td>
      </tr>
    </tbody>
  </table>
  `;
});



velenoBtn.addEventListener("click", () => {
  risultati.innerHTML = `
  <table>
    <thead>
      <tr>
        <th>Superefficace (x2)</th>
        <th>Non molto efficace (x½)</th>
        <th>Immune</th>
        <th>Inefficace</th>
        <th>Debole (x2)</th>
        <th>Resistente (x½)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Erba</td>
        <td>Veleno</td>
        <td></td>
        <td>Acciaio</td>
        <td>Terra</td>
        <td>Lotta</td>
      </tr>
      <tr>
        <td>Folletto</td>
        <td>Terra</td>
        <td></td>
        <td></td>
        <td>Psico</td>
        <td>Veleno</td>
      </tr>
      <tr>
        <td></td>
        <td>Roccia</td>
        <td></td>
        <td></td>
        <td></td>
        <td>Coleottero</td>
      </tr>
      <tr>
        <td></td>
        <td>Spettro</td>
        <td></td>
        <td></td>
        <td></td>
        <td>Erba</td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>Folletto</td>
      </tr>
    </tbody>
  </table>
  `;
});




psicoBtn.addEventListener("click", () => {
  risultati.innerHTML = `
  <table>
    <thead>
      <tr>
        <th>Superefficace (x2)</th>
        <th>Non molto efficace (x½)</th>
        <th>Immune</th>
        <th>Inefficace</th>
        <th>Debole (x2)</th>
        <th>Resistente (x½)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Lotta</td>
        <td>Acciaio</td>
        <td></td>
        <td>Buio</td>
        <td>Coleottero</td>
        <td>Lotta</td>
      </tr>
      <tr>
        <td>Veleno</td>
        <td>Psico</td>
        <td></td>
        <td></td>
        <td>Spettro</td>
        <td>Psico</td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>Buio</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  `;
});