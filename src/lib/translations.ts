export type SupportedLanguage = "English" | "Telugu" | "Hindi" | "Tamil" | "Bengali";

export const LANGUAGES: SupportedLanguage[] = ["English", "Telugu", "Hindi", "Tamil", "Bengali"];

const verdictLabels: Record<string, Record<SupportedLanguage, string>> = {
  TRUE: { English: "Verified True", Telugu: "ధృవీకరించబడిన నిజం", Hindi: "सत्यापित सत्य", Tamil: "சரிபார்க்கப்பட்ட உண்மை", Bengali: "যাচাইকৃত সত্য" },
  FALSE: { English: "False", Telugu: "తప్పు", Hindi: "झूठ", Tamil: "தவறு", Bengali: "মিথ্যা" },
  UNVERIFIABLE: { English: "Unverifiable", Telugu: "ధృవీకరించలేనిది", Hindi: "असत्यापनीय", Tamil: "சரிபார்க்க இயலாதது", Bengali: "যাচাইযোগ্য নয়" },
};

const explanationTranslations: Record<string, Record<SupportedLanguage, string>> = {
  "The Earth is an oblate spheroid, confirmed by centuries of scientific observation, satellite imagery, and physics.": {
    English: "The Earth is an oblate spheroid, confirmed by centuries of scientific observation, satellite imagery, and physics.",
    Telugu: "భూమి ఒక దీర్ఘవృత్తాకార గోళం, శతాబ్దాల శాస్త్రీయ పరిశీలన, ఉపగ్రహ చిత్రాలు మరియు భౌతికశాస్త్రం ద్వారా నిర్ధారించబడింది.",
    Hindi: "पृथ्वी एक चपटा गोलाकार है, जो सदियों के वैज्ञानिक अवलोकन, उपग्रह चित्रों और भौतिकी द्वारा पुष्टि की गई है।",
    Tamil: "பூமி ஒரு நீள்வட்ட கோளம், இது பல நூற்றாண்டுகால அறிவியல் ஆய்வு, செயற்கைக்கோள் படங்கள் மற்றும் இயற்பியல் மூலம் உறுதிப்படுத்தப்பட்டுள்ளது.",
    Bengali: "পৃথিবী একটি চ্যাপটা গোলক, যা শতাব্দীর বৈজ্ঞানিক পর্যবেক্ষণ, উপগ্রহ চিত্র এবং পদার্থবিদ্যা দ্বারা নিশ্চিত।",
  },
  "Water boils at 100°C (212°F) at standard atmospheric pressure (1 atm) at sea level.": {
    English: "Water boils at 100°C (212°F) at standard atmospheric pressure (1 atm) at sea level.",
    Telugu: "సముద్ర మట్టంలో ప్రామాణిక వాతావరణ పీడనం (1 atm) వద్ద నీరు 100°C (212°F) వద్ద మరుగుతుంది.",
    Hindi: "समुद्र तल पर मानक वायुमंडलीय दबाव (1 atm) पर पानी 100°C (212°F) पर उबलता है।",
    Tamil: "கடல் மட்டத்தில் நிலையான வளிமண்டல அழுத்தத்தில் (1 atm) நீர் 100°C (212°F) இல் கொதிக்கும்.",
    Bengali: "সমুদ্রপৃষ্ঠে স্ট্যান্ডার্ড বায়ুমণ্ডলীয় চাপে (1 atm) জল 100°C (212°F) এ ফুটে।",
  },
  "Neuroimaging studies show that virtually all areas of the brain have known functions, and most are active over the course of a day.": {
    English: "Neuroimaging studies show that virtually all areas of the brain have known functions, and most are active over the course of a day.",
    Telugu: "న్యూరోఇమేజింగ్ అధ్యయనాలు మెదడులోని దాదాపు అన్ని ప్రాంతాలకు తెలిసిన విధులు ఉన్నాయని మరియు చాలా వరకు రోజులో చురుకుగా ఉంటాయని చూపిస్తున్నాయి.",
    Hindi: "न्यूरोइमेजिंग अध्ययन दिखाते हैं कि मस्तिष्क के लगभग सभी क्षेत्रों के ज्ञात कार्य हैं, और अधिकांश दिन भर सक्रिय रहते हैं।",
    Tamil: "நரம்பு படிமப் பரிசோதனைகள் மூளையின் கிட்டத்தட்ட அனைத்து பகுதிகளுக்கும் அறியப்பட்ட செயல்பாடுகள் உள்ளன என்றும், பெரும்பாலானவை ஒரு நாளில் செயலில் உள்ளன என்றும் காட்டுகின்றன.",
    Bengali: "নিউরোইমেজিং গবেষণায় দেখা গেছে যে মস্তিষ্কের প্রায় সব অঞ্চলের পরিচিত কার্যাবলী রয়েছে এবং বেশিরভাগই দিনে সক্রিয় থাকে।",
  },
  "The Great Wall is not visible from space with the naked eye. Astronauts have confirmed this.": {
    English: "The Great Wall is not visible from space with the naked eye. Astronauts have confirmed this.",
    Telugu: "చైనా గొడ్డ అంతరిక్షం నుండి నగ్న కంటితో కనిపించదు. వ్యోమగాములు దీనిని నిర్ధారించారు.",
    Hindi: "चीन की दीवार अंतरिक्ष से नग्न आंखों से दिखाई नहीं देती। अंतरिक्ष यात्रियों ने इसकी पुष्टि की है।",
    Tamil: "சீனப் பெருஞ்சுவர் விண்வெளியிலிருந்து வெறும் கண்ணால் தெரியாது. விண்வெளி வீரர்கள் இதை உறுதிப்படுத்தியுள்ளனர்.",
    Bengali: "চীনের মহাপ্রাচীর মহাকাশ থেকে খালি চোখে দেখা যায় না। মহাকাশচারীরা এটি নিশ্চিত করেছেন।",
  },
  "Lightning frequently strikes the same place repeatedly, especially tall and isolated structures like the Empire State Building.": {
    English: "Lightning frequently strikes the same place repeatedly, especially tall and isolated structures like the Empire State Building.",
    Telugu: "మెరుపులు తరచుగా ఒకే ప్రదేశంలో పదేపదే పడతాయి, ముఖ్యంగా ఎంపైర్ స్టేట్ బిల్డింగ్ వంటి ఎత్తైన మరియు ఒంటరి నిర్మాణాలపై.",
    Hindi: "बिजली अक्सर एक ही जगह पर बार-बार गिरती है, खासकर एम्पायर स्टेट बिल्डिंग जैसी ऊंची और अलग-थलग संरचनाओं पर।",
    Tamil: "மின்னல் அடிக்கடி ஒரே இடத்தில் மீண்டும் மீண்டும் தாக்குகிறது, குறிப்பாக எம்பயர் ஸ்டேட் கட்டிடம் போன்ற உயரமான மற்றும் தனிமையான கட்டமைப்புகளில்.",
    Bengali: "বিদ্যুৎ প্রায়ই একই জায়গায় বারবার আঘাত করে, বিশেষ করে এম্পায়ার স্টেট বিল্ডিংয়ের মতো উঁচু এবং বিচ্ছিন্ন কাঠামোতে।",
  },
  "Studies show vitamin C does not prevent colds in most people, though it may slightly reduce duration.": {
    English: "Studies show vitamin C does not prevent colds in most people, though it may slightly reduce duration.",
    Telugu: "అధ్యయనాలు విటమిన్ C చాలా మంది వ్యక్తులలో జలుబును నివారించదని చూపిస్తున్నాయి, అయితే ఇది కాలాన్ని కొద్దిగా తగ్గించవచ్చు.",
    Hindi: "अध्ययनों से पता चलता है कि विटामिन सी अधिकांश लोगों में सर्दी को नहीं रोकता, हालांकि यह अवधि को थोड़ा कम कर सकता है।",
    Tamil: "ஆய்வுகள் வைட்டமின் சி பெரும்பாலான மக்களில் சளியைத் தடுக்காது என்று காட்டுகின்றன, இருப்பினும் இது கால அளவை சிறிது குறைக்கலாம்.",
    Bengali: "গবেষণায় দেখা গেছে ভিটামিন সি বেশিরভাগ মানুষের সর্দি প্রতিরোধ করে না, যদিও এটি সময়কাল সামান্য কমাতে পারে।",
  },
  "The Apollo moon landings (1969-1972) are verified by multiple independent sources, including rock samples, retroreflectors left on the surface, and third-party tracking.": {
    English: "The Apollo moon landings (1969-1972) are verified by multiple independent sources, including rock samples, retroreflectors left on the surface, and third-party tracking.",
    Telugu: "అపోలో చంద్ర అవతరణలు (1969-1972) రాక్ నమూనాలు, ఉపరితలంపై వదిలిన రెట్రోరిఫ్లెక్టర్లు మరియు మూడవ పక్ష ట్రాకింగ్ సహా బహుళ స్వతంత్ర వనరుల ద్వారా ధృవీకరించబడ్డాయి.",
    Hindi: "अपोलो चंद्र लैंडिंग (1969-1972) कई स्वतंत्र स्रोतों द्वारा सत्यापित हैं, जिनमें चट्टान के नमूने, सतह पर छोड़े गए रेट्रोरिफ्लेक्टर और तृतीय-पक्ष ट्रैकिंग शामिल हैं।",
    Tamil: "அப்பல்லோ நிலவு தரையிறக்கங்கள் (1969-1972) பாறை மாதிரிகள், மேற்பரப்பில் விடப்பட்ட ரெட்ரோரிஃப்ளெக்டர்கள் மற்றும் மூன்றாம் தரப்பு கண்காணிப்பு உட்பட பல சுயாதீன ஆதாரங்களால் சரிபார்க்கப்பட்டுள்ளன.",
    Bengali: "অ্যাপোলো চন্দ্র অবতরণ (1969-1972) শিলার নমুনা, পৃষ্ঠে রেখে যাওয়া রেট্রোরিফ্লেক্টর এবং তৃতীয় পক্ষের ট্র্যাকিং সহ একাধিক স্বাধীন উৎস দ্বারা যাচাই করা হয়েছে।",
  },
  "Extensive research involving millions of children has found no link between vaccines and autism. The original study making this claim was retracted for fraud.": {
    English: "Extensive research involving millions of children has found no link between vaccines and autism. The original study making this claim was retracted for fraud.",
    Telugu: "లక్షలాది పిల్లలను కలిగి ఉన్న విస్తృత పరిశోధన టీకాలు మరియు ఆటిజం మధ్య ఎటువంటి సంబంధాన్ని కనుగొనలేదు. ఈ వాదన చేసిన అసలు అధ్యయనం మోసం కారణంగా ఉపసంహరించబడింది.",
    Hindi: "लाखों बच्चों को शामिल करने वाले व्यापक शोध में टीकों और ऑटिज़्म के बीच कोई संबंध नहीं पाया गया है। यह दावा करने वाला मूल अध्ययन धोखाधड़ी के कारण वापस ले लिया गया था।",
    Tamil: "கோடிக்கணக்கான குழந்தைகளை உள்ளடக்கிய விரிவான ஆராய்ச்சி தடுப்பூசிகளுக்கும் ஆட்டிசத்திற்கும் இடையே எந்த தொடர்பையும் கண்டறியவில்லை. இந்த கூற்றை முன்வைத்த அசல் ஆய்வு மோசடிக்காக திரும்பப் பெறப்பட்டது.",
    Bengali: "লক্ষ লক্ষ শিশুকে জড়িত ব্যাপক গবেষণায় টিকা এবং অটিজমের মধ্যে কোনো যোগসূত্র পাওয়া যায়নি। এই দাবি করা মূল গবেষণাটি জালিয়াতির জন্য প্রত্যাহার করা হয়েছিল।",
  },
  "COVID-19 is caused by the SARS-CoV-2 virus. 5G is a radio wave technology that cannot create or spread viruses.": {
    English: "COVID-19 is caused by the SARS-CoV-2 virus. 5G is a radio wave technology that cannot create or spread viruses.",
    Telugu: "COVID-19 SARS-CoV-2 వైరస్ వల్ల సంభవిస్తుంది. 5G అనేది వైరస్‌లను సృష్టించలేని లేదా వ్యాప్తి చేయలేని రేడియో వేవ్ టెక్నాలజీ.",
    Hindi: "COVID-19 SARS-CoV-2 वायरस के कारण होता है। 5G एक रेडियो तरंग तकनीक है जो वायरस बना या फैला नहीं सकती।",
    Tamil: "COVID-19 SARS-CoV-2 வைரஸால் ஏற்படுகிறது. 5G என்பது வைரஸ்களை உருவாக்க அல்லது பரப்ப இயலாத ரேடியோ அலை தொழில்நுட்பம்.",
    Bengali: "COVID-19 SARS-CoV-2 ভাইরাস দ্বারা সৃষ্ট। 5G একটি রেডিও তরঙ্গ প্রযুক্তি যা ভাইরাস তৈরি বা ছড়াতে পারে না।",
  },
  "Earth and other planets revolve around the Sun, as established by heliocentric models confirmed by Copernicus, Galileo, and Kepler.": {
    English: "Earth and other planets revolve around the Sun, as established by heliocentric models confirmed by Copernicus, Galileo, and Kepler.",
    Telugu: "భూమి మరియు ఇతర గ్రహాలు సూర్యుని చుట్టూ తిరుగుతాయి, కోపర్నికస్, గెలీలియో మరియు కెప్లర్ ద్వారా నిర్ధారించబడిన సూర్యకేంద్ర నమూనాల ద్వారా స్థాపించబడింది.",
    Hindi: "पृथ्वी और अन्य ग्रह सूर्य के चारों ओर घूमते हैं, जैसा कि कोपरनिकस, गैलीलियो और केप्लर द्वारा पुष्टि किए गए सूर्यकेंद्रित मॉडल द्वारा स्थापित किया गया है।",
    Tamil: "கோப்பர்நிக்கஸ், கலிலியோ மற்றும் கெப்லர் ஆகியோரால் உறுதிப்படுத்தப்பட்ட சூரிய மையக் கோட்பாடுகளின்படி பூமியும் பிற கிரகங்களும் சூரியனைச் சுற்றி வருகின்றன.",
    Bengali: "পৃথিবী এবং অন্যান্য গ্রহ সূর্যের চারপাশে ঘোরে, যেমনটি কোপার্নিকাস, গ্যালিলিও এবং কেপলার দ্বারা নিশ্চিত সূর্যকেন্দ্রিক মডেল দ্বারা প্রতিষ্ঠিত।",
  },
  "Bananas contain potassium-40, a naturally occurring radioactive isotope, but the amount is far too small to pose any health risk.": {
    English: "Bananas contain potassium-40, a naturally occurring radioactive isotope, but the amount is far too small to pose any health risk.",
    Telugu: "అరటిపండ్లలో పొటాషియం-40 అనే సహజంగా సంభవించే రేడియోధార్మిక ఐసోటోప్ ఉంటుంది, కానీ దాని పరిమాణం ఆరోగ్య ప్రమాదాన్ని కలిగించేంత తక్కువగా ఉంటుంది.",
    Hindi: "केले में पोटेशियम-40 होता है, जो एक प्राकृतिक रूप से पाया जाने वाला रेडियोधर्मी आइसोटोप है, लेकिन इसकी मात्रा किसी भी स्वास्थ्य जोखिम के लिए बहुत कम है।",
    Tamil: "வாழைப்பழங்களில் இயற்கையாக ஏற்படும் கதிரியக்க ஐசோடோப்பான பொட்டாசியம்-40 உள்ளது, ஆனால் அதன் அளவு எந்த ஆரோக்கிய அபாயத்தையும் ஏற்படுத்தாத அளவு மிகக் குறைவு.",
    Bengali: "কলায় পটাসিয়াম-40 থাকে, একটি প্রাকৃতিকভাবে ঘটিত তেজস্ক্রিয় আইসোটোপ, কিন্তু এর পরিমাণ কোনো স্বাস্থ্য ঝুঁকি তৈরি করার জন্য অনেক কম।",
  },
  "Goldfish have been shown to have memories lasting months, not seconds, in multiple scientific studies.": {
    English: "Goldfish have been shown to have memories lasting months, not seconds, in multiple scientific studies.",
    Telugu: "బంగారు చేపలు సెకన్లు కాదు, నెలల పాటు జ్ఞాపకాలను కలిగి ఉంటాయని బహుళ శాస్త్రీయ అధ్యయనాలు చూపించాయి.",
    Hindi: "कई वैज्ञानिक अध्ययनों में दिखाया गया है कि सुनहरी मछली की याददाश्त सेकंडों नहीं, बल्कि महीनों तक रहती है।",
    Tamil: "தங்க மீன்களுக்கு வினாடிகள் அல்ல, மாதங்கள் நீடிக்கும் நினைவாற்றல் இருப்பதாக பல அறிவியல் ஆய்வுகளில் நிரூபிக்கப்பட்டுள்ளது.",
    Bengali: "একাধিক বৈজ্ঞানিক গবেষণায় দেখানো হয়েছে যে গোল্ডফিশের স্মৃতি সেকেন্ড নয়, মাস পর্যন্ত স্থায়ী হয়।",
  },
  "The Eiffel Tower can grow up to 15 cm taller during summer due to thermal expansion of the iron.": {
    English: "The Eiffel Tower can grow up to 15 cm taller during summer due to thermal expansion of the iron.",
    Telugu: "ఇనుము యొక్క ఉష్ణ విస్తరణ కారణంగా ఐఫిల్ టవర్ వేసవిలో 15 సెం.మీ. వరకు ఎత్తుగా పెరగవచ్చు.",
    Hindi: "लोहे के तापीय विस्तार के कारण एफिल टॉवर गर्मियों में 15 सेमी तक लंबा हो सकता है।",
    Tamil: "இரும்பின் வெப்ப விரிவாக்கம் காரணமாக கோடையில் ஈஃபிள் கோபுரம் 15 செ.மீ. வரை உயரமாக வளரக்கூடும்.",
    Bengali: "লোহার তাপীয় প্রসারণের কারণে গ্রীষ্মে আইফেল টাওয়ার 15 সেমি পর্যন্ত লম্বা হতে পারে।",
  },
  "Octopuses have three hearts: two branchial hearts pump blood to the gills, and one systemic heart pumps it to the rest of the body.": {
    English: "Octopuses have three hearts: two branchial hearts pump blood to the gills, and one systemic heart pumps it to the rest of the body.",
    Telugu: "ఆక్టోపస్‌లకు మూడు హృదయాలు ఉన్నాయి: రెండు శాఖీయ హృదయాలు మొప్పలకు రక్తాన్ని పంప్ చేస్తాయి, మరియు ఒక దైహిక హృదయం దానిని శరీరంలోని మిగిలిన భాగాలకు పంప్ చేస్తుంది.",
    Hindi: "ऑक्टोपस के तीन दिल होते हैं: दो शाखीय दिल गलफड़ों में रक्त पंप करते हैं, और एक प्रणालीगत दिल इसे शरीर के बाकी हिस्सों में पंप करता है।",
    Tamil: "ஆக்டோபஸ்களுக்கு மூன்று இதயங்கள் உள்ளன: இரண்டு செவுள் இதயங்கள் செவுள்களுக்கு இரத்தத்தை செலுத்துகின்றன, மற்றும் ஒரு முறையான இதயம் உடலின் மற்ற பகுதிகளுக்கு செலுத்துகிறது.",
    Bengali: "অক্টোপাসের তিনটি হৃদয় আছে: দুটি ফুলকা হৃদয় ফুলকায় রক্ত পাম্প করে, এবং একটি সিস্টেমিক হৃদয় শরীরের বাকি অংশে পাম্প করে।",
  },
  "Honey's low moisture content and acidic pH create an inhospitable environment for bacteria, allowing it to last indefinitely if sealed properly.": {
    English: "Honey's low moisture content and acidic pH create an inhospitable environment for bacteria, allowing it to last indefinitely if sealed properly.",
    Telugu: "తేనె యొక్క తక్కువ తేమ మరియు ఆమ్ల pH బ్యాక్టీరియాకు ప్రతికూల వాతావరణాన్ని సృష్టిస్తాయి, సరిగ్గా మూసివేస్తే అది అనిశ్చిత కాలం పాటు ఉంటుంది.",
    Hindi: "शहद की कम नमी और अम्लीय pH बैक्टीरिया के लिए प्रतिकूल वातावरण बनाते हैं, जिससे यह ठीक से सील करने पर अनिश्चित काल तक टिक सकता है।",
    Tamil: "தேனின் குறைந்த ஈரப்பதம் மற்றும் அமில pH பாக்டீரியாவுக்கு பொருத்தமற்ற சூழலை உருவாக்குகிறது, சரியாக மூடி வைத்தால் காலவரையின்றி நீடிக்கும்.",
    Bengali: "মধুর কম আর্দ্রতা এবং অম্লীয় pH ব্যাকটেরিয়ার জন্য প্রতিকূল পরিবেশ তৈরি করে, সঠিকভাবে সিল করা হলে এটি অনির্দিষ্টকাল স্থায়ী হতে পারে।",
  },
  // Generic explanations
  "Cross-referencing multiple reliable sources confirms this claim is accurate.": {
    English: "Cross-referencing multiple reliable sources confirms this claim is accurate.",
    Telugu: "బహుళ విశ్వసనీయ వనరులను క్రాస్-రెఫరెన్సింగ్ చేయడం ఈ వాదన ఖచ్చితమైనదని నిర్ధారిస్తుంది.",
    Hindi: "कई विश्वसनीय स्रोतों की क्रॉस-रेफरेंसिंग इस दावे की सटीकता की पुष्टि करती है।",
    Tamil: "பல நம்பகமான ஆதாரங்களை குறுக்கு-குறிப்பு செய்வது இந்த கூற்று துல்லியமானது என்பதை உறுதிப்படுத்துகிறது.",
    Bengali: "একাধিক নির্ভরযোগ্য উৎসের ক্রস-রেফারেন্সিং এই দাবিটি সঠিক বলে নিশ্চিত করে।",
  },
  "Available evidence from verified databases supports this statement.": {
    English: "Available evidence from verified databases supports this statement.",
    Telugu: "ధృవీకరించబడిన డేటాబేస్‌ల నుండి అందుబాటులో ఉన్న ఆధారాలు ఈ ప్రకటనకు మద్దతు ఇస్తాయి.",
    Hindi: "सत्यापित डेटाबेस से उपलब्ध साक्ष्य इस कथन का समर्थन करते हैं।",
    Tamil: "சரிபார்க்கப்பட்ட தரவுத்தளங்களிலிருந்து கிடைக்கும் ஆதாரங்கள் இந்த அறிக்கையை ஆதரிக்கின்றன.",
    Bengali: "যাচাইকৃত ডাটাবেস থেকে উপলব্ধ প্রমাণ এই বিবৃতিকে সমর্থন করে।",
  },
  "This claim contradicts well-established evidence from peer-reviewed sources.": {
    English: "This claim contradicts well-established evidence from peer-reviewed sources.",
    Telugu: "ఈ వాదన పీర్-రివ్యూడ్ వనరుల నుండి బాగా స్థాపించబడిన ఆధారాలకు విరుద్ధం.",
    Hindi: "यह दावा सहकर्मी-समीक्षित स्रोतों से अच्छी तरह से स्थापित साक्ष्यों का विरोध करता है।",
    Tamil: "இந்த கூற்று சக-மதிப்பாய்வு ஆதாரங்களிலிருந்து நன்கு நிரூபிக்கப்பட்ட ஆதாரங்களுக்கு முரணானது.",
    Bengali: "এই দাবি পিয়ার-রিভিউড উৎস থেকে সুপ্রতিষ্ঠিত প্রমাণের সাথে বিরোধ করে।",
  },
  "Fact-checking databases have debunked this claim multiple times.": {
    English: "Fact-checking databases have debunked this claim multiple times.",
    Telugu: "ఫ్యాక్ట్-చెకింగ్ డేటాబేస్‌లు ఈ వాదనను అనేక సార్లు ఖండించాయి.",
    Hindi: "फैक्ट-चेकिंग डेटाबेस ने इस दावे को कई बार खारिज किया है।",
    Tamil: "உண்மை-சோதனை தரவுத்தளங்கள் இந்த கூற்றை பல முறை மறுத்துள்ளன.",
    Bengali: "ফ্যাক্ট-চেকিং ডাটাবেস এই দাবিটি একাধিকবার খণ্ডন করেছে।",
  },
  "Insufficient evidence is available to confirm or deny this claim at this time.": {
    English: "Insufficient evidence is available to confirm or deny this claim at this time.",
    Telugu: "ఈ సమయంలో ఈ వాదనను నిర్ధారించడానికి లేదా తిరస్కరించడానికి తగినంత ఆధారాలు అందుబాటులో లేవు.",
    Hindi: "इस समय इस दावे की पुष्टि या खंडन करने के लिए अपर्याप्त साक्ष्य उपलब्ध हैं।",
    Tamil: "இந்த நேரத்தில் இந்த கூற்றை உறுதிப்படுத்த அல்லது மறுக்க போதிய ஆதாரங்கள் கிடைக்கவில்லை.",
    Bengali: "এই সময়ে এই দাবি নিশ্চিত বা অস্বীকার করার জন্য অপর্যাপ্ত প্রমাণ পাওয়া যায়।",
  },
  "This claim contains subjective elements that cannot be objectively verified.": {
    English: "This claim contains subjective elements that cannot be objectively verified.",
    Telugu: "ఈ వాదనలో నిష్పాక్షికంగా ధృవీకరించలేని ఆత్మాశ్రయ అంశాలు ఉన్నాయి.",
    Hindi: "इस दावे में व्यक्तिपरक तत्व हैं जिन्हें वस्तुनिष्ठ रूप से सत्यापित नहीं किया जा सकता।",
    Tamil: "இந்த கூற்றில் புறநிலையாக சரிபார்க்க இயலாத அகநிலை கூறுகள் உள்ளன.",
    Bengali: "এই দাবিতে বিষয়গত উপাদান রয়েছে যা বস্তুনিষ্ঠভাবে যাচাই করা যায় না।",
  },
};

export function getVerdictLabel(verdict: string, lang: SupportedLanguage): string {
  return verdictLabels[verdict]?.[lang] ?? verdictLabels[verdict]?.English ?? verdict;
}

export function translateExplanation(explanation: string, lang: SupportedLanguage): string {
  if (lang === "English") return explanation;
  return explanationTranslations[explanation]?.[lang] ?? explanation;
}
