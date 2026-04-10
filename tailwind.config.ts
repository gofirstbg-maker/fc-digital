import plugin from "tailwindcss/plugin";
import type { Config } from "tailwindcss";

export const customPlugin: Parameters<typeof plugin>[0] = function ({ addComponents }) {
  addComponents({
    ".section": {
      maxWidth: "1440px",
      paddingLeft: "125px",
      paddingRight: "125px",
      margin: "0 auto",
      width: "100%"
    },

    ".BP-45": {
      fontWeight: "400",
      fontSize: "45px",
      lineHeight: "54px",
      fontFamily: "var(--font-brutalista)"
    },
    ".Menu-XS": {
      fontWeight: "500",
      fontSize: "12px",
      lineHeight: "12px",
      fontFamily: "var(--font-roboto)"
    },
    ".Heading-78": {
      fontWeight: "600",
      fontSize: "78px",
      lineHeight: "117px",
      fontFamily: "var(--font-roboto-flex)"
    },
    ".Heading-58": {
      fontWeight: "500",
      fontSize: "58px",
      lineHeight: "87px",
      fontFamily: "var(--font-roboto-flex)"
    },

    ".Heading-48": {
      fontWeight: "600",
      fontSize: "48px",
      lineHeight: "56px",
      fontFamily: "var(--font-roboto-flex)"
    },
    ".Heading-48-mono": {
      fontWeight: "400",
      fontSize: "48px",
      lineHeight: "72px",
      fontFamily: "var(--font-roboto-mono)"
    },
    ".Heading-48-Regular": {
      fontWeight: "400",
      fontSize: "48px",
      lineHeight: "72px",
      fontFamily: "var(--font-roboto-flex)"
    },
    ".Heading-42": {
      fontWeight: "500",
      fontSize: "42px",
      lineHeight: "63px",
      fontFamily: "var(--font-roboto-flex)"
    },
    ".Heading-38": {
      fontWeight: "600",
      fontSize: "38px",
      lineHeight: "44px",
      fontFamily: "var(--font-roboto-flex)"
    },
    ".Heading-32-mono": {
      fontWeight: "400",
      fontSize: "32px",
      lineHeight: "48px",
      fontFamily: "var(--font-roboto-mono)"
    },
    ".Heading-30": {
      fontWeight: "500",
      fontSize: "30px",
      lineHeight: "45px",
      fontFamily: "var(--font-roboto-flex)"
    },
    ".Heading-28-line-42": {
      fontWeight: "600",
      fontSize: "28px",
      lineHeight: "42px",
      fontFamily: "var(--font-roboto-flex)"
    },
    ".Heading-28": {
      fontWeight: "600",
      fontSize: "28px",
      lineHeight: "32px",
      fontFamily: "var(--font-roboto-flex)"
    },
    ".Heading-24": {
      fontWeight: "500",
      fontSize: "24px",
      lineHeight: "36px",
      fontFamily: "var(--font-roboto-flex)"
    },
    ".Heading-24-mono": {
      fontWeight: "400",
      fontSize: "24px",
      lineHeight: "36px",
      fontFamily: "var(--font-roboto-mono)"
    },
    ".Heading-22": {
      fontWeight: "500",
      fontSize: "22px",
      lineHeight: "25px",
      fontFamily: "var(--font-roboto-flex)"
    },
    ".Heading-22-mono": {
      fontWeight: "700",
      fontSize: "22px",
      lineHeight: "29px",
      fontFamily: "var(--font-roboto-mono)"
    },
    ".Heading-20": {
      fontWeight: "400",
      fontSize: "20px",
      lineHeight: "30px",
      fontFamily: "var(--font-roboto-mono)"
    },
    ".Heading-20-md": {
      fontWeight: "500",
      fontSize: "20px",
      lineHeight: "30px",
      fontFamily: "var(--font-roboto-mono)"
    },
    ".Heading-20-md-flex": {
      fontWeight: "500",
      fontSize: "20px",
      lineHeight: "30px",
      fontFamily: "var(--font-roboto-flex)"
    },
    ".Heading-18": {
      fontWeight: "500",
      fontSize: "18px",
      lineHeight: "27px",
      fontFamily: "var(--font-roboto-flex)"
    },
    ".Body-60": {
      fontWeight: "600",
      fontSize: "60px",
      lineHeight: "90px",
      fontFamily: "var(--font-roboto-flex)"
    },
    ".Body-40": {
      fontWeight: "600",
      fontSize: "40px",
      lineHeight: "60px",
      fontFamily: "var(--font-roboto-flex)"
    },
    ".Body-20": {
      fontWeight: "500",
      fontSize: "20px",
      lineHeight: "30px",
      fontFamily: "var(--font-roboto-mono)"
    },
    ".Body-18": {
      fontWeight: "400",
      fontSize: "18px",
      lineHeight: "27px",
      fontFamily: "var(--font-roboto-flex)"
    },
    ".Body-18-mono": {
      fontWeight: "500",
      fontSize: "18px",
      lineHeight: "27px",
      fontFamily: "var(--font-roboto-mono)"
    },
    ".Body-18-md": {
      fontWeight: "500",
      fontSize: "18px",
      lineHeight: "27px",
      fontFamily: "var(--font-roboto-flex)"
    },
    ".Body-16": {
      fontWeight: "400",
      fontSize: "16px",
      lineHeight: "21px",
      fontFamily: "var(--font-roboto-flex)"
    },
    ".Body-16-mono": {
      fontWeight: "400",
      fontSize: "16px",
      lineHeight: "21px",
      fontFamily: "var(--font-roboto-mono)"
    },
    ".Body-16-md": {
      fontWeight: "500",
      fontSize: "16px",
      lineHeight: "21px",
      fontFamily: "var(--font-roboto-flex)"
    },
    ".Body-14": {
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "27px",
      fontFamily: "var(--font-roboto-flex)"
    },
    ".Body-14-mono": {
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "27px",
      fontFamily: "var(--font-roboto-mono)"
    },
    ".Body-14-md": {
      fontWeight: "500",
      fontSize: "14px",
      lineHeight: "27px",
      fontFamily: "var(--font-roboto-flex)"
    },
    ".Body-12": {
      fontWeight: "400",
      fontSize: "12px",
      lineHeight: "18px",
      fontFamily: "var(--font-roboto-flex)"
    },
    ".Button-20": {
      fontWeight: "500",
      fontSize: "20px",
      lineHeight: "30px",
      fontFamily: "var(--font-roboto-flex)"
    },
    ".Button-16": {
      fontWeight: "500",
      fontSize: "16px",
      lineHeight: "24px",
      fontFamily: "var(--font-roboto-mono)"
    },
    ".Button-14-md": {
      fontWeight: "500",
      fontSize: "14px",
      lineHeight: "21px",
      fontFamily: "var(--font-roboto-mono)"
    },
    ".Button-12": {
      fontWeight: "400",
      fontSize: "12px",
      lineHeight: "18px",
      fontFamily: "var(--font-roboto-flex)"
    }
  });
};

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}"
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1440px"
      }
    },
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        primary: "#CE7D63",
        "orange-65": "#D4C677",
        "orange-70": "#DA9E8B",
        "orange-80": "#E7BEB1",
        "orange-90": "#F2EED8",
        "orange-95": "#F9F7EC",
        "orange-97": "#FBFAF3",
        "orange-99": "#FDFEFB",
        "dark-06": "#0F0F0F",
        secondary: "#1A1A1A",
        "dark-12": "#1F1F1F",
        "dark-15": "#262626",
        "dark-20": "#333333",
        "dark-25": "#404040",
        "dark-30": "#4D4D4D",
        "dark-35": "#595959",
        "grey-40": "#676665",
        "grey-50": "#81807E",
        "grey-70": "#B3B3B2",
        "grey-80": "#CACACE",
        "grey-90": "#E6E6E6",
        "grey-95": "#F2F2F2",
        "grey-97": "#F7F7F7",
        "grey-99": "#FCFCFC"
      },
      fontFamily: {
        primary: "var(--font-roboto-flex)",
        secondary: "var(--font-roboto-mono)"
      },
      screens: {
        mid: "920px",
        xs: "300px"
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" }
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out"
      }
    }
  },
  plugins: [require("tailwindcss-animate"), require("tailwindcss-animated"), plugin(customPlugin)]
} satisfies Config;

export default config;
