# Giai đoạn 1 — Chuẩn bị nội dung thực tế cho Portfolio

## Mục tiêu

Giai đoạn này thay thế các placeholder bằng bằng chứng có thể kiểm chứng: screenshot của dự án, ảnh chân dung và resume PDF đã loại bỏ thông tin nhạy cảm. Chưa thêm thư viện, animation hoặc thay đổi visual theme. Mục tiêu hoàn thành là để recruiter nhìn thấy sản phẩm thật trước khi chúng ta đầu tư vào motion.

## Kết quả cần bàn giao

| Hạng mục | Kết quả tối thiểu | Vị trí dự kiến trong repository |
|---|---|---|
| DATN hoặc PBL5 | Một screenshot giao diện thật dùng được ở card và case study | `public/images/projects/` |
| Ảnh chân dung | Một ảnh rõ mặt, được phép public, không chứa thông tin riêng tư trong nền | `public/images/profile/portrait.webp` |
| Resume | Một bản PDF đã redacted, không chứa dữ liệu nhạy cảm không cần thiết | `public/resume.pdf` |
| Nội dung case study | Context, problem, role, implementation, evidence và links đúng với dự án | `lib/portfolio-data.ts` và route case study |

Chỉ cần hoàn thành một project có evidence trước. Không cần chuẩn bị toàn bộ asset của DATN và PBL5 trong cùng một lượt.

---

## 1. Chuẩn bị screenshot cho DATN hoặc PBL5

### Nên bắt đầu với dự án nào?

Nên bắt đầu với **DATN — Real-Time Traffic Navigation Dashboard** vì đây là dự án phù hợp nhất với định vị Frontend Developer hiện tại. Nó thể hiện responsive interface, navigation, realtime traffic và computer vision trong cùng một câu chuyện. PBL5 có thể được bổ sung sau như supporting project.

Nếu screenshot DATN chưa đủ rõ hoặc không thể chạy lại, hãy dùng PBL5 trước. Điều quan trọng là asset phải là hình ảnh thật từ project, không phải mockup tự tạo.

### Bộ screenshot tối thiểu

| Tên file | Nội dung | Tỷ lệ khuyến nghị | Mục đích |
|---|---|---:|---|
| `datn-overview.webp` | Màn hình chính với bản đồ và bố cục tổng thể | 16:10 hoặc 16:9 | Featured project card |
| `datn-navigation.webp` | Route, đường đi hoặc thông tin giao thông | 16:10 hoặc 16:9 | Case study section |
| `datn-vision.webp` | Camera/computer-vision hoặc incident detection | 16:10 hoặc 16:9 | Chứng minh phần kỹ thuật |

Một screenshot overview là đủ để bắt đầu. Hai screenshot bổ sung giúp case study có bằng chứng tốt hơn nhưng không phải điều kiện để thay placeholder ngay.

### Tiêu chuẩn chụp

Screenshot cần đáp ứng các điều kiện sau:

- Chụp từ ứng dụng thật hoặc bản demo thật.
- Không có tab trình duyệt, URL nội bộ, token, API key hoặc thông tin tài khoản trong ảnh.
- Không hiển thị dữ liệu cá nhân của người dùng khác.
- Text giao diện đủ lớn để đọc khi hiển thị trong card.
- Không dùng ảnh bị kéo méo hoặc crop mất phần quan trọng của sản phẩm.
- Ưu tiên WebP hoặc PNG. Dùng PNG khi giao diện có text nhỏ cần giữ độ sắc nét.
- Độ rộng gốc nên từ 1600px trở lên nếu có thể.
- Tên file dùng chữ thường, dấu gạch ngang, không dùng dấu hoặc khoảng trắng.

### Cách chụp thực tế

1. Chạy DATN hoặc PBL5 ở trạng thái ổn định.
2. Chọn viewport desktop phổ biến, chẳng hạn 1440×900 hoặc 1366×768.
3. Tắt các overlay debug, devtools, terminal và thông báo cá nhân.
4. Đưa giao diện về trạng thái có dữ liệu hợp lý, không để loading hoặc error state nếu đó không phải nội dung cần chứng minh.
5. Chụp riêng các trạng thái có giá trị: overview, navigation và computer vision.
6. Crop phần trình duyệt ra khỏi ảnh.
7. Kiểm tra lại text và thông tin nhạy cảm trước khi gửi.
8. Đặt file vào thư mục `public/images/projects/` hoặc gửi file gốc để tôi đặt vào đúng vị trí.

### Thông tin cần gửi kèm mỗi screenshot

Mỗi ảnh nên đi kèm một dòng mô tả ngắn:

```text
File: datn-overview.webp
Project: DATN
Screen: Main navigation dashboard
What it proves: Route guidance, map layout, traffic information
Source: Real application / demo
```

