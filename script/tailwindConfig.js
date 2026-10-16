tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "sans-serif"],
      },
      colors: {
        brand: {
          50: "#eff6ff",
          100: "#dbeafe",
          500: "#0284c7",
          600: "#0277fa" /* Exact brand primary blue */,
          700: "#0062d2",
          800: "#0c4a6e",
        },
        accent: {
          orange: "#f97316",
          amber: "#f59e0b",
          teal: "#0d9488",
        },
      },
      boxShadow: {
        soft: "0 8px 30px rgba(0, 0, 0, 0.05)",
        card: "0 4px 20px -2px rgba(2, 119, 250, 0.08)",
        pop: "0 12px 36px -4px rgba(2, 119, 250, 0.15)",
      },
    },
  },
};
