<template>
  <div class="portfolio">
    <canvas ref="bgCanvas" class="bg-canvas"></canvas>

    <!-- ═══════════════ NAVBAR ═══════════════ -->
    <header class="navbar" :class="{ 'navbar--scrolled': isScrolled }">
      <div class="navbar__brand">
        <img src="./assets/profile.jpeg" alt="AM" class="navbar__avatar">
        <div>
          <div class="navbar__name">Avinash Mishra</div>
          <div class="navbar__subtitle">AI Leader · Data Scientist</div>
        </div>
      </div>
      <button class="navbar__toggle" @click="mobileOpen = !mobileOpen" :class="{ 'is-open': mobileOpen }" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
      <nav class="navbar__nav" :class="{ 'is-open': mobileOpen }">
        <a v-for="item in navItems" :key="item.id" :href="'#' + item.id" class="navbar__link" @click="mobileOpen = false">
          <i :class="'fa ' + item.icon"></i>{{ item.label }}
        </a>
      </nav>
    </header>

    <main>
      <!-- ═══════════════ HERO ═══════════════ -->
      <section id="hero" class="hero">
        <div class="hero__content">
          <p class="hero__greeting">Hello World, I'm</p>
          <h1 class="hero__name">Avinash <span class="text-gradient">Mishra</span></h1>
          <div class="hero__roles">
            <span class="role-chip" v-for="r in roles" :key="r">{{ r }}</span>
          </div>
          <p class="hero__bio">
            Experienced AI leader building enterprise-scale GenAI products, RAG pipelines &amp; AI-Agent systems.
            Leading a 17-member team at India's largest bank &mdash; driving enterprise AI transformation.
          </p>
          <div class="hero__stats">
            <div class="hero__stat" v-for="s in heroStats" :key="s.label">
              <div class="hero__stat-val">{{ s.val }}</div>
              <div class="hero__stat-label">{{ s.label }}</div>
            </div>
          </div>
          <div class="hero__cta">
            <a href="#contact" class="btn btn--primary">Get In Touch</a>
            <a href="https://github.com/avinash-mishra" target="_blank" class="btn btn--ghost">View GitHub</a>
          </div>
          <div class="hero__social">
            <a href="https://www.linkedin.com/in/avinash-mishra-a0846360/" target="_blank" class="social-btn" title="LinkedIn"><i class="fa fa-linkedin"></i></a>
            <a href="https://github.com/avinash-mishra" target="_blank" class="social-btn" title="GitHub"><i class="fa fa-github"></i></a>
            <a href="https://stackoverflow.com/users/avinash_mishra" target="_blank" class="social-btn" title="StackOverflow"><i class="fa fa-stack-overflow"></i></a>
            <a href="https://www.linkedin.com/in/avinash-mishra-a0846360/" target="_blank" class="social-btn" title="LinkedIn Profile"><i class="fa fa-id-badge"></i></a>
          </div>
        </div>
        <div class="hero__visual">
          <div class="hero__rings">
            <div class="ring ring--1"></div>
            <div class="ring ring--2"></div>
            <div class="ring ring--3"></div>
            <img src="./assets/profile.jpeg" alt="Avinash Mishra" class="hero__photo">
          </div>
          <div class="hero__float hero__float--1"><i class="fa fa-trophy"></i> ETHR Award 2025</div>
          <div class="hero__float hero__float--2"><i class="fa fa-star"></i> BFSI Exceller 2025</div>
          <div class="hero__float hero__float--3"><i class="fa fa-certificate"></i> Oracle GenAI Certified</div>
        </div>
      </section>

      <!-- ═══════════════ ABOUT ═══════════════ -->
      <section id="about" class="section">
        <div class="container">
          <div class="section__hdr">
            <span class="section__tag">About Me</span>
            <h2 class="section__title">Building AI That <span class="text-gradient">Matters</span></h2>
          </div>
          <div class="about__grid">
            <div class="about__text">
              <p>I'm a seasoned AI leader with <strong>12+ years</strong> of experience transforming data into enterprise intelligence. Currently managing the Analytics &amp; AI function at <strong>State Bank of India</strong> — India's largest public sector bank.</p>
              <p>My expertise spans GenAI product development, RAG pipelines, LLM-powered agent systems, and responsible AI governance. I've led AI initiatives generating billions in business value, pioneering enterprise chatbots, regulatory AI, and hyper-personalization engines.</p>
              <p>As founder of <strong>Data-Science-Trend</strong> and author of an open-source <em>Data Science Essentials</em> iPy-Book, I'm committed to democratizing AI knowledge globally.</p>
              <div class="about__facts">
                <div class="about__fact" v-for="f in aboutFacts" :key="f.label">
                  <i :class="'fa ' + f.icon" class="about__fact-icon"></i>
                  <div>
                    <strong v-if="f.url"><a :href="f.url" target="_blank" rel="noopener noreferrer" class="about__fact-link">{{ f.value }}</a></strong>
                    <strong v-else>{{ f.value }}</strong>
                    <span>{{ f.label }}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="about__cards">
              <div class="highlight-card" v-for="h in highlights" :key="h.title">
                <div class="highlight-card__emoji">{{ h.emoji }}</div>
                <h4>{{ h.title }}</h4>
                <p>{{ h.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ═══════════════ EXPERIENCE ═══════════════ -->
      <section id="experience" class="section section--alt">
        <div class="container">
          <div class="section__hdr">
            <span class="section__tag">Career Journey</span>
            <h2 class="section__title">Work <span class="text-gradient">Experience</span></h2>
          </div>
          <div class="timeline">
            <div
              class="timeline__item"
              v-for="(job, i) in jobs"
              :key="i"
              :class="{ 'timeline__item--current': job.current }"
            >
              <div class="timeline__connector">
                <div class="timeline__dot"><i :class="'fa ' + job.icon"></i></div>
              </div>
              <div class="timeline__card">
                <div class="timeline__head">
                  <div>
                    <h3 class="timeline__role">{{ job.role }}</h3>
                    <div class="timeline__company"><i class="fa fa-building-o"></i> {{ job.company }} &middot; {{ job.location }}</div>
                  </div>
                  <span class="timeline__period">{{ job.period }}</span>
                </div>
                <p class="timeline__desc">{{ job.desc }}</p>
                <ul class="timeline__highlights" v-if="job.highlights">
                  <li v-for="h in job.highlights" :key="h"><i class="fa fa-check-circle"></i> {{ h }}</li>
                </ul>
                <div class="tag-row">
                  <span class="tag" v-for="t in job.tags" :key="t">{{ t }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ═══════════════ PROJECTS ═══════════════ -->
      <section id="projects" class="section">
        <div class="container">
          <div class="section__hdr">
            <span class="section__tag">Featured Work</span>
            <h2 class="section__title">High-Impact <span class="text-gradient">Projects</span></h2>
          </div>
          <div class="projects__grid">
            <div class="project-card" v-for="p in projects" :key="p.title">
              <div class="project-card__top">
                <span class="project-card__emoji">{{ p.emoji }}</span>
                <span class="project-card__cat">{{ p.category }}</span>
              </div>
              <h3 class="project-card__title">{{ p.title }}</h3>
              <p class="project-card__desc">{{ p.desc }}</p>
              <div class="project-card__impact" v-if="p.impact">
                <i class="fa fa-bolt"></i> {{ p.impact }}
              </div>
              <div class="tag-row">
                <span class="tag tag--sm" v-for="t in p.tech" :key="t">{{ t }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ═══════════════ SKILLS ═══════════════ -->
      <section id="skills" class="section section--alt">
        <div class="container">
          <div class="section__hdr">
            <span class="section__tag">Technical Arsenal</span>
            <h2 class="section__title">Skills &amp; <span class="text-gradient">Technologies</span></h2>
          </div>
          <div class="skills__grid">
            <div class="skill-cat" v-for="cat in skillCategories" :key="cat.name">
              <div class="skill-cat__head">
                <span class="skill-cat__emoji">{{ cat.emoji }}</span>
                <h4>{{ cat.name }}</h4>
              </div>
              <div class="skill-cat__tags">
                <span class="skill-tag" v-for="s in cat.skills" :key="s">{{ s }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ═══════════════ AWARDS ═══════════════ -->
      <section id="awards" class="section">
        <div class="container">
          <div class="section__hdr">
            <span class="section__tag">Recognition</span>
            <h2 class="section__title">Awards &amp; <span class="text-gradient">Achievements</span></h2>
          </div>
          <div class="awards__grid">
            <a
              class="award-card"
              v-for="a in awardsList"
              :key="a.title"
              :class="'award-card--' + a.tier"
              :href="a.linkedinUrl || '#awards'"
              :target="a.linkedinUrl ? '_blank' : '_self'"
              :rel="a.linkedinUrl ? 'noopener noreferrer' : ''"
            >
              <div class="award-card__media">
                <img v-if="a.img" :src="a.img" :alt="a.title" class="award-card__img" />
                <div v-else class="award-card__emoji">{{ a.emoji }}</div>
              </div>
              <div class="award-card__body">
                <h4 class="award-card__title">{{ a.title }}</h4>
                <p class="award-card__desc">{{ a.desc }}</p>
                <div class="award-card__footer">
                  <span class="award-card__year">{{ a.year }}</span>
                  <span v-if="a.linkedinUrl" class="award-card__li"><i class="fa fa-linkedin"></i></span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      <!-- ═══════════════ EDUCATION ═══════════════ -->
      <section id="education" class="section section--alt">
        <div class="container">
          <div class="section__hdr">
            <span class="section__tag">Academic Foundation</span>
            <h2 class="section__title">Education &amp; <span class="text-gradient">Learning</span></h2>
          </div>
          <div class="edu__grid">
            <div class="edu-card" v-for="e in education" :key="e.degree">
              <div class="edu-card__icon">🎓</div>
              <h3>{{ e.degree }}</h3>
              <div class="edu-card__school">{{ e.school }}</div>
              <div class="edu-card__period">{{ e.period }}</div>
              <p class="edu-card__note" v-if="e.note">{{ e.note }}</p>
            </div>
          </div>
          <div class="languages">
            <h3 class="languages__title">Languages</h3>
            <div class="languages__list">
              <div class="lang-chip" v-for="l in languages" :key="l.name">
                <span class="lang-chip__flag">{{ l.flag }}</span>
                <div><strong>{{ l.name }}</strong><span>{{ l.level }}</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ═══════════════ FOOTER / CONTACT ═══════════════ -->
      <footer id="contact" class="footer">
        <div class="container">
          <h2 class="footer__heading">Let's Build Something <span class="text-gradient">Great Together</span></h2>
          <p class="footer__sub">Open for collaborations, AI consulting, and cutting-edge data science challenges</p>
          <div class="footer__links">
            <a href="https://www.linkedin.com/in/avinash-mishra-a0846360/" target="_blank" class="footer__link">
              <i class="fa fa-linkedin"></i> Connect on LinkedIn
            </a>
            <a href="https://github.com/avinash-mishra" target="_blank" class="footer__link">
              <i class="fa fa-github"></i> GitHub
            </a>
          </div>
        </div>
      </footer>
    </main>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isScrolled: false,
      mobileOpen: false,
      animFrameId: null,
      navItems: [
        { id: 'about', label: 'About', icon: 'fa-user' },
        { id: 'experience', label: 'Experience', icon: 'fa-briefcase' },
        { id: 'projects', label: 'Projects', icon: 'fa-code' },
        { id: 'skills', label: 'Skills', icon: 'fa-cogs' },
        { id: 'awards', label: 'Awards', icon: 'fa-trophy' },
        { id: 'education', label: 'Education', icon: 'fa-graduation-cap' },
        { id: 'contact', label: 'Contact', icon: 'fa-envelope' }
      ],
      roles: ['Manager · Data Scientist', 'GenAI & LLM Specialist', 'AI Agent Systems Architect'],
      heroStats: [
        { val: '17+', label: 'Team Members Led' },
        { val: '12+', label: 'Years Experience' }
      ],
      aboutFacts: [
        { icon: 'fa-map-marker', label: 'Location', value: 'Mumbai, India' },
        { icon: 'fa-briefcase', label: 'Current Role', value: 'Manager, Data Science @ SBI' },
        { icon: 'fa-linkedin', label: 'LinkedIn', value: 'linkedin.com/in/avinash-mishra-a0846360', url: 'https://www.linkedin.com/in/avinash-mishra-a0846360/' },
        { icon: 'fa-globe', label: 'Languages', value: 'English · Hindi · Japanese (N4)' }
      ],
      highlights: [
        {
          emoji: '🤖',
          title: 'GenAI Pioneer',
          desc: 'Built award-winning askSBI chatbot — India\'s first enterprise-scale AI Agent at SBI, serving 250K internal users.'
        },
        {
          emoji: '📊',
          title: 'Scale Expert',
          desc: 'Delivered enterprise-scale ML solutions with models generating significant measurable business value across banking operations.'
        },
        {
          emoji: '🏛️',
          title: 'AI Governance Leader',
          desc: 'Designed Responsible AI Framework (R-AI) for safe LLM deployment in India\'s largest regulated banking environment.'
        },
        {
          emoji: '🎯',
          title: 'Team Builder',
          desc: 'Built and leads 17-member AI Centre of Excellence. Acquired ¥25M JPY budget to build AI team from scratch in Japan.'
        }
      ],
      jobs: [
        {
          role: 'Manager (Data Science)',
          company: 'State Bank of India',
          location: 'India',
          period: 'Mar 2021 – Present',
          current: true,
          icon: 'fa-bank',
          desc: 'Leading AI Centre of Excellence, transforming SBI\'s analytics department into an enterprise GenAI powerhouse.',
          tags: ['GenAI', 'LLMs', 'RAG', 'Python', 'Azure', 'Kubernetes', 'LangChain'],
          highlights: [
            'askSBI GenAI Chatbot: 250K users · ETHR Award 2025 · BFSI Exceller Award 2025',
            'CDNA-CLV: 360° customer persona engine · Omnichannel hyper-personalization at enterprise scale',
            'Pre-approved Traders Loan: ML model targeting savings account holders with UPI patterns for SME lending',
            'Designed Responsible AI (R-AI) governance framework for LLMs in banking',
            'IIT-Bombay Technical Committee member for SBI DS Foundation Hub',
            '15+ senior recognitions from DMDs, CGMs, GMs for AI/DS excellence'
          ]
        },
        {
          role: 'Data Scientist',
          company: 'Rakuten',
          location: 'Japan',
          period: 'Dec 2020 – Feb 2021',
          icon: 'fa-shopping-cart',
          desc: 'Senior member of the Insight Analytics Group. Built predictive models for e-commerce delivery optimization.',
          tags: ['CatBoost', 'Python', 'Jupyter', 'Prediction Modeling'],
          highlights: [
            'At-home prediction model for Rakuten Ichiba last-mile delivery optimization',
            'Built multi-point data fetcher package for seamless Rakuten data source integration'
          ]
        },
        {
          role: 'Data Scientist',
          company: 'Catalina Marketing Japan (CMJ)',
          location: 'Japan',
          period: 'Jun 2018 – Nov 2020',
          icon: 'fa-line-chart',
          desc: 'Led multinational Data Science team delivering AI/ML solutions for retail and CPG clients. Managed cross-country collaborations across US, France, and Germany.',
          tags: ['Python', 'Spark', 'LightGBM', 'word2vec', 'Dash', 'Plotly', 'Scala'],
          highlights: [
            'Media Mix Tracker: OLS + LightGBM/NN blend with SHAP explanations for Mizkan & Suntory',
            'Likely Buyer model: Significant lift in campaign targeting accuracy for marketing campaigns',
            'Customer Segmentation: Automated pipeline for 90M monthly transactions',
            'New Product Launcher: ML forecaster + Dash dashboard for Suntory & Somi MFG',
            'Retail_AutoML: Industry-specific autoML platform for CPG regression & classification'
          ]
        },
        {
          role: 'Software Engineer (Data Science Lead)',
          company: 'Paradigmshift.io',
          location: 'Japan',
          period: 'Sep 2016 – May 2018',
          icon: 'fa-rocket',
          desc: 'Led multinational team building state-of-the-art NLP systems. Reported to COO. Acquired ¥25M JPY budget to expand AI capabilities from scratch.',
          tags: ['NLP', 'Python', 'Cassandra', 'Kafka', 'Airflow', 'AWS', 'Microservices'],
          highlights: [
            'RepChecker: NLP tool for hotel OTA review analysis supporting 5 languages',
            'Price RecSys: Recommendation engine for 100% room occupancy optimization',
            'Smart web crawler: Distributed architecture with Cassandra cluster storage',
            'Acquired ¥25M JPY to build and train an AI team from scratch'
          ]
        },
        {
          role: 'Software Engineer',
          company: 'Rakuten',
          location: 'Japan',
          period: 'Oct 2014 – Sep 2016',
          icon: 'fa-search',
          desc: 'Worked in Global Search Platform (GSP) team for Rakuten Ichiba. Built ML models for card lead generation and NLP-based transaction categorization.',
          tags: ['XGBoost', 'NLP', 'Java', 'Solr', 'ElasticSearch', 'Lucene', 'Cassandra'],
          highlights: [
            'XGBoost model for Rakuten Pink card lead generation (Japanese women segment)',
            'NLP pipeline for card transaction categorization (travel, groceries, utilities, etc.)'
          ]
        },
        {
          role: 'Systems Engineer',
          company: 'Infosys Ltd.',
          location: 'India',
          period: 'Mar 2011 – Aug 2012',
          icon: 'fa-database',
          desc: 'Backend engineering for healthcare data management systems and employee portal development.',
          tags: ['Java', 'Spring', 'SQL Server', 'MySQL', 'JSP', 'Stored Procedures'],
          highlights: [
            'Molina Healthcare: SQL Server database with stored procedures, triggers, and functions',
            'Employee SWAP portal: Web-based transfer management system'
          ]
        }
      ],
      projects: [
        {
          emoji: '🤖',
          category: 'GenAI Agent',
          title: 'askSBI GenAI Chatbot',
          desc: 'Award-winning enterprise AI Agent system for India\'s largest bank. Built with RAG-based retrieval, hybrid cloud (Azure + Private Cloud), agent orchestration, and enterprise-grade guardrails.',
          impact: '250K internal users · ETHR Award 2025 · BFSI Exceller Award 2025',
          tech: ['RAG', 'LangChain', 'Azure', 'ChromaDB', 'LLMs', 'FastAPI', 'Kubernetes']
        },
        {
          emoji: '🧬',
          category: 'Hyper-Personalization',
          title: 'Customer-DNA & CLV Modeling',
          desc: '360° customer persona engine for 24K+ branches. Powers omnichannel hyper-personalization at enterprise scale using advanced clustering and RFM techniques.',
          impact: 'Enterprise-scale deployment · 24K+ branches served',
          tech: ['Python', 'XGBoost', 'Clustering', 'RFM', 'Spark', 'MLflow']
        },
        {
          emoji: '💰',
          category: 'Business Growth ML',
          title: 'Pre-approved Traders Loan',
          desc: 'ML product targeting savings account holders with UPI transactions to offer SME business loans. Uses Cross-Tab, RFM, clustering and RSM techniques for precision targeting.',
          impact: 'Deployed in production FY23 · High-precision targeting for SME segment',
          tech: ['Python', 'Clustering', 'RFM', 'Cross-Tab', 'RSM', 'Spark']
        },
        {
          emoji: '⚖️',
          category: 'Regulatory AI',
          title: 'AI Governance Suite (Regulatory GPT)',
          desc: 'Suite of AI Agents: Regulatory GPT, SOP-GPT, Deceased Account Settlement Bot, Project Finance Knowledge Bot, and Contact Centre Assistant — all with responsible AI compliance.',
          impact: 'Enterprise-wide · Hallucination guardrails · Citation enforcement',
          tech: ['LLMs', 'RAG', 'Agent Orchestration', 'LlamaIndex', 'Haystack', 'R-AI Framework']
        },
        {
          emoji: '📈',
          category: 'Marketing Science',
          title: 'Media Mix Tracker (MMT)',
          desc: 'Statistical analysis tool estimating marketing tactics\' impact on sales. OLS for descriptive analysis, LightGBM/NN blend for prediction, with SHAP explanations for interpretability.',
          impact: 'Piloted for Mizkan & Suntory Japan · SHAP-driven explainability',
          tech: ['OLS', 'LightGBM', 'Neural Network', 'SHAP', 'Python', 'Plotly']
        },
        {
          emoji: '🛒',
          category: 'Customer Intelligence',
          title: 'Customer Segmentation Pipeline',
          desc: 'Automated pipeline segmenting 90 Million monthly transactions based on shopping behaviors. Powers personalized marketing campaigns. Includes Likely Buyer model for CPG clients.',
          impact: '90M monthly transactions · ~17% higher conversions with Likely Buyer model',
          tech: ['PySpark', 'K-means', 'word2vec', 'Hadoop', 'Scala', 'Python']
        }
      ],
      skillCategories: [
        {
          emoji: '🤖',
          name: 'GenAI & LLM Frameworks',
          skills: ['LangChain', 'LlamaIndex', 'Haystack', 'SmolAgents', 'AutoGen', 'CrewAI', 'OpenAI GPT', 'Gemini', 'vLLM', 'Ollama', 'HuggingFace Transformers']
        },
        {
          emoji: '🕵️',
          name: 'AI Agent Systems',
          skills: ['MCP', 'A2A Protocol', 'Function Calling', 'Prompt Orchestration', 'VLMs', 'OCR (Tesseract, LayoutLM, Donut)', 'Multimodal AI']
        },
        {
          emoji: '🔍',
          name: 'RAG & Vector Search',
          skills: ['ChromaDB', 'Weaviate', 'FAISS', 'CosmosDB', 'ElasticSearch', 'Solr', 'Apache Lucene']
        },
        {
          emoji: '🧪',
          name: 'Data Science & ML',
          skills: ['Python', 'Scikit-Learn', 'TensorFlow', 'PyTorch', 'Keras', 'XGBoost', 'LightGBM', 'MLflow', 'PyCaret', 'Prophet', 'Spark MLlib', 'NLP / NLTK']
        },
        {
          emoji: '☁️',
          name: 'Cloud & DevSecOps',
          skills: ['Azure Cloud', 'AWS', 'GCP', 'DigitalOcean', 'Kubernetes', 'Docker', 'Jenkins', 'CI/CD', 'Airflow', 'Kafka']
        },
        {
          emoji: '🗄️',
          name: 'Big Data & Databases',
          skills: ['Apache Spark', 'Hadoop', 'Hive', 'Kafka', 'Cassandra', 'MongoDB', 'MySQL', 'Redis', 'Oracle DB', 'IBM DB2', 'Netezza']
        },
        {
          emoji: '📊',
          name: 'Visualization & BI',
          skills: ['Tableau', 'DOMO', 'Matplotlib', 'Kibana', 'Dash by Plotly', 'Seaborn']
        },
        {
          emoji: '⚡',
          name: 'Languages & Web Frameworks',
          skills: ['Python', 'SQL', 'Scala', 'R', 'Java', 'JavaScript', 'Bash', 'PHP', 'FastAPI', 'Flask', 'Django', 'VueJS', 'Node.js']
        }
      ],
      awardsList: [
        {
          emoji: '🏆',
          tier: 'gold',
          title: 'ETHR Award 2025',
          desc: 'Best Advance in Generative AI Solutions for askSBI chatbot — India\'s first enterprise-scale AI Agent serving 250K users.',
          year: '2025',
          img: null,
          linkedinUrl: 'https://www.linkedin.com/in/avinash-mishra-a0846360/details/honors/'
        },
        {
          emoji: '🥇',
          tier: 'gold',
          title: 'BFSI Exceller Award 2025',
          desc: 'For building a Generative AI model in hybrid cloud architecture at State Bank of India.',
          year: '2025',
          img: null,
          linkedinUrl: 'https://www.linkedin.com/in/avinash-mishra-a0846360/details/honors/'
        },
        {
          emoji: '📜',
          tier: 'blue',
          title: 'Oracle Certified GenAI Professional',
          desc: 'Official Oracle certification in Generative AI and large language model technologies.',
          year: '2024',
          img: require('./assets/awards/oracle-genai-badge.png'),
          linkedinUrl: 'https://www.linkedin.com/in/avinash-mishra-a0846360/details/certifications/'
        },
        {
          emoji: '⭐',
          tier: 'silver',
          title: 'Excellence Certificate — askSBI',
          desc: 'Certificate of Excellence for building the first enterprise-scale AI Agent at State Bank of India.',
          year: '2023',
          img: null,
          linkedinUrl: 'https://www.linkedin.com/in/avinash-mishra-a0846360/details/honors/'
        },
        {
          emoji: '🏛️',
          tier: 'blue',
          title: 'IIT-Bombay Technical Committee',
          desc: 'Technical Committee member to establish the SBI Foundation Hub for Data Science & Analytics with IIT-Bombay.',
          year: '2023',
          img: null,
          linkedinUrl: 'https://www.linkedin.com/in/avinash-mishra-a0846360/'
        },
        {
          emoji: '💪',
          tier: 'silver',
          title: 'Hacktoberfest 2019 Winner',
          desc: 'Winner among 154,466 global participants in DigitalOcean\'s Hacktoberfest open-source competition.',
          year: '2019',
          img: null,
          linkedinUrl: 'https://www.linkedin.com/in/avinash-mishra-a0846360/details/honors/'
        },
        {
          emoji: '🧡',
          tier: 'blue',
          title: 'StackOverflow Champion',
          desc: '4 Gold · 30 Silver · 44 Bronze medals. Top contributor in Data Science, ML, and Python communities.',
          year: 'Ongoing',
          img: null,
          linkedinUrl: 'https://stackoverflow.com/users/story/current'
        },
        {
          emoji: '🎤',
          tier: 'silver',
          title: 'International Conference Speaker',
          desc: 'Speaker at International Star-Conference on "Neural network approaches for recommendation engines". Multiple SBI Global IT Centre Tech Talks.',
          year: 'Multiple',
          img: null,
          linkedinUrl: 'https://www.linkedin.com/in/avinash-mishra-a0846360/details/honors/'
        },
        {
          emoji: '📰',
          tier: 'blue',
          title: 'SBI Analytics Journal Award',
          desc: 'Recognized multiple times for distilling complex data insights into clear, actionable presentations for non-technical stakeholders.',
          year: 'Multiple',
          img: null,
          linkedinUrl: 'https://www.linkedin.com/in/avinash-mishra-a0846360/details/honors/'
        },
        {
          emoji: '🌟',
          tier: 'gold',
          title: '15+ SBI Senior Recognitions',
          desc: 'Awards from 2 Deputy Managing Directors, 2 Chief General Managers, 1 GM, 3 DGMs, and 8 AGMs for AI/DS excellence.',
          year: '2021–2025',
          img: null,
          linkedinUrl: 'https://www.linkedin.com/in/avinash-mishra-a0846360/details/honors/'
        }
      ],
      education: [
        {
          degree: 'Master of Technology (M.Tech)',
          school: 'VJTI Mumbai — Software Engineering',
          period: '2012 – 2014',
          note: 'Teaching Assistant: Data Structures & Algorithms, Software Engineering'
        },
        {
          degree: 'Bachelor of Engineering (B.E.)',
          school: 'RGPV Bhopal — Computer Science & Engineering',
          period: '2006 – 2010',
          note: null
        }
      ],
      languages: [
        { flag: '🇬🇧', name: 'English', level: 'Business Proficiency' },
        { flag: '🇮🇳', name: 'Hindi', level: 'Native' },
        { flag: '🇯🇵', name: 'Japanese', level: 'N4 · Basic Conversational' }
      ]
    }
  },
  mounted () {
    this.initCanvas()
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
    if (this.animFrameId) cancelAnimationFrame(this.animFrameId)
  },
  methods: {
    onScroll () {
      this.isScrolled = window.scrollY > 60
    },
    initCanvas () {
      const canvas = this.$refs.bgCanvas
      if (!canvas) return
      const ctx = canvas.getContext('2d')
      let w, h, pts

      const resize = () => {
        w = canvas.width = window.innerWidth
        h = canvas.height = window.innerHeight
      }
      resize()
      window.addEventListener('resize', resize)

      pts = Array.from({ length: 70 }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 1.5 + 0.5
      }))

      const draw = () => {
        w = canvas.width
        h = canvas.height
        ctx.clearRect(0, 0, w, h)
        for (let i = 0; i < pts.length; i++) {
          const p = pts[i]
          p.x += p.vx
          p.y += p.vy
          if (p.x < 0 || p.x > w) p.vx *= -1
          if (p.y < 0 || p.y > h) p.vy *= -1
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
          ctx.fillStyle = 'rgba(29,78,216,0.2)'
          ctx.fill()
          for (let j = i + 1; j < pts.length; j++) {
            const q = pts[j]
            const dx = p.x - q.x
            const dy = p.y - q.y
            const d = Math.sqrt(dx * dx + dy * dy)
            if (d < 130) {
              ctx.beginPath()
              ctx.moveTo(p.x, p.y)
              ctx.lineTo(q.x, q.y)
              ctx.strokeStyle = `rgba(29,78,216,${0.08 * (1 - d / 130)})`
              ctx.lineWidth = 0.6
              ctx.stroke()
            }
          }
        }
        this.animFrameId = requestAnimationFrame(draw)
      }
      draw()
    }
  }
}
</script>

