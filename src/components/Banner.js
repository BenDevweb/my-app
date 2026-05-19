import { Container, Row, Col } from "react-bootstrap";
import images from '../assets/images.png';
import { useEffect, useState, useCallback, useMemo } from "react";

export const Banner = () => {

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const toRotate = useMemo(
        () => ["Ingénieur logiciel & Développeur Web Full-Stack"],
        []
    );

    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);

    const period = 2000;

    const tick = useCallback(() => {

        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];

        let updatedText = isDeleting
            ? fullText.substring(0, text.length - 1)
            : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);

        } else if (isDeleting && updatedText === '') {

            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }

    }, [loopNum, isDeleting, text, period, toRotate]);

    useEffect(() => {

        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => {
            clearInterval(ticker);
        };

    }, [text, delta, tick]);

    return (
        <section className="banner" id="home">

            <Container>
                <Row className="align-items-center">

                    <Col xs={12} md={6} xl={7}>

                        <h2>Bonjour, Je suis Béni Bimpula</h2>

                        <h2 className="wrap">{text}</h2>

                        <p className="description truncate">
                            Développeur Web et Web Mobile fullstack junior
                            et ingénieur logiciel, je suis un développeur
                            fullstack polyglotte passionné par la création
                            de solutions digitales modernes,
                            performantes et sur mesure.
                        </p>

                    </Col>

                    <Col className="img" xs={12} md={6} xl={5}>
                        <img src={images} alt="headerImg" />
                    </Col>

                </Row>
            </Container>

        </section>
    );
}