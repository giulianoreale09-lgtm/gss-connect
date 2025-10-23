
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import Login from './Login.js';

export default function App() {
  return `
    ${Navbar()}
    <main>
      <h1>Welcome to GSS Connect</h1>
      ${Login()}
    </main>
    ${Footer()}
  `;
}
