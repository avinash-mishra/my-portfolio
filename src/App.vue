<template>
  <div class="main-wrapper">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
      <a class="navbar-brand js-scroll-trigger" href="#about">
        <span class="d-block d-lg-none">Start Bootstrap</span>
        <span class="d-none d-lg-block">
          <img class="img-fluid img-profile rounded-circle mx-auto mb-2" src="./assets/profile.jpeg" alt="">
        </span>
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#experience">Experience</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#education">Education</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#skills">Skills</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#interests">Interests</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#awards">Awards</a>
          </li>
        </ul>
      </div>
    </nav>

    <div class="container-fluid p-0">

      <section class="resume-section p-3 p-lg-5 d-flex d-column" id="about">
        <div class="my-auto">
          <p class="subheading">Hi there! I'm</p>
          <h1 class="mb-0">{{ name }}
            <span class="text-primary">{{ surname }}</span>
          </h1>
          <p class="mt-5 mb-5">{{job_title}}</p>
          <p class="mb-5">{{ aboutMe }}</p>
          <!--<div class="subheading mb-5">{{ job_title }}-->
          <!--<a href="mailto:name@email.com">{{ email }}</a>-->
          <!--</div>-->
          <!--<a href="cv.pdf" class="ml-2" download="">DOWNLOAD CV</a>-->
          <div class="subheading mb-4"><a href="#contact" class="mr-2">CONTACT ME</a> · <a href="assets/cv.pdf"
                                                                                           class="ml-2" download="">DOWNLOAD
            CV</a></div>
          <ul class="list-inline list-social-icons mb-0">
            <li class="list-inline-item">
              <a href="https://www.facebook.com/avinash.mishraaa">
                <span class="fa-stack fa-lg">
                  <i class="fa fa-circle fa-stack-2x"></i>
                  <i class="fa fa-facebook fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
            <!--<li class="list-inline-item">-->
            <!--<a href="https://www.hackerrank.com/avinash_mishra02">-->
            <!--<span class="fa-stack fa-lg">-->
            <!--&lt;!&ndash;<a href="https://s3.amazonaws.com/sr-marketplace-prod/wp-content/uploads/2015/08/hackerrank.jpg"><img src="https://s3.amazonaws.com/sr-marketplace-prod/wp-content/uploads/2015/08/hackerrank.jpg"/></a>&ndash;&gt;-->
            <!--<i class="fa fa-circle-o fa-stack-2x"></i>-->
            <!--&lt;!&ndash;<i href="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/HackerRank_logo.png/220px-HackerRank_logo.png"></i>&ndash;&gt;-->
            <!--<i class="fa fa-stack-1x fa-inverse" href="https://s3.amazonaws.com/sr-marketplace-prod/wp-content/uploads/2015/08/hackerrank.jpg"></i>-->
            <!--</span>-->
            <!--</a>-->
            <!--</li>-->
            <li class="list-inline-item">
              <a href="https://www.linkedin.com/in/avinash-mishra-a0846360/">
                <span class="fa-stack fa-lg">
                  <i class="fa fa-circle fa-stack-2x"></i>
                  <i class="fa fa-linkedin fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="https://github.com/avinash-mishra">
                <span class="fa-stack fa-lg">
                  <i class="fa fa-circle fa-stack-2x"></i>
                  <i class="fa fa-github fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
        <div class="my-auto">
          <h2 class="mb-5">Experience</h2>

          <div class="resume-item d-flex flex-column flex-md-row mb-5" v-for="job in experience" :key="job.description">
            <div class="resume-content mr-auto">
              <h3 class="mb-0">{{ job.position }}</h3>
              <div class="subheading mb-3">{{ job.company }}</div>
              <p>{{ job.description }}</p>
              <!--<p v-for="keys in job.keyResponsibilities">{{keyResponsibilities}}</p>-->
              <!--<i>{{keys.value}}</i>-->
              <br>
              <b>Key Responsibilities</b>
              <br>
              <div v-for="role in job.keyResponsibilities" :key="role.role">
                <p>- {{role.role}}</p>
              </div>
            </div>
            <div class="resume-date text-md-right">
              <span class="text-primary">{{ job.startDate }} - {{ job.endDate }}</span>
            </div>
          </div>

        </div>

      </section>

      <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="education">
        <div class="my-auto">
          <h2 class="mb-5">Education</h2>

          <div class="resume-item d-flex flex-column flex-md-row mb-5">
            <div class="resume-content mr-auto">
              <h3 class="mb-0">VJTI, Mumbai University</h3>
              <div class="subheading mb-3">Master of Technology (M.Tech)</div>
              <div>Computer Science - Software Engineering</div>
              <!--<p>GPA: 3.23</p>-->
            </div>
            <div class="resume-date text-md-right">
              <span class="text-primary">July 2006 - June 2010</span>
            </div>
          </div>

          <div class="resume-item d-flex flex-column flex-md-row">
            <div class="resume-content mr-auto">
              <h3 class="mb-0">RGPV</h3>
              <div class="subheading mb-3">Bachelor of Technology (B.Tech)</div>
              <div>Computer Science & Engineering (CSE)</div>
              <!--<p>GPA: 3.56</p>-->
            </div>
            <div class="resume-date text-md-right">
              <span class="text-primary">August 2012 - May 2014</span>
            </div>
          </div>

        </div>
      </section>

      <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="skills">
        <div class="my-auto">
          <h2 class="mb-5">Skills</h2>

          <div class="subheading mb-3">HandsOn</div>
          <ul class="list-inline list-icons">
            <li class="list-inline-item">
              <i class="devicons devicons-python"></i>
            </li>
            <li class="list-inline-item">
              <i class="devicons devicons-java"></i>
            </li>
            <li class="list-inline-item">
              <i class="devicons devicons-scala"></i>
            </li>
            <li class="list-inline-item">
              <i class="devicons devicons-mysql"></i>
            </li>
            <li class="list-inline-item">
              <i class="devicons devicons-javascript"></i>
            </li>
            <li class="list-inline-item">
              <i class="devicons devicons-docker"></i>
            </li>
            <li class="list-inline-item">
              <i class="devicons devicons-nodejs"></i>
            </li>
            <!--<li class="list-inline-item">-->
            <!--<i class="devicons devicons-nginx"></i>-->
            <!--</li>-->
            <li class="list-inline-item">
              <i class="devicons devicons-git"></i>
            </li>
            <li class="list-inline-item">
              <i class="devicons devicons-aws"></i>
            </li>
            <li class="list-inline-item">
              <i class="devicons devicons-digital-ocean"></i>
            </li>
            <li class="list-inline-item">
              <i class="devicons devicons-linux"></i>
            </li>
            <!--<li class="list-inline-item">-->
            <!--<i class="devicons "></i>-->
            <!--</li>-->
            <!--<li class="list-inline-item">-->
            <!--<i class="devicons devicons-digital-ocean"></i>-->
            <!--</li>-->
            <!--<li class="list-inline-item">-->
            <!--<i class="devicons devicons-linux"></i>-->
            <!--</li>-->
          </ul>

          <div class="subheading mb-3">Tools and Technologies</div>
          <ul class="fa-ul mb-0">
            <li>
              <i class="fa-li fa fa-check"></i>
              Language: Java, Python, SQL, bash, Scala, R, JavaScript, PHP
            </li>
            <li>
              <i class="fa-li fa fa-check"></i>
              Data Science: NLP, NLTK, Scikit-Learn, Keras, Tensorflow, Spark MlLib, Mantra
            </li>
            <li>
              <i class="fa-li fa fa-check"></i>
              Data Visualization tools: Tableau, DOMO, incubator-superset, matplotlib, Dash by plotly
            </li>
            <li>
              <i class="fa-li fa fa-check"></i>
              Cloud Platform: AWS, Digitalocean, Amazon Lightsail
            </li>
            <li>
              <i class="fa-li fa fa-check"></i>
              Web Frameworks/ API development: Django, Flask, Laravel, VueJs, Node.js, gRpc
            </li>
            <li>
              <i class="fa-li fa fa-check"></i>
              Server: Apache Tomcat, Jetty, Nginx
            </li>
            <li>
              <i class="fa-li fa fa-check"></i>
              Big data technologies & tools: HDFS (HDP), Hive, MapReduce, Spark, Kafka, Zookeeper, Ambari, AirFlow
            </li>
            <li>
              <i class="fa-li fa fa-check"></i>
              Search technologies: Apache Lucene, Solr, Elastic-Search
            </li>
            <li>
              <i class="fa-li fa fa-check"></i>
              Database: Mysql, Cassandra (Apache, DSE), MongoDB, MariaDB, SQL Server, Redis, Netezza
            </li>
            <li>
              <i class="fa-li fa fa-check"></i>
              DevOps/CI : Jenkins, chef, docker, Vagrant, Apache Maven
            </li>
            <li>
              <i class="fa-li fa fa-check"></i>
              Tools: GitHub, Jira, Confluence, Bitbucket, Gitlab, target process
            </li>
            <li>
              <i class="fa-li fa fa-check"></i>
              OS: Ubuntu, CentOs, Amazon AMI, macOs
            </li>
          </ul>
        </div>
      </section>

      <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="interests">
        <div class="my-auto">
          <h2 class="mb-5">Interests</h2>
          <p>Apart from doing Data Science and code, I enjoy most of my time being outdoors. I like to play sports like
            Badminton and Cricket. In India I have played Badminton at state level.</p>
          <p class="mb-0">When forced indoors, I follow a number of sci-fi and comedy genre movies and television shows,
            I spend a large amount of my free time exploring the latest technolgy advancements in AI and other
            technological domain.</p>
          <p>I am starting my new hobby of writing. So recently I am trying to publish some quality articles on
            medium.</p>
        </div>
      </section>

      <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="awards">
        <div class="my-auto">
          <h2 class="mb-5">Awards &amp; Certifications</h2>
          <ul class="fa-ul mb-0">
            <li>
              <i class="fa-li fa fa-trophy text-warning"></i>
              Rakuten Technology award for GSP
            </li>
            <!--<li>-->
            <!--<i class="fa-li fa fa-trophy text-warning"></i>-->
            <!--Mobile Web Specialist - Google Certification</li>-->
            <!--<li>-->
            <!--<i class="fa-li fa fa-trophy text-warning"></i>-->
            <!--1<sup>st</sup>-->
            <!--Place - University of Colorado Boulder - Emerging Tech Competition 2009</li>-->
            <!--<li>-->
            <!--<i class="fa-li fa fa-trophy text-warning"></i>-->
            <!--1<sup>st</sup>-->
            <!--Place - University of Colorado Boulder - Adobe Creative Jam 2008 (UI Design Category)</li>-->
            <!--<li>-->
            <!--<i class="fa-li fa fa-trophy text-warning"></i>-->
            <!--2<sup>nd</sup>-->
            <!--Place - University of Colorado Boulder - Emerging Tech Competition 2008</li>-->
            <!--<li>-->
            <!--<li>-->
            <!--<i class="fa-li fa fa-trophy text-warning"></i>-->
            <!--1<sup>st</sup>-->
            <!--Place - James Buchanan High School - Hackathon 2006</li>-->
            <!--<li>-->
            <!--<i class="fa-li fa fa-trophy text-warning"></i>-->
            <!--3<sup>rd</sup>-->
            <!--Place - James Buchanan High School - Hackathon 2005</li>-->
          </ul>
        </div>
      </section>

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'My portfolio',
      name: 'AVINASH',
      surname: 'MISHRA',
      job_title: 'Data Scientist, AI Engineer',
      address: 'Kawasaki-ku, Kanagawa-ken',
      email: 'avinash.mishra.2388@gmail.com',
      aboutMe: 'I am a computer science post graduate. I’m passionate about applying my knowledge of computer science and machine learning to areas in NLP, Time-series, Recommendations, image processing, search ranking etc. where we can really engineer better solutions to produce meaningful things for humanity.',
      experience: [
        {
          position: 'Data Scientist',
          company: 'Catalina Marketing',
          description: 'Catalina Marketing is the global leader in shopper-driven marketing solutions, providing brand manufacturers, retailers and healthcare providers with shopper-driven marketing solutions to meet growth objectives. ',
          startDate: 'June 2018',
          keyResponsibilities: [
            {role: 'Provide Data Science solutions for CPG and retail clients.'},
            {role: 'Projects : ' +
                '- forecasting, ' +
                '- Churn analysis, ' +
                'segmentation, ' +
                'likely buyer, ' +
                'Learning to Rank' +
                'Prod2Vec at basket level, ' +
                'Offer reRanking etc.'
            },
            {role: 'Machine learning pipeline'},
            {role: 'Dashboard building'},
            {role: 'Data Science Hadoop/Spark Server management.'},
            {role: 'Python, Scala, Spark, Hadoop, Scikit-learn, Keras, Theano, Tensorflow, Dash, SQL, Pycharm'}
          ],
          endDate: 'Present'
        },
        {
          position: 'Data Scientist & Team Lead',
          company: 'Paradigmshift Inc.',
          description: 'PSINC is producing new generation hotel industry products. Company provides high class Machine learning systems for dynamic pricing and Kuchikomi analysis.',
          keyResponsibilities: [
            {role: 'I was leading Data Science Team'},
            {role: 'Projects : Natural language processing powered valuechain, Abstract term extraction, Price Recommendation, Web Crawling system. etc. '},
            {role: 'Productionzing all machine learning applications'},
            {role: 'Machine learning API building.'},
            {role: 'A/B test analysis and model evaluation.'},
            {role: 'AWS EC2, Digitalocean and AWS lightsail server management for DS projects.'},
            {role: 'Python, Java, Cassandra, Hive, Scikit-learn, Keras, Domo, Tableau, Airflow, Kafka, Docker, Zookeeper, Django, Flask, Laravel.'}
          ],
          startDate: 'October 2016',
          endDate: 'May 2018'
        },
        {
          position: 'Software Engineer, Big Data Technologies',
          company: 'Rakuten Inc.',
          description: 'Rakuten Inc. is the largest e-commerce company in Japan, and third largest e-commerce marketplace company worldwide.',
          keyResponsibilities: [
            {role: 'Worked in Search team of Rakuten Ichiba'},
            {role: 'GSP : GSP is a global search platform for almost all of the Rakuten services'},
            {role: 'Survey Panda : It is a PC support helpdesk feedback system.'},
            {role: 'Dynamic Search UI : DS is a search UI for rakuten Ichiba\n'},
            {role: 'Conducting leaders meeting for any issues related to search components.'},
            {role: 'Java, Python, Bash, Cassandra, MariaDB, Hadoop, Solr, Elastic-Search, Lucene, Maven, Zookeeper, Nexus, Jenkins, Docker, Chef.'}
          ],
          startDate: 'October 2014',
          endDate: 'October 2016'
        },
        {
          position: 'System Engineer',
          company: 'Infosys Ltd.',
          description: 'Infosys is a global leader in next-generation digital services company.',
          keyResponsibilities: [
            {role: 'Worked as a back-end engineer to provide data pipeline to other teams.'},
            {role: 'Molina Healthcare management : It was an upgradation project for an existing old healthcare management software of molina.'},
            {role: 'Employee swap portal : A web based swap portal for employees who are interested to swap their posting locations.'},
            {role: 'Java, Spring, Servlet, JSP, SQL, MySql'}
          ],
          startDate: 'March 2011',
          endDate: 'August 2012'
        }
      ]
    }
  },
  mounted () {
    const $ = this.jquery
    this.$nextTick(() => {
      // our custom jQuery code goes here
      $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
          var target = $(this.hash)
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']')
          if (target.length) {
            $('html, body').animate({
              scrollTop: (target.offset().top)
            }, 1000, 'easeInOutExpo')
            return false
          }
        }
      })

      // Closes responsive menu when a scroll trigger link is clicked
      $('.js-scroll-trigger').click(function () {
        $('.navbar-collapse').collapse('hide')
      })

      // Activate scrollspy to add active class to navbar items on scroll
      $('body').scrollspy({
        target: '#sideNav'
      })
    })
  }
}
</script>

