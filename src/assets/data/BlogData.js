import uuid from 'uuid/v1';
import Author4 from '../../assets/images/author-4.jpg';
import Author5 from '../../assets/images/author-5.jpg';
import Author6 from '../../assets/images/author-6.jpg';

const BlogData = [
    {
        title: 'Bé Thảo Mi đã tự mình đọc sách khi mới vào lớp 1',
        author: 'Phụ huynh Huy Anh',
        time: 'Thứ 3 Thứ 5',
        imgUrl: '',
        id: 'bl1',
        tag: ['chia sẻ', 'kinh nghiệm đọc sách', 'reading'],
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum animi nemo, eaque excepturi inventore a facere, dolore magni aut in ratione quisquam velit vitae illo dignissimos quidem autem aspernatur sapiente. I found myself working in a true partnership that results in an incredible experience, and an end product that is the best. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum animi nemo, eaque excepturi inventore a facere, dolore magni aut in ratione quisquam velit vitae illo dignissimos quidem autem aspernatur sapiente! I found myself working in a true partnership that results in an incredible experience, and an end product that is the best. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum animi nemo, eaque excepturi inventore a facere, dolore magni aut in ratione quisquam velit vitae illo dignissimos quidem autem aspernatur sapiente! I found myself working in a true partnership that results in an incredible experience, and an end product that is the best.',
        comments: [
            {
                id: uuid(),
                image: Author4,
                name: 'Nam',
                desc: 'I am blog item 1 Lorem Ipsum available, but the majority some form, by injected humour, or randomised words which.',
                time: 39
            },
            {
                id: uuid(),
                image: Author5,
                name: 'Mari Helonen',
                desc: 'There are many variations of passages of Lorem Ipsum available, but the majority some form, by injected humour, or randomised words which.',
                time: 39
            },
            {
                id: uuid(),
                image: Author6,
                name: 'Kosmi Kotalia',
                desc: 'There are many variations of passages of Lorem Ipsum available, but the majority some form, by injected humour, or randomised words which.',
                time: 39
            },
        ]
    },
    {
        title: 'Happy Readers mở nhóm học mới tại Gò Vấp',
        author: 'Happy Readers',
        time: '19 Jun 2019',
        imgUrl: '',
        id: 'bl2',
        tag: ['tin tức', 'Happy Readers', 'new group'],
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum animi nemo, eaque excepturi inventore a facere, dolore magni aut in ratione quisquam velit vitae illo dignissimos quidem autem aspernatur sapiente! I found myself working in a true partnership that results in an incredible experience, and an end product that is the best. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum animi nemo, eaque excepturi inventore a facere, dolore magni aut in ratione quisquam velit vitae illo dignissimos quidem autem aspernatur sapiente! I found myself working in a true partnership that results in an incredible experience, and an end product that is the best. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum animi nemo, eaque excepturi inventore a facere, dolore magni aut in ratione quisquam velit vitae illo dignissimos quidem autem aspernatur sapiente! I found myself working in a true partnership that results in an incredible experience, and an end product that is the best. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum animi nemo, eaque excepturi inventore a facere, dolore magni aut in ratione quisquam velit vitae illo dignissimos quidem autem aspernatur sapiente! I found myself working in a true partnership that results in an incredible experience, and an end product that is the best.',
        comments: [
            {
                id: uuid(),
                image: Author4,
                name: 'Bob',
                desc: 'I am blog item 2 Lorem Ipsum available, but the majority some form, by injected humour, or randomised words which.',
                time: 39
            },
            {
                id: uuid(),
                image: Author5,
                name: 'Anna',
                desc: 'There are many variations of passages of Lorem Ipsum available, but the majority some form, by injected humour, or randomised words which.',
                time: 39
            },
            {
                id: uuid(),
                image: Author6,
                name: 'Kosmi Kotalia',
                desc: 'There are many variations of passages of Lorem Ipsum available, but the majority some form, by injected humour, or randomised words which.',
                time: 39
            },
        ]
    },
    {
        title: 'Hải Triều kể lại câu chuyện Con Cáo và Chùm Nho',
        author: 'Hải Triều',
        time: '19 Jun 2019',
        imgUrl: '',
        id: 'bl3',
        tag: ['chia sẻ học viên', 'story telling'],
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum animi nemo, eaque excepturi inventore a facere, dolore magni aut in ratione quisquam velit vitae illo dignissimos quidem autem aspernatur sapiente! I found myself working in a true partnership that results in an incredible experience, and an end product that is the best. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum animi nemo, eaque excepturi inventore a facere, dolore magni aut in ratione quisquam velit vitae illo dignissimos quidem autem aspernatur sapiente! I found myself working in a true partnership that results in an incredible experience, and an end product that is the best. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum animi nemo, eaque excepturi inventore a facere, dolore magni aut in ratione quisquam velit vitae illo dignissimos quidem autem aspernatur sapiente! I found myself working in a true partnership that results in an incredible experience, and an end product that is the best.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum animi nemo, eaque excepturi inventore a facere, dolore magni aut in ratione quisquam velit vitae illo dignissimos quidem autem aspernatur sapiente! I found myself working in a true partnership that results in an incredible experience, and an end product that is the best.',
        comments: [
            {
                id: uuid(),
                image: Author4,
                name: 'Jack',
                desc: 'I am blog item 3 Lorem Ipsum available, but the majority some form, by injected humour, or randomised words which.',
                time: 39
            },
            {
                id: uuid(),
                image: Author5,
                name: 'Peter',
                desc: 'There are many variations of passages of Lorem Ipsum available, but the majority some form, by injected humour, or randomised words which.',
                time: 39
            },
            {
                id: uuid(),
                image: Author6,
                name: 'Mike',
                desc: 'There are many variations of passages of Lorem Ipsum available, but the majority some form, by injected humour, or randomised words which.',
                time: 39
            },
        ]
    }

]

export default BlogData;