<style>
/* ═══════════════════════════════════════
   CSS VARIABLES & RESET
═══════════════════════════════════════ */
:root {
  --bg: #ffffff;
  --bg2: #f8fafc;
  --bg3: #f1f5f9;
  --border: rgba(226, 232, 240, 1);
  --blue: #1d4ed8;
  --cyan: #0284c7;
  --gold: #d97706;
  --green: #16a34a;
  --purple: #7c3aed;
  --red: #dc2626;
  --text: #0f172a;
  --muted: #64748b;
  --card-bg: #ffffff;
  --gradient: linear-gradient(135deg, #1d4ed8, #0284c7);
  --gradient-gold: linear-gradient(135deg, #d97706, #ea580c);
  --radius: 12px;
  --radius-lg: 20px;
  --shadow: 0 4px 16px rgba(0,0,0,0.08);
  --shadow-lg: 0 12px 40px rgba(0,0,0,0.12);
  --transition: all 0.3s ease;
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
.about__fact-link { color: var(--blue); text-decoration: none; }
.about__fact-link:hover { text-decoration: underline; }

html { scroll-behavior: smooth; }

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  background: var(--bg);
  color: var(--text);
  line-height: 1.7;
  overflow-x: hidden;
}

h1, h2, h3, h4 {
  font-family: 'Space Grotesk', 'Inter', sans-serif;
  line-height: 1.2;
}

a { color: var(--blue); text-decoration: none; transition: var(--transition); }
a:hover { color: var(--cyan); }
img { max-width: 100%; }

/* ═══════════════════════════════════════
   CANVAS BACKGROUND
═══════════════════════════════════════ */
.bg-canvas {
  position: fixed;
  top: 0; left: 0;
  width: 100vw; height: 100vh;
  pointer-events: none;
  z-index: 0;
  opacity: 0.6;
}

/* ═══════════════════════════════════════
   PORTFOLIO WRAPPER
═══════════════════════════════════════ */
.portfolio { min-height: 100vh; }
main { position: relative; z-index: 1; }

/* ═══════════════════════════════════════
   NAVBAR
═══════════════════════════════════════ */
.navbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 2rem;
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid transparent;
  transition: var(--transition);
}
.navbar--scrolled {
  background: rgba(255, 255, 255, 0.97);
  border-bottom-color: var(--border);
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
}
.navbar__brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  margin-right: auto;
}
.navbar__avatar {
  width: 42px; height: 42px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid var(--blue);
}
.navbar__name {
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  font-size: 0.95rem;
  color: var(--text);
}
.navbar__subtitle {
  font-size: 0.7rem;
  color: var(--muted);
}
.navbar__nav {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
.navbar__link {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.5rem 0.85rem;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--muted);
  transition: var(--transition);
}
.navbar__link:hover {
  background: var(--bg3);
  color: var(--text);
}
.navbar__link .fa { font-size: 0.8rem; }
.navbar__toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}
.navbar__toggle span {
  display: block;
  width: 22px; height: 2px;
  background: var(--text);
  border-radius: 2px;
  transition: var(--transition);
}
.navbar__toggle.is-open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.navbar__toggle.is-open span:nth-child(2) { opacity: 0; }
.navbar__toggle.is-open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

