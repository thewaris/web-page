export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        'anaktoria': ['Anaktoria', 'sans-serif'],
      },
      colors: {
        primary: "#000000",
        accent: "#f0b570",
        // Optionally, you can add secondary: '#ffffff' if needed
      },
    },
  },
  plugins: [],
}
