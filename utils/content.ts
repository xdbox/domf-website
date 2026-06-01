// =============================================================
// Content registry — one entry per IA route (rendered by [...slug].vue
// via PageTemplate). Bespoke pages (home) are NOT here. Field Stories
// live under /blog (useBlog). Keep content here; swap to a CMS later.
// =============================================================

export interface Block {
  type:
    | 'metrics' | 'prose' | 'focusGrid' | 'cards' | 'split' | 'list'
    | 'people' | 'reports' | 'regions' | 'timeline' | 'gallery'
    | 'quote' | 'logos' | 'faq' | 'cta' | 'stories'
  band?: boolean
  narrow?: boolean
  center?: boolean
  kicker?: string
  heading?: string
  lede?: string
  tone?: 'green' | 'red'
  // flexible payload per block type
  items?: any[]
  body?: string[]
  lead?: boolean
  images?: string[]
  // split
  subkicker?: string
  subheading?: string
  img?: string
  side?: 'left' | 'right'
  caption?: string
  bullets?: string[]
  link?: { label: string; to: string }
  // quote
  text?: string
  name?: string
  role?: string
  // cta
  primary?: { label: string; to: string }
  secondary?: { label: string; to: string }
}

export interface PageContent {
  title: string
  kicker?: string
  intro?: string
  heroImage?: string
  blocks: Block[]
  /** Optional Hindi override (merged over the English page in हिंदी mode). */
  hi?: { title?: string; kicker?: string; intro?: string; blocks?: Block[] }
}

// ---- reusable fragments ----
const ctaPartner: Block = {
  type: 'cta', tone: 'green',
  heading: 'Build something lasting with us.',
  text: 'We work through long-term partnership with communities, government and responsible companies.',
  primary: { label: 'Partner With Us', to: '/get-involved/partner-with-us' },
  secondary: { label: 'Contact the team', to: '/contact' }
}
const ctaDonate: Block = {
  type: 'cta', tone: 'red',
  heading: 'Your support reaches the last village first.',
  text: 'Every contribution is tracked to a programme outcome and reported transparently.',
  primary: { label: 'Donate', to: '/get-involved/donate' },
  secondary: { label: 'See our impact', to: '/impact/dashboard' }
}
// Hindi versions of the reusable CTAs, used inside hi blocks.
const ctaPartnerHi: Block = {
  type: 'cta', tone: 'green',
  heading: 'हमारे साथ कुछ स्थायी बनाएँ।',
  text: 'हम समुदायों, सरकार और ज़िम्मेदार कंपनियों के साथ दीर्घकालिक साझेदारी के माध्यम से कार्य करते हैं।',
  primary: { label: 'हमारे साझेदार बनें', to: '/get-involved/partner-with-us' },
  secondary: { label: 'टीम से संपर्क करें', to: '/contact' }
}
const ctaDonateHi: Block = {
  type: 'cta', tone: 'red',
  heading: 'आपका सहयोग सबसे पहले अंतिम गाँव तक पहुँचता है।',
  text: 'हर योगदान को कार्यक्रम के परिणाम से जोड़कर पारदर्शिता के साथ रिपोर्ट किया जाता है।',
  primary: { label: 'दान करें', to: '/get-involved/donate' },
  secondary: { label: 'हमारा प्रभाव देखें', to: '/impact/dashboard' }
}