@media (max-width: 900px) {
  .navbar__toggle { display: flex; }
  .navbar__nav {
    display: none;
    position: absolute;
    top: 100%; left: 0; right: 0;
    flex-direction: column;
    background: rgba(255, 255, 255, 0.99);
    border-top: 1px solid var(--border);
    padding: 1rem;
    gap: 0.25rem;
  }
  .navbar__nav.is-open { display: flex; }
  .navbar__link { width: 100%; padding: 0.75rem 1rem; }
}

/* ═══════════════════════════════════════
   HERO
═══════════════════════════════════════ */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 7rem 2rem 4rem;
  max-width: 1280px;
  margin: 0 auto;
  gap: 4rem;
  position: relative;
  z-index: 1;
  background: radial-gradient(ellipse 55% 70% at 75% 50%, rgba(29,78,216,0.05), transparent);
}
.hero__content { flex: 1; min-width: 0; }
.hero__greeting {
  font-size: 1.1rem;
  color: var(--blue);
  font-weight: 600;
  letter-spacing: 0.05em;
  margin-bottom: 0.5rem;
}
.hero__name {
  font-size: clamp(2.8rem, 6vw, 5rem);
  font-weight: 800;
  line-height: 1.05;
  margin-bottom: 1.5rem;
  color: var(--text);
}
.text-gradient {
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.hero__roles {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}
.role-chip {
  padding: 0.4rem 1rem;
  background: rgba(29,78,216,0.07);
  border: 1px solid rgba(29,78,216,0.2);
  border-radius: 99px;
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--blue);
  letter-spacing: 0.02em;
}
.hero__bio {
  font-size: 1.05rem;
  color: var(--muted);
  max-width: 540px;
  margin-bottom: 2rem;
  line-height: 1.8;
}
.hero__bio strong { color: var(--text); }
.hero__stats {
  display: grid;
  grid-template-columns: repeat(4, auto);
  gap: 1.5rem;
  margin-bottom: 2rem;
}
.hero__stat-val {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.8rem;
  font-weight: 800;
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
}
.hero__stat-label {
  font-size: 0.72rem;
  color: var(--muted);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-top: 0.2rem;
}
.hero__cta {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}
.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.75rem;
  border-radius: 10px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
  text-decoration: none;
  border: 2px solid transparent;
}
.btn--primary {
  background: var(--gradient);
  color: #ffffff;
}
.btn--primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(29,78,216,0.35);
  color: #ffffff;
}
.btn--ghost {
  border-color: var(--border);
  color: var(--text);
  background: transparent;
}
.btn--ghost:hover {
  border-color: var(--blue);
  color: var(--blue);
  transform: translateY(-2px);
}
.hero__social {
  display: flex;
  gap: 0.75rem;
}
.social-btn {
  width: 44px; height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: var(--bg3);
  border: 1px solid var(--border);
  color: var(--muted);
  font-size: 1.1rem;
  transition: var(--transition);
  text-decoration: none;
}
.social-btn:hover {
  background: var(--blue);
  color: #fff;
  border-color: var(--blue);
  transform: translateY(-3px);
}

