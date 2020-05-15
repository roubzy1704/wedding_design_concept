import React from "react";
import "./Footer.scss";

const Footer = () => {
	return (
		<div className="Footer">
			<h3> #KateLovesBenjamin</h3>
			<p>
				2020 <i class="fas fa-code"></i> by{" "}
				<a
					href="https://www.ugoarubaleze.com"
					target="_blank"
					rel="noopener noreferrer"
					style={{ textDecoration: "none" }}
				>
					<span className="myName">Ugo Arubaleze</span>
				</a>
			</p>
		</div>
	);
};

export default Footer;
