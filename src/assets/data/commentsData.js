import uuid from 'uuid/v1';
import Author4 from '../images/author-4.jpg';
import Author5 from '../images/author-5.jpg';
import Author6 from '../images/author-6.jpg';
const commentsData = [
    {
        id: uuid(),
        image: Author4,
        name: 'Nam',
        desc: 'Lorem Ipsum available, but the majority some form, by injected humour, or randomised words which.',
        time: 39
    },
    {
        id: uuid(),
        image: Author5,
        name: 'Kosmi Kotalia',
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
export default commentsData