/* Hero visual */
.hero__visual {
  flex-shrink: 0;
  position: relative;
  width: 380px;
  height: 380px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.hero__rings { position: relative; width: 300px; height: 300px; }
.ring {
  position: absolute;
  border-radius: 50%;
  border: 1px solid;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  animation: spin linear infinite;
}
.ring--1 {
  width: 310px; height: 310px;
  border-color: rgba(29,78,216,0.2);
  animation-duration: 20s;
}
.ring--2 {
  width: 350px; height: 350px;
  border-color: rgba(2,132,199,0.12);
  animation-duration: 30s;
  animation-direction: reverse;
}
.ring--3 {
  width: 390px; height: 390px;
  border-color: rgba(29,78,216,0.06);
  animation-duration: 45s;
}
@keyframes spin { from { transform: translate(-50%,-50%) rotate(0deg); } to { transform: translate(-50%,-50%) rotate(360deg); } }
.hero__photo {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%,-50%);
  width: 220px; height: 220px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid var(--blue);
  box-shadow: 0 0 30px rgba(29,78,216,0.15), var(--shadow-lg);
  z-index: 2;
}
.hero__float {
  position: absolute;
  background: var(--card-bg);
  border: 1px solid var(--border);
  padding: 0.5rem 0.9rem;
  border-radius: 10px;
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--text);
  white-space: nowrap;
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  gap: 0.4rem;
  box-shadow: var(--shadow);
  z-index: 3;
}
.hero__float .fa { color: var(--gold); }
.hero__float--1 { top: 5%; left: -10%; animation: float 4s ease-in-out infinite; }
.hero__float--2 { bottom: 15%; right: -12%; animation: float 4s ease-in-out 1.5s infinite; }
.hero__float--3 { bottom: 5%; left: -8%; animation: float 4s ease-in-out 3s infinite; }
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@media (max-width: 900px) {
  .hero {
    flex-direction: column;
    text-align: center;
    padding: 6rem 1.5rem 3rem;
    gap: 2.5rem;
  }
  .hero__stats { grid-template-columns: repeat(2, 1fr); }
  .hero__bio { max-width: 100%; }
  .hero__cta { justify-content: center; }
  .hero__social { justify-content: center; }
  .hero__visual { width: 260px; height: 260px; }
  .hero__photo { width: 160px; height: 160px; }
  .ring--1 { width: 210px; height: 210px; }
  .ring--2 { width: 240px; height: 240px; }
  .ring--3 { width: 270px; height: 270px; }
  .hero__float--1 { top: -5%; left: 0; }
  .hero__float--2 { bottom: 10%; right: -5%; }
  .hero__float--3 { display: none; }
}

