import { Navbar, Nav } from 'react-bootstrap';
import useAuth from '../hooks/auth';

const MainNav = () => {
    const { isLoggedIn, logout } = useAuth();

    const styles = {
        navBar: {
            display: 'flex',
            justifyContent: 'space-evenly'
        },

        navDiv: {
            backgroundColor: '#1a2930',
            padding: '20px'
        }

    };
    return (
        <div style={styles.navDiv}>
            {/* <Navbar bg="dark" variant="dark"> */}
            <Nav style={styles.navBar} className="mr-auto">

                <Navbar.Brand href="/" style={{ color: '#FFFFFF' }}>Rookie Skill</Navbar.Brand>
                
                <Nav.Link href="/profile"><i className="fas fa-user-circle" style={{ color: '#FFFFFF' }}>Profile</i></Nav.Link>
                {isLoggedIn() ?
                    <>
                        <Nav.Link onClick={() => logout()} to='/'><i className="fas fa-sign-out-alt" style={{ color: '#FFFFFF' }}></i></Nav.Link>
                    </>
                    :
                    <>
                        {/* <Nav.Link href="/signup">Signup</Nav.Link> */}
                        <Nav.Link href="/login"><i className="fas fa-sign-out-alt" style={{ color: '#FFFFFF' }}>login</i></Nav.Link>
                    </>
                }
            </Nav>
            {/* </Navbar> */}
        </div>
    );
};

export default MainNav;