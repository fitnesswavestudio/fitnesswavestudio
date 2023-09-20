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
  videoUrl: "https://www.youtube.com/embed/rZFBv4GThLw",
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
      { text: "Blogs", src: "https://www.fitnesswavestudio.com/blogs" },
      { text: "Refund Policy", src: "https://www.fitnesswavestudio.com/about/#refund" },
      { text: "Contact Us", src: "https://www.fitnesswavestudio.com/#contact" },
    ],
  },
  location: {
    text: "Location",
    src: "https://maps.google.com/maps?width=400&amp;height=200&amp;hl=en&amp;q=%20Connaught%20place%20delhi+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed",
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
    src: "/assets/fws_logo_1x1.png",
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
    styleName: "button-primary flex-start",
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
    styleName: "button-primary",
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
    styleName: "button-primary",
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
      src: "/assets/fws_logo_1x1.png",
      alt: "Testimonial User Image",
      text: "I have come out of my chronic illness. U have shown me a way to come out of my chronic illness the moment I get back to my full health or at least half of my chronic illness gets cured and I am able to live my life normally",
      author: "- Sailaja Sreedhar",
    },
    {
      src: "/assets/fws_logo_1x1.png",
      alt: "Testimonial User Image",
      text: "Really thankful to you for encouraging me and making me do yoga when I lost all hopes on my health. With your classes I now am sure I will recover from my ailments of celiac disease and will again get back to my normal life .best yoga trainer I have met ",
      author: "- Shruti Shukla",
    },
    {
      src: "/assets/fws_logo_1x1.png",
      alt: "Testimonial User Image",
      text: "Fitness classes at Fitness Wave Studio have improved my flexibility and brought inner peace. I'm grateful for this transformative experience",
      author: "- Shivani Agrawal",
    },
    {
      src: "/assets/fws_logo_1x1.png",
      alt: "Testimonial User Image",
      text: "I really enjoy the sessions. I feel more relaxed and have started feeling more energetic and gained confidence back after loosing 7 KGs of excess weignt. Thanks Sakshi for helping me gain my confidence back.",
      author: "- Suzana",
    },
    {
      src: "/assets/fws_logo_1x1.png",
      alt: "Testimonial User Image",
      text: "Amazing classes. I'm grateful to Poorva for paying good attention to each and every details and guides us better. Thanks for improving my lifestyle",
      author: "- Dhriti Singh",
    },
  ],
  gallery: [
    {
      src: "https://scontent-bom1-1.cdninstagram.com/v/t39.30808-6/379567318_17877998759951764_7569808206240215768_n.jpg?stp=dst-jpg_e15&_nc_ht=scontent-bom1-1.cdninstagram.com&_nc_cat=104&_nc_ohc=ip8vf7RY9_EAX9UDiRh&edm=ACWDqb8AAAAA&ccb=7-5&ig_cache_key=MzE5Mzg4NTMyMDgyNzMxODUxOA%3D%3D.2-ccb7-5&oh=00_AfBS8boloySYAoU7qI-7-s-9_6Yh7w2ahWtMyvhiSpqUig&oe=650B0BDA&_nc_sid=ee9879",
      alt: "Image 1",
    },
    {
      src: "https://scontent-bom1-1.cdninstagram.com/v/t39.30808-6/378303361_17877886730951764_4669101904181654269_n.jpg?stp=dst-jpg_e15&_nc_ht=scontent-bom1-1.cdninstagram.com&_nc_cat=104&_nc_ohc=NibK9sTaezwAX-wFgNh&edm=ACWDqb8AAAAA&ccb=7-5&ig_cache_key=MzE5MzMxODc2NDU2MTc2ODE3OQ%3D%3D.2-ccb7-5&oh=00_AfCjpA61O8vQ7-jHEY7PA6bt34M-y4bWioKvxgJIhrpxQw&oe=650AC13F&_nc_sid=ee9879",
      alt: "Image 2",
    },
    {
      src: "https://scontent-bom1-1.cdninstagram.com/v/t39.30808-6/378291472_17877885080951764_8447481118790796258_n.jpg?stp=dst-jpg_e15&_nc_ht=scontent-bom1-1.cdninstagram.com&_nc_cat=104&_nc_ohc=AXohtzfJ5XUAX_ncG8a&edm=ACWDqb8AAAAA&ccb=7-5&ig_cache_key=MzE5MzMxMDczMDA4NzA1NzQwNQ%3D%3D.2-ccb7-5&oh=00_AfBAAMgFXvbEwmY_Pni6bCLxgxnzGDz3ZeG9LNguRSY6kA&oe=650B0A12&_nc_sid=ee9879",
      alt: "Image 3",
    },
    {
      src: "https://scontent-bom1-1.cdninstagram.com/v/t39.30808-6/379251042_17877886691951764_4796119165562774464_n.jpg?stp=dst-jpg_e15&_nc_ht=scontent-bom1-1.cdninstagram.com&_nc_cat=104&_nc_ohc=6NYR0_s-9R4AX8VsCZ0&edm=ACWDqb8AAAAA&ccb=7-5&ig_cache_key=MzE5MzMxODcxOTYwNzE1MTY3MA%3D%3D.2-ccb7-5&oh=00_AfByHYKSM0QZwCjD-JHuMYNqnPg317bE_r9CBy1GwuqzaA&oe=650A62B3&_nc_sid=ee9879",
      alt: "Image 4",
    },
    {
      src: "https://scontent-bom1-1.cdninstagram.com/v/t39.30808-6/378094458_17877878954951764_5359553697492165900_n.jpg?stp=dst-jpg_e15&_nc_ht=scontent-bom1-1.cdninstagram.com&_nc_cat=104&_nc_ohc=CKEwBR6fOaIAX98oZ7M&edm=ACWDqb8AAAAA&ccb=7-5&ig_cache_key=MzE5MzI4NTE5OTIxNjIzMjU3Nw%3D%3D.2-ccb7-5&oh=00_AfAhHKF6s-GKO063Upg6I8EB7KczkwUdgipf7FLJSF1IOg&oe=650A8780&_nc_sid=ee9879",
      alt: "Image 5",
    },
    {
      src: "https://scontent-bom1-1.cdninstagram.com/v/t39.30808-6/378081353_17877885038951764_9068464886072199999_n.jpg?stp=dst-jpg_e15&_nc_ht=scontent-bom1-1.cdninstagram.com&_nc_cat=104&_nc_ohc=eqlHj8i6tTwAX_cc1Y3&edm=ACWDqb8AAAAA&ccb=7-5&ig_cache_key=MzE5MzMxMDQ3MjE2MjcxODAyMw%3D%3D.2-ccb7-5&oh=00_AfBmGpLPmxyOyJnU0itNsPuPR1GHkmUTaI6-QdbZcT8ruw&oe=650ACC68&_nc_sid=ee9879",
      alt: "Image 6",
    },
    {
      src: "https://scontent-bom1-1.cdninstagram.com/v/t39.30808-6/379758255_17877876644951764_2472878048414129484_n.jpg?stp=dst-jpg_e15&_nc_ht=scontent-bom1-1.cdninstagram.com&_nc_cat=104&_nc_ohc=MBwweMFHZCoAX-33kcf&edm=ACWDqb8AAAAA&ccb=7-5&ig_cache_key=MzE5MzI3NzQzNDcxMTMzNTUzOQ%3D%3D.2-ccb7-5&oh=00_AfAcRqAx4vnlgWPbIxmzjYnz5UVc8jqV6Mw4cCLlOtwp6Q&oe=6509FB9B&_nc_sid=ee9879",
      alt: "Image 7",
    },
    {
      src: "https://scontent-bom1-1.cdninstagram.com/v/t39.30808-6/379130923_17877886367951764_3141732820172878357_n.jpg?stp=dst-jpg_e15&_nc_ht=scontent-bom1-1.cdninstagram.com&_nc_cat=104&_nc_ohc=Dv3spu3aQBQAX_jSaxe&edm=ACWDqb8AAAAA&ccb=7-5&ig_cache_key=MzE5MzMxNzg5NTE5MTYxODQ0OA%3D%3D.2-ccb7-5&oh=00_AfBMLuvBO7pNL96hLzIk9bnSQjXWInCjrK32ruyWQQn_-A&oe=650C3A1A&_nc_sid=ee9879",
      alt: "Image 8",
    },
    {
      src: "https://scontent-bom1-1.cdninstagram.com/v/t39.30808-6/379476738_17877886331951764_6113652283143925480_n.jpg?stp=dst-jpg_e15&_nc_ht=scontent-bom1-1.cdninstagram.com&_nc_cat=104&_nc_ohc=EPp74okobJ0AX-StzKU&edm=ACWDqb8AAAAA&ccb=7-5&ig_cache_key=MzE5MzMxNzg5NTIwMDAyNTg4Nw%3D%3D.2-ccb7-5&oh=00_AfCUK_TOa7-v1uPR_FsDtvSJ8yCLaQ_1dWYDcDWoIj1bbA&oe=650D0731&_nc_sid=ee9879",
      alt: "Image 9",
    },
  ],
};
//Why Choose Us
export const whyChooseData = {
  headingText: {
    primary: "Your Partner in Achieving Fitness Excellence!",
    secondary: "why choose us?"
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
        bgColor: "card-dark"
    },
    {
      headingText: "Convenience of Online Classes",
      paragraphText:
        "Embracing the digital age, we offer online classes that can be accessed from the comfort of your own home or anywhere with an internet connection.",
        bgColor:"card-light"
    },
  ],
};

