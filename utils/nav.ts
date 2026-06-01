// Single source of truth for the foundation's information architecture.
// Consumed by the header mega-menu, the footer, and the catch-all router.
// labelHi / descHi carry Hindi for the EN/हिंदी toggle (see useLocale).

export interface NavChild {
  label: string
  labelHi?: string
  to: string
  desc?: string
  descHi?: string
}
export interface NavSection {
  label: string
  labelHi?: string
  to: string
  summary?: string
  children?: NavChild[]
}

export const NAV: NavSection[] = [
  {
    label: 'Who We Are', labelHi: 'हम कौन हैं',
    to: '/who-we-are',
    summary: 'The people, principles and accountability behind our work.',
    children: [
      { label: 'Our Story', labelHi: 'हमारी कहानी', to: '/who-we-are/our-story', desc: 'How the Foundation began', descHi: 'फाउंडेशन की शुरुआत' },
      { label: 'Vision & Mission', labelHi: 'दृष्टि एवं मिशन', to: '/who-we-are/vision-mission', desc: 'What we work towards', descHi: 'हमारा लक्ष्य' },
      { label: 'Values & Objects', labelHi: 'मूल्य एवं उद्देश्य', to: '/who-we-are/values-objects', desc: 'Our principles and charitable objects', descHi: 'हमारे सिद्धांत एवं उद्देश्य' },
      { label: 'Governance & Transparency', labelHi: 'शासन एवं पारदर्शिता', to: '/who-we-are/governance-transparency', desc: 'How we stay accountable', descHi: 'हमारी जवाबदेही' }
    ]
  },
  {
    label: 'What We Do', labelHi: 'हम क्या करते हैं',
    to: '/what-we-do',
    summary: 'Six long-term programmes, designed with communities.',
    children: [
      { label: 'Education', labelHi: 'शिक्षा', to: '/what-we-do/education', desc: 'Learning that reaches every child', descHi: 'हर बच्चे तक शिक्षा' },
      { label: 'Healthcare', labelHi: 'स्वास्थ्य सेवा', to: '/what-we-do/healthcare', desc: 'Care in remote regions', descHi: 'दूरस्थ क्षेत्रों में देखभाल' },
      { label: 'Tribal Development', labelHi: 'आदिवासी विकास', to: '/what-we-do/tribal-development', desc: 'Rights, culture and livelihoods', descHi: 'अधिकार, संस्कृति, आजीविका' },
      { label: 'Youth Empowerment', labelHi: 'युवा सशक्तिकरण', to: '/what-we-do/youth-empowerment', desc: 'Skills and opportunity', descHi: 'कौशल एवं अवसर' },
      { label: 'Community Development', labelHi: 'सामुदायिक विकास', to: '/what-we-do/community-development', desc: 'Stronger village institutions', descHi: 'सशक्त ग्राम संस्थाएँ' },
      { label: 'Environment & Sustainability', labelHi: 'पर्यावरण एवं स्थिरता', to: '/what-we-do/environment-sustainability', desc: 'Forests, water and climate', descHi: 'वन, जल एवं जलवायु' }
    ]
  },
  {
    label: 'Impact', labelHi: 'प्रभाव',
    to: '/impact',
    summary: 'Evidence of change, reported transparently.',
    children: [
      { label: 'Impact Dashboard', labelHi: 'प्रभाव डैशबोर्ड', to: '/impact/dashboard', desc: 'Live programme indicators', descHi: 'कार्यक्रम संकेतक' },
      { label: 'Success Stories', labelHi: 'सफलता की कहानियाँ', to: '/impact/success-stories', desc: 'Change, person by person', descHi: 'एक-एक व्यक्ति का बदलाव' },
      { label: 'Annual Reports', labelHi: 'वार्षिक रिपोर्ट', to: '/impact/annual-reports', desc: 'Audited yearly results', descHi: 'लेखापरीक्षित परिणाम' },
      { label: 'Program Outcomes', labelHi: 'कार्यक्रम परिणाम', to: '/impact/program-outcomes', desc: 'Outcomes by programme', descHi: 'कार्यक्रमवार परिणाम' },
      { label: 'Gallery', labelHi: 'गैलरी', to: '/impact/gallery', desc: 'From the field', descHi: 'क्षेत्र से' }
    ]
  },
  {
    label: 'People', labelHi: 'हमारी टीम',
    to: '/people',
    summary: 'The teams, boards and volunteers who make it possible.',
    children: [
      { label: 'Leadership Team', labelHi: 'नेतृत्व टीम', to: '/people/leadership-team', desc: 'Executive leadership', descHi: 'कार्यकारी नेतृत्व' },
      { label: 'Executive Members', labelHi: 'कार्यकारी सदस्य', to: '/people/executive-members', desc: 'Our executive members', descHi: 'कार्यकारी सदस्य' },
      { label: 'Advisors', labelHi: 'सलाहकार', to: '/people/advisors', desc: 'Subject-matter guidance', descHi: 'विशेषज्ञ मार्गदर्शन' },
      { label: 'Volunteers', labelHi: 'स्वयंसेवक', to: '/people/volunteers', desc: 'The wider community', descHi: 'व्यापक समुदाय' }
    ]
  },
  {
    label: 'Knowledge Hub', labelHi: 'ज्ञान केंद्र',
    to: '/knowledge-hub',
    summary: 'Research, evidence and practice we share openly.',
    children: [
      { label: 'Reports', labelHi: 'रिपोर्ट', to: '/knowledge-hub/reports', desc: 'Programme & thematic reports', descHi: 'कार्यक्रम रिपोर्ट' },
      { label: 'Research', labelHi: 'शोध', to: '/knowledge-hub/research', desc: 'Studies and evaluations', descHi: 'अध्ययन एवं मूल्यांकन' },
      { label: 'Publications', labelHi: 'प्रकाशन', to: '/knowledge-hub/publications', desc: 'Briefs and toolkits', descHi: 'संक्षेप एवं टूलकिट' },
      { label: 'Case Studies', labelHi: 'केस स्टडी', to: '/knowledge-hub/case-studies', desc: 'What worked, and why', descHi: 'क्या काम आया, और क्यों' }
    ]
  },
  {
    label: 'Partners', labelHi: 'साझेदार',
    to: '/partners',
    summary: 'We work through partnership, not alone.',
    children: [
      { label: 'CSR Partners', labelHi: 'सीएसआर साझेदार', to: '/partners/csr-partners', desc: 'Corporate collaborators', descHi: 'कॉर्पोरेट सहयोगी' },
      { label: 'Government Partners', labelHi: 'सरकारी साझेदार', to: '/partners/government-partners', desc: 'Public institutions', descHi: 'सार्वजनिक संस्थाएँ' },
      { label: 'Community Organizations', labelHi: 'सामुदायिक संगठन', to: '/partners/community-organizations', desc: 'Grassroots networks', descHi: 'ज़मीनी नेटवर्क' },
      { label: 'Supporters', labelHi: 'समर्थक', to: '/partners/supporters', desc: 'Individuals and trusts', descHi: 'व्यक्ति एवं ट्रस्ट' }
    ]
  },
  {
    label: 'News & Updates', labelHi: 'समाचार एवं अपडेट',
    to: '/news',
    summary: 'The latest from the Foundation and the field.',
    children: [
      { label: 'News', labelHi: 'समाचार', to: '/news', desc: 'Foundation news', descHi: 'फाउंडेशन समाचार' },
      { label: 'Events', labelHi: 'कार्यक्रम', to: '/news/events', desc: 'Convenings and dates', descHi: 'आयोजन एवं तिथियाँ' },
      { label: 'Announcements', labelHi: 'घोषणाएँ', to: '/news/announcements', desc: 'Notices and updates', descHi: 'सूचनाएँ एवं अपडेट' },
      { label: 'Field Stories', labelHi: 'क्षेत्र की कहानियाँ', to: '/blog', desc: 'Dispatches from our programmes', descHi: 'कार्यक्रमों से रिपोर्ट' }
    ]
  }
]

export const GET_INVOLVED = {
  label: 'Get Involved', labelHi: 'सहभागी बनें',
  to: '/get-involved',
  children: [
    { label: 'Donate', labelHi: 'दान करें', to: '/get-involved/donate' },
    { label: 'Volunteer', labelHi: 'स्वयंसेवा', to: '/get-involved/volunteer' },
    { label: 'Partner With Us', labelHi: 'हमारे साथ जुड़ें', to: '/get-involved/partner-with-us' }
  ]
}
