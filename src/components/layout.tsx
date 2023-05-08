import * as React from 'react';
import SearchPage from './search';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';


/* This took forever until I found https://www.bemyaficionado.com/page-layouts-react-typescript/ */
interface Props {
    children: React.ReactNode
}


const Layout: React.FunctionComponent<Props> = (props: Props) => {
    return (
        <div className="">
            <header className="">
                <Navbar bg="light">
                    <Container>
                        <Nav>
                            <Navbar.Brand>Meal Board</Navbar.Brand>
                            <Nav.Link href="/">Recipes</Nav.Link>
                            <SearchPage />
                        </Nav>
                    </Container>
                </Navbar>
            </header>
            <main>
                {props.children}
            </main>
            <footer>
            </footer>
        </div>
    );
};

export default Layout;
