import nextra from "nextra";

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  defaultShowCopyCode: true,
});

export default withNextra({
  env: {},
  async redirects() {
    return [
      {
        source: "/",
        destination: "/introduction",
        permanent: false,
      }
    ];
  },
});
