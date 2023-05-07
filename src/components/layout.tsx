import * as React from 'react';
import { Link } from 'gatsby';

/* This took forever until I found https://www.bemyaficionado.com/page-layouts-react-typescript/ */
interface Props {
    children: React.ReactNode
}

const Layout: React.FunctionComponent<Props> = (props: Props) => {
    return (
        <div className="">
            <header className="">
                <h1>Meal Board</h1>
                <nav>
                    <ul className="">
                        <li className="">
                            <Link to='/'>Home</Link>
                        </li>
                    </ul>
                </nav>
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
