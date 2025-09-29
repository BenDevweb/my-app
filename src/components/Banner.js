import { Container, Row, Col } from "react-bootstrap";
    import { ArrowRightCircle } from 'react-bootstrap-icons';
    import images from '../assets/images.png';
    import { useEffect, useState, useCallback } from "react";
    
    export const Banner = () => {
        const [loopNum, setLoopNum] = useState(0);
        const [isDeleting, setIsDeleting] = useState(false);
        const toRotate = ["Web developer", "UI/UX Designer", "Databases Manager"];
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
        }, [loopNum, isDeleting, text, period]);

        useEffect(() => {
            let ticker = setInterval(() => {
                tick();
            }, delta);
            return () => { clearInterval(ticker); };
        }, [text, delta, tick]);

        return (
            <section className="banner" id="home">
                <Container className="">
                    <Row className="align-items-center">
                        <Col xs={12} md={6} xl={7}>
                            <span className="tagLine">{'Welcome to my Portfolio'}</span>
                            <h1>{"Hi I'm Beni Bimpula"} <span className="wrap">{text}</span></h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti eos suscipit nam id vero autem.</p>
                            <button onClick={() => console.log("connect")}>Let's connect !<ArrowRightCircle size={25}/></button>
                        </Col>
                        <Col xs={12} md={6} xl={5}>
                            <img src={images} alt="headerImg" />
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }