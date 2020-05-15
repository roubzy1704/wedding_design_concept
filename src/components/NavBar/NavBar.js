import React, { useEffect } from "react";
import $ from "jquery";
import "./NavBar.scss";

function NavBar() {
	// //toggles the class is-active on both the navbar-burger and the targeted navbar-menu
	// document.addEventListener("DOMContentLoaded", () => {
	// 	// Get all "navbar-burger" elements
	// 	const $navbarBurgers = Array.prototype.slice.call(
	// 		document.querySelectorAll(".navbar-burger"),
	// 		0
	// 	);
	// 	// Check if there are any navbar burgers
	// 	if ($navbarBurgers.length > 0) {
	// 		// Add a click event on each of them
	// 		$navbarBurgers.forEach((el) => {
	// 			el.addEventListener("click", () => {
	// 				// Get the target from the "data-target" attribute
	// 				const target = el.dataset.target;
	// 				const $target = document.getElementById(target);

	// 				// Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
	// 				el.classList.toggle("is-active");
	// 				$target.classList.toggle("is-active");
	// 			});
	// 		});
	// 	}
	// });
	// useEffect(() => {
	// 	// console.log(document.getElementsByClassName("active")[0]);
	// 	// document.getElementsByClassName("active")[0].classList.remove("active");
	// 	// document.querySelectorAll("li")[0].classList.add("active");
	// });
	// console.log(document.getElementsByClassName("active")[0]);
	//document.getElementsByClassName("active")[0].classList.remove("active");
	//document.querySelectorAll("li")[0].classList.add("active");

	// document.addEventListener("DOMContentLoaded", () => {
	// 	const navburger = Array.prototype.slice.call(
	// 		document.querySelectorAll("navbar-toggler"),
	// 		0
	// 	);
	// 	if (navburger.length > 0) {
	// 		console.log("yes");
	// 	}
	// });

	// Applies the navBarChangeOnScroll class to the navbar, when the window.scrollTop is greater than 600
	// using JQuery, since this was the only a solution i Found, doing it with dom required using useEffect
	// but could not get the scrollTop to work
	$(document).ready(function () {
		$(window).scroll(function () {
			if ($(window).scrollTop() > 800) {
				//using Jquery
				$(".navbar").addClass("navBarChangeOnScroll");
				//using DOM manipulation
				// document
				// 	.getElementsByClassName("navbar")[0]
				// 	.classList.add("navBarChangeOnScroll");
			} else {
				//using DOM Manipulation
				document
					.getElementsByClassName("navbar")[0]
					.classList.remove("navBarChangeOnScroll");
			}
		});
	});

	return (
		<nav class="navbar fixed-top navbar-expand-lg navbar-light ">
			<a class="navbar-brand" href="#intro">
				Kate&Ben
			</a>
			<button
				class="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>

			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav mr-auto ">
					<li class="nav-item">
						<a class="nav-link" href="#story">
							OUR STORY <span class="sr-only"></span>
						</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#ceremony">
							CEREMONY <span class="sr-only"></span>
						</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#accomodations">
							ACCOMODATIONS <span class="sr-only"></span>
						</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#photos">
							PHOTOS <span class="sr-only"></span>
						</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#registry">
							REGISTRY <span class="sr-only"></span>
						</a>
					</li>
				</ul>

				<a
					class="btn  RSVPButton"
					href="https://rsvpify.com/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<strong>RSVP</strong>
				</a>
			</div>
		</nav>
	);
}

export default NavBar;