/* ═══════════════════════════════════════
   SECTIONS
═══════════════════════════════════════ */
.section {
  padding: 5rem 2rem;
  position: relative;
  z-index: 1;
}
.section--alt { background: #f8fafc; }
.container { max-width: 1200px; margin: 0 auto; }
.section__hdr {
  text-align: center;
  margin-bottom: 3.5rem;
}
.section__tag {
  display: inline-block;
  padding: 0.3rem 1rem;
  background: rgba(29,78,216,0.07);
  border: 1px solid rgba(29,78,216,0.2);
  border-radius: 99px;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--blue);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 0.75rem;
}
.section__title {
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 800;
  color: var(--text);
}

/* ═══════════════════════════════════════
   ABOUT
═══════════════════════════════════════ */
.about__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;
}
.about__text p {
  color: var(--muted);
  margin-bottom: 1rem;
  font-size: 1rem;
  line-height: 1.8;
}
.about__text strong { color: var(--text); }
.about__facts {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 1.5rem;
}
.about__fact {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  background: var(--bg3);
  border-radius: var(--radius);
  border: 1px solid var(--border);
}
.about__fact-icon {
  color: var(--blue);
  font-size: 1rem;
  margin-top: 0.2rem;
  flex-shrink: 0;
}
.about__fact strong {
  display: block;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text);
}
.about__fact span {
  display: block;
  font-size: 0.72rem;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.about__cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}
