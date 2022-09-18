import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Sachin",
    lastName: "Tendulkar",
    username: "Sachin",
    password: "sachin@123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profilePhoto: "https://res.cloudinary.com/diirhxtse/image/upload/v1657112051/ThinkShare/Sachin_Tendulkar.jpg",
    bio: "Tendulkar was born at Nirmal Nursing Home in Dadar, Bombay on 24 April 1973 to a Rajapur Saraswat Brahmin Maharastrian family His father, Ramesh Tendulkar, was a well-known Marathi novelist & poet and his mother, Rajni, worked in the insurance industry.",
    portfolioUrl: "https://sachintendulkar.com/"
  },
  {
    _id: uuid(),
    firstName: "Virat",
    lastName: "Kholi",
    username: "Virat",
    password: "viratKholi123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profilePhoto: "https://res.cloudinary.com/diirhxtse/image/upload/v1657112050/ThinkShare/Virat_Kholi.jpg",
    bio: "Virat Kohli is an Indian international cricketer and former captain of the India national cricket team. He plays for Delhi in domestic cricket and Royal Challengers Bangalore in the Indian Premier League as a right-handed batsman.",
    portfolioUrl: "https://en.wikipedia.org/wiki/Virat_Kohli"
  },
  {
    _id: uuid(),
    firstName: "Narendra",
    lastName: "Modi",
    username: "NarendraModi",
    password: "narendraModi123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profilePhoto: "https://res.cloudinary.com/diirhxtse/image/upload/v1657112051/ThinkShare/Narendra_Modi.jpg",
    bio: "Narendra Damodardas Modi is an Indian politician serving as the 14th and current prime minister of India since 2014. Modi was the chief minister of Gujarat from 2001 to 2014 and is the Member of Parliament from Varanasi.",
    portfolioUrl: "https://www.narendramodi.in/"
  },
  {
    _id: uuid(),
    firstName: "Malvika",
    lastName: "Iyer",
    username: "MalvikaIyer",
    password: "malvikaIyer",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profilePhoto: "https://res.cloudinary.com/diirhxtse/image/upload/v1657112052/ThinkShare/Malvika_Iyer.jpg",
    bio: "Malvika Iyer is an Indian national, a bilateral amputee from a bomb blast, a social worker, and a National Awardee. She is an international motivational speaker and a disability rights activist, advocating for building an inclusive society. She is also a model for accessible fashion.",
    portfolioUrl: "https://en.wikipedia.org/wiki/Malvika_Iyer"
  },
  {
    _id: uuid(),
    firstName: "Sandeep",
    lastName: "Maheshwari",
    username: "SandeepM",
    password: "sandeepm@123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profilePhoto: "https://res.cloudinary.com/diirhxtse/image/upload/v1657112050/ThinkShare/Sandeep_Maheshwari.jpg", 
    bio: "Sandeep Maheshwari is a famous motivational speaker, photographer and an entrepreneur, He owns a company named as ImagesBazaar he has designated himself as CEO in his company.",
    portfolioUrl: "https://wikibio.in/sandeep-maheshwari/"
  },
];
