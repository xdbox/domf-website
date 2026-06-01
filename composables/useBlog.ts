/**
 * Field stories / news — STUB.
 * Shapes match a future Strapi `articles` collection so the swap is mechanical:
 *   GET /api/articles?populate=cover  ->  data[].attributes
 * Replace the mock array with a $fetch to the Strapi REST endpoint and keep
 * the same field names (title, slug, excerpt, cover, author, category, publishedAt).
 * Hindi fields (titleHi, excerptHi, …) drive the EN/हिंदी toggle; in Strapi these
 * map to a localised entry.
 */

export interface BlogPost {
  id: number
  title: string
  titleHi: string
  slug: string
  excerpt: string
  excerptHi: string
  body: string
  bodyHi: string
  cover: string
  category: string
  categoryHi: string
  author: string
  authorHi: string
  readingTime: string
  readingTimeHi: string
  publishedAt: string
}

const enBody = 'Placeholder field-story body. Replace with Strapi rich-text content. '.repeat(14)
const hiBody = 'प्लेसहोल्डर क्षेत्र-कहानी सामग्री। इसे Strapi रिच-टेक्स्ट सामग्री से बदलें। '.repeat(14)

const POSTS: BlogPost[] = [
  {
    id: 1,
    title: 'Independent evaluation confirms sustained learning gains',
    titleHi: 'स्वतंत्र मूल्यांकन ने निरंतर अधिगम वृद्धि की पुष्टि की',
    slug: 'independent-evaluation-learning-gains',
    excerpt:
      'A third-party study finds measurable, lasting improvements in foundational literacy across our community learning centres.',
    excerptHi:
      'एक तृतीय-पक्ष अध्ययन हमारे सामुदायिक शिक्षण केंद्रों में बुनियादी साक्षरता में मापने योग्य, स्थायी सुधार पाता है।',
    body: enBody,
    bodyHi: hiBody,
    cover: PLACEHOLDER_IMG,
    category: 'News',
    categoryHi: 'समाचार',
    author: 'Sunita Topno',
    authorHi: 'सुनीता टोप्पो',
    readingTime: '5 min read',
    readingTimeHi: '5 मिनट पढ़ें',
    publishedAt: '2026-05-14'
  },
  {
    id: 2,
    title: 'Two new districts join our healthcare routes',
    titleHi: 'दो नए ज़िले हमारे स्वास्थ्य मार्गों से जुड़े',
    slug: 'new-districts-healthcare-routes',
    excerpt:
      'Mobile clinics now reach communities that were previously hours from the nearest health facility.',
    excerptHi:
      'मोबाइल क्लीनिक अब उन समुदायों तक पहुँचते हैं जो पहले निकटतम स्वास्थ्य सुविधा से घंटों दूर थे।',
    body: enBody,
    bodyHi: hiBody,
    cover: PLACEHOLDER_IMG,
    category: 'Field Story',
    categoryHi: 'क्षेत्र कहानी',
    author: 'Mahesh Barla',
    authorHi: 'महेश बारला',
    readingTime: '4 min read',
    readingTimeHi: '4 मिनट पढ़ें',
    publishedAt: '2026-04-22'
  },
  {
    id: 3,
    title: 'How a savings group became a thriving enterprise',
    titleHi: 'कैसे एक बचत समूह एक फलता-फूलता उद्यम बन गया',
    slug: 'savings-group-became-enterprise',
    excerpt:
      'Twelve women in Chhattisgarh turned shared savings into a food-processing business that now employs the village.',
    excerptHi:
      'छत्तीसगढ़ की बारह महिलाओं ने साझा बचत को एक खाद्य-प्रसंस्करण व्यवसाय में बदल दिया जो अब पूरे गाँव को रोज़गार देता है।',
    body: enBody,
    bodyHi: hiBody,
    cover: PLACEHOLDER_IMG,
    category: 'Field Story',
    categoryHi: 'क्षेत्र कहानी',
    author: 'Rekha Tirkey',
    authorHi: 'रेखा तिर्की',
    readingTime: '6 min read',
    readingTimeHi: '6 मिनट पढ़ें',
    publishedAt: '2026-04-03'
  },
  {
    id: 4,
    title: 'The spring that came back: watershed work in Jharkhand',
    titleHi: 'वह झरना जो लौट आया: झारखंड में जलग्रहण कार्य',
    slug: 'watershed-spring-restoration-jharkhand',
    excerpt:
      'Patient restoration revived a dry water source, returning reliable water to three hamlets through the summer.',
    excerptHi:
      'धैर्यपूर्ण पुनर्स्थापन ने एक सूखे जलस्रोत को पुनर्जीवित किया और गर्मियों भर तीन बस्तियों तक भरोसेमंद पानी लौटाया।',
    body: enBody,
    bodyHi: hiBody,
    cover: PLACEHOLDER_IMG,
    category: 'Field Story',
    categoryHi: 'क्षेत्र कहानी',
    author: 'Dr. Leena Aind',
    authorHi: 'डॉ. लीना आइंद',
    readingTime: '5 min read',
    readingTimeHi: '5 मिनट पढ़ें',
    publishedAt: '2026-03-18'
  }
]

export function useBlog() {
  // When Strapi is live, swap the bodies below for $fetch calls.
  const getPosts = () => POSTS
  const getPost = (slug: string) => POSTS.find((p) => p.slug === slug)
  return { getPosts, getPost }
}
