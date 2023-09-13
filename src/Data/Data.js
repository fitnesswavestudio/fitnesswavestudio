//This file to be change by admin.
//Only data needs to be changes, avoid changing objects

//About Data

export const aboutData = {
  headingText: {
    primary: "Unleash Your Best Self with Us!!",
    secondary: "About Fitness Wave Studio",
    paragraphText:
      "At Fitness Wave Studio, we take pride in offering an unparalleled online fitness experience that caters to individuals of all fitness levels. Our wide array of classes, ranging from yoga and strength training to Zumba, Pilates, and meditation, ensures that there's something for everyone on their journey to improved health and wellness."
  },
  videoUrl: "https://www.youtube.com/shorts/rZFBv4GThLw",
};

//Footer Data

export const footerData = {
  logo: {
    text: "Fitness Wave Studio",
    tagline: "Sweat, Smile, Repeat: Your Fitness Journey Starts Here!",
  },
  getintouch: {
    text: "Get In Touch",
    address: [
      //Dont Change icon
      { icon: "home-outline", text: "Connaught Place, New Delhi" },
      { icon: "mail-outline", text: "contact@fitnesswavestudio.com" },
      { icon: "call-outline", text: "+91 78937-51525" }
    ],
  },
  quicklinks: {
    text: "Quick Links",
    links: [
      { text: "About Company", src: "https://www.fitnesswavestudio.com/about" },
      { text: "Blogs", src: "https://www.fitnesswavestudio.com/about" },
      { text: "Refund Policy", src: "https://www.fitnesswavestudio.com/about" },
      { text: "Contact Us", src: "https://www.fitnesswavestudio.com/about" },
    ],
  },
  location: {
    text: "Location",
    src: "https://www.google.com/maps/place/Connaught+Place,+New+Delhi,+Delhi+110001/@28.6289016,77.2049872,15z/data=!3m1!4b1!4m6!3m5!1s0x390cfd37b741d057:0xcdee88e47393c3f1!8m2!3d28.6304203!4d77.2177216!16zL20vMDR4eDB4?entry=ttu",
  },

  socialLinks: [
    //Dont Change icon
    { icon: "logo-instagram", src: "https://www.instagram.com/fitnesswavestudio" },
    { icon: "logo-facebook", src: "https://www.facebook.com/FitnessWaveStudio" },
    { icon: "logo-youtube", src: "https://www.youtube.com/@fitnesswavestudio" },
  ],
};

//Contact Data

export const contactData = {
  logo: {
    src: "https://askproject.net/savasa/wp-content/uploads/sites/19/2021/08/yoga-meditation-5AC4LR8.jpg",
    alt: "Contact Us Logo",
    className: "img",
  },

  contactForm: [
    { type: "text", id: "name", labelText: "Full Name" },
    { type: "text", id: "email", labelText: "Email" },
    { type: "text", id: "mobile", labelText: "Mobile" },
    { id: "message", labelText: "Message" },
  ],

  button: {
    contextName: "Send Message",
    styleName: "btn-primary flex-start",
  },
};

// Hero Section Data

export const heroData = {
  heroText: {
    primary: "Your Path to Wellness",
    secondary: "Unleash Your Best Self with Us!!",
    paragraphText:
      "At Fitness Wave Studio, we take pride in offering an unparalleled online fitness experience that caters to individuals of all fitness levels. Our wide array of classes, ranging from yoga and strength training to Zumba, Pilates, and Meditation, ensures that there's something for everyone on their journey to improved health and wellness.",
  },

  heroBtn: {
    contextName: "Get Started →",
    styleName: "btn-primary",
  },
  heroImg: {
    src: "/assets/sakshi_hero.jpeg",
    alt: "Fitnerss Wave Studio hero image",
    className: "hero-img",
  },
};