.highlight-card {
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 1.5rem;
  transition: var(--transition);
  backdrop-filter: blur(8px);
}
.highlight-card:hover {
  border-color: var(--blue);
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(29,78,216,0.12);
}
.highlight-card__emoji {
  font-size: 2rem;
  display: block;
  margin-bottom: 0.75rem;
}
.highlight-card h4 {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 0.5rem;
}
.highlight-card p {
  font-size: 0.82rem;
  color: var(--muted);
  line-height: 1.6;
}

@media (max-width: 768px) {
  .about__grid { grid-template-columns: 1fr; }
  .about__facts { grid-template-columns: 1fr; }
  .about__cards { grid-template-columns: 1fr; }
}

/* ═══════════════════════════════════════
   TIMELINE (EXPERIENCE)
═══════════════════════════════════════ */
.timeline { position: relative; }
.timeline::before {
  content: '';
  position: absolute;
  left: 28px;
  top: 0; bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, var(--blue), transparent);
}
.timeline__item {
  display: flex;
  gap: 2rem;
  margin-bottom: 2.5rem;
  position: relative;
}
.timeline__connector { flex-shrink: 0; width: 60px; }
.timeline__dot {
  width: 56px; height: 56px;
  border-radius: 50%;
  background: var(--bg3);
  border: 2px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: var(--muted);
  transition: var(--transition);
  flex-shrink: 0;
}
.timeline__item--current .timeline__dot {
  border-color: var(--blue);
  color: var(--blue);
  background: rgba(29,78,216,0.08);
  box-shadow: 0 0 16px rgba(29,78,216,0.2);
}
.timeline__card {
  flex: 1;
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 1.5rem 2rem;
  backdrop-filter: blur(8px);
  transition: var(--transition);
}
.timeline__card:hover {
  border-color: rgba(29,78,216,0.35);
  box-shadow: var(--shadow);
}
.timeline__item--current .timeline__card { border-color: rgba(29,78,216,0.25); }
.timeline__head {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 0.75rem;
  flex-wrap: wrap;
}
.timeline__role {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text);
}
.timeline__company {
  font-size: 0.85rem;
  color: var(--blue);
  font-weight: 500;
  margin-top: 0.2rem;
}
.timeline__period {
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--muted);
  background: var(--bg3);
  border: 1px solid var(--border);
  padding: 0.3rem 0.75rem;
  border-radius: 6px;
  white-space: nowrap;
  flex-shrink: 0;
}
.timeline__desc {
  font-size: 0.88rem;
  color: var(--muted);
  margin-bottom: 1rem;
  line-height: 1.7;
}
.timeline__highlights {
  list-style: none;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}
