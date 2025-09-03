import React, { useState } from "react";
import "./ResidentialCommercialIndustrial.css";

const ResidentialCommercialIndustrial = () => {
  const [selectedService, setSelectedService] = useState("Elevate Your Business");
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const renderContent = () => {
    switch (selectedService) {
      case "Elevate Your Business":
        return (
          <div className="service-content">
            <h2>Elevate Your Business</h2>
            <p>
              Elevating your business means building a strong foundation for
              growth and resilience. Our solutions go beyond short-term fixes —
              we help you integrate technology, streamline processes, and unlock
              new opportunities for sustainable progress. With a focus on
              innovation and support, your organization gains the tools to stay
              competitive in today’s evolving energy landscape.
            </p>

            <div className="accordion">
              {[
                {
                  title: "Seamless Integration",
                  content:
                    "Our systems are designed to integrate smoothly into your existing operations without disruptions. We take care of the technical complexities so your team can continue focusing on its core activities. This ensures fast adoption, reduced learning curves, and long-term ease of use across departments.",
                },
                {
                  title: "Expertise and Guidance",
                  content:
                    "You benefit from our team of industry experts who provide ongoing guidance tailored to your business goals. We don’t just deliver tools; we share insights, best practices, and strategies that ensure you get the maximum value. This knowledge transfer empowers your internal team to grow stronger alongside us.",
                },
                {
                  title: "Proactive Monitoring",
                  content:
                    "We don’t wait for problems to happen — we detect and resolve them before they affect performance. Our proactive monitoring systems identify risks early and safeguard productivity. This minimizes downtime, reduces repair costs, and maintains your operations at peak efficiency year-round.",
                },
                {
                  title: "Data-Driven Insights",
                  content:
                    "Every decision is backed by comprehensive data and analytics tailored to your needs. From tracking energy performance to identifying new opportunities, we provide clear, actionable insights. These insights help your leadership team make confident, informed choices for future growth.",
                },
                {
                  title: "Empowered Growth",
                  content:
                    "By eliminating inefficiencies and unlocking hidden potential, we create the conditions for sustainable expansion. You can channel savings into scaling operations, diversifying services, or entering new markets. Growth becomes not only achievable but also predictable and consistent.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`accordion-item ${
                    openIndex === index ? "active" : ""
                  }`}
                >
                  <div
                    className="accordion-header"
                    onClick={() => toggleAccordion(index)}
                  >
                    <span>
                      {index + 1}. {item.title}
                    </span>
                    <span>{openIndex === index ? "▲" : "▼"}</span>
                  </div>
                  {openIndex === index && (
                    <div className="accordion-content">
                      <p>{item.content}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        );

      case "Drive Cost Efficiency":
        return (
          <div className="service-content">
            <h2>Drive Cost Efficiency</h2>
            <p>
              Cost efficiency is about producing better results with fewer
              resources. We help you identify areas of waste, optimize energy
              usage, and lower recurring expenses. With a structured approach,
              your business gains financial savings while maintaining quality and
              reliability — paving the way for long-term profitability.
            </p>

            <div className="accordion">
              {[
                {
                  title: "Optimized Energy Usage",
                  content:
                    "We analyze your consumption patterns to align energy usage with actual demand. By shifting operations to low-cost periods and minimizing idle wastage, you save significantly on energy bills. This not only lowers costs but also supports more sustainable resource usage.",
                },
                {
                  title: "Reduced Maintenance Costs",
                  content:
                    "Our predictive maintenance model ensures potential issues are identified early. This prevents costly breakdowns, extends the lifespan of equipment, and reduces the need for emergency repairs. Over time, this leads to lower capital expenses and greater operational stability.",
                },
                {
                  title: "Streamlined Operations",
                  content:
                    "We help simplify and automate repetitive tasks that consume valuable time. Automation reduces human errors, improves consistency, and enables your team to focus on strategic priorities. The result is smoother operations with significantly lower overhead costs.",
                },
                {
                  title: "Efficiency Reporting",
                  content:
                    "Regular reports show measurable cost savings achieved through our interventions. These reports are clear, transparent, and backed by real numbers, making it easy for you to evaluate improvements and justify further investments. They serve as proof of value for stakeholders.",
                },
                {
                  title: "Sustainable Profitability",
                  content:
                    "Our cost efficiency strategies are designed for long-term results, not short-term cuts. By embedding sustainability into operations, we help you achieve consistent profitability. This builds a strong financial foundation for reinvesting in innovation and future growth.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`accordion-item ${
                    openIndex === index ? "active" : ""
                  }`}
                >
                  <div
                    className="accordion-header"
                    onClick={() => toggleAccordion(index)}
                  >
                    <span>
                      {index + 1}. {item.title}
                    </span>
                    <span>{openIndex === index ? "▲" : "▼"}</span>
                  </div>
                  {openIndex === index && (
                    <div className="accordion-content">
                      <p>{item.content}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        );

      case "Simplify Reporting Processes":
        return (
          <div className="service-content">
            <h2>Simplify Reporting Processes</h2>
            <p>
              Complex reporting often slows down decision-making and creates
              confusion. Our simplified reporting solutions give you clarity,
              accuracy, and speed. By automating and structuring data, we ensure
              every report is easy to read, easy to share, and directly aligned
              with your business goals.
            </p>

            <div className="accordion">
              {[
                {
                  title: "Automated Reports",
                  content:
                    "We eliminate the manual burden of creating reports by fully automating the process. Reports are generated on schedule with the latest data, ensuring accuracy and timeliness. This reduces workload for your staff and ensures consistency across reporting cycles.",
                },
                {
                  title: "Custom Dashboards",
                  content:
                    "Our dashboards are built for flexibility, letting you view the metrics that matter most. Whether you’re a manager, technician, or investor, you get a clear visual snapshot of performance. This ensures decisions are based on accurate, real-time information.",
                },
                {
                  title: "Compliance Ready",
                  content:
                    "We design reports that meet regulatory and industry standards. This saves you time during audits, certifications, and compliance checks. With everything properly documented, you remain confident that your organization is always audit-ready.",
                },
                {
                  title: "Time-Saving Tools",
                  content:
                    "By reducing the hours spent compiling, checking, and formatting reports, your team gains more time for high-value work. These tools allow you to shift focus from administration to strategy, accelerating business outcomes.",
                },
                {
                  title: "Transparent Communication",
                  content:
                    "Our reporting style prioritizes clarity, ensuring every stakeholder can understand key results. From executives to technical staff, everyone has access to insights they can act on immediately. This improves trust and alignment across the organization.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`accordion-item ${
                    openIndex === index ? "active" : ""
                  }`}
                >
                  <div
                    className="accordion-header"
                    onClick={() => toggleAccordion(index)}
                  >
                    <span>
                      {index + 1}. {item.title}
                    </span>
                    <span>{openIndex === index ? "▲" : "▼"}</span>
                  </div>
                  {openIndex === index && (
                    <div className="accordion-content">
                      <p>{item.content}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        );

      case "AGS Performance Assurance":
        return (
          <div className="service-content">
            <h2>AGS Performance Assurance</h2>
            <p>
              Performance assurance is about building confidence that your
              systems will deliver as promised. With advanced monitoring,
              optimization, and accountability, we ensure your infrastructure
              performs at peak levels. Our commitment is not just to meet
              expectations but to consistently exceed them.
            </p>

            <div className="accordion">
              {[
                {
                  title: "Guaranteed Uptime",
                  content:
                    "We guarantee maximum system availability through robust monitoring and quick response mechanisms. Your operations continue running smoothly without unexpected interruptions. This reliability builds trust and safeguards your revenue streams.",
                },
                {
                  title: "Performance Benchmarks",
                  content:
                    "Our framework constantly compares your system performance against top industry standards. This ensures your business remains competitive and identifies areas for continuous improvement. The result is performance you can measure, verify, and rely on.",
                },
                {
                  title: "Risk Mitigation",
                  content:
                    "We actively identify and resolve risks before they escalate into major problems. Whether it’s technical issues, environmental conditions, or operational bottlenecks, we ensure your business remains protected. This proactive approach reduces losses and safeguards continuity.",
                },
                {
                  title: "Continuous Optimization",
                  content:
                    "Your system is continuously fine-tuned to match changing demand, weather, and market conditions. Optimization ensures resources are used efficiently and that output remains consistently high. Over time, this improves both reliability and cost-effectiveness.",
                },
                {
                  title: "Trusted Partnership",
                  content:
                    "We don’t just provide a service; we build long-term partnerships with our clients. Our focus is on transparency, accountability, and delivering measurable results. This ensures you always have a trusted partner invested in your success.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`accordion-item ${
                    openIndex === index ? "active" : ""
                  }`}
                >
                  <div
                    className="accordion-header"
                    onClick={() => toggleAccordion(index)}
                  >
                    <span>
                      {index + 1}. {item.title}
                    </span>
                    <span>{openIndex === index ? "▲" : "▼"}</span>
                  </div>
                  {openIndex === index && (
                    <div className="accordion-content">
                      <p>{item.content}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        );

      case "Boost Operational Efficiency":
        return (
          <div className="service-content">
            <h2>Boost Operational Efficiency</h2>
            <p>
              Enhancing operational efficiency transforms how your business operates by optimizing workflows and reducing downtime. Our tailored solutions leverage cutting-edge tools to improve productivity, ensuring your operations run smoother and more effectively in a competitive market.
            </p>

            <div className="accordion">
              {[
                {
                  title: "Workflow Optimization",
                  content:
                    "We streamline your operational workflows to eliminate bottlenecks, enabling faster task completion and improved team coordination. This optimization reduces delays and enhances overall productivity across all levels.",
                },
                {
                  title: "Advanced Automation",
                  content:
                    "Our advanced automation technologies handle repetitive tasks, freeing your staff to focus on strategic initiatives. This leads to higher efficiency and reduces the risk of human error in daily operations.",
                },
                {
                  title: "Downtime Reduction",
                  content:
                    "We implement proactive measures to minimize equipment downtime, ensuring continuous operation. This reliability keeps your business running smoothly and maintains customer satisfaction.",
                },
                {
                  title: "Resource Allocation",
                  content:
                    "Our solutions optimize resource use, ensuring materials and personnel are allocated effectively. This maximizes output while minimizing waste, boosting your operational ROI.",
                },
                {
                  title: "Performance Tracking",
                  content:
                    "Real-time performance tracking provides insights into operational health, allowing quick adjustments. This data-driven approach ensures sustained efficiency and long-term success.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`accordion-item ${
                    openIndex === index ? "active" : ""
                  }`}
                >
                  <div
                    className="accordion-header"
                    onClick={() => toggleAccordion(index)}
                  >
                    <span>
                      {index + 1}. {item.title}
                    </span>
                    <span>{openIndex === index ? "▲" : "▼"}</span>
                  </div>
                  {openIndex === index && (
                    <div className="accordion-content">
                      <p>{item.content}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        );

      case "Enhance Sustainability Focus":
        return (
          <div className="service-content">
            <h2>Enhance Sustainability Focus</h2>
            <p>
              Embracing sustainability strengthens your business’s future by aligning with environmental goals and regulatory demands. Our services help you adopt eco-friendly practices, reduce your carbon footprint, and build a reputation as a green leader in your industry.
            </p>

            <div className="accordion">
              {[
                {
                  title: "Eco-Friendly Practices",
                  content:
                    "We guide you in adopting eco-friendly operational practices that reduce environmental impact. This includes energy-efficient technologies and sustainable resource management.",
                },
                {
                  title: "Carbon Footprint Reduction",
                  content:
                    "Our strategies focus on lowering your carbon emissions through optimized energy use and renewable resources. This aligns with global sustainability targets and saves costs.",
                },
                {
                  title: "Regulatory Compliance",
                  content:
                    "We ensure your operations meet the latest environmental regulations, avoiding penalties and enhancing your market standing. Our expertise keeps you ahead of compliance requirements.",
                },
                {
                  title: "Green Technology Integration",
                  content:
                    "We integrate cutting-edge green technologies into your infrastructure, enhancing efficiency while promoting sustainability. This positions your business as an industry innovator.",
                },
                {
                  title: "Sustainability Reporting",
                  content:
                    "Detailed sustainability reports showcase your environmental efforts to stakeholders, boosting your brand’s credibility. These insights support long-term strategic planning.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`accordion-item ${
                    openIndex === index ? "active" : ""
                  }`}
                >
                  <div
                    className="accordion-header"
                    onClick={() => toggleAccordion(index)}
                  >
                    <span>
                      {index + 1}. {item.title}
                    </span>
                    <span>{openIndex === index ? "▲" : "▼"}</span>
                  </div>
                  {openIndex === index && (
                    <div className="accordion-content">
                      <p>{item.content}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return (
          <p className="default-message">
            Please select a service from the left to view detailed information.
          </p>
        );
    }
  };

  return (
    <div className="rci-container">
      {/* Sidebar */}
      <div className="rci-sidebar">
        <div className="rci-top">
          <h2 className="rci-heading">Our Services</h2>
          <ul className="rci-menu">
            <li onClick={() => setSelectedService("Elevate Your Business")}>
              Elevate Your Business
            </li>
            <li onClick={() => setSelectedService("Drive Cost Efficiency")}>
              Drive Cost Efficiency
            </li>
            <li
              onClick={() => setSelectedService("Simplify Reporting Processes")}
            >
              Simplify Reporting Processes
            </li>
            <li onClick={() => setSelectedService("AGS Performance Assurance")}>
              AGS Performance Assurance
            </li>
            <li onClick={() => setSelectedService("Boost Operational Efficiency")}>
              Boost Operational Efficiency
            </li>
            <li onClick={() => setSelectedService("Enhance Sustainability Focus")}>
              Enhance Sustainability Focus
            </li>
          </ul>
        </div>

        <div className="rci-bottom">
          <a href="../../Files/AGS-Flyer(3).png" download>
            <button>Company Brochure</button>
          </a>
          <a href="/files/45days-free-service.pdf" download>
            <button>45 Days Free Service</button>
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="rci-content">{renderContent()}</div>
    </div>
  );
};

export default ResidentialCommercialIndustrial;