import './Navigation.scss';
import { Logo } from "../Logo/Logo";

const menuList = ['чому ми', 'галерея', 'контакти', 'порахувати кейтеринг'];

export const Navigation: React.FC = () => {
  return (
    <nav className="nav">
      <Logo />

      <div className="nav__menu">
        <ul className="nav_list">
          {menuList.map(item => (
            <li className="nav__item">
              <a href="/" className="nav_link">
                {item}
              </a>
            </li>
          ))}
        </ul>

      </div>

    </nav>
  );
}