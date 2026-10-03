export default function Page() {
  const publications = [
    {
      title:
        "Explicating miRNA-mediated regulation of inflammatory pathways in COPD, MS, and lung cancer using explainable artificial intelligence: insights from peripheral blood profiles",
      venue: "Integrative Biology (2025)",
      link: "https://doi.org/10.1093/intbio/zyaf020",
      cta: "View DOI",
      note: "Explainable AI-driven biomarker discovery across respiratory and inflammatory disease contexts.",
    },
    {
      title:
        "Explicate molecular landscape of combined pulmonary fibrosis and emphysema through explainable artificial intelligence: a comprehensive analysis of ILD and COPD interactions using RNA from whole lung homogenates",
      venue: "Medical & Biological Engineering & Computing (2024)",
      link: "https://doi.org/10.1007/s11517-024-03099-8",
      cta: "View DOI",
      note: "Interpretable analysis of CPFE, ILD, and COPD molecular interactions using transcriptomic data.",
    },
    {
      title:
        "An eXplainable AI and Conversational Decision Support System for Lung Cancer Diagnosis and Monitoring",
      venue: "Technology and Health Care / Under Review",
      link: "https://zenodo.org/records/15570514",
      cta: "View Zenodo",
      note: "LLM-integrated and explainable decision-support framework for lung cancer risk assessment and monitoring.",
    },
  ];

  const projects = [
    {
      kind: "Single-cell · Postdoctoral proposal",
      name: "DisProtCellLLM",
      subtitle: "Disease Protein-Cell Large Language Model",
      desc: "A three-tower multimodal framework for disease-aware single-cell classification. It fuses scRNA-seq expression, ESM2 protein language model embeddings and disease-contextual biological text through cross-attention. An LLM layer (Mistral 7B) then proposes protein-structure-informed drug target hypotheses.",
      poc: "On small cell lung cancer scRNA-seq (about 26.8k cells), patient-level held-out evaluation gave AUROC 0.85 for the PCA+ESM2 model, versus 0.55–0.70 for transcript-only baselines.",
      pocLabel: "Proof of concept",
      tags: ["ESM2", "Cross-attention", "scRNA-seq", "SCLC", "LLM hypotheses"],
    },
    {
      kind: "Spatial omics · Extends DisProtCellLLM",
      name: "SCOPE",
      subtitle: "Spatially Contextualized Omics with Protected Explanations",
      desc: "A five-tower framework that adds a spatial graph and histology morphology (ResNet50) to transcriptomic, protein and pathway towers. A grounding layer checks every gene an LLM proposes against the observed expression data to measure hallucination.",
      poc: "On one GeoMx DSP slide (7 ROIs), SCOPE separated morphologically similar regions by gene expression, found three unsupervised tumor microenvironment zones, and showed LLM hallucination varying from 0% in the tumor core to 30% in stroma. Full validation on 175 ROIs from 19 patients is planned.",
      pocLabel: "Exploratory proof of concept",
      tags: [
        "Spatial transcriptomics",
        "GeoMx DSP",
        "Multimodal fusion",
        "LLM grounding",
        "ES-SCLC",
      ],
    },
  ];

  const experience = [
    {
      role: "Teaching Assistant",
      org: "Delhi Technological University",
      period: "2022–2025",
      desc: "Guided B.Tech and M.Tech students in bioinformatics, machine learning, and multi-omics projects, supporting analysis workflows, model interpretation, and research writing.",
    },
    {
      role: "Lab Intern",
      org: "Imperial Life Sciences",
      period: "May 2021 – Jul 2021",
      desc: "Supported RT-PCR kit preparation and validation for COVID-19 diagnostics, with exposure to process optimization, reagent preparation, and quality control.",
    },
    {
      role: "Lab Intern",
      org: "Janakpuri Super Specialty Hospital",
      period: "May 2019 – Jul 2019",
      desc: "Worked across hematology and pathology labs, including CBC analysis, blood smear work, histopathology preparation, and routine laboratory handling.",
    },
  ];

  const conferences = [
    "Exploring the role of gut microbiota in hypertension: Insights from Machine Learning and eXplainable AI — ICCCNT (2024)",
    "Explicate Toxicity by eXplainable Artificial Intelligence — I4Tech (2022)",
    "Explainable AI: Are We There Yet? — IEEE DELCON (2022)",
    "Deep Learning: A Tool in Biomedical Science — ICONAT (2022)",
  ];

  const bookChapters = [
    "Tanwar, N., & Hasija, Y. (2024). Overview of new trends on deep learning models for diabetes risk prediction. In Internet of Things and Machine Learning for Type I and Type II Diabetes (pp. 135–146). Elsevier.",
  ];

  const skills = [
    "Explainable AI (SHAP, LIME)",
    "Machine Learning",
    "Large Language Models (LLMs)",
    "Biomedical NLP",
    "Python",
    "Omics data analysis",
    "Data analysis & visualization",
    "Biomarker discovery",
    "Research communication",
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <section className="border-b border-slate-800 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
          <div className="grid gap-10 md:grid-cols-[1.3fr_0.7fr] md:items-center">
            <div>
              <div className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-200">
                Computational Biologist • Bioinformatics Scientist • XAI • Multi-Omics & AI for Biomedicine
              </div>

              <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
                Dr. Nakul Tanwar
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
                Computational biologist focused on explainable AI, machine learning,
                large language models, and multi-omics to uncover clinically meaningful
                biomarkers, interpretable disease signatures, and translational insights
                across complex human diseases.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="/Nakul_resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl bg-cyan-400 px-5 py-3 font-medium text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:scale-[1.02]"
                >
                  Download CV
                </a>

                <a
                  href="https://linkedin.com/in/nakul-tanwar-a714a4184"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-slate-700 bg-slate-900 px-5 py-3 font-medium text-slate-100 transition hover:border-cyan-400/40 hover:text-cyan-200"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 shadow-2xl shadow-black/20">
              <div className="grid gap-4">
                <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
                  <p className="text-sm text-slate-400">PhD Thesis</p>
                  <p className="mt-2 text-base leading-7 text-slate-200">
                    An Integrated Approach Towards the Identification of Novel Biomarkers in Respiratory Disorders
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
                  <p className="text-sm text-slate-400">Recognition</p>
                  <p className="mt-2 text-base leading-7 text-slate-200">
                    Commendable Research Award, DTU Research & Innovation Excellence Awards 2025
                  </p>
                  <p className="mt-2 text-base leading-7 text-slate-200">
                    Commendable Research Award, DTU Research & Innovation Excellence Awards 2026
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-16 md:px-10">
        <div className="rounded-[2rem] border border-slate-800 bg-slate-900/50 p-8">
          <h2 className="text-2xl font-semibold">Featured Projects</h2>
          <p className="mt-2 text-slate-400">
            Proof-of-concept work in multimodal, explainable AI for disease biology.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <div
                key={index}
                className="rounded-3xl border border-slate-800 bg-slate-950/60 p-6"
              >
                <p className="text-sm uppercase tracking-[0.2em] text-cyan-200">
                  {project.kind}
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-white">
                  {project.name}
                </h3>
                <p className="mt-1 text-sm text-cyan-300">({project.subtitle})</p>
                <p className="mt-4 leading-7 text-slate-300">{project.desc}</p>
                <p className="mt-4 leading-7 text-slate-300">
                  <span className="text-slate-400">{project.pocLabel}: </span>
                  {project.poc}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16 md:px-10">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-6">
            <h2 className="text-xl font-semibold">About</h2>
            <p className="mt-4 leading-7 text-slate-300">
              I work on interpretable and translational computational biology, with
              emphasis on explainable machine learning, multi-omics analysis, and
              LLM-supported biomedical workflows. My research aims to uncover
              clinically relevant disease signatures and improve trust in AI-enabled
              healthcare systems.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-6">
            <h2 className="text-xl font-semibold">Research Themes</h2>
            <ul className="mt-4 space-y-3 text-slate-300">
              <li>• Biomarker discovery in respiratory disorders</li>
              <li>• Explainable AI for biological interpretation</li>
              <li>• LLM integration for biomedical decision support</li>
              <li>• Multi-omics and transcriptomic analysis</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-6">
            <h2 className="text-xl font-semibold">Education</h2>
            <div className="mt-4 space-y-4 text-slate-300">
              <div>
                <p className="font-medium text-white">Ph.D. in Biotechnology</p>
                <p>Delhi Technological University • 2022–2026</p>
              </div>
              <div>
                <p className="font-medium text-white">M.Sc. Biotechnology</p>
                <p>Delhi Technological University • 2020–2022</p>
              </div>
              <div>
                <p className="font-medium text-white">B.Sc. (Hons.) Biotechnology</p>
                <p>Amity University, Gurugram • 2017–2020</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-6 md:px-10">
        <div className="rounded-[2rem] border border-slate-800 bg-slate-900/50 p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold">Selected Publications</h2>
              <p className="mt-2 text-slate-400">
                Research spanning XAI, biomarker discovery, respiratory disease biology,
                and AI-enabled clinical support.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-5">
            {publications.map((pub, index) => (
              <div
                key={index}
                className="rounded-3xl border border-slate-800 bg-slate-950/60 p-6"
              >
                <p className="text-sm uppercase tracking-[0.2em] text-cyan-200">
                  {pub.venue}
                </p>
                <h3 className="mt-2 text-xl font-medium leading-8 text-white">
                  {pub.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-300">{pub.note}</p>
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200 transition hover:bg-cyan-400/15"
                >
                  {pub.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-slate-800 bg-slate-900/50 p-8">
            <h2 className="text-2xl font-semibold">Experience</h2>
            <div className="mt-8 space-y-5">
              {experience.map((item, index) => (
                <div
                  key={index}
                  className="rounded-3xl border border-slate-800 bg-slate-950/60 p-6"
                >
                  <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                    <h3 className="text-xl font-medium text-white">{item.role}</h3>
                    <span className="text-sm text-slate-400">{item.period}</span>
                  </div>
                  <p className="mt-1 text-cyan-200">{item.org}</p>
                  <p className="mt-3 leading-7 text-slate-300">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[2rem] border border-slate-800 bg-slate-900/50 p-8">
              <h2 className="text-2xl font-semibold">Skills</h2>
              <div className="mt-6 flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="rounded-full border border-slate-700 bg-slate-950/70 px-4 py-2 text-sm text-slate-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-800 bg-slate-900/50 p-8">
              <h2 className="text-2xl font-semibold">Patent & Recognition</h2>

              <div className="mt-6 rounded-3xl border border-slate-800 bg-slate-950/60 p-6">
                <p className="text-sm uppercase tracking-[0.2em] text-cyan-200">
                  Design Patent
                </p>
                <h3 className="mt-2 text-lg font-medium text-white">
                  Portable Food Spoilage Detection Device
                </h3>
                <p className="mt-3 leading-7 text-slate-300">
                  Dual-sensor (gas + TDS/pH) system for real-time food spoilage detection.
                  Application No. 461910-001 • Status: FER Review (2025)
                </p>
              </div>

              <div className="mt-4 rounded-3xl border border-slate-800 bg-slate-950/60 p-6">
                <p className="text-sm uppercase tracking-[0.2em] text-cyan-200">
                  Award
                </p>
                <p className="mt-2 leading-7 text-slate-300">
                  Commendable Research Award, DTU Research & Innovation Excellence Awards 2025
                </p>
                <p className="mt-2 leading-7 text-slate-300">
                  Commendable Research Award, DTU Research & Innovation Excellence Awards 2026
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16 md:px-10">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-[2rem] border border-slate-800 bg-slate-900/50 p-8">
            <h2 className="text-2xl font-semibold">IEEE Conferences</h2>
            <ul className="mt-6 space-y-4 text-slate-300">
              {conferences.map((item, index) => (
                <li
                  key={index}
                  className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4 leading-7"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <div className="rounded-[2rem] border border-slate-800 bg-slate-900/50 p-8">
              <h2 className="text-2xl font-semibold">Book Chapter</h2>
              <ul className="mt-6 space-y-4 text-slate-300">
                {bookChapters.map((item, index) => (
                  <li
                    key={index}
                    className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4 leading-7"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[2rem] border border-slate-800 bg-slate-900/50 p-8">
              <h2 className="text-2xl font-semibold">Let&apos;s Connect</h2>
              <p className="mt-4 leading-7 text-slate-300">
                I am interested in research, postdoctoral, translational bioinformatics,
                and AI-for-biomedicine opportunities where interpretable machine learning
                and computational biology can drive meaningful impact.
              </p>

              <div className="mt-8 space-y-4 text-slate-200">
                <p>
                  <span className="text-slate-400">Email:</span>{" "}
                  <a
                    href="mailto:nakultanwar_2k22phdbt507@dtu.ac.in"
                    className="text-cyan-200 hover:underline"
                  >
                    nakultanwar_2k22phdbt507@dtu.ac.in / tbret41@gmail.com
                  </a>
                </p>

                <p>
                  <span className="text-slate-400">Phone:</span> +91-9810769156
                </p>

                <p>
                  <span className="text-slate-400">LinkedIn:</span>{" "}
                  <a
                    href="https://linkedin.com/in/nakul-tanwar-a714a4184"
                    target="_blank"
                    rel="noreferrer"
                    className="text-cyan-200 hover:underline"
                  >
                    linkedin.com/in/nakul-tanwar-a714a4184
                  </a>
                </p>

                <p>
                  <span className="text-slate-400">ORCID:</span>{" "}
                  <a
                    href="https://orcid.org/0009-0006-2520-1177"
                    target="_blank"
                    rel="noreferrer"
                    className="text-cyan-200 hover:underline"
                  >
                    orcid.org/0009-0006-2520-1177
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}