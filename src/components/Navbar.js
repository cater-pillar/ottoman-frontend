import {Link} from 'react-router-dom'

const Navbar = () => {
    const navbar = [
        {   
            id: 1,
            link: '/',
            text: 'Home'
        },
        {
            id: 2,
            link: '/input-form',
            text: 'Input Form'
        },
        {
            id: 3,
            link: '/browse-households',
            text: 'Browse Households'
        },
        {
            id: 4,
            link: '/last-added',
            text: 'Last Added'
        },
        {
            id: 5,
            link: '/household-list',
            text: 'Household List'
        }
    ]

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="nav nav-pills">
                {navbar.map( (nav) =>
                    <li key={nav.id} className="nav-item"> 
                        <Link to={nav.link} 
                           className="nav-link">
                               {nav.text}
                        </Link> 
                    </li>
                )}
           </ul>
        </nav>
    )
}

export default Navbar
