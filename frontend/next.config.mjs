import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const here = path.dirname(fileURLToPath(import.meta.url));
const haussFile = path.join(here, "app/fonts/private/AtHaussVARVF.woff2");
const useHauss = process.env.SITE_FONT === "hauss" && existsSync(haussFile);

/** @type {import('next').NextConfig} */
const nextConfig = {
  // wirwilden.de: family page at /, personal site under /johannes (app/johannes).
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "lastfm.freetls.fastly.net" },
      { protocol: "https", hostname: "lastfm-img.freetls.fastly.net" },
    ],
  },
  webpack(config) {
    if (useHauss) {
      // Swap the font module for the licensed At Haüss (see app/fonts/LICENSE-NOTE.md).
      config.resolve.alias[path.join(here, "app/fonts.ts")] = path.join(here, "app/fonts.hauss.ts");
    }
    // The alias is not part of webpack's persistent cache key; key it on the font choice.
    if (config.cache && typeof config.cache === "object") {
      config.cache.version = `${config.cache.version ?? ""}-font-${useHauss ? "hauss" : "hanken"}`;
    }
    return config;
  },
  async redirects() {
    // The children's domains point at this project and send every request to the
    // family root for now (307, so they can get their own pages later).
    const kidsDomains = ["valentinwild\\.de", "leoniewild\\.de"].map((host) => ({
      source: "/:path*",
      has: [{ type: "host", value: `(www\\.)?${host}` }],
      destination: "https://www.wirwilden.de/",
      permanent: false,
    }));

    // Legacy hosts (old WordPress, old brand): every link lands on the personal site, for good.
    const legacyHosts = ["wilderserver\\.de", "dasnachtwerk\\.de"].map((host) => ({
      source: "/:path*",
      has: [{ type: "host", value: `(www\\.)?${host}` }],
      destination: "https://www.wirwilden.de/johannes",
      permanent: true,
    }));

    return [
      ...kidsDomains,
      ...legacyHosts,
      // Legal pages belong to the domain and live at the root.
      { source: "/johannes/impressum", destination: "/impressum", permanent: true },
      { source: "/johannes/datenschutz", destination: "/datenschutz", permanent: true },
    ];
  },
};

export default nextConfig;