Không cần viết copy marketing ở bước này. Mô tả chỉ giúp xác định ảnh đang chứng minh điều gì.

---

## 2. Chuẩn bị ảnh chân dung

### Tiêu chuẩn kỹ thuật

| Thuộc tính | Khuyến nghị |
|---|---|
| Định dạng gốc | JPG, PNG hoặc WebP |
| Độ rộng | Tối thiểu 1200px |
| Crop | Chân dung dọc, đầu và vai chiếm phần chính |
| Background | Sạch, ít chi tiết, không có giấy tờ hoặc màn hình riêng tư |
| Ánh sáng | Mặt rõ, không bị cháy sáng hoặc quá tối |
| Quyền sử dụng | Ảnh của bạn hoặc ảnh bạn có quyền công khai |

Không cần ảnh studio. Một ảnh chân dung rõ, tương phản tốt và có background gọn sẽ tốt hơn placeholder `LY HO` hiện tại.

### Tên file và vị trí

Dùng tên:

```text
public/images/profile/portrait.webp
```

Nếu muốn giữ ảnh gốc có độ phân giải cao, có thể gửi tên khác như `portrait-source.jpg`; sau đó chỉ đưa bản WebP đã tối ưu vào `public/`.

### Kiểm tra privacy

Trước khi public, hãy kiểm tra background của ảnh. Không để lộ địa chỉ, thẻ sinh viên, màn hình chat, giấy tờ, biển số xe hoặc thông tin tài khoản. Nếu ảnh có background không phù hợp, có thể crop chặt hơn thay vì dùng công cụ AI để thay đổi nhận diện cá nhân.

---

## 3. Chuẩn bị resume PDF đã redacted

### Nguyên tắc công khai

Resume public nên chứa đủ thông tin để recruiter liên hệ và đánh giá năng lực, nhưng không cần chứa dữ liệu định danh hoặc thông tin liên hệ quá chi tiết. Không upload bản CV gốc nếu bản đó có dữ liệu cá nhân không cần thiết.

### Nên giữ

- Tên hiển thị: Ly Ho.
- Định vị: Frontend Developer.
- Email nghề nghiệp dùng cho portfolio.
- GitHub và LinkedIn.
- Kỹ năng đã thực sự sử dụng.
- Dự án, vai trò và mô tả công việc có thể kiểm chứng.
- Học vấn và kinh nghiệm nếu bạn muốn public.

### Nên xóa hoặc che

- Số điện thoại cá nhân nếu không muốn công khai.
- Địa chỉ nhà hoặc địa chỉ chi tiết.
- Số căn cước, hộ chiếu hoặc mã định danh.
- Ngày sinh đầy đủ.
- Chữ ký.
- Email cá nhân không dùng cho tuyển dụng.
- Tên hoặc thông tin riêng tư của người tham chiếu.
- Mã hồ sơ, mã sinh viên hoặc thông tin tài khoản.
- Các thông tin nội bộ của công ty hoặc dự án chưa được phép công khai.

Có thể giữ thành phố hoặc quốc gia ở mức khái quát nếu thông tin đó hữu ích cho tuyển dụng. Không cần ghi địa chỉ đầy đủ.

### Quy trình redaction an toàn

1. Tạo một bản sao từ CV gốc và đặt tên là `resume-public.pdf`.
2. Redact trong công cụ chỉnh sửa PDF có chức năng xóa thật nội dung, không chỉ vẽ một hình chữ nhật màu đen lên trên.
3. Export thành PDF mới.
4. Đóng và mở lại file đã export.
5. Thử chọn, copy và tìm kiếm các vùng đã che. Nếu text nhạy cảm vẫn copy được, bản redaction chưa an toàn.
6. Kiểm tra metadata PDF nếu file chứa tên máy, đường dẫn local hoặc author không muốn public.
7. Đổi tên file thành `public/resume.pdf` sau khi hoàn tất kiểm tra.

### Kiểm tra bằng command line

Sau khi đặt file vào repository, có thể kiểm tra text được trích xuất bằng:

```bash
pdftotext public/resume.pdf -
```

Kết quả không được chứa số điện thoại, địa chỉ đầy đủ, số định danh hoặc text nằm dưới vùng đã che. Có thể kiểm tra metadata bằng:

```bash
pdfinfo public/resume.pdf
```

Không commit bản CV gốc, file tạm hoặc ảnh chụp các trang CV vào repository.

### Link resume trong portfolio

Sau khi file đã được kiểm tra, link sẽ trỏ trực tiếp tới:

```text
/resume.pdf
```

Không cần backend cho file tĩnh này. Nếu sau này cần cập nhật resume thường xuyên, có thể chuyển sang storage riêng mà không thay đổi CTA của giao diện.

