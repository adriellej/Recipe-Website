
const Navbar = () => {
	return (
		<div className='navbar_container'> 
			<div className='navbar_list'>
				<a href="#">Home</a>
				<a href="#">Favorites</a>
				<a href="#" className='active'>Your Recipes</a>
				<a href="#">Discover</a>
			</div>
		</div>
	)
}

export default Navbar;