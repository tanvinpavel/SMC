import React, { useEffect, useState } from 'react';
import {
    Button, Form,
    FormControl, Nav, Navbar, NavDropdown
} from "react-bootstrap";
import { Link, NavLink } from 'react-router-dom';

const Documentation = () => {
    // const [isOpen, setIsOpen] = useState(false);
    // const [subMenu, setSubMenu] = useState(false);

    const [menuItem, setMenuItem] = useState([]);

    // const menuRef = useRef();
    // const subMenuRef = useRef();

    useEffect(()=>{
        fetch("http://localhost:3500/navbar")
            .then(res => res.json())
            .then(data => setMenuItem(data.menu_item || []))
    }, []);

    // const onClickHandler = (e) => {
    //     e.preventDefault();
    //     // console.log(menuItem);
    //     menuItem.map(item => {
    //         // console.log(item);
    //         if(item.anchor_Text === e.target.innerText){
    //             console.log(item);
    //             const x = menuItem.map(i => )
    //         }
    //         // if(item?.sub_menu){
    //         //     item.sub_menu.map(i => {
    //         //         console.log(i);
    //         //         if(i.anchor_Text === e.target.innerText){
    //         //             console.log(i.anchor_Text);
    //         //         }
    //         //     })
    //         // }
    //     })
    // }

    // console.log(menuItem);
    return (
        <section className="documentation documentation-a">
            <div className="container-fluid">
                <div className="documentaion-content">
                    <div className="row g-0">
                        {/* sidebar */}
                        <div className="col-lg-2 col-md-4">
                            <div className="doc-left-sidebar">
                                <ul className="doc-main-menu doc-menu">
                                    {
                                        menuItem.length > 0 && menuItem.map((item, index) => <li key={Math.random()}>
                                                <NavLink to="/documentation">{item.anchor_Text}<i className="fal fa-angle-double-up"></i></NavLink>
                                                <ul id={index} className={item?.expand ? "doc-sub-menu doc-menu" : "doc-sub-menu doc-menu d-none"}>
                                                    {
                                                        item.sub_menu.map(i => <li data-id="smc-ov"  key={Math.random()}>
                                                            <Link to="/documentation" data-id="smc-overview">
                                                                SMC Overview 
                                                                <i className="fal fa-angle-down"></i>
                                                            </Link>
                                                            <ul className="doc-sub-menu doc-menu">
                                                                {
                                                                    i.sub_menu.map(link => <li key={Math.random()}><a href="#intro">{link.anchor_Text}</a></li>)
                                                                }
                                                            </ul>
                                                        </li>)
                                                    }
                                                </ul>
                                            </li>
                                        )
                                    }
                                </ul>
                            </div>
                        </div>

                        {/* <Navbar bg="light" expand="lg">
                            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mr-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#link">Link</Nav.Link>
                                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">
                                            Another action
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">
                                        Separated link
                                    </NavDropdown.Item>
                                    </NavDropdown>
                                </NavDropdown>
                                </Nav>
                                <Form inline>
                                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                <Button variant="outline-success">Search</Button>
                                </Form>
                            </Navbar.Collapse>
                        </Navbar> */}
                        
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
                                    <span>Last Edited By: <a href="">Lala Beam</a>  June 17, 2022</span>
                                </div>
                                <div className="smc-content">
                                    <p> Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem.
                                    <br/>
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
                                    <li><a href="">Link to the source</a> Nam bibendum pellentesque quam a convallis.</li>
                                    <li><a href="">Link to the source</a> Nam bibendum pellentesque quam a convallis.</li>
                                    <li><a href="">Link to the source</a> Nam bibendum pellentesque quam a convallis. <br/>
                                                    Maecenas ullamcorper gravida sem sit amet cursus. </li>
                                    <li><a href="">Link to the source</a> Nam bibendum pellentesque quam a convallis. Sed <br/>
                                                    ut Integer in felis sed leo vestibulum venenatis. </li>
                                    <li><a href="">Link to the source</a> Nam bibendum pellentesque quam a.</li>
                                </ul>
                                </div>
                                <div className="bottom-section3">
                                <h3 id="foundation">Foundational Blockchain Concepts </h3>
                                <ul className="inner-sec-ul">
                                    <li><a href="">Name of the section <i className="far fa-arrow-right"></i></a></li>
                                    <li><a href="">Name of the section <i className="far fa-arrow-right"></i></a></li>
                                    <li><a href="">Name of the section <i className="far fa-arrow-right"></i></a></li>
                                    <li><a href="">Name of the section <i className="far fa-arrow-right"></i></a></li>
                                    <li><a href="">Name of the section <i className="far fa-arrow-right"></i></a></li>
                                    <li><a href="">Name of the section <i className="far fa-arrow-right"></i></a></li>
                                </ul>
                                <p><a href="">Link to the source </a>
                                    Nam bibendum pellentesque quam a convallis. Sed<br/> ut Integer in felis sed leo vestibulum venenatis.
                                </p>
                                <p><a href="">Link to the source </a>Nam bibendum pellentesque quam a. </p>
                                </div>
                                <div className="bottom-section4">
                                <h3 id="web">Web 3.0 & Metaverse Concepts </h3>
                                <p>Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a <br/>
                                                convallis. Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis.
                                </p>
                                <ul className="inner-sec-ul">
                                    <li><a href="">Link to the source</a> Nam bibendum pellentesque quam a convallis.</li>
                                    <li><a href="">Link to the source</a> Nam bibendum pellentesque quam a convallis.</li>
                                    <li><a href="">Link to the source</a> Nam bibendum pellentesque quam a convallis. <br/>
                                                    Maecenas ullamcorper gravida sem sit amet cursus. </li>
                                    <li><a href="">Link to the source</a> Nam bibendum pellentesque quam a convallis. Sed <br/>
                                                    ut Integer in felis sed leo vestibulum venenatis. </li>
                                    <li><a href="">Link to the source</a> Nam bibendum pellentesque quam a.</li>
                                </ul>
                                </div>
                            </div>
                            <div className="inner-section-bottom documentation-b" id="app-overview">
                                <div className="bottom-section1">
                                <h3 id="overview">Applications Overview </h3>
                                <div className="smc-data d-flex align-items-center g-10">
                                    <img src="image/documentation/userpic.png" alt="userpic"/>
                                    <span>Last Edited By: <a href="">Lala Beam</a>  June 17, 2022</span>
                                </div>
                                <div className="smc-content">
                                    <p>Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis.
                                    <br/>
                                                    Curabitur tempor quis eros tempus lacinia:
                                    </p>
                                    <p>Nam bibendum pellentesque quam a convallis.<br/>
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
                                    <a href="https://www.youtube.com/watch?v=0O2aH4XLbto" className="play"><i className="fas fa-play"></i></a>
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
                                <a href="" className="d-flex align-items-center g-10 mb--10" id="edit-page">
                                <i className="fab fa-github"></i>
                                <span>Edit page</span>
                                <i className="far fa-angle-right"></i>
                                </a>
                                <h4>SMC Overview </h4>
                                <h5>What’s on this page</h5>
                                <ul>
                                <li><a href="#overview">Overview </a></li>
                                <li><a href="#docs">How To Use The Docs </a></li>
                                <li><a href="#intro">Intro To SMC </a></li>
                                <li><a href="#foundation">Foundations </a></li>
                                <li><a href="#web">Web 3.0 & Metaverse </a></li>
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

export default Documentation;