import React from 'react';
import { Link } from 'react-router-dom';
import { Sidenav, Nav } from 'rsuite';

const Sidebar = () => {
    return (
        <section className="documentation documentation-a">
            <div className="container-fluid">
                <div className="documentation-content">
                    <div className="row g-0">
                        <div className="col-lg-2 col-md-4">
                            <div className="doc-left-sidebar col-xs-mr-2">
                                <ul className="doc-main-menu doc-menu">
                                    <Sidenav appearance="" defaultOpenKeys={['1']}>
                                        <Sidenav.Body>
                                            <Nav activeKey="1">
                                                <Nav.Menu eventKey="1" title="Introduction">
                                                    <Nav.Menu eventKey="1-1" title="SMC Overview">
                                                        <Nav.Item eventKey="1-1-1">Intro To SMC</Nav.Item>
                                                        <Nav.Item eventKey="1-1-2">Foundational Concept</Nav.Item>
                                                        <Nav.Item eventKey="1-1-3">Web 3.0 Concepts</Nav.Item>
                                                        <Nav.Item eventKey="1-1-4">Metaverse Concepts</Nav.Item>
                                                    </Nav.Menu>
                                                    <Nav.Menu eventKey="1-2" title="SMC Overview">
                                                        <Nav.Item eventKey="1-2-1">Intro To SMC</Nav.Item>
                                                        <Nav.Item eventKey="1-2-2">Foundational Concept</Nav.Item>
                                                        <Nav.Item eventKey="1-2-3">Web 3.0 Concepts</Nav.Item>
                                                        <Nav.Item eventKey="1-2-4">Metaverse Concepts</Nav.Item>
                                                    </Nav.Menu>
                                                    <Nav.Menu eventKey="1-3" title="SMC Overview">
                                                        <Nav.Item eventKey="1-3-1">Intro To SMC</Nav.Item>
                                                        <Nav.Item eventKey="1-3-2">Foundational Concept</Nav.Item>
                                                        <Nav.Item eventKey="1-3-3">Web 3.0 Concepts</Nav.Item>
                                                        <Nav.Item eventKey="1-3-4">Metaverse Concepts</Nav.Item>
                                                    </Nav.Menu>
                                                </Nav.Menu>

                                                <Nav.Menu eventKey="2" title="Application">
                                                    <Nav.Menu eventKey="2-1" title="SMC Overview">
                                                        <Nav.Item eventKey="2-1-1">Intro To SMC</Nav.Item>
                                                        <Nav.Item eventKey="2-1-2">Foundational Concept</Nav.Item>
                                                        <Nav.Item eventKey="2-1-3">Web 3.0 Concepts</Nav.Item>
                                                        <Nav.Item eventKey="2-1-4">Metaverse Concepts</Nav.Item>
                                                    </Nav.Menu>
                                                    <Nav.Menu eventKey="1-2" title="SMC Overview">
                                                        <Nav.Item eventKey="2-2-1">Intro To SMC</Nav.Item>
                                                        <Nav.Item eventKey="2-2-2">Foundational Concept</Nav.Item>
                                                        <Nav.Item eventKey="2-2-3">Web 3.0 Concepts</Nav.Item>
                                                        <Nav.Item eventKey="2-2-4">Metaverse Concepts</Nav.Item>
                                                    </Nav.Menu>
                                                    <Nav.Menu eventKey="2-1" title="SMC Overview">
                                                        <Nav.Item eventKey="2-3-1">Intro To SMC</Nav.Item>
                                                        <Nav.Item eventKey="2-3-2">Foundational Concept</Nav.Item>
                                                        <Nav.Item eventKey="2-3-3">Web 3.0 Concepts</Nav.Item>
                                                        <Nav.Item eventKey="2-3-4">Metaverse Concepts</Nav.Item>
                                                    </Nav.Menu>
                                                </Nav.Menu>

                                                <Nav.Menu eventKey="3" title="Transaction">
                                                    <Nav.Menu eventKey="3-1" title="SMC Overview">
                                                        <Nav.Item eventKey="3-1-1">Intro To SMC</Nav.Item>
                                                        <Nav.Item eventKey="3-1-2">Foundational Concept</Nav.Item>
                                                        <Nav.Item eventKey="3-1-3">Web 3.0 Concepts</Nav.Item>
                                                        <Nav.Item eventKey="3-1-4">Metaverse Concepts</Nav.Item>
                                                    </Nav.Menu>
                                                    <Nav.Menu eventKey="3-2" title="SMC Overview">
                                                        <Nav.Item eventKey="3-2-1">Intro To SMC</Nav.Item>
                                                        <Nav.Item eventKey="3-2-2">Foundational Concept</Nav.Item>
                                                        <Nav.Item eventKey="3-2-3">Web 3.0 Concepts</Nav.Item>
                                                        <Nav.Item eventKey="3-2-4">Metaverse Concepts</Nav.Item>
                                                    </Nav.Menu>
                                                    <Nav.Menu eventKey="3-3" title="SMC Overview">
                                                        <Nav.Item eventKey="3-3-1">Intro To SMC</Nav.Item>
                                                        <Nav.Item eventKey="3-3-2">Foundational Concept</Nav.Item>
                                                        <Nav.Item eventKey="3-3-3">Web 3.0 Concepts</Nav.Item>
                                                        <Nav.Item eventKey="3-3-4">Metaverse Concepts</Nav.Item>
                                                    </Nav.Menu>
                                                </Nav.Menu>

                                                <Nav.Menu eventKey="4" title="Accounts">
                                                    <Nav.Menu eventKey="4-1" title="SMC Overview">
                                                        <Nav.Item eventKey="4-1-1">Intro To SMC</Nav.Item>
                                                        <Nav.Item eventKey="4-1-2">Foundational Concept</Nav.Item>
                                                        <Nav.Item eventKey="4-1-3">Web 3.0 Concepts</Nav.Item>
                                                        <Nav.Item eventKey="4-1-4">Metaverse Concepts</Nav.Item>
                                                    </Nav.Menu>
                                                    <Nav.Menu eventKey="1-2" title="SMC Overview">
                                                        <Nav.Item eventKey="4-2-1">Intro To SMC</Nav.Item>
                                                        <Nav.Item eventKey="4-2-2">Foundational Concept</Nav.Item>
                                                        <Nav.Item eventKey="4-2-3">Web 3.0 Concepts</Nav.Item>
                                                        <Nav.Item eventKey="4-2-4">Metaverse Concepts</Nav.Item>
                                                    </Nav.Menu>
                                                    <Nav.Menu eventKey="1-1" title="SMC Overview">
                                                        <Nav.Item eventKey="4-3-1">Intro To SMC</Nav.Item>
                                                        <Nav.Item eventKey="4-3-2">Foundational Concept</Nav.Item>
                                                        <Nav.Item eventKey="4-3-3">Web 3.0 Concepts</Nav.Item>
                                                        <Nav.Item eventKey="4-3-4">Metaverse Concepts</Nav.Item>
                                                    </Nav.Menu>
                                                </Nav.Menu>

                                                <Nav.Menu eventKey="5" title="Networks">
                                                    <Nav.Menu eventKey="5-1" title="SMC Overview">
                                                        <Nav.Item eventKey="5-1-1">Intro To SMC</Nav.Item>
                                                        <Nav.Item eventKey="5-1-2">Foundational Concept</Nav.Item>
                                                        <Nav.Item eventKey="5-1-3">Web 3.0 Concepts</Nav.Item>
                                                        <Nav.Item eventKey="5-1-4">Metaverse Concepts</Nav.Item>
                                                    </Nav.Menu>
                                                    <Nav.Menu eventKey="5-2" title="SMC Overview">
                                                        <Nav.Item eventKey="5-2-1">Intro To SMC</Nav.Item>
                                                        <Nav.Item eventKey="5-2-2">Foundational Concept</Nav.Item>
                                                        <Nav.Item eventKey="5-2-3">Web 3.0 Concepts</Nav.Item>
                                                        <Nav.Item eventKey="5-2-4">Metaverse Concepts</Nav.Item>
                                                    </Nav.Menu>
                                                    <Nav.Menu eventKey="5-1" title="SMC Overview">
                                                        <Nav.Item eventKey="5-3-1">Intro To SMC</Nav.Item>
                                                        <Nav.Item eventKey="5-3-2">Foundational Concept</Nav.Item>
                                                        <Nav.Item eventKey="5-3-3">Web 3.0 Concepts</Nav.Item>
                                                        <Nav.Item eventKey="5-3-4">Metaverse Concepts</Nav.Item>
                                                    </Nav.Menu>
                                                </Nav.Menu>

                                                <Nav.Menu eventKey="6" title="SMC Stack">
                                                    <Nav.Menu eventKey="6-1" title="SMC Overview">
                                                        <Nav.Item eventKey="6-1-1">Intro To SMC</Nav.Item>
                                                        <Nav.Item eventKey="6-1-2">Foundational Concept</Nav.Item>
                                                        <Nav.Item eventKey="6-1-3">Web 3.0 Concepts</Nav.Item>
                                                        <Nav.Item eventKey="6-1-4">Metaverse Concepts</Nav.Item>
                                                    </Nav.Menu>
                                                    <Nav.Menu eventKey="6-2" title="SMC Overview">
                                                        <Nav.Item eventKey="6-2-1">Intro To SMC</Nav.Item>
                                                        <Nav.Item eventKey="6-2-2">Foundational Concept</Nav.Item>
                                                        <Nav.Item eventKey="6-2-3">Web 3.0 Concepts</Nav.Item>
                                                        <Nav.Item eventKey="6-2-4">Metaverse Concepts</Nav.Item>
                                                    </Nav.Menu>
                                                    <Nav.Menu eventKey="6-3" title="SMC Overview">
                                                        <Nav.Item eventKey="6-3-1">Intro To SMC</Nav.Item>
                                                        <Nav.Item eventKey="6-3-2">Foundational Concept</Nav.Item>
                                                        <Nav.Item eventKey="6-3-3">Web 3.0 Concepts</Nav.Item>
                                                        <Nav.Item eventKey="6-3-4">Metaverse Concepts</Nav.Item>
                                                    </Nav.Menu>
                                                </Nav.Menu>

                                                <Nav.Menu eventKey="7" title="Advanced">
                                                    <Nav.Menu eventKey="7-1" title="SMC Overview">
                                                        <Nav.Item eventKey="7-1-1">Intro To SMC</Nav.Item>
                                                        <Nav.Item eventKey="7-1-2">Foundational Concept</Nav.Item>
                                                        <Nav.Item eventKey="7-1-3">Web 3.0 Concepts</Nav.Item>
                                                        <Nav.Item eventKey="7-1-4">Metaverse Concepts</Nav.Item>
                                                    </Nav.Menu>
                                                    <Nav.Menu eventKey="7-2" title="SMC Overview">
                                                        <Nav.Item eventKey="7-2-1">Intro To SMC</Nav.Item>
                                                        <Nav.Item eventKey="7-2-2">Foundational Concept</Nav.Item>
                                                        <Nav.Item eventKey="7-2-3">Web 3.0 Concepts</Nav.Item>
                                                        <Nav.Item eventKey="7-2-4">Metaverse Concepts</Nav.Item>
                                                    </Nav.Menu>
                                                    <Nav.Menu eventKey="7-3" title="SMC Overview">
                                                        <Nav.Item eventKey="7-3-1">Intro To SMC</Nav.Item>
                                                        <Nav.Item eventKey="7-3-2">Foundational Concept</Nav.Item>
                                                        <Nav.Item eventKey="7-3-3">Web 3.0 Concepts</Nav.Item>
                                                        <Nav.Item eventKey="7-3-4">Metaverse Concepts</Nav.Item>
                                                    </Nav.Menu>
                                                </Nav.Menu>
                                            </Nav>
                                        </Sidenav.Body>
                                    </Sidenav>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="col-lg-8 col-md-8">
                            <div className="doc-inner-section">
                            <div className="inner-section-top">
                                <h1>SMC Development Documentation </h1>
                                <p>The Official SMC Documentation Site <br/>
                                            7 Chapters | 175 Pages | Updated 13 Times in the last 7 days
                                </p>
                            </div>
                            <div className="inner-section-bottom" id="smc-overview">
                                <div className="bottom-section1">
                                <h3 id="overview">SMC Overview </h3>
                                <div className="smc-data d-flex align-items-center g-10">
                                    <img src="image/documentation/userpic.png" alt="userpic"/>
                                    <span>Last Edited By: <Link to="">Lala Beam</Link>  June 17, 2022</span>
                                </div>
                                <div className="smc-content">
                                    <p> Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem.
                                    <br/><br/>
                                                    Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem.
                                    </p>
                                    <h5 id="docs">How To Utilize The Docs</h5>
                                    <ul>
                                    <li>Auctor purus luctus enim</li>
                                    <li>Eu tempor urna</li>
                                    <li>Curabitur vel bibendum lorem</li>
                                    <li>Auctor purus luctus enim</li>
                                    <li>Eu tempor urna</li>
                                    <li>Curabitur vel bibendum lorem</li>
                                    </ul>
                                </div>
                                </div>
                                <div className="bottom-section2">
                                <h3 id="intro">Intro To SMC </h3>
                                <p>Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a <br/>
                                                convallis. Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis.
                                </p>
                                <ul className="inner-sec-ul">
                                    <li><Link to="">Link to the source</Link> Nam bibendum pellentesque quam a convallis.</li>
                                    <li><Link to="">Link to the source</Link> Nam bibendum pellentesque quam a convallis.</li>
                                    <li><Link to="">Link to the source</Link> Nam bibendum pellentesque quam a convallis. <br/>
                                                    Maecenas ullamcorper gravida sem sit amet cursus. </li>
                                    <li><Link to="">Link to the source</Link> Nam bibendum pellentesque quam a convallis. Sed <br/>
                                                    ut Integer in felis sed leo vestibulum venenatis. </li>
                                    <li><Link to="">Link to the source</Link> Nam bibendum pellentesque quam a.</li>
                                </ul>
                                </div>
                                <div className="bottom-section3">
                                <h3 id="foundation">Foundational Blockchain Concepts </h3>
                                <ul className="inner-sec-ul">
                                    <li><Link to="">Name of the section <i className="far fa-arrow-right"></i></Link></li>
                                    <li><Link to="">Name of the section <i className="far fa-arrow-right"></i></Link></li>
                                    <li><Link to="">Name of the section <i className="far fa-arrow-right"></i></Link></li>
                                    <li><Link to="">Name of the section <i className="far fa-arrow-right"></i></Link></li>
                                    <li><Link to="">Name of the section <i className="far fa-arrow-right"></i></Link></li>
                                    <li><Link to="">Name of the section <i className="far fa-arrow-right"></i></Link></li>
                                </ul>
                                <p><Link to="">Link to the source </Link>
                                    Nam bibendum pellentesque quam a convallis. Sed<br/> ut Integer in felis sed leo vestibulum venenatis.
                                </p>
                                <p><Link to="">Link to the source </Link>Nam bibendum pellentesque quam a. </p>
                                </div>
                                <div className="bottom-section4">
                                <h3 id="web">Web 3.0 & Metaverse Concepts </h3>
                                <p>Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a <br/>
                                                convallis. Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis.
                                </p>
                                <ul className="inner-sec-ul">
                                    <li><Link to="">Link to the source</Link> Nam bibendum pellentesque quam a convallis.</li>
                                    <li><Link to="">Link to the source</Link> Nam bibendum pellentesque quam a convallis.</li>
                                    <li><Link to="">Link to the source</Link> Nam bibendum pellentesque quam a convallis. <br/>
                                                    Maecenas ullamcorper gravida sem sit amet cursus. </li>
                                    <li><Link to="">Link to the source</Link> Nam bibendum pellentesque quam a convallis. Sed <br/>
                                                    ut Integer in felis sed leo vestibulum venenatis. </li>
                                    <li><Link to="">Link to the source</Link> Nam bibendum pellentesque quam a.</li>
                                </ul>
                                </div>
                            </div>
                            <div className="inner-section-bottom documentation-b" id="app-overview">
                                <div className="bottom-section1">
                                <h3 id="overview">Applications Overview </h3>
                                <div className="smc-data d-flex align-items-center g-10">
                                    <img src="image/documentation/userpic.png" alt="userpic"/>
                                    <span>Last Edited By: <Link to="">Lala Beam</Link>  June 17, 2022</span>
                                </div>
                                <div className="smc-content">
                                    <p>Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis.
                                    <br/><br/>
                                                    Curabitur tempor quis eros tempus lacinia:
                                    </p>
                                    <p>Nam bibendum pellentesque quam a convallis. <br/><br/>
                                                    Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis:
                                    </p>
                                </div>
                                </div>
                                <div className="bottom-section2">
                                <h3 id="intro">Intro To Applications </h3>
                                <p className="mb--40">Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a <br/>
                                                convallis. Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis.
                                </p>
                                <div className="row">
                                    <div className="col-lg-6">
                                    <h4>Centralized Applications on Blockchain </h4>
                                    <p>Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum. Morbi a eleifend magna. Nam metus lacus, porttitor eu mauris a, blandit ultrices nibh. Mauris sit amet magna non ligula vestibulum eleifend.</p>
                                    </div>
                                    <div className="col-lg-6">
                                    <h4>Decentralized Applications on Blockchain </h4>
                                    <p>Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum. Morbi a eleifend magna. Nam metus lacus, porttitor eu mauris a, blandit ultrices nibh. Mauris sit amet magna non ligula vestibulum eleifend.</p>
                                    </div>
                                </div>
                                </div>
                                <div className="bottom-section3">
                                <h3 id="sample">Code Samples </h3>
                                <p>Quisque mauris dolor, fringilla sed tincidunt ac, finibus non odio. Sed vitae mauris nec ante pretium finibus. Donec nisl neque, pharetra ac elit eu, faucibus aliquam ligula. Nullam dictum, tellus tincidunt tempor laoreet, nibh elit sollicitudin felis, eget feugiat sapien diam nec nisl. </p>
                                <p>Quisque mauris dolor, fringilla sed tincidunt ac, finibus non odio. Sed vitae mauris nec ante pretium finibus. Donec nisl neque, pharetra ac elit eu, faucibus aliquam ligula. Nullam dictum, tellus tincidunt tempor laoreet, nibh elit sollicitudin felis, eget feugiat sapien diam nec nisl. </p>
                                </div>
                                <div className="bottom-section4">
                                <h3 id="tutorial">App Tutorial </h3>
                                <p>Quisque mauris dolor, fringilla sed tincidunt ac, finibus non odio. Sed vitae mauris nec ante pretium finibus.</p>
                                <div className="tutorial-thumbnail">
                                    <img src="image/documentation/doc-b-tutorial.png" alt=""/>
                                    <Link to="https://www.youtube.com/watch?v=0O2aH4XLbto" className="play"><i className="fas fa-play"></i></Link>
                                </div>
                                </div>
                                <div className="bottom-section5">
                                <h3 id="exercise">Coding Exercises </h3>
                                <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. </p>
                                <h5 id="docs">Lorem ipsum: </h5>
                                <ul>
                                    <li>Auctor purus luctus enim</li>
                                    <li>Eu tempor urna</li>
                                    <li>Curabitur vel bibendum lorem</li>
                                    <li>Auctor purus luctus enim</li>
                                    <li>Eu tempor urna</li>
                                    <li>Curabitur vel bibendum lorem</li>
                                </ul>
                                </div>
                            </div>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-0">
                            <div className="doc-right-sidebar">
                            <div className="options">
                                <Link to="" className="d-flex align-items-center g-10 mb--10" id="edit-page">
                                <i className="fab fa-github"></i>
                                <span>Edit page</span>
                                <i className="far fa-angle-right"></i>
                                </Link>
                                <h4>SMC Overview </h4>
                                <h5>What’s on this page</h5>
                                <ul>
                                <li><Link to="#overview">Overview </Link></li>
                                <li><Link to="#docs">How To Use The Docs </Link></li>
                                <li><Link to="#intro">Intro To SMC </Link></li>
                                <li><Link to="#foundation">Foundations </Link></li>
                                <li><Link to="#web">Web 3.0 & Metaverse </Link></li>
                                </ul>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sidebar;