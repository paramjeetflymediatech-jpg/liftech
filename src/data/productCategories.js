function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/&/g, "and") // Replace & with 'and'
    .replace(/[^a-z0-9-]/g, "") // Remove all non-word chars
    .replace(/--+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, ""); // Trim - from end of text
}

export const productCategories = [
  {
    title: "Forged Toplink Assemblies",
    slug: slugify("Forged Toplink Assemblies"),
    products: [
      {
        name: "Articulated Yoke Type-A",
        slug: slugify("Articulated Yoke Type-A"),
        image: "/assets/images/articulated-yoke-type-assembly.jpg",
        description: "High-strength articulated yoke suitable for a variety of tractor models; built for durability.",
      },
      {
        name: "Toplink Assembly Heavy Duty",
        slug: slugify("Toplink Assembly Heavy Duty"),
        image: "/assets/images/toplink-assembly-heavyduty.jpg",
        description: "Heavy duty toplink assembly designed for rugged agricultural applications.",
      },
      {
        name: "Toplink Assembly",
        slug: slugify("Toplink Assembly"),
        image: "/assets/images/toplink-assembly.jpg",
        description: "Standard toplink assembly compatible with most tractors; precision forged.",
      },
      {
        name: "Zetor and Ursus",
        slug: slugify("Zetor and Ursus"),
        image: "/assets/images/zetor-and-ursus(foldable-tommy-rod).jpg",
        description: "Specialized toplink assemblies for Zetor and Ursus tractors.",
      },
      {
        name: "Telescope Toplink With Hinged Lock",
        slug: slugify("Telescope Toplink With Hinged Lock"),
        image: "/assets/images/telescope-toplink-with-hinged-lock.jpg",
        description: "Telescoping toplink with hinged lock for adjustable length and secure operation.",
      },
      {
        name: "Toplink Assembly Massey Ferguson",
        slug: slugify("Toplink Assembly Massey Ferguson"),
        image: "/assets/images/toplink-assembly-Massey-Ferguson.png",
        description: "OEM-style toplink for Massey Ferguson tractors.",
      },
      {
        name: "Toplink Assembly John Deere",
        slug: slugify("Toplink Assembly John Deere"),
        image: "/assets/images/toplink-assembly-JOHN-DEERE.png",
        description: "Direct replacement toplink for John Deere equipment.",
      },
      {
        name: "Toplink Assembly Ford",
        slug: slugify("Toplink Assembly Ford"),
        image: "/assets/images/toplink-assembly-FORD.png",
        description: "Ford-compatible toplink assembly with corrosion-resistant finish.",
      },
    ],
  },
  {
    title: "Hooks",
    slug: slugify("Hooks"),
    products: [
      {
        name: "Grab Hook",
        slug: slugify("Grab Hook"),
        image: "/assets/images/grab-hook.png",
        description: "Durable grab hook ideal for chain securing and towing.",
      },
      {
        name: "Lower Link Hook",
        slug: slugify("Lower Link Hook"),
        image: "/assets/images/lower-link-hook.png",
        description: "Fits into lower link arms to facilitate quick attachment.",
      },
      {
        name: "Rapid Hook",
        slug: slugify("Rapid Hook"),
        image: "/assets/images/rapid-hook.jpg",
        description: "Quick-release hook for fast implement changes.",
      },
      {
        name: "Lower Link Repair Kit",
        slug: slugify("Lower Link Repair Kit"),
        image: "/assets/images/lower-link-repair-kit.png",
        description: "Complete kit for lower link hook repair and maintenance.",
      },
      {
        name: "Rapid Hook Repair Kit",
        slug: slugify("Rapid Hook Repair Kit"),
        image: "/assets/images/rapid-hook-repair-kit.png",
        description: "Repair components for rapid hook systems.",
      },
      {
        name: "Trailer Rope Hook",
        slug: slugify("Trailer Rope Hook"),
        image: "/assets/images/trailer-rope-hook.png",
        description: "Designed for securing ropes on trailers and carts.",
      },
      {
        name: "Y-Hook",
        slug: slugify("Y-Hook"),
        image: "/assets/images/y-hook.png",
        description: "Y-shaped hook used for multiple connection points.",
      },
    ],
  },
  {
    title: "Pins",
    slug: slugify("Pins"),
    products: [
      {
        name: "Top Link Pin",
        slug: slugify("Top Link Pin"),
        image: "/assets/images/Top-link-pin.jpg",
        description: "Precision-engineered pin for top link assemblies.",
      },
      {
        name: "Red Head Handle Pin",
        slug: slugify("Red Head Handle Pin"),
        image: "/assets/images/red-head-handle-pins.jpg",
        description: "Pin with red handle for easy visibility and removal.",
      },
      {
        name: "PTO Pin Square",
        slug: slugify("PTO Pin Square"),
        image: "/assets/images/PTO-pin-square.jpg",
        description: "Square shaft power take-off pin.",
      },
      {
        name: "PTO Pin Round",
        slug: slugify("PTO Pin Round"),
        image: "/assets/images/PTO-PIN-ROUND.jpg",
        description: "Round shaft power take‑off pin.",
      },
      {
        name: "Implement Mounting Pin",
        slug: slugify("Implement Mounting Pin"),
        image: "/assets/images/pins-implementmountingpin.jpg",
        description: "Universal mounting pin for implements.",
      },
      {
        name: "Lynch Pin",
        slug: slugify("Lynch Pin"),
        image: "/assets/images/lynch-pin.jpg",
        description: "Spring‑loaded locking pin used across industries.",
      },
      {
        name: "Hitch Pin With Linch Pin",
        slug: slugify("Hitch Pin With Linch Pin"),
        image: "/assets/images/Hitch-pin-with-linch-pin.jpg",
        description: "Combination hitch and linch pin for safe towing.",
      },
      {
        name: "Coupling Pin",
        slug: slugify("Coupling Pin"),
        image: "/assets/images/couplingpin.jpg",
        description: "Pin designed to couple two components securely.",
      },
    ],
  },
  {
    title: "Jacks",
    slug: slugify("Jacks"),
    products: [
      {
        name: "Clamp Bracket",
        slug: slugify("Clamp Bracket"),
        image: "/assets/images/clamp-bracket.jpg",
        description: "Bracket used to clamp parts securely.",
      },
      {
        name: "Fixed Jack",
        slug: slugify("Fixed Jack"),
        image: "/assets/images/fixed-jack.jpg",
        description: "Non-adjustable jack for stable lifting.",
      },
      {
        name: "Ratchet Jack",
        slug: slugify("Ratchet Jack"),
        image: "/assets/images/ratchet-jack.jpg",
        description: "Jack with ratcheting mechanism for incremental lift.",
      },
      {
        name: "Square Jack",
        slug: slugify("Square Jack"),
        image: "/assets/images/square-jack.jpg",
        description: "Square threaded jack for heavy loads.",
      },
      {
        name: "Wheel Jack",
        slug: slugify("Wheel Jack"),
        image: "/assets/images/wheel-jack.jpg",
        description: "Jack with wheel for easy movement.",
      },
    ],
  },
  {
    title: "Disc Blades",
    slug: slugify("Disc Blades"),
    products: [
      {
        name: "Smooth Disc Blade",
        slug: slugify("Smooth Disc Blade"),
        image: "/assets/images/Smooth.png",
        description: "Sleek disc blade for uniform soil cutting.",
      },
      {
        name: "Notched Disc Blade",
        slug: slugify("Notched Disc Blade"),
        image: "/assets/images/notched.png",
        description: "Notched edge helps penetrate tough ground.",
      },
    ],
  },
  {
    title: "Balls",
    slug: slugify("Balls"),
    products: [
      {
        name: "Tow Ball / Hitch Ball",
        slug: slugify("Tow Ball / Hitch Ball"),
        image: "/assets/images/towball-hitchball.png",
        description: "High-strength tow balls and hitch balls in various sizes.",
      },
      {
        name: "Top Link Ball",
        slug: slugify("Top Link Ball"),
        image: "/assets/images/top-link-ball.png",
        description: "Forged balls for top link ends.",
      },
      {
        name: "Lower Link Ball",
        slug: slugify("Lower Link Ball"),
        image: "/assets/images/lower-link-ball-edit.png",
        description: "Replacement balls for lower link arms.",
      }
    ]
  },
  {
    title: "Three Point Linkage",
    slug: slugify("Three Point Linkage"),
    products: [
      {
        name: "3 Point Linkage Kit",
        slug: slugify("3 Point Linkage Kit"),
        image: "/assets/images/3 pnt linkage _left.jpg",
        description: "Complete three-point linkage kits for various tractor models.",
      },
      {
        name: "Levelling Arm Kit",
        slug: slugify("Levelling Arm Kit"),
        image: "/assets/images/Levelling-arm-kit.jpg",
        description: "Adjustable leveling arm kits for precise implement control.",
      }
    ]
  },
  {
    title: "Weld on Ends",
    slug: slugify("Weld on Ends"),
    products: [
      {
        name: "Weld-on End Straight",
        slug: slugify("Weld-on End Straight"),
        image: "/assets/images/weld-on-end-straight.png",
        description: "Straight weld-on ends for custom fabrication and repairs.",
      },
      {
        name: "Weld-on End Bent",
        slug: slugify("Weld-on End Bent"),
        image: "/assets/images/weld-on-ends-bent.jpg",
        description: "Bent weld-on ends for specific angle requirements.",
      }
    ]
  },
  {
    title: "Hay Loader Tines",
    slug: slugify("Hay Loader Tines"),
    products: [
      {
        name: "Curved Tines",
        slug: slugify("Curved Tines"),
        image: "/assets/images/curved-tines.png",
        description: "High-quality curved tines for hay loaders and balers.",
      },
      {
        name: "Straight Tine",
        slug: slugify("Straight Tine"),
        image: "/assets/images/straight-tine.png",
        description: "Durable straight tines for agricultural processing.",
      }
    ]
  },
  {
    title: "Bushes & Clevis",
    slug: slugify("Bushes & Clevis"),
    products: [
      {
        name: "Straight Clevis",
        slug: slugify("Straight Clevis"),
        image: "/assets/images/straight-clevis.png",
        description: "Heavy-duty straight clevis for secure connections.",
      },
      {
        name: "Twisted Clevis",
        slug: slugify("Twisted Clevis"),
        image: "/assets/images/twisted-clevis.png",
        description: "Twisted clevis design for specialized mounting angles.",
      },
      {
        name: "Grooved Bushes",
        slug: slugify("Grooved Bushes"),
        image: "/assets/images/grooved-bushes.png",
        description: "Precision-machined grooved bushes for pivoting joints.",
      }
    ]
  },
  {
    title: "Stabilizers",
    slug: slugify("Stabilizers"),
    products: [
      {
        name: "Stabilizer Chain Assembly",
        slug: slugify("Stabilizer Chain Assembly"),
        image: "/assets/images/stabilizer-chain-assembly.jpg",
        description: "Robust stabilizer chain assemblies to prevent implement sway.",
      },
      {
        name: "Ursus Stabilizer",
        slug: slugify("Ursus Stabilizer"),
        image: "/assets/images/Ursus-Stabilizer.jpg",
        description: "Specific stabilizers designed for Ursus series tractors.",
      }
    ]
  },
  {
    title: "Leveling Boxes",
    slug: slugify("Leveling Boxes"),
    products: [
      {
        name: "Universal Leveling Box",
        slug: slugify("Universal Leveling Box"),
        image: "/assets/images/universal-leveling-boxes.jpg",
        description: "Adjustable leveling boxes compatible with multiple tractor brands.",
      },
      {
        name: "Leveling Box Set",
        slug: slugify("Leveling Box Set"),
        image: "/assets/images/Levelling-Box-Set.jpg",
        description: "Complete leveling box sets for heavy-duty agricultural use.",
      }
    ]
  },
  {
    title: "Scarifier & Ripper",
    slug: slugify("Scarifier & Ripper"),
    products: [
      {
        name: "Ripper Shank",
        slug: slugify("Ripper Shank"),
        image: "/assets/images/ripper-shank.jpg",
        description: "High-strength ripper shanks for soil penetration and aeration.",
      },
      {
        name: "Bucket Tooth",
        slug: slugify("Bucket Tooth"),
        image: "/assets/images/bucket-tooth.jpg",
        description: "Replacement teeth for loaders and excavators.",
      }
    ]
  },
  {
    title: "Turn Buckles",
    slug: slugify("Turn Buckles"),
    products: [
      {
        name: "Standard Turnbuckle",
        slug: slugify("Standard Turnbuckle"),
        image: "/assets/images/turn-buckle.jpg",
        description: "Precision turnbuckles for adjustable length control.",
      },
      {
        name: "Rigging Screw",
        slug: slugify("Rigging Screw"),
        image: "/assets/images/rigging-screw.jpg",
        description: "High-tension rigging screws for secure stays.",
      }
    ]
  }
];