// FAQs Data
export const faqData = {
  headingText: "Frequently Asked Questions",
  questionAnswer: [
    {
      questionText:
        "How do I join fitness wave studio?",
      answer:
        "To join our online fitness studio, simply fill enrollment form on our website or reachout to us on instagram and sign up for a membership. Once registered, you'll gain access to our classes and resources.",
    },
    {
      questionText:
        "What types of workouts do you offer?",
      answer:
        "We offer a wide range of workouts, including Yoga, HIIT, strength training, dance, Pilates, and more. You can choose from a variety of classes that suit your fitness goals and preferences.",
    },
    {
      questionText:
        "Can beginners join your classes?",
      answer:
        "Absolutely! Our classes are designed to accommodate all fitness levels, from beginners to advanced. Our instructors provide options for different skill levels within each class.",
    },
    {
      questionText:
        "Do you offer a trial class?",
      answer:
        "Yes, we have option for trial class for new members. You need to pay a small amount for a single day trial class which will be reimbursable on buying class subscription",
    },
  ],
};

//Meet Coach Data

export const meetCoachData = {
  trainerInfo: [
    {
      src: "/assets/poorva_cropped.jpeg",
      alt: "Trainer Image",
      trainerType: "Certified Yoga Trainer",
      trainerName: "Poorva",
    },
    {
      src: "/assets/sofie.jpeg",
      alt: "Trainer Image",
      trainerType: "Certified Yoga Trainer",
      trainerName: "Sofia",
    }
  ],
  headingTexts: {
    primary: "Talented Trainers From All Over The World",
    secondary: "OUR TRAINERS",
    paragraphText:
      "Our handpicked trainers hail from around the globe, bringing diverse expertise and a passion for excellence. With a proven track record, they inspire learning, ensuring a dynamic and insightful experience for all participants.",
  },
  buttonText: {
    contextName: "See More →",
    styleName: "btn-primary",
  },
};

//Refund Policy Data

export const refundPolicyData = {
  qna: [
    {
      question:
        "Can I request a refund for my purchase?",
      answer:
        "No, we do not offer refunds for any of our products or services. This includes memberships, classes or digital content.",
    },
    {
      question:
        "What if I'm not satisfied with a product or service I purchased?",
      answer:
        "We strive to provide the best possible experience. If you have concerns or are unsatisfied with your purchase, please contact our customer support team, and we will do our best to assist you.",
    },
    {
      question:
        "Can I get a refund if I accidentally made a duplicate purchase?",
      answer:
        "Unfortunately, we are unable to process refunds for accidental duplicate purchases.",
    },
    {
      question:
        "Do you offer refunds for canceled memberships or unused classes?",
      answer:
        "No, we do not offer refunds for canceled memberships or unused classes. We recommend reviewing our cancellation and membership policies before making a commitment.",
    },
    {
      question:
        "Do you offer refunds for trial classes?",
      answer:
        "Trial classes are non refundable. However we reimburse the amount on purchase of monthly subscription",
    }
  ],
};

// Terms and Condition Data

export const termsAndConditionData = {
  headingData: {
    secondary: "Terms and Conditions",
    tertiary: "Privacy and Policy",
  },
  terms: {
    text: "By accessing or using Fitness Wave Studio (the \"Website\" or \"Service\"), you agree to comply with and be bound by these Terms and Conditions. You must be at least 18 years old to use our Service and are responsible for maintaining the confidentiality of your account credentials. You agree to use the Service for lawful purposes only, and details about payment methods, fees, and our refund policy are outlined. All content on the Website is owned by or licensed to us and is protected by copyright and other intellectual property laws. You are solely responsible for any content you post on the Website, and we reserve the right to remove or modify user-generated content that violates our policies. Reference to your Privacy Policy (include a link). We are not responsible for any damages or losses resulting from your use of the Service, and we reserve the right to terminate or suspend your account and access to the Service at our discretion. These Terms and Conditions are governed by the laws of [Your Jurisdiction], and we may update them at any time. Regarding your Privacy Policy, explain the types of personal and non-personal information you collect, how you use it, data sharing, cookies, data security, user choices, third-party links, children's privacy, changes to the policy, and provide contact information for privacy-related concerns. By using our Service, you acknowledge and agree that Fintess Wave Studio and its affiliates, employees, and partners shall not be held liable for any direct, indirect, incidental, consequential, or special damages, including but not limited to damages for loss of profits, goodwill, data, or other intangible losses, even if we have been advised of the possibility of such damages. You use our Service at your own risk, and we make no warranties or representations regarding its accuracy, reliability, or fitness for a particular purpose.",
  },
};

