import React, { useState, useContext } from 'react'
import Axios from 'axios'
import { FirebaseContext } from '../../Firebase'

import '../../../assets/styles/contact.css'

const ContactForm = () => {
	const [formData, setFormData] = useState({})
	const firebase = useContext(FirebaseContext)

	const updateInput = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		})
	}
	const handleSubmit = (event) => {
		event.preventDefault()
		sendEmail()
		setFormData({
			name: '',
			email: '',
			message: '',
		})
	}
	const sendEmail = () => {
		Axios.post(
			'https://us-central1-happy-readers-89709.cloudfunctions.net/submit',
			formData,
		)
			.then((res) => {
				if (res.status === 200) {
					firebase.cloudDB.collection('emails').add(formData)
						.then(res => console.log('Contact added'))
				}

			})
			.catch(err => console.log(err))

	}

	return (
		<>
			<section className='contact_area pt-80 pb-130'>
				<div
					className='services_shape_1'
					style={{
						backgroundImage: 'url(../../assets/images/shape/shape-12.png)',
					}}
				/>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-8'>
							<div className='contact_form mt-40'>
								<div className='row'>
									<div className='col-lg-10'>
										<div className='section_title pb-50'>
											<h3 className='main_title'>
												Tham gia cùng Happy Readers?
											</h3>
											<p>
												Với nhiều hoạt động phong phú theo sự kiện và nhóm đọc định kỳ, Happy Readers luôn hoang nghênh chào đón quý phụ huynh, các em nhỏ, và các bạn sinh viên yêu thích các hoạt động liên quan đến giáo dục cho trẻ. Bạn có thể đồng hành cùng Happy Readers với nhiều hình thức.
											</p>
										</div>
										<div className='section_title pb-50'>
											<h4 className='blog_title'>Đăng ký tham gia nhóm đọc</h4>
											<p>
												Nhóm đọc dành cho trẻ ở mọi độ tuổi. Danh sách điểm sinh hoạt của Happy Readers hiện tại:
												<br/><br/>
											</p>
											<ul>
												<li><i className="fa fa-check"></i> Quận Phú Nhuận, TP.HCM</li>
												<li><i className="fa fa-check"></i> Quận 1, TP.HCM</li>
												<li><i className="fa fa-check"></i> Quận Bình Thạnh, TP.HCM</li>
												<li><i className="fa fa-check"></i> Quận Tân Phú, TP.HCM</li>
												<li><i className="fa fa-check"></i> Quận Gò Vấp, TP.HCM</li>
												<li><i className="fa fa-check"></i> Quận Thủ Đức, TP.HCM</li>
												<li><i className="fa fa-check"></i> Quận Tân Bình, TP.HCM</li>
											</ul>
										</div>
										<div className='section_title pb-50'>
											<h4 className='blog_title'>Hỗ trợ mở điểm đọc</h4>
											<p>
												Quý phụ huynh quan tâm đồng hành cùng Happy Readers nhân rộng hoạt động đọc sách cho trẻ em trong cộng đồng có thể liên hệ với Happy Readers để trao đổi thêm. 
											</p>
										</div>
										<div className='section_title pb-50'>
											<h4 className='blog_title'>Tặng - đổi sách</h4>
											<p>
												Với mong muốn mở rộng kho tài liệu đọc cho trẻ em, Happy Readers thực hiện chương trình tặng sách và trao đổi sách. Xin vui lòng liên hệ để biết thêm chi tiết về cách thức hoạt động.
											</p>
										</div>
										<div className='section_title pb-50'>
											<h4 className='blog_title'>Tình nguyện viên</h4>
											<p>
												Dành cho các bạn sinh viên, phụ huynh yêu thích các hoạt động cho trẻ em. Với hoạt động tình nguyện này, bạn sẽ góp phần hỗ trợ phát huy văn hóa đọc và giáo dục trẻ em thông qua việc đọc trong cộng đồng.
											</p>
										</div>
										<div className='section_title pb-50'>
											<h4 className='blog_title'>Thực tập sinh</h4>
											<p>
												Các bạn sinh viên muốn có thêm kinh nghiệm và học hỏi kỹ năng mới luôn được khuyến khích tại Happy Readers. Vị trí thực tập đa dạng về lĩnh vực truyền thông số, phát triển nội dung, tổ chức sự kiện,...giúp các bạn có được kinh nghiệm thực tiễn và nâng cao kỹ năng trong công việc tương lai. 
											</p>
										</div>
									</div>
								</div>
								<form onSubmit={handleSubmit}>
									<div className='row'>
										<div className='col-md-6'>
											<div className='single_form'>
												<input
													type='text'
													name='name'
													placeholder='Họ và tên'
													onChange={updateInput}
													value={formData.name || ''}
												/>
											</div>{' '}
											{/* single form */}
										</div>
										<div className='col-md-6'>
											<div className='single_form'>
												<input
													type='email'
													name='email'
													placeholder='Email'
													onChange={updateInput}
													value={formData.email || ''}
												/>
											</div>{' '}
											{/* single form */}
										</div>

										<div className='col-md-12'>
											{' '}
											<div className='single_form'>
												<textarea
													className='form-control'
													name='message'
													rows='3'
													placeholder='Lời nhắn'
													onChange={updateInput}
													value={formData.message || ''}></textarea>
											</div>{' '}
											{/* single form */}
										</div>
										<div className='col-md-12'>
											<div className='single_form'>
												<button type='submit' className='main-btn'>
													Gởi
												</button>
											</div>{' '}
											{/* single form */}
										</div>
									</div>{' '}
									{/* row */}
								</form>
							</div>{' '}
							{/* contact form */}
						</div>
						<div className='col-lg-4'>
							<div className='contact_info pt-20'>
								<ul>
									<li>
										<div className='single_info d-flex align-items-center mt-30'>
											<div className='info_icon'>
												<i className='fa fa-home' />
											</div>
											<div className='info_content media-body'>
												<p>
													8 Đường Trần Huy Liệu
													<br />
													Tp Hồ Chí Minh, Việt Nam
												</p>
											</div>
										</div>{' '}
										{/* single info */}
									</li>
									<li>
										<div className='single_info d-flex align-items-center mt-30'>
											<div className='info_icon'>
												<i className='fa fa-phone' />
											</div>
											<div className='info_content media-body'>
												<p>+84 93 748 74 89 (Duyên)</p>
											</div>
										</div>{' '}
										{/* single info */}
									</li>
									<li>
										<div className='single_info d-flex align-items-center mt-30'>
											<div className='info_icon'>
												<i className='fa fa-envelope' />
											</div>
											<div className='info_content media-body'>
												<p>smile@happyreaders.vn</p>
											</div>
										</div>{' '}
									</li>
								</ul>
							</div>{' '}
							<div className='contact_map mt-50'>
								<div className='gmap_canvas'>
									<iframe
										id='gmap_canvas'
										src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.26621284372!2d106.6762143152651!3d10.790911261875792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528d53047c6f9%3A0x771391ded5aee0db!2zOCBUcuG6p24gSHV5IExp4buHdSwgUGjGsOG7nW5nIDEyLCBQaMO6IE5odeG6rW4sIEjhu5MgQ2jDrSBNaW5oLCBWaWV0bmFt!5e0!3m2!1sfi!2sfi!4v1587731910119!5m2!1sfi!2sfi" 
										frameBorder={0}
										scrolling='no'
										marginHeight={0}
										marginWidth={0}
										title='Google maps'
									/>
								</div>
							</div>{' '}
						</div>
					</div>{' '}
					{/* row */}
				</div>{' '}
				{/* container */}
			</section>
		</>
	)
}
export default ContactForm
