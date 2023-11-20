import { defaultTheme, defineUserConfig } from "vuepress";
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import { sitemapPlugin } from "vuepress-plugin-sitemap2";
import { getDirname, path } from "@vuepress/utils";
import { glob } from "glob";

let songFiles = glob
  .sync("docs/songs/**/*.md")
  .map((f) => f.replace("docs", "").replace("index.md", ""));

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  // Global title in HTML <head>.
  // If page has title (in frontmatter) or h1 then: <page title/h1> | <global title>
  // e.g <title>Vuepress-DecapCMS-Netlify | VueDN</title>

  locales: {
    "/": {
      lang: "ca",
      description:
        "Escola Idiomes Tarragona es una de las academias más antiguas de Tarragona.  Siempre ha ofrecido cursos de idiomas de alta calidad.",
    },
    "/en/": {
      lang: "en",
      description:
        "Escola Idiomes Tarragona is one of the oldest academies in Tarragona offering high quality language courses.",
    },
    "/es/": {
      lang: "es",
      description:
        "Escola Idiomes Tarragona es una de las academias más antiguas de Tarragona.  Siempre ha ofrecido cursos de idiomas de alta calidad.",
    },
  },

  title: "Escola Idiomes Tarragona",
  // Global description in in HTML <head>.
  // If page has description (in frontmatter) then: <global description is replaced by <page description>
  // <meta name="description" content="...">
  head: [
    [
      "script",
      {
        src: "https://identity.netlify.com/v1/netlify-identity-widget.js",
      },
    ],
  ],

  // theme and its config
  theme: defaultTheme({
    logo: "vue.png",
    notFound: [
      "There's nothing here. If you're looking for DecapCMS, manually enter `/admin` to the root site path to navigate directly to it.",
    ],
    navbar: [
      {
        text: "Using this template",
        link: "/template/",
      },
    ],
    locales: {
      "/": {
        selectLanguageName: "Català",
      },
      "/en/": {
        selectLanguageName: "English",
      },
      "/es/": {
        selectLanguageName: "Español",
      },
    },
  }),

  // Replace footer
  alias: {
    "@theme/HomeFooter.vue": path.resolve(
      __dirname,
      "./components/MyHomeFooter.vue"
    ),
  },

  // plugin
  plugins: [
    registerComponentsPlugin({
      // options
      // Absolute path to the components directory
      componentsDir: path.resolve(__dirname, "./components"),
    }),
    sitemapPlugin({
      hostname: "https://escolaidiomestarragona.cat",
    }),
  ],
});