//Testimonials Data

export const testimonialsData = {
  reviews: [
    {
      src: "/assets/fws_logo.jpeg",
      alt: "Testimonial User Image",
      text: "I have come out of my chronic illness. U have shown me a way to come out of my chronic illness the moment I get back to my full health or at least half of my chronic illness gets cured and I am able to live my life normally",
      author: "- Sailaja Sreedhar",
    },
    {
      src: "/assets/fws_logo.jpeg",
      alt: "Testimonial User Image",
      text: "Really thankful to you for encouraging me and making me do yoga when I lost all hopes on my health. With your classes I now am sure I will recover from my ailments of celiac disease and will again get back to my normal life .best yoga trainer I have met ",
      author: "- Shruti Shukla",
    },
    {
      src: "/assets/fws_logo.jpeg",
      alt: "Testimonial User Image",
      text: "Fitness classes at Fitness Wave Studio have improved my flexibility and brought inner peace. I'm grateful for this transformative experience",
      author: "- Shivani Agrawal",
    },
    {
      src: "/assets/fws_logo.jpeg",
      alt: "Testimonial User Image",
      text: "I really enjoy the sessions. I feel more relaxed and have started feeling more energetic and gained confidence back after loosing 7 KGs of excess weignt. Thanks Sakshi for helping me gain my cofidence back.",
      author: "- Suzana",
    },
    {
      src: "/assets/fws_logo.jpeg",
      alt: "Testimonial User Image",
      text: "Amazing classes. I'm grateful to Poorva for paying good attention to each and every details and guides us better. Thanks for improving my lifestyle",
      author: "- Dhriti Singh",
    },
  ],
  gallery: [
    {
      src: "https://askproject.net/savasa/wp-content/uploads/sites/19/2021/08/yoga-K9QEMRY.jpg",
      alt: "Image 1",
    },
    {
      src: "https://askproject.net/savasa/wp-content/uploads/sites/19/2021/08/woman-practising-yoga-indoors-5EDJ8JT.jpg",
      alt: "Image 2",
    },
    {
      src: "https://askproject.net/savasa/wp-content/uploads/sites/19/2021/08/yoga-meditation-5AC4LR8.jpg",
      alt: "Image 3",
    },
    {
      src: "https://askproject.net/savasa/wp-content/uploads/sites/19/2021/08/yoga-K9QEMRY.jpg",
      alt: "Image 4",
    },
    {
      src: "https://askproject.net/savasa/wp-content/uploads/sites/19/2021/08/woman-practising-yoga-indoors-5EDJ8JT.jpg",
      alt: "Image 5",
    },
    {
      src: "https://askproject.net/savasa/wp-content/uploads/sites/19/2021/08/yoga-meditation-5AC4LR8.jpg",
      alt: "Image 6",
    },
    {
      src: "https://askproject.net/savasa/wp-content/uploads/sites/19/2021/08/yoga-K9QEMRY.jpg",
      alt: "Image 7",
    },
    {
      src: "https://askproject.net/savasa/wp-content/uploads/sites/19/2021/08/woman-practising-yoga-indoors-5EDJ8JT.jpg",
      alt: "Image 8",
    },
    {
      src: "https://askproject.net/savasa/wp-content/uploads/sites/19/2021/08/yoga-meditation-5AC4LR8.jpg",
      alt: "Image 9",
    },
  ],
};

//Why Choose Us
export const whyChooseData = {
  headingText: {
    primary: "Your Partner in Achieving Fitness Excellence!",
    secondary: "why choose us?",
  },
  whyImage: {
    src: "https://askproject.net/savasa/wp-content/uploads/sites/19/2021/08/a-woman-in-her-home-on-a-yoga-mat-in-a-flexible-yo-F7GWNFG.jpeg",
    alt: "Fitness Studio Wave Why Image",
  },

  primaryCard: {
    headingText: "Versatility in Fitness Programs",
    paragraphText:
      "Our online studio covers a comprehensive range of fitness disciplines, allowing our clients to explore various options and find what resonates best with their preferences and goals.",
  },

  secondaryCard: [
    {
      headingText: "Interactive Sessions",
      paragraphText:
        "Our online classes are designed to be interactive, fostering a sense of community and camaraderie among participants.",
    },
    {
      headingText: "Convenience of Online Classes",
      paragraphText:
        "Embracing the digital age, we offer online classes that can be accessed from the comfort of your own home or anywhere with an internet connection.",
    },
  ],
};

