import React, { useState } from "react";
import "./PortfolioServices.css";

const PortfolioServices = () => {
  const [selectedService, setSelectedService] = useState("Optimize Your Returns");
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const renderContent = () => {
    switch (selectedService) {
      case "Optimize Your Returns":
        return (
          <div className="service-content">
            <h2>Optimize Your Returns</h2>
            <p>
              Optimizing returns in the realm of solar power demands a comprehensive strategy to ensure the optimal performance of your solar assets. Our Portfolio Investors & O&M Companies Services are meticulously designed not only to detect and resolve issues swiftly but also to redefine industry standards by providing unprecedented guarantees on energy generation.
            </p>
            <div className="accordion">
              {[
                {
                  title: "Swift Issue Resolution",
                  content:
                    "Achieving the zenith of performance for solar assets requires an initiative-taking approach to identifying and resolving issues promptly. Our advanced monitoring systems and agile response mechanisms swiftly address potential challenges, minimizing downtime and maximizing energy production.",
                },
                {
                  title: "Unprecedented Guarantees",
                  content:
                    "Setting a new benchmark, we offer assurance on energy generation at both the portfolio and individual asset levels. This commitment provides a robust assurance of performance, enhancing confidence in the reliability of our solar solutions without adjustment for adverse weather conditions.",
                },
                {
                  title: "Risk Assumption",
                  content:
                    "Differentiating from conventional service providers, we willingly assume the risk associated with energy generation assurance. Adverse weather conditions do not compromise the guarantees we provide, underscoring our unwavering commitment to delivering consistent and predictable returns.",
                },
                {
                  title: "Real-Time Tracking",
                  content:
                    "Our services enable real-time performance tracking of your solar assets. This initiative-taking monitoring allows us to identify potential issues before they escalate, ensuring ongoing optimization and efficiency in your solar power generation.",
                },
                {
                  title: "Tailored Solutions",
                  content:
                    "Recognizing the uniqueness of each solar installation, our team collaborates closely with you to tailor our services to your specific needs. This personalized approach optimizes your solar assets’ performance based on your portfolio’s distinctive characteristics.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`accordion-item ${openIndex === index ? "active" : ""}`}
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

      case "Enhance Performance Transparency":
        return (
          <div className="service-content">
            <h2>Enhance Performance Transparency</h2>
            <p>
              Our cutting-edge technology, coupled with a team of seasoned solar experts, continuously analyzes asset performance. We pinpoint risks and address underperformance, providing comprehensive transparency for your entire portfolio, asset by asset.
            </p>
            <div className="accordion">
              {[
                {
                  title: "Cutting-Edge Technology",
                  content:
                    "Our services leverage cutting-edge technology to ensure your solar assets are constantly scrutinized. Advanced monitoring systems, data analytics, and predictive tools are employed to provide a real-time and comprehensive view of your entire portfolio.",
                },
                {
                  title: "Seasoned Experts",
                  content:
                    "A team of seasoned solar experts complements our technological prowess. With years of industry experience, they bring a wealth of knowledge, ensuring that the analysis benefits from insights only seasoned professionals can provide.",
                },
                {
                  title: "Continuous Analysis",
                  content:
                    "We do not settle for periodic reviews; instead, our technology and experts work hand-in-hand to analyze the performance of your solar assets continuously. This real-time approach allows us to promptly identify trends, anticipate challenges, and capitalize on opportunities.",
                },
                {
                  title: "Risk Pinpointing",
                  content:
                    "Through our continuous analysis, we pinpoint potential risks that may impact the performance of your solar assets. Whether it’s equipment malfunctions, environmental factors, or other variables, our proactive approach ensures that risks are identified early.",
                },
                {
                  title: "Underperformance Correction",
                  content:
                    "Our team takes swift action in the event of underperformance. We delve into the root causes, implement corrective measures, and ensure that your solar assets operate optimally, contributing to maintaining your portfolio’s overall health.",
                },
                {
                  title: "Comprehensive Transparency",
                  content:
                    "Our services provide comprehensive transparency, offering a detailed performance analysis for your entire asset by asset. This transparency gives you the information needed to make informed decisions and maximize the returns on your solar investments.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`accordion-item ${openIndex === index ? "active" : ""}`}
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

      case "24/7 Intelligent Issue Detection":
        return (
          <div className="service-content">
            <h2>24/7 Intelligent Issue Detection</h2>
            <p>
              Our technology forecasts energy generation based on weather conditions, detecting anomalies and minimizing false alerts and weather-related variations. Through remote symptom detection and root-cause diagnostics, we initiate service tickets to address actionable issues promptly.
            </p>
            <div className="accordion">
              {[
                {
                  title: "Weather-Based Forecasting",
                  content:
                    "Our services harness state-of-the-art forecasting technology, utilizing real-time weather data to predict energy generation patterns. This proactive approach allows us to anticipate potential issues and deviations, ensuring higher reliability in energy production.",
                },
                {
                  title: "Anomaly Detection",
                  content:
                    "Our team swiftly identifies anomalies in energy generation. The team is designed to minimize false alerts caused by transient weather-related variations, ensuring that alerts are focused on actionable issues.",
                },
                {
                  title: "Remote Symptom Detection",
                  content:
                    "Through remote monitoring, we detect symptoms of potential issues without the need for on-site visits. This reduces response time and allows for early intervention, enhancing the overall efficiency of your solar assets.",
                },
                {
                  title: "Root Cause Diagnostics",
                  content:
                    "Our advanced diagnostics identify the root causes of performance issues. This segmentation allows our teams to prioritize and concentrate on resolving genuine issues, enhancing the speed and efficacy of issue resolution.",
                },
                {
                  title: "Proactive Issue Resolution",
                  content:
                    "The ability to identify and understand root causes proactively enables our teams to address potential challenges before they escalate. This minimizes downtime and maximizes the overall efficiency of your solar assets.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`accordion-item ${openIndex === index ? "active" : ""}`}
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

      case "5-Star Client Satisfaction":
        return (
          <div className="service-content">
            <h2>5-Star Client Satisfaction</h2>
            <p>
              Our 5-star service ratings, proactive customer support, and real-time access to individual system performance and service history guarantee client satisfaction.
            </p>
            <div className="accordion">
              {[
                {
                  title: "High Service Ratings",
                  content:
                    "Our commitment to excellence is reflected in consistently high 5-star service ratings, affirming the superior quality and satisfaction our clients experience with our solar power services.",
                },
                {
                  title: "Proactive Support",
                  content:
                    "We prioritize client needs through proactive customer support, addressing potential challenges before they impact performance and ensuring a seamless and gratifying experience throughout the solar asset lifecycle.",
                },
                {
                  title: "Real-Time Access",
                  content:
                    "Clients benefit from instant access to individual system performance and service history, providing transparency and empowering them with the insights needed to make informed decisions.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`accordion-item ${openIndex === index ? "active" : ""}`}
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

      case "Mitigate Unproductive Investments":
        return (
          <div className="service-content">
            <h2>Mitigate Unproductive Investments</h2>
            <p>
              Unhappy homeowners withholding lease payments can undermine your portfolio’s performance. Partner with us to collaborate with the nation's largest financiers, ensuring swift remediation of lease-holder performance issues and securing top service ratings.
            </p>
            <div className="accordion">
              {[
                {
                  title: "Lease-Holder Resolution",
                  content:
                    "We specialize in addressing challenges posed by unhappy homeowners withholding lease payments, actively mitigating issues that can negatively impact your portfolio’s overall performance.",
                },
                {
                  title: "Collaboration with Financiers",
                  content:
                    "Partnering with us means accessing collaborative efforts with the nation’s largest financiers. This strengthens the financial aspects of your portfolio and brings influential stakeholders to the table.",
                },
                {
                  title: "Top Service Ratings",
                  content:
                    "Our tailored strategies and swift remediation resolve issues efficiently and contribute to securing top service ratings, enhancing the reputation of your solar portfolio.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`accordion-item ${openIndex === index ? "active" : ""}`}
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

      case "Operations and Reporting Excellence":
        return (
          <div className="service-content">
            <h2>Operations and Reporting Excellence</h2>
            <p>
              We seamlessly integrate with billing partners, service networks, CRM systems, and monitoring platforms to alleviate the burden of managing large-scale portfolios. Experience a hassle-free ownership journey with us.
            </p>
            <div className="accordion">
              {[
                {
                  title: "Seamless Integration",
                  content:
                    "Our services offer seamless integration with various components, including billing partners, service networks, CRM systems, and monitoring platforms. This integration streamlines operations, alleviating the complexities of managing large-scale solar portfolios.",
                },
                {
                  title: "Hassle-Free Ownership",
                  content:
                    "Experience a hassle-free ownership journey as we navigate the intricacies of managing large-scale portfolios. Our integrated approach ensures operational excellence, allowing you to focus on strategic aspects.",
                },
                {
                  title: "Exemplary Reporting",
                  content:
                    "Benefit from exemplary reporting systems that provide comprehensive insights into the performance and health of your solar assets. Our reporting excellence ensures transparency, enabling informed decisions.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`accordion-item ${openIndex === index ? "active" : ""}`}
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

      case "Seasoned Executive Leadership":
        return (
          <div className="service-content">
            <h2>Seasoned Executive Leadership</h2>
            <p>
              Our leadership team is comprised of veterans in financial services and portfolio management.
            </p>
            <div className="accordion">
              {[
                {
                  title: "Financial Expertise",
                  content:
                    "Our leadership team consists of seasoned veterans with extensive financial services and portfolio management expertise. Their wealth of experience brings strategic insights to navigate and optimize your solar investments.",
                },
                {
                  title: "Strategic Approaches",
                  content:
                    "Leveraging the financial acumen of our seasoned executives, we craft strategic approaches to enhance the financial performance of your solar portfolio. Their proven track record ensures a well-informed approach.",
                },
                {
                  title: "Industry Nuance",
                  content:
                    "With a leadership team boasting in-depth experience in portfolio management, we bring a nuanced understanding of the solar industry’s unique challenges. This expertise tailors our services to meet your specific needs.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`accordion-item ${openIndex === index ? "active" : ""}`}
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
    <>
      <div className="portfolio-container">
        {/* Sidebar */}
        <div className="portfolio-sidebar">
          <div className="portfolio-top">
            <h2 className="portfolio-heading">Our Services</h2>
            <ul className="portfolio-menu">
              <li onClick={() => setSelectedService("Optimize Your Returns")}>
                Optimize Your Returns
              </li>
              <li onClick={() => setSelectedService("Enhance Performance Transparency")}>
                Enhance Performance Transparency
              </li>
              <li onClick={() => setSelectedService("24/7 Intelligent Issue Detection")}>
                24/7 Intelligent Issue Detection
              </li>
              <li onClick={() => setSelectedService("5-Star Client Satisfaction")}>
                5-Star Client Satisfaction
              </li>
              <li onClick={() => setSelectedService("Mitigate Unproductive Investments")}>
                Mitigate Unproductive Investments
              </li>
              <li onClick={() => setSelectedService("Operations and Reporting Excellence")}>
                Operations and Reporting Excellence
              </li>
              <li onClick={() => setSelectedService("Seasoned Executive Leadership")}>
                Seasoned Executive Leadership
              </li>
            </ul>
          </div>

          <div className="portfolio-bottom">
            <a href="../../Files/AGS-Flyer(3).png" download>
              <button>Company Brochure</button>
            </a>
            <a href="/files/45days-free-service.pdf" download>
              <button>45 Days Free Service</button>
            </a>
          </div>
        </div>

        {/* Content */}
        <div className="portfolio-content">{renderContent()}</div>
      </div>
    </>
  );
};

export default PortfolioServices;