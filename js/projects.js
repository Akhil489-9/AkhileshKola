// All portfolio content lives here. To add a project, copy an entry and edit it.
// Rule: describe the work only — never client, brand, venue or employer names.
//
// Images decide which page a project appears on:
//   kind "photo"   -> Built work page (index.html)   — finished, polished photos only
//   kind "drawing" -> Drawings page (drawings.html)  — shop drawings, title block removed
//   kind "model"   -> Drawings page                  — 3D CAD models
// A project with no images of a page's kind is simply not shown on that page.
// category: "Architectural Millwork" | "Trade Show Booths" | "Stages & Scenic" | "Retail Fixtures"
window.PROJECTS = [
  {
    id: "feature-cube-wall",
    title: "Illuminated Cube Feature Wall",
    category: "Architectural Millwork",
    year: 2022,
    role: "Detailing & CNC programming",
    scope: "Two-storey staggered cube wall with concealed LED lighting and planters",
    software: ["Microvellum", "AutoCAD"],
    summary:
      "A floor-to-ceiling wall of offset back-lit cubes with planter pockets and a flush " +
      "storage base, built as modular boxes so it could be lifted into place and aligned fast.",
    images: [
      { src: "img/feature-cube-wall.jpg", alt: "Wall of staggered white back-lit cubes with trailing plants", kind: "photo" },
    ],
  },
  {
    id: "experience-centre",
    title: "Branch Experience Centre",
    category: "Retail Fixtures",
    year: 2022,
    role: "Detailing & CNC programming",
    scope: "Lattice ceiling, curved immersive pod, oak counters and framed display walls",
    software: ["SolidWorks", "SWOOD", "AutoCAD"],
    summary:
      "A woven wood lattice ceiling that flows down the walls, a curved immersive projection " +
      "pod, a long oak counter and framed moss-wall surrounds for large LED displays.",
    images: [
      { src: "img/experience-pod-2.jpg", alt: "Curved oak immersive pod glowing with projected stars under a lattice ceiling", kind: "photo" },
      { src: "img/experience-lattice.jpg", alt: "Woven wood lattice ceiling over a curved pod and oak counter", kind: "photo" },
      { src: "img/experience-mars-wall.jpg", alt: "Framed moss wall surrounding a wide LED screen with a VR station", kind: "photo" },
    ],
  },
  {
    id: "reaction-wall",
    title: "Interactive Reaction-Game Wall",
    category: "Experiential",
    year: 2023,
    role: "Detailing & CNC programming",
    scope: "Freestanding brand-activation game with a bent-tube steel frame and light-up targets",
    software: ["SolidWorks", "SWOOD"],
    summary:
      "A freestanding reaction-time game for a brand activation: bent and welded tube frame, " +
      "routed face panel and embedded light-up targets, designed to tour between events.",
    images: [
      { src: "img/reaction-wall.jpg", alt: "Freestanding game wall with a gold tube frame and round light-up targets", kind: "photo" },
    ],
  },
  {
    id: "holiday-arcade",
    title: "Holiday Photo Experience",
    category: "Experiential",
    year: 2023,
    role: "Detailing & CNC programming",
    scope: "Nested arch arcade, illuminated star and counters for a seasonal installation",
    software: ["SolidWorks", "SWOOD"],
    summary:
      "A tunnel of nested printed arches leading to a photo set, crowned with a lit star — " +
      "designed to install overnight in a busy public concourse.",
    images: [
      { src: "img/holiday-arcade.jpg", alt: "Tunnel of decorative arches on a red carpet under an illuminated star", kind: "photo" },
    ],
  },
  {
    id: "luxury-popup",
    title: "Luxury Pop-up Booth",
    category: "Trade Show Booths",
    year: 2023,
    role: "Detailing & CNC programming",
    scope: "Stone-finish portal booth with lit shelving and an oak cash desk",
    software: ["SolidWorks", "Microvellum"],
    summary:
      "A freestanding stone-finish portal with back-lit oak shelving, steel display frames and " +
      "a solid oak desk, built in sections to go up overnight on a live retail floor.",
    images: [
      { src: "img/luxury-popup.jpg", alt: "Stone-finish pop-up booth with lit oak shelves and an oak desk", kind: "photo" },
    ],
  },
  {
    id: "window-display",
    title: "Concentric Ring Window Display",
    category: "Retail Fixtures",
    year: 2022,
    role: "Detailing & CNC programming",
    scope: "Layered ring portal with an illuminated globe for a flagship store window",
    software: ["SolidWorks", "SWOOD"],
    summary:
      "Nested CNC-cut rings stepping back into a lit globe, with planted vines spiralling " +
      "through the layers to pull people toward the window.",
    images: [
      { src: "img/window-display.jpg", alt: "Store window with concentric green rings framing an illuminated globe", kind: "photo" },
    ],
  },
  {
    id: "luxury-hotel",
    title: "Luxury Hotel Interiors",
    category: "Architectural Millwork",
    year: 2023,
    role: "3D modelling & detailing",
    scope: "Lobby feature walls, trellis ceilings and fitness-floor panelling",
    software: ["SolidWorks", "Microvellum", "AutoCAD"],
    summary:
      "Full 3D models of two hotel lobbies and an upper-floor fitness and wellness area, " +
      "modelled panel by panel so every part could be cut and installed in sequence.",
    images: [
      { src: "img/hotel-lobby-model.jpg", alt: "Exploded 3D model of a hotel lobby with feature walls and trellis ceiling", kind: "model" },
      { src: "img/hotel-ceiling-trellis.jpg", alt: "Plan view of a slatted wood trellis ceiling around a square opening", kind: "model" },
      { src: "img/hotel-ceiling-panels.jpg", alt: "3D model of perforated acoustic ceiling panels over a fitness room", kind: "model" },
    ],
  },
  {
    id: "medical-booth-ramp",
    title: "Accessible Ramp & Monitor Towers",
    category: "Trade Show Booths",
    year: 2026,
    role: "Production design & shop drawings",
    scope: "Circular platform with ramp and handrail, plus large-format monitor towers",
    software: ["SolidWorks"],
    summary:
      "An accessible circular demo platform with a millwork ramp, metal handrail and anti-slip " +
      "details, alongside freestanding towers housing 98-inch screens with concealed ventilation.",
    images: [
      { src: "img/booth-ramp-iso.jpg", alt: "Isometric shop drawing of a circular platform with ramp and handrail", kind: "drawing" },
      { src: "img/booth-ramp-framing.jpg", alt: "Framing plan of the circular platform and ramp substructure", kind: "drawing" },
      { src: "img/booth-monitor-towers.jpg", alt: "Shop drawing of single and double-sided monitor towers", kind: "drawing" },
    ],
  },
  {
    id: "demo-arches",
    title: "Arched Demo Stations",
    category: "Trade Show Booths",
    year: 2026,
    role: "Production design & shop drawings",
    scope: "Arched demo walls with edge lighting and bent-ply tops",
    software: ["SolidWorks"],
    summary:
      "Freestanding arched demo stations built from flat ply panels and a bent-wood arch, " +
      "fully dimensioned and exploded for the shop floor.",
    images: [
      { src: "img/booth-arch-exploded.jpg", alt: "Exploded shop drawing of an arched demo station with material callouts", kind: "drawing" },
    ],
  },
  {
    id: "event-main-stage",
    title: "Event Main Stage & Hero Wall",
    category: "Stages & Scenic",
    year: 2026,
    role: "Production design & shop drawings",
    scope: "2,560 sq ft stage deck with thrust, stairs and a 30 ft framed hero wall",
    software: ["SolidWorks"],
    summary:
      "Main stage for a large live event: a modular deck with a thrust and stairs, and a " +
      "framed fabric hero wall secured to truss, exploded down to every frame and connector.",
    images: [
      { src: "img/stage-main-iso.jpg", alt: "Isometric drawing of a large stage deck with a hero wall", kind: "drawing" },
      { src: "img/stage-panel-frame.jpg", alt: "Exploded drawing of the hero wall frame panels and connectors", kind: "drawing" },
    ],
  },
  // Waiting for images — hidden until photos or drawings are added.
  {
    id: "stadium-torch",
    title: "Stadium Monument Torch",
    category: "Architectural Millwork",
    year: null,
    role: "Detailing & CNC programming",
    scope: "Illuminated landmark torch structure for a major stadium",
    software: ["SolidWorks", "AutoCAD"],
    summary:
      "A large-scale illuminated torch built as the centrepiece of a professional stadium, " +
      "with complex curved geometry broken down into buildable, CNC-cut components.",
    images: [],
  },
  {
    id: "landmark-tower",
    title: "Landmark Tower Observation Decks",
    category: "Architectural Millwork",
    year: null,
    role: "Detailing",
    scope: "Ceiling structures and finishes for observation-deck levels",
    software: ["SolidWorks", "AutoCAD"],
    summary:
      "Ceiling structures for the observation levels of a national landmark tower: curved, " +
      "segmented assemblies detailed to fit an existing circular structure.",
    images: [],
  },
];
