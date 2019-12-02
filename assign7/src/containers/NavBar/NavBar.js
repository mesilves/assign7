import React from "react";
import { NavLink } from "react-router-dom";
import appRoutes from "../../shared/appRoutes";
import "./NavBar.css";
import Logo from "../../assets/imgs/star-wars-logo.png";


const NavBar = () => {
	return (
		<div>
			<nav className ="navbar navbar-expand-lg navbar-dark bg-dark">
				<div className="container">

					<button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
						<div className="collapse navbar-collapse" id="navbarSupportedContent">
							<ul className="navbar-nav mr-auto">
								<li className="nav-item">
									<NavLink className="nav-link" to={appRoutes.home} exact>
										Home
									</NavLink>
								</li>
								<li className="nav-item">
									<NavLink className="nav-link" to={appRoutes.hikers}>
										The Hikers
									</NavLink>
								</li>
								<li className="nav-item">
									<NavLink className="nav-link" to={appRoutes.timeline}>
										The Hike
									</NavLink>
								</li>
								<li className="nav-item">
									<NavLink className="nav-link" to={appRoutes.investigation}>
										The Investigation
									</NavLink>
								</li>
							</ul>
						</div>
						</div>
					</nav>
				</div>
				);
};
export default NavBar;
