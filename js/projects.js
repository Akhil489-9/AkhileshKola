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
    id: "tech-campus",
    title: "Tech Campus Collaboration Booths",
    category: "Architectural Millwork",
    year: 2024,
    role: "Project design & detailing",
    scope: "Eight curved, multi-level collaboration booths across six office floors",
    software: ["SolidWorks", "Microvellum", "SWOOD"],
    summary:
      "Sweeping U-shaped booths with built-in cubbies, terrazzo table tops and fluted wood " +
      "cladding, split into curved modules that travel through a working office tower and " +
      "lock together on site.",
    images: [
      { src: "img/campus-booth-1.jpg", alt: "Curved wood collaboration booth with fluted cladding in a sunlit office", kind: "photo" },
      { src: "img/campus-booth-2.jpg", alt: "Two-tier oval booth with vertical wood slat cladding", kind: "photo" },
      { src: "img/campus-booth-3.jpg", alt: "U-shaped booth with cubby shelving and pedestal tables", kind: "photo" },
    ],
  },
  {
    id: "experience-centre",
    title: "Branch Experience Centre",
    category: "Architectural Millwork",
    year: 2022,
    role: "Detailing & CNC programming",
    scope: "Lattice ceiling, curved immersive pod, feature counters and wall surrounds",
    software: ["SolidWorks", "SWOOD", "AutoCAD"],
    summary:
      "A woven wood lattice ceiling that flows down the walls, a curved immersive projection " +
      "pod, a long oak counter and framed moss-wall surrounds for large LED displays.",
    images: [
      { src: "img/experience-pod-2.jpg", alt: "Curved oak immersive pod glowing with projected stars under a lattice ceiling", kind: "photo" },
      { src: "img/experience-lattice.jpg", alt: "Woven wood lattice ceiling over a curved pod and oak counter", kind: "photo" },
      { src: "img/experience-pod.jpg", alt: "Curved wood immersive pod framed by lattice wall supports", kind: "photo" },
      { src: "img/experience-vr-wall.jpg", alt: "Lattice ceiling flowing into a framed moss wall around an LED screen", kind: "photo" },
      { src: "img/experience-mars-wall.jpg", alt: "Framed moss wall surrounding a wide LED screen with a VR station", kind: "photo" },
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