.timeline__highlights li {
  font-size: 0.82rem;
  color: var(--muted);
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
}
.timeline__highlights li .fa {
  color: var(--green);
  font-size: 0.75rem;
  margin-top: 0.2rem;
  flex-shrink: 0;
}

@media (max-width: 640px) {
  .timeline::before { left: 20px; }
  .timeline__connector { width: 44px; }
  .timeline__dot { width: 42px; height: 42px; font-size: 1rem; }
  .timeline__card { padding: 1rem; }
  .timeline__item { gap: 1rem; }
}

/* ═══════════════════════════════════════
   TAGS
═══════════════════════════════════════ */
.tag-row { display: flex; flex-wrap: wrap; gap: 0.4rem; }
.tag {
  padding: 0.25rem 0.65rem;
  background: rgba(29,78,216,0.06);
  border: 1px solid rgba(29,78,216,0.18);
  border-radius: 6px;
  font-size: 0.73rem;
  font-weight: 600;
  color: var(--blue);
}
.tag--sm { font-size: 0.68rem; padding: 0.2rem 0.55rem; }

/* ═══════════════════════════════════════
   PROJECTS
═══════════════════════════════════════ */
.projects__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}
.project-card {
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  transition: var(--transition);
  backdrop-filter: blur(8px);
}
.project-card:hover {
  border-color: rgba(29,78,216,0.4);
  transform: translateY(-6px);
  box-shadow: 0 16px 48px rgba(0,0,0,0.1), 0 0 24px rgba(29,78,216,0.08);
}
.project-card__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.project-card__emoji { font-size: 2rem; }
.project-card__cat {
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--cyan);
  background: rgba(2,132,199,0.07);
  border: 1px solid rgba(2,132,199,0.2);
  padding: 0.2rem 0.6rem;
  border-radius: 6px;
}
.project-card__title {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--text);
}
.project-card__desc {
  font-size: 0.82rem;
  color: var(--muted);
  line-height: 1.7;
  flex: 1;
}
.project-card__impact {
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--gold);
  background: rgba(240,165,0,0.08);
  border: 1px solid rgba(240,165,0,0.25);
  padding: 0.4rem 0.75rem;
  border-radius: 8px;
}
.project-card__impact .fa { margin-right: 0.35rem; }