---

## 4. Nội dung case study thực tế

Codebase hiện đã có các field cơ bản: `title`, `meta`, `description`, `problem`, `role`, `tags`, `status` và GitHub URL. Để thay trạng thái draft bằng evidence, mỗi project nên chuẩn bị nội dung theo bảng sau.

| Trường | Câu hỏi cần trả lời | Ví dụ cho DATN |
|---|---|---|
| Context | Dự án xuất hiện trong bối cảnh nào? | Graduation Project, 2026 |
| Problem | Người dùng cần giải quyết khó khăn gì? | Hiểu hướng đi, ùn tắc và tình trạng đường |
| Role | Bạn trực tiếp làm phần nào? | Thiết kế và phát triển website, responsive UI, tích hợp camera/computer vision |
| Interface | Người dùng nhìn thấy và thao tác với gì? | Bản đồ, route guidance, traffic information |
| Integration | Frontend kết nối với hệ thống nào? | Camera stream, realtime data, computer-vision output |
| Technical evidence | Screenshot nào chứng minh điều đó? | Overview, navigation, vision |
| Limitations | Điều gì còn chưa hoàn thiện? | Feature hoặc deployment chưa production-ready |
| Links | Recruiter có thể kiểm tra ở đâu? | GitHub và live demo nếu có |

Chỉ điền các thông tin bạn đã thực sự làm hoặc có thể chứng minh. Không tự thêm số người dùng, độ chính xác model, performance metric, business result hoặc live demo nếu chưa có dữ liệu xác nhận.

### Mẫu intake để bạn điền

```text
Project: DATN / PBL5

Screenshot files:
-

Project context:
-

The user problem:
-

What I personally built:
-

Frontend screens or flows I implemented:
-

Backend, API, realtime, camera, or model integration I worked on:
-

Technologies actually used:
-

What each screenshot proves:
-

Known limitations:
-

Live demo:
- None / URL

GitHub:
- URL
```

---

## 5. Cấu trúc thư mục sau khi nhận đủ asset

Cấu trúc dự kiến:

```text
public/
├── images/
│   ├── profile/
│   │   └── portrait.webp
│   └── projects/
│       ├── datn-overview.webp
│       ├── datn-navigation.webp
│       ├── datn-vision.webp
│       ├── pbl5-overview.webp
│       └── pbl5-recognition.webp
└── resume.pdf
```

Không cần tạo toàn bộ file ngay. Chỉ tạo những asset đã có thật. Trong code, asset chưa có sẽ tiếp tục được đánh dấu rõ là unresolved thay vì trỏ tới đường dẫn giả.

---

## 6. Checklist trước khi gửi asset

### Screenshot

- [ ] Ảnh đến từ project thật.
- [ ] Không có devtools, token, URL nội bộ hoặc dữ liệu cá nhân.
- [ ] Ảnh đủ lớn và không bị méo.
- [ ] Có mô tả screenshot chứng minh điều gì.

### Portrait

- [ ] Bạn có quyền public ảnh.
- [ ] Khuôn mặt rõ và ảnh đủ lớn.
- [ ] Background không có dữ liệu riêng tư.
- [ ] Đã crop theo dạng chân dung.

### Resume

- [ ] Đã tạo bản public riêng, không sửa bản CV gốc.
- [ ] Đã xóa hoặc che dữ liệu nhạy cảm.
- [ ] Đã kiểm tra text sau khi export.
- [ ] Đã kiểm tra metadata ở mức cần thiết.
- [ ] Chỉ gửi `resume-public.pdf` hoặc bản tương đương đã redacted.

## Cách gửi cho bước tiếp theo

Bạn có thể gửi từng phần, không cần chờ đủ tất cả:

1. Gửi trước một screenshot DATN hoặc PBL5.
2. Gửi ảnh chân dung.
3. Gửi bản `resume-public.pdf` đã redacted.
4. Gửi phần intake case study nếu screenshot chưa tự giải thích được flow.

Sau khi nhận asset, tôi sẽ kiểm tra định dạng và privacy trước, sau đó tích hợp vào `public/`, cập nhật data và case-study route, chạy lint/build, rồi báo lại chính xác file nào đã thay đổi. Tôi sẽ không commit hoặc push nếu bạn chưa yêu cầu.

## References

[1]: https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository "GitHub documentation on adding files to a repository"
[2]: https://www.adobe.com/acrobat/resources/how-to-redact-pdf.html "Adobe guidance on redacting PDF documents"
[3]: https://man.archlinux.org/man/pdftotext.1.en "pdftotext manual"
[4]: https://man.archlinux.org/man/pdfinfo.1.en "pdfinfo manual"
