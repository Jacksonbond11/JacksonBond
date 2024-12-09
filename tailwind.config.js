module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/daisyui/dist/**/*.js",
    "node_modules/react-daisyui/dist/**/*.js",
  ],
  daisyui: {
    themes: [
      "dim", 
      "synthwave",
      {
        cava: {
          primary: "#009BFF", // Cool Blue
          secondary: "#88C057", // Fresh Green
          accent: "#FFD700", // Bright Yellow
          neutral: "#F4E1D2", // Soft Beige
          "base-100": "#FDF7EB", // Background Cream
          info: "#009BFF", // Cool Blue for info
          success: "#88C057", // Fresh Green for success
          warning: "#FFD700", // Bright Yellow for warning
          error: "#E94E77", // Vivid Red for error
          
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
