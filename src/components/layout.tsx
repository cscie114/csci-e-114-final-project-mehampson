import * as React from 'react';
import { Link } from 'gatsby';


const Layout = (children: React.ReactNode) => {
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
                {children}
            </main>
            <footer>
            </footer>
        </div>
    );
};

export default Layout;