//Workshop Data

export const workshopData = {
  headingText: {
    primary: "Discover What's Next: Our Upcoming Fitness Workshops",
    secondary: "Upcoming workshop",
    paragraphText: "Face Yoga Workshop on 17th September 2023, 9 AM",
  },
  buttonText: {
    contextName: "Join Now",
    styleName: "button-primary",
  },
  videoUrl: "https://www.youtube.com/embed/rZFBv4GThLw",
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
    videoUrl: "https://www.youtube.com/embed/rZFBv4GThLw",
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
      "Talented Trainers From All Over The World",
      "Our Trainer",
      " → Poorva",
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
    videoUrl: "https://www.youtube.com/embed/rZFBv4GThLw",
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
      " → Sofi",
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
    videoUrl: "https://www.youtube.com/embed/rZFBv4GThLw",
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
    videoUrl: "https://www.youtube.com/embed/rZFBv4GThLw",
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
      "Explore Yoga: Path to Inner Harmony",
      "Yoga",
      "We are passionate about guiding individuals of all ages and fitness levels through the transformative journey of yoga. Our experienced instructors believe in the power of yoga to nourish the body, mind, and soul.",
    ],
    videoUrl: "https://www.youtube.com/embed/rZFBv4GThLw",
    benefitsData: [
      "Better hormonal health - reduce symptoms of PMS and menstrual cramps",
      "Better bone health reducing risk of osteoporosis",
      "Confidence and self-esteem",
      "Better weight management and control",
      "Build Power, Flexibility and Overall Body Strength",
      "Improves Breathing & sleeping patterns",
      "Muscle Toning & Core Strengthening",
      "Reduce Anxiety and Stress"
    ],
  },

  trainerComponent: {
    headingData: [
      "Get familier with your trainer in your journey",
      "Know your Trainer",
    ]
  },
  trainers: [
    {
      headingData: [
        " → Yog Sakshi",
        "Introducing Yog Sakshi, our dedicated founder and wellness coach. With a deep understanding of yoga philosophy and a nurturing teaching style, Sakshi creates a harmonious environment for growth and transformation. Her classes blend traditional wisdom with modern practices, encouraging students to find balance, serenity, and strength on and off the mat. Join Sakshi's class for a holistic yoga experience.",
      ],
      trainerImageData: {
        src: "assets/sakshi_hero.jpeg",
        alt: "Sakshi Image",
      },
    },
    {
      headingData: [
        " → Poorva",
        "Meet Poorva, a seasoned yoga instructor with an impressive 7 years of teaching experience. Her passion for yoga and dedication to helping others achieve holistic wellness are evident in her teachings. She possesses a deep understanding of various yoga styles and techniques, allowing her to tailor sessions to individual needs and abilities. Through her guidance, students not only improve their physical strength and flexibility but also find inner peace and balance, making her a beloved and trusted instructor in the yoga community.",
      ],
      trainerImageData: {
        src: "assets/poorva.jpeg",
        alt: "Poorva Image",
      },
    },
    {
      headingData: [
        " → Sofia",
        "Sofia is an accomplished yoga instructor, hailing from Poland. With exceptional skills and dedication to the practice, she stands out in the yoga community. Her teaching reflects the expertise and precision that make her an inspiration to her students.",
      ],
      trainerImageData: {
        src: "assets/sofie.jpeg",
        alt: "Sofie Image",
      },
    }
  ],
  pricing: {
    pricingCardData: [
      {
        plan: "1 Month",
        price: "1199.00",
        pricingText: "Plan for 1 month Regular Classes",
        planBenefit: ["Live Classes"],
      },
      {
        plan: "3 Month",
        price: "2999.00",
        pricingText: "Plan for 3 month Regular Classes",
        planBenefit: ["Live Classes", "Free Diet Plan"],
      },
      {
        plan: "6 Month",
        price: "4999.00",
        pricingText: "Plan for 6 month Regular Classes",
        planBenefit: ["Live Classes", "Free Diet Plan"],
      },
    ],
    headingData: [
      "A pricing that you will get nowhere else",
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
    videoUrl: "https://www.youtube.com/embed/rZFBv4GThLw",
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

//Featured Portfolio
export const featuredPortfolioData = [
  {
    svg: `<svg width="64px" height="64px" viewBox="-102.4 -102.4 1228.80 1228.80" fill="#000000" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M324.8 440c34.4 0 62.4-28 62.4-62.4s-28-62.4-62.4-62.4-62.4 28-62.4 62.4 28 62.4 62.4 62.4z m374.4 0c34.4 0 62.4-28 62.4-62.4s-28-62.4-62.4-62.4-62.4 28-62.4 62.4 28 62.4 62.4 62.4zM340 709.6C384 744 440.8 764.8 512 764.8s128-20.8 172-55.2c26.4-21.6 42.4-42.4 50.4-58.4 6.4-12 0.8-27.2-11.2-33.6s-27.2-0.8-33.6 11.2c-0.8 1.6-3.2 6.4-8 12-7.2 10.4-17.6 20-28.8 29.6-34.4 28-80.8 44.8-140.8 44.8s-105.6-16.8-140.8-44.8c-12-9.6-21.6-20-28.8-29.6-4-5.6-7.2-9.6-8-12-6.4-12-20.8-17.6-33.6-11.2s-17.6 20.8-11.2 33.6c8 16 24 36.8 50.4 58.4z" fill=""></path><path d="M512 1010.4c-276.8 0-502.4-225.6-502.4-502.4S235.2 5.6 512 5.6s502.4 225.6 502.4 502.4-225.6 502.4-502.4 502.4zM512 53.6C261.6 53.6 57.6 257.6 57.6 508s204 454.4 454.4 454.4 454.4-204 454.4-454.4S762.4 53.6 512 53.6z" fill=""></path></g></svg>
          `,
    headingText: "2000+",
    text: "Happy Clients",
  },
  {
    svg: `<svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M6.39113 10.5439C6.39051 9.44976 6.7016 8.37924 7.28617 7.46394C7.86503 6.55596 8.69417 5.84514 9.6681 5.42194C10.9668 4.85935 12.4322 4.85935 13.7309 5.42194C14.7052 5.84498 15.5347 6.55581 16.1138 7.46394C17.3021 9.32579 17.309 11.731 16.1314 13.5999L18.525 17.9719L16.0037 17.4719L15.1973 19.9999L12.9753 15.9249C12.1382 16.1414 11.2618 16.1414 10.4247 15.9249L8.20267 19.9999L7.39635 17.4709L4.875 17.9719L7.26863 13.5999C6.69465 12.6895 6.38988 11.6281 6.39113 10.5439V10.5439Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4504 8.32691C11.4973 8.22925 11.5943 8.16742 11.7005 8.16742C11.8066 8.16742 11.9036 8.22925 11.9506 8.32691L12.4683 9.37291C12.5069 9.45209 12.5788 9.50881 12.6633 9.52691L13.7475 9.74991C13.8468 9.77396 13.9266 9.84932 13.9583 9.94877C13.99 10.0482 13.9688 10.1574 13.9025 10.2369L13.1284 11.1369C13.0738 11.2009 13.0483 11.2856 13.0582 11.3699L13.2015 12.5879C13.216 12.6944 13.1719 12.8004 13.0868 12.8633C13.0018 12.9262 12.8898 12.9357 12.7959 12.8879L11.8209 12.3799C11.7419 12.3384 11.6483 12.3384 11.5693 12.3799L10.5943 12.8879C10.5004 12.9357 10.3884 12.9262 10.3034 12.8633C10.2183 12.8004 10.1742 12.6944 10.1887 12.5879L10.3321 11.3729C10.3419 11.2886 10.3164 11.2039 10.2619 11.1399L9.4877 10.2399C9.41982 10.159 9.39893 10.0473 9.43286 9.94637C9.46679 9.84548 9.55041 9.77067 9.65248 9.74991L10.7367 9.52591C10.8212 9.50781 10.893 9.45109 10.9317 9.37191L11.4504 8.32691Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M7.90164 13.1977C7.6795 12.8481 7.21601 12.7448 6.8664 12.9669C6.51679 13.189 6.41345 13.6525 6.63559 14.0021L7.90164 13.1977ZM7.95112 14.4679L8.49338 13.9498L8.49105 13.9474L7.95112 14.4679ZM10.1224 15.8399L10.3567 15.1274L10.3557 15.1271L10.1224 15.8399ZM10.2422 16.6561C10.6433 16.7596 11.0523 16.5184 11.1558 16.1173C11.2593 15.7162 11.018 15.3072 10.6169 15.2037L10.2422 16.6561ZM16.7644 14.0021C16.9865 13.6525 16.8832 13.189 16.5336 12.9669C16.184 12.7448 15.7205 12.8481 15.4983 13.1977L16.7644 14.0021ZM15.4489 14.4679L14.9089 13.9474L14.9066 13.9498L15.4489 14.4679ZM13.2775 15.8399L13.0443 15.1271L13.0433 15.1274L13.2775 15.8399ZM12.783 15.2037C12.382 15.3072 12.1407 15.7162 12.2442 16.1173C12.3477 16.5184 12.7567 16.7596 13.1578 16.6561L12.783 15.2037ZM6.63559 14.0021C6.86081 14.3566 7.12062 14.6871 7.41118 14.9885L8.49105 13.9474C8.27068 13.7188 8.07317 13.4676 7.90164 13.1977L6.63559 14.0021ZM7.40886 14.986C8.0972 15.7064 8.94842 16.2449 9.88921 16.5527L10.3557 15.1271C9.65246 14.897 9.01285 14.4935 8.49337 13.9498L7.40886 14.986ZM9.88822 16.5524C10.0051 16.5908 10.1231 16.6254 10.2422 16.6561L10.6169 15.2037C10.5294 15.1811 10.4426 15.1557 10.3567 15.1274L9.88822 16.5524ZM15.4983 13.1977C15.3268 13.4676 15.1293 13.7188 14.9089 13.9474L15.9888 14.9885C16.2794 14.6871 16.5392 14.3566 16.7644 14.0021L15.4983 13.1977ZM14.9066 13.9498C14.3871 14.4935 13.7475 14.897 13.0443 15.1271L13.5108 16.5527C14.4516 16.2449 15.3028 15.7064 15.9911 14.986L14.9066 13.9498ZM13.0433 15.1274C12.9574 15.1557 12.8706 15.1811 12.783 15.2037L13.1578 16.6561C13.2769 16.6254 13.3949 16.5908 13.5118 16.5524L13.0433 15.1274Z" fill="#000000"></path> </g></svg>`,
    headingText: "12+",
    text: "Year's Experience",
  },
  {
    svg: `<svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.4" d="M17.5291 7.77C17.4591 7.76 17.3891 7.76 17.3191 7.77C15.7691 7.72 14.5391 6.45 14.5391 4.89C14.5391 3.3 15.8291 2 17.4291 2C19.0191 2 20.3191 3.29 20.3191 4.89C20.3091 6.45 19.0791 7.72 17.5291 7.77Z" fill="#292D32"></path> <path opacity="0.4" d="M20.7896 14.6999C19.6696 15.4499 18.0996 15.7299 16.6496 15.5399C17.0296 14.7199 17.2296 13.8099 17.2396 12.8499C17.2396 11.8499 17.0196 10.8999 16.5996 10.0699C18.0796 9.86992 19.6496 10.1499 20.7796 10.8999C22.3596 11.9399 22.3596 13.6499 20.7896 14.6999Z" fill="#292D32"></path> <path opacity="0.4" d="M6.44039 7.77C6.51039 7.76 6.58039 7.76 6.65039 7.77C8.20039 7.72 9.43039 6.45 9.43039 4.89C9.43039 3.3 8.14039 2 6.54039 2C4.95039 2 3.65039 3.29 3.65039 4.89C3.66039 6.45 4.89039 7.72 6.44039 7.77Z" fill="#292D32"></path> <path opacity="0.4" d="M6.54914 12.8501C6.54914 13.8201 6.75914 14.7401 7.13914 15.5701C5.72914 15.7201 4.25914 15.4201 3.17914 14.7101C1.59914 13.6601 1.59914 11.9501 3.17914 10.9001C4.24914 10.1801 5.75914 9.8901 7.17914 10.0501C6.76914 10.8901 6.54914 11.8401 6.54914 12.8501Z" fill="#292D32"></path> <path d="M12.1208 15.87C12.0408 15.86 11.9508 15.86 11.8608 15.87C10.0208 15.81 8.55078 14.3 8.55078 12.44C8.55078 10.54 10.0808 9 11.9908 9C13.8908 9 15.4308 10.54 15.4308 12.44C15.4308 14.3 13.9708 15.81 12.1208 15.87Z" fill="#292D32"></path> <path d="M8.87078 17.9399C7.36078 18.9499 7.36078 20.6099 8.87078 21.6099C10.5908 22.7599 13.4108 22.7599 15.1308 21.6099C16.6408 20.5999 16.6408 18.9399 15.1308 17.9399C13.4208 16.7899 10.6008 16.7899 8.87078 17.9399Z" fill="#292D32"></path> </g></svg>`,
    headingText: "5+",
    text: "Expert Trainers",
  },
  {
    svg: `<svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M3 5C3 6.30622 3.83481 7.41746 5 7.82929V16.1707C3.83481 16.5825 3 17.6938 3 19C3 20.6569 4.34315 22 6 22C7.65685 22 9 20.6569 9 19C9 17.6938 8.16519 16.5825 7 16.1707V11.3987C8.89299 14.0198 11.8676 15.7195 15.1597 15.9683C15.5625 17.15 16.682 18 18 18C19.6569 18 21 16.6569 21 15C21 13.3431 19.6569 12 18 12C16.7075 12 15.6058 12.8174 15.1839 13.9635C11.726 13.6534 8.7142 11.3899 7.47847 8.09457L7.3272 7.6912C8.31833 7.20148 9 6.18034 9 5C9 3.34315 7.65685 2 6 2C4.34315 2 3 3.34315 3 5ZM6 18C5.44772 18 5 18.4477 5 19C5 19.5523 5.44772 20 6 20C6.55228 20 7 19.5523 7 19C7 18.4477 6.55228 18 6 18ZM17 15C17 14.4477 17.4477 14 18 14C18.5523 14 19 14.4477 19 15C19 15.5523 18.5523 16 18 16C17.4477 16 17 15.5523 17 15ZM5 5C5 4.44772 5.44772 4 6 4C6.55228 4 7 4.44772 7 5C7 5.55228 6.55228 6 6 6C5.44772 6 5 5.55228 5 5Z" fill="#000000"></path> </g></svg>
          `,
    headingText: "6+",
    text: "Daily Batches",
  },
];

//Featured
export const featuredData = [
  {
    svg: `<svg
        fill="#000000"
        height="64px"
        width="64px"
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 429.313 429.313"
        xml:space="preserve"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke="#CCCCCC"
          stroke-width="21.46565"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <g>
            <path d="M333.72,262.011c-0.058-0.096-0.117-0.191-0.178-0.286c-15.953-24.641-24.385-53.192-24.385-82.565 c0-20.48,4.053-40.427,12.048-59.289C336.01,84.923,343.517,47.958,343.517,10c0-5.523-4.478-10-10-10s-10,4.477-10,10 c0,27.144-4.149,53.738-12.325,79.354c-62.635-20.641-130.434-20.642-193.069-0.004C109.946,63.734,105.797,37.142,105.797,10 c0-5.523-4.478-10-10-10s-10,4.477-10,10c0,37.956,7.507,74.922,22.313,109.873c7.994,18.86,12.047,38.808,12.047,59.288 c0,29.372-8.433,57.923-24.385,82.566c-0.061,0.094-0.12,0.188-0.177,0.284c-17.934,27.827-27.409,60.029-27.409,93.15v8.99v55.164 c0,5.523,4.478,10,10,10s10-4.477,10-10v-50.707c14.566-11.383,41.009-10.916,64.851,1.607c13.03,6.841,24.128,16.602,31.53,27.672 v21.428c0,5.523,4.478,10,10,10s10-4.477,10-10v-13.983c6.716,0.161,13.454,0.161,20.17,0v13.983c0,5.523,4.478,10,10,10 s10-4.477,10-10v-21.427c7.398-11.066,18.5-20.826,31.539-27.673c23.844-12.522,50.285-12.989,64.851-1.606v50.707 c0,5.523,4.478,10,10,10s10-4.477,10-10V364.15v-8.99C361.127,322.04,351.65,289.836,333.72,262.011z M140.157,179.16 c0-23.176-4.587-45.75-13.632-67.091c-0.549-1.297-1.07-2.602-1.597-3.905c58.239-19.06,121.218-19.06,179.457,0.004 c-0.527,1.301-1.047,2.604-1.595,3.899c-9.046,21.343-13.633,43.916-13.633,67.092c0,33.129,9.481,65.337,27.419,93.161 c0.001,0.002,0.003,0.005,0.004,0.007c-32.64,12.351-66.871,18.628-101.925,18.628c-35.053,0-69.282-6.276-101.922-18.627 c0.001-0.002,0.003-0.005,0.004-0.007C130.678,244.496,140.157,212.29,140.157,179.16z M266.978,352.506 c-15.336,8.053-28.573,19.535-37.784,32.683c-9.67,0.353-19.412,0.353-29.082,0c-9.213-13.152-22.449-24.635-37.774-32.682 c-25.473-13.379-53.161-15.532-73.831-6.948c1.216-19.335,6.099-38.156,14.379-55.574c35.736,13.914,73.292,20.971,111.77,20.971 c38.48,0,76.036-7.058,111.773-20.972c8.28,17.418,13.163,36.239,14.379,55.575C320.137,336.975,292.45,339.127,266.978,352.506z"></path>
            <circle cx="214.655" cy="224.323" r="9.75"></circle>
          </g>
        </g>
      </svg>`,
    paragraphText:
      "Personalized guidance, live instructors, and vibrant community for your fitness journey's motivation.",
    headingText: "Support and Motivation",
  },

  {
    svg: `<svg
        height="64px"
        width="64px"
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 59.431 59.431"
        xml:space="preserve"
        fill="#000000"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <g>
            <g>
              <circle
                style="fill:#010002;"
                cx="35.871"
                cy="4.882"
                r="4.882"
              ></circle>
              <path
                style="fill:#010002;"
                d="M20.724,14.445c-1.087,0.483-2.131,0.983-3.117,1.478c-2.987,1.5-0.362,5.97,2.617,4.475 c0.175-0.087,0.353-0.167,0.528-0.252C20.664,18.26,20.628,16.354,20.724,14.445z"
              ></path>
              <path
                style="fill:#010002;"
                d="M42.625,14.441c0.158-0.896-0.191-1.814-1.324-2.3c-4.305-1.849-9.231-1.45-13.921-0.139 c0.001,0.19-0.008,0.381-0.038,0.574c-0.244,1.572-0.295,2.927-0.264,4.546l8.794-0.313c0,0,1.232,0.324,0.314,0.762 c-1.293,0.057-9.826,0.468-9.826,0.468c-0.105-2.17-0.112-4.344,0.218-6.473c0.506-3.269-4.487-4.673-4.998-1.378 c-0.662,4.266-0.342,8.496-0.092,12.782c0.108,1.879,2.144,3.337,3.899,2.238c1.265-0.793,2.484-1.683,3.646-2.642l-0.004,1.675 l-0.036,18.065v14.33c0,1.543,1.128,2.795,2.715,2.795c1.585,0,2.873-1.252,2.873-2.795V36.154h2.536c0,4.799,0,15.752,0,20.552 c0,3.342,5.184,3.342,5.184,0c0-4.8,0-9.599,0-14.396C43.358,20.668,43.362,20.733,42.625,14.441z"
              ></path>
            </g>
          </g>
        </g>
      </svg>`,
    paragraphText:
      "Our certified trainers bring over 10,000 hours of training experience",
    headingText: "Experience Trainer",
  },

  {
    svg: `<svg
        width="64px"
        height="64px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="#1C274C"
            stroke-width="1.5"
          ></circle>
          <path
            d="M15.4137 10.941C16.1954 11.4026 16.1954 12.5974 15.4137 13.059L10.6935 15.8458C9.93371 16.2944 9 15.7105 9 14.7868L9 9.21316C9 8.28947 9.93371 7.70561 10.6935 8.15419L15.4137 10.941Z"
            stroke="#1C274C"
            stroke-width="1.5"
          ></path>
        </g>
      </svg>`,
    paragraphText:
      "We deliver online courses for yoga, Zumba, and Pilates via Zoom for interactive and convenient learning",
    headingText: "Live Classes",
  },
  {
    svg: `<svg
        fill="#000000"
        width="64px"
        height="64px"
        viewBox="0 0 512 512"
        enable-background="new 0 0 512 512"
        id="Eat_x5F_healthy"
        version="1.1"
        xml:space="preserve"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <g>
            <g>
              <path d="M427.15,321.527l-9.68-2.512c-8.391,32.34-30.418,59.493-60.435,74.498l4.472,8.945 C394.109,386.162,418.035,356.663,427.15,321.527z"></path>
              <rect height="10" width="412.301" x="39.773" y="438.592"></rect>
              <path d="M61.349,269.521c0.61-3.155,1.201-6.113,1.775-8.91l27.626,10.164l3.453-9.385l-28.971-10.659 c3.848-17.277,6.834-26.508,9.324-33.269c2.747-7.471,8.241-13.425,15.471-16.765s15.326-3.664,22.801-0.912 c7.474,2.747,13.429,8.241,16.769,15.471c3.339,7.229,3.665,15.326,0.918,22.797c-0.354,0.961-0.875,2.236-1.543,3.781 l-24.287-8.936l-3.453,9.385l23.566,8.671c-3.68,7.752-8.733,17.861-14.478,28.753H44.028v10.276c0,2.789,0.083,5.611,0.247,8.387 c3.286,55.857,39.079,102.594,88.316,122.271H39.773v10h144.914H307.16h144.914v-10h-92.832 c51.851-20.741,88.576-71.488,88.576-130.658v-0.803c6.387-1.023,12.441-3.518,17.771-7.359 c9.082-6.547,15.072-16.236,16.869-27.285c1.799-11.052-0.816-22.14-7.361-31.219c-4.643-6.444-10.971-11.298-18.09-14.226 c2.516-3.598,4.116-7.826,4.517-12.239c0.226-2.44,0.093-4.913-0.397-7.36c-2.788-13.709-16.211-22.601-29.925-19.816 c-2.371,0.482-4.632,1.291-6.729,2.389c-0.038-0.242-0.064-0.484-0.105-0.727c-2.291-13.404-9.663-25.115-20.761-32.974 c-22.909-16.224-54.745-10.785-70.97,12.124c-2.607,3.682-4.666,7.651-6.183,11.786c-22.618-5.498-45.822,7.82-52.305,30.39 c-2.821,9.81-2.113,20.349,1.993,29.675l9.152-4.029c-3.166-7.189-3.711-15.316-1.535-22.883 c2.485-8.651,8.19-15.817,16.064-20.177c7.416-4.104,15.919-5.256,24.115-3.302c-1.756,11.153,0.173,22.821,5.89,32.974 l8.714-4.906c-7.729-13.727-6.844-30.898,2.256-43.748c6.314-8.917,15.725-14.842,26.496-16.682 c10.77-1.84,21.614,0.624,30.532,6.94c8.917,6.315,14.843,15.725,16.683,26.496c1.84,10.771-0.625,21.615-6.94,30.532l8.161,5.779 c5.342-7.542,8.463-16.192,9.199-25.167c2.184-2.388,5.053-4.037,8.264-4.69c8.313-1.685,16.444,3.701,18.131,11.996 c0.298,1.484,0.379,2.984,0.242,4.467c-0.361,3.987-2.332,7.725-5.359,10.313c-4.188-0.528-8.48-0.451-12.742,0.332l1.806,9.836 c12.091-2.222,24.538,2.781,31.714,12.743c10.285,14.269,7.037,34.252-7.242,44.546c-5.333,3.843-11.617,5.914-18.178,5.997 h-54.949c15.001-21.899,27.654-23.056,27.793-23.065l-0.102,0.004l-0.283-9.996c-2.039,0.058-20.069,1.501-39.301,33.057h-2.493 c0.177-1.618,0.292-3.249,0.318-4.89c0.22-14.246-5.161-27.68-15.151-37.826c-9.993-10.149-23.338-15.738-37.578-15.738 c-8.902,0-17.713,2.263-25.484,6.548c-2.287,1.267-4.703,2.464-7.177,3.556c-12.704,5.6-26.124,7.855-38.81,6.517 c-1.05-0.11-2.121-0.162-3.2-0.179c-11.666-9.75-24.873-18.125-35.125-24.041c-0.207-11.178,0.781-22.445,2.956-33.505 l1.173-5.965h-6.079c-2.805,0-9.972,0.643-15.925,6.596c-0.568,0.569-1.097,1.166-1.596,1.782 c-0.499-0.616-1.028-1.213-1.596-1.782c-5.954-5.954-13.12-6.596-15.925-6.596h-6.079l1.172,5.964 c2.175,11.061,3.162,22.327,2.956,33.5c-8.509,4.908-19.052,11.506-29.053,19.179c0.958-7.362-0.161-14.86-3.351-21.765 c-2.262-4.896-5.424-9.192-9.291-12.72c2.214-1.435,4.339-3.118,6.206-4.693c7.187-6.067,15.523-14.998,23.473-25.147 c7.949-10.146,14.622-20.377,18.79-28.808c3.449-6.977,7.373-16.773,1.642-21.268c-4.668-3.657-12.391-0.604-23.03,9.068 c0.147-1.354,0.262-2.677,0.334-3.955c0.839-14.938-3.91-19.886-8.042-21.406c-7.307-2.688-15.471,4.152-22.723,14.995 c-1.785-14.83-5.724-22.456-11.77-22.702c-7.224-0.291-10.635,9.711-12.53,17.26c-2.291,9.122-3.84,21.237-4.363,34.115 c-0.524,12.882,0.035,25.087,1.576,34.365c0.411,2.476,0.955,5.217,1.747,7.807c-5.075,0.235-10.108,1.45-14.86,3.645 c-9.656,4.46-16.994,12.413-20.662,22.389c-3.408,9.253-7.694,22.86-13.642,53.614L61.349,269.521z M135.655,251.35 c3.734-3.563,7.827-7.003,12.058-10.26c-6.521,10.758-11.022,23.285-11.022,36.57c0,0.684,0.025,1.365,0.039,2.048h-15.118 C127.463,268.466,132.326,258.557,135.655,251.35z M209.648,263.936h-18.305v10h16.871c-0.004,1.946,0.137,3.874,0.438,5.772 h-33.693c-0.007-0.683-0.018-1.364-0.018-2.048c0-23.114,6.359-42.402,11.505-53.146v1.44h0.01l-0.001-1.458 c1.585-3.308,3.057-5.815,4.189-7.359c3.063,4.017,8.67,14.923,12.36,31.692l9.767-2.148c-1.939-8.815-4.701-17.331-7.886-24.416 c7.942,4.581,17.732,10.682,27.013,17.683c-7.458,2.783-13.921,8.007-18.253,15.003 C211.899,257.759,210.564,260.787,209.648,263.936z M146.73,279.708c-0.016-0.683-0.039-1.363-0.039-2.048 c0-19.793,11.818-35.992,18.863-43.886c3.433-3.847,6.832-7.016,9.984-9.567c-0.634,1.505-1.23,3.01-1.782,4.476 c-3.292,8.744-8.814,26.734-8.814,48.977c0,0.684,0.011,1.365,0.018,2.048H146.73z M437.818,289.984 c0,72.046-58.613,130.658-130.658,130.658H184.687c-69.085,0-126.376-53.966-130.429-122.859 c-0.152-2.581-0.229-5.205-0.229-7.799v-0.276h383.79V289.984z M295.379,273.983c0-13.557,11.033-24.585,24.596-24.585 c13.557,0,24.586,11.029,24.586,24.585c0,1.947-0.251,3.858-0.697,5.725h-47.785C295.63,277.846,295.379,275.935,295.379,273.983z M291.193,240.508c2.75-1.214,5.438-2.546,7.978-3.954c6.289-3.467,13.429-5.3,20.647-5.3c11.539,0,22.354,4.53,30.453,12.754 c8.096,8.222,12.456,19.109,12.277,30.652c-0.027,1.698-0.165,3.385-0.389,5.048h-8.08c0.313-1.882,0.48-3.792,0.48-5.725 c0-19.07-15.516-34.585-34.586-34.585c-19.076,0-34.596,15.515-34.596,34.585c0,1.935,0.167,3.845,0.481,5.725h-67.029 c-0.471-2.116-0.681-4.292-0.615-6.502c0.136-4.581,1.492-9.067,3.926-12.983c4.599-7.428,12.474-12.106,21.065-12.514 c1.389-0.066,2.765-0.028,4.091,0.112C261.719,249.338,276.895,246.811,291.193,240.508z M199.218,187.853 c0.844-0.844,1.739-1.495,2.627-1.997c-1.104,7.384-1.713,14.829-1.832,22.257c-1.779-0.942-3.283-1.717-4.462-2.314v-9.092 C195.551,193.362,196.853,190.218,199.218,187.853z M179.256,185.856c0.888,0.502,1.783,1.153,2.627,1.997 c2.365,2.365,3.667,5.509,3.667,8.854v9.091c-1.179,0.596-2.688,1.374-4.462,2.313C180.97,200.684,180.361,193.24,179.256,185.856 z M171.836,128.219c-1.868,5.882-8.187,18.215-20.645,34.118c-3.06,3.906-5.997,7.396-8.768,10.494 c2.425-4.853,4.638-10.01,6.542-15.185c1.521-4.131,2.826-8.24,3.934-12.257C161.658,135.672,168.161,130.453,171.836,128.219z M145.295,111.546c2.119,2.02,3.503,17.597-5.713,42.646c-9.218,25.051-20.369,36.016-23.291,36.18 c-2.119-2.02-3.504-17.597,5.713-42.647C131.222,122.674,142.373,111.71,145.295,111.546z M107.364,146.209 c0.819-20.184,4.002-33.671,6.391-39.361c1.39,4.2,3.015,12.729,3.324,26.47l0.055-0.001c-1.639,3.573-3.155,7.26-4.515,10.955 c-2.134,5.8-3.96,11.837-5.317,17.71C107.133,157.28,107.127,152.017,107.364,146.209z"></path>
              <rect
                height="10"
                transform="matrix(-0.9385 -0.3453 0.3453 -0.9385 89.3033 479.6154)"
                width="14.076"
                x="80.33"
                y="226.854"
              ></rect>
              <path d="M450.381,262.348c-3.604,2.595-8.002,3.63-12.387,2.919l-1.604,9.87c1.446,0.235,2.894,0.352,4.33,0.352 c5.538,0,10.923-1.727,15.505-5.025c5.771-4.156,9.578-10.312,10.721-17.332c1.141-7.02-0.52-14.064-4.675-19.835l-8.115,5.844 c2.596,3.604,3.632,8.003,2.919,12.386C456.361,255.909,453.984,259.752,450.381,262.348z"></path>
              <path d="M364.225,166.188l2.764-9.611c-11.462-3.293-23.472,3.35-26.768,14.813c-3.295,11.464,3.351,23.471,14.814,26.767 l2.762-9.611c-6.164-1.772-9.736-8.229-7.965-14.393C351.604,167.989,358.061,164.416,364.225,166.188z"></path>
              <polygon points="189.816,99.758 199.816,99.758 199.816,87.37 212.205,87.37 212.205,77.37 199.816,77.37 199.816,64.981 189.816,64.981 189.816,77.37 177.428,77.37 177.428,87.37 189.816,87.37 "></polygon>
              <polygon points="306.871,144.48 316.871,144.48 316.871,132.092 329.26,132.092 329.26,122.092 316.871,122.092 316.871,109.703 306.871,109.703 306.871,122.092 294.482,122.092 294.482,132.092 306.871,132.092 "></polygon>
              <polygon points="41.376,186.861 51.376,186.861 51.376,174.473 63.765,174.473 63.765,164.473 51.376,164.473 51.376,152.084 41.376,152.084 41.376,164.473 28.987,164.473 28.987,174.473 41.376,174.473 "></polygon>
            </g>
          </g>
        </g>
      </svg>`,
    paragraphText:
      "We offer the ideal nutrition support with balanced Ayurvedic diet plans",
    headingText: "Right Nutrition",
  },
];
