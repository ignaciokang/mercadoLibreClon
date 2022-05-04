module.exports = {
  purge: ["index.html", "./src/**/*.jsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes:{
        fadeIn: {
        '0%': { opacity: 0 },
        '100%': { opacity: 1},
      },
        fadeDown: {
          '0%': { transform: 'translateyY(0%)',
                  opacity: 0 },
          '10%': { transform: 'translateY(-50px)',
                  opacity: 0},

          '100%': { transform: 'translateY(0px)',
                    opacity: 1},
        },
        fadeUp: {
          '0%': { transform: 'translateyY(0%)',
                  opacity: 0 },
          '10%': { transform: 'translateY(50px)',
                  opacity: 0},

          '100%': { transform: 'translateY(0px)',
                    opacity: 1},
        }
    },
      animation: {
        'spin-slow': 'spin 3s linear',
        'spin-fast': 'spin 1s linear',
        'fadeIn': 'fadeIn 1s linear',
        'fadeInfinito': 'fadeIn 1s linear infinite alternate',
        'fadeDown': 'fadeDown 1s linear', 
        'fadeUp': 'fadeUp 1s linear',   },
      fontFamily: {
        Montserrat: "'Montserrat', serif",
        Libre: "'Libre Baskerville', serif",
      },
      colors: {
        Amarillo: '#fff159',
        FondoGris: '#ebebeb',
        CelesteML: '#3485fb',

      }
    }
  },
  variants: {
    extend: {
      animation: ["motion-safe"]
    },
  },
  plugins: [],
}
