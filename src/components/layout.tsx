import * as React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";


/* This took forever until I found https://www.bemyaficionado.com/page-layouts-react-typescript/ */
interface Props {
    children: React.ReactNode
}

const Layout: React.FunctionComponent<Props> = (props: Props) => {
    return (
        <div className="">
            <header className="">
                <nav className='navbar bg-light'>
                    <div className='container-fluid'>
                        <a className='navbar-brand' href='#'>Meal Board</a>
                        <a className='navbar-link' href='/'>Recipes</a>
                    </div>
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
