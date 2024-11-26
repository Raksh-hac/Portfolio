module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      animation: {
        float: 'float 3s infinite linear',
      },
      keyframes: {
        float: {
          '0%': { transform: 'translateX(-50%)' },
          '50%': { transform: 'translateX(50%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};

