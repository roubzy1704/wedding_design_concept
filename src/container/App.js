import React from "react";
import "./App.scss";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import Image3 from "../images/Image3.jpg";
import Image4 from "../images/Image4.jpg";
import Image5 from "../images/Image5.jpg";
import Image6 from "../images/Image6.jpg";
import Image7 from "../images/Image7.jpg";
import Image8 from "../images/Image8.jpg";
import Image9 from "../images/Image9.jpg";
import Image10 from "../images/Image10.jpg";
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
						<h1 style={{ paddingBottom: 10 }}>OUR STORY</h1>
						<h4 style={{ paddingBottom: 20 }}>LOVE AT FIRST BREW</h4>
						<div className="words">
							<p>
								Our love story began in Sydney, back in 2009. Harry was a
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
							<h1 style={{ paddingBottom: 20 }}>CEREMONY</h1>
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
						<h2 style={{ fontWeight: "bold", paddingBottom: 20 }}>
							ACCOMODATIONS
						</h2>

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
						<button type="button" class="btn btn-outline-info">
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
						<div className="container">
							<div
								class="row"
								id="gallery"
								data-toggle="modal"
								data-target="#exampleModal"
							>
								<div class="col-sm-12 col-md-6 col-lg-6">
									<img
										class="image rounded-lg border border-light w-100 mh-75 m-3"
										src={Image3}
										alt=""
										data-target="#carouselExample"
										data-slide-to="0"
									/>
								</div>
								<div class="col-sm-12 col-md-6 col-lg-6">
									<img
										class="image rounded-lg border border-light w-100 mh-75 m-3"
										src={Image4}
										alt=""
										data-target="#carouselExample"
										data-slide-to="1"
									/>
								</div>
								<div class="col-sm-12 col-md-6 col-lg-6">
									<img
										class="image rounded-lg border border-light  w-100  mh-75 m-3"
										src={Image5}
										alt=""
										data-target="#carouselExample"
										data-slide-to="2"
									/>
								</div>
								<div class="col-sm-12 col-md-6 col-lg-6">
									<img
										class="image rounded-lg border border-light w-100 mh-75 m-3"
										src={Image6}
										alt=""
										data-target="#carouselExample"
										data-slide-to="3"
									/>
								</div>
								<div class="col-sm-12 col-md-6 col-lg-6">
									<img
										class="image rounded-lg border border-light w-100 mh-75 m-3"
										src={Image7}
										alt=""
										data-target="#carouselExample"
										data-slide-to="4"
									/>
								</div>
								<div class="col-sm-12 col-md-6 col-lg-6">
									<img
										class="image rounded-lg border border-light w-100 mh-75 m-3"
										src={Image8}
										alt=""
										data-target="#carouselExample"
										data-slide-to="5"
									/>
								</div>
								<div class="col-sm-12 col-md-6 col-lg-6">
									<img
										class="image rounded-lg border border-light w-100 mh-75 m-3"
										src={Image9}
										alt=""
										data-target="#carouselExample"
										data-slide-to="6"
									/>
								</div>

								<div class="col-sm-12 col-md-6 col-lg-6">
									<img
										class="image rounded-lg border border-light mh-75 w-100 m-3"
										src={Image10}
										alt=""
										data-target="#carouselExample"
										data-slide-to="7"
									/>
								</div>
							</div>
						</div>
						<div
							class="modal fade"
							id="exampleModal"
							tabindex="-1"
							role="dialog"
							aria-hidden="true"
						>
							<div
								class="modal-dialog  modal-dialog-centered modal-xl"
								role="document"
							>
								<div class="modal-content">
									<div class="modal-body">
										<div
											id="carouselExample"
											class="carousel slide"
											data-ride="carousel"
										>
											<div class="carousel-inner">
												<div class="carousel-item active">
													<img class="d-block w-100" src={Image3} alt="" />
												</div>
												<div class="carousel-item">
													<img class="d-block w-100" src={Image4} alt="" />
												</div>
												<div class="carousel-item">
													<img class="d-block w-100" src={Image5} alt="" />
												</div>
												<div class="carousel-item">
													<img class="d-block w-100" src={Image6} alt="" />
												</div>
												<div class="carousel-item">
													<img class="d-block w-100" src={Image7} alt="" />
												</div>
												<div class="carousel-item">
													<img class="d-block w-100" src={Image8} alt="" />
												</div>
												<div class="carousel-item">
													<img class="d-block w-100" src={Image9} alt="" />
												</div>
												<div class="carousel-item">
													<img class="d-block w-100" src={Image10} alt="" />
												</div>
											</div>
											<a
												class="carousel-control-prev"
												href="#carouselExample"
												role="button"
												data-slide="prev"
											>
												<span
													class="carousel-control-prev-icon"
													aria-hidden="true"
												></span>
												<span class="sr-only">Previous</span>
											</a>
											<a
												class="carousel-control-next"
												href="#carouselExample"
												role="button"
												data-slide="next"
											>
												<span
													class="carousel-control-next-icon"
													aria-hidden="true"
												></span>
												<span class="sr-only">Next</span>
											</a>
										</div>

										<div class="modal-footer">
											<button
												type="button"
												class="btn btn-secondary"
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
					<h1 class="brown-font">REGISTRY</h1>
					<p class="brown-font">We have registries at the following stores:</p>
					<div class="container">
						<div class="row">
							<div class="col-sm-6 col-md-4 col-lg-3">
								<a href="https://www.amazon.com/wedding" target="_blank">
									<img
										class="img-thumbnail  m-3"
										src={amazon}
										alt="photo1"
										style={{ width: 200, height: 200 }}
									/>
								</a>
							</div>
							<div class="col-sm-6 col-md-4 col-lg-3">
								<a
									href="https://www.bedbathandbeyond.com/store/page/Registry/"
									target="_blank"
								>
									<img
										class="img-thumbnail  m-3"
										src={bbb}
										alt="photo2"
										style={{ width: 200, height: 200 }}
									/>
								</a>
							</div>
							<div class="col-sm-6 col-md-4 col-lg-3">
								<a
									href="https://www.target.com/gift-registry/wedding-registry"
									target="_blank"
								>
									<img
										class="img-thumbnail  m-3"
										src={target}
										alt="photo9"
										style={{ width: 200, height: 200 }}
									/>
								</a>
							</div>
							<div class="col-sm-6 col-md-4 col-lg-3">
								<a href="https://food52.com/shop/registry" target="_blank">
									<img
										class="img-thumbnail  m-3"
										src={food52}
										alt="photo4"
										style={{ width: 200, height: 200 }}
									/>
								</a>
							</div>
							<div class="col-sm-6 col-md-4 col-lg-3">
								<a
									href="https://www.macys.com/registry/wedding/registrysearch"
									target="_blank"
								>
									<img
										class="img-thumbnail  m-3"
										src={macys}
										alt="photo7"
										style={{ width: 200, height: 200 }}
									/>
								</a>
							</div>
							<div class="col-sm-6 col-md-4 col-lg-3">
								<a
									href="https://www.crateandbarrel.com/gift-registry/"
									target="_blank"
								>
									<img
										class="img-thumbnail  m-3"
										src={crateandbarrel}
										alt="photo3"
										style={{ width: 200, height: 200 }}
									/>
								</a>
							</div>
							<div class="col-sm-6 col-md-4 col-lg-3">
								<a href="https://www.wayfair.com/registry" target="_blank">
									<img
										class="img-thumbnail  m-3"
										src={wayfair}
										alt="photo12"
										style={{ width: 200, height: 200 }}
									/>
								</a>
							</div>
							<div class="col-sm-6 col-md-4 col-lg-3">
								<a href="https://www.zola.com/" target="_blank">
									<img
										class="img-thumbnail  m-3"
										src={zola}
										alt="photo13"
										style={{ width: 200, height: 200 }}
									/>
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default App;
