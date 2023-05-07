import * as React from 'react';
import { siteCategories } from '../hooks/siteCategories';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown } from 'react-bootstrap';



/* This took forever until I found https://www.bemyaficionado.com/page-layouts-react-typescript/ */
interface Props {
    children: React.ReactNode
}

const Layout: React.FunctionComponent<Props> = (props: Props) => {
    const categories = siteCategories();
    console.log(categories);
    return (
        <div className="">
            <header className="">
                <Navbar bg="light">
                    <Container>
                        <Nav>
                            <Navbar.Brand>Meal Board</Navbar.Brand>
                            <Nav.Link href="/">Recipes</Nav.Link>
                            <NavDropdown title="Categories" id="cat-dropdown">
                                {categories.map(category =>
                                    <NavDropdown.Item
                                        key={category}
                                        href={`/${category}`}>
                                        {category}
                                    </NavDropdown.Item>)}
                            </NavDropdown>
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
