// Translation data
const translations = {
  en: {
    site_title: "Bhargavi Dairy & Veggie Farm",
    site_name: "Bhargavi Farm",
    search_placeholder: "Search for dairy or vegetables...",
    account: "Account",
    help_desk: "Help Desk",
    cart: "Cart",
    login_title: "Login to Your Account",
    email_label: "Email",
    password_label: "Password",
    sign_in: "Sign In",
    cancel: "Cancel",
    login_error: "Invalid email or password.",
    referral_title: "Refer a Friend",
    referral_description:
      "Share your unique referral code with friends and get rewards!",
    copy: "Copy",
    referral_note: "Your friends can use this code at checkout for a discount.",
    welcome_title: "Welcome to Bhargavi Dairy & Veggie Farm",
    welcome_description:
      "Fresh Dairy and Vegetables Delivered to Your Doorstep!",
    product_fresh_cow_milk: "Fresh Cow Milk",
    price_fresh_cow_milk: "₹2.99 / liter",
    product_homemade_butter: "Homemade Butter",
    price_homemade_butter: "₹4.50 / 200g",
    product_organic_tomatoes: "Organic Tomatoes",
    price_organic_tomatoes: "₹1.99 / kg",
    product_fresh_spinach: "Fresh Spinach",
    price_fresh_spinach: "₹0.99 / bunch",
    product_cheddar_cheese: "Cheddar Cheese",
    price_cheddar_cheese: "₹5.99 / 250g",
    product_organic_carrots: "Organic Carrots",
    price_organic_carrots: "₹1.49 / kg",
    product_fresh_milk: "Fresh Milk",
    price_fresh_milk: "₹2.50 / liter",
    product_natural_curd: "Natural Curd",
    price_natural_curd: "₹1.00 / 500g",
    product_spring_onions: "Spring Onions",
    price_spring_onions: "₹1.99 / kg",
    product_organic_potatoes: "Organic Potatoes",
    price_organic_potatoes: "₹0.89 / kg",
    product_red_onions: "Red Onions",
    price_red_onions: "₹1.29 / kg",
    product_green_cucumbers: "Green Cucumbers",
    price_green_cucumbers: "₹0.79 / piece",
    product_fresh_cucumbers: "Fresh Cucumbers",
    price_fresh_cucumbers: "₹0.79 / piece",
    product_apples: "Apples",
    price_apples: "₹2.99 / kg",
    product_sweet_mangoes: "Sweet Mangoes",
    price_sweet_mangoes: "₹3.49 / kg",
    product_ripe_bananas: "Ripe Bananas",
    price_ripe_bananas: "₹0.59 / dozen",
    product_juicy_grapes: "Juicy Grapes",
    price_juicy_grapes: "₹2.79 / kg",
    product_grapes: "Grapes",
    price_grapes: "₹2.79 / kg",
    add_to_cart: "Add to Cart",
    about_us: "About Us",
    contact: "Contact",
    terms_conditions: "Terms & Conditions",
    privacy_policy: "Privacy Policy",
    footer_copyright:
      "© 2025 Bhargavi Dairy & Veggie Farm. All rights reserved.",
    chat_title: "Bhargavi Farm Support",
    chat_placeholder: "Type your question...",
    chat_hi: "Hello! Welcome to Bhargavi Farm Support. How can I help you?",
    chat_delivery:
      "We deliver fresh dairy and veggies within 24 hours. Enter your pincode at checkout to confirm availability.",
    chat_products:
      "We offer fresh milk, butter, cheese, and organic vegetables. Check our homepage for the full list!",
    chat_default:
      "Sorry, I didn't understand. Try asking about delivery, products, or contact us!",
    logged_in: "Logged in successfully!",
    logged_out: "Logged out successfully!",
    referral_copied: "Referral code copied to clipboard!",
    cart_added: "{name} added to cart!",
  },
  te: {
    site_title: "భార్గవి డైరీ & వెజ్జీ ఫామ్",
    site_name: "భార్గవి ఫామ్",
    search_placeholder: "డైరీ లేదా కూరగాయల కోసం వెతకండి...",
    account: "ఖాతా",
    help_desk: "సహాయ డెస్క్",
    cart: "కార్ట్",
    login_title: "మీ ఖాతాకు లాగిన్ అవ్వండి",
    email_label: "ఇమెయిల్",
    password_label: "పాస్వర్డ్",
    sign_in: "సైన్ ఇన్",
    cancel: "రద్దు",
    login_error: "చెల్లని ఇమెయిల్ లేదా పాస్వర్డ్.",
    referral_title: "స్నేహితుడిని సిఫారసు చేయండి",
    referral_description:
      "మీ ప్రత్యేక సిఫారసు కోడ్‌ను స్నేహితులతో పంచుకోండి మరియు రివార్డులు పొందండి!",
    copy: "కాపీ",
    referral_note: "మీ స్నేహితులు చెక్అవుట్ సమయంలో ఈ కోడ్‌ను ఉపయోగించవచ్చు.",
    welcome_title: "భార్గవి డైరీ & వెజ్జీ ఫామ్‌కు స్వాగతం",
    welcome_description: "తాజా డైరీ మరియు కూరగాయలు మీ ఇంటి వద్దకు డెలివరీ!",
    product_fresh_cow_milk: "తాజా ఆవు పాలు",
    price_fresh_cow_milk: "₹2.99 / లీటర్",
    product_homemade_butter: "ఇంట్లో తయారు చేసిన వెన్న",
    price_homemade_butter: "₹4.50 / 200గ్రా",
    product_organic_tomatoes: "సేంద్రీయ టమోటాలు",
    price_organic_tomatoes: "₹1.99 / కిలో",
    product_fresh_spinach: "తాజా స్పినాచ్",
    price_fresh_spinach: "₹0.99 / కట్ట",
    product_cheddar_cheese: "చెడ్డార్ చీజ్",
    price_cheddar_cheese: "₹5.99 / 250గ్రా",
    product_organic_carrots: "సేంద్రీయ క్యారెట్లు",
    price_organic_carrots: "₹1.49 / కిలో",
    product_fresh_milk: "తాజా పాలు",
    price_fresh_milk: "₹2.50 / లీటర్",
    product_natural_curd: "సహజ పెరుగు",
    price_natural_curd: "₹1.00 / 500గ్రా",
    product_spring_onions: "స్ప్రింగ్ ఉల్లిపాయలు",
    price_spring_onions: "₹1.99 / కిలో",
    product_organic_potatoes: "సేంద్రీయ బంగాళదుంపలు",
    price_organic_potatoes: "₹0.89 / కిలో",
    product_red_onions: "ఎరుపు ఉల్లిపాయలు",
    price_red_onions: "₹1.29 / కిలో",
    product_green_cucumbers: "పచ్చి దోసకాయలు",
    price_green_cucumbers: "₹0.79 / ముక్క",
    product_fresh_cucumbers: "తాజా దోసకాయలు",
    price_fresh_cucumbers: "₹0.79 / ముక్క",
    product_apples: "ఆపిల్స్",
    price_apples: "₹2.99 / కిలో",
    product_sweet_mangoes: "తీపి మామిడిపళ్లు",
    price_sweet_mangoes: "₹3.49 / కిలో",
    product_ripe_bananas: "పండిన అరటిపళ్లు",
    price_ripe_bananas: "₹0.59 / డజను",
    product_juicy_grapes: "రసమైన ద్రాక్షలు",
    price_juicy_grapes: "₹2.79 / కిలో",
    product_grapes: "ద్రాక్షలు",
    price_grapes: "₹2.79 / కిలో",
    add_to_cart: "కార్ట్‌కు జోడించు",
    about_us: "మా గురించి",
    contact: "సంప్రదించండి",
    terms_conditions: "నిబంధనలు & షరతులు",
    privacy_policy: "గోప్యతా విధానం",
    footer_copyright:
      "© 2025 భార్గవి డైరీ & వెజ్జీ ఫామ్. అన్ని హక్కులు రిజర్వ్ చేయబడ్డాయి.",
    chat_title: "భార్గవి ఫామ్ సపోర్ట్",
    chat_placeholder: "మీ ప్రశ్నను టైప్ చేయండి...",
    chat_hi:
      "హాయ్! భార్గవి ఫామ్ సపోర్ట్‌కు స్వాగతం. నీకు నేను ఎలా సహాయం చేయగలను?",
    chat_delivery:
      "మేము 24 గంటల్లో తాజా డైరీ మరియు కూరగాయలను డెలివరీ చేస్తాము. అందుబాటులో ఉందో లేదో తెలుసుకోవడానికి చెక్అవుట్‌లో మీ పిన్‌కోడ్‌ను ఎంటర్ చేయండి.",
    chat_products:
      "మేము తాజా పాలు, వెన్న, చీజ్ మరియు సేంద్రీయ కూరగాయలను అందిస్తాము. పూర్తి జాబితా కోసం మా హోమ్‌పేజీని చూడండి!",
    chat_default:
      "క్షమించండి, నీవు అడిగినది నాకు అర్థం కాలేదు. డెలివరీ, ఉత్పత్తుల గురించి లేదా మమ్మల్ని సంప్రదించడం గురించి అడగడానికి ప్రయత్నించు!",
    logged_in: "విజయవంతంగా లాగిన్ అయ్యారు!",
    logged_out: "విజయవంతంగా లాగౌట్ అయ్యారు!",
    referral_copied: "సిఫారసు కోడ్ క్లిప్‌బోర్డ్‌కు కాపీ చేయబడింది!",
    cart_added: "{name} కార్ట్‌కు జోడించబడింది!",
  },
  hi: {
    site_title: "भार्गवी डेयरी और वेजी फार्म",
    site_name: "भार्गवी फार्म",
    search_placeholder: "डेयरी या सब्जियों के लिए खोजें...",
    account: "खाता",
    help_desk: "सहायता डेस्क",
    cart: "कार्ट",
    login_title: "अपने खाते में लॉगिन करें",
    email_label: "ईमेल",
    password_label: "पासवर्ड",
    sign_in: "साइन इन",
    cancel: "रद्द करें",
    login_error: "अमान्य ईमेल या पासवर्ड।",
    referral_title: "मित्र को रेफर करें",
    referral_description:
      "अपना अनूठा रेफरल कोड दोस्तों के साथ साझा करें और पुरस्कार प्राप्त करें!",
    copy: "कॉपी",
    referral_note:
      "आपके मित्र चेकआउट के समय इस कोड का उपयोग डिस्काउंट के लिए कर सकते हैं।",
    welcome_title: "भार्गवी डेयरी और वेजी फार्म में आपका स्वागत है",
    welcome_description:
      "ताजा डेयरी और सब्जियां आपके दरवाजे तक पहुंचाई जाती हैं!",
    product_fresh_cow_milk: "ताजा गाय का दूध",
    price_fresh_cow_milk: "₹2.99 / लीटर",
    product_homemade_butter: "घर का बना मक्खन",
    price_homemade_butter: "₹4.50 / 200ग्राम",
    product_organic_tomatoes: "जैविक टमाटर",
    price_organic_tomatoes: "₹1.99 / किलो",
    product_fresh_spinach: "ताजा पालक",
    price_fresh_spinach: "₹0.99 / गुच्छा",
    product_cheddar_cheese: "चेडर चीज़",
    price_cheddar_cheese: "₹5.99 / 250ग्राम",
    product_organic_carrots: "जैविक गाजर",
    price_organic_carrots: "₹1.49 / किलो",
    product_fresh_milk: "ताजा दूध",
    price_fresh_milk: "₹2.50 / लीटर",
    product_natural_curd: "प्राकृतिक दही",
    price_natural_curd: "₹1.00 / 500ग्राम",
    product_spring_onions: "हरे प्याज",
    price_spring_onions: "₹1.99 / किलो",
    product_organic_potatoes: "जैविक आलू",
    price_organic_potatoes: "₹0.89 / किलो",
    product_red_onions: "लाल प्याज",
    price_red_onions: "₹1.29 / किलो",
    product_green_cucumbers: "हरे खीरे",
    price_green_cucumbers: "₹0.79 / टुकड़ा",
    product_fresh_cucumbers: "ताजा खीरे",
    price_fresh_cucumbers: "₹0.79 / टुकड़ा",
    product_apples: "सेब",
    price_apples: "₹2.99 / किलो",
    product_sweet_mangoes: "मीठे आम",
    price_sweet_mangoes: "₹3.49 / किलो",
    product_ripe_bananas: "पके केले",
    price_ripe_bananas: "₹0.59 / दर्जन",
    product_juicy_grapes: "रसीले अंगूर",
    price_juicy_grapes: "₹2.79 / किलो",
    product_grapes: "अंगूर",
    price_grapes: "₹2.79 / किलो",
    add_to_cart: "कार्ट में जोड़ें",
    about_us: "हमारे बारे में",
    contact: "संपर्क करें",
    terms_conditions: "नियम और शर्तें",
    privacy_policy: "गोपनीयता नीति",
    footer_copyright:
      "© 2025 भार्गवी डेयरी और वेजी फार्म। सर्वाधिकार सुरक्षित।",
    chat_title: "भार्गवी फार्म समर्थन",
    chat_placeholder: "अपना प्रश्न टाइप करें...",
    chat_hi:
      "नमस्ते! भार्गवी फार्म समर्थन में आपका स्वागत है। मैं आपकी कैसे मदद कर सकता हूँ?",
    chat_delivery:
      "हम 24 घंटे के भीतर ताजा डेयरी और सब्जियां डिलीवर करते हैं। उपलब्धता की पुष्टि के लिए चेकआउट पर अपना पिनकोड दर्ज करें।",
    chat_products:
      "हम ताजा दूध, मक्खन, चीज़ और जैविक सब्जियां प्रदान करते हैं। पूरी सूची के लिए हमारा होमपेज देखें!",
    chat_default:
      "क्षमा करें, मुझे आपका प्रश्न समझ नहीं आया। डिलीवरी, उत्पादों, या हमसे संपर्क करने के बारे में पूछने का प्रयास करें!",
    logged_in: "सफलतापूर्वक लॉगिन किया गया!",
    logged_out: "सफलतापूर्वक लॉगआउट किया गया!",
    referral_copied: "रेफरल कोड क्लिपबोर्ड पर कॉपी किया गया!",
    cart_added: "{name} कार्ट में जोड़ा गया!",
  },
};

// Translation function
function translatePage(lang) {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.getAttribute("data-i18n-placeholder");
    if (translations[lang][key]) {
      element.placeholder = translations[lang][key];
    }
  });
  document.title = translations[lang].site_title;
  localStorage.setItem("language", lang);
  // Update product data-name attributes for cart
  document.querySelectorAll(".add-to-cart-btn").forEach((button) => {
    const id = button.getAttribute("data-id");
    const productKey = `product_${button
      .getAttribute("data-name")
      .toLowerCase()
      .replace(/ /g, "_")}`;
    if (translations[lang][productKey]) {
      button.setAttribute("data-name", translations[lang][productKey]);
    }
  });
}

// Initialize language
const savedLang = localStorage.getItem("language") || "en";
document.addEventListener("DOMContentLoaded", () => {
  translatePage(savedLang);
  document.getElementById("language-select").value = savedLang;
});

// Language change event
document.getElementById("language-select")?.addEventListener("change", (e) => {
  translatePage(e.target.value);
});

