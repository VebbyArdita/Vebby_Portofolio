export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  type: "Work" | "Internship" | "Organization" | "Certification";
  description: string[];
}

export interface ProjectItem {
  slug: string;
  title: string;
  subtitle: string;
  category: "Game Development" | "Web Development";
  period: string;
  role: string;
  description: string;
  highlights: string[];
  techStack: string[];
  coverImage?: string;
  gallery?: {
    src: string;
    caption: string;
  }[];
  terminalCommand?: string;
}

export interface SkillGroup {
  category: string;
  items: {
    name: string;
    detail: string;
  }[];
}

export interface AchievementItem {
  badge: string;
  metric: string;
  title: string;
  subtitle: string;
}

export const profileData = {
  name: "Vebby Ardita Manalu",
  shortName: "VEBBY ARDITA",
  headline: "IT & Administration, based in Manado",
  availability: "Terbuka untuk posisi IT, Web Development, dan Administrasi",
  summary:
    "Lulusan Sistem Informasi Universitas Sam Ratulangi (IPK 3.96) dengan pengalaman di pengembangan web, game edukasi berbasis Unity, dan administrasi produksi tambang. Bersertifikat Junior Web Developer (BNSP). Teliti, mudah beradaptasi, dan senang bekerja dalam tim.",
  location: "Manado, Sulawesi Utara",
  phone: "+62 823 6186 7100",
  whatsappUrl: "https://wa.me/6282361867100",
  email: "vebbyarditamanalu@gmail.com",
  linkedinName: "Vebby Ardita Manalu",
  linkedinUrl: "https://www.linkedin.com/in/vebby-ardita-manalu/",
  profilePhoto: "/projects/vebby-profile.jpg",
  education: {
    university: "Universitas Sam Ratulangi",
    degree: "S1 Sistem Informasi",
    period: "2022 - 2026",
    gpa: "3.96",
    graduated: "Lulus Mei 2026",
  },
};

export const experiences: ExperienceItem[] = [
  {
    id: "sma-admin",
    role: "Production Admin",
    company: "PT Samudera Mulia Abadi",
    period: "Sep - Nov 2026",
    type: "Work",
    description: [
      "Melakukan pencatatan dan rekapitulasi harian data produksi tambang secara akurat.",
      "Menyusun laporan operasional berkala dan mengelola kelengkapan dokumen administrasi lapangan.",
    ],
  },
  {
    id: "makasiow-intern",
    role: "Web Developer Intern",
    company: "PT Media Makasiow Indonesia",
    period: "Jul - Agu 2025",
    type: "Internship",
    description: [
      "Berkontribusi dalam pengembangan website wisata regional Visit Suluttenggo.",
      "Membangun fitur modul Travel Agent serta merancang komponen antarmuka UI di Figma.",
    ],
  },
  {
    id: "himsifor",
    role: "Bendahara Umum",
    company: "Himpunan Mahasiswa Sistem Informasi (HIMSIFOR)",
    period: "Feb 2025 - Mar 2026",
    type: "Organization",
    description: [
      "Mengelola pencatatan anggaran, arus kas, dan laporan pertanggungjawaban keuangan organisasi.",
      "Berkoordinasi dengan panitia kegiatan akademik maupun kemahasiswaan untuk distribusi dana.",
    ],
  },
  {
    id: "bnsp-cert",
    role: "Junior Web Developer",
    company: "Badan Nasional Sertifikasi Profesi (BNSP)",
    period: "Sertifikasi Kompetensi",
    type: "Certification",
    description: [
      "Tersertifikasi secara nasional dalam standar kompetensi pengembangan aplikasi web terstruktur.",
    ],
  },
];

