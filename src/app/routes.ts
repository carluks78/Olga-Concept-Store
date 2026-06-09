import { createBrowserRouter } from "react-router";
import { Root } from "./Root";
import { HomePage } from "./pages/HomePage";
import { GaleriePage } from "./pages/GaleriePage";
import { NouveautesPage } from "./pages/NouveautesPage";
import { AProposPage } from "./pages/AProposPage";
import { ContactPage } from "./pages/ContactPage";
import { MentionsLegalesPage } from "./pages/MentionsLegalesPage";
import { PolitiqueConfidentialitePage } from "./pages/PolitiqueConfidentialitePage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: "galerie", Component: GaleriePage },
      { path: "nouveautes", Component: NouveautesPage },
      { path: "a-propos", Component: AProposPage },
      { path: "contact", Component: ContactPage },
      { path: "mentions-legales", Component: MentionsLegalesPage },
      { path: "politique-de-confidentialite", Component: PolitiqueConfidentialitePage },
    ],
  },
]);