//Workshop Data

export const workshopData = {
  headingText: {
    primary: "Watch Free Tutorials",
    secondary: "Free Tutorials",
    paragraphText:
      "Stay tuned to our youtube channel for free tutorials and tips for a healthy life.",
  },
  buttonText: {
    contextName: "Join Now",
    styleName: "btn-primary",
  },
  videoUrl: "https://www.youtube.com/shorts/rZFBv4GThLw",
};

//Meditation Data

export const meditationData = {
  heading: {
    text: "meditation Training",
    className: " meditation",
  },
  course: {
    headingData: [
      "Meditation Training gives you etc etc etc",
      "Meditation Training Course",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ],
    videoUrl: "https://www.youtube.com/embed/uHz2ng84hFE",
    benefitsData: [
      "Increased flexibility",
      "Increased muscle meditation and tone",
      "Improved respiration, energy and vitality",
      "Maintaining a balanced metabolism",
      "Weight reduction",
      "Cardio and circulatory health",
      "Improved athletic performance",
      "Protection from injury",
    ],
  },

  trainer: {
    headingData: [
      "Get familier with your trainer in your jorney",
      "Know your Trainer",
      " → Annabelle",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ea odio nostrum officiis tenetur.",
    ],
    socialLinks: { facebook: "#", instagram: "#", twitter: "#" },
    trainerImageData: {
      src: "https://askproject.net/savasa/wp-content/uploads/sites/19/2021/08/woman-practising-yoga-indoors-2S2SDH3-1536x1536.jpg",
      alt: "Trainer Image",
    },
  },
  pricing: {
    pricingCardData: [
      {
        plan: "Easy",
        price: "499.00",
        pricingText: "Lorem ipsum dolor sit amet",
        planBenefit: ["Lorem", "Lorem", "Lorem", "Lorem"],
      },
      {
        plan: "Medium",
        price: "799.00",
        pricingText: "Lorem ipsum dolor sit amet",
        planBenefit: ["Lorem", "Lorem", "Lorem", "Lorem"],
      },
      {
        plan: "Hard",
        price: "999.00",
        pricingText: "Lorem ipsum dolor sit amet",
        planBenefit: ["Lorem", "Lorem", "Lorem", "Lorem"],
      },
    ],
    headingData: [
      "A pricing that you will get nowhere else. Lorem ipsum dolor sit amet",
      "Pricing Plan",
    ],
  },
};

// Nutrition Data
export const nutritionData = {
  heading: {
    text: "nutrition Training",
    className: " nutrition",
  },
  course: {
    headingData: [
      "nutrition training gives you etc etc etc",
      "nutrition Training Course",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ],
    videoUrl: "https://www.youtube.com/embed/uHz2ng84hFE",
    benefitsData: [
      "Increased flexibility",
      "Increased muscle nutrition and tone",
      "Improved respiration, energy and vitality",
      "Maintaining a balanced metabolism",
      "Weight reduction",
      "Cardio and circulatory health",
      "Improved athletic performance",
      "Protection from injury",
    ],
  },

  trainer: {
    headingData: [
      "Get familier with your trainer in your jorney",
      "Know your Trainer",
      " → Annabelle",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ea odio nostrum officiis tenetur.",
    ],
    socialLinks: { facebook: "#", instagram: "#", twitter: "#" },
    trainerImageData: {
      src: "https://askproject.net/savasa/wp-content/uploads/sites/19/2021/08/woman-practising-yoga-indoors-2S2SDH3-1536x1536.jpg",
      alt: "Trainer Image",
    },
  },
  pricing: {
    pricingCardData: [
      {
        plan: "Easy",
        price: "499.00",
        pricingText: "Lorem ipsum dolor sit amet",
        planBenefit: ["Lorem", "Lorem", "Lorem", "Lorem"],
      },
      {
        plan: "Medium",
        price: "799.00",
        pricingText: "Lorem ipsum dolor sit amet",
        planBenefit: ["Lorem", "Lorem", "Lorem", "Lorem"],
      },
      {
        plan: "Hard",
        price: "999.00",
        pricingText: "Lorem ipsum dolor sit amet",
        planBenefit: ["Lorem", "Lorem", "Lorem", "Lorem"],
      },
    ],
    headingData: [
      "A pricing that you will get nowhere else. Lorem ipsum dolor sit amet",
      "Pricing Plan",
    ],
  },
};

