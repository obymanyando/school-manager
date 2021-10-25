/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import '../../../assets/styles/toggleQA.css';

function ToggleQA() {
  return (
    <div className="row">
      <div className="col-lg-12 order-lg-first mt-50">
        <div className="courses_details_content">
          <div className="courses_curriculum mt-50">
            <div className="courses_top_bar d-sm-flex justify-content-between align-items-center">
              <div className="courses_title">
                <h4 className="courses_details_title">Q&amp;A</h4>
              </div>
            </div>
            <div className="accordion" id="accordionExample">
              <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      HRs có phải là trung tâm anh ngữ?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      HRs không phải là trung tâm anh ngữ. HRs là cộng đồng đọc sách bằng tiếng anh. Bước đầu tiên, các bạn sẽ được hướng dẫn đọc chủ động từ những hợp âm cơ bản ban đầu. Khi đã có thể đọc được, các bạn nhỏ sẽ được tiếp cận sách là chủ yếu. Thông qua quá trình đọc các thể loại sách khác nhau như Phonics, truyện cổ tích, truyện hằng ngày, sách khoa học, kỹ năng sống, các bạn sẽ phát triển các kỹ năng nghe, đọc để thấm thấu lượng kiến thức, nhân sinh quan bên ngoài. Từ đó, tiêu hoá thành tri thức thức của riêng mình mà biểu hiện cụ thể bên ngoài bằng Nói và Viết. Bên cạnh đó, các bạn  HRs sẽ từng bước xây dựng kho từ vựng và kho văn phạm mỗi ngày 1 chút.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      HRs không phải là trung tâm anh ngữ, vậy cơ chế hoạt động có giống 1 trung tâm không?!
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      Cơ chế hoạt động của Hrs không hoạt động như 1 trung tâm, không hạch toán thu chi lãi lỗ. Cộng đồng Happy Readers từ khi ra đời đến nay dựa trên cơ chế yêu thương và phụ huynh cùng chung tay vun đắp cho tuổi thơ trọn vẹn của các bạn HRs. Các bậc phụ huynh ngay từ đầu đã cùng muốn xây dựng một sân chơi lành mạnh cho các bạn, kết nối hết mức với tuổi thơ của các bạn để cùng xây dựng cho các bạn nhân cách khỏe mạnh và trái tim yêu thương.
                      Trong quá trình hoạt động, sẽ không thoát khỏi những thiếu sót, sự thiếu chuyên nghiệp… rất mong quý phụ huynh dùng tình cảm mà cùng xây dựng đóng góp để cộng đồng ngày càng phát triển và chỉnh chu hơn.

                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      Tại sao nhóm đọc sách lại tạo được nền tảng ngôn ngữ (mục tiêu nền tảng ngôn ngữ)?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      Khi 1 bạn đọc mới vào nhóm, dù là bạn chưa biết đọc hoặc đã đọc thụ động, Coach cũng sẽ hướng dẫn các bạn lại từ giai đoạn cảm âm, ghép vần. Từ đó các bạn biết đọc sách và sẽ
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      Tại sao đọc sách lại tập được tư duy chủ động tìm tòi suy nghĩ?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      Xuất phát chương trình của HRs là từ Mỹ, thầy cô giáo giữ nguyên phương pháp học của các bạn Mỹ. Từ preK (4tuoi) các bạn đã được dạy yêu mến và đọc sách (hình và vài chữ cơ bản) mỗi tuần mang về nhà 4,5 cuốn. Lớp K, 1,2,3, hết tiểu học, trung học, đại học và thâm chí cao học, mỗi năm học các bạn đều được yêu cầu vào thư viện lấy sách đọc bắt buộc, và phần kiến thức trong sách được test với 40% số điểm, 60% thậm chí có môn 100% số điểm từ sách.
                    </p>
                  </AccordionItemPanel>
                  <AccordionItemPanel>
                    <p>Cộng đồng đọc sách HRs cũng mong muốn các bạn nhỏ HRs được từng bước học cách đọc sách, xử lý thông tin, kiến thức bên ngoài và tiêu hoá thành chính nguồn tri thức của bản thân. Với các bước hướng dẫn kỹ năng cơ bản như tra cứu thông tin sách, online, tóm tắt theo sơ đồ mindmap, nói đơn giản hoặc nói thuyết trình… Hrs tin rằng với các chủ đề đơn giản, thông thường các bạn có thể chủ động xử lý, khi được giao bất cứ topics nào phức tạp hơn, các bạn cũng sẽ chủ động tư duy học hỏi và xử lý dự án tốt đẹp.
                    Việc học hỏi của các bạn giờ đây không còn gói gọn trong 90 phút học với người hướng dẫn, đóng khung trong tiết học với thầy cô. Các bạn Hrs tự do tìm hiểu về sinh vật nếu yêu thích, tìm hiểu về khoa học nếu được vun đắp, thậm chí giải quyết tình huống hằng ngày bằng óc logic nhất. Các bạn suy nghĩ đa chiều và kiến thức không giới hạn.
                    </p>
                    <p> Kết quả cho thấy tới nay, các bạn HRs trên 80% sau thời gian cảm âm và đọc sách đều có tư duy chủ động khi gặp vấn đề. HRs tự hào về điều đó.</p>
                  </AccordionItemPanel>
                  <AccordionItemPanel>
                    <p> Kết quả cho thấy tới nay, các bạn HRs trên 80% sau thời gian cảm âm và đọc sách đều có tư duy chủ động khi gặp vấn đề. HRs tự hào về điều đó.</p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      Tới nhóm đọc giúp lấy chứng chỉ ra sao?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      Với nền tảng kiến thức và kỹ năng nghe, đọc, nói, viết, vốn từ và văn phạm có sẵn, các bạn HRs không gặp bất cứ khó khăn nào khi chuẩn bị cho các kỳ thi chứng chỉ phụ huynh mong muốn.
                      Trong quá trình đọc sách, nếu phụ huynh có nhu cầu cho bé lấy chứng chỉ, xin liên hệ với HRs - mrs Duyên để được team hướng dẫn kho đề thi để các bạn làm quen với dạng đề và kỹ năng giải đề để ko gặp lúng túng khi đi thi.
                      HRs có sẵn kho đề Cambridge, Ielts, Toefl Junior, Toefl để phục vụ các bạn. Chúc các bạn đạt điểm cao trong các kỳ thi chứng chỉ quốc tế.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      Tại sao các nhóm đọc không có bàn ghế mà cần không gian rộng?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      HRs mong muốn các bạn đến nhóm với tinh thần vui vẻ, đọc sách hơn là cảm giác tới lớp học. Các bạn đã học rất rất nhiều mỗi ngày 10tiếng và thậm chí 7 ngày trong tuần. Nhóm đọc không cần bàn ghế, chỉ cần không gian để ngồi, đi, đứng, chạy, chơi và thoải mái. Tuỳ mỗi giai đoạn mà các bạn được hướng dẫn các kỹ năng khác nhau, nhưng tựu chung lại, Coach chỉ là người hướng dẫn, và các bạn sẽ tiêu hoá sự hướng dẫn đó theo cách riêng của mình.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      Tại sao con bạn xứng đáng 1 chương trình giáo dục cá thể?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      2 đứa con trong gia đình, tư chất, thể chất và tính nết, ngộ tính hoàn toàn khác nhau. Con của bạn hoàn toàn khác con của người hàng xóm. Thật là uổng phí nếu bạn ép con học đàn piano trong khi bạn rất giỏi vẽ. Cùng độ tuổi, con bạn có thể nghe tốt hơn bạn mình, nhưng khả năng nói lại không bằng. Trong 1 nhóm có 7 bạn, mỗi bạn sẽ có thiên hướng phát triển 1 kỹ năng khác nhau và không đều. Nó tùy thuộc vào khả năng bẩm sinh, thực tập hằng ngày, thời gian biểu ở trường.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      Tại sao có sự ra đời điểm đọc tại các quận?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      Điểm đọc đầu tiên của HRs tại Phú Nhuận, do nhu cầu muốn con được tham gia sân chơi nhiều hơn, một số phụ huynh mong muốn đưa nhóm đọc về nhà mình, để chính con của mình được tham gia và các bạn cùng khu vực không phải di chuyển xa mỗi tuần. Và nhất là gần nhà thì tham gia câu lạc bộ sẽ bền hơn, lâu dài hơn. Từ nhu cầu đó, các điểm đọc lan toả ra Bình Thạnh, Thủ Đức, Gò Vấp, Tân Phú, Tân Bình…
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      Điểm đọc tại quận có liên kết với các điểm đọc khác không?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      Điểm đọc tại các quận khác nhau đều cùng chung 1 mục đích, sứ mệnh, giáo trình, tiêu chí tuyển Coach, người hỗ trợ chỉ là thuận tiện về địa lý và thời gian họp nhóm khác nhau.
                      Các điểm đọc tại các điểm cùng liên kết với nhau và khi có sự kiện chung như dã ngoại, tâm lý, kỹ năng sống, nghiên cứu khoa học, kỹ năng mềm… thì cùng chọn 1 địa điểm tổ chức và các bạn HRs ở các điểm cùng tham gia như nhau.
                    </p>
                    <p>
                      Các điểm đọc tại các điểm cùng liên kết với nhau và khi có sự kiện chung như dã ngoại, tâm lý, kỹ năng sống, nghiên cứu khoa học, kỹ năng mềm… thì cùng chọn 1 địa điểm tổ chức và các bạn HRs ở các điểm cùng tham gia như nhau.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      Người đứng đầu tại các điểm có những lợi ích gì?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      Người đứng đầu tại điểm đọc không có lợi ích gì về kinh tế hay danh tiếng. Họ là những người nhiệt huyết, cùng muốn lan tỏa tinh thần đọc sách cho các bạn lân cận cùng khu vực địa lý.
                    </p>
                    <p>
                      Khi 1 nhóm hoạt động tại địa bàn của họ, không tránh khỏi các bé gây ồn ào, tổn thất hư bể, vẽ, dây bẩn tường gạch, điện nước máy lạnh… Vì tình yêu thương chính con và bạn bè của con, họ chịu hết  (đánh tiếng trước các phụ huynh đang muốn mở nhóm tại khu vực mình).
                    </p>
                    <p>
                      Một điều quan trọng, khi con bạn tham gia nhóm đọc tại điểm đọc cụ thể, người đứng đầu điểm đọc không phải là người chịu trách nhiệm về con bạn. Xin hãy liên hệ MRs - Duyên để có bất kỳ sự trợ giúp hoặc giải đáp về chuyên môn.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      Có được tham gia thêm các điểm đọc khác khi có thời gian không?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      Hrs khuyến khích các bạn đọc tham gia các buổi đọc khi sắp xếp được thời gian. Ví dụ khi bạn đăng ký đọc sách ở điểm Bình Thạnh nhưng nếu phụ huynh sắp xếp được thời gian có thể tham gia thêm ở nhóm Phú Nhuận và Gò Vấp lân cận. Chỉ cần bạn đăng ký trước để TA kịp hỗ trợ phù hợp với bạn.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToggleQA;