@media (max-width: 1024px) { .projects__grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 640px) { .projects__grid { grid-template-columns: 1fr; } }

/* ═══════════════════════════════════════
   SKILLS
═══════════════════════════════════════ */
.skills__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;
}
.skill-cat {
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 1.25rem;
  transition: var(--transition);
  backdrop-filter: blur(8px);
}
.skill-cat:hover { border-color: rgba(29,78,216,0.35); }
.skill-cat__head {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.85rem;
}
.skill-cat__emoji { font-size: 1.3rem; }
.skill-cat__head h4 {
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--text);
  text-transform: uppercase;
  letter-spacing: 0.04em;
}
.skill-cat__tags { display: flex; flex-wrap: wrap; gap: 0.35rem; }
.skill-tag {
  padding: 0.2rem 0.55rem;
  background: var(--bg3);
  border: 1px solid var(--border);
  border-radius: 6px;
  font-size: 0.71rem;
  font-weight: 500;
  color: var(--muted);
  transition: var(--transition);
}
.skill-tag:hover {
  background: rgba(29,78,216,0.07);
  border-color: rgba(29,78,216,0.3);
  color: var(--blue);
}

@media (max-width: 1024px) { .skills__grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 640px) { .skills__grid { grid-template-columns: 1fr; } }

/* ═══════════════════════════════════════
   AWARDS
═══════════════════════════════════════ */
.awards__grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1.25rem;
}
.award-card {
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  display: flex;
  flex-direction: column;
  transition: var(--transition);
  backdrop-filter: blur(8px);
  position: relative;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}
.award-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 3px;
  z-index: 1;
}
.award-card--gold::before { background: var(--gradient-gold); }
.award-card--silver::before { background: linear-gradient(90deg, #c0c0c0, #a8a8a8); }
.award-card--blue::before { background: var(--gradient); }
.award-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow);
}
.award-card--gold:hover { border-color: rgba(240,165,0,0.5); }
.award-card--silver:hover { border-color: rgba(192,192,192,0.5); }
.award-card--blue:hover { border-color: rgba(29,78,216,0.4); }

/* Media area — shows image or emoji */
.award-card__media {
  width: 100%;
  aspect-ratio: 16/9;
  background: var(--bg3);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  flex-shrink: 0;
}
.award-card__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;
}
.award-card:hover .award-card__img { transform: scale(1.04); }
.award-card__emoji {
  font-size: 2.5rem;
  line-height: 1;
}

/* Text body */
.award-card__body {
  padding: 1rem 1.1rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  flex: 1;
}
.award-card__title {
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--text);
  line-height: 1.3;
}
.award-card__desc {
  font-size: 0.73rem;
  color: var(--muted);
  line-height: 1.5;
  flex: 1;
}
.award-card__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.4rem;
}
.award-card__year {
  font-size: 0.7rem;
  font-weight: 700;
  color: var(--blue);
}
.award-card__li {
  font-size: 0.85rem;
  color: #0a66c2;
  opacity: 0.8;
  transition: opacity 0.2s;
}
.award-card:hover .award-card__li { opacity: 1; }

@media (max-width: 1200px) { .awards__grid { grid-template-columns: repeat(4, 1fr); } }
@media (max-width: 900px) { .awards__grid { grid-template-columns: repeat(3, 1fr); } }
@media (max-width: 640px) { .awards__grid { grid-template-columns: repeat(2, 1fr); } }

/* ═══════════════════════════════════════
   EDUCATION
═══════════════════════════════════════ */
.edu__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-bottom: 3rem;
}
.edu-card {
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  transition: var(--transition);
  backdrop-filter: blur(8px);
}
.edu-card:hover {
  border-color: rgba(29,78,216,0.35);
  transform: translateY(-4px);
  box-shadow: var(--shadow);
}
.edu-card__icon { font-size: 2.5rem; margin-bottom: 0.5rem; }
.edu-card h3 { font-size: 1.1rem; font-weight: 700; color: var(--text); }
.edu-card__school { font-size: 0.88rem; color: var(--blue); font-weight: 500; }
.edu-card__period {
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--muted);
  background: var(--bg3);
  display: inline-block;
  padding: 0.2rem 0.6rem;
  border-radius: 6px;
  width: fit-content;
  border: 1px solid var(--border);
}
.edu-card__note { font-size: 0.8rem; color: var(--muted); font-style: italic; }

.languages { text-align: center; }
.languages__title {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 1.25rem;
}
.languages__list {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}
.lang-chip {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 0.75rem 1.25rem;
  backdrop-filter: blur(8px);
  transition: var(--transition);
}
.lang-chip:hover { border-color: var(--blue); }
.lang-chip__flag { font-size: 1.8rem; }
.lang-chip strong { display: block; font-size: 0.9rem; color: var(--text); font-weight: 600; }
.lang-chip span { font-size: 0.75rem; color: var(--muted); }

@media (max-width: 640px) { .edu__grid { grid-template-columns: 1fr; } }

/* ═══════════════════════════════════════
   FOOTER
═══════════════════════════════════════ */
.footer {
  background: var(--bg2);
  border-top: 1px solid var(--border);
  padding: 5rem 2rem 3rem;
  text-align: center;
  position: relative;
  z-index: 1;
}
.footer__heading {
  font-size: clamp(1.6rem, 3.5vw, 2.5rem);
  font-weight: 800;
  color: var(--text);
  margin-bottom: 0.75rem;
}
.footer__sub {
  color: var(--muted);
  font-size: 1rem;
  margin-bottom: 2.5rem;
}
.footer__links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
}
.footer__link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: var(--bg3);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--muted);
  text-decoration: none;
  transition: var(--transition);
}
.footer__link:hover {
  border-color: var(--blue);
  color: var(--blue);
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(29,78,216,0.12);
}
.footer__link .fa { font-size: 1rem; }
.footer__bottom {
  padding-top: 2rem;
  border-top: 1px solid var(--border);
  font-size: 0.82rem;
  color: var(--muted);
}
.footer__bottom a { color: var(--blue); }
.footer__bottom a:hover { color: var(--cyan); }

/* ═══════════════════════════════════════
   CUSTOM SCROLLBAR
═══════════════════════════════════════ */
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: var(--bg); }
::-webkit-scrollbar-thumb { background: var(--bg3); border-radius: 3px; }
::-webkit-scrollbar-thumb:hover { background: var(--blue); }
</style>
