import React from 'react';
import { Link } from 'react-router-dom';
import { Sidenav, Nav } from 'rsuite';
import Article from '../Article/Article';

const Sidebar = () => {
    return (
        <Sidenav appearance="" defaultOpenKeys={['1']}>
            <Sidenav.Body>
                <Nav activeKey="1">
                    <Nav.Menu eventKey="1" title="Introduction">
                        <Nav.Menu eventKey="1-1" title="SMC Overview">
                            <div className='d-none d-md-block'>
                                <Nav.Item href='#intro' eventKey="1-1-1">Intro To SMC</Nav.Item>
                                <Nav.Item href='#foundation' eventKey="1-1-2">Foundational Concept</Nav.Item>
                                <Nav.Item href='#web' eventKey="1-1-3">Web 3.0 & Metaverse</Nav.Item>
                            </div>
                            <div className='d-block d-md-none'>
                                <Article/>
                            </div>
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
    );
};

export default Sidebar;