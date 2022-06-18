/* eslint-disable jsx-a11y/heading-has-content */
import "./section-one.sass";

function SectionOne() {
    return (
        <section className="section-one">
            <div className="section-one-inner">
                <h4 className="section-one-subtitle">
                    Сервис облачного гейминга
                </h4>
                <h1 className="title">Преврати свое устройство в игровое</h1>
                <button className="btn-upgrade">upgrade</button>
            </div>
        </section>
    );
}

export default SectionOne;
