import React from 'react';

import { Container } from 'react-bootstrap';

const AppFooter = () => {
    return (
        <>
            <Container fluid className="text-light page-footer d-flex">
                <Container>
                    <h5 className='pt-4'>Contact Us</h5>
                    <div className="d-lg-flex pb-4 justify-content-between">
                        <ul className="no-bullets">
                            <li><h6>Anita Ganti</h6></li>
                            <li>
                                <a className="footer-link" href="https://anitapeppercorn.github.io/react-portfolio/#/about">
                                    <span><i className="far fa-folder pr-3"></i></span>
                                    https://anitapeppercorn.github.io/react-portfolio
                                </a>
                            </li>
                            <li>
                                <a className="footer-link" href="mailto:anita_r_ganti@yahoo.com">
                                    <span><i className="far fa-envelope pr-3"></i></span>
                                    anita_r_ganti@yahoo.com
                                </a>
                            </li>
                            <li>
                                <a className="footer-link" href="https://github.com/anitapeppercorn">
                                    <span><i className="fab fa-github pr-3"></i></span>
                                    anitapeppercorn
                                </a>
                            </li>
                            <li>
                                <a className="footer-link" href="https://www.linkedin.com/in/anita-ganti-9380961/">
                                    <span><i className="fab fa-linkedin pr-3"></i></span>
                                    anita-ganti-9380961
                                </a>
                            </li>
                        </ul>
                        <ul className="no-bullets">
                            <li><h6>Priya Ravi</h6></li>
                            <li>
                                <a className="footer-link" href="https://priyaravi23.github.io/react-portfolio/#/about">
                                    <span><i className="far fa-folder pr-3"></i></span>
                                    https://priyaravi23.github.io/react-portfolio/
                                </a>
                            </li>
                            <li>
                                <a className="footer-link" href="mailto:priyaravi23@gmail.com">
                                    <span><i className="far fa-envelope pr-3"></i></span>
                                    priyaravi23@gmail.com
                                </a>
                            </li>
                            <li>
                                <a className="footer-link" href="https://github.com/priyaravi23">
                                    <span><i className="fab fa-github pr-3"></i></span>
                                    priyaravi23
                                </a>
                            </li>
                            <li>
                                <a className="footer-link" href="https://www.linkedin.com/in/priya-ravi-4508437b/">
                                    <span><i className="fab fa-linkedin pr-3"></i></span>
                                    priya-ravi-4508437b
                                </a>
                            </li>
                        </ul>
                        <ul className="no-bullets">
                            <li><h6>Vanessa Lane</h6></li>
                            <li>
                                <a className="footer-link" href="https://vanessalane.herokuapp.com">
                                    <span><i className="far fa-folder pr-3"></i></span>
                                    https://vanessalane.herokuapp.com
                                </a>
                            </li>
                            <li>
                                <a className="footer-link" href="mailto:vlane0593@gmail.com">
                                    <span><i className="far fa-envelope pr-3"></i></span>
                                    vlane0593@gmail.com
                                </a>
                            </li>
                            <li>
                                <a className="footer-link" href="https://github.com/vanessalane">
                                    <span><i className="fab fa-github pr-3"></i></span>
                                    vanessalane
                                </a>
                            </li>
                            <li>
                                <a className="footer-link" href="https://www.linkedin.com/in/vanessa-lane/">
                                    <span><i className="fab fa-linkedin pr-3"></i></span>
                                    vanessa-lane
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p>© 2020</p>
                        <p><a className="footer-link" href="https://github.com/anitapeppercorn/FANTINDER"><i className="fab fa-github pr-3"></i>Visit the GitHub Repo</a></p>
                    </div>
                </Container>
            </Container>
        </>
    )
};
export default AppFooter;