<style>
  body {
    font-family: 'Open Sans', serif;
    padding-top: 54px;
    color: #868e96;
  }

  @media (min-width: 992px) {
    body {
      padding-top: 0;
      padding-left: 17rem;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Saira Extra Condensed', serif;
    font-weight: 700;
    text-transform: uppercase;
    color: #343a40;
  }

  h1 {
    font-size: 6rem;
    line-height: 5.5rem;
  }

  h2 {
    font-size: 3.5rem;
  }

  .subheading {
    text-transform: uppercase;
    font-weight: 500;
    font-family: 'Saira Extra Condensed', serif;
    font-size: 1.35rem;
  }

  .list-social-icons a {
    color: #495057;
  }

  .list-social-icons a:hover {
    color: #BD5D38;
  }

  .list-social-icons a .fa-lg {
    font-size: 1.75rem;
  }

  .list-icons {
    font-size: 3rem;
  }

  .list-icons .list-inline-item i:hover {
    color: #BD5D38;
  }

  #sideNav .navbar-nav .nav-item .nav-link {
    font-weight: 600;
    text-transform: uppercase;
  }

  @media (min-width: 992px) {
    #sideNav {
      text-align: center;
      position: fixed;
      top: 0;
      left: 0;
      display: flex;
      flex-direction: column;
      width: 17rem;
      height: 100vh;
    }

    #sideNav .navbar-brand {
      display: flex;
      margin: auto auto 0;
      padding: 0.5rem;
    }

    #sideNav .navbar-brand .img-profile {
      max-width: 10rem;
      max-height: 10rem;
      border: 0.5rem solid rgba(255, 255, 255, 0.2);
    }

    #sideNav .navbar-collapse {
      display: flex;
      align-items: flex-start;
      flex-grow: 0;
      width: 100%;
      margin-bottom: auto;
    }

    #sideNav .navbar-collapse .navbar-nav {
      flex-direction: column;
      width: 100%;
    }

    #sideNav .navbar-collapse .navbar-nav .nav-item {
      display: block;
    }

    #sideNav .navbar-collapse .navbar-nav .nav-item .nav-link {
      display: block;
    }
  }

  section.resume-section {
    border-bottom: 1px solid #dee2e6;
    padding-top: 5rem !important;
    padding-bottom: 5rem !important;
  }

  section.resume-section .resume-item .resume-date {
    min-width: none;
  }

  @media (min-width: 768px) {
    section.resume-section {
      min-height: 100vh;
    }

    section.resume-section .resume-item .resume-date {
      min-width: 18rem;
    }
  }

  @media (min-width: 992px) {
    section.resume-section {
      padding-top: 3rem !important;
      padding-bottom: 3rem !important;
    }
  }

  .bg-primary {
    background-color: #BD5D38 !important;
  }

  .text-primary {
    color: #BD5D38 !important;
  }

  a {
    color: #BD5D38;
  }

  a:hover, a:focus, a:active {
    color: #824027;
  }
</style>
