import React from 'react';
import '../../../assets/styles/features.css'
import FeatureIcon1 from '../../../assets/images/f-icon-1.png'
import FeatureIcon2 from '../../../assets/images/f-icon-2.png'
import FeatureIcon3 from '../../../assets/images/f-icon-3.png'

const KeyFeatures = () => {
    return (
			<section className='features_area '>
				<div className='container'>
					<div className='features_wrapper'>
						<div className='row no-gutters'>
							<div className='col-md-4 features_col'>
								<div
									className='single_features text-center'
									style={{ backgroundColor: '#ff0000' }}>
									<div className='features_icon'>
										<img src={FeatureIcon1} alt='Icon'></img>
									</div>
									<div className='features_content'>
										<h4 className='features_title'>
											Giáo viên bản địa
										</h4>
										<p>
											Mô hình do giáo viên Mỹ, Canada thiết kế và trực tiếp giảng dạy giúp trẻ sử dụng tiếng Anh như tiếng mẹ đẻ.
										</p>
									</div>
								</div>
							</div>
							<div className='col-md-4 features_col'>
								<div
									className='single_features text-center'
									style={{ backgroundColor: '#F7C74F' }}>
									<div className='features_icon'>
										<img src={FeatureIcon2} alt='Icon'></img>
									</div>
									<div className='features_content'>
										<h4 className='features_title'>
										Phương pháp hiện đại
										</h4>
										<p>
											Liên tục cập nhật những phương pháp mới nhất giúp trẻ đọc thẩm thấu và phát triển vốn từ một cách tự nhiên.
										</p>
									</div>
								</div>
							</div>
							<div className='col-md-4 features_col'>
								<div
									className='single_features text-center'
									style={{ backgroundColor: '#55CFB2' }}>
									<div className='features_icon'>
										<img src={FeatureIcon3}></img>
									</div>
									<div className='features_content'>
										<h4 className='features_title'>
										Chương trình quy chuẩn	
										</h4>
										<p>
											Danh mục sách đọc đa dạng, nội dung bổ ích. Bên cạnh còn có kho tài liệu đa dạng giúp phát triển đầy đủ 4 kỹ năng. 
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		)
}

export default KeyFeatures
