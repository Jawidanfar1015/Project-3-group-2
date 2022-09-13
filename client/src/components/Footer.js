import React from 'react';

import { Container } from 'react-bootstrap';

const AppFooter = () => {
    return (
        <>
            <Container fluid className="text-dark page-footer d-flex">
                <Container>
                    <h5 className='pt-4'>Contact Us</h5>
                    <div className="d-lg-flex pb-4 justify-content-between">
                        <ul className="no-bullets">
                            <li><h6>Holly Haller</h6></li>
                            <li>
                                <a className="footer-link" href="https://hallerhc.github.io/Holly-Haller-Portfolio/">
                                    <span><i className="far fa-folder pr-3"></i></span>
                                    https://hallerhc.github.io/Holly-Haller-Portfolio/
                                </a>
                            </li>
                            <li>
                                <a className="footer-link" href="mailto:thehallers@icloud.com">
                                    <span><i className="far fa-envelope pr-3"></i></span>
                                    thehallers@icloud.com
                                </a>
                            </li>
                            <li>
                                <a className="footer-link" href="https://github.com/hallerhc">
                                    <span><i className="fab fa-github pr-3"></i></span>
                                    hallerhc
                                </a>
                            </li>
                            <li>
                                <a className="footer-link" href="https://www.linkedin.com/in/holly-haller-154695240">
                                    <span><i className="fab fa-linkedin pr-3"></i></span>
                                    holly-haller-154695240
                                </a>
                            </li>
                        </ul>
                        <ul className="no-bullets">
                            <li><h6>Jawid Noori</h6></li>
                            <li>
                                <a className="footer-link" href="https://jawidanfar1015.github.io/PORTFOLIO/">
                                    <span><i className="far fa-folder pr-3"></i></span>
                                    https://jawidanfar1015.github.io/PORTFOLIO/
                                </a>
                            </li>
                            <li>
                                <a className="footer-link" href="hajikaka4030@gmail.com">
                                    <span><i className="far fa-envelope pr-3"></i></span>
                                    hajikaka4030@gmail.com
                                </a>
                            </li>
                            <li>
                                <a className="footer-link" href="https://github.com/Jawidanfar1015">
                                    <span><i className="fab fa-github pr-3"></i></span>
                                    jawidanfar1015
                                </a>
                            </li>
                            <li>
                                <a className="footer-link" href=" ">
                                    <span><i className="fab fa-linkedin pr-3"></i></span>
                                    linkedin
                                </a>
                            </li>
                        </ul>
                        <ul className="no-bullets">
                            <li><h6>Socheata Ly</h6></li>
                            <li>
                                <a className="footer-link" href="https://github.com/socheata16/updated-portfoliopage">
                                    <span><i className="far fa-folder pr-3"></i></span>
                                    https://github.com/socheata16/updated-portfoliopage
                                </a>
                            </li>
                            <li>
                                <a className="footer-link" href="">
                                    <span><i className="far fa-envelope pr-3"></i></span>
                                    Still need an email here
                                </a>
                            </li>
                            <li>
                                <a className="footer-link" href="https://github.com/socheata16">
                                    <span><i className="fab fa-github pr-3"></i></span>
                                    socheata16
                                </a>
                            </li>
                            <li>
                                <a className="footer-link" href="https://www.linkedin.com/in/socheata16">
                                    <span><i className="fab fa-linkedin pr-3"></i></span>
                                    linkedin
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p>© 2022</p>
                        <p><a className="footer-link" href="https://github.com/Jawidanfar1015/Project-3-group-2"><i className="fab fa-github pr-3"></i>Visit the GitHub Repo</a></p>
                    </div>
                </Container>
            </Container>
        </>
    )
};
export default AppFooter;