import './NavBar.css'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Dropdown from 'react-bootstrap/Dropdown'
import 'bootstrap/dist/css/bootstrap.min.css'
import CardWidget from './CartWidget/CardWidget'
import { useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {
	/* Burger menu
    const burger = () => {
    var burger = document.getElementsByClassName('burger');
    var links = document.getElementById('links');
    var quit = document.getElementById('quit');
    burger.style.padding = '16px 16px 200vw 200vw';
    links.style.display = 'flex';
    quit.style.display = 'inline';
  }
  
  function quit(){
    var burger = document.getElementsByClassName('burger');
    var links = document.getElementById('links');
    var quit = document.getElementById('quit');
    burger.style.padding = '16px 16px 32px 32px';
    links.style.display = 'none';
    quit.style.display = 'none';
  } */

	useEffect(() => {
		let progress = document.getElementById('progressbar')
		let totalHeight = document.body.scrollHeight - window.innerHeight
		window.onscroll = () => {
			let progressHeight = (window.pageYOffset / totalHeight) * 100
			progress.style.width = progressHeight + '%'
		}
	}, [])

	return (
		<>
			<header className='navbar row col-12 desk'>
				<Link  className='col-2' to='/'>
					<h1 className='col-12 nombre'>Escala</h1>
				</Link>
				<div className='col-6 row align'>
					<Dropdown menualign='center' className='col-2 align links'>

						<NavLink activeClassName='activeNav' to='/category/cursos'>
							<Dropdown.Toggle variant='success' id='dropdown-basic'>
								Cursos{' '}
								<FontAwesomeIcon
									style={{ marginLeft: '5px', fontSize: '15px' }}
									icon={faChevronDown}
								/>
							</Dropdown.Toggle>
						</NavLink>

						<Dropdown.Menu id='dropdown-menu'>
							<Dropdown.Item href='#/action-1'>Action</Dropdown.Item>
							<Dropdown.Item href='#/action-2'>Another action</Dropdown.Item>
							<Dropdown.Item href='#/action-3'>Something else</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
					<Dropdown menualign='center' className='col-2 align links'>
						<Link to='/category/recursos'>
							<Dropdown.Toggle variant='success' id='dropdown-basic'>
								Recursos{' '}
								<FontAwesomeIcon
									style={{ marginLeft: '5px', fontSize: '15px' }}
									icon={faChevronDown}
								/>
							</Dropdown.Toggle>

							<Dropdown.Menu>
								<Dropdown.Item href='#/action-1'>Action</Dropdown.Item>
								<Dropdown.Item href='#/action-2'>Another action</Dropdown.Item>
								<Dropdown.Item href='#/action-3'>Something else</Dropdown.Item>
							</Dropdown.Menu>
						</Link>
					</Dropdown>
					<h2 className='col-2 align links'>
						<a className='navLinks' href='#contacto'>
							{' '}
							Formacion
						</a>
					</h2>
					<h2 className='col-2 align links'>
						<a className='navLinks' href='#estudios1'>
							{' '}
							Nosotros
						</a>
					</h2>
					<h2 className='col-2 align links'>
						<a className='navLinks' href='#estudios1'>
							{' '}
							Contacto
						</a>
					</h2>
					<CardWidget />
				</div>
				<a
					className='col-2'
					style={{
						justifyContent: 'flex-end',
						display: 'flex',
						textDecoration: 'none',
					}}
					href='https://fedecolombo1.github.io/Home/'
				>
					<button style={{ marginRight: '6%' }} className='col-6 botonC'>
						Ver Cursos
					</button>
				</a>
				<div id='progressbar2'></div>
			</header>

			<header className='col-12 align mobile'>
				<nav className='col-4 align navbar'>
					<div className='menu-mobile'>
						<button id='bt-menu-mobile'>
							<span className='top'></span>
							<span className='middle'></span>
							<span className='bottom'></span>
						</button>
						<div className='clear'></div>
					</div>
					<div id='links'>
						<a href='/null'>Home</a>
						<NavLink activeClassName='activeNav' to='/category/cursos'>
							Cursos
						</NavLink>
						<a href='/null'>Contact</a>
					</div>
				</nav>

				<NavLink activeClassName='activeNav' className='col-4 row align nombre' to='/'>
					Escala
				</NavLink>

				<CardWidget />
			</header>

			<div id='progressbar'></div>
		</>
	)
}

export default NavBar
