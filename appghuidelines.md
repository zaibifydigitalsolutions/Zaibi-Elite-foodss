const brandGuidelines = {
  brandName: "Zaibi Elite Foods",

  identity: {
    tone: "Modern, clean, premium, food-focused",
    personality: ["Friendly", "Appetizing", "Fast", "Trustworthy"],
    goal: "Create a visually appealing and high-converting food ordering experience"
  },

  colors: {
    primary: "#E53935",       // Main brand color (food red)
    secondary: "#FFA726",     // Accent (orange)
    background: "#FFFFFF",    // App background
    surface: "#F8F8F8",       // Cards / sections
    textPrimary: "#212121",   // Main text
    textSecondary: "#757575", // Sub text
    success: "#43A047",
    error: "#E53935",

    usage: {
      primary: "Buttons, highlights, CTAs",
      secondary: "Accents, badges, offers",
      background: "Main app background",
      surface: "Cards, containers",
      text: "Readable contrast on all backgrounds"
    }
  },

  typography: {
    fontFamily: "Poppins, Roboto, sans-serif",

    headings: {
      h1: { size: "24px", weight: "700" },
      h2: { size: "20px", weight: "600" },
      h3: { size: "18px", weight: "600" }
    },

    body: {
      regular: { size: "14px", weight: "400" },
      medium: { size: "16px", weight: "500" }
    },

    usage: "Keep text clean, readable, and consistent across all screens"
  },

  spacing: {
    unit: 8,
    scale: [4, 8, 12, 16, 20, 24, 32],
    usage: "Use consistent spacing for padding, margins, and layout alignment"
  },

  borderRadius: {
    small: "8px",
    medium: "12px",
    large: "16px",
    pill: "999px"
  },

  shadows: {
    card: "0 2px 8px rgba(0,0,0,0.08)",
    hover: "0 4px 12px rgba(0,0,0,0.12)"
  },

  buttons: {
    primary: {
      background: "#E53935",
      textColor: "#FFFFFF",
      borderRadius: "12px",
      height: "48px"
    },

    secondary: {
      background: "transparent",
      border: "1px solid #E53935",
      textColor: "#E53935"
    },

    usage: "Primary for main actions (Add to Cart, Order Now)"
  },

  cards: {
    productCard: {
      borderRadius: "16px",
      padding: "12px",
      shadow: "card",
      layout: "Image top, details below"
    },

    dealCard: {
      borderRadius: "16px",
      highlight: true,
      badge: "Discount or offer tag"
    }
  },

  images: {
    style: "High-quality, bright, appetizing food images",
    ratio: "1:1 or 4:3",
    usage: "Always use clear and professional food visuals"
  },

  icons: {
    style: "Minimal, clean, modern",
    size: "20px - 24px",
    usage: "Navigation, actions, categories"
  },

  layout: {
    grid: "Flexible mobile grid",
    maxWidth: "100%",
    padding: "16px",
    alignment: "Consistent and balanced"
  },

  navigation: {
    type: "Bottom Navigation",
    items: ["Home", "Menu", "Deals", "Cart", "Profile"],
    behavior: "Sticky and easy to access"
  },

  animations: {
    transitions: "Smooth (200ms - 300ms)",
    effects: [
      "Button press feedback",
      "Add to cart animation",
      "Screen transitions"
    ]
  },

  responsiveness: {
    mobileFirst: true,
    breakpoints: {
      small: "320px",
      medium: "375px",
      large: "414px"
    },
    rules: [
      "Flexible layouts",
      "Scalable typography",
      "Touch-friendly elements"
    ]
  },

  productDesign: {
    requiredElements: ["Image", "Name", "Price"],
    optional: ["Description", "Ratings"],
    interaction: "Quick add to cart and smooth navigation to detail page"
  },

  toneOfVoice: {
    style: "Simple, friendly, and engaging",
    examples: [
      "Order your favorite meal",
      "Hot deals available now",
      "Fresh and delicious food"
    ]
  }
};

export default brandGuidelines;