export const PAGES: Record<string, PageContent> = {
  // ============================= WHO WE ARE =============================
  '/who-we-are': {
    kicker: 'Who We Are',
    title: 'A foundation built on patience, evidence and trust.',
    intro: 'A Section 8 non-profit working alongside the rural and tribal communities of Jharkhand. This is who we are — where we came from, what we believe, and how we hold ourselves accountable.',
    heroImage: 'domf-about-hero',
    blocks: [
      { type: 'prose', lead: true, kicker: 'The challenge we address', heading: 'Rich in resources, yet held back.', body: [
        'Jharkhand possesses abundant forests, fertile land, water resources, biodiversity and strong indigenous knowledge systems — yet a large section of its rural and tribal population continues to face poverty, unemployment, migration, malnutrition, weak healthcare access and economic insecurity.',
        'Most families depend on agriculture, but farming remains largely rain-fed, low-productivity, seasonal and disconnected from modern markets. Farmers lack irrigation, quality seeds, technical knowledge, storage, processing and direct market access. With low incomes, youth migrate to cities for insecure labour, women remain economically underutilised, and children face weak schooling, the digital divide and absent career guidance.',
        'At the same time, indigenous culture, traditional ecological wisdom and community institutions are weakening, and many communities are unaware of their rights under the Fifth Schedule, Gram Sabha powers and forest rights.',
        'These challenges are connected — and so our response has to be. The pages below set out the model, the people and the principles we bring to it.'
      ] },
      { type: 'focusGrid', kicker: 'Explore', heading: 'Understand the Foundation', items: [
        { tag: 'Story', title: 'Our Story', text: 'How a memorial became a movement for tribal development.', to: '/who-we-are/our-story' },
        { tag: 'Direction', title: 'Vision & Mission', text: 'The future we work towards, and how we get there.', to: '/who-we-are/vision-mission' },
        { tag: 'Principles', title: 'Values & Objects', text: 'The commitments that govern every decision, and the objects we are bound to pursue.', to: '/who-we-are/values-objects' },
        { tag: 'People', title: 'Leadership', text: 'The people accountable for our work.', to: '/who-we-are/leadership' },
        { tag: 'Trust', title: 'Governance & Transparency', text: 'Audited finances, open reporting, independent oversight.', to: '/who-we-are/governance-transparency' },
        { tag: 'Evidence', title: 'Our Impact', text: 'What has changed, reported honestly.', to: '/impact' }
      ] },
      ctaPartner
    ],
    hi: {
      kicker: 'हम कौन हैं',
      title: 'धैर्य, साक्ष्य और विश्वास पर आधारित एक फाउंडेशन।',
      intro: 'झारखंड के ग्रामीण एवं आदिवासी समुदायों के साथ काम करने वाली एक धारा 8 गैर-लाभकारी संस्था। यही हम हैं — हम कहाँ से आए, हम क्या मानते हैं, और हम स्वयं को कैसे जवाबदेह रखते हैं।',
      blocks: [
        { type: 'prose', lead: true, kicker: 'हम जिस चुनौती का समाधान करते हैं', heading: 'संसाधनों से भरपूर, फिर भी पिछड़ा।', body: [
          'झारखंड जंगलों, उपजाऊ भूमि, जल स्रोतों, जैव विविधता और पारंपरिक आदिवासी ज्ञान से समृद्ध राज्य है, फिर भी यहाँ की बड़ी ग्रामीण एवं आदिवासी आबादी गरीबी, बेरोजगारी, पलायन, कुपोषण, कमजोर स्वास्थ्य सेवाओं और आर्थिक असुरक्षा से जूझ रही है।',
          'अधिकांश परिवार कृषि पर निर्भर हैं, लेकिन खेती मुख्यतः वर्षा-आधारित, कम उत्पादन वाली और बाजार से असंबद्ध है। किसानों को सिंचाई, गुणवत्तापूर्ण बीज, तकनीक, भंडारण और बाजार तक पहुँच नहीं मिलती। कम आय के कारण युवा शहरों में पलायन करते हैं, महिलाएँ आर्थिक अवसरों से वंचित रहती हैं, और बच्चों को गुणवत्तापूर्ण शिक्षा एवं मार्गदर्शन नहीं मिलता।',
          'साथ ही आदिवासी संस्कृति, पारंपरिक ज्ञान और सामुदायिक व्यवस्था कमजोर हो रही है; कई समुदाय पाँचवीं अनुसूची, ग्राम सभा अधिकार एवं वन अधिकार की जानकारी से वंचित हैं।',
          'ये चुनौतियाँ आपस में जुड़ी हैं — इसलिए हमारा उत्तर भी जुड़ा हुआ होना चाहिए। नीचे दिए पृष्ठ हमारे मॉडल, हमारे लोगों और हमारे सिद्धांतों को प्रस्तुत करते हैं।'
        ] },
        { type: 'focusGrid', kicker: 'जानें', heading: 'फाउंडेशन को समझें', items: [
          { tag: 'कहानी', title: 'हमारी कहानी', text: 'कैसे एक स्मृति आदिवासी विकास का आंदोलन बनी।', to: '/who-we-are/our-story' },
          { tag: 'दिशा', title: 'दृष्टि एवं मिशन', text: 'जिस भविष्य के लिए हम काम करते हैं, और कैसे।', to: '/who-we-are/vision-mission' },
          { tag: 'सिद्धांत', title: 'मूल्य एवं उद्देश्य', text: 'वे प्रतिबद्धताएँ जो हर निर्णय का संचालन करती हैं, और जिन उद्देश्यों को पूरा करने के लिए हम बाध्य हैं।', to: '/who-we-are/values-objects' },
          { tag: 'लोग', title: 'नेतृत्व', text: 'हमारे कार्य के लिए उत्तरदायी लोग।', to: '/who-we-are/leadership' },
          { tag: 'विश्वास', title: 'शासन एवं पारदर्शिता', text: 'अंकेक्षित वित्त, खुली रिपोर्टिंग, स्वतंत्र निगरानी।', to: '/who-we-are/governance-transparency' },
          { tag: 'साक्ष्य', title: 'हमारा प्रभाव', text: 'क्या बदला, ईमानदारी से प्रस्तुत।', to: '/impact' }
        ] },
        ctaPartnerHi
      ]
    }
  },
  '/who-we-are/our-story': {
    kicker: 'Our Story', title: 'A son’s memory. A teacher’s vision.',
    intro: 'Founded in April 2022 and named in memory of Dharmes Oraon, the late son of Dr. Karma Oraon, the Foundation carries forward a lifelong belief that education and dignity belong to everyone.',
    heroImage: 'domf-story',
    blocks: [
      { type: 'prose', lead: true, body: [
        'The Dharmes Oraon Memorial Foundation was founded in April 2022 by Dr. Karma Oraon and Shanti Oraon, and grew from the legacy of the late Dr. Karma Oraon — a teacher, anthropologist and lifelong advocate for social justice. Named after his late son Dharmes Oraon to honour his memory, the Foundation stands for helping those in need and making their dreams come true.',
        'Dr. Oraon believed education is not only the path to knowledge or a livelihood, but the way to build an ethos that drives a person to give back to society. He saw education as central to breaking the cycle of poverty — and that conviction shapes everything we do.',
        'Although the Foundation is young, it carries the spirit of his deep belief in fairness and the empowerment of all. It stands as a promise: that more voices will be heard, more opportunities created, and more lives helped to reach their full potential.'
      ] },
      { type: 'split', subkicker: 'The man behind the vision', subheading: 'Dr. Karma Oraon (in memoriam).', img: 'domf-leadership', body: [
        'Born in the small village of Mahuwatoli, Longa, Bishunpur (Gumla district), Jharkhand, Dr. Karma Oraon rose to become a leading figure in anthropology. He earned an M.Sc. in Anthropology, an L.L.B. and a Ph.D., and served the Department of Anthropology at Ranchi University — where he became a Professor and Head of Department.',
        'He contributed to education and research at national and international levels, collaborating with academic communities on anthropology, education and indigenous peoples’ studies. He also served as a member of the Bihar Public Service Commission. He envisioned a society educated, socially and economically strong, and rich in its diverse cultures — one with the capacity to care for the well-being of all its sections.'
      ], bullets: ['Professor & Head, Department of Anthropology, Ranchi University', 'M.Sc. Anthropology · L.L.B. · Ph.D.', 'Member, Bihar Public Service Commission', 'National & international research on indigenous peoples'] },
      { type: 'quote', text: 'Education is not just for knowledge or one’s own future — it should build the ethos that drives you to give back to society.', name: 'Dr. Karma Oraon', role: 'Founding inspiration' },
      ctaDonate
    ],
    hi: {
      kicker: 'हमारी कहानी', title: 'एक पुत्र की स्मृति। एक शिक्षक की दृष्टि।',
      intro: 'अप्रैल 2022 में स्थापित और डॉ. कर्मा उरांव के दिवंगत पुत्र धर्मेश उरांव की स्मृति में नामित, यह फाउंडेशन इस आजीवन विश्वास को आगे बढ़ाता है कि शिक्षा और गरिमा पर सभी का अधिकार है।',
      blocks: [
        { type: 'prose', lead: true, body: [
          'धर्मेश उरांव मेमोरियल फाउंडेशन की स्थापना अप्रैल 2022 में डॉ. कर्मा उरांव और शांति उरांव द्वारा की गई, और यह दिवंगत डॉ. कर्मा उरांव की विरासत से विकसित हुआ — एक शिक्षक, मानवविज्ञानी और सामाजिक न्याय के आजीवन समर्थक। उनके दिवंगत पुत्र धर्मेश उरांव की स्मृति में नामित यह फाउंडेशन ज़रूरतमंदों की मदद करने और उनके सपनों को साकार करने के लिए समर्पित है।',
          'डॉ. उरांव का मानना था कि शिक्षा केवल ज्ञान या आजीविका का मार्ग नहीं है, बल्कि वह मूल्यबोध गढ़ने का माध्यम है जो व्यक्ति को समाज को कुछ लौटाने के लिए प्रेरित करता है। उन्होंने शिक्षा को गरीबी के चक्र को तोड़ने का केंद्र माना — और यही विश्वास हमारे हर कार्य को आकार देता है।',
          'यद्यपि फाउंडेशन नया है, यह सबके प्रति निष्पक्षता और सशक्तिकरण में उनके गहरे विश्वास की भावना को आगे ले जाता है। यह एक वचन है: कि अधिक आवाज़ें सुनी जाएँगी, अधिक अवसर बनेंगे और अधिक जीवन अपनी पूरी क्षमता तक पहुँच सकेंगे।'
        ] },
        { type: 'split', subkicker: 'दृष्टि के पीछे का व्यक्ति', subheading: 'डॉ. कर्मा उरांव (श्रद्धांजलि)।', img: 'domf-leadership', body: [
          'गुमला ज़िले के बिशुनपुर के लोंगा स्थित महुवाटोली नामक छोटे से गाँव में जन्मे डॉ. कर्मा उरांव मानवविज्ञान के क्षेत्र में एक प्रमुख व्यक्ति बने। उन्होंने मानवविज्ञान में एम.एससी., एल.एल.बी. और पीएच.डी. अर्जित की, और रांची विश्वविद्यालय के मानवविज्ञान विभाग में सेवा दी — जहाँ वे प्रोफ़ेसर और विभागाध्यक्ष बने।',
          'उन्होंने राष्ट्रीय और अंतर्राष्ट्रीय स्तर पर शिक्षा और शोध में योगदान दिया, मानवविज्ञान, शिक्षा और स्वदेशी जन-अध्ययन पर शैक्षणिक समुदायों के साथ सहयोग किया। वे बिहार लोक सेवा आयोग के सदस्य भी रहे। उन्होंने एक ऐसे समाज की कल्पना की जो शैक्षिक, सामाजिक और आर्थिक रूप से सशक्त हो और अपनी विविध संस्कृतियों में समृद्ध हो — जो अपने सभी वर्गों के कल्याण का ध्यान रख सके।'
        ], bullets: ['प्रोफ़ेसर एवं विभागाध्यक्ष, मानवविज्ञान विभाग, रांची विश्वविद्यालय', 'एम.एससी. मानवविज्ञान · एल.एल.बी. · पीएच.डी.', 'सदस्य, बिहार लोक सेवा आयोग', 'स्वदेशी जनों पर राष्ट्रीय एवं अंतर्राष्ट्रीय शोध'] },
        { type: 'quote', text: 'शिक्षा केवल ज्ञान या अपने भविष्य के लिए नहीं है — इसे वह मूल्यबोध गढ़ना चाहिए जो आपको समाज को कुछ लौटाने के लिए प्रेरित करे।', name: 'डॉ. कर्मा उरांव', role: 'संस्थापक प्रेरणा' },
        ctaDonateHi
      ]
    }
  },
  '/who-we-are/vision-mission': {
    kicker: 'Vision & Mission', title: 'Self-reliant villages, built on their own land and resources.',
    intro: 'To empower rural and tribal communities through sustainable agro-based livelihoods, education, healthcare, skill development and community leadership — using local land, resources, culture and technology for self-reliant village development.',
    blocks: [
      { type: 'split', subkicker: 'Our Mission', subheading: 'Income first, from local land and resources.', img: 'domf-mission', body: [
        'We believe lasting improvement in health, education and social development is only possible when rural families achieve stable, diversified income. So agro-based livelihood development remains the core driver of everything we do.',
        'We work to put rural land, water, forests, traditional knowledge and human resources to their full productive potential — combining traditional wisdom with modern science, and building local leadership and community ownership.'
      ], bullets: ['Sustainable agro-based livelihoods', 'Education, healthcare & skill development', 'Women empowerment & community leadership', 'Local land, culture and technology'] },
      { type: 'split', side: 'right', subkicker: 'Our Vision', subheading: 'Prosperous, migration-free villages.', img: 'domf-vision', body: [
        'We envision self-reliant rural ecosystems across Jharkhand where communities prosper with dignity using their own resources — instead of dependency-based welfare.'
      ] },
      { type: 'metrics', kicker: 'Our 5-year vision', heading: 'Where we are headed', items: [
        { value: 5, unit: '-yr', label: 'Horizon to build self-reliant rural ecosystems', color: 'red' },
        { value: 100, unit: '%', label: 'Community-led, agro-based income generation', color: 'green' },
        { value: 0, unit: '', label: 'The goal: migration-free, prosperous villages', color: 'ink' }
      ] },
      ctaPartner
    ],
    hi: {
      kicker: 'दृष्टि एवं मिशन',
      title: 'आत्मनिर्भर गाँव, अपनी ही भूमि और संसाधनों पर आधारित।',
      intro: 'ग्रामीण एवं आदिवासी समुदायों को स्थानीय भूमि, संसाधन, संस्कृति और तकनीक के माध्यम से कृषि-आधारित आजीविका, शिक्षा, स्वास्थ्य, कौशल विकास एवं आत्मनिर्भर ग्राम विकास द्वारा सशक्त बनाना।',
      blocks: [
        { type: 'split', subkicker: 'हमारा मिशन', subheading: 'पहले आय — स्थानीय भूमि और संसाधनों से।', img: 'domf-mission', body: [
          'फाउंडेशन का मानना है कि स्वास्थ्य, शिक्षा और सामाजिक विकास तभी संभव है जब ग्रामीण परिवारों की स्थायी और विविध आय सुनिश्चित हो। इसलिए कृषि-आधारित आजीविका विकास इस मॉडल का मुख्य आधार है।',
          'हम ग्रामीण भूमि, जल, वन, पारंपरिक ज्ञान और मानव संसाधन को उनकी पूर्ण उत्पादक क्षमता तक उपयोग में लाने का कार्य करते हैं — पारंपरिक ज्ञान और आधुनिक विज्ञान को जोड़ते हुए, स्थानीय नेतृत्व का निर्माण करते हुए।'
        ], bullets: ['सतत कृषि-आधारित आजीविका', 'शिक्षा, स्वास्थ्य एवं कौशल विकास', 'महिला सशक्तिकरण एवं सामुदायिक नेतृत्व', 'स्थानीय भूमि, संस्कृति एवं तकनीक'] },
        { type: 'split', side: 'right', subkicker: 'हमारी दृष्टि', subheading: 'समृद्ध, पलायन-मुक्त गाँव।', img: 'domf-vision', body: [
          'हम झारखंड में ऐसे आत्मनिर्भर ग्रामीण तंत्र की कल्पना करते हैं जहाँ समुदाय अपने ही संसाधनों से सम्मान के साथ समृद्ध हों — निर्भरता-आधारित कल्याण के बजाय।'
        ] },
        { type: 'metrics', kicker: 'हमारी पाँच वर्षीय दृष्टि', heading: 'हम कहाँ जा रहे हैं', items: [
          { value: 5, unit: '-वर्ष', label: 'आत्मनिर्भर ग्रामीण तंत्र बनाने की समय-सीमा', color: 'red' },
          { value: 100, unit: '%', label: 'समुदाय-नेतृत्व वाली, कृषि-आधारित आय', color: 'green' },
          { value: 0, unit: '', label: 'लक्ष्य: पलायन-मुक्त, समृद्ध गाँव', color: 'ink' }
        ] },
        ctaPartnerHi
      ]
    }
  },
  '/who-we-are/leadership': {
    kicker: 'Founders & Leadership', title: 'Begun by two. Carried forward by a community.',
    intro: 'The Foundation was established in April 2022 by its founders, Dr. Karma Oraon and Shanti Oraon, to carry forward a lifelong commitment to education, dignity and social justice.',
    blocks: [
      { type: 'list', items: [
        { title: 'Dr. Karma Oraon — Founder (in memoriam)', text: 'Professor and Head of the Department of Anthropology at Ranchi University, and a lifelong advocate for education and social justice. His conviction — that education must build the ethos to give back to society — is the foundation of all our work. Dr. Oraon is no longer with us; the Foundation carries his name and vision forward.' },
        { title: 'Shanti Oraon — Founder', text: 'Co-founder of the Foundation, committed to its mission of empowering rural and tribal communities through education, sustainable livelihoods and dignity.' }
      ] },
      { type: 'people', kicker: 'Office bearers', heading: 'Our governing body', items: [
        { name: 'Shri Akash Deep Bhagat', role: 'Director' },
        { name: 'Smt. Shanti Oraon', role: 'Secretary' },
        { name: 'Shri Kamaldev Oraon', role: 'Joint Secretary' },
        { name: 'Shri Jeeta Oraon', role: 'Treasurer' }
      ] },
      { type: 'split', subkicker: 'How we work', subheading: 'A young foundation, close to the community.', img: 'domf-leadership', body: [
        'As a Section 8 non-profit registered in 2022, the Foundation is governed transparently and works directly with the communities it serves. Our governance documents and financial disclosures are published openly.'
      ], link: { label: 'See governance & transparency', to: '/who-we-are/governance-transparency' } },
      ctaPartner
    ],
    hi: {
      kicker: 'संस्थापक एवं नेतृत्व', title: 'दो लोगों से आरंभ। एक समुदाय द्वारा आगे।',
      intro: 'फाउंडेशन की स्थापना अप्रैल 2022 में इसके संस्थापकों डॉ. कर्मा उरांव और शांति उरांव द्वारा की गई, ताकि शिक्षा, गरिमा और सामाजिक न्याय के प्रति आजीवन प्रतिबद्धता को आगे बढ़ाया जा सके।',
      blocks: [
        { type: 'list', items: [
          { title: 'डॉ. कर्मा उरांव — संस्थापक (श्रद्धांजलि)', text: 'रांची विश्वविद्यालय के मानवविज्ञान विभाग के प्रोफ़ेसर एवं विभागाध्यक्ष, और शिक्षा व सामाजिक न्याय के आजीवन समर्थक। उनका विश्वास — कि शिक्षा को समाज को कुछ लौटाने का मूल्यबोध गढ़ना चाहिए — हमारे समस्त कार्य की नींव है। डॉ. उरांव अब हमारे बीच नहीं हैं; फाउंडेशन उनके नाम और दृष्टि को आगे ले जाता है।' },
          { title: 'शांति उरांव — संस्थापक', text: 'फाउंडेशन की सह-संस्थापक, जो शिक्षा, सतत आजीविका और गरिमा के माध्यम से ग्रामीण एवं आदिवासी समुदायों के सशक्तिकरण के मिशन के प्रति समर्पित हैं।' }
        ] },
        { type: 'people', kicker: 'पदाधिकारी', heading: 'हमारी शासी समिति', items: [
          { name: 'श्री आकाश दीप भगत', role: 'निदेशक' },
          { name: 'श्रीमती शांति उरांव', role: 'सचिव' },
          { name: 'श्री कमलदेव उरांव', role: 'संयुक्त सचिव' },
          { name: 'श्री जीता उरांव', role: 'कोषाध्यक्ष' }
        ] },
        { type: 'split', subkicker: 'हम कैसे काम करते हैं', subheading: 'एक युवा फाउंडेशन, समुदाय के निकट।', img: 'domf-leadership', body: [
          '2022 में पंजीकृत एक धारा 8 गैर-लाभकारी संस्था के रूप में, फाउंडेशन पारदर्शी ढंग से संचालित होता है और जिन समुदायों की सेवा करता है उनके साथ सीधे काम करता है। हमारे शासन दस्तावेज़ और वित्तीय विवरण खुले तौर पर प्रकाशित किए जाते हैं।'
        ], link: { label: 'शासन एवं पारदर्शिता देखें', to: '/who-we-are/governance-transparency' } },
        ctaPartnerHi
      ]
    }
  },
  '/who-we-are/governance-transparency': {
    kicker: 'Governance & Transparency', title: 'Open by default. Audited by principle.',
    intro: 'We hold ourselves to standards stronger than the law requires, because trust is the currency a foundation runs on.',
    blocks: [
      { type: 'metrics', items: [
        { value: 92, unit: '%', label: 'Of spend reaching programmes', color: 'green' },
        { value: 8, unit: '%', label: 'Administration & fundraising', color: 'red' },
        { value: 100, unit: '%', label: 'Of audits published', color: 'green' },
        { value: 4, unit: '', label: 'Independent board reviews a year', color: 'ink' }
      ] },
      { type: 'split', subkicker: 'Legal status', subheading: 'A registered Section 8 non-profit.', body: [
        'The Foundation is incorporated under the Companies Act, 2013 as a not-for-profit company (Section 8), limited by shares, registered on 29 April 2022 with the Ministry of Corporate Affairs, Government of India. Our registered office is at Morabadi, Ranchi, Jharkhand.'
      ], bullets: [
        'CIN: U85300JH2022NPL018588',
        'PAN: AAJCD2544A',
        'TAN: RCHD02826F'
      ] },
      { type: 'reports', kicker: 'On the record', heading: 'Financials & governance documents', items: [
        { title: 'Certificate of Incorporation', meta: 'PDF · Ministry of Corporate Affairs', tag: 'Registration' },
        { title: 'Audited Financial Statements 2024–25', meta: 'PDF · Independent auditor', tag: 'Finance' },
        { title: 'Annual Report 2024–25', meta: 'PDF · 64 pages', tag: 'Report' },
        { title: 'Board Charter & Conflict-of-Interest Policy', meta: 'PDF · Governance', tag: 'Policy' },
        { title: 'Child Protection & Safeguarding Policy', meta: 'PDF · Safeguarding', tag: 'Policy' }
      ] },
      { type: 'faq', kicker: 'Questions', heading: 'Transparency, answered', items: [
        { q: 'How is my contribution used?', a: 'Contributions are allocated to programmes you can choose, tracked to outcomes, and reported in our annual report and impact dashboard.' },
        { q: 'Are you independently audited?', a: 'Yes. Our accounts are audited annually by an independent firm and the full statements are published on this page.' },
        { q: 'How do you measure impact?', a: 'Our Impact & Research team uses baseline and follow-up data, third-party evaluation, and outcome indicators agreed with communities.' }
      ] },
      ctaDonate
    ],
    hi: {
      kicker: 'शासन एवं पारदर्शिता', title: 'स्वभाव से खुले। सिद्धांत से अंकेक्षित।',
      intro: 'हम स्वयं को कानून की अपेक्षा से भी कठोर मानकों पर रखते हैं, क्योंकि विश्वास ही वह पूँजी है जिस पर कोई फाउंडेशन चलता है।',
      blocks: [
        { type: 'metrics', items: [
          { value: 92, unit: '%', label: 'व्यय जो कार्यक्रमों तक पहुँचता है', color: 'green' },
          { value: 8, unit: '%', label: 'प्रशासन एवं धन-संग्रह', color: 'red' },
          { value: 100, unit: '%', label: 'प्रकाशित अंकेक्षण', color: 'green' },
          { value: 4, unit: '', label: 'प्रति वर्ष स्वतंत्र बोर्ड समीक्षाएँ', color: 'ink' }
        ] },
        { type: 'split', subkicker: 'कानूनी स्थिति', subheading: 'एक पंजीकृत धारा 8 गैर-लाभकारी संस्था।', body: [
          'फाउंडेशन कंपनी अधिनियम, 2013 के अंतर्गत एक गैर-लाभकारी कंपनी (धारा 8) के रूप में निगमित है, जो शेयरों द्वारा सीमित है और 29 अप्रैल 2022 को भारत सरकार के कॉर्पोरेट कार्य मंत्रालय में पंजीकृत हुई। हमारा पंजीकृत कार्यालय मोराबादी, रांची, झारखंड में है।'
        ], bullets: [
          'CIN: U85300JH2022NPL018588',
          'PAN: AAJCD2544A',
          'TAN: RCHD02826F'
        ] },
        { type: 'reports', kicker: 'अभिलेख में', heading: 'वित्तीय एवं शासन दस्तावेज़', items: [
          { title: 'निगमन प्रमाणपत्र', meta: 'PDF · कॉर्पोरेट कार्य मंत्रालय', tag: 'पंजीकरण' },
          { title: 'अंकेक्षित वित्तीय विवरण 2024–25', meta: 'PDF · स्वतंत्र अंकेक्षक', tag: 'वित्त' },
          { title: 'वार्षिक रिपोर्ट 2024–25', meta: 'PDF · 64 पृष्ठ', tag: 'रिपोर्ट' },
          { title: 'बोर्ड चार्टर एवं हित-टकराव नीति', meta: 'PDF · शासन', tag: 'नीति' },
          { title: 'बाल संरक्षण एवं सुरक्षा नीति', meta: 'PDF · सुरक्षा', tag: 'नीति' }
        ] },
        { type: 'faq', kicker: 'प्रश्न', heading: 'पारदर्शिता, उत्तरों में', items: [
          { q: 'मेरे योगदान का उपयोग कैसे होता है?', a: 'योगदान आपके चुने हुए कार्यक्रमों को आवंटित किए जाते हैं, परिणामों से जोड़े जाते हैं, और हमारी वार्षिक रिपोर्ट व प्रभाव डैशबोर्ड में रिपोर्ट किए जाते हैं।' },
          { q: 'क्या आपका स्वतंत्र अंकेक्षण होता है?', a: 'हाँ। हमारे खातों का प्रतिवर्ष एक स्वतंत्र फर्म द्वारा अंकेक्षण होता है और पूर्ण विवरण इस पृष्ठ पर प्रकाशित किए जाते हैं।' },
          { q: 'आप प्रभाव कैसे मापते हैं?', a: 'हमारी प्रभाव एवं शोध टीम आधार-रेखा व अनुवर्ती आँकड़ों, तृतीय-पक्ष मूल्यांकन और समुदायों के साथ सहमत परिणाम-संकेतकों का उपयोग करती है।' }
        ] },
        ctaDonateHi
      ]
    }
  },
  '/who-we-are/values-objects': {
    kicker: 'Values & Objects', title: 'The principles we hold — and the promises we keep.',
    intro: 'The commitments that guide every decision we make, and the charitable objects we are formally bound to pursue.',
    blocks: [
      { type: 'list', kicker: 'Our values', heading: 'Five commitments we are willing to be judged on', items: [
        { title: 'Community first', text: 'Programmes are designed with communities and led locally wherever possible. We listen before we plan.' },
        { title: 'Evidence over optics', text: 'We fund what works and stop what does not, even when it is uncomfortable. Outcomes beat anecdotes.' },
        { title: 'Radical transparency', text: 'Our finances, methods and results are open. Trust is earned with disclosure, not slogans.' },
        { title: 'Dignity always', text: 'Every person we work with is a partner, never a beneficiary to be displayed. We protect privacy and agency.' },
        { title: 'Patience', text: 'Real change compounds over years. We commit for the long term and resist the pull of quick wins.' }
      ] },
      { type: 'prose', lead: true, body: [
        'Beyond those values, our work is bound by a formal charter, registered under Section 8 of the Companies Act, 2013. Behind its legal language is something simple: a belief that every person — whatever their birth, gender or village — deserves education, health, dignity and a fair chance.',
        'Those commitments gather into a handful of human promises — the work we were founded to do.'
      ] },
      { type: 'focusGrid', kicker: 'What we were founded to do', heading: 'Six promises our charter makes', items: [
        { title: 'Education & opportunity', text: 'Schools, colleges, skills, scholarships and libraries — so opportunity does not depend on where a child is born.' },
        { title: 'Health & care', text: 'Hospitals, doorstep clinics, maternal and child health, and care for those who have no one else.' },
        { title: 'Livelihoods & land', text: 'Organic farming, fair markets, skill training and self-help groups that turn local resources into stable income.' },
        { title: 'Women, children & dignity', text: 'Empowerment, safe homes and counselling — and an end to dowry harassment, child marriage and trafficking.' },
        { title: 'Environment & future', text: 'Tree planting, medicinal forests and pollution control to protect the land that feeds the community.' },
        { title: 'Community, culture & relief', text: 'Brotherhood across faiths, living culture, disaster relief, and help in people’s hardest moments.' }
      ] },
      { type: 'quote', text: 'A charter is only paper until it reaches a person. Ours exists to be kept — in villages, one life at a time.', name: 'Dharmes Oraon Memorial Foundation', role: 'Our purpose' },
      ctaPartner
    ],
    hi: {
      kicker: 'मूल्य एवं उद्देश्य', title: 'जिन सिद्धांतों को हम मानते हैं — और जो वचन हम निभाते हैं।',
      intro: 'वे प्रतिबद्धताएँ जो हमारे हर निर्णय का मार्गदर्शन करती हैं, और वे परोपकारी उद्देश्य जिन्हें पूरा करने के लिए हम औपचारिक रूप से बाध्य हैं।',
      blocks: [
        { type: 'list', kicker: 'हमारे मूल्य', heading: 'पाँच प्रतिबद्धताएँ जिन पर हम परखे जाने को तैयार हैं', items: [
          { title: 'समुदाय सर्वोपरि', text: 'कार्यक्रम समुदायों के साथ मिलकर बनाए जाते हैं और जहाँ संभव हो स्थानीय स्तर पर संचालित होते हैं। हम योजना बनाने से पहले सुनते हैं।' },
          { title: 'दिखावे से ऊपर साक्ष्य', text: 'हम उसे वित्तपोषित करते हैं जो काम करता है और जो नहीं करता उसे रोक देते हैं, भले ही यह असहज हो। परिणाम किस्सों से बड़े होते हैं।' },
          { title: 'पूर्ण पारदर्शिता', text: 'हमारी वित्तीय जानकारी, तरीके और परिणाम खुले हैं। विश्वास नारों से नहीं, खुलेपन से अर्जित होता है।' },
          { title: 'सदैव गरिमा', text: 'हम जिनके साथ काम करते हैं वे सहयोगी हैं, प्रदर्शित किए जाने वाले लाभार्थी नहीं। हम निजता और स्वायत्तता की रक्षा करते हैं।' },
          { title: 'धैर्य', text: 'वास्तविक बदलाव वर्षों में संचित होता है। हम दीर्घकाल के लिए प्रतिबद्ध रहते हैं और जल्दी सफलता के आकर्षण से बचते हैं।' }
        ] },
        { type: 'prose', lead: true, body: [
          'इन मूल्यों के साथ-साथ हमारा कार्य कंपनी अधिनियम, 2013 की धारा 8 के अंतर्गत पंजीकृत एक औपचारिक चार्टर से बँधा है। उसकी कानूनी भाषा के पीछे एक सरल विश्वास है: कि हर व्यक्ति — चाहे उसका जन्म, लिंग या गाँव कुछ भी हो — शिक्षा, स्वास्थ्य, गरिमा और एक निष्पक्ष अवसर का हक़दार है।',
          'ये प्रतिबद्धताएँ कुछ मानवीय वचनों में समाहित होती हैं — वही कार्य जिनके लिए हम बने।'
        ] },
        { type: 'focusGrid', kicker: 'हम जिसके लिए बने', heading: 'हमारे चार्टर के छह वचन', items: [
          { title: 'शिक्षा एवं अवसर', text: 'स्कूल, कॉलेज, कौशल, छात्रवृत्ति एवं पुस्तकालय — ताकि अवसर इस पर निर्भर न हो कि बच्चा कहाँ जन्मा है।' },
          { title: 'स्वास्थ्य एवं देखभाल', text: 'अस्पताल, द्वार-तक क्लीनिक, मातृ एवं शिशु स्वास्थ्य, और उनकी देखभाल जिनका कोई और नहीं।' },
          { title: 'आजीविका एवं भूमि', text: 'जैविक खेती, उचित बाज़ार, कौशल प्रशिक्षण एवं स्वयं-सहायता समूह जो स्थानीय संसाधनों को स्थायी आय में बदलें।' },
          { title: 'महिला, बच्चे एवं गरिमा', text: 'सशक्तिकरण, सुरक्षित आश्रय एवं परामर्श — और दहेज प्रताड़ना, बाल विवाह व तस्करी का अंत।' },
          { title: 'पर्यावरण एवं भविष्य', text: 'वृक्षारोपण, औषधीय वन एवं प्रदूषण नियंत्रण — उस भूमि की रक्षा हेतु जो समुदाय का पेट भरती है।' },
          { title: 'समुदाय, संस्कृति एवं राहत', text: 'सभी धर्मों में भाईचारा, जीवंत संस्कृति, आपदा राहत, और लोगों के कठिनतम क्षणों में सहायता।' }
        ] },
        { type: 'quote', text: 'चार्टर तब तक केवल कागज़ है जब तक वह किसी व्यक्ति तक न पहुँचे। हमारा चार्टर निभाने के लिए है — गाँवों में, एक-एक जीवन के साथ।', name: 'धर्मेश उरांव मेमोरियल फाउंडेशन', role: 'हमारा ध्येय' },
        ctaPartnerHi
      ]
    }
  },

  // ============================= WHAT WE DO =============================
  '/what-we-do': {
    kicker: 'What We Do', title: 'An integrated model, driven by local income.',
    intro: 'We propose an integrated rural development model centred on sustainable income generation — putting rural land, human resources, traditional knowledge and modern technology to their fullest productive use. Agro-based livelihood is the core driver; education, healthcare and social development grow from it.',
    heroImage: 'domf-programmes',
    blocks: [
      { type: 'prose', lead: true, body: [
        'Our vision is to promote education and culture amongst the socially deprived — the poor, women, children and regional communities. Ten objectives guide everything we do.'
      ] },
      { type: 'list', kicker: 'Feature of the Foundation', heading: 'The ten objectives that guide us', items: [
        { title: 'Empowerment through education', text: 'Education can break the cycle of poverty. We provide quality education to those in need, building the skills people require for personal and community growth.' },
        { title: 'Advancement of women & children’s rights', text: 'We work to ensure women and children — especially those in difficult situations — have access to fair, equal education, and the literacy, vocational training and life skills to become self-reliant.' },
        { title: 'Women empowerment initiatives', text: 'We help women access education, training and resources for independence, and raise awareness of discrimination and domestic violence to build a community that protects women’s rights and well-being.' },
        { title: 'Comprehensive education for economic upliftment', text: 'We support education from primary to higher levels, empowering the economically disadvantaged, unemployed and marginalised to become self-sufficient, active contributors to society.' },
        { title: 'Brotherhood, cultural acceptance & indigenous heritage', text: 'We encourage harmony and respect among people of different religions and cultures, and support the preservation of indigenous cultures and languages so communities keep their identity.' },
        { title: 'Sports & youth engagement', text: 'We promote physical activity and teamwork by organising sports events and encouraging young people to take part actively in sport and fitness.' },
        { title: 'Agricultural development & technology', text: 'We use modern technology to improve farming practices and provide training so individuals can participate effectively in the agricultural sector.' },
        { title: 'Health awareness campaigns', text: 'We run health awareness campaigns and community health camps to educate people about health issues and improve access to healthcare services.' },
        { title: 'Economic development & skill training', text: 'Alongside education, we run skill-training programmes that help people find work and improve their financial situation.' },
        { title: 'Community development projects', text: 'We address local needs — infrastructure, sanitation and access to clean water — to contribute to the overall well-being of the community.' }
      ] },
      { type: 'split', subkicker: 'Dhumkuria Community Development Centers', subheading: 'A local hub in every village.', img: 'domf-dhumkuria', body: [
        'Inspired by traditional tribal community institutions, we establish “Dhumkuria Community Development Centers” in selected villages of Jharkhand.',
        'Each centre functions as a local hub for agriculture training, education support, healthcare awareness, skill development, women empowerment, digital learning and community leadership.'
      ], bullets: ['Agriculture training & demonstration farms', 'Education, digital learning & skill development', 'Healthcare awareness & women empowerment', 'Community leadership & government-scheme access'] },
      { type: 'focusGrid', kicker: 'Our livelihood model', heading: 'Integrated farming, suited to Jharkhand’s ecology', items: [
        { tag: 'Organic', title: 'Organic farming', text: 'Low-input, soil-first cultivation.' },
        { tag: 'Horticulture', title: 'Horticulture & fruit', text: 'Orchards and high-value fruit crops.' },
        { tag: 'Medicinal', title: 'Medicinal & Ayurvedic plants', text: 'Cultivating high-demand species.' },
        { tag: 'Mushroom', title: 'Mushroom cultivation', text: 'Fast, space-efficient income.' },
        { tag: 'Sericulture', title: 'Sericulture', text: 'Silk rearing as a cash livelihood.' },
        { tag: 'Livestock', title: 'Animal husbandry', text: 'Dairy and integrated livestock.' },
        { tag: 'Poultry', title: 'Poultry & goatery', text: 'Quick-return household income.' },
        { tag: 'Agroforestry', title: 'Agroforestry & multi-crop', text: 'Multi-layer, multi-crop systems.' },
        { tag: 'Water', title: 'Water conservation', text: 'Irrigation and water security.' }
      ] },
      { type: 'split', side: 'right', subkicker: 'Role of technology', subheading: 'Modern tools, traditional wisdom.', img: 'domf-tech', body: [
        'Farmers receive digital guidance on weather, irrigation, soil health, crop management and market prices. Dhumkuria Centers support online training, e-governance awareness and access to government schemes.',
        'Mobile communication, digital payments and online marketing strengthen farmer networks and cooperative sales — while traditional knowledge is preserved through digital documentation.'
      ] },
      { type: 'focusGrid', kicker: 'Programmes', heading: 'Where the model takes shape', items: [
        { tag: 'Learning', title: 'Education', text: 'Foundational learning, scholarships and teacher support.', to: '/what-we-do/education' },
        { tag: 'Health', title: 'Healthcare', text: 'Mobile clinics, maternal care and nutrition.', to: '/what-we-do/healthcare' },
        { tag: 'Rights', title: 'Tribal Development', text: 'Land rights, culture and indigenous livelihoods.', to: '/what-we-do/tribal-development' },
        { tag: 'Opportunity', title: 'Youth Empowerment', text: 'Skills, mentorship and pathways to work.', to: '/what-we-do/youth-empowerment' },
        { tag: 'Institutions', title: 'Community Development', text: 'Self-help groups, water and village governance.', to: '/what-we-do/community-development' },
        { tag: 'Climate', title: 'Environment & Sustainability', text: 'Forests, water security and regenerative farming.', to: '/what-we-do/environment-sustainability' }
      ] },
      { type: 'list', kicker: 'Honest about the road', heading: 'Key challenges we navigate', items: [
        { title: 'Funding & infrastructure', text: 'Limited initial funding, poor rural infrastructure and difficult access to remote villages.' },
        { title: 'Climate & markets', text: 'Climate risk, irrigation shortages and market fluctuations that affect farm income.' },
        { title: 'Awareness & adoption', text: 'Limited awareness of schemes and finance, and natural resistance to new practices.' },
        { title: 'Balance', text: 'Balancing economic development with environmental sustainability and indigenous culture.' }
      ] },
      { type: 'split', subkicker: 'Path to scale', subheading: 'Pilot, prove, replicate.', img: 'domf-scale', body: [
        'We begin with pilot projects and demonstration farms in selected villages. Successful villages become training and replication hubs for neighbouring regions.',
        'Expansion runs through partnerships — government departments, Tribal Sub Plans, NABARD, CSR initiatives, agriculture universities and philanthropic organisations — with local youth, women SHGs and farmers trained as village resource leaders for low-cost, community-driven growth.'
      ], bullets: ['Pilot villages → replication hubs', 'Trained local resource leaders', 'Digital advisory & farmer networks', 'Cooperative market systems'] },
      ctaPartner
    ],
    hi: {
      kicker: 'हम क्या करते हैं',
      title: 'स्थानीय आय से संचालित एक समग्र मॉडल।',
      intro: 'हम एक समग्र ग्रामीण विकास मॉडल प्रस्तुत करते हैं जो स्थानीय भूमि, मानव संसाधन, पारंपरिक ज्ञान और आधुनिक तकनीक के अधिकतम उपयोग से स्थायी आय सृजन पर केंद्रित है। कृषि-आधारित आजीविका इसका मुख्य आधार है; शिक्षा, स्वास्थ्य और सामाजिक विकास इसी से विकसित होते हैं।',
      blocks: [
        { type: 'prose', lead: true, body: [
          'हमारी दृष्टि सामाजिक रूप से वंचित वर्गों — निर्धनों, महिलाओं, बच्चों और क्षेत्रीय समुदायों — के बीच शिक्षा और संस्कृति को बढ़ावा देना है। दस उद्देश्य हमारे हर कार्य का मार्गदर्शन करते हैं।'
        ] },
        { type: 'list', kicker: 'फाउंडेशन की विशेषताएँ', heading: 'दस उद्देश्य जो हमारा मार्गदर्शन करते हैं', items: [
          { title: 'शिक्षा के माध्यम से सशक्तिकरण', text: 'शिक्षा गरीबी के चक्र को तोड़ सकती है। हम ज़रूरतमंदों को गुणवत्तापूर्ण शिक्षा प्रदान करते हैं और व्यक्तिगत व सामुदायिक विकास के लिए आवश्यक कौशल का निर्माण करते हैं।' },
          { title: 'महिलाओं एवं बच्चों के अधिकारों की उन्नति', text: 'हम सुनिश्चित करते हैं कि महिलाओं और बच्चों को — विशेषकर कठिन परिस्थितियों में — निष्पक्ष व समान शिक्षा, तथा आत्मनिर्भर बनने हेतु साक्षरता, व्यावसायिक प्रशिक्षण और जीवन-कौशल मिले।' },
          { title: 'महिला सशक्तिकरण पहल', text: 'हम महिलाओं को स्वतंत्रता हेतु शिक्षा, प्रशिक्षण और संसाधनों तक पहुँच प्रदान करते हैं, और भेदभाव व घरेलू हिंसा के प्रति जागरूकता बढ़ाते हैं ताकि महिलाओं के अधिकारों व कल्याण की रक्षा हो।' },
          { title: 'आर्थिक उत्थान हेतु समग्र शिक्षा', text: 'हम प्राथमिक से उच्च स्तर तक की शिक्षा का समर्थन करते हैं, ताकि आर्थिक रूप से वंचित, बेरोज़गार और हाशिए के लोग आत्मनिर्भर और समाज में सक्रिय योगदानकर्ता बन सकें।' },
          { title: 'भाईचारा, सांस्कृतिक स्वीकार्यता एवं स्वदेशी विरासत', text: 'हम विभिन्न धर्मों और संस्कृतियों के लोगों के बीच सद्भाव और सम्मान को बढ़ावा देते हैं, और स्वदेशी संस्कृतियों व भाषाओं के संरक्षण का समर्थन करते हैं ताकि समुदाय अपनी पहचान बनाए रखें।' },
          { title: 'खेल एवं युवा भागीदारी', text: 'हम खेल आयोजनों के माध्यम से शारीरिक गतिविधि और टीम-भावना को बढ़ावा देते हैं और युवाओं को खेल व फिटनेस में सक्रिय रूप से भाग लेने के लिए प्रोत्साहित करते हैं।' },
          { title: 'कृषि विकास एवं तकनीक', text: 'हम खेती के तरीकों को बेहतर बनाने के लिए आधुनिक तकनीक का उपयोग करते हैं और प्रशिक्षण देते हैं ताकि लोग कृषि क्षेत्र में प्रभावी रूप से भाग ले सकें।' },
          { title: 'स्वास्थ्य जागरूकता अभियान', text: 'हम स्वास्थ्य जागरूकता अभियान और सामुदायिक स्वास्थ्य शिविर आयोजित करते हैं ताकि लोग स्वास्थ्य मुद्दों के प्रति जागरूक हों और स्वास्थ्य सेवाओं तक पहुँच बेहतर हो।' },
          { title: 'आर्थिक विकास एवं कौशल प्रशिक्षण', text: 'शिक्षा के साथ-साथ हम कौशल-प्रशिक्षण कार्यक्रम चलाते हैं जो लोगों को रोज़गार पाने और उनकी आर्थिक स्थिति सुधारने में मदद करते हैं।' },
          { title: 'सामुदायिक विकास परियोजनाएँ', text: 'हम स्थानीय आवश्यकताओं — बुनियादी ढाँचा, स्वच्छता और स्वच्छ जल तक पहुँच — को संबोधित करते हैं ताकि समुदाय का समग्र कल्याण हो।' }
        ] },
        { type: 'split', subkicker: 'धुमकुड़िया सामुदायिक विकास केंद्र', subheading: 'हर गाँव में एक स्थानीय केंद्र।', img: 'domf-dhumkuria', body: [
          'पारंपरिक आदिवासी सामुदायिक संस्थाओं से प्रेरित होकर, हम झारखंड के चयनित गांवों में “धुमकुड़िया सामुदायिक विकास केंद्र” स्थापित करते हैं।',
          'प्रत्येक केंद्र कृषि प्रशिक्षण, शिक्षा सहायता, स्वास्थ्य जागरूकता, कौशल विकास, महिला सशक्तिकरण, डिजिटल शिक्षा और सामुदायिक नेतृत्व का स्थानीय केंद्र बनता है।'
        ], bullets: ['कृषि प्रशिक्षण एवं डेमो फार्म', 'शिक्षा, डिजिटल शिक्षा एवं कौशल विकास', 'स्वास्थ्य जागरूकता एवं महिला सशक्तिकरण', 'सामुदायिक नेतृत्व एवं योजनाओं तक पहुँच'] },
        { type: 'focusGrid', kicker: 'हमारा आजीविका मॉडल', heading: 'झारखंड की पारिस्थितिकी के अनुकूल एकीकृत खेती', items: [
          { tag: 'जैविक', title: 'जैविक खेती', text: 'कम लागत, मिट्टी-प्रथम खेती।' },
          { tag: 'बागवानी', title: 'बागवानी एवं फल', text: 'बाग और उच्च-मूल्य फल फसलें।' },
          { tag: 'औषधीय', title: 'औषधीय एवं आयुर्वेदिक पौधे', text: 'उच्च मांग वाली प्रजातियाँ।' },
          { tag: 'मशरूम', title: 'मशरूम उत्पादन', text: 'तेज, कम-स्थान आय।' },
          { tag: 'रेशम', title: 'रेशम उत्पादन', text: 'नकद आजीविका के रूप में।' },
          { tag: 'पशुपालन', title: 'पशुपालन', text: 'डेयरी एवं एकीकृत पशुधन।' },
          { tag: 'मुर्गी', title: 'मुर्गी एवं बकरी पालन', text: 'त्वरित-आय घरेलू स्रोत।' },
          { tag: 'वानिकी', title: 'कृषि-वानिकी एवं बहुफसली', text: 'बहुस्तरीय, बहुफसली प्रणाली।' },
          { tag: 'जल', title: 'जल संरक्षण', text: 'सिंचाई एवं जल सुरक्षा।' }
        ] },
        { type: 'split', side: 'right', subkicker: 'तकनीक की भूमिका', subheading: 'आधुनिक उपकरण, पारंपरिक ज्ञान।', img: 'domf-tech', body: [
          'किसानों को मौसम, सिंचाई, मिट्टी, फसल प्रबंधन और बाजार मूल्य की डिजिटल जानकारी मिलती है। धुमकुड़िया केंद्र ऑनलाइन प्रशिक्षण, ई-गवर्नेंस और सरकारी योजनाओं तक पहुँच में सहायता करते हैं।',
          'मोबाइल संचार, डिजिटल भुगतान और ऑनलाइन विपणन किसान नेटवर्क एवं सहकारी बिक्री को मजबूत करते हैं — और पारंपरिक ज्ञान को डिजिटल दस्तावेज़ीकरण द्वारा संरक्षित किया जाता है।'
        ] },
        { type: 'list', kicker: 'राह की चुनौतियाँ', heading: 'जिन प्रमुख चुनौतियों का हम सामना करते हैं', items: [
          { title: 'वित्त एवं अधोसंरचना', text: 'सीमित प्रारंभिक वित्त, कमजोर ग्रामीण अधोसंरचना और दूरस्थ गांवों तक कठिन पहुँच।' },
          { title: 'जलवायु एवं बाजार', text: 'जलवायु जोखिम, सिंचाई की कमी और बाजार अस्थिरता।' },
          { title: 'जागरूकता एवं अपनाना', text: 'योजनाओं/वित्त की सीमित जानकारी और नई तकनीक अपनाने में झिझक।' },
          { title: 'संतुलन', text: 'आर्थिक विकास के साथ पर्यावरण एवं आदिवासी संस्कृति का संरक्षण।' }
        ] },
        { type: 'split', subkicker: 'विस्तार की राह', subheading: 'पायलट, प्रमाण, पुनरावृत्ति।', img: 'domf-scale', body: [
          'हम चयनित गांवों में पायलट परियोजनाओं एवं डेमो फार्म से शुरुआत करते हैं। सफल गाँव पड़ोसी क्षेत्रों के लिए प्रशिक्षण एवं विस्तार केंद्र बनते हैं।',
          'विस्तार सरकारी विभागों, ट्राइबल सब प्लान, NABARD, CSR, कृषि विश्वविद्यालयों एवं सामाजिक संस्थाओं की साझेदारी से होता है — स्थानीय युवाओं, महिला SHG एवं किसानों को ग्राम संसाधन नेता के रूप में प्रशिक्षित करते हुए।'
        ], bullets: ['पायलट गाँव → विस्तार केंद्र', 'प्रशिक्षित स्थानीय नेता', 'डिजिटल सलाह एवं किसान नेटवर्क', 'सहकारी बाजार व्यवस्था'] }
      ]
    }
  },
  '/what-we-do/education': {
    kicker: 'Education', title: 'Learning that reaches the last child.',
    intro: 'We work so that a child in a forest village has the same foundational skills as a child in a city — and the support to keep going.',
    heroImage: 'domf-education',
    blocks: [
      { type: 'split', subkicker: 'The approach', subheading: 'Foundations first, then aspiration.', img: 'domf-edu-2', body: [
        'We invest in foundational literacy and numeracy in the early years, supported by community learning centres, mother-tongue teaching in Kurukh and a bridge to formal schooling.',
        'For older students, scholarships and mentorship keep able children in education through the years they are most likely to drop out.'
      ], bullets: ['Community learning centres in remote hamlets', 'Mother-tongue (Kurukh) early learning', 'Scholarships through secondary & higher education', 'Teacher training and classroom materials'] },
      { type: 'metrics', items: [
        { value: 11200, unit: '', label: 'Children in learning programmes', color: 'green' },
        { value: 420, unit: '', label: 'Scholarships awarded this year', color: 'red' },
        { value: 86, unit: '%', label: 'Retention into secondary school', color: 'green' },
        { value: 64, unit: '', label: 'Learning centres running', color: 'ink' }
      ] },
      { type: 'stories', kicker: 'From the field', heading: 'What it looks like', items: [
        { tag: 'Scholarship', title: 'First in her village to reach college', place: 'Gumla district', text: 'A scholarship and a mentor turned an interrupted education into a nursing degree.' },
        { tag: 'Early learning', title: 'A classroom in the mother tongue', place: 'Forest hamlet', text: 'Teaching in Kurukh first helped children read faster — and stay in school.' },
        { tag: 'Teachers', title: 'Training local teachers', place: 'Two districts', text: 'Local educators, trained and equipped, anchor every learning centre.' }
      ] },
      ctaDonate
    ],
    hi: {
      kicker: 'शिक्षा', title: 'ऐसी शिक्षा जो अंतिम बच्चे तक पहुँचे।',
      intro: 'हम इसलिए काम करते हैं ताकि एक वनवासी गाँव के बच्चे के पास भी शहर के बच्चे जैसे बुनियादी कौशल हों — और आगे बढ़ते रहने का सहारा भी।',
      blocks: [
        { type: 'split', subkicker: 'हमारा तरीका', subheading: 'पहले नींव, फिर आकांक्षा।', img: 'domf-edu-2', body: [
          'हम आरंभिक वर्षों में बुनियादी साक्षरता और संख्या-ज्ञान में निवेश करते हैं, जिसे सामुदायिक शिक्षण केंद्र, कुड़ुख़ में मातृभाषा शिक्षण और औपचारिक स्कूली शिक्षा से जोड़ने वाला सेतु सहारा देते हैं।',
          'बड़े विद्यार्थियों के लिए, छात्रवृत्ति और मार्गदर्शन सक्षम बच्चों को उन वर्षों में शिक्षा में बनाए रखते हैं जब उनके स्कूल छोड़ने की सबसे अधिक संभावना होती है।'
        ], bullets: ['दूरस्थ बस्तियों में सामुदायिक शिक्षण केंद्र', 'मातृभाषा (कुड़ुख़) में आरंभिक शिक्षा', 'माध्यमिक एवं उच्च शिक्षा तक छात्रवृत्ति', 'शिक्षक प्रशिक्षण एवं कक्षा सामग्री'] },
        { type: 'metrics', items: [
          { value: 11200, unit: '', label: 'शिक्षण कार्यक्रमों में बच्चे', color: 'green' },
          { value: 420, unit: '', label: 'इस वर्ष प्रदान की गई छात्रवृत्तियाँ', color: 'red' },
          { value: 86, unit: '%', label: 'माध्यमिक विद्यालय तक ठहराव', color: 'green' },
          { value: 64, unit: '', label: 'संचालित शिक्षण केंद्र', color: 'ink' }
        ] },
        { type: 'stories', kicker: 'ज़मीन से', heading: 'यह कैसा दिखता है', items: [
          { tag: 'छात्रवृत्ति', title: 'अपने गाँव से कॉलेज पहुँचने वाली पहली', place: 'गुमला ज़िला', text: 'एक छात्रवृत्ति और एक मार्गदर्शक ने बाधित शिक्षा को नर्सिंग की डिग्री में बदल दिया।' },
          { tag: 'आरंभिक शिक्षा', title: 'मातृभाषा में एक कक्षा', place: 'वनवासी बस्ती', text: 'पहले कुड़ुख़ में पढ़ाने से बच्चे तेज़ी से पढ़ना सीखे — और स्कूल में टिके रहे।' },
          { tag: 'शिक्षक', title: 'स्थानीय शिक्षकों का प्रशिक्षण', place: 'दो ज़िले', text: 'प्रशिक्षित और सक्षम स्थानीय शिक्षक हर शिक्षण केंद्र की रीढ़ हैं।' }
        ] },
        ctaDonateHi
      ]
    }
  },
  '/what-we-do/healthcare': {
    kicker: 'Healthcare', title: 'Care that travels to where people are.',
    intro: 'Distance should not decide who lives. We bring preventive and maternal care to villages far from the nearest hospital.',
    heroImage: 'domf-health',
    blocks: [
      { type: 'split', subkicker: 'The approach', subheading: 'Prevention, proximity, continuity.', img: 'domf-health-2', body: [
        'Mobile clinics, trained community health workers and maternal-care programmes form a continuous chain of care — not one-off camps.',
        'We focus on the moments that matter most: pregnancy, the first 1,000 days of a child\'s life, and early detection of preventable illness.'
      ], bullets: ['Mobile clinics on fixed monthly routes', 'Community health workers in every cluster', 'Maternal & newborn care', 'Nutrition for the first 1,000 days'] },
      { type: 'metrics', items: [
        { value: 21500, unit: '+', label: 'Health consultations a year', color: 'red' },
        { value: 1800, unit: '', label: 'Safe pregnancies supported', color: 'green' },
        { value: 96, unit: '%', label: 'Childhood immunisation in our clusters', color: 'green' },
        { value: 14, unit: '', label: 'Mobile clinic routes', color: 'ink' }
      ] },
      ctaDonate
    ],
    hi: {
      kicker: 'स्वास्थ्य सेवा', title: 'ऐसी देखभाल जो लोगों तक पहुँचे।',
      intro: 'दूरी यह तय न करे कि कौन जिएगा। हम निवारक और मातृ देखभाल को निकटतम अस्पताल से दूर गाँवों तक पहुँचाते हैं।',
      blocks: [
        { type: 'split', subkicker: 'हमारा तरीका', subheading: 'रोकथाम, निकटता, निरंतरता।', img: 'domf-health-2', body: [
          'मोबाइल क्लीनिक, प्रशिक्षित सामुदायिक स्वास्थ्य कार्यकर्ता और मातृ-देखभाल कार्यक्रम देखभाल की एक सतत श्रृंखला बनाते हैं — एक-बार के शिविर नहीं।',
          'हम उन क्षणों पर ध्यान देते हैं जो सबसे महत्वपूर्ण हैं: गर्भावस्था, बच्चे के जीवन के पहले 1,000 दिन, और रोकथाम योग्य बीमारी की शीघ्र पहचान।'
        ], bullets: ['निश्चित मासिक मार्गों पर मोबाइल क्लीनिक', 'हर समूह में सामुदायिक स्वास्थ्य कार्यकर्ता', 'मातृ एवं नवजात देखभाल', 'पहले 1,000 दिनों के लिए पोषण'] },
        { type: 'metrics', items: [
          { value: 21500, unit: '+', label: 'प्रति वर्ष स्वास्थ्य परामर्श', color: 'red' },
          { value: 1800, unit: '', label: 'सुरक्षित गर्भधारण में सहायता', color: 'green' },
          { value: 96, unit: '%', label: 'हमारे समूहों में बाल टीकाकरण', color: 'green' },
          { value: 14, unit: '', label: 'मोबाइल क्लीनिक मार्ग', color: 'ink' }
        ] },
        ctaDonateHi
      ]
    }
  },
  '/what-we-do/tribal-development': {
    kicker: 'Tribal Development', title: 'Rights, culture and livelihoods — held together.',
    intro: 'Tribal development fails when it asks communities to choose between their identity and their future. We refuse that trade-off.',
    heroImage: 'domf-tribal',
    blocks: [
      { type: 'prose', lead: true, body: [
        'For the Oraon and other Adivasi communities, land, forest and language are not background — they are the foundation of livelihood and dignity.',
        'Our work helps communities secure their forest and land rights, revive indigenous livelihoods, and pass on language and culture to the next generation, while connecting them to markets and services on fair terms.'
      ] },
      { type: 'focusGrid', heading: 'Where we focus', items: [
        { tag: 'Land', title: 'Forest & land rights', text: 'Helping communities claim and document their legal rights.' },
        { tag: 'Culture', title: 'Language & heritage', text: 'Kurukh-language learning and cultural documentation.' },
        { tag: 'Livelihood', title: 'Indigenous livelihoods', text: 'Forest produce, craft and farming on fair terms.' }
      ] },
      ctaPartner
    ],
    hi: {
      kicker: 'आदिवासी विकास', title: 'अधिकार, संस्कृति और आजीविका — एक साथ।',
      intro: 'आदिवासी विकास तब विफल होता है जब वह समुदायों से उनकी पहचान और भविष्य के बीच चुनाव कराता है। हम इस सौदे को अस्वीकार करते हैं।',
      blocks: [
        { type: 'prose', lead: true, body: [
          'उरांव और अन्य आदिवासी समुदायों के लिए, भूमि, वन और भाषा पृष्ठभूमि नहीं हैं — वे आजीविका और गरिमा की नींव हैं।',
          'हमारा कार्य समुदायों को उनके वन व भूमि अधिकार सुरक्षित करने, स्वदेशी आजीविकाओं को पुनर्जीवित करने, और भाषा व संस्कृति को अगली पीढ़ी तक पहुँचाने में मदद करता है — साथ ही उन्हें उचित शर्तों पर बाज़ारों व सेवाओं से जोड़ता है।'
        ] },
        { type: 'focusGrid', heading: 'हम कहाँ केंद्रित हैं', items: [
          { tag: 'भूमि', title: 'वन एवं भूमि अधिकार', text: 'समुदायों को उनके कानूनी अधिकार पाने और दर्ज कराने में मदद।' },
          { tag: 'संस्कृति', title: 'भाषा एवं विरासत', text: 'कुड़ुख़-भाषा शिक्षण और सांस्कृतिक दस्तावेज़ीकरण।' },
          { tag: 'आजीविका', title: 'स्वदेशी आजीविका', text: 'उचित शर्तों पर वनोपज, शिल्प और खेती।' }
        ] },
        ctaPartnerHi
      ]
    }
  },
  '/what-we-do/youth-empowerment': {
    kicker: 'Youth Empowerment', title: 'From able young people to able futures.',
    intro: 'We build the bridge between school and a livelihood — with skills, mentorship and a first real opportunity.',
    heroImage: 'domf-youth',
    blocks: [
      { type: 'split', subkicker: 'The approach', subheading: 'Skills that lead to real work.', img: 'domf-youth-2', body: [
        'Vocational training is matched to local and regional demand, paired with mentorship and placement support so that training turns into income, not certificates.'
      ], bullets: ['Demand-led vocational training', 'Mentorship from local professionals', 'Placement & enterprise support', 'Digital and financial literacy'] },
      { type: 'metrics', items: [
        { value: 2600, unit: '', label: 'Youth trained to date', color: 'green' },
        { value: 71, unit: '%', label: 'In work or enterprise within a year', color: 'red' },
        { value: 180, unit: '', label: 'Young entrepreneurs supported', color: 'green' }
      ] },
      ctaDonate
    ],
    hi: {
      kicker: 'युवा सशक्तिकरण', title: 'सक्षम युवाओं से सक्षम भविष्य तक।',
      intro: 'हम स्कूल और आजीविका के बीच का सेतु बनाते हैं — कौशल, मार्गदर्शन और पहले वास्तविक अवसर के साथ।',
      blocks: [
        { type: 'split', subkicker: 'हमारा तरीका', subheading: 'ऐसे कौशल जो वास्तविक रोज़गार दिलाएँ।', img: 'domf-youth-2', body: [
          'व्यावसायिक प्रशिक्षण को स्थानीय और क्षेत्रीय माँग के अनुरूप ढाला जाता है, और मार्गदर्शन व नियोजन-सहायता से जोड़ा जाता है ताकि प्रशिक्षण आय में बदले, केवल प्रमाणपत्रों में नहीं।'
        ], bullets: ['माँग-आधारित व्यावसायिक प्रशिक्षण', 'स्थानीय पेशेवरों से मार्गदर्शन', 'नियोजन एवं उद्यम सहायता', 'डिजिटल एवं वित्तीय साक्षरता'] },
        { type: 'metrics', items: [
          { value: 2600, unit: '', label: 'अब तक प्रशिक्षित युवा', color: 'green' },
          { value: 71, unit: '%', label: 'एक वर्ष में रोज़गार या उद्यम में', color: 'red' },
          { value: 180, unit: '', label: 'सहायता प्राप्त युवा उद्यमी', color: 'green' }
        ] },
        ctaDonateHi
      ]
    }
  },
  '/what-we-do/community-development': {
    kicker: 'Community Development', title: 'Strong villages need strong institutions.',
    intro: 'We strengthen the local institutions — self-help groups, water committees, village councils — that make every other programme last.',
    heroImage: 'domf-community',
    blocks: [
      { type: 'metrics', items: [
        { value: 640, unit: '', label: 'Self-help groups supported', color: 'green' },
        { value: 50, unit: '+', label: 'Villages with safe water access', color: 'red' },
        { value: 12000, unit: '+', label: 'Women in savings & credit groups', color: 'green' }
      ] },
      { type: 'focusGrid', heading: 'What we strengthen', items: [
        { tag: 'Women', title: 'Self-help groups', text: 'Savings, credit and collective enterprise led by women.' },
        { tag: 'Water', title: 'Water & sanitation', text: 'Safe drinking water and village-managed maintenance.' },
        { tag: 'Voice', title: 'Village governance', text: 'Helping councils plan, budget and hold services to account.' }
      ] },
      ctaPartner
    ],
    hi: {
      kicker: 'सामुदायिक विकास', title: 'मज़बूत गाँवों को मज़बूत संस्थाएँ चाहिए।',
      intro: 'हम उन स्थानीय संस्थाओं — स्वयं-सहायता समूहों, जल समितियों, ग्राम परिषदों — को सशक्त करते हैं जो हर दूसरे कार्यक्रम को टिकाऊ बनाती हैं।',
      blocks: [
        { type: 'metrics', items: [
          { value: 640, unit: '', label: 'सहायता प्राप्त स्वयं-सहायता समूह', color: 'green' },
          { value: 50, unit: '+', label: 'सुरक्षित जल पहुँच वाले गाँव', color: 'red' },
          { value: 12000, unit: '+', label: 'बचत एवं ऋण समूहों में महिलाएँ', color: 'green' }
        ] },
        { type: 'focusGrid', heading: 'हम किसे मज़बूत करते हैं', items: [
          { tag: 'महिलाएँ', title: 'स्वयं-सहायता समूह', text: 'महिलाओं के नेतृत्व में बचत, ऋण और सामूहिक उद्यम।' },
          { tag: 'जल', title: 'जल एवं स्वच्छता', text: 'सुरक्षित पेयजल और ग्राम-प्रबंधित रखरखाव।' },
          { tag: 'आवाज़', title: 'ग्राम प्रशासन', text: 'परिषदों को योजना, बजट और सेवाओं की जवाबदेही में मदद।' }
        ] },
        ctaPartnerHi
      ]
    }
  },
  '/what-we-do/environment-sustainability': {
    kicker: 'Environment & Sustainability', title: 'The land that feeds the community must endure.',
    intro: 'Climate pressure falls hardest on those who did least to cause it. We help communities protect water, soil and forest.',
    heroImage: 'domf-environment',
    blocks: [
      { type: 'split', subkicker: 'The approach', subheading: 'Restore, conserve, regenerate.', img: 'domf-env-2', body: [
        'We support watershed restoration, community forestry and regenerative farming that improves yields while rebuilding the natural systems families depend on.'
      ], bullets: ['Watershed & spring restoration', 'Community-managed forestry', 'Regenerative, low-input farming', 'Climate-resilient seed and crop choices'] },
      { type: 'metrics', items: [
        { value: 320, unit: '', label: 'Hectares under restoration', color: 'green' },
        { value: 85000, unit: '+', label: 'Trees planted and protected', color: 'green' },
        { value: 28, unit: '', label: 'Springs and water sources revived', color: 'red' }
      ] },
      ctaDonate
    ],
    hi: {
      kicker: 'पर्यावरण एवं स्थिरता', title: 'जो भूमि समुदाय का पेट भरती है, वह टिकनी चाहिए।',
      intro: 'जलवायु का दबाव उन पर सबसे अधिक पड़ता है जिन्होंने इसे सबसे कम पैदा किया। हम समुदायों को जल, मिट्टी और वन की रक्षा में मदद करते हैं।',
      blocks: [
        { type: 'split', subkicker: 'हमारा तरीका', subheading: 'पुनर्स्थापन, संरक्षण, पुनर्जनन।', img: 'domf-env-2', body: [
          'हम जलग्रहण पुनर्स्थापन, सामुदायिक वानिकी और पुनर्योजी खेती का समर्थन करते हैं जो पैदावार बढ़ाते हुए उन प्राकृतिक तंत्रों को पुनर्निर्मित करती है जिन पर परिवार निर्भर हैं।'
        ], bullets: ['जलग्रहण एवं जलस्रोत पुनर्स्थापन', 'समुदाय-प्रबंधित वानिकी', 'पुनर्योजी, कम-लागत खेती', 'जलवायु-सहिष्णु बीज एवं फसल चयन'] },
        { type: 'metrics', items: [
          { value: 320, unit: '', label: 'पुनर्स्थापन के अंतर्गत हेक्टेयर', color: 'green' },
          { value: 85000, unit: '+', label: 'लगाए और संरक्षित किए गए वृक्ष', color: 'green' },
          { value: 28, unit: '', label: 'पुनर्जीवित जलस्रोत एवं झरने', color: 'red' }
        ] },
        ctaDonateHi
      ]
    }
  },

  // ============================= WHERE WE WORK (pages kept; not in nav) =============================
  '/where-we-work': {
    kicker: 'Where We Work', title: 'Deep roots, not wide footprints.',
    intro: 'We choose to go deep in the regions we serve — staying long enough to build trust, institutions and measurable change.',
    heroImage: 'domf-map',
    blocks: [
      { type: 'regions', kicker: 'Our footprint', heading: 'Across the central tribal belt', items: [
        { name: 'Jharkhand', value: 140, unit: '', label: 'Villages with active programmes' },
        { name: 'Chhattisgarh', value: 62, unit: '', label: 'Villages with active programmes' },
        { name: 'Odisha', value: 24, unit: '', label: 'Villages with active programmes' },
        { name: 'West Bengal', value: 14, unit: '', label: 'Villages with active programmes' }
      ] },
      { type: 'focusGrid', items: [
        { tag: 'Map', title: 'Regions', text: 'The states and districts we work in.', to: '/where-we-work/regions' },
        { tag: 'People', title: 'Communities', text: 'The communities we partner with.', to: '/where-we-work/communities' },
        { tag: 'Teams', title: 'Field Presence', text: 'Our teams and centres on the ground.', to: '/where-we-work/field-presence' },
        { tag: 'Reach', title: 'Geographic Impact', text: 'Reach and depth, by the numbers.', to: '/where-we-work/geographic-impact' }
      ] },
      ctaPartner
    ],
    hi: {
      kicker: 'हम कहाँ काम करते हैं', title: 'गहरी जड़ें, चौड़े पदचिह्न नहीं।',
      intro: 'हम जिन क्षेत्रों की सेवा करते हैं, वहाँ गहराई से जाना चुनते हैं — विश्वास, संस्थाएँ और मापने योग्य बदलाव बनाने के लिए पर्याप्त समय तक रुकते हैं।',
      blocks: [
        { type: 'regions', kicker: 'हमारी उपस्थिति', heading: 'मध्य भारत के आदिवासी क्षेत्र में', items: [
          { name: 'झारखंड', value: 140, unit: '', label: 'सक्रिय कार्यक्रमों वाले गाँव' },
          { name: 'छत्तीसगढ़', value: 62, unit: '', label: 'सक्रिय कार्यक्रमों वाले गाँव' },
          { name: 'ओडिशा', value: 24, unit: '', label: 'सक्रिय कार्यक्रमों वाले गाँव' },
          { name: 'पश्चिम बंगाल', value: 14, unit: '', label: 'सक्रिय कार्यक्रमों वाले गाँव' }
        ] },
        { type: 'focusGrid', items: [
          { tag: 'मानचित्र', title: 'क्षेत्र', text: 'जिन राज्यों और ज़िलों में हम काम करते हैं।', to: '/where-we-work/regions' },
          { tag: 'लोग', title: 'समुदाय', text: 'जिन समुदायों के साथ हम साझेदारी करते हैं।', to: '/where-we-work/communities' },
          { tag: 'टीमें', title: 'ज़मीनी उपस्थिति', text: 'ज़मीन पर हमारी टीमें और केंद्र।', to: '/where-we-work/field-presence' },
          { tag: 'पहुँच', title: 'भौगोलिक प्रभाव', text: 'पहुँच और गहराई, आँकड़ों में।', to: '/where-we-work/geographic-impact' }
        ] },
        ctaPartnerHi
      ]
    }
  },
  '/where-we-work/regions': {
    kicker: 'Regions', title: 'The states and districts we serve.',
    intro: 'Our work concentrates in the central Indian tribal belt, where need is high and reliable services are scarce.',
    blocks: [
      { type: 'regions', items: [
        { name: 'Jharkhand', value: 9, unit: '', label: 'Districts' },
        { name: 'Chhattisgarh', value: 4, unit: '', label: 'Districts' },
        { name: 'Odisha', value: 3, unit: '', label: 'Districts' },
        { name: 'West Bengal', value: 2, unit: '', label: 'Districts' }
      ] },
      { type: 'prose', body: [
        'In each district we work through a network of community learning centres, health routes and field teams, anchored by long-standing relationships with local institutions.',
        'We expand only where we can sustain presence — depth before breadth, always.'
      ] },
      ctaPartner
    ],
    hi: {
      kicker: 'क्षेत्र', title: 'जिन राज्यों और ज़िलों की हम सेवा करते हैं।',
      intro: 'हमारा कार्य मध्य भारत के आदिवासी क्षेत्र में केंद्रित है, जहाँ आवश्यकता अधिक है और भरोसेमंद सेवाएँ दुर्लभ हैं।',
      blocks: [
        { type: 'regions', items: [
          { name: 'झारखंड', value: 9, unit: '', label: 'ज़िले' },
          { name: 'छत्तीसगढ़', value: 4, unit: '', label: 'ज़िले' },
          { name: 'ओडिशा', value: 3, unit: '', label: 'ज़िले' },
          { name: 'पश्चिम बंगाल', value: 2, unit: '', label: 'ज़िले' }
        ] },
        { type: 'prose', body: [
          'प्रत्येक ज़िले में हम सामुदायिक शिक्षण केंद्रों, स्वास्थ्य मार्गों और क्षेत्रीय टीमों के नेटवर्क के माध्यम से काम करते हैं, जो स्थानीय संस्थाओं के साथ दीर्घकालिक संबंधों पर आधारित हैं।',
          'हम केवल वहीं विस्तार करते हैं जहाँ हम उपस्थिति बनाए रख सकें — हमेशा चौड़ाई से पहले गहराई।'
        ] },
        ctaPartnerHi
      ]
    }
  },
  '/where-we-work/communities': {
    kicker: 'Communities', title: 'The communities we walk alongside.',
    intro: 'We work primarily with Adivasi (tribal) communities including the Oraon, alongside other rural families who share the same gaps in opportunity.',
    blocks: [
      { type: 'split', subkicker: 'Partnership', subheading: 'Led by the community, supported by us.', img: 'domf-communities', body: [
        'Every programme begins with a community agreement that defines roles, contributions and shared goals. Local committees own delivery; we provide funding, training and measurement.'
      ] },
      { type: 'quote', text: 'They did not arrive with a plan. They arrived with questions — and then they stayed.', name: 'Village council member', role: 'Gumla district' },
      ctaDonate
    ],
    hi: {
      kicker: 'समुदाय', title: 'जिन समुदायों के साथ हम चलते हैं।',
      intro: 'हम मुख्यतः आदिवासी समुदायों — जिनमें उरांव भी शामिल हैं — के साथ-साथ अन्य ग्रामीण परिवारों के साथ काम करते हैं जो अवसर की समान कमी झेलते हैं।',
      blocks: [
        { type: 'split', subkicker: 'साझेदारी', subheading: 'समुदाय के नेतृत्व में, हमारे सहयोग से।', img: 'domf-communities', body: [
          'हर कार्यक्रम एक सामुदायिक समझौते से शुरू होता है जो भूमिकाएँ, योगदान और साझा लक्ष्य तय करता है। स्थानीय समितियाँ क्रियान्वयन की स्वामी होती हैं; हम वित्त, प्रशिक्षण और मापन प्रदान करते हैं।'
        ] },
        { type: 'quote', text: 'वे कोई योजना लेकर नहीं आए। वे प्रश्न लेकर आए — और फिर रुक गए।', name: 'ग्राम परिषद सदस्य', role: 'गुमला ज़िला' },
        ctaDonateHi
      ]
    }
  },
  '/where-we-work/field-presence': {
    kicker: 'Field Presence', title: 'Close to the work, every day.',
    intro: 'Our field teams live and work in the regions they serve. Presence is not a visit — it is a permanent commitment.',
    blocks: [
      { type: 'metrics', items: [
        { value: 17, unit: '', label: 'Field offices & centres', color: 'red' },
        { value: 210, unit: '+', label: 'Field staff and community workers', color: 'green' },
        { value: 240, unit: '+', label: 'Villages with regular contact', color: 'green' },
        { value: 4, unit: '', label: 'States', color: 'ink' }
      ] },
      ctaPartner
    ],
    hi: {
      kicker: 'ज़मीनी उपस्थिति', title: 'काम के निकट, हर दिन।',
      intro: 'हमारी क्षेत्रीय टीमें उन्हीं क्षेत्रों में रहती और काम करती हैं जिनकी वे सेवा करती हैं। उपस्थिति कोई दौरा नहीं है — यह एक स्थायी प्रतिबद्धता है।',
      blocks: [
        { type: 'metrics', items: [
          { value: 17, unit: '', label: 'क्षेत्रीय कार्यालय एवं केंद्र', color: 'red' },
          { value: 210, unit: '+', label: 'क्षेत्रीय कर्मचारी एवं सामुदायिक कार्यकर्ता', color: 'green' },
          { value: 240, unit: '+', label: 'नियमित संपर्क वाले गाँव', color: 'green' },
          { value: 4, unit: '', label: 'राज्य', color: 'ink' }
        ] },
        ctaPartnerHi
      ]
    }
  },
  '/where-we-work/geographic-impact': {
    kicker: 'Geographic Impact', title: 'Reach, measured honestly.',
    intro: 'We report both how many people we reach and how deeply — because a number without depth is just a number.',
    blocks: [
      { type: 'regions', items: [
        { name: 'People reached', value: 38000, unit: '+', label: 'Each year, across programmes' },
        { name: 'Villages', value: 240, unit: '+', label: 'With continuous programmes' },
        { name: 'Children', value: 11200, unit: '', label: 'In learning programmes' },
        { name: 'Women', value: 12000, unit: '+', label: 'In self-help groups' }
      ] },
      { type: 'split', side: 'right', subkicker: 'Depth over breadth', subheading: 'Why we stay small on purpose.', img: 'domf-geo', body: [
        'We could spread thinner and claim larger numbers. Instead we concentrate, so that change in each place is real, durable and verifiable.'
      ], link: { label: 'See the impact dashboard', to: '/impact/dashboard' } },
      ctaDonate
    ],
    hi: {
      kicker: 'भौगोलिक प्रभाव', title: 'पहुँच, ईमानदारी से मापी गई।',
      intro: 'हम यह भी बताते हैं कि कितने लोगों तक पहुँचते हैं और कितनी गहराई तक — क्योंकि गहराई के बिना कोई संख्या केवल एक संख्या है।',
      blocks: [
        { type: 'regions', items: [
          { name: 'पहुँचे लोग', value: 38000, unit: '+', label: 'हर वर्ष, सभी कार्यक्रमों में' },
          { name: 'गाँव', value: 240, unit: '+', label: 'निरंतर कार्यक्रमों के साथ' },
          { name: 'बच्चे', value: 11200, unit: '', label: 'शिक्षण कार्यक्रमों में' },
          { name: 'महिलाएँ', value: 12000, unit: '+', label: 'स्वयं-सहायता समूहों में' }
        ] },
        { type: 'split', side: 'right', subkicker: 'चौड़ाई से अधिक गहराई', subheading: 'हम जानबूझकर छोटे क्यों रहते हैं।', img: 'domf-geo', body: [
          'हम और पतला फैलकर बड़ी संख्याएँ दावा कर सकते थे। इसके बजाय हम केंद्रित रहते हैं, ताकि हर स्थान पर बदलाव वास्तविक, टिकाऊ और सत्यापन योग्य हो।'
        ], link: { label: 'प्रभाव डैशबोर्ड देखें', to: '/impact/dashboard' } },
        ctaDonateHi
      ]
    }
  },

  // ============================= IMPACT =============================
  '/impact': {
    kicker: 'Impact', title: 'Evidence first. Always.',
    intro: 'We publish what works and what does not. This is where we account for the trust placed in us.',
    heroImage: 'domf-impact',
    blocks: [
      { type: 'metrics', items: [
        { value: 38000, unit: '+', label: 'People reached each year', color: 'red' },
        { value: 86, unit: '%', label: 'Secondary-school retention', color: 'green' },
        { value: 71, unit: '%', label: 'Youth in work within a year', color: 'green' },
        { value: 92, unit: '%', label: 'Of spend reaching the field', color: 'ink' }
      ] },
      { type: 'focusGrid', heading: 'Explore the evidence', items: [
        { tag: 'Live', title: 'Impact Dashboard', text: 'Programme indicators, updated quarterly.', to: '/impact/dashboard' },
        { tag: 'People', title: 'Success Stories', text: 'Change, one person at a time.', to: '/impact/success-stories' },
        { tag: 'Audited', title: 'Annual Reports', text: 'Full yearly results and finances.', to: '/impact/annual-reports' },
        { tag: 'Detail', title: 'Program Outcomes', text: 'Outcome indicators by programme.', to: '/impact/program-outcomes' },
        { tag: 'Visual', title: 'Gallery', text: 'Images from the field.', to: '/impact/gallery' }
      ] },
      ctaDonate
    ],
    hi: {
      kicker: 'प्रभाव', title: 'पहले साक्ष्य। हमेशा।',
      intro: 'हम यह प्रकाशित करते हैं कि क्या काम करता है और क्या नहीं। यहीं हम अपने ऊपर रखे गए विश्वास का हिसाब देते हैं।',
      blocks: [
        { type: 'metrics', items: [
          { value: 38000, unit: '+', label: 'हर वर्ष पहुँचे लोग', color: 'red' },
          { value: 86, unit: '%', label: 'माध्यमिक विद्यालय तक ठहराव', color: 'green' },
          { value: 71, unit: '%', label: 'एक वर्ष में रोज़गार पाने वाले युवा', color: 'green' },
          { value: 92, unit: '%', label: 'व्यय जो ज़मीन तक पहुँचता है', color: 'ink' }
        ] },
        { type: 'focusGrid', heading: 'साक्ष्य देखें', items: [
          { tag: 'लाइव', title: 'प्रभाव डैशबोर्ड', text: 'कार्यक्रम संकेतक, हर तिमाही अद्यतन।', to: '/impact/dashboard' },
          { tag: 'लोग', title: 'सफलता की कहानियाँ', text: 'बदलाव, एक-एक व्यक्ति के साथ।', to: '/impact/success-stories' },
          { tag: 'अंकेक्षित', title: 'वार्षिक रिपोर्ट', text: 'पूर्ण वार्षिक परिणाम एवं वित्त।', to: '/impact/annual-reports' },
          { tag: 'विवरण', title: 'कार्यक्रम परिणाम', text: 'कार्यक्रम-अनुसार परिणाम संकेतक।', to: '/impact/program-outcomes' },
          { tag: 'दृश्य', title: 'गैलरी', text: 'ज़मीन से तस्वीरें।', to: '/impact/gallery' }
        ] },
        ctaDonateHi
      ]
    }
  },
  '/impact/dashboard': {
    kicker: 'Impact Dashboard', title: 'The numbers, kept current.',
    intro: 'A snapshot of programme indicators, refreshed each quarter and reconciled against our audited annual results.',
    blocks: [
      { type: 'metrics', items: [
        { value: 11200, unit: '', label: 'Children in learning programmes', color: 'green' },
        { value: 21500, unit: '+', label: 'Health consultations a year', color: 'red' },
        { value: 2600, unit: '', label: 'Youth trained', color: 'green' },
        { value: 640, unit: '', label: 'Self-help groups', color: 'ink' }
      ] },
      { type: 'regions', band: true, kicker: 'Outcomes', heading: 'Outcomes we track', items: [
        { name: 'Learning', value: 86, unit: '%', label: 'Retention into secondary school' },
        { name: 'Health', value: 96, unit: '%', label: 'Childhood immunisation in clusters' },
        { name: 'Livelihoods', value: 71, unit: '%', label: 'Youth in work within a year' },
        { name: 'Water', value: 50, unit: '+', label: 'Villages with safe water' }
      ] },
      { type: 'reports', heading: 'Underlying data & methodology', items: [
        { title: 'Impact Methodology Note', meta: 'PDF · How we measure', tag: 'Method' },
        { title: 'Quarterly Indicator Pack', meta: 'PDF · Latest quarter', tag: 'Data' }
      ] },
      ctaDonate
    ],
    hi: {
      kicker: 'प्रभाव डैशबोर्ड', title: 'आँकड़े, सदा अद्यतन।',
      intro: 'कार्यक्रम संकेतकों की एक झलक, हर तिमाही ताज़ा की जाती है और हमारे अंकेक्षित वार्षिक परिणामों से मिलान की जाती है।',
      blocks: [
        { type: 'metrics', items: [
          { value: 11200, unit: '', label: 'शिक्षण कार्यक्रमों में बच्चे', color: 'green' },
          { value: 21500, unit: '+', label: 'प्रति वर्ष स्वास्थ्य परामर्श', color: 'red' },
          { value: 2600, unit: '', label: 'प्रशिक्षित युवा', color: 'green' },
          { value: 640, unit: '', label: 'स्वयं-सहायता समूह', color: 'ink' }
        ] },
        { type: 'regions', band: true, kicker: 'परिणाम', heading: 'जिन परिणामों को हम मापते हैं', items: [
          { name: 'शिक्षा', value: 86, unit: '%', label: 'माध्यमिक विद्यालय तक ठहराव' },
          { name: 'स्वास्थ्य', value: 96, unit: '%', label: 'समूहों में बाल टीकाकरण' },
          { name: 'आजीविका', value: 71, unit: '%', label: 'एक वर्ष में रोज़गार पाने वाले युवा' },
          { name: 'जल', value: 50, unit: '+', label: 'सुरक्षित जल वाले गाँव' }
        ] },
        { type: 'reports', heading: 'अंतर्निहित आँकड़े एवं पद्धति', items: [
          { title: 'प्रभाव पद्धति टिप्पणी', meta: 'PDF · हम कैसे मापते हैं', tag: 'पद्धति' },
          { title: 'तिमाही संकेतक पैक', meta: 'PDF · नवीनतम तिमाही', tag: 'डेटा' }
        ] },
        ctaDonateHi
      ]
    }
  },
  '/impact/success-stories': {
    kicker: 'Success Stories', title: 'Change you can put a name to.',
    intro: 'Numbers prove the pattern. These stories show what it means for one family at a time.',
    blocks: [
      { type: 'stories', items: [
        { tag: 'Education', title: 'From a forest hamlet to nursing college', place: 'Gumla, Jharkhand', text: 'A scholarship and steady mentorship carried Anjali through the years most children drop out.' },
        { tag: 'Livelihood', title: 'A self-help group that became a business', place: 'Chhattisgarh', text: 'Twelve women turned shared savings into a thriving food-processing enterprise.' },
        { tag: 'Health', title: 'A safe birth, two hours from any hospital', place: 'Odisha', text: 'A community health worker and a mobile clinic made the difference that mattered most.' },
        { tag: 'Youth', title: 'Trained, hired, and now hiring', place: 'Ranchi region', text: 'Vocational training led to a job — and then to a workshop employing four others.' },
        { tag: 'Environment', title: 'The spring that came back', place: 'Jharkhand', text: 'Watershed work revived a dry source, returning water to three hamlets.' },
        { tag: 'Tribal', title: 'Reading in the mother tongue', place: 'Forest belt', text: 'Kurukh-first early learning helped a generation of children read with confidence.' }
      ] },
      ctaDonate
    ],
    hi: {
      kicker: 'सफलता की कहानियाँ', title: 'ऐसा बदलाव जिसे आप नाम दे सकें।',
      intro: 'संख्याएँ पैटर्न सिद्ध करती हैं। ये कहानियाँ दिखाती हैं कि एक-एक परिवार के लिए इसका क्या अर्थ है।',
      blocks: [
        { type: 'stories', items: [
          { tag: 'शिक्षा', title: 'एक वनवासी गाँव से नर्सिंग कॉलेज तक', place: 'गुमला, झारखंड', text: 'एक छात्रवृत्ति और निरंतर मार्गदर्शन ने अंजली को उन वर्षों में आगे बढ़ाया जब अधिकांश बच्चे पढ़ाई छोड़ देते हैं।' },
          { tag: 'आजीविका', title: 'एक स्वयं-सहायता समूह जो व्यवसाय बन गया', place: 'छत्तीसगढ़', text: 'बारह महिलाओं ने साझा बचत को एक फलते-फूलते खाद्य-प्रसंस्करण उद्यम में बदल दिया।' },
          { tag: 'स्वास्थ्य', title: 'किसी भी अस्पताल से दो घंटे दूर, एक सुरक्षित प्रसव', place: 'ओडिशा', text: 'एक सामुदायिक स्वास्थ्य कार्यकर्ता और एक मोबाइल क्लीनिक ने वह फ़र्क डाला जो सबसे ज़रूरी था।' },
          { tag: 'युवा', title: 'प्रशिक्षित, नियुक्त, और अब नियोक्ता', place: 'रांची क्षेत्र', text: 'व्यावसायिक प्रशिक्षण ने नौकरी दिलाई — और फिर चार लोगों को रोज़गार देने वाली एक कार्यशाला।' },
          { tag: 'पर्यावरण', title: 'वह झरना जो लौट आया', place: 'झारखंड', text: 'जलग्रहण कार्य ने एक सूखे स्रोत को पुनर्जीवित किया और तीन बस्तियों तक पानी लौटाया।' },
          { tag: 'आदिवासी', title: 'मातृभाषा में पढ़ना', place: 'वन क्षेत्र', text: 'कुड़ुख़-प्रथम आरंभिक शिक्षा ने बच्चों की एक पीढ़ी को आत्मविश्वास से पढ़ने में मदद की।' }
        ] },
        ctaDonateHi
      ]
    }
  },
  '/impact/annual-reports': {
    kicker: 'Annual Reports', title: 'Every year, on the record.',
    intro: 'Our annual reports combine audited financials with programme results and honest reflection on what we learned.',
    blocks: [
      { type: 'reports', items: [
        { title: 'Annual Report 2024–25', meta: 'PDF · 64 pages · Audited', tag: 'Latest' },
        { title: 'Annual Report 2023–24', meta: 'PDF · 58 pages · Audited', tag: 'Report' },
        { title: 'Annual Report 2022–23', meta: 'PDF · 52 pages · Audited', tag: 'Report' },
        { title: 'Annual Report 2021–22', meta: 'PDF · 48 pages · Audited', tag: 'Report' }
      ] },
      { type: 'split', side: 'right', subkicker: 'What you will find', subheading: 'More than a balance sheet.', img: 'domf-report', body: [
        'Each report sets out our results against targets, the independent auditor\'s statement, programme-level outcomes, and a candid account of where we fell short and what we changed.'
      ], link: { label: 'See governance & transparency', to: '/who-we-are/governance-transparency' } },
      ctaPartner
    ],
    hi: {
      kicker: 'वार्षिक रिपोर्ट', title: 'हर वर्ष, अभिलेख में।',
      intro: 'हमारी वार्षिक रिपोर्टें अंकेक्षित वित्तीय विवरण को कार्यक्रम परिणामों और हमने जो सीखा उस पर ईमानदार चिंतन के साथ जोड़ती हैं।',
      blocks: [
        { type: 'reports', items: [
          { title: 'वार्षिक रिपोर्ट 2024–25', meta: 'PDF · 64 पृष्ठ · अंकेक्षित', tag: 'नवीनतम' },
          { title: 'वार्षिक रिपोर्ट 2023–24', meta: 'PDF · 58 पृष्ठ · अंकेक्षित', tag: 'रिपोर्ट' },
          { title: 'वार्षिक रिपोर्ट 2022–23', meta: 'PDF · 52 पृष्ठ · अंकेक्षित', tag: 'रिपोर्ट' },
          { title: 'वार्षिक रिपोर्ट 2021–22', meta: 'PDF · 48 पृष्ठ · अंकेक्षित', tag: 'रिपोर्ट' }
        ] },
        { type: 'split', side: 'right', subkicker: 'आपको क्या मिलेगा', subheading: 'एक बैलेंस शीट से कहीं अधिक।', img: 'domf-report', body: [
          'प्रत्येक रिपोर्ट लक्ष्यों के विरुद्ध हमारे परिणाम, स्वतंत्र अंकेक्षक का विवरण, कार्यक्रम-स्तरीय परिणाम, और कहाँ हम कम पड़े व क्या बदला — इसका स्पष्ट विवरण प्रस्तुत करती है।'
        ], link: { label: 'शासन एवं पारदर्शिता देखें', to: '/who-we-are/governance-transparency' } },
        ctaPartnerHi
      ]
    }
  },
  '/impact/program-outcomes': {
    kicker: 'Program Outcomes', title: 'Outcomes, programme by programme.',
    intro: 'We define the outcomes that matter with communities, then measure against them — not just activity, but change.',
    blocks: [
      { type: 'list', items: [
        { title: 'Education', text: '86% retention into secondary school; 420 scholarships sustained; foundational literacy gains across 64 learning centres.' },
        { title: 'Healthcare', text: '96% childhood immunisation in our clusters; 1,800 safe pregnancies supported; 21,500+ consultations a year.' },
        { title: 'Youth Empowerment', text: '71% of trained youth in work or enterprise within a year; 180 young entrepreneurs supported.' },
        { title: 'Community Development', text: '640 self-help groups; 12,000+ women in savings and credit; 50+ villages with safe water.' },
        { title: 'Environment', text: '320 hectares under restoration; 28 water sources revived; 85,000+ trees planted and protected.' }
      ] },
      ctaDonate
    ],
    hi: {
      kicker: 'कार्यक्रम परिणाम', title: 'परिणाम, कार्यक्रम-दर-कार्यक्रम।',
      intro: 'हम समुदायों के साथ मिलकर उन परिणामों को परिभाषित करते हैं जो मायने रखते हैं, फिर उनके विरुद्ध मापते हैं — केवल गतिविधि नहीं, बल्कि बदलाव।',
      blocks: [
        { type: 'list', items: [
          { title: 'शिक्षा', text: 'माध्यमिक विद्यालय तक 86% ठहराव; 420 छात्रवृत्तियाँ बनाए रखी गईं; 64 शिक्षण केंद्रों में बुनियादी साक्षरता में वृद्धि।' },
          { title: 'स्वास्थ्य सेवा', text: 'हमारे समूहों में 96% बाल टीकाकरण; 1,800 सुरक्षित गर्भधारण में सहायता; प्रति वर्ष 21,500+ परामर्श।' },
          { title: 'युवा सशक्तिकरण', text: 'प्रशिक्षित युवाओं में से 71% एक वर्ष में रोज़गार या उद्यम में; 180 युवा उद्यमियों को सहायता।' },
          { title: 'सामुदायिक विकास', text: '640 स्वयं-सहायता समूह; बचत व ऋण में 12,000+ महिलाएँ; 50+ गाँवों में सुरक्षित जल।' },
          { title: 'पर्यावरण', text: '320 हेक्टेयर पुनर्स्थापन के अंतर्गत; 28 जलस्रोत पुनर्जीवित; 85,000+ वृक्ष लगाए व संरक्षित।' }
        ] },
        ctaDonateHi
      ]
    }
  },
  '/impact/gallery': {
    kicker: 'Gallery', title: 'From the field.',
    intro: 'Photographs from our programmes, shared with the consent and dignity of the people in them.',
    blocks: [
      { type: 'gallery', images: ['g-domf-1','g-domf-2','g-domf-3','g-domf-4','g-domf-5','g-domf-6','g-domf-7','g-domf-8'] },
      ctaPartner
    ],
    hi: {
      kicker: 'गैलरी', title: 'ज़मीन से।',
      intro: 'हमारे कार्यक्रमों की तस्वीरें, जिनमें शामिल लोगों की सहमति और गरिमा के साथ साझा की गई हैं।',
      blocks: [
        { type: 'gallery', images: ['g-domf-1','g-domf-2','g-domf-3','g-domf-4','g-domf-5','g-domf-6','g-domf-7','g-domf-8'] },
        ctaPartnerHi
      ]
    }
  },

  // ============================= PEOPLE =============================
  '/people': {
    kicker: 'People', title: 'The people who make the work possible.',
    intro: 'From our leadership and board to advisors and volunteers, the Foundation runs on committed people.',
    heroImage: 'domf-people',
    blocks: [
      { type: 'focusGrid', items: [
        { tag: 'Executive', title: 'Leadership Team', text: 'The people who run the Foundation day to day.', to: '/people/leadership-team' },
        { tag: 'Governance', title: 'Executive Members', text: 'The members who help carry our work forward.', to: '/people/executive-members' },
        { tag: 'Guidance', title: 'Advisors', text: 'Subject-matter expertise we draw on.', to: '/people/advisors' },
        { tag: 'Community', title: 'Volunteers', text: 'The wider network that gives time and skill.', to: '/people/volunteers' }
      ] },
      ctaPartner
    ],
    hi: {
      kicker: 'हमारी टीम', title: 'वे लोग जो इस कार्य को संभव बनाते हैं।',
      intro: 'हमारे नेतृत्व और शासी समिति से लेकर सलाहकारों और स्वयंसेवकों तक, फाउंडेशन समर्पित लोगों के बल पर चलता है।',
      blocks: [
        { type: 'focusGrid', items: [
          { tag: 'कार्यकारी', title: 'नेतृत्व टीम', text: 'वे लोग जो रोज़मर्रा फाउंडेशन चलाते हैं।', to: '/people/leadership-team' },
          { tag: 'शासन', title: 'कार्यकारी सदस्य', text: 'वे सदस्य जो हमारे कार्य को आगे ले जाने में मदद करते हैं।', to: '/people/executive-members' },
          { tag: 'मार्गदर्शन', title: 'सलाहकार', text: 'जिस विषय-विशेषज्ञता का हम सहारा लेते हैं।', to: '/people/advisors' },
          { tag: 'समुदाय', title: 'स्वयंसेवक', text: 'व्यापक नेटवर्क जो समय और कौशल देता है।', to: '/people/volunteers' }
        ] },
        ctaPartnerHi
      ]
    }
  },
  '/people/leadership-team': {
    kicker: 'Leadership Team', title: 'Our office bearers.',
    intro: 'The governing body responsible for the Foundation’s direction, operations and accountability.',
    blocks: [
      { type: 'people', items: [
        { name: 'Shri Akash Deep Bhagat', role: 'Director' },
        { name: 'Smt. Shanti Oraon', role: 'Secretary' },
        { name: 'Shri Kamaldev Oraon', role: 'Joint Secretary' },
        { name: 'Shri Jeeta Oraon', role: 'Treasurer' }
      ] },
      ctaPartner
    ],
    hi: {
      kicker: 'नेतृत्व टीम', title: 'हमारे पदाधिकारी।',
      intro: 'फाउंडेशन की दिशा, संचालन और जवाबदेही के लिए उत्तरदायी शासी समिति।',
      blocks: [
        { type: 'people', items: [
          { name: 'श्री आकाश दीप भगत', role: 'निदेशक' },
          { name: 'श्रीमती शांति उरांव', role: 'सचिव' },
          { name: 'श्री कमलदेव उरांव', role: 'संयुक्त सचिव' },
          { name: 'श्री जीता उरांव', role: 'कोषाध्यक्ष' }
        ] },
        ctaPartnerHi
      ]
    }
  },
  '/people/executive-members': {
    kicker: 'Executive Members', title: 'Our executive members.',
    intro: 'The members who support the Foundation’s direction and help carry its work forward in the community.',
    blocks: [
      { type: 'people', items: [
        { name: 'Dinesh Oraon', role: 'Executive Member' },
        { name: 'Rana Pratap Oraon', role: 'Executive Member' },
        { name: 'Pramod Bhagat', role: 'Executive Member' },
        { name: 'Ajit Kujur', role: 'Executive Member' },
        { name: 'Lalu Kispotta', role: 'Executive Member' },
        { name: 'Mahadev Bhagat', role: 'Executive Member' },
        { name: 'Lal Bakhla', role: 'Executive Member' }
      ] },
      ctaPartner
    ],
    hi: {
      kicker: 'कार्यकारी सदस्य', title: 'हमारे कार्यकारी सदस्य।',
      intro: 'वे सदस्य जो फाउंडेशन की दिशा का समर्थन करते हैं और समुदाय में इसके कार्य को आगे ले जाने में मदद करते हैं।',
      blocks: [
        { type: 'people', items: [
          { name: 'दिनेश उरांव', role: 'कार्यकारी सदस्य' },
          { name: 'राणा प्रताप उरांव', role: 'कार्यकारी सदस्य' },
          { name: 'प्रमोद भगत', role: 'कार्यकारी सदस्य' },
          { name: 'अजित कुजूर', role: 'कार्यकारी सदस्य' },
          { name: 'लालू किस्पोट्टा', role: 'कार्यकारी सदस्य' },
          { name: 'महादेव भगत', role: 'कार्यकारी सदस्य' },
          { name: 'लाल बखला', role: 'कार्यकारी सदस्य' }
        ] },
        ctaPartnerHi
      ]
    }
  },
  '/people/advisors': {
    kicker: 'Advisors', title: 'Expertise we lean on.',
    intro: 'Advisors lend specialist knowledge in education, public health, tribal rights, climate and finance.',
    blocks: [
      { type: 'prose', body: ['Our advisory group is being formed. Details of our advisors will be published here soon.'] },
      ctaPartner
    ],
    hi: {
      kicker: 'सलाहकार', title: 'जिस विशेषज्ञता का हम सहारा लेते हैं।',
      intro: 'सलाहकार शिक्षा, सार्वजनिक स्वास्थ्य, आदिवासी अधिकार, जलवायु और वित्त में विशेषज्ञ ज्ञान प्रदान करते हैं।',
      blocks: [
        { type: 'prose', body: ['हमारा सलाहकार समूह बन रहा है। हमारे सलाहकारों का विवरण जल्द ही यहाँ प्रकाशित किया जाएगा।'] },
        ctaPartnerHi
      ]
    }
  },
  '/people/volunteers': {
    kicker: 'Volunteers', title: 'A wider community of contribution.',
    intro: 'Volunteers bring time, skills and energy — from classroom support to professional expertise.',
    blocks: [
      { type: 'metrics', items: [
        { value: 520, unit: '+', label: 'Active volunteers', color: 'green' },
        { value: 31000, unit: '+', label: 'Volunteer hours a year', color: 'red' },
        { value: 40, unit: '+', label: 'Skilled professionals pro bono', color: 'green' }
      ] },
      { type: 'cta', tone: 'green', heading: 'Give your time and skill.', text: 'We match volunteers to where they can make the most difference.', primary: { label: 'Volunteer', to: '/get-involved/volunteer' }, secondary: { label: 'Contact us', to: '/contact' } }
    ],
    hi: {
      kicker: 'स्वयंसेवक', title: 'योगदान का एक व्यापक समुदाय।',
      intro: 'स्वयंसेवक समय, कौशल और ऊर्जा लाते हैं — कक्षा सहायता से लेकर पेशेवर विशेषज्ञता तक।',
      blocks: [
        { type: 'metrics', items: [
          { value: 520, unit: '+', label: 'सक्रिय स्वयंसेवक', color: 'green' },
          { value: 31000, unit: '+', label: 'प्रति वर्ष स्वयंसेवी घंटे', color: 'red' },
          { value: 40, unit: '+', label: 'नि:शुल्क सेवा देने वाले कुशल पेशेवर', color: 'green' }
        ] },
        { type: 'cta', tone: 'green', heading: 'अपना समय और कौशल दें।', text: 'हम स्वयंसेवकों को वहाँ जोड़ते हैं जहाँ वे सबसे अधिक प्रभाव डाल सकें।', primary: { label: 'स्वयंसेवक बनें', to: '/get-involved/volunteer' }, secondary: { label: 'हमसे संपर्क करें', to: '/contact' } }
      ]
    }
  },

  // ============================= KNOWLEDGE HUB =============================
  '/knowledge-hub': {
    kicker: 'Knowledge Hub', title: 'What we learn, we share.',
    intro: 'Evidence is only useful if it travels. We publish our research, tools and case studies openly.',
    heroImage: 'domf-knowledge',
    blocks: [
      { type: 'focusGrid', items: [
        { tag: 'Reports', title: 'Reports', text: 'Programme and thematic reports.', to: '/knowledge-hub/reports' },
        { tag: 'Research', title: 'Research', text: 'Studies and independent evaluations.', to: '/knowledge-hub/research' },
        { tag: 'Tools', title: 'Publications', text: 'Briefs, guides and toolkits.', to: '/knowledge-hub/publications' },
        { tag: 'Practice', title: 'Case Studies', text: 'What worked in the field, and why.', to: '/knowledge-hub/case-studies' }
      ] },
      ctaPartner
    ],
    hi: {
      kicker: 'ज्ञान केंद्र', title: 'जो हम सीखते हैं, उसे साझा करते हैं।',
      intro: 'साक्ष्य तभी उपयोगी है जब वह आगे पहुँचे। हम अपना शोध, उपकरण और केस-स्टडी खुले तौर पर प्रकाशित करते हैं।',
      blocks: [
        { type: 'focusGrid', items: [
          { tag: 'रिपोर्ट', title: 'रिपोर्टें', text: 'कार्यक्रम एवं विषयगत रिपोर्टें।', to: '/knowledge-hub/reports' },
          { tag: 'शोध', title: 'शोध', text: 'अध्ययन एवं स्वतंत्र मूल्यांकन।', to: '/knowledge-hub/research' },
          { tag: 'उपकरण', title: 'प्रकाशन', text: 'संक्षेप, मार्गदर्शिकाएँ एवं टूलकिट।', to: '/knowledge-hub/publications' },
          { tag: 'व्यवहार', title: 'केस स्टडी', text: 'ज़मीन पर क्या काम आया, और क्यों।', to: '/knowledge-hub/case-studies' }
        ] },
        ctaPartnerHi
      ]
    }
  },
  '/knowledge-hub/reports': {
    kicker: 'Reports', title: 'Programme & thematic reports.',
    intro: 'Detailed reporting on our programmes, outcomes and the contexts we work in.',
    blocks: [
      { type: 'reports', items: [
        { title: 'State of Tribal Education in Our Districts', meta: 'PDF · Thematic report', tag: 'Education' },
        { title: 'Maternal Health Outreach: Three-Year Review', meta: 'PDF · Programme report', tag: 'Health' },
        { title: 'Self-Help Groups & Women\'s Livelihoods', meta: 'PDF · Programme report', tag: 'Livelihoods' },
        { title: 'Watershed Restoration Outcomes', meta: 'PDF · Programme report', tag: 'Environment' }
      ] },
      ctaPartner
    ],
    hi: {
      kicker: 'रिपोर्टें', title: 'कार्यक्रम एवं विषयगत रिपोर्टें।',
      intro: 'हमारे कार्यक्रमों, परिणामों और जिन संदर्भों में हम काम करते हैं, उन पर विस्तृत रिपोर्टिंग।',
      blocks: [
        { type: 'reports', items: [
          { title: 'हमारे ज़िलों में आदिवासी शिक्षा की स्थिति', meta: 'PDF · विषयगत रिपोर्ट', tag: 'शिक्षा' },
          { title: 'मातृ स्वास्थ्य पहुँच: तीन वर्षीय समीक्षा', meta: 'PDF · कार्यक्रम रिपोर्ट', tag: 'स्वास्थ्य' },
          { title: 'स्वयं-सहायता समूह एवं महिला आजीविका', meta: 'PDF · कार्यक्रम रिपोर्ट', tag: 'आजीविका' },
          { title: 'जलग्रहण पुनर्स्थापन के परिणाम', meta: 'PDF · कार्यक्रम रिपोर्ट', tag: 'पर्यावरण' }
        ] },
        ctaPartnerHi
      ]
    }
  },
  '/knowledge-hub/research': {
    kicker: 'Research', title: 'Studies and evaluations.',
    intro: 'Independent and internal research that tests what works and sharpens our practice.',
    blocks: [
      { type: 'reports', items: [
        { title: 'Independent Evaluation of Learning Outcomes', meta: 'PDF · Third-party study', tag: 'Evaluation' },
        { title: 'Mother-Tongue Instruction: Evidence Review', meta: 'PDF · Research', tag: 'Education' },
        { title: 'Cost-Effectiveness of Mobile Clinics', meta: 'PDF · Research', tag: 'Health' }
      ] },
      ctaPartner
    ],
    hi: {
      kicker: 'शोध', title: 'अध्ययन एवं मूल्यांकन।',
      intro: 'स्वतंत्र और आंतरिक शोध जो परखता है कि क्या काम करता है और हमारे व्यवहार को निखारता है।',
      blocks: [
        { type: 'reports', items: [
          { title: 'अधिगम परिणामों का स्वतंत्र मूल्यांकन', meta: 'PDF · तृतीय-पक्ष अध्ययन', tag: 'मूल्यांकन' },
          { title: 'मातृभाषा शिक्षण: साक्ष्य समीक्षा', meta: 'PDF · शोध', tag: 'शिक्षा' },
          { title: 'मोबाइल क्लीनिकों की लागत-प्रभावशीलता', meta: 'PDF · शोध', tag: 'स्वास्थ्य' }
        ] },
        ctaPartnerHi
      ]
    }
  },
  '/knowledge-hub/publications': {
    kicker: 'Publications', title: 'Briefs, guides and toolkits.',
    intro: 'Practical resources for practitioners, partners and communities.',
    blocks: [
      { type: 'reports', items: [
        { title: 'Setting Up a Community Learning Centre', meta: 'PDF · Toolkit', tag: 'Toolkit' },
        { title: 'A Guide to Forest Rights Claims', meta: 'PDF · Guide', tag: 'Rights' },
        { title: 'Running a Self-Help Group: A Handbook', meta: 'PDF · Handbook', tag: 'Livelihoods' }
      ] },
      ctaPartner
    ],
    hi: {
      kicker: 'प्रकाशन', title: 'संक्षेप, मार्गदर्शिकाएँ एवं टूलकिट।',
      intro: 'व्यवसायियों, साझेदारों और समुदायों के लिए व्यावहारिक संसाधन।',
      blocks: [
        { type: 'reports', items: [
          { title: 'सामुदायिक शिक्षण केंद्र की स्थापना', meta: 'PDF · टूलकिट', tag: 'टूलकिट' },
          { title: 'वन अधिकार दावों के लिए मार्गदर्शिका', meta: 'PDF · मार्गदर्शिका', tag: 'अधिकार' },
          { title: 'स्वयं-सहायता समूह चलाना: एक पुस्तिका', meta: 'PDF · पुस्तिका', tag: 'आजीविका' }
        ] },
        ctaPartnerHi
      ]
    }
  },
  '/knowledge-hub/case-studies': {
    kicker: 'Case Studies', title: 'What worked, and why.',
    intro: 'Honest accounts of specific programmes — including the parts that did not go to plan.',
    blocks: [
      { type: 'cards', items: [
        { tag: 'Education', meta: 'Gumla district', title: 'Bringing a learning centre to a forest hamlet', text: 'How presence, language and patience raised retention.', img: 'cs-1' },
        { tag: 'Health', meta: 'Odisha', title: 'A mobile clinic route that families can rely on', text: 'Designing care around the calendar of remote villages.', img: 'cs-2' },
        { tag: 'Livelihoods', meta: 'Chhattisgarh', title: 'From savings group to enterprise', text: 'The conditions that let a collective become a business.', img: 'cs-3' }
      ] },
      ctaPartner
    ],
    hi: {
      kicker: 'केस स्टडी', title: 'क्या काम आया, और क्यों।',
      intro: 'विशिष्ट कार्यक्रमों के ईमानदार विवरण — उन हिस्सों सहित जो योजना के अनुसार नहीं हुए।',
      blocks: [
        { type: 'cards', items: [
          { tag: 'शिक्षा', meta: 'गुमला ज़िला', title: 'एक वनवासी बस्ती तक शिक्षण केंद्र पहुँचाना', text: 'कैसे उपस्थिति, भाषा और धैर्य ने ठहराव बढ़ाया।', img: 'cs-1' },
          { tag: 'स्वास्थ्य', meta: 'ओडिशा', title: 'एक मोबाइल क्लीनिक मार्ग जिस पर परिवार भरोसा कर सकें', text: 'दूरस्थ गाँवों के कैलेंडर के अनुसार देखभाल की रूपरेखा।', img: 'cs-2' },
          { tag: 'आजीविका', meta: 'छत्तीसगढ़', title: 'बचत समूह से उद्यम तक', text: 'वे परिस्थितियाँ जिन्होंने एक समूह को व्यवसाय बनने दिया।', img: 'cs-3' }
        ] },
        ctaPartnerHi
      ]
    }
  },

  // ============================= PARTNERS =============================
  '/partners': {
    kicker: 'Partners', title: 'We do not work alone.',
    intro: 'Lasting change is built through partnership — with companies, government, grassroots organisations and individuals who share our patience.',
    heroImage: 'domf-partners',
    blocks: [
      { type: 'logos', kicker: 'In good company', items: ['Aurora CSR', 'Banyan Trust', 'GreenLeaf', 'Sahyog', 'Unnati', 'Prayas', 'Vikalp', 'Sankalp'] },
      { type: 'focusGrid', heading: 'Ways we partner', items: [
        { tag: 'Corporate', title: 'CSR Partners', text: 'Companies investing responsibly and for the long term.', to: '/partners/csr-partners' },
        { tag: 'Public', title: 'Government Partners', text: 'Working with public institutions and schemes.', to: '/partners/government-partners' },
        { tag: 'Grassroots', title: 'Community Organizations', text: 'Local networks that root our work.', to: '/partners/community-organizations' },
        { tag: 'Individual', title: 'Supporters', text: 'Individuals and trusts who stand with us.', to: '/partners/supporters' }
      ] },
      ctaPartner
    ],
    hi: {
      kicker: 'साझेदार', title: 'हम अकेले काम नहीं करते।',
      intro: 'स्थायी बदलाव साझेदारी से बनता है — उन कंपनियों, सरकार, ज़मीनी संगठनों और व्यक्तियों के साथ जो हमारे धैर्य को साझा करते हैं।',
      blocks: [
        { type: 'logos', kicker: 'अच्छे साथ में', items: ['Aurora CSR', 'Banyan Trust', 'GreenLeaf', 'Sahyog', 'Unnati', 'Prayas', 'Vikalp', 'Sankalp'] },
        { type: 'focusGrid', heading: 'हम कैसे साझेदारी करते हैं', items: [
          { tag: 'कॉर्पोरेट', title: 'CSR साझेदार', text: 'ज़िम्मेदारी से और दीर्घकाल के लिए निवेश करने वाली कंपनियाँ।', to: '/partners/csr-partners' },
          { tag: 'सार्वजनिक', title: 'सरकारी साझेदार', text: 'सार्वजनिक संस्थाओं और योजनाओं के साथ कार्य।', to: '/partners/government-partners' },
          { tag: 'ज़मीनी', title: 'सामुदायिक संगठन', text: 'स्थानीय नेटवर्क जो हमारे कार्य को जड़ देते हैं।', to: '/partners/community-organizations' },
          { tag: 'व्यक्तिगत', title: 'समर्थक', text: 'व्यक्ति और न्यास जो हमारे साथ खड़े हैं।', to: '/partners/supporters' }
        ] },
        ctaPartnerHi
      ]
    }
  },
  '/partners/csr-partners': {
    kicker: 'CSR Partners', title: 'Corporate partnership, done responsibly.',
    intro: 'We partner with companies that want measurable, transparent and durable social impact — not visibility for its own sake.',
    blocks: [
      { type: 'split', subkicker: 'How it works', subheading: 'Outcomes you can report to your board.', img: 'domf-csr', body: [
        'We co-design programmes aligned to your CSR priorities, deliver them with rigour, and report against outcome indicators with independent verification.'
      ], bullets: ['Outcome-based reporting', 'Independent verification', 'Programme co-design', 'Employee engagement & volunteering'] },
      { type: 'logos', items: ['Aurora CSR', 'GreenLeaf', 'Banyan Trust', 'Unnati'] },
      ctaPartner
    ],
    hi: {
      kicker: 'CSR साझेदार', title: 'कॉर्पोरेट साझेदारी, ज़िम्मेदारी से।',
      intro: 'हम उन कंपनियों के साथ साझेदारी करते हैं जो मापने योग्य, पारदर्शी और टिकाऊ सामाजिक प्रभाव चाहती हैं — केवल दिखावे के लिए नहीं।',
      blocks: [
        { type: 'split', subkicker: 'यह कैसे काम करता है', subheading: 'ऐसे परिणाम जो आप अपने बोर्ड को बता सकें।', img: 'domf-csr', body: [
          'हम आपकी CSR प्राथमिकताओं के अनुरूप कार्यक्रम सह-निर्मित करते हैं, उन्हें कठोरता से क्रियान्वित करते हैं, और स्वतंत्र सत्यापन के साथ परिणाम-संकेतकों के विरुद्ध रिपोर्ट करते हैं।'
        ], bullets: ['परिणाम-आधारित रिपोर्टिंग', 'स्वतंत्र सत्यापन', 'कार्यक्रम सह-निर्माण', 'कर्मचारी भागीदारी एवं स्वयंसेवा'] },
        { type: 'logos', items: ['Aurora CSR', 'GreenLeaf', 'Banyan Trust', 'Unnati'] },
        ctaPartnerHi
      ]
    }
  },
  '/partners/government-partners': {
    kicker: 'Government Partners', title: 'Working with the public system.',
    intro: 'We strengthen and complement public services — schools, health systems and welfare schemes — rather than replacing them.',
    blocks: [
      { type: 'prose', body: [
        'Our programmes are designed to connect communities to the entitlements and services they are owed, and to make public delivery work better in remote areas.',
        'We collaborate with district administrations, public schools and health departments on shared goals.'
      ] },
      ctaPartner
    ],
    hi: {
      kicker: 'सरकारी साझेदार', title: 'सार्वजनिक तंत्र के साथ कार्य।',
      intro: 'हम सार्वजनिक सेवाओं — स्कूलों, स्वास्थ्य तंत्रों और कल्याण योजनाओं — को सशक्त और पूरक बनाते हैं, उन्हें प्रतिस्थापित नहीं करते।',
      blocks: [
        { type: 'prose', body: [
          'हमारे कार्यक्रम इस उद्देश्य से बनाए जाते हैं कि समुदायों को उनके हक़ की सुविधाएँ व सेवाएँ मिलें, और दूरस्थ क्षेत्रों में सार्वजनिक सेवा-वितरण बेहतर हो।',
          'हम साझा लक्ष्यों पर ज़िला प्रशासन, सरकारी स्कूलों और स्वास्थ्य विभागों के साथ सहयोग करते हैं।'
        ] },
        ctaPartnerHi
      ]
    }
  },
  '/partners/community-organizations': {
    kicker: 'Community Organizations', title: 'Rooted in grassroots networks.',
    intro: 'Local organisations are our closest partners — they carry the trust, context and continuity that make programmes work.',
    blocks: [
      { type: 'logos', items: ['Sahyog', 'Prayas', 'Vikalp', 'Sankalp', 'Jagriti', 'Sewa'] },
      { type: 'quote', text: 'The Foundation treats local organisations as equals. That is rarer than it should be.', name: 'Partner organisation', role: 'Jharkhand' },
      ctaPartner
    ],
    hi: {
      kicker: 'सामुदायिक संगठन', title: 'ज़मीनी नेटवर्कों में जड़ें।',
      intro: 'स्थानीय संगठन हमारे सबसे निकट साझेदार हैं — वे वह विश्वास, संदर्भ और निरंतरता रखते हैं जो कार्यक्रमों को सफल बनाते हैं।',
      blocks: [
        { type: 'logos', items: ['Sahyog', 'Prayas', 'Vikalp', 'Sankalp', 'Jagriti', 'Sewa'] },
        { type: 'quote', text: 'फाउंडेशन स्थानीय संगठनों को बराबरी का मानता है। यह जितना होना चाहिए, उससे कहीं अधिक दुर्लभ है।', name: 'साझेदार संगठन', role: 'झारखंड' },
        ctaPartnerHi
      ]
    }
  },
  '/partners/supporters': {
    kicker: 'Supporters', title: 'Individuals and trusts who stand with us.',
    intro: 'Many of our most committed partners are individuals and family trusts who give quietly and for the long term.',
    blocks: [
      { type: 'metrics', items: [
        { value: 3400, unit: '+', label: 'Individual supporters', color: 'green' },
        { value: 92, unit: '%', label: 'Of spend reaching the field', color: 'red' },
        { value: 11, unit: '', label: 'Family trusts & foundations', color: 'ink' }
      ] },
      ctaDonate
    ],
    hi: {
      kicker: 'समर्थक', title: 'व्यक्ति और न्यास जो हमारे साथ खड़े हैं।',
      intro: 'हमारे कई सबसे समर्पित साझेदार वे व्यक्ति और पारिवारिक न्यास हैं जो चुपचाप और दीर्घकाल के लिए योगदान देते हैं।',
      blocks: [
        { type: 'metrics', items: [
          { value: 3400, unit: '+', label: 'व्यक्तिगत समर्थक', color: 'green' },
          { value: 92, unit: '%', label: 'व्यय जो ज़मीन तक पहुँचता है', color: 'red' },
          { value: 11, unit: '', label: 'पारिवारिक न्यास एवं फाउंडेशन', color: 'ink' }
        ] },
        ctaDonateHi
      ]
    }
  },

  // ============================= NEWS =============================
  '/news': {
    kicker: 'News & Updates', title: 'The latest from the Foundation.',
    intro: 'News, events and announcements — and dispatches from the field.',
    heroImage: 'domf-news',
    blocks: [
      { type: 'cards', items: [
        { tag: 'News', meta: 'May 2026', title: 'Independent evaluation confirms learning gains', text: 'A third-party study finds sustained improvements across our education programme.', img: 'news-1' },
        { tag: 'Announcement', meta: 'April 2026', title: 'Two new districts join our healthcare routes', text: 'Mobile clinics extend to communities previously hours from care.', img: 'news-2' },
        { tag: 'News', meta: 'March 2026', title: 'Annual report 2024–25 published', text: 'Audited results, programme outcomes and an honest review of the year.', img: 'news-3' }
      ] },
      { type: 'focusGrid', heading: 'More updates', items: [
        { tag: 'Dates', title: 'Events', text: 'Convenings, field visits and briefings.', to: '/news/events' },
        { tag: 'Notices', title: 'Announcements', text: 'Official notices and updates.', to: '/news/announcements' },
        { tag: 'Field', title: 'Field Stories', text: 'Dispatches from our programmes.', to: '/blog' }
      ] },
      ctaDonate
    ],
    hi: {
      kicker: 'समाचार एवं अपडेट', title: 'फाउंडेशन से नवीनतम।',
      intro: 'समाचार, कार्यक्रम और घोषणाएँ — और ज़मीन से रिपोर्टें।',
      blocks: [
        { type: 'cards', items: [
          { tag: 'समाचार', meta: 'मई 2026', title: 'स्वतंत्र मूल्यांकन ने अधिगम वृद्धि की पुष्टि की', text: 'एक तृतीय-पक्ष अध्ययन हमारे शिक्षा कार्यक्रम में निरंतर सुधार पाता है।', img: 'news-1' },
          { tag: 'घोषणा', meta: 'अप्रैल 2026', title: 'दो नए ज़िले हमारे स्वास्थ्य मार्गों से जुड़े', text: 'मोबाइल क्लीनिक उन समुदायों तक पहुँचे जो पहले देखभाल से घंटों दूर थे।', img: 'news-2' },
          { tag: 'समाचार', meta: 'मार्च 2026', title: 'वार्षिक रिपोर्ट 2024–25 प्रकाशित', text: 'अंकेक्षित परिणाम, कार्यक्रम परिणाम और वर्ष की ईमानदार समीक्षा।', img: 'news-3' }
        ] },
        { type: 'focusGrid', heading: 'और अपडेट', items: [
          { tag: 'तिथियाँ', title: 'कार्यक्रम', text: 'सम्मेलन, क्षेत्र-दौरे और ब्रीफिंग।', to: '/news/events' },
          { tag: 'सूचनाएँ', title: 'घोषणाएँ', text: 'आधिकारिक सूचनाएँ और अपडेट।', to: '/news/announcements' },
          { tag: 'ज़मीन', title: 'क्षेत्र की कहानियाँ', text: 'हमारे कार्यक्रमों से रिपोर्टें।', to: '/blog' }
        ] },
        ctaDonateHi
      ]
    }
  },
  '/news/events': {
    kicker: 'Events', title: 'Where to find us.',
    intro: 'Convenings, partner briefings and community events through the year.',
    blocks: [
      { type: 'cards', items: [
        { tag: 'Convening', meta: '12 June 2026 · Ranchi', title: 'Tribal Education Roundtable', text: 'Practitioners and partners share what works in remote learning.', img: 'ev-1' },
        { tag: 'Briefing', meta: '3 July 2026 · Online', title: 'Quarterly Impact Briefing', text: 'A live walkthrough of our latest programme indicators.', img: 'ev-2' },
        { tag: 'Field visit', meta: 'August 2026 · Gumla', title: 'Partner Field Visit', text: 'See programmes first-hand, with the communities who run them.', img: 'ev-3' }
      ] },
      ctaPartner
    ],
    hi: {
      kicker: 'कार्यक्रम', title: 'हमें कहाँ पाएँ।',
      intro: 'वर्ष भर सम्मेलन, साझेदार ब्रीफिंग और सामुदायिक कार्यक्रम।',
      blocks: [
        { type: 'cards', items: [
          { tag: 'सम्मेलन', meta: '12 जून 2026 · रांची', title: 'आदिवासी शिक्षा गोलमेज़', text: 'व्यवसायी और साझेदार दूरस्थ शिक्षा में क्या काम आता है, साझा करते हैं।', img: 'ev-1' },
          { tag: 'ब्रीफिंग', meta: '3 जुलाई 2026 · ऑनलाइन', title: 'तिमाही प्रभाव ब्रीफिंग', text: 'हमारे नवीनतम कार्यक्रम संकेतकों की एक लाइव झलक।', img: 'ev-2' },
          { tag: 'क्षेत्र-दौरा', meta: 'अगस्त 2026 · गुमला', title: 'साझेदार क्षेत्र-दौरा', text: 'कार्यक्रमों को प्रत्यक्ष देखें, उन्हीं समुदायों के साथ जो उन्हें चलाते हैं।', img: 'ev-3' }
        ] },
        ctaPartnerHi
      ]
    }
  },
  '/news/announcements': {
    kicker: 'Announcements', title: 'Official notices and updates.',
    intro: 'Formal announcements from the Foundation.',
    blocks: [
      { type: 'reports', items: [
        { title: 'Appointment of new Board Chairperson', meta: 'May 2026 · Governance', tag: 'Notice' },
        { title: 'Publication of Annual Report 2024–25', meta: 'March 2026 · Reporting', tag: 'Notice' },
        { title: 'Expansion of healthcare routes to two new districts', meta: 'April 2026 · Programmes', tag: 'Notice' }
      ] },
      ctaDonate
    ],
    hi: {
      kicker: 'घोषणाएँ', title: 'आधिकारिक सूचनाएँ और अपडेट।',
      intro: 'फाउंडेशन से औपचारिक घोषणाएँ।',
      blocks: [
        { type: 'reports', items: [
          { title: 'नए बोर्ड अध्यक्ष की नियुक्ति', meta: 'मई 2026 · शासन', tag: 'सूचना' },
          { title: 'वार्षिक रिपोर्ट 2024–25 का प्रकाशन', meta: 'मार्च 2026 · रिपोर्टिंग', tag: 'सूचना' },
          { title: 'दो नए ज़िलों तक स्वास्थ्य मार्गों का विस्तार', meta: 'अप्रैल 2026 · कार्यक्रम', tag: 'सूचना' }
        ] },
        ctaDonateHi
      ]
    }
  },

  // ============================= GET INVOLVED =============================
  '/get-involved': {
    kicker: 'Get Involved', title: 'Stand with communities, for the long term.',
    intro: 'There are three ways to be part of the work — give, volunteer, or partner. Each is tracked to real outcomes.',
    heroImage: 'domf-involved',
    blocks: [
      { type: 'focusGrid', items: [
        { tag: 'Give', title: 'Donate', text: 'Fund a programme and follow its outcomes.', to: '/get-involved/donate' },
        { tag: 'Time', title: 'Volunteer', text: 'Offer your time and skills where they count.', to: '/get-involved/volunteer' },
        { tag: 'Build', title: 'Partner With Us', text: 'For companies, trusts and institutions.', to: '/get-involved/partner-with-us' }
      ] },
      { type: 'metrics', band: true, kicker: 'Why it matters', heading: 'Your support, accounted for', items: [
        { value: 92, unit: '%', label: 'Of spend reaching the field', color: 'green' },
        { value: 100, unit: '%', label: 'Of audits published', color: 'red' },
        { value: 38000, unit: '+', label: 'People reached each year', color: 'green' }
      ] },
      ctaDonate
    ],
    hi: {
      kicker: 'सहभागी बनें', title: 'समुदायों के साथ खड़े हों, दीर्घकाल के लिए।',
      intro: 'इस कार्य का हिस्सा बनने के तीन तरीके हैं — दान दें, स्वयंसेवा करें, या साझेदारी करें। प्रत्येक को वास्तविक परिणामों से जोड़ा जाता है।',
      blocks: [
        { type: 'focusGrid', items: [
          { tag: 'दें', title: 'दान करें', text: 'एक कार्यक्रम को वित्तपोषित करें और उसके परिणाम देखें।', to: '/get-involved/donate' },
          { tag: 'समय', title: 'स्वयंसेवा', text: 'अपना समय और कौशल वहाँ दें जहाँ मायने रखे।', to: '/get-involved/volunteer' },
          { tag: 'निर्माण', title: 'हमारे साझेदार बनें', text: 'कंपनियों, न्यासों और संस्थाओं के लिए।', to: '/get-involved/partner-with-us' }
        ] },
        { type: 'metrics', band: true, kicker: 'यह क्यों मायने रखता है', heading: 'आपका सहयोग, हिसाब के साथ', items: [
          { value: 92, unit: '%', label: 'व्यय जो ज़मीन तक पहुँचता है', color: 'green' },
          { value: 100, unit: '%', label: 'प्रकाशित अंकेक्षण', color: 'red' },
          { value: 38000, unit: '+', label: 'हर वर्ष पहुँचे लोग', color: 'green' }
        ] },
        ctaDonateHi
      ]
    }
  },
  '/get-involved/donate': {
    kicker: 'Donate', title: 'Your gift reaches the last village first.',
    intro: 'Choose a programme to support. Every contribution is tracked to an outcome and reported transparently.',
    blocks: [
      { type: 'cards', items: [
        { tag: 'Education', title: 'Fund a child\'s year of learning', text: 'Materials, a place in a learning centre, and a path to secondary school.', img: 'give-edu' },
        { tag: 'Healthcare', title: 'Support a safe pregnancy', text: 'Maternal care and a mobile clinic route in a remote cluster.', img: 'give-health' },
        { tag: 'Livelihoods', title: 'Back a self-help group', text: 'Seed a women\'s savings and enterprise group.', img: 'give-livelihood' }
      ] },
      { type: 'split', side: 'right', subkicker: 'Transparency', subheading: 'You will know exactly where it went.', img: 'domf-donate', body: [
        'Donors receive programme updates and can see outcomes on our impact dashboard. 92% of every contribution reaches the field.'
      ], link: { label: 'See governance & transparency', to: '/who-we-are/governance-transparency' } },
      { type: 'cta', tone: 'red', heading: 'Ready to give?', text: 'Set up a one-time or recurring contribution in minutes.', primary: { label: 'Donate now', to: '/contact' }, secondary: { label: 'Talk to us first', to: '/contact' } }
    ],
    hi: {
      kicker: 'दान करें', title: 'आपका उपहार सबसे पहले अंतिम गाँव तक पहुँचता है।',
      intro: 'समर्थन के लिए एक कार्यक्रम चुनें। हर योगदान को एक परिणाम से जोड़कर पारदर्शिता के साथ रिपोर्ट किया जाता है।',
      blocks: [
        { type: 'cards', items: [
          { tag: 'शिक्षा', title: 'एक बच्चे के पढ़ाई के वर्ष को वित्तपोषित करें', text: 'सामग्री, शिक्षण केंद्र में स्थान, और माध्यमिक विद्यालय तक का मार्ग।', img: 'give-edu' },
          { tag: 'स्वास्थ्य', title: 'एक सुरक्षित गर्भावस्था का समर्थन करें', text: 'दूरस्थ समूह में मातृ देखभाल और एक मोबाइल क्लीनिक मार्ग।', img: 'give-health' },
          { tag: 'आजीविका', title: 'एक स्वयं-सहायता समूह का समर्थन करें', text: 'महिलाओं के बचत व उद्यम समूह को आरंभिक सहायता दें।', img: 'give-livelihood' }
        ] },
        { type: 'split', side: 'right', subkicker: 'पारदर्शिता', subheading: 'आपको ठीक-ठीक पता होगा कि यह कहाँ गया।', img: 'domf-donate', body: [
          'दानदाताओं को कार्यक्रम अपडेट मिलते हैं और वे हमारे प्रभाव डैशबोर्ड पर परिणाम देख सकते हैं। हर योगदान का 92% ज़मीन तक पहुँचता है।'
        ], link: { label: 'शासन एवं पारदर्शिता देखें', to: '/who-we-are/governance-transparency' } },
        { type: 'cta', tone: 'red', heading: 'देने के लिए तैयार?', text: 'मिनटों में एकमुश्त या आवर्ती योगदान सेट करें।', primary: { label: 'अभी दान करें', to: '/contact' }, secondary: { label: 'पहले हमसे बात करें', to: '/contact' } }
      ]
    }
  },
  '/get-involved/volunteer': {
    kicker: 'Volunteer', title: 'Give time where it makes a difference.',
    intro: 'We match volunteers — from students to senior professionals — to roles where their skills count most.',
    blocks: [
      { type: 'focusGrid', heading: 'Ways to help', items: [
        { tag: 'Teaching', title: 'Learning support', text: 'Support teachers and students in learning centres.' },
        { tag: 'Skills', title: 'Pro bono expertise', text: 'Lend professional skills — health, finance, design, data.' },
        { tag: 'Field', title: 'Programme support', text: 'Help deliver and document programmes in the field.' }
      ] },
      { type: 'cta', tone: 'green', heading: 'Offer your time.', text: 'Tell us about yourself and how you would like to help.', primary: { label: 'Apply to volunteer', to: '/contact' }, secondary: { label: 'See volunteer impact', to: '/people/volunteers' } }
    ],
    hi: {
      kicker: 'स्वयंसेवा', title: 'समय वहाँ दें जहाँ वह फ़र्क डाले।',
      intro: 'हम स्वयंसेवकों को — विद्यार्थियों से लेकर वरिष्ठ पेशेवरों तक — उन भूमिकाओं से जोड़ते हैं जहाँ उनके कौशल सबसे अधिक मायने रखें।',
      blocks: [
        { type: 'focusGrid', heading: 'मदद के तरीके', items: [
          { tag: 'शिक्षण', title: 'अधिगम सहायता', text: 'शिक्षण केंद्रों में शिक्षकों और विद्यार्थियों का सहयोग करें।' },
          { tag: 'कौशल', title: 'नि:शुल्क विशेषज्ञता', text: 'पेशेवर कौशल दें — स्वास्थ्य, वित्त, डिज़ाइन, डेटा।' },
          { tag: 'क्षेत्र', title: 'कार्यक्रम सहायता', text: 'ज़मीन पर कार्यक्रमों के क्रियान्वयन व दस्तावेज़ीकरण में मदद करें।' }
        ] },
        { type: 'cta', tone: 'green', heading: 'अपना समय दें।', text: 'हमें अपने बारे में बताएँ और बताएँ कि आप कैसे मदद करना चाहेंगे।', primary: { label: 'स्वयंसेवा हेतु आवेदन करें', to: '/contact' }, secondary: { label: 'स्वयंसेवी प्रभाव देखें', to: '/people/volunteers' } }
      ]
    }
  },
  '/get-involved/partner-with-us': {
    kicker: 'Partner With Us', title: 'Build lasting impact, together.',
    intro: 'For companies, trusts and institutions seeking measurable, transparent and durable social outcomes.',
    blocks: [
      { type: 'split', subkicker: 'Partnership', subheading: 'Co-designed. Measured. Reported.', img: 'domf-partner', body: [
        'We work with partners to design programmes aligned to shared goals, deliver them with field rigour, and report against independently verified outcomes.'
      ], bullets: ['Outcome-based reporting', 'Independent verification', 'Long-term commitment', 'Employee engagement options'] },
      { type: 'cta', tone: 'green', heading: 'Start a conversation.', text: 'Tell us what you want to achieve and we will design a path to it.', primary: { label: 'Contact the partnerships team', to: '/contact' }, secondary: { label: 'See our partners', to: '/partners' } }
    ],
    hi: {
      kicker: 'हमारे साझेदार बनें', title: 'मिलकर स्थायी प्रभाव बनाएँ।',
      intro: 'उन कंपनियों, न्यासों और संस्थाओं के लिए जो मापने योग्य, पारदर्शी और टिकाऊ सामाजिक परिणाम चाहती हैं।',
      blocks: [
        { type: 'split', subkicker: 'साझेदारी', subheading: 'सह-निर्मित। मापित। रिपोर्टेड।', img: 'domf-partner', body: [
          'हम साझेदारों के साथ मिलकर साझा लक्ष्यों के अनुरूप कार्यक्रम बनाते हैं, उन्हें ज़मीनी कठोरता से क्रियान्वित करते हैं, और स्वतंत्र रूप से सत्यापित परिणामों के विरुद्ध रिपोर्ट करते हैं।'
        ], bullets: ['परिणाम-आधारित रिपोर्टिंग', 'स्वतंत्र सत्यापन', 'दीर्घकालिक प्रतिबद्धता', 'कर्मचारी भागीदारी विकल्प'] },
        { type: 'cta', tone: 'green', heading: 'बातचीत शुरू करें।', text: 'हमें बताएँ कि आप क्या हासिल करना चाहते हैं और हम उसका मार्ग तैयार करेंगे।', primary: { label: 'साझेदारी टीम से संपर्क करें', to: '/contact' }, secondary: { label: 'हमारे साझेदार देखें', to: '/partners' } }
      ]
    }
  },

  // ============================= CONTACT =============================
  '/contact': {
    kicker: 'Contact', title: 'Talk to the Foundation.',
    intro: 'Whether you want to give, partner, volunteer or simply understand our work, we would like to hear from you.',
    blocks: [
      { type: 'focusGrid', items: [
        { tag: 'General', title: 'General enquiries', text: 'hello@domf.org · +91 00000 00000' },
        { tag: 'Partnerships', title: 'Partnerships & CSR', text: 'partners@domf.org' },
        { tag: 'Media', title: 'Press & media', text: 'media@domf.org' }
      ] },
      { type: 'split', subkicker: 'Find us', subheading: 'Registered office & field presence.', img: 'domf-contact', body: [
        'Registered office: C/o Karma Oraon, Morabadi, Ranchi, Jharkhand, India – 834008.',
        'Field presence across the tribal villages of Jharkhand, with our work radiating outward through the Dhumkuria Community Development Centers.'
      ], bullets: ['Mon–Fri, 9:30am – 6:00pm IST', 'Field visits by appointment'] },
      { type: 'split', subkicker: 'Legal status', subheading: 'A registered Section 8 non-profit.', body: [
        'Dharmes Oraon Memorial Foundation is incorporated under the Companies Act, 2013 as a not-for-profit company (Section 8), limited by shares, registered on 29 April 2022 with the Ministry of Corporate Affairs, Government of India.'
      ], bullets: [
        'CIN: U85300JH2022NPL018588',
        'PAN: AAJCD2544A',
        'TAN: RCHD02826F'
      ] },
      { type: 'faq', kicker: 'Before you write', heading: 'Common questions', items: [
        { q: 'How can I donate?', a: 'Visit Get Involved → Donate, or contact us and we will guide you to the programme that matches your intent.' },
        { q: 'Can I visit a programme?', a: 'Yes — partners and supporters can arrange field visits. Please contact us in advance so we can plan respectfully with the community.' },
        { q: 'How do I request a report?', a: 'All major reports are on our Knowledge Hub and Impact pages. For anything specific, email hello@domf.org.' }
      ] }
    ]
  }
}

export function getPage(path: string, locale: 'en' | 'hi' = 'en'): PageContent | undefined {
  // normalise trailing slash
  const clean = path.length > 1 && path.endsWith('/') ? path.slice(0, -1) : path
  const page = PAGES[clean]
  if (!page) return undefined
  if (locale === 'hi' && page.hi) return { ...page, ...page.hi }
  return page
}
