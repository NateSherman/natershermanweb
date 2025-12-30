import './Resume.css'

const Resume = () => {
  const resumeData = {
    name: "Nate Sherman",
    title: "Senior Software Engineer / Team Lead",
    summary: "Principal-level software engineer and team lead with extensive experience in the Microsoft stack, cloud-native architecture, and large-scale distributed systems. Skilled at designing scalable systems, leading engineering teams, and delivering full-stack solutions across backend, frontend, and mobile platforms. Strong expertise in Azure cloud services, CI/CD automation, and mentoring engineers to adopt best practices.",
    highlights: [
      "Designed and implemented scalable, event-driven architecture handling 20M+ daily events while leading a team to deliver backend, frontend, and mobile features.",
      "Full-stack expertise: C#, .NET, MongoDB, Angular, TypeScript, .NET MAUI.",
      "Cloud & DevOps: Azure Functions, Event Grid, Service Bus, Logic Apps, ARM templates, automated pipelines.",
      "Mentored engineers to improve architecture, coding, and testing practices, boosting team performance.",
      "Experienced in cross-functional collaboration to deliver solutions aligned with business goals."
    ],
    technicalSkills: {
      "Backend / Cloud": [".NET 8", "C#", "Azure Functions", "Logic Apps", "Event Grid", "Service Bus", "MS SQL Server", "MongoDB", "Web API"],
      "Frontend / Mobile": ["Angular 17", "TypeScript", "Angular Material", ".NET MAUI"],
      "DevOps / CI/CD": ["Azure DevOps", "ARM Templates", "Pipeline Automation"],
      "Messaging / Real-time": ["SignalR", "Event-driven Architecture"],
      "Other / Past Experience": [".NET Framework", "WCF", "WebForms", "Entity Framework", "Java", "JavaScript", "jQuery", "Android", "SharePoint"],
      "Tools / VCS": ["Git", "Docker", "NodeJS", "Python (personal projects)"]
    },
    experience: [
      {
        title: "Principal Software Engineer / Software Manager",
        company: "FleetHD",
        period: "2022–Present",
        achievements: [
          "Built a fleet monitoring system processing 20M+ events/day using Azure Functions, Event Grid, Service Bus, and Blob Storage.",
          "Designed and maintained application to provisioning pipelines using ARM templates.",
          "Delivered full-stack features across backend, frontend (Angular), and mobile (.NET MAUI).",
          "Led design meetings, code reviews, and process improvements, raising release quality and team efficiency.",
          "Mentored engineers on architecture, coding, and testing practices."
        ]
      },
      {
        title: "Software Engineer IV / Team Lead",
        company: "Aya Healthcare",
        period: "2019–2022",
        note: "Promoted from Software Engineer II → III → IV during tenure",
        achievements: [
          "Developed an initial prototype of a machine vision project using Azure AI to recognize, categorize, validate, and extract data from uploaded documents; collaborated with an offshore team on the final custom solution.",
          "Automated document processing for Compliance and Credentialing modules; integrated DocuSign using Azure Functions and Service Bus.",
          "Implemented real-time updates via Azure SignalR, improving internal app responsiveness.",
          "Guided team in rewriting legacy nurse contract calculation software, reducing bugs and improving maintainability."
        ]
      },
      {
        title: "Software Development Consultant",
        company: "It Casino Solutions",
        period: "2020 (3 months)",
        achievements: [
          "Built tournament management software with real-time updates using SignalR, delivering on schedule with a small team."
        ]
      },
      {
        title: "Application Developer",
        company: "Alliant Insurance Services",
        period: "2012–2019",
        note: "Converted from contractor to employee during tenure",
        achievements: [
          "Architected major property insurance platform supporting multiple workflows.",
          "Developed Android client portal enabling secure document access and communication.",
          "Optimized web applications, improving page load speeds by 5x.",
          "Facilitated SCRUM processes as developer/SCRUM master, removing impediments and improving team delivery."
        ]
      },
      {
        title: "Software Development Consultant",
        company: "Cheap Easy Fast Traffic School",
        period: "2016–2018",
        achievements: [
          "Simplified admin workflows and supported production systems, including database and server troubleshooting."
        ]
      },
      {
        title: "Software Development Consultant",
        company: "Price Self Storage",
        period: "2014–2017",
        achievements: [
          "Maintained and enhanced client-facing and administrative web applications integrated with storage management services."
        ]
      }
    ],
    education: [
      {
        degree: "Bachelor's in Computer Science",
        school: "Western Governors University"
      }
    ]
  }

  return (
    <div className="resume">
      <div className="resume-header">
        <h2>{resumeData.name}</h2>
        <p className="resume-title">{resumeData.title}</p>
      </div>

      <section className="resume-section">
        <h3>Professional Summary</h3>
        <p>{resumeData.summary}</p>
      </section>

      <section className="resume-section">
        <h3>Highlights</h3>
        <ul className="highlights-list">
          {resumeData.highlights.map((highlight, index) => (
            <li key={index}>{highlight}</li>
          ))}
        </ul>
      </section>

      <section className="resume-section">
        <h3>Professional Experience</h3>
        {resumeData.experience.map((exp, index) => (
          <div key={index} className="experience-item">
            <div className="experience-header">
              <h4>{exp.title}</h4>
              <span className="experience-period">{exp.period}</span>
            </div>
            <p className="experience-company">{exp.company}</p>
            {exp.note && <p className="experience-note">{exp.note}</p>}
            <ul className="achievements-list">
              {exp.achievements.map((achievement, idx) => (
                <li key={idx}>{achievement}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="resume-section">
        <h3>Technical Skills</h3>
        {Object.entries(resumeData.technicalSkills).map(([category, skills]) => (
          <div key={category} className="skills-category">
            <h4 className="skills-category-title">{category}:</h4>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="resume-section">
        <h3>Education</h3>
        {resumeData.education.map((edu, index) => (
          <div key={index} className="education-item">
            <h4>{edu.degree}</h4>
            <p>{edu.school}</p>
          </div>
        ))}
      </section>
    </div>
  )
}

export default Resume

