import React from 'react'
import '../../../assets/styles/header.css'

function MainPageHeader() {
	return (
		<div>
			<section className='header_area'>
				<div className='header_top'>
					<div className='container'>
						<div className='header_top_wrapper d-flex justify-content-center justify-content-md-between'>
							<div className='header_top_info d-none d-md-block'>
								<ul>
									<li>
										<img
											src={require('../../../assets/images/call.png')}
											alt='call'
										/>
										<a href='https://wpsprite.com/html/edustdy/edustdy/index.html#'>
											+84 93 748 74 89{' '}
										</a>
									</li>
									<li>
										<img
											src={require('../../../assets/images/mail.png')}
											alt='mail'
										/>
										<a href='https://wpsprite.com/html/edustdy/edustdy/index.html#'>
											info@example.com
										</a>
									</li>
								</ul>
							</div>
							<div className='header_top_login'>
								<ul>
									<li>
										<a href='https://wpsprite.com/html/edustdy/edustdy/index.html#'>
											Tạo tài khoản
										</a>
									</li>
									<li>
										<a
											className='main-btn'
											href='https://wpsprite.com/html/edustdy/edustdy/index.html#'>
											<i className='fa fa-user-o' /> Đăng nhập
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className='header_menu'>
					<div className='container'>
						<nav className='navbar navbar-expand-lg'>
							<a className='navbar-brand hr-logo' href='index.html'>
								<img src={require('../../../assets/images/logo.png')} alt='logo' />
								Happy Reader
							</a>
							<button
								className='navbar-toggler'
								type='button'
								data-toggle='collapse'
								data-target='#navbarSupportedContent'
								aria-controls='navbarSupportedContent'
								aria-expanded='false'
								aria-label='Toggle navigation'>
								<span className='toggler-icon' />
								<span className='toggler-icon' />
								<span className='toggler-icon' />
							</button>
							<div
								className='collapse navbar-collapse sub-menu-bar'
								id='navbarSupportedContent'>
								<ul className='navbar-nav m-auto'>
									<li>
										<a href='index.html'>
											Trang chủ <i className='fa fa-chevron-down' />
										</a>
									</li>
									<li>
										<a className='active' href='about.html'>
											Giới thiệu
										</a>
									</li>
									<li>
										<a href='workshop.html'>
											Workshop <i className='fa fa-chevron-down' />
										</a>
										<ul className='sub-menu'>
											<li>
												<a href='workshop.html'>Workshop</a>
											</li>
											<li>
												<a href='workshop-details.html'>Chi tiết</a>
											</li>
										</ul>
									</li>
									<li>
										<a href='blog.html'>
											Blog <i className='fa fa-chevron-down' />
										</a>
										<ul className='sub-menu'>
											<li>
												<a href='blog.html'>Blog</a>
											</li>
											<li>
												<a href='blog-details.html'>Chi tiết</a>
											</li>
										</ul>
									</li>
									<li>
										<a href='groupwork.html'>
											Nhóm đọc <i className='fa fa-chevron-down' />
										</a>
										<ul className='sub-menu'>
											<li>
												<a href='groupwork.html.html'>Nhóm đọc</a>
											</li>
											<li>
												<a href='groupWorkDetails.html'>Chi tiết</a>
											</li>
										</ul>
									</li>
									<li>
										<a href='material.html'>
											Thư viện <i className='fa fa-chevron-down' />
										</a>
									</li>
									<li>
										<a href='contact.html'>Liên hệ</a>
									</li>
								</ul>
							</div>
							<div className='navbar_meta'>
								<ul>
									<li>
										<a
											id='search'
											href='https://wpsprite.com/html/edustdy/edustdy/index.html#'>
											<img
												src={require('../../../assets/images/search.png')}
												alt='search'
											/>
										</a>
										<div className='search_bar'>
											<input type='text' placeholder='Search' />
											<button>
												<i className='fa fa-search' />
											</button>
										</div>
									</li>
								</ul>
							</div>
						</nav>
					</div>
				</div>
			</section>
			
		</div>
	)
}

export default MainPageHeader
