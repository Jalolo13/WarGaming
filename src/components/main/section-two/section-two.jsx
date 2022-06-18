/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/heading-has-content */
import "./section-two.sass";
import SectionTwoImg from "./imgs/ImageServerHost.png";

function SectionTwo() {
    return (
        <section className="section-two">
            <div className="section-two-inner">
                <img
                    src={SectionTwoImg}
                    alt="img"
                    className="section-two-img"
                />
                <div className="section-two-inner-text">
                    <div className="section-two-cloud">
                        <hr className="section-two-line" />
                        <span className="section-two-gaming">
                            Облачный гейминг
                        </span>
                    </div>

                    <h2 className="section-two-title h2-titles">
                        Как это работает
                    </h2>
                    <p className="section-two-text">
                        Наши сервера запускают игру, и передают вам картинку,
                        которой вы можете управлять в реальном времени!
                    </p>
                    <hr className="section-two-line-text" />
                    <p className="section-two-text">
                        Приложение запустится на ПК с процессором от 1.5 GHz ,
                        от 1 Gb RAM и доступом в интернет от 15 мбит/с на всех
                        операционых системах Windows 7, 8, 10 MacOS и Linux .
                    </p>
                    <a href="#" className="section-two-download">
                        Загрузить
                    </a>
                </div>
            </div>
        </section>
    );
}

export default SectionTwo;
