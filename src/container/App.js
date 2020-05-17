import React from "react";
import "./App.scss";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import Image2 from "../images/Image2.jpg";
import Image3 from "../images/Image3.jpg";
import Image4 from "../images/Image4.jpg";
import Image5 from "../images/Image5.jpg";
import Image6 from "../images/Image6.jpg";
import Image7 from "../images/Image7.jpg";
import Image8 from "../images/Image8.jpg";
import Image9 from "../images/Image9.jpg";

import amazon from "../Logos/amazon-logo.png";
import bbb from "../Logos/bedBathBeyond.png";
import target from "../Logos/target.png";
import food52 from "../Logos/food52.png";
import macys from "../Logos/macys.png";
import crateandbarrel from "../Logos/crateandbarrel.png";
import wayfair from "../Logos/wayfair.png";
import zola from "../Logos/zola.png";

function App() {
	return (
		<div className="App ">
			<header id="intro">
				<NavBar />
				<div className="introText">
					<h2>Kate and Benjamin</h2>
					<h4>
						May 12th, 2021 &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; Lake Geneva,
						Wisconsin
					</h4>
				</div>
			</header>
			<section>
				<div id="story">
					<div className="container">
						<h1 style={{ paddingBottom: 10, fontWeight: "bold" }}>OUR STORY</h1>
						<h4 style={{ paddingBottom: 20 }}>LOVE AT FIRST BREW</h4>
						<div className="words">
							<p>
								Our love story began in Sydney, back in 2015. Harry was a
								frequent customer at Little Peach Cafe, where Sally served up
								his morning cappuccino. Some flirtatious banter was exchanged
								back and forth over the coffee machine for weeks
							</p>
							<p>
								6 years worth of memories later and we’ve backpacked through
								India, renovated our dream home and introduced 2 furry pups to
								our family. A few months ago Benjamin finally popped the
								question over coffee and croissants, back at our favourite cafe
								where it all began, and Kate said yes. We can’t wait for this
								exciting new chapter to begin!
							</p>
						</div>
					</div>
				</div>
				<div id="ceremony">
					<div className="container">
						<div className="blurredPhoto"></div>
						<div>
							<h1 style={{ paddingBottom: 20, fontWeight: "bold" }}>
								CEREMONY
							</h1>
							<div>
								<p style={{ paddingBottom: 10 }}>
									We're going to have a casual ceremony on the beach in South
									Padre where we had our first vacation together, followed by
									dinner and drinks at downtown in Sugarland. Dress comfortably,
									and come prepared to dance!
								</p>
							</div>
							<div>
								<h3 style={{ paddingBottom: 10 }}>THE "I DO'S"</h3>
								<p>3:00p – 4:00pm</p>
								<p>Pier 11 at Fletcher Beach</p>
								<p style={{ paddingBottom: 10 }}>Montauk, NY</p>
								<h3 style={{ paddingBottom: 10 }}>THE AFTER PARTY</h3>
								<p>5:00p – 11:00pm</p>
								<p>The Armory</p>
								<p>866 Soundview Dr.</p>
								<p>East Hampton, NY</p>
							</div>
						</div>
					</div>
				</div>
				<div id="accomodations">
					<div className="container">
						<h1 style={{ fontWeight: "bold", paddingBottom: 20 }}>HOTEL</h1>

						<p style={{ paddingBottom: 10 }}>
							Blocks of rooms have been reserved at the Hilton Hill Hotel.
							Several types of rooms will be available, so rates will vary.
							Mention the Parker - Robinson wedding to receive the wedding group
							discount.
						</p>

						<div>
							<h3>Hilton Hill Hotel</h3>
							<p>62 Cross Highway</p>
							<p>Sugarland, TX</p>
							<p>(281) 555 - 0123</p>
						</div>
						<button type="button" className="btn btn-outline-info">
							BOOK ONLINE
						</button>
					</div>
				</div>
				<div id="photos">
					<div className="container">
						<h1 style={{ fontWeight: "bold" }}>PHOTOS</h1>
						<p style={{ paddingBottom: 10 }}>
							Thanks to Julia Robbs for taking these beautiful photos!
						</p>
						<div className="container ">
							<div
								className="row "
								id="gallery"
								data-toggle="modal"
								data-target="#exampleModal"
							>
								<div className="col-sm-12 col-md-6 col-lg-6 justify-content-center">
									<img
										className="image rounded-lg border border-light w-100 mh-75 m-3"
										src={Image2}
										alt=""
										data-target="#carouselExample"
										data-slide-to="0"
									/>
								</div>
								<div className="col-sm-12 col-md-6 col-lg-6">
									<img
										className="image rounded-lg border border-light w-100 mh-75 m-3"
										src={Image3}
										alt=""
										data-target="#carouselExample"
										data-slide-to="1"
									/>
								</div>
								<div className="col-sm-12 col-md-6 col-lg-6">
									<img
										className="image rounded-lg border border-light  w-100  mh-75 m-3"
										src={Image4}
										alt=""
										data-target="#carouselExample"
										data-slide-to="2"
									/>
								</div>
								<div className="col-sm-12 col-md-6 col-lg-6">
									<img
										className="image rounded-lg border border-light w-100 mh-75 m-3"
										src={Image5}
										alt=""
										data-target="#carouselExample"
										data-slide-to="3"
									/>
								</div>
								<div className="col-sm-12 col-md-6 col-lg-6">
									<img
										className="image rounded-lg border border-light w-100 mh-75 m-3"
										src={Image6}
										alt=""
										data-target="#carouselExample"
										data-slide-to="4"
									/>
								</div>
								<div className="col-sm-12 col-md-6 col-lg-6">
									<img
										className="image rounded-lg border border-light w-100 mh-75 m-3"
										src={Image7}
										alt=""
										data-target="#carouselExample"
										data-slide-to="5"
									/>
								</div>
								<div className="col-sm-12 col-md-6 col-lg-6">
									<img
										className="image rounded-lg border border-light w-100 mh-75 m-3"
										src={Image8}
										alt=""
										data-target="#carouselExample"
										data-slide-to="6"
									/>
								</div>

								<div className="col-sm-12 col-md-6 col-lg-6">
									<img
										className="image rounded-lg border border-light mh-75 w-100 m-3"
										src={Image9}
										alt=""
										data-target="#carouselExample"
										data-slide-to="7"
									/>
								</div>
							</div>
						</div>
						<div
							className="modal fade"
							id="exampleModal"
							tabindex="-1"
							role="dialog"
							aria-hidden="true"
						>
							<div
								className="modal-dialog  modal-dialog-centered modal-xl"
								role="document"
							>
								<div className="modal-content">
									<div className="modal-body">
										<div
											id="carouselExample"
											className="carousel slide"
											data-ride="carousel"
										>
											<div className="carousel-inner">
												<div className="carousel-item active">
													<img className="d-block w-100" src={Image2} alt="" />
												</div>
												<div className="carousel-item">
													<img className="d-block w-100" src={Image3} alt="" />
												</div>
												<div className="carousel-item">
													<img className="d-block w-100" src={Image4} alt="" />
												</div>
												<div className="carousel-item">
													<img className="d-block w-100" src={Image5} alt="" />
												</div>
												<div className="carousel-item">
													<img className="d-block w-100" src={Image6} alt="" />
												</div>
												<div className="carousel-item">
													<img className="d-block w-100" src={Image7} alt="" />
												</div>
												<div className="carousel-item">
													<img className="d-block w-100" src={Image8} alt="" />
												</div>
												<div className="carousel-item">
													<img className="d-block w-100" src={Image9} alt="" />
												</div>
											</div>
											<a
												className="carousel-control-prev"
												href="#carouselExample"
												role="button"
												data-slide="prev"
											>
												<span
													className="carousel-control-prev-icon"
													aria-hidden="true"
												></span>
												<span className="sr-only">Previous</span>
											</a>
											<a
												className="carousel-control-next"
												href="#carouselExample"
												role="button"
												data-slide="next"
											>
												<span
													className="carousel-control-next-icon"
													aria-hidden="true"
												></span>
												<span className="sr-only">Next</span>
											</a>
										</div>

										<div className="modal-footer">
											<button
												type="button"
												className="btn btn-secondary"
												data-dismiss="modal"
											>
												Close
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div id="registry">
					<div className="container">
						<h1 style={{ fontWeight: "bold" }}>REGISTRY</h1>
						<p>We have registries at the following stores:</p>
						<div className="container">
							<div className="row">
								<div className="col-sm-6 col-md-4 col-lg-3">
									<a
										href="https://www.amazon.com/wedding"
										target="_blank"
										rel="noopener noreferrer"
									>
										<img
											className="shadow-lg p-1 bg-white rounded m-3"
											src={amazon}
											alt="photo1"
											style={{ width: 150, height: 150 }}
										/>
									</a>
								</div>
								<div className="col-sm-6 col-md-4 col-lg-3">
									<a
										href="https://www.bedbathandbeyond.com/store/page/Registry/"
										target="_blank"
										rel="noopener noreferrer"
									>
										<img
											className="shadow-lg p-3 bg-white  m-3"
											src={bbb}
											alt="photo2"
											style={{ width: 150, height: 150 }}
										/>
									</a>
								</div>
								<div className="col-sm-6 col-md-4 col-lg-3">
									<a
										href="https://www.target.com/gift-registry/wedding-registry"
										target="_blank"
										rel="noopener noreferrer"
									>
										<img
											className="shadow-lg p-3 bg-white  m-3"
											src={target}
											alt="photo9"
											style={{ width: 150, height: 150 }}
										/>
									</a>
								</div>
								<div className="col-sm-6 col-md-4 col-lg-3">
									<a
										href="https://food52.com/shop/registry"
										target="_blank"
										rel="noopener noreferrer"
									>
										<img
											className="shadow-lg p-2 bg-white m-3"
											src={food52}
											alt="photo4"
											style={{ width: 150, height: 150 }}
										/>
									</a>
								</div>
								<div className="col-sm-6 col-md-4 col-lg-3">
									<a
										href="https://www.macys.com/registry/wedding/registrysearch"
										target="_blank"
										rel="noopener noreferrer"
									>
										<img
											className="shadow-lg p-2 bg-white m-3"
											src={macys}
											alt="photo7"
											style={{ width: 150, height: 150 }}
										/>
									</a>
								</div>
								<div className="col-sm-6 col-md-4 col-lg-3">
									<a
										href="https://www.crateandbarrel.com/gift-registry/"
										target="_blank"
										rel="noopener noreferrer"
									>
										<img
											className="shadow-lg p-2 bg-white m-3"
											src={crateandbarrel}
											alt="photo3"
											style={{ width: 150, height: 150 }}
										/>
									</a>
								</div>
								<div className="col-sm-6 col-md-4 col-lg-3">
									<a
										href="https://www.wayfair.com/registry"
										target="_blank"
										rel="noopener noreferrer"
									>
										<img
											className="shadow-lg p-2 bg-white m-3"
											src={wayfair}
											alt="photo12"
											style={{ width: 150, height: 150 }}
										/>
									</a>
								</div>
								<div className="col-sm-6 col-md-4 col-lg-3">
									<a
										href="https://www.zola.com/"
										target="_blank"
										rel="noopener noreferrer"
									>
										<img
											className="shadow-lg p-3 bg-white m-3"
											src={zola}
											alt="photo13"
											style={{ width: 150, height: 150 }}
										/>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</div>
	);
}

export default App;