export const projects: ProjectItem[] = [
  {
    slug: "ecosort-city-savior",
    title: "ECOSORT: CITY SAVIOR",
    subtitle: "Game Edukasi Pemilahan Sampah Berbasis WebGL",
    category: "Game Development",
    period: "Selesai Mei 2026 - Proyek Skripsi",
    role: "Game Developer & UI Designer",
    description:
      "Game edukasi interaktif berbasis web (WebGL) yang dirancang untuk mengajarkan cara memilah sampah rumah tangga secara tepat melalui simulasi permainan yang menarik.",
    highlights: [
      "Membangun seluruh mekanik gameplay, sistem skor, dan logika permainan menggunakan Unity & C#.",
      "Merancang antarmuka pengguna (UI) game serta konten edukasi lingkungan dari nol.",
      "Proyek Skripsi S1 Sistem Informasi, Universitas Sam Ratulangi.",
    ],
    techStack: ["Unity", "C#", "WebGL", "UI Design"],
    terminalCommand: "$ build EcoSort --webgl  -> build complete",
  },
  {
    slug: "visit-suluttenggo",
    title: "VISIT SULUTTENGGO",
    subtitle: "Portal Wisata Sulawesi Utara & Gorontalo",
    category: "Web Development",
    period: "2025 - Magang Industri",
    role: "Web Developer & UI/UX Designer",
    description:
      "Platform informasi pariwisata regional Sulawesi Utara dan Gorontalo yang mempermudah wisatawan menemukan destinasi unggulan dan layanan biro perjalanan.",
    highlights: [
      "Ikut membangun dan mengintegrasikan fitur modul Travel Agent untuk direktori penyedia wisata.",
      "Merancang komponen antarmuka responsif di Figma serta mengelola struktur konten destinasi.",
    ],
    techStack: ["JavaScript", "HTML & CSS", "Figma", "Web Development"],
  },
  {
    slug: "sipanca",
    title: "SIPANCA",
    subtitle:
      "Platform Monitoring Projek Penguatan Profil Pelajar Pancasila (P5)",
    category: "Web Development",
    period: "2024 - Proyek Kompetisi Nasional",
    role: "Web Developer",
    description:
      "Platform berbasis web yang membantu sekolah memantau, mendokumentasikan, dan mengevaluasi pelaksanaan Projek Penguatan Profil Pelajar Pancasila (P5).",
    highlights: [
      "Menyediakan alur pemantauan progres kegiatan P5 yang terstruktur bagi guru dan siswa.",
      "Dikembangkan sebagai bagian dari delegasi karya inovasi pendidikan tingkat nasional.",
    ],
    techStack: ["JavaScript", "Node.js", "MySQL", "HTML & CSS"],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Development",
    items: [
      {
        name: "C# & Unity",
        detail: "Game edukasi dan aplikasi interaktif WebGL",
      },
      {
        name: "JavaScript & Node.js",
        detail: "Logika web dan pengembangan backend",
      },
      {
        name: "HTML & CSS",
        detail: "Struktur halaman dan tampilan antarmuka responsif",
      },
    ],
  },
  {
    category: "Data & Office",
    items: [
      {
        name: "Python & MySQL",
        detail: "Olah data terstruktur dan manajemen basis data",
      },
      {
        name: "Microsoft Excel",
        detail: "Input, validasi, dan rekap data produksi tambang",
      },
      {
        name: "Microsoft Office",
        detail: "Penyusunan laporan operasional & dokumen administrasi",
      },
    ],
  },
  {
    category: "Design & Soft Skills",
    items: [
      { name: "Figma", detail: "Perancangan wireframe dan desain UI/UX" },
      {
        name: "Problem Solving",
        detail: "Analisis teliti dan berorientasi pada detail data",
      },
      {
        name: "Team Collaboration",
        detail: "Terbiasa bekerja lintas tim dan organisasi kampus",
      },
    ],
  },
];

export const achievements: AchievementItem[] = [
  {
    badge: "Akademik",
    metric: "3.96",
    title: "IPK S1 Sistem Informasi",
    subtitle: "Universitas Sam Ratulangi, lulus Mei 2026",
  },
  {
    badge: "Sertifikasi",
    metric: "BNSP",
    title: "Junior Web Developer",
    subtitle: "Sertifikat kompetensi nasional bidang pengembangan web",
  },
  {
    badge: "Delegasi 2024",
    metric: "3 Ajang",
    title: "Kompetisi Tingkat Nasional",
    subtitle: "Wakil kampus di LIDM, GEMASTIK, dan Abdidaya PPK Ormawa",
  },
];