// Pilates Data

export const pilatesData = {
  heading: {
    text: "Pilates",
    className: " pilates",
  },
  course: {
    headingData: [
      "Pilates meditation gives you etc etc etc",
      "Pilates Course",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ],
    videoUrl: "https://www.youtube.com/embed/uHz2ng84hFE",
    benefitsData: [
      "Increased flexibility",
      "Increased muscle strength and tone",
      "Improved respiration, energy and vitality",
      "Maintaining a balanced metabolism",
      "Weight reduction",
      "Cardio and circulatory health",
      "Improved athletic performance",
      "Protection from injury",
    ],
  },

  trainer: {
    headingData: [
      "Get familier with your trainer in your jorney",
      "Know your Trainer",
      " → Annabelle",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ea odio nostrum officiis tenetur.",
    ],
    socialLinks: { facebook: "#", instagram: "#", twitter: "#" },
    trainerImageData: {
      src: "https://askproject.net/savasa/wp-content/uploads/sites/19/2021/08/woman-practising-yoga-indoors-2S2SDH3-1536x1536.jpg",
      alt: "Trainer Image",
    },
  },
  pricing: {
    pricingCardData: [
      {
        plan: "Easy",
        price: "499.00",
        pricingText: "Lorem ipsum dolor sit amet",
        planBenefit: ["Lorem", "Lorem", "Lorem", "Lorem"],
      },
      {
        plan: "Medium",
        price: "799.00",
        pricingText: "Lorem ipsum dolor sit amet",
        planBenefit: ["Lorem", "Lorem", "Lorem", "Lorem"],
      },
      {
        plan: "Hard",
        price: "999.00",
        pricingText: "Lorem ipsum dolor sit amet",
        planBenefit: ["Lorem", "Lorem", "Lorem", "Lorem"],
      },
    ],
    headingData: [
      "A pricing that you will get nowhere else. Lorem ipsum dolor sit amet",
      "Pricing Plan",
    ],
  },
};

// Strength Training Data
export const strengthTrainingData = {
  heading: {
    text: "Strength Training",
    className: " strength",
  },
  course: {
    headingData: [
      "Strength training gives you etc etc etc",
      "Strength Training Course",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ],
    videoUrl: "https://www.youtube.com/embed/uHz2ng84hFE",
    benefitsData: [
      "Increased flexibility",
      "Increased muscle strength and tone",
      "Improved respiration, energy and vitality",
      "Maintaining a balanced metabolism",
      "Weight reduction",
      "Cardio and circulatory health",
      "Improved athletic performance",
      "Protection from injury",
    ],
  },

  trainer: {
    headingData: [
      "Get familier with your trainer in your jorney",
      "Know your Trainer",
      " → Annabelle",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ea odio nostrum officiis tenetur.",
    ],
    socialLinks: { facebook: "#", instagram: "#", twitter: "#" },
    trainerImageData: {
      src: "https://askproject.net/savasa/wp-content/uploads/sites/19/2021/08/woman-practising-yoga-indoors-2S2SDH3-1536x1536.jpg",
      alt: "Trainer Image",
    },
  },
  pricing: {
    pricingCardData: [
      {
        plan: "Easy",
        price: "499.00",
        pricingText: "Lorem ipsum dolor sit amet",
        planBenefit: ["Lorem", "Lorem", "Lorem", "Lorem"],
      },
      {
        plan: "Medium",
        price: "799.00",
        pricingText: "Lorem ipsum dolor sit amet",
        planBenefit: ["Lorem", "Lorem", "Lorem", "Lorem"],
      },
      {
        plan: "Hard",
        price: "999.00",
        pricingText: "Lorem ipsum dolor sit amet",
        planBenefit: ["Lorem", "Lorem", "Lorem", "Lorem"],
      },
    ],
    headingData: [
      "A pricing that you will get nowhere else. Lorem ipsum dolor sit amet",
      "Pricing Plan",
    ],
  },
};

