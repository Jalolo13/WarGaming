/* eslint-disable jsx-a11y/anchor-is-valid */
import "./header-nav.sass";

function HeaderNav() {
    return (
        <ul className="header-list">
            <li className="header-list-item">
                <a href="#" className="header-list-link">
                    Главная
                </a>
            </li>
            <li className="header-list-item">
                <a href="#" className="header-list-link">
                    Сервера
                </a>
            </li>
            <li className="header-list-item">
                <a href="#" className="header-list-link">
                    Скачать
                </a>
            </li>
            <li className="header-list-item">
                <a href="#" className="header-list-link">
                    Открыть в браузере
                </a>
            </li>
            <li className="header-list-item">
                <a href="#" className="header-list-link">
                    Цены
                </a>
            </li>
            <li className="header-list-item">
                <a href="#" className="header-list-link">
                    Тех поддержка
                </a>
            </li>
            <li className="header-list-item">
                <a href="#" className="header-list-link">
                    Контакты
                </a>
            </li>
        </ul>
    );
}

export default HeaderNav;