//Yoga Data

export const yogaData = {
  heading: {
    text: "Yoga",
    className: " yoga",
  },
  course: {
    headingData: [
      "Yoga meditation gives you etc etc etc",
      "Yoga Course",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ],
    videoUrl: "https://www.youtube.com/embed/uHz2ng84hFE",
    benefitsData: [
      "Increased flexibility",
      "Increased muscle strength and tone",
      "Improved respiration, energy and vitality",
      "Maintaining a balanced metabolism",
      "Weight reduction",
      "Cardio and circulatory health",
      "Improved athletic performance",
      "Protection from injury",
    ],
  },

  trainer: {
    headingData: [
      "Get familier with your trainer in your jorney",
      "Know your Trainer",
      " → Annabelle",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ea odio nostrum officiis tenetur.",
    ],
    socialLinks: { facebook: "#", instagram: "#", twitter: "#" },
    trainerImageData: {
      src: "https://askproject.net/savasa/wp-content/uploads/sites/19/2021/08/woman-practising-yoga-indoors-2S2SDH3-1536x1536.jpg",
      alt: "Trainer Image",
    },
  },
  pricing: {
    pricingCardData: [
      {
        plan: "Easy",
        price: "499.00",
        pricingText: "Lorem ipsum dolor sit amet",
        planBenefit: ["Lorem", "Lorem", "Lorem", "Lorem"],
      },
      {
        plan: "Medium",
        price: "799.00",
        pricingText: "Lorem ipsum dolor sit amet",
        planBenefit: ["Lorem", "Lorem", "Lorem", "Lorem"],
      },
      {
        plan: "Hard",
        price: "999.00",
        pricingText: "Lorem ipsum dolor sit amet",
        planBenefit: ["Lorem", "Lorem", "Lorem", "Lorem"],
      },
    ],
    headingData: [
      "A pricing that you will get nowhere else. Lorem ipsum dolor sit amet",
      "Pricing Plan",
    ],
  },
};

//Zumba Data

export const zumbaData = {
  heading: {
    text: "Zumba Training",
    className: " zumba",
  },
  course: {
    headingData: [
      "Zumba Training gives you etc etc etc",
      "Zumba Training Course",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ],
    videoUrl: "https://www.youtube.com/embed/uHz2ng84hFE",
    benefitsData: [
      "Increased flexibility",
      "Increased muscle strength and tone",
      "Improved respiration, energy and vitality",
      "Maintaining a balanced metabolism",
      "Weight reduction",
      "Cardio and circulatory health",
      "Improved athletic performance",
      "Protection from injury",
    ],
  },

  trainer: {
    headingData: [
      "Get familier with your trainer in your jorney",
      "Know your Trainer",
      " → Annabelle",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ea odio nostrum officiis tenetur.",
    ],
    socialLinks: { facebook: "#", instagram: "#", twitter: "#" },
    trainerImageData: {
      src: "https://askproject.net/savasa/wp-content/uploads/sites/19/2021/08/woman-practising-yoga-indoors-2S2SDH3-1536x1536.jpg",
      alt: "Trainer Image",
    },
  },
  pricing: {
    pricingCardData: [
      {
        plan: "Easy",
        price: "499.00",
        pricingText: "Lorem ipsum dolor sit amet",
        planBenefit: ["Lorem", "Lorem", "Lorem", "Lorem"],
      },
      {
        plan: "Medium",
        price: "799.00",
        pricingText: "Lorem ipsum dolor sit amet",
        planBenefit: ["Lorem", "Lorem", "Lorem", "Lorem"],
      },
      {
        plan: "Hard",
        price: "999.00",
        pricingText: "Lorem ipsum dolor sit amet",
        planBenefit: ["Lorem", "Lorem", "Lorem", "Lorem"],
      },
    ],
    headingData: [
      "A pricing that you will get nowhere else. Lorem ipsum dolor sit amet",
      "Pricing Plan",
    ],
  },
